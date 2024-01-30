import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

//TODO: Track data for 


function AddProjectForm() {
  return (
    <Card className="mt-5">
      <Card.Header as="h5">Add New Project</Card.Header>
      <Card.Body>
        <Form>
      <Form.Group className="mb-3" controlId="projectName">
        <Form.Label>Project Name</Form.Label>
        <Form.Control type="text" placeholder="Enter a project name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="projectDescription">
        <Form.Label>Password</Form.Label>
        <Form.Control as="textarea" placeholder="Enter a project description" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
      </Card.Body>
    </Card>
  );
}

export default AddProjectForm;