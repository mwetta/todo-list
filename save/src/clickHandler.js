import uiController from './uiController.js'

const clickHandler = (() => {
    const rewriteContent = (id) => {
        console.log(id);
        if (id == 'upcoming') {
            console.log('trigger upcoming');
            
        } else if (id == 'projects' || id == 'new-project-button') {
            uiController.writeDefault();
        } else if (id == 'tasks' || id == 'new-to-do-button' || id === 'remove-task') {
            uiController.writeDefault();
        } else if (id == 'add') {
            uiController.writeAddForm();
        } else if (id == 'project-button') {
            uiController.writeProjectForm();
        } else if (id == 'todo-button') {
            uiController.writeToDoForm();
        } else {
            console.log('trigger error');
        }
    }

    const projectHandler = (id) => {
        uiController.writeProjectPage(id);
    }


    return {rewriteContent, projectHandler}
})();

export default clickHandler;