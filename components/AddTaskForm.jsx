import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

//TODO: Pull in project data using context


function AddTaskForm() {
  return (
    <Card className="mt-5">
      <Card.Header as="h5">Add New Task</Card.Header>
      <Card.Body>
        <Form>
      <Form.Group className="mb-3" controlId="taskName">
        <Form.Label>Task</Form.Label>
        <Form.Control type="text" placeholder="Enter a name for your task" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="taskDescription">
        <Form.Label>Description</Form.Label>
        <Form.Control as="textarea" placeholder="Enter a project description" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="taskDueDate">
        <Form.Label>Due Date</Form.Label>
        <Form.Control type="date" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="taskPriority">
        <Form.Label>Priority</Form.Label>
        <Form.Select aria-label="Task priority">
          <option>Select a priority</option>
          <option value="0">High</option>
          <option value="1">Medium</option>
          <option value="2">Low</option>
        </Form.Select>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
      </Card.Body>
    </Card>
  );
}

export default AddTaskForm;