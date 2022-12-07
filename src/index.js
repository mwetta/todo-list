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
    let checkForDefault = currentProjects.find(currentProject => currentProject.name === 'default');
    if (checkForDefault === undefined) {
        projectController.create('default', 'default project for unassigned tasks')
    }
}

createDefaultProject();