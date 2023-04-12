import logo from './logo.svg';
import './App.css';
import Login from './pages/Login';
import {  BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import Register from './pages/Register';


function App() {
  return (
    <div className="container">
      <h1>
        <Router>
          <Routes>
            <Route path = '/' element = {<Login/>}/>
            <Route path = '/register' element = {<Register/>}/>
          </Routes>
        </Router>
        
        </h1>
    </div>
  );
}

export default App;
