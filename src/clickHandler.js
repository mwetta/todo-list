import uiController from './uiController.js'

const clickHandler = (() => {
    const rewriteContent = (id) => {
        console.log(id);
        if (id == 'upcoming') {
            console.log('trigger upcoming');
            
        } else if (id == 'projects') {
            console.log('trigger projects');
            uiController.writeDefault();
        } else if (id == 'tasks') {
            console.log('trigger todos');
        } else if (id == 'add') {
            console.log('trigger add');
            uiController.writeAddForm();
        } else {
            console.log('trigger error');
        }
    }

    return {rewriteContent}
})();

export default clickHandler;