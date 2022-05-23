import './App.css';
import React from 'react'
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'
import SavedFoods from './pages/SavedFoods';
import AddFoods from './pages/AddFoods';
import SelectEntry from './pages/SelectEntry';
import WelcomePage from './pages/WelcomePage';


function App() {

  return <div className="App"> 
  <Router>
    <div className="navbar">
    <Link to="/"> Start Page </Link>
    <Link to="/addfoods"> Add Foods </Link>
    <Link to="/gotsalt"> Check Saved Foods </Link>
    </div>
    <Routes>
      <Route path="/gotsalt" element={<SavedFoods/>} />
      <Route path="/addfoods" element={<AddFoods/>} />
      <Route path="/selectentry/:id" element={<SelectEntry/>} />
      <Route path="*" element={<WelcomePage/>} />
    </Routes>
  </Router>
  
  </div>;
}

export default App;
