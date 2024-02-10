import { useContext, useState } from 'react';
import Navigation from './Navbar';
import {Card, Form, Button, Container} from 'react-bootstrap';
import projectController from '../utilities/projectController';
import { ProjectsContext } from '../contexts/checkProjects';
import projectListController from '../utilities/projectListController';
//Done: Store data for project
//Done: Update context for projects
//TODO: Redirect after submission

function AddProjectForm() {
    const { projects, setProjects } = useContext(ProjectsContext);
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

    const handleSubmit = (e) => {
        e.preventDefault(); 
        projectController.create(projectData);
        console.log(projects);
        //TODO: do I want the objects or do I want the string data?
        setProjects(projectListController.getProjectList());
        //TODO: navigate to all projects or individual project page
        console.log(projects);
    }

  return (
    <>
        <Navigation />
        <Container>
            <Card className="mt-5">
            <Card.Header as="h5">Add New Project</Card.Header>
            <Card.Body>
                <Form>
            <Form.Group className="mb-3" controlId="projectName">
                <Form.Label>Project Name</Form.Label>
                <Form.Control type="text" placeholder="Enter a project name" name="projectName" onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="projectDescription">
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" placeholder="Enter a project description" name="projectDescription" onChange={handleChange}/>
            </Form.Group>
            <Button variant="primary" type="submit" onClick={handleSubmit}>
                Submit
            </Button>
            </Form>
            </Card.Body>
            </Card>
        </Container>
    </>
  );
}

export default AddProjectForm;