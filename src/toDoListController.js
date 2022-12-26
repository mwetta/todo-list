import storageCoordinator from './storageCoordinator.js';
import toDo from './toDo.js'

const toDoListController = (() => {

    const toDos = () => {
        if (!localStorage.getItem('todos')) 
        {   let toDoList = new Array;
            return toDoList
        } else { 
            let toDoList = localStorage.getItem('todos');
            let currentToDos = JSON.parse(toDoList);
            let currentToDosObjects = [];
            // pulls projects from parsed array and iterates through to return new project objects
            currentToDos.forEach(todo => {
                let newTodo = toDo(todo.name, todo.description);
                newTodo.setToDo(todo);
                currentToDosObjects.push(newTodo);
            });
            return currentToDosObjects
        }

    }
    const addToDo = (newToDo) => {
        let currentToDos = toDos();
        currentToDos.push(newToDo);
        let newCurrentToDos = updateToDoList(currentToDos);
        storageCoordinator.store('todos', JSON.stringify(newCurrentToDos));
    }

    const updateToDoList = (currentToDos) => {
        let newCurrentToDos = [];
        currentToDos.forEach(toDo => {
            let newToDo = toDo.getToDo();
            newCurrentToDos.push(newToDo);
        });
        return newCurrentToDos
    }

    const getToDoList = () => toDos();

    return {addToDo, getToDoList}
})();

export default toDoListController;