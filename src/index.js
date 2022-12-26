import projectController from './projectController.js';
import projectListController from './projectListController.js'
import uiController from './uiController.js'

document.addEventListener("DOMContentLoaded", function (event) {
    uiController.writeMenu("content");
})

// default must always be named default, probably not the best way to define -- make uneditable?
const createDefaultProject = () => {
    let currentProjects = projectListController.getProjectList();
    let checkForDefault = currentProjects.find(currentProject => currentProject.getName() === 'default');
    if (checkForDefault === undefined) {
        projectController.create('default', 'default project for unassigned tasks')
    }
}

createDefaultProject();
