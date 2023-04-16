import logo from './logo.svg';
import './App.css';
import Login from './pages/Login';
import {  BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import Register from './pages/Register';
import AdminNavbar from './components/AdminNavbar';
import StudentNavbar from './components/StudentNavbar';
import AlumnusNavbar from './components/AlumnusNavbar';
import Navbar from './components/Navbar';


function App() {
  return (
    <div className="container">
      <h1>
        <Router>
          <Routes>
            <Route path = '/' element = {<Login/>}/>
            <Route path = '/register' element = {<Register/>}/>
            <Route path = '/navbar' element = {<Navbar user_id = '2'/>}/>
            <Route path = '/admin' element = {<AdminNavbar/>}/>
            <Route path = '/student' element = {<StudentNavbar/>}/>
            <Route path = '/alumnus' element = {<AlumnusNavbar/>}/>
          </Routes>
        </Router>
        
        </h1>
    </div>
  );
}

export default App;
