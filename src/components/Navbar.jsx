import { Container, Navbar, Nav,Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

// TODO: Change Nav.Link to list group
// TODO: useState for active item


export default function Navigation() {
  return (
    <Navbar bg="light" expand="lg">
    <Container>
        <Navbar.Brand as={Link} to="/">
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
            <Nav.Link><Link to="/project-list" className="nav-link">My Projects</Link></Nav.Link>
        </Nav>
        </Navbar.Collapse>
    </Container>
    </Navbar>
  );
}