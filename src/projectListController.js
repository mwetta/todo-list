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
            let newCurrentProjects = new Array;
            currentProjects.forEach(project => {
                let newProject = Project(project.name, project.description);
                newProject.setProject(project);
                newCurrentProjects.push(newProject);
                // consider refactoring to use classes and new constructors
            });
            console.log(newCurrentProjects);
            return currentProjects 
        }
    }    

    const addProject = (newProject) => {
        let currentProjects = projects();
        currentProjects.push(newProject.getProject());
        console.log(newProject);
        // when retrieving projects, how do i get the methods back on them?
        storageCoordinator.store('projects', JSON.stringify(currentProjects));
    }

    const removeProject = (currentProject) => {
        
    }

    const getProjectList = () => projects();

    return {addProject, removeProject, getProjectList}
})();

export default projectListController;
