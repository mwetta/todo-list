import storageCoordinator from './storageCoordinator.js';
import toDo from './toDo.js'

const toDoListController = (() => {

    const toDos = () => {
        if (!localStorage.getItem('toDos')) 
        {   let toDoList = new Array;
            return toDoList
        } else { 
            let toDoList = localStorage.getItem('toDos');
            let currentToDos = JSON.parse(toDoList);
            let currentToDosObjects = [];
            // pulls projects from parsed array and iterates through to return new project objects
            currentToDos.forEach(todo => {
                let newTodo = Project(todo.name, todo.description);
                newTodo.setProject(todo);
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

    return {addToDo}
})();

export default toDoListController;