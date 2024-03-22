import React, { useState, useContext, useEffect } from "react";
import { ProjectsContext } from "../contexts/checkProjects";
import Navigation from "./Navbar";
import { Button, Container, Card, Accordion, Dropdown, Modal, Form, ListGroup } from "react-bootstrap";
import projectController from "../utilities/projectController";
import projectListController from "../utilities/projectListController";
import toDoController from '../utilities/toDoController';

import AddTaskForm from './AddTaskForm'; // Import the AddTaskForm component

export default function ProjectList() {
    const { projects, setProjects} = useContext(ProjectsContext);
    const [show, setShow] = useState(false);
    const [showProjectModal, setShowProjectModal] = useState(false);
    const [selectedProjectId, setSelectedProjectId] = useState(null); // State to hold the selected projectId

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleProjectModalClose = () => setShowProjectModal(false);
    const handleProjectModalShow = () => setShowProjectModal(true);



    const handleDelete = (projectId) => {
        console.log('handleDelete');
        projectController.remove(projectId, projectListController.getProjectList());
        setProjects(projectListController.getProjectList());
    }

    const handleAddTasks = (projectId) => {
        // Handle adding tasks here
        setSelectedProjectId(projectId);
        handleShow(); // Open the modal when adding tasks
    }


    useEffect(() => {
        const getProjects =  () => {
            setProjects(projectListController.getProjectList());
        };
        getProjects();
    }, []);

    return (
        <>
            <Navigation />
            <Container className="mt-5">
            {projects.length > 0 ? (
                    projects.map((project)=> (
                        <Card className="mt-5" key={project.getId()}>
                            <Card.Header as="h5" className="d-flex justify-content-between align-items-center">
                                {project.getName()} 
                                <Dropdown>
                                    <Dropdown.Toggle as="i" className="bi-three-dots"></Dropdown.Toggle>
                                    
                                    <Dropdown.Menu>
                                        <Dropdown.Item onClick={() => handleDelete(project.getId())}>Delete project</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Card.Header>
                            <Card.Body>
                                {project.getDescription()}
                                <Accordion className="mt-3 mb-3">
                                {project.getTodos().length === 0 ? (
                                    <Button onClick={()=> handleAddTasks(project.getId())}>Add Todos</Button>
                                ) : (
                                    project.getTodos().map((todo) => (
                                    <Task key={todo.id} todo={todo}></Task>
                                    ))
                                )}
                                </Accordion>
                            </Card.Body>
                        </Card>
                    ))
                ) : (
                    <Card className="mt-5">
                        <Card.Body>
                            Sorry, no projects.
                        </Card.Body>
                    </Card>
                )}
            
            <Button onClick={handleProjectModalShow}>Add Project</Button>
            </Container>

            
            <AddProjectFormModal showProjectModal={showProjectModal} handleProjectModalClose={handleProjectModalClose} projects={projects} updateProjects={() => setProjects(projectListController.getProjectList())} />
            <AddTaskFormModal show={show} handleClose={handleClose} projectId={selectedProjectId} projects={projects} updateProjects={() => setProjects(projectListController.getProjectList())}/>
        </>
    )
}

const Task = ({todo}) =>  {
    return (
        <Accordion.Item eventKey={todo.id}> 
          <Accordion.Header>{todo.dueDate} {todo.name}</Accordion.Header>
          <Accordion.Body>
            <ListGroup className="mb-3">
                <ListGroup.Item>Description: {todo.description}</ListGroup.Item>
                <ListGroup.Item>Notes: {todo.notes}</ListGroup.Item>
            </ListGroup>
          </Accordion.Body>
        </Accordion.Item>
    );
}

function AddProjectFormModal ({ showProjectModal, handleProjectModalClose, updateProjects }) {

    const [projectData, setProjectData] = useState({
        projectName:'',
        projectDescription:''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProjectData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
      };

    const handleSubmit = () => {
        // toDoController.create(taskData);
        projectController.create(projectData);
        updateProjects();
        handleProjectModalClose();
    };

    return (
        <Modal show={showProjectModal} onHide={handleProjectModalClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add New Project</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
                <Form.Group className="mb-3" controlId="projectName">
                    <Form.Label>Project Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter a project name" name="projectName" onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="projectDescription">
                    <Form.Label>Description</Form.Label>
                    <Form.Control as="textarea" placeholder="Enter a project description" name="projectDescription" onChange={handleChange}/>
                </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleProjectModalClose}>
              Close
            </Button>
            {/* Call handleSubmit function on Save Changes button click */}
            <Button variant="primary" onClick={handleSubmit}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
    );
}

function AddTaskFormModal({ show, handleClose, projectId, projects, updateProjects }) {

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTaskData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
      };

      const [taskData, setTaskData] = useState({
        name:'',
        dueDate:'',
        description:'',
        priority:'',
        notes:'',
        project: projectId
    })

    useEffect(() => {
        // Update project in taskData if projectId is not null and a project with that id exists
        if (projectId && projects.find(project => project.getId() === projectId)) {
            setTaskData(prevData => ({
                ...prevData,
                project: projectId
            }));
        }
    }, [projectId, projects]);

    const handleSubmit = () => {
        toDoController.create(taskData);
        updateProjects();
        handleClose();
    };

    return (
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add New Task</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Form>
        <Form.Group className="mb-3" controlId="taskName">
          <Form.Label>Task</Form.Label>
          <Form.Control type="text" placeholder="Enter a name for your task" name="name" onChange={handleChange}/>
        </Form.Group>
        <Form.Group controlId="taskProject">
        <Form.Label>Project</Form.Label>
        <Form.Select aria-label="Task Project" name="project" value={taskData.project} onChange={handleChange}>
          <option>Select a project</option>
        {
          projects.map(project => (
            <option key={project.getId()} value={project.getId()}>{project.getName()}</option>
          ))
        }
      </Form.Select>
      </Form.Group>
        <Form.Group className="mb-3" controlId="taskDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control as="textarea" placeholder="Enter a task description" name="description" onChange={handleChange}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="taskDueDate">
          <Form.Label>Due Date</Form.Label>
          <Form.Control type="date" name="dueDate" onChange={handleChange}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="taskPriority">
          <Form.Label>Priority</Form.Label>
          <Form.Select aria-label="Task priority" name="priority" onChange={handleChange}>
            <option>Select a priority</option>
            <option value="0">High</option>
            <option value="1">Medium</option>
            <option value="2">Low</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3" controlId="taskNotes">
          <Form.Label>Notes</Form.Label>
          <Form.Control as="textarea" placeholder="Enter task notes" name="notes" onChange={handleChange}/>
        </Form.Group>
      </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            {/* Call handleSubmit function on Save Changes button click */}
            <Button variant="primary" onClick={handleSubmit}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
    );
}