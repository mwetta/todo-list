import { v4 as uuidv4 } from 'uuid';

const toDo = (name, dueDate, description, priority, notes, project) => {
    let id = uuidv4();
    let date = format(new Date(), 'MM/dd/yyyy')

    const getId = () => id;
    const getDateCreated = () => date;
    const getName = () => name;
    const getDueDate = () => dueDate;
    const getDescription = () => description;
    const getPriority = () => priority;
    const getNotes = () => notes;
    const getProject = () => {
        if (project === undefined) { return 'default'}
        else { 
            // need to reference projectId through UI and reference list
        };}
    const getToDo = () => { 
    `{ toDoId: '${id}', 
    toDoName: '${name}', 
    toDoDueDate: ${dueDate}, 
    toDoDescription: '${description}', 
    toDoPriority: '${priority}',
    toDoNotes: '${notes}',
    toDoProject: '${notes},
    toDoCreationDate: ${date},
     }`;}

        return {
            getId,
            getDateCreated,
            getName,
            getDueDate,
            getDescription,
            getPriority,
            getNotes,
            getProject,
            getToDo
        }
}

export default toDo;