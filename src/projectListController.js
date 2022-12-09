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
            let newCurrentProjects = [];
            currentProjects.forEach(project => {
                let newProject = Project(project.name, project.description);
                newProject.setProject(project);
                newCurrentProjects.push(newProject);
            });
            return newCurrentProjects
        }
    }    

    const addProject = (newProject) => {
        let currentProjects = projects();
        currentProjects.push(newProject);
        let newCurrentProjects = updateProjectList(currentProjects);
        storageCoordinator.store('projects', JSON.stringify(newCurrentProjects)); 
    }

    const addToDo = (newToDo) => {
        let currentProjects = projects();
        let toDoProject = newToDo.getProject();
        let task = newToDo.getToDo();
        let index = currentProjects.findIndex(project=>project.getId() === toDoProject);
        let currentProject = currentProjects[index];
        currentProject.addTaskToProject(task);
        let newCurrentProjects = updateProjectList(currentProjects);
        storageCoordinator.store('projects', JSON.stringify(newCurrentProjects)); 
    }

    const removeProject = (currentProject) => {
        
    }

    const updateProjectList = (currentProjects) => {
        let newCurrentProjects = [];
        currentProjects.forEach(project => {
            let newProject = project.getProject();
            newCurrentProjects.push(newProject);
        });
        return newCurrentProjects
    }

    const getProjectList = () => projects();

    return {addProject, removeProject, getProjectList, addToDo}
})();

export default projectListController;
