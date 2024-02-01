import { Container, Navbar, Nav,Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <Navbar bg="light" expand="lg">
    <Container>
        <Navbar.Brand as={Link} to="/courses">
        <Row>
            <Col className="d-flex align-items-center"></Col>
            <Col className="d-flex align-items-center">
            <h1>To Do List</h1>
            </Col>
        </Row>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
            <Nav.Link><Link to="/add-task" className="nav-link">Add Task</Link></Nav.Link>
            <Nav.Link><Link to="/add-project" className="nav-link">Add Project</Link></Nav.Link>
        </Nav>
        </Navbar.Collapse>
    </Container>
    </Navbar>
  );
}