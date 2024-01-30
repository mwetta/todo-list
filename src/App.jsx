import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from '../components/Navbar';
import AddProjectForm from '../components/AddProjectForm';
import { Container } from 'react-bootstrap';

//TODO: Add react router
//TODO: Define components
//TODO: Copy over utilities


function App() {
  return (
    <>
      <Navigation />
      <Container>
        <AddProjectForm />
      </Container>
    </>
  )
}

export default App
