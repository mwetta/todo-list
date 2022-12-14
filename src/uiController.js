import Project from './Project.js'
import writeToProjectList from './projectListController.js'
import projectListController from './projectListController.js'

const uiController = (() => {

    const writeMenu = (elm) => {
        let content = window.document.getElementById(elm);
        let menu = document.createElement('div');
        menu.setAttribute('id', 'menu');
        content.appendChild(menu);
        writeMain(content);
    }

    const writeMain = (content) => {
        let main = document.createElement('div');
        main.setAttribute('id', 'main');
        content.appendChild(main);
        writeDefault(main);
    }

    //currently set at default to show projects; ideal is to show upcoming tasks
    const writeDefault = (main) => {
        let projects = projectListController.getProjectList();
        projects.forEach(project => {
            let projectDiv = document.createElement('div');
            let id = project.getId();
            projectDiv.setAttribute('id', `${id}`);
            main.appendChild(projectDiv);
            })
    }

    const rewriteContent = () => {
        // will take id of object clicked and write full page
    }

    const writeProjects = () => {

    }

    const writeProject = () => {

    }

    const writeAddForm = (element) => {
        // if element = project 
            // call add project 
            // associate form fields with each part
        // if element = todo
            // 
    }

return {writeMenu}
})();

export default uiController;
