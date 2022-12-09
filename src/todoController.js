import projectListController from './projectListController.js';
import toDo from './toDo.js'

const toDoController = (() => {
    const create = (name, dueDate, description, priority, notes, project) => {
        let newToDo = toDo(name, dueDate, description, priority, notes, project);
        projectListController.addToDo(newToDo)
    }

    const edit = (toDoId) => {
        // use toDoId to identify specific project
        // take new name and description
        // hand off to storage, which in turn hands off to DOM controller
    }

    const remove = (toDoId) => {
        // use toDoId to identify specific project
        // invoke remove from storage
    }


    return {create, edit, remove}
})();

export default toDoController;