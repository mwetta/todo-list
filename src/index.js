import Project from './Project.js'
// UI controls -- click on new project
// new project = createProject(name, description);


/* Project Outline

Parts: 
    * projects
    * todos
        * title
        * description
        * dueDate
        * recurring? nice to have
            * interval
            * last done
        * priority
        * notes
        * checklist
    * upcoming

Functionality:
    * create new project
    * create new to do
    * edit project
    * edit to do
    * add to do to project
    * mark item as complete
    * delete item / project
    * set priority
    * reorganize
    */ 

/* information holders:                                                     contain information
        projects: contains information about projects
            projectTitle
            projectDescription
        todos: contains information about todo items
            id
            dateCreated
            dueDate
            title
            description
            priority
            notes

    structurers:                                                            create and maintain relationships between objects
        projectList: defines which todo items belong to which projects
            TO CONSIDER: where will ID be stored and referenced for retrieval for edits and deletes? 

    service provider:                                                       does a service for other objects upon request
        getDate: fetch current date
        ?formatDate: format date

    coordinators:                                                           passes information to other objects so that they can do work
        sendToPresenter: passes UI events to presenter
        writeToProjectList: stores information on relationships between projects and todos 

        sendToStorage: send items to local storage (what items)
        getFromStorage: get items from local storage (same as above)

    controller:                                                             acts as a higher-level, declaratively focused object that coordinates the behavior of lower-level concerns
        projectController: contains functions specific to projects
            createProject
            editProject
            deleteProject
        toDoController: contains functions specific to todos
            createToDo
            assignToDoToProject
            editToDo
                changeTitle
                changeDescription
                changeDueDate
                changePriority
                changeNote
            deleteToDo
            deleteProject

    interfacers:                                                            provide means to communicate with other (external or internal) parts of the system
        presenter: writes to DOM
            writeSidebar
            writeBody
            queryForm
        eventHandler: listens to clicks?
*/ 