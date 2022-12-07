import projectController from './projectController.js'
import Project from './Project.js'

const storageCoordinator = (() => {
    const store = (key, value) => {
        console.log(key);
        console.log(value);
        localStorage.setItem(key, value);
    }

    const retrieve = (key) => {
        localStorage.getItem(`${key}`);
    }

    return {store, retrieve}
})();

export default storageCoordinator;