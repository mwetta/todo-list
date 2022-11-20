import toDo from './toDo.js'

const toDoController = (() => {
    const create = (title, dueDate, description, priority, notes) => {
        let newToDo = toDo(title, dueDate, description, priority, notes);
        return newToDo
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