// CSS
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

// Components

// import AddProjectForm from '../components/AddProjectForm';
import AddTaskForm from '../components/AddTaskForm';
import AddProjectForm from '../components/AddProjectForm';

// Packages etc
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


//TODO: Add react router
//TODO: Define components
//TODO: Copy over utilities


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<AddTaskForm />} />
          <Route path="/add-task" element={<AddTaskForm />} />
          <Route path="/add-project" element={<AddProjectForm />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
