const Project = (projectName, projectDescription) =>
{
    const getProjectName = () => projectName;
    const getProjectDescription = () => projectDescription;

    return {getProjectName, getProjectDescription}
}

export default Project;