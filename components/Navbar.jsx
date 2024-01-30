import { Container, Navbar, Nav,Row, Col, NavDropdown } from "react-bootstrap";
import { Link } from 'react-router-dom';


export default function Navigation() {

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        {/* Consider updating "home" to an about page */}
        <Navbar.Brand href="/courses">
          <Row>
            <Col className="d-flex align-items-center">
            </Col>
            <Col className="d-flex align-items-center">
              <h1>To Do List</h1>
            </Col>
          </Row>
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
          <Nav.Link>Add Task</Nav.Link>
          <Nav.Link>Add Project</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}