import Project from './Project.js'
import writeToProjectList from './writeToProjectList.js'

const projectController = (() => {
    const create = (name, description) => {
        let newProject = Project(name, description);
        writeToProjectList.addProject(newProject);
    }

    const edit = () => {

    }
    
    const remove = () => {

    }
    return {create};
})();

export default projectController;