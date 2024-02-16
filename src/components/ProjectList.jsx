// Done: Page will get all projects from local storage / reference all projects from context
// Done: For each project, render a project component
//         Done: Title
//         Done: Description
//         TODO: Number of associated tasks
//     TODO: On carat click, render each task OR render "Add Task button"
//         TODO: Add task button should take projectId and select it from the dropdown; Modal? 

import { ProjectsContext } from "../contexts/checkProjects";
import Navigation from "./Navbar";
import { Container, Card, Button } from "react-bootstrap";
import { useContext, useEffect } from "react";
import projectController from "../utilities/projectController";
import projectListController from "../utilities/projectListController";

export default function ProjectList() {
    const { projects, setProjects} = useContext(ProjectsContext);

    const handleSubmit = (projectId) => {
        console.log('handleSubmit');
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
                            <Card.Header as="h5">{project.getName()}</Card.Header>
                            <Card.Body>
                                {project.getDescription()}
                                <Button variant="danger" onClick={() => handleSubmit(project.getId())} ><i className="bi-trash"></i></Button>
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