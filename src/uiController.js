import Project from './Project.js'
import writeToProjectList from './projectListController.js'
import projectListController from './projectListController.js'
import { format } from 'date-fns'

const uiController = (() => {

    const writeMenu = (elm) => {
        let content = window.document.getElementById(elm);
        let menu = document.createElement('div');
        menu.setAttribute('id', 'menu');
        let menuList = document.createElement('ul');
        let menuItem = document.createElement('li');
        let menuP = document.createElement('p');
        menuP.textContent = 'menu';
        menuItem.appendChild(menuP);
        menuList.appendChild(menuItem);
        menu.appendChild(menuList);
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
            projectDiv.classList.add('project');
            main.appendChild(projectDiv);

            let name = project.getName();
            let description = project.getDescription();
            let date = format(project.getDate(), 'MM/dd/yyy');
            console.log(date);

            let nameDiv = document.createElement('div');
            let nameP = document.createElement('h2');
            nameP.textContent = `${name}`;
            let descriptionP = document.createElement('p');
            descriptionP.textContent = `${description}`;
            nameDiv.appendChild(nameP);
            nameDiv.appendChild(descriptionP);
            nameDiv.classList.add('name');
            projectDiv.appendChild(nameDiv);

            let detailsDiv = document.createElement('div');
            let dateP = document.createElement('p');
            dateP.textContent = `${date}`;
            detailsDiv.appendChild(dateP);
            detailsDiv.classList.add('details');
            projectDiv.appendChild(detailsDiv);
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
