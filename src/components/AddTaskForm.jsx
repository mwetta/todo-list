import Button from 'react-bootstrap/Button';
import {Card, Form, Container} from 'react-bootstrap';
import Navigation from './Navbar';
import { ProjectsContext } from '../contexts/checkProjects';
import { useContext, useEffect, useState } from 'react';
import projectListController from '../utilities/projectListController';
import toDoController from '../utilities/toDoController';
//Done: Pull in project data using context
//TODO: Store task data


function AddTaskForm() {
  const { projects, setProjects } = useContext(ProjectsContext);
  console.log(projects);
  const [taskData, setTaskData] = useState({
    name:'',
    dueDate:'',
    description:'',
    priority:'',
    notes:'',
    project:''
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTaskData((prevData) => ({
        ...prevData,
        [name]: value,
    }));
  };

  useEffect(() => {
    const getProjects = () => {
      setProjects(projectListController.getProjectList());
    };
    getProjects();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    toDoController.create(taskData);
  }

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
          <Form.Control type="text" placeholder="Enter a name for your task" name="name" onChange={handleChange}/>
        </Form.Group>
        <Form.Group controlId="taskProject">
        <Form.Label>Project</Form.Label>
        <Form.Select aria-label="Task Project" name="project" onChange={handleChange}>
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
          <Form.Control type="date" name="date" onChange={handleChange}/>
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
        <Button variant="primary" onClick={handleSubmit}>
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