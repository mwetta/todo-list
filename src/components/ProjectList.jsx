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
import { useContext } from "react";

export default function ProjectList() {
    const { projects, setProjects} = useContext(ProjectsContext);

    return (
        <>
            <Navigation />
            <Container className="mt-5">
                {projects.map((project)=> (
                    <Card className="mt-5" key={project.getId()}>
                        <Card.Header as="h5">{project.getName()}</Card.Header>
                        <Card.Body>
                            {project.getDescription()}
                            <Button><i className="bi-trash"></i></Button>
                        </Card.Body>
                    </Card>
                ))}
            </Container>
        </>
    )
}