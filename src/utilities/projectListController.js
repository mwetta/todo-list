import projectController from './projectController.js'
import Project from './Project.js'
import storageCoordinator from './storageCoordinator.js'

const projectListController = (() => {
    const projects = () => {
        if (!localStorage.getItem('projects')) 
        {   let projectList = new Array;
            return projectList
        } else { 
            let projectList = localStorage.getItem('projects');
            let currentProjects = JSON.parse(projectList);
            let currentProjectsObjects = [];
            // pulls projects from parsed array and iterates through to return new project objects
            currentProjects.forEach(project => {
                let newProject = Project(project.name, project.description);
                newProject.setProject(project);
                currentProjectsObjects.push(newProject);
            });
            return currentProjectsObjects
        }
    }    


    const addProject = (newProject) => {
        let currentProjects = projects();
        currentProjects.push(newProject);
        let newCurrentProjects = updateProjectList(currentProjects);
        storageCoordinator.store('projects', JSON.stringify(newCurrentProjects)); 
    }

    const editProject = (projectId, newProject) => {
        let currentProjects = projects();
        let index = currentProjects.findIndex(project=>project.getId() === projectId);
        currentProjects.splice(index, 1);
        currentProjects.push(newProject);
        let updatedProjects = updateProjectList(currentProjects);
        storageCoordinator.store('projects', JSON.stringify(updatedProjects));
    }

    const addToDo = (newToDo) => {
        let currentProjects = projects();
        let toDoProject = newToDo.getProject();
        let toDo = newToDo.getToDo();
        let index = currentProjects.findIndex(project=>project.getId() === toDoProject);
        let currentProject = currentProjects[index];
        currentProject.addToDoToProject(toDo);
        let newCurrentProjects = updateProjectList(currentProjects);
        storageCoordinator.store('projects', JSON.stringify(newCurrentProjects)); 
    }

    const editToDo = (updatedToDo) => {
        let toDo = updatedToDo.getToDo();
        let currentProject = projectController.retrieve(toDo.project);
        currentProject.removeToDoFromProject(toDo);
        currentProject.addToDoToProject(toDo);
        editProject(currentProject.getId(), currentProject);
    }

    const removeToDoFromProject = (toDoProjectId, toDoId) => {
        let currentProject = projectController.retrieve(toDoProjectId);
        currentProject.removeToDoFromProject(toDoId);
        editProject(toDoProjectId, currentProject);
    }

    const removeProject = (currentProject) => {
        
    }

    //returns string version of all objects in project list to send to storage
    const updateProjectList = (currentProjects) => {
        let newCurrentProjects = [];
        currentProjects.forEach(project => {
            let newProject = project.getProject();
            newCurrentProjects.push(newProject);
        });
        return newCurrentProjects
    }

    const getProjectList = () => projects();

    return {addProject, removeProject, getProjectList, addToDo, editProject, editToDo, removeToDoFromProject}
})();

export default projectListController;
