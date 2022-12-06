import Project from './Project.js'
import writeToProjectList from './projectListController.js'
import projectListController from './projectListController.js'

const uiController = (() => {

    const writeMenu = (elm) => {
        let content = window.document.getElementById(elm);
        console.log(content);
        let menu = document.createElement('div');
        menu.setAttribute('id', 'menu');
        content.appendChild(menu);
    }

return {writeMenu}
})();

export default uiController;