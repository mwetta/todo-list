import { v4 as uuidv4 } from 'uuid';

const Project = (projectName, projectDescription) =>
{
    let id = uuidv4();
    let projectId = `${id}_project`;

    const getId = () => projectId;
    const getName = () => projectName;
    const getDescription = () => projectDescription;
    const getProject = () => `projectId: ${projectId}; projectName: ${projectName}; projectDescription: ${projectDescription}`;

    return {getId, getName, getDescription, getProject}
}

export default Project;