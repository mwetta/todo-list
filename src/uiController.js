import Project from './Project.js'
import writeToProjectList from './projectListController.js'
import projectListController from './projectListController.js'
import { format } from 'date-fns'
import clickHandler from './clickHandler.js'

const uiController = (() => {
    // let content = window.document.getElementById(elm);


    const writeMenu = (elm) => {
        let content = window.document.getElementById(elm);
        let menu = document.createElement('div');
        menu.setAttribute('id', 'menu-list');
        let menuList = document.createElement('ul');
        menu.appendChild(menuList);
        content.appendChild(menu);
        const newMenuItem = (id) => {
            let menuItem = document.createElement('li');
            menuItem.setAttribute('id', `${id}`);
            menuItem.classList.add('inactive');
            menuItem.addEventListener('click', () => {
                let activeItems = document.querySelectorAll('.active'); 
                activeItems.forEach((activeItem) => {
                    activeItem.classList.remove('active');
                    activeItem.classList.add('inactive');
                })
                menuItem.classList.remove('inactive');
                menuItem.classList.add('active');
                clearMain(menuItem.id);
            })
            let menuP = document.createElement('p');
            menuP.textContent = `${id}`;
            menuItem.appendChild(menuP);
            menuList.appendChild(menuItem);
        }
        writeMain(content);

        newMenuItem('upcoming');
        newMenuItem('projects');
        newMenuItem('tasks');
        newMenuItem('add');
    }

    const writeMain = (content) => {
        let main = document.createElement('div');
        main.setAttribute('id', 'main');
        content.appendChild(main);
        writeDefault();
    }
    
    const clearMain = (id) => {
        let main = document.getElementById('main');
            while (main.firstChild) {
                console.log('will remove main');
                main.removeChild(main.firstChild);
            }
        clickHandler.rewriteContent(id);   
    }

    //currently set at default to show projects; ideal is to show upcoming tasks
    const writeDefault = () => {
        let projects = projectListController.getProjectList();
        projects.forEach(project => {
            let main = document.getElementById('main');
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

    const writeProjectsPage = () => {

    }

    const writeProjectPage = () => {

    }

    const writeAddForm = () => {
        console.log('here is where add gets triggered');
    }

return {writeMenu, writeDefault, writeAddForm}
})();

export default uiController;
