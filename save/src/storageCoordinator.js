const storageCoordinator = (() => {
    const store = (key, value) => {
        localStorage.setItem(key, value);
    }

    const retrieve = (key) => {
        localStorage.getItem(`${key}`);
    }

    return {store, retrieve}
})();

export default storageCoordinator;