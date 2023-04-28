import Login from './pages/Login';
import {  BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import Register from './pages/Register';

import Navbar from './components/navbars/Navbar';
import MyProfile from './pages/MyProfile';
import Home from './pages/Home';
import Create from './pages/Create';
import PendingProfiles from './pages/PendingProfiles';
import PromotingStudents from './pages/PromotingStudents';
import Eradication from './pages/Eradication';


function App() {
  return (
    <div className="container">
      <h1>
        <Router>
          <Routes>
            <Route path='/' element = {<Home user_id={1}/>}/>
            <Route path = '/login' element = {<Login/>}/>
            <Route path = '/register' element = {<Register/>}/>
            <Route path = '/navbar' element = {<Navbar user_id={1}/>}/>
            <Route path = '/myprofile' element = {<MyProfile user_id = {2}/>}/>            
            <Route path = '/create' element = {<Create/>}/>
            <Route path = '/pendingprofiles' element = {<PendingProfiles/>}/>
            <Route path = '/promotingstudents' element = {<PromotingStudents/>}/>
            <Route path = '/eradication' element = {<Eradication/>}/>
          </Routes>
        </Router>
        
        </h1>
    </div>
  );
}

export default App;
