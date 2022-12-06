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
            return currentProjects 
        }
    }    

    const addProject = (newProject) => {
        let currentProjects = projects();
        currentProjects.push(newProject.getProject());
        storageCoordinator.store('projects', JSON.stringify(currentProjects));
    }

    const removeProject = (currentProject) => {
        
    }

    const getProjectList = () => projects();

    return {addProject, removeProject, getProjectList}
})();

export default projectListController;
