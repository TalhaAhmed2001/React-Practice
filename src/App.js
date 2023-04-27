import Login from './pages/Login';
import {  BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import Register from './pages/Register';

import Navbar from './components/navbars/Navbar';
import MyProfile from './pages/MyProfile';
import Home from './pages/Home';
import CreateStory from './components/creates/CreateStory';
import CreateAdvice from './components/creates/CreateAdvice';
import Create from './pages/Create';


function App() {
  return (
    <div className="container">
      <h1>
        <Router>
          <Routes>
            <Route path='/' element = {<Home/>}/>
            <Route path = '/login' element = {<Login/>}/>
            <Route path = '/register' element = {<Register/>}/>
            <Route path = '/navbar' element = {<Navbar user_id = '3'/>}/>
            <Route path = '/alumnus/myprofile' element = {<MyProfile/>}/>            
            <Route path = '/create' element = {<Create/>}/>
            {/* <Route path = '/create/story' element = {<CreateStory/>}/> */}
          </Routes>
        </Router>
        
        </h1>
    </div>
  );
}

export default App;
