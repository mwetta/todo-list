import Project from './Project.js'

const projectController = (() => {
    const createProject = (name, description) => {
        let newProject = Project(name, description);
        return newProject
    }

    const editProject = () => {

    }
    
    const deleteProject = () => {

    }
    return {createProject};
})();

export default projectController;