import Project from './Project.js'
import projectListController from './projectListController.js'

const projectController = (() => {
    const create = (name, description) => {
        let newProject = Project(name, description);
        projectListController.addProject(newProject);
    }

    const edit = () => {

    }
    
    const remove = () => {

    }
    return {create};
})();

export default projectController;