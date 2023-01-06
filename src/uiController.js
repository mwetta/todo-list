import Project from './Project.js'
import writeToProjectList from './projectListController.js'
import projectController from './projectController'
import projectListController from './projectListController.js'
import { format } from 'date-fns'
import clickHandler from './clickHandler.js'
import toDoController from './toDoController.js'

const uiController = (() => {

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
                clickHandler.rewriteContent(menuItem.id);   
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
                main.removeChild(main.firstChild);
            }
        // clickHandler.rewriteContent(id);   
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

            let toggleVisibile = document.createElement('div');
            let visibilityP = document.createElement('p');
            visibilityP.textContent = 'show/hide tasks';
            toggleVisibile.addEventListener('click', ()=>{
                clickHandler.projectHandler(id);
            })
            toggleVisibile.appendChild(visibilityP);
            projectDiv.appendChild(toggleVisibile);


            if (project.getName() != 'default'){
                let editProject = document.createElement('div');
                editProject.setAttribute('id', `edit-${id}`);
                let editProjectP = document.createElement('p');
                editProjectP.textContent = 'Edit Project';
                editProject.addEventListener('click', () => {
                    clearMain(id);
                    editProjectForm(id);
                })
                editProject.appendChild(editProjectP);
                projectDiv.appendChild(editProject);
            }
    
                let tasksDiv = document.createElement('div');
                tasksDiv.setAttribute('id', `tasks-${id}`);
                let tasksP = document.createElement('p');
                tasksP.textContent = 'Project Tasks';
                tasksDiv.classList.add('hide');
                tasksDiv.appendChild(tasksP);
                nameDiv.appendChild(tasksDiv);
            

            let tasks = document.createElement('div');
            let toDos = project.getTodos();
            toDos.forEach((toDo) => {
                    let taskItem = document.createElement('div');
                    taskItem.classList.add('task-container');
                    let toDoName = document.createElement('div');
                    toDoName.setAttribute('class', 'task');
                    toDoName.textContent = `${toDo.name}`;
                    toDoName.setAttribute('id', toDo.id);
                    let toDoDueDate = document.createElement('div');
                    toDoDueDate.setAttribute('class', 'task');
                    toDoDueDate.textContent = `Due ${toDo.dueDate}`;
                    let toDoEdit = document.createElement('div');
                    toDoEdit.setAttribute('class', 'task');
                    toDoEdit.textContent = 'Edit';
                    toDoEdit.addEventListener('click', () =>{
                        editToDoForm(toDo.id);
                    })
                    let toDoRemove = document.createElement('div');
                    toDoRemove.setAttribute('class', 'task');
                    toDoRemove.textContent = "x";
                    toDoRemove.addEventListener('click', () => {
                        toDoController.remove(toDo.id);
                        clearMain();
                        clickHandler.rewriteContent('remove-task');
                    })
                    taskItem.appendChild(toDoName);
                    taskItem.appendChild(toDoDueDate);
                    taskItem.appendChild(toDoEdit);
                    taskItem.appendChild(toDoRemove);
                    tasks.appendChild(taskItem);
                })
            tasksDiv.appendChild(tasks);
            })
    }

    const writeProjectPage = (id) => {
        let projectTasksDiv = document.getElementById(`tasks-${id}`);
        if (projectTasksDiv.classList.contains('hide')) {
            projectTasksDiv.classList.remove('hide');
            projectTasksDiv.classList.add('show');
        } else if (projectTasksDiv.classList.contains('show')) {
            projectTasksDiv.classList.remove('show');
            projectTasksDiv.classList.add('hide');
        }
    }

    const writeAddForm = () => {
        let main = document.getElementById('main');

        let projectBtn = document.createElement('button');
        projectBtn.setAttribute('id', 'project-button');
        projectBtn.textContent = 'add project';
        projectBtn.addEventListener('click', () => {
                clearMain(projectBtn.id);
                clickHandler.rewriteContent(projectBtn.id);   
            })
            
        let toDoBtn = document.createElement('button');
        toDoBtn.textContent = 'add to do';
        toDoBtn.setAttribute('id', 'todo-button');
        toDoBtn.addEventListener('click', () => {
            clearMain(toDoBtn.id);
            clickHandler.rewriteContent(toDoBtn.id);   
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
            clickHandler.rewriteContent(projectFormButton.id);   
        })
        projectForm.appendChild(projectFormButton);

        main.appendChild(projectForm);
    }

    const writeToDoForm = () => {
        let main = document.getElementById('main');
        let toDoForm = document.createElement('form');

        let newToDoNameLabel = document.createElement('label');
        newToDoNameLabel.setAttribute('for', 'to-do-name');
        newToDoNameLabel.textContent = 'ToDo Name';
        let newToDoName = document.createElement('input');
        newToDoName.setAttribute('type', 'text');
        newToDoName.setAttribute('id', 'to-do-name');
        toDoForm.appendChild(newToDoNameLabel);
        toDoForm.appendChild(newToDoName);
        
        let newToDoDescriptionLabel = document.createElement('label');
        newToDoDescriptionLabel.setAttribute('for', 'to-do-description');
        newToDoDescriptionLabel.textContent = 'ToDo Description';
        let newToDoDescription = document.createElement('input');
        newToDoDescription.setAttribute('type', 'text');
        newToDoDescription.setAttribute('id', 'to-do-description');
        toDoForm.appendChild(newToDoDescriptionLabel);
        toDoForm.appendChild(newToDoDescription);

        // due date
        let dueDateLabel = document.createElement('label');
        dueDateLabel.setAttribute('for', 'due-date');
        dueDateLabel.textContent = 'Due Date';
        let dueDate = document.createElement('input');
        dueDate.setAttribute('type', 'date');
        dueDate.setAttribute('id', 'due-date');
        toDoForm.appendChild(dueDateLabel);
        toDoForm.appendChild(dueDate);

        //priority 
        let priorityLabel = document.createElement('label');
        priorityLabel.setAttribute('for', 'to-do-priority');
        priorityLabel.textContent = 'Priority';
        let priority = document.createElement('select');
        priority.setAttribute('id', 'to-do-priority');
        let defaultOption = document.createElement('option');
        let highOption = document.createElement('option');
        let lowOption = document.createElement('option');
        defaultOption.setAttribute('value', 'default');
        defaultOption.textContent = 'Default';
        highOption.setAttribute('value', 'high');
        highOption.textContent = 'High';
        lowOption.setAttribute('value', 'low');
        lowOption.textContent = 'Low';
        priority.appendChild(defaultOption);
        priority.appendChild(highOption);
        priority.appendChild(lowOption);
        toDoForm.appendChild(priorityLabel);
        toDoForm.appendChild(priority);

        //notes
        let notesLabel = document.createElement('label');
        notesLabel.setAttribute('for', 'to-do-priority');
        notesLabel.textContent = 'Notes';
        let notes = document.createElement('textarea');
        notes.setAttribute('id', 'to-do-notes');
        toDoForm.appendChild(notesLabel);
        toDoForm.appendChild(notes);

        //project
        let projectLabel = document.createElement('label');
        projectLabel.setAttribute('for', 'project-choice');
        projectLabel.textContent = 'Project';
        let projectChoice = document.createElement('select');
        projectChoice.setAttribute('id', 'project-choice'); 
        projectChoice.setAttribute('name', 'project-choice');
            //project data
                let projectList = projectListController.getProjectList();
                projectList.forEach(project=> {
                    let option = document.createElement('option');
                    let value = project.getName();
                    let id = project.getId();
                    option.textContent = `${value}`;
                    option.setAttribute('value', `${id}`);
                    option.setAttribute('id', `${id}`);
                    projectChoice.appendChild(option);
                    });
        toDoForm.appendChild(projectLabel);
        toDoForm.appendChild(projectChoice);


        let toDoFormButton = document.createElement('button');
        toDoFormButton.setAttribute('id', 'new-to-do-button');
        toDoFormButton.textContent = 'Add ToDo';
        toDoFormButton.addEventListener('click', () => {

            toDoController.create(newToDoName.value, dueDate.value, newToDoDescription.value, priority.value,  notes.value, projectChoice.value);
            clearMain(toDoFormButton.id);
            clickHandler.rewriteContent(toDoFormButton.id);   
        })
        toDoForm.appendChild(toDoFormButton);

        main.appendChild(toDoForm);
    }

    const editProjectForm = (projectId) => {
        let main = document.getElementById('main');
        let projectForm = document.createElement('form');

        // let projectList = projectListController.getProjectList();
        // let index = projectList.findIndex(project=>project.getId() === projectId);
        // console.log(index);

        let project = projectController.retrieve(projectId);

        let name = project.getName();
        let description = project.getDescription();

        let header = document.createElement('p');
        header.textContent = `Editing ${name}`;

        let newProjectNameLabel = document.createElement('label');
        newProjectNameLabel.setAttribute('for', 'project-name');
        newProjectNameLabel.textContent = 'Project Name';
        let newProjectName = document.createElement('input');
        newProjectName.setAttribute('type', 'text');
        newProjectName.setAttribute('id', 'project-name');
        newProjectName.setAttribute('value', name);
        projectForm.appendChild(newProjectNameLabel);
        projectForm.appendChild(newProjectName);
        
        let newProjectDescriptionLabel = document.createElement('label');
        newProjectDescriptionLabel.setAttribute('for', 'project-description');
        newProjectDescriptionLabel.textContent = 'Project Description';
        let newProjectDescription = document.createElement('input');
        newProjectDescription.setAttribute('type', 'text');
        newProjectDescription.setAttribute('id', 'project-description');
        newProjectDescription.setAttribute('value', description);
        projectForm.appendChild(newProjectDescriptionLabel);
        projectForm.appendChild(newProjectDescription);

        let projectFormButton = document.createElement('button');
        projectFormButton.setAttribute('id', 'edit-project-button');
        projectFormButton.textContent = 'Edit project';
        projectFormButton.addEventListener('click', () => {
            clearMain();
            projectController.edit(projectId, newProjectName.value, newProjectDescription.value);
        })
        projectForm.appendChild(projectFormButton);
        main.appendChild(projectForm);
    }


    const editToDoForm = (id) => {
        let main = document.getElementById('main');
        let toDoForm = document.createElement('form');

        let toDo = toDoController.retrieve(id);
        console.log(toDo.getToDo());
        // they are being placed in the right location but still set to default

        let name = toDo.getName();
        let description = toDo.getDescription();
        let currentDueDate = toDo.getDueDate();
        let currentPriority = toDo.getPriority();
        let currentNotes = toDo.getNotes();
        let currentProject = toDo.getProject();
        console.log(currentPriority);
 

        let header = document.createElement('p');
        header.textContent = `Editing ${name}`;

        let newToDoNameLabel = document.createElement('label');
        newToDoNameLabel.setAttribute('for', 'to-do-name');
        newToDoNameLabel.textContent = 'ToDo Name';
        let newToDoName = document.createElement('input');
        newToDoName.setAttribute('type', 'text');
        newToDoName.setAttribute('id', 'to-do-name');
        newToDoName.setAttribute('value', name);
        toDoForm.appendChild(newToDoNameLabel);
        toDoForm.appendChild(newToDoName);
        
        let newToDoDescriptionLabel = document.createElement('label');
        newToDoDescriptionLabel.setAttribute('for', 'to-do-description');
        newToDoDescriptionLabel.textContent = 'ToDo Description';
        let newToDoDescription = document.createElement('input');
        newToDoDescription.setAttribute('type', 'text');
        newToDoDescription.setAttribute('id', 'to-do-description');
        newToDoDescription.setAttribute('value', description);
        toDoForm.appendChild(newToDoDescriptionLabel);
        toDoForm.appendChild(newToDoDescription);

        // due date
        let dueDateLabel = document.createElement('label');
        dueDateLabel.setAttribute('for', 'due-date');
        dueDateLabel.textContent = 'Due Date';
        let dueDate = document.createElement('input');
        dueDate.setAttribute('type', 'date');
        dueDate.setAttribute('id', 'due-date');
        dueDate.setAttribute('value', currentDueDate);
        toDoForm.appendChild(dueDateLabel);
        toDoForm.appendChild(dueDate);

        //priority 
        let priorityLabel = document.createElement('label');
        priorityLabel.setAttribute('for', 'to-do-priority');
        priorityLabel.textContent = 'Priority';
        let priority = document.createElement('select');
        priority.setAttribute('id', 'to-do-priority');
        priority.setAttribute('value', currentPriority);
        let defaultOption = document.createElement('option');
        let highOption = document.createElement('option');
        let lowOption = document.createElement('option');
        defaultOption.setAttribute('value', 'default');
        defaultOption.textContent = 'Default';
        highOption.setAttribute('value', 'high');
        highOption.textContent = 'High';
        lowOption.setAttribute('value', 'low');
        lowOption.textContent = 'Low';
        if (currentPriority === 'high') {
            highOption.setAttribute('selected', true);
        } else if (currentPriority === 'low') {
            lowOption.setAttribute('selected', true);
        } else if (currentPriority === 'default') {
            defaultOption.setAttribute('selected', true);
        }

        priority.appendChild(defaultOption);
        priority.appendChild(highOption);
        priority.appendChild(lowOption);
        toDoForm.appendChild(priorityLabel);
        toDoForm.appendChild(priority);

        //notes
        let notesLabel = document.createElement('label');
        notesLabel.setAttribute('for', 'to-do-priority');
        notesLabel.textContent = 'Notes';
        let notes = document.createElement('textarea');
        notes.setAttribute('id', 'to-do-notes');
        notes.textContent = currentNotes;
        //notes value doesn't pull over 
        toDoForm.appendChild(notesLabel);
        toDoForm.appendChild(notes);

        //project
        let projectLabel = document.createElement('label');
        projectLabel.setAttribute('for', 'project-choice');
        projectLabel.textContent = 'Project';
        let projectChoice = document.createElement('select');
        projectChoice.setAttribute('id', 'project-choice'); 
        projectChoice.setAttribute('name', 'project-choice');
        projectChoice.setAttribute('value', currentProject);
        //need configure to correctly pull the currentProject name and populate
            //project data
                let projectList = projectListController.getProjectList();
                projectList.forEach(project=> {
                    let option = document.createElement('option');
                    let value = project.getName();
                    let id = project.getId();
                    option.textContent = `${value}`;
                    option.setAttribute('value', `${id}`);
                    option.setAttribute('id', `${id}`);
                    if (currentProject === id) {
                        console.log(currentProject);
                        option.setAttribute('selected', 'true');
                    }
                    projectChoice.appendChild(option);
                    });
        toDoForm.appendChild(projectLabel);
        toDoForm.appendChild(projectChoice);


        let toDoFormButton = document.createElement('button');
        toDoFormButton.setAttribute('id', 'new-to-do-button');
        toDoFormButton.textContent = 'Save Edits';
        toDoFormButton.addEventListener('click', () => {
            clearMain();
            toDoController.edit(id, newToDoName.value, dueDate.value, newToDoDescription.value, priority.value,  notes.value, projectChoice.value);
            clickHandler.rewriteContent(toDoFormButton.id);
        })

        toDoForm.appendChild(toDoFormButton);

        main.appendChild(toDoForm);
    }

return {writeMenu, writeDefault, writeAddForm, writeProjectForm, writeToDoForm, writeProjectPage}
})();

export default uiController;
