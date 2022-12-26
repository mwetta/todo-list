import Project from './Project.js'
import projectListController from './projectListController.js'

const projectController = (() => {
    const create = (name, description) => {
        let newProject = Project(name, description);
        projectListController.addProject(newProject);
    }

    const edit = (projectId, newName, newDescription) => {
        let oldProject = retrieve(projectId).getProject();
        let newProject = Project(newName, newDescription);
        newProject.updateProject(oldProject);
        projectListController.editProject(projectId, newProject);
    }
    
    const remove = () => {

    }

    const retrieve = (projectId) => {
        let projectList = projectListController.getProjectList();
        let index = projectList.findIndex(project=>project.getId() === projectId);
        return projectList[index];
    }

    return {create, retrieve, edit};
})();

export default projectController;