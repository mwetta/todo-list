import Project from './Project.js'
import writeToProjectList from './projectListController.js'
import projectListController from './projectListController.js'

const uiController = (() => {

    const writeMenu = (elm) => {
        let content = window.document.getElementById(elm);
        let menu = document.createElement('div');
        menu.setAttribute('id', 'menu');
        content.appendChild(menu);
    }

    const rewriteContent = () => {
        // will take id of object clicked and write full page
    }

    const writeProjects = () => {

    }

    const writeProject = () => {

    }

return {writeMenu}
})();

export default uiController;
