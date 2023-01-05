import { v4 as uuidv4 } from 'uuid';
import { format } from 'date-fns'

const Project = (projectName, projectDescription) =>
{
    let id = uuidv4();
    let date = Date.now();
    let name = projectName;
    let description = projectDescription;
    let createdDate; // have not done anything with this
    
    const getId = () => id;
    const getName = () => name;
    const getDescription = () => description;
    const getDate = () => date;
    //method used to store project
    const getProject = () => {
        let obj = {'id': id, 'name': name, 'description': description, 'date': date, 'todos': todos};
        return obj
    }
    // method used when retrieving project from storage
    const setProject = (storedObject) => {
        id = storedObject.id; 
        date = storedObject.date;
        name = storedObject.name;
        description = storedObject.description;
        todos = storedObject.todos;
    }

    const updateProject = (storedObject) => {
        id = storedObject.id;
        createdDate = storedObject.date;
        todos = storedObject.todos;
    }

    let todos = [];
    const addToDoToProject = (todo) => todos.push(todo);
    const removeToDoFromProject = (oldToDo) => {
        let index = todos.findIndex(todo=>todo.id === oldToDo.id);
        todos.splice(index, 1);
    }

    let getTodos = () => todos;

    return { getId, getName, getDescription, getDate, getProject, setProject, addToDoToProject, getTodos, updateProject, removeToDoFromProject}
}

export default Project;