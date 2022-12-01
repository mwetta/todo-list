import { hoursToMinutes } from 'date-fns';
import projectController from './projectController.js'
import Project from './Project.js'
import storageCoordinator from './storageCoordinator.js'

const writeToProjectList = (() => {
    const projects = () => {
        if (!localStorage.getItem('projects')) 
        {   console.log('does not detect projects')
            let projectList = new Array;
            return projectList
        } else { 
            console.log('does detect projects');
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
    
    return {addProject, removeProject}
})();

export default writeToProjectList;
