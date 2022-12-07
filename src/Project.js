import { v4 as uuidv4 } from 'uuid';
import { format } from 'date-fns'

const Project = (projectName, projectDescription) =>
{
    let id = uuidv4();
    let date = Date.now();
    let name = projectName;
    let description = projectDescription;
    
    const getId = () => id;
    const getName = () => name;
    const getDescription = () => description;
    const getDate = () => date;
    const getProject = () => {
        let obj = {'id': id, 'name': name, 'description': description, 'date': date,};
        return obj
    }
    const setProject = (storedObject) => {
        id = storedObject.id; 
        date = storedObject.date;
        name = storedObject.name;
        description = storedObject.description;
    }

    return { getId, getName, getDescription, getDate, getProject, setProject }
}

export default Project;