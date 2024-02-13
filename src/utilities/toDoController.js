import projectListController from './projectListController.js';
import toDo from './toDo.js'
import toDoListController from './toDoListController.js';

const toDoController = (() => {
    const create = (data) => {
        let newToDo = toDo(data.name, data.dueDate, data.description, data.priority, data.notes, data.project);
        projectListController.addToDo(newToDo);
        toDoListController.addToDo(newToDo);
    }

    const retrieve = (toDoId) => {
        let list = toDoListController.getToDoList();
        let index = list.findIndex(toDo=>toDo.getId() === toDoId);
        return list[index];
    }

    const edit = (toDoId, newName, newDueDate, newDescription, newPriority, newNotes, newProject) => {
        let oldToDo = retrieve(toDoId).getToDo();
        let newToDo = toDo(newName, newDueDate, newDescription, newPriority, newNotes, newProject);
        newToDo.updateToDo(oldToDo);
        toDoListController.editToDo(toDoId, newToDo);
    }

    const remove = (toDoId) => {
        let currentToDo = retrieve(toDoId);
        toDoListController.remove(toDoId);
        projectListController.removeToDoFromProject(currentToDo.getProject(), toDoId);
    }


    return {create, edit, remove, retrieve}
})();

export default toDoController;