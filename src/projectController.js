import Project from './Project.js'

const projectController = (() => {
    const create = (name, description) => {
        let newProject = Project(name, description);
        return newProject
    }

    const edit = () => {

    }
    
    const remove = () => {

    }
    return {createProject};
})();

export default projectController;