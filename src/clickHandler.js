import uiController from './uiController.js'

const clickHandler = (() => {
    const rewriteContent = (id) => {
        console.log(id);
        if (id == 'upcoming') {
            console.log('trigger upcoming');
            
        } else if (id == 'projects' || id == 'new-project-button') {
            uiController.writeDefault();
        } else if (id == 'tasks' || id == 'new-to-do-button' || id === 'remove-task') {
            console.log('trigger todos');
            uiController.writeDefault();
        } else if (id == 'add') {
            uiController.writeAddForm();
        } else if (id == 'project-button') {
            uiController.writeProjectForm();
        } else if (id == 'todo-button') {
            uiController.writeToDoForm();
        // } else if (id.includes('edit') === true) {
        //     let projectId = id.slice(4);
        //     console.log(projectId);
        }
        else {
            console.log('trigger error');
        }
    }

    const projectHandler = (id) => {
        uiController.writeProjectPage(id);
    }



    return {rewriteContent, projectHandler}
})();

export default clickHandler;