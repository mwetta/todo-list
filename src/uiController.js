import Project from './Project.js'
import writeToProjectList from './projectListController.js'
import projectController from './projectController'
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
        let main = document.getElementById('main');

        let projectBtn = document.createElement('button');
        projectBtn.setAttribute('id', 'project-button');
        projectBtn.textContent = 'add project';
        projectBtn.addEventListener('click', () => {
                clearMain(projectBtn.id);
            })
            
        let toDoBtn = document.createElement('button');
        toDoBtn.textContent = 'add to do';
        toDoBtn.setAttribute('id', 'todo-button');
        toDoBtn.addEventListener('click', () => {
            clearMain(toDoBtn.id);
        })

        main.appendChild(projectBtn);
        main.appendChild(toDoBtn);
    }

    const writeProjectForm = () => {
        let main = document.getElementById('main');
        let projectForm = document.createElement('form');

        let newProjectNameLabel = document.createElement('label');
        newProjectNameLabel.setAttribute('for', 'project-name');
        newProjectNameLabel.textContent = 'Project Name';
        let newProjectName = document.createElement('input');
        newProjectName.setAttribute('type', 'text');
        newProjectName.setAttribute('id', 'project-name');
        projectForm.appendChild(newProjectNameLabel);
        projectForm.appendChild(newProjectName);
        
        let newProjectDescriptionLabel = document.createElement('label');
        newProjectDescriptionLabel.setAttribute('for', 'project-description');
        newProjectDescriptionLabel.textContent = 'Project Description';
        let newProjectDescription = document.createElement('input');
        newProjectDescription.setAttribute('type', 'text');
        newProjectDescription.setAttribute('id', 'project-description');
        projectForm.appendChild(newProjectDescriptionLabel);
        projectForm.appendChild(newProjectDescription);

        let projectFormButton = document.createElement('button');
        projectFormButton.setAttribute('id', 'new-project-button');
        projectFormButton.textContent = 'Add project';
        projectFormButton.addEventListener('click', () => {
            projectController.create(newProjectName.value, newProjectDescription.value);
            clearMain(projectFormButton.id);
        })
        projectForm.appendChild(projectFormButton);


        main.appendChild(projectForm);
    }

    const writeToDoForm = () => {
        console.log('trigger to do form')
    }

return {writeMenu, writeDefault, writeAddForm, writeProjectForm, writeToDoForm}
})();

export default uiController;

// consider document query selector all buttons, add event listener click that clear's main and call's click handler