// CSS
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

// Components
import AddTaskForm from './components/AddTaskForm';
import AddProjectForm from './components/AddProjectForm';
import ProjectList from './components/ProjectList';

// Packages etc
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import { ProjectsContext } from './contexts/checkProjects';

//TODO: Create project list component

function App() {
  const [projects, setProjects] = useState([]);
  

  return (
    <>
      <ProjectsContext.Provider value={{projects, setProjects}}>
        <Router>
          <Routes>
            <Route path="/" element={<AddTaskForm />} />
            <Route path="/add-task" element={<AddTaskForm />} />
            <Route path="/add-project" element={<AddProjectForm />} />
            <Route path="/project-list" element={<ProjectList />} />
          </Routes>
        </Router>
      </ProjectsContext.Provider>
    </>
  )
}

export default App
