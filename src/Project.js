import { v4 as uuidv4 } from 'uuid';
import { format } from 'date-fns'

const Project = (projectName, projectDescription) =>
{
    let id = uuidv4();
    let date = format(new Date(), 'MM/dd/yyyy');

    const getId = () => id;
    const getName = () => projectName;
    const getDescription = () => projectDescription;
    const getProject = () => `{ projectId: '${id}', projectName: '${projectName}', projectDescription: '${projectDescription}', projectCreationDate: ${date} }`;
    const getDateCreated = () => date;

    return {getId, getName, getDescription, getProject, getDateCreated}
}

export default Project;