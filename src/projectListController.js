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
            console.log(currentProjects);
            return currentProjects 
        }
    }    

    const addProject = (newProject) => {
        let currentProjects = projects();
        let text = newProject.getProject();
        console.log(text);
        currentProjects.push(text);
        console.log(currentProjects);
        storageCoordinator.store('projects', JSON.stringify(currentProjects));
    }

    const removeProject = (currentProject) => {
        
    }

    const getProjectList = () => projects();

    return {addProject, removeProject, getProjectList}
})();

export default projectListController;
