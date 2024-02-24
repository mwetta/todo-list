// Done: Page will get all projects from local storage / reference all projects from context
// Done: For each project, render a project component
//         Done: Title
//         Done: Description
//         TODO: Number of associated tasks
//     TODO: On carat click, render each task OR render "Add Task button"
//         TODO: Add task button should take projectId and select it from the dropdown; Modal? 

import { ProjectsContext } from "../contexts/checkProjects";
import Navigation from "./Navbar";
import { Container, Card, Accordion, ListGroup, Dropdown } from "react-bootstrap";
import { useContext, useEffect } from "react";
import projectController from "../utilities/projectController";
import projectListController from "../utilities/projectListController";

export default function ProjectList() {
    const { projects, setProjects} = useContext(ProjectsContext);

    projects.forEach(project => {
        let toDos = project.getTodos();
        toDos.forEach(todo => {
            console.log(todo)
        })
    })

    const handleDelete = (projectId) => {
        console.log('handleDelete');
        projectController.remove(projectId, projectListController.getProjectList());
        setProjects(projectListController.getProjectList());
    }

    // mounts project list on page load; previously if app was abandoned for a while projects wouldn't show
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
                                    {project.getTodos().map((todo) => (
                                        <Task key={todo.id} todo={todo}></Task>
                                    ))}
                                </Accordion>
                                {/* <Button variant="danger" onClick={() => handleSubmit(project.getId())} ><i className="bi-trash"></i></Button> */}
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
            </Container>
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