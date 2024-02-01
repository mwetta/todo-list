import Navigation from './Navbar';
import {Card, Form, Button, Container} from 'react-bootstrap';
//TODO: Track data for project
//TODO: Update context for projects


function AddProjectForm() {
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
                <Form.Control type="text" placeholder="Enter a project name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="projectDescription">
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" placeholder="Enter a project description" />
            </Form.Group>
            <Button variant="primary" type="submit">
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