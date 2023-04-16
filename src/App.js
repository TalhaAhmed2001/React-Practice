import './App.css';
import Login from './pages/Login';
import {  BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import Register from './pages/Register';
import AdminNavbar from './components/AdminNavbar';
import StudentNavbar from './components/StudentNavbar';
import AlumnusNavbar from './components/AlumnusNavbar';
import Navbar from './components/Navbar';
import UpdateProfile from './components/UpdateProfile';
import UpdateJob from './components/UpdateJob';
import MyProfile from './pages/MyProfile';


function App() {
  return (
    <div className="container">
      <h1>
        <Router>
          <Routes>
            <Route path = '/' element = {<Login/>}/>
            <Route path = '/register' element = {<Register/>}/>
            <Route path = '/navbar' element = {<Navbar user_id = '1'/>}/>
            <Route path = '/admin' element = {<AdminNavbar/>}/>
            <Route path = '/student' element = {<StudentNavbar/>}/>
            <Route path = '/alumnus' element = {<AlumnusNavbar/>}/>
            <Route path = '/alumnus/myprofile' element = {<MyProfile/>}/>
          </Routes>
        </Router>
        
        </h1>
    </div>
  );
}

export default App;
