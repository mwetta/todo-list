import Project from './Project.js';
import toDo from './toDo.js';
import projectController from './projectController.js';
import toDoController from './toDoController.js'
import projectListController from './projectListController.js'
import uiController from './uiController.js'

document.addEventListener("DOMContentLoaded", function (event) {
    uiController.writeMenu("content");
})

projectController.create('eportfolio', 'all the tasks for eportfolio');

const createDefaultProject = () => {
    let currentProjects = projectListController.getProjectList();
    console.log(currentProjects);
    console.log(currentProjects[0].projectName);
    let checkForDefault = currentProjects.find(currentProject => currentProject.projectName == 'default');
    console.log(checkForDefault);
    //think this isn't working because of issues with JSON.stringify and JSON.parse not correctly reading projectName
    if (checkForDefault === false) {
        projectController.create('default', 'default project for unassigned tasks')
    }
}

createDefaultProject();