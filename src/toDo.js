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
        let obj = {
            'id': id,
            'date': date,
            'name': name,
            'dueDate': dueDate,
            'description': description,
            'priority': priority,
            'notes': notes
        }
        return obj
    }
    const setToDo = (storedObject) => {
        id = storedObject.id; 
        date = storedObject.date;
        name = storedObject.name;
        dueDate = storedObject.dueDate;
        description = storedObject.description;
        priority = storedObject.priority;
        notes = storedObject.notes;
    }

        return {
            getId,
            getDateCreated,
            getName,
            getDueDate,
            getDescription,
            getPriority,
            getNotes,
            getProject,
            getToDo,
            setToDo
        }
}

export default toDo;