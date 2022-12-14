import Project from './Project.js';
import toDo from './toDo.js';
import projectController from './projectController.js';
import toDoController from './toDoController.js'
import projectListController from './projectListController.js'
import uiController from './uiController.js'

document.addEventListener("DOMContentLoaded", function (event) {
    uiController.writeMenu("content");
})

// projectController.create('this project', 'all the tasks for the this project');
// toDoController.create('first competency', 'dueDate', 'description', 'priority', 'notes', 'd205df8d-ff54-40c9-96a4-6d89d418640b');

const createDefaultProject = () => {
    let currentProjects = projectListController.getProjectList();
    let checkForDefault = currentProjects.find(currentProject => currentProject.getName() === 'default');
    if (checkForDefault === undefined) {
        projectController.create('default', 'default project for unassigned tasks')
    }
}

createDefaultProject();
