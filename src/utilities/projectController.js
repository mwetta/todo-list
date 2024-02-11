import Project from './Project.js'
import projectListController from './projectListController.js'

const projectController = (() => {
    const create = (data) => {
        let newProject = Project(data.projectName, data.projectDescription);
        projectListController.addProject(newProject);
    }

    const edit = (projectId, newName, newDescription) => {
        let oldProject = retrieve(projectId).getProject();
        let newProject = Project(newName, newDescription);
        newProject.updateProject(oldProject);
        projectListController.editProject(projectId, newProject);
    }
    
    const remove = (projectId) => {
        projectListController.remove(retrieve(projectId));
    }

    const retrieve = (projectId) => {
        let projectList = projectListController.getProjectList();
        let index = projectList.findIndex(project=>project.getId() === projectId);
        return projectList[index];
    }

    return {create, retrieve, edit, remove};
})();

export default projectController;