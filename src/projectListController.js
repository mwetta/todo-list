import { hoursToMinutes } from 'date-fns';
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

    const editProject = (projectId, newName, newDescription) => {
        let currentProjects = projects();
        let index = currentProjects.findIndex(project=>project.getId() === projectId);
        let oldProject = currentProjects[index].getProject();
        currentProjects.splice(index, 1);
        let newProject = Project(newName, newDescription);
        newProject.updateProject(oldProject);
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

    return {addProject, removeProject, getProjectList, addToDo, editProject}
})();

export default projectListController;
