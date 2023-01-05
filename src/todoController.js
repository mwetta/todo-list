import projectListController from './projectListController.js';
import toDo from './toDo.js'
import toDoListController from './toDoListController.js';

const toDoController = (() => {
    const create = (name, dueDate, description, priority, notes, project) => {
        console.log(project);
        let newToDo = toDo(name, dueDate, description, priority, notes, project);
        console.log(newToDo.getProject());
        projectListController.addToDo(newToDo);
        //seems to translate correctly here
        toDoListController.addToDo(newToDo);
    }

    const retrieve = (toDoId) => {
        let list = toDoListController.getToDoList();
        let index = list.findIndex(toDo=>toDo.getId() === toDoId);
        return list[index];

    }

    const edit = (toDoId, newName, newDueDate, newDescription, newPriority, newNotes, newProject) => {
        let oldToDo = retrieve(toDoId).getToDo();
        console.log(oldToDo);
        let newToDo = toDo(newName, newDueDate, newDescription, newPriority, newNotes, newProject);
        console.log(newToDo.getToDo());
        newToDo.updateToDo(oldToDo);
        console.log(newToDo.getToDo());
        toDoListController.editToDo(toDoId, newToDo);
    }

    const remove = (toDoId) => {
        // use toDoId to identify specific project
        // invoke remove from storage
    }


    return {create, edit, remove, retrieve}
})();

export default toDoController;