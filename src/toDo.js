import { v4 as uuidv4 } from 'uuid';

const toDo = (title, dueDate, description, priority, notes) => {
    let id = uuidv4;
    let dateCreated = Date();

    const getId = () => id;
    const getDateCreated = () => dateCreated;
    const getTitle = () => title;
    const getDueDate = () => dueDate;
    const getDescription = () => description;
    const getPriority = () => priority;
    const getNotes = () => notes;

        return {
            getId,
            getDateCreated,
            getTitle,
            getDueDate,
            getDescription,
            getPriority,
            getNotes
        }
}

export default toDo;