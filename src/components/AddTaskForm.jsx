import Button from 'react-bootstrap/Button';
import {Card, Form, Container} from 'react-bootstrap';
import Navigation from './Navbar';
import { ProjectsContext } from '../contexts/checkProjects';
import { useContext, useEffect } from 'react';
import projectListController from '../utilities/projectListController';
//Done: Pull in project data using context
//TODO: Store task data


function AddTaskForm() {
  const { projects, setProjects } = useContext(ProjectsContext);
  console.log(projects);

  useEffect(() => {
    const getProjects = () => {
      setProjects(projectListController.getProjectList());
    };
    getProjects();
  }, []);

  return (
    <>
      <Navigation />
      <Container>
        <Card className="mt-5">
        <Card.Header as="h5">Add New Task</Card.Header>
        <Card.Body>
          <Form>
        <Form.Group className="mb-3" controlId="taskName">
          <Form.Label>Task</Form.Label>
          <Form.Control type="text" placeholder="Enter a name for your task" />
        </Form.Group>
        <Form.Group controlId="taskProject">
        <Form.Label>Project</Form.Label>
        <Form.Select aria-label="Task Project">
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
          <Form.Control as="textarea" placeholder="Enter a task description" />
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
        <Form.Group className="mb-3" controlId="taskNotes">
          <Form.Label>Notes</Form.Label>
          <Form.Control as="textarea" placeholder="Enter task notes" />
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


export default AddTaskForm;