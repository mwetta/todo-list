import projectListController from './projectListController.js';
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
        console.log(newToDo.getProject());
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

    const editToDo = (toDoId, newToDo) => {
        let currentToDos = toDos();
        let index = currentToDos.findIndex(toDo=>toDo.getId() === toDoId);
        currentToDos.splice(index, 1);
        currentToDos.push(newToDo);
        let updatedToDos = updateToDoList(currentToDos);
        storageCoordinator.store('todos', JSON.stringify(updatedToDos));
        projectListController.editToDo(newToDo);
        //known issue = if reassigning to another project, does not "reassign", simply saves updated task to newly assigned project
    }

    const getToDoList = () => toDos();

    const remove =(toDoId) => {
        let currentToDos = toDos(); 
        let index = currentToDos.findIndex(toDo=>toDo.getId() === toDoId);
        currentToDos.splice(index, 1);
        let updatedToDos = updateToDoList(currentToDos);
        storageCoordinator.store('todos', JSON.stringify(updatedToDos));
    }

    return {addToDo, getToDoList, editToDo, remove}
})();

export default toDoListController;