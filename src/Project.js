import { v4 as uuidv4 } from 'uuid';
import { format, formatDistance, formatRelative, subDays } from 'date-fns'

const Project = (projectName, projectDescription) =>
{
    let id = uuidv4();
    let projectId = `${id}_project`;
    let date = format(new Date(), 'MM/dd/yyyy');

    const getId = () => projectId;
    const getName = () => projectName;
    const getDescription = () => projectDescription;
    const getProject = () => `projectId: ${projectId}; projectName: ${projectName}; projectDescription: ${projectDescription}`;
    const getDateCreated = () => date;

    return {getId, getName, getDescription, getProject, getDateCreated}
}

export default Project;