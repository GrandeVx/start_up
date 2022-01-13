import './App.css';
// import the login page
import Home from './pages/home';
import Register from './pages/register';
import Login from './pages/login';
import Admin from './pages/admin';
import Page from './pages/page';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {


  return (

    <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/page" element={<Page />} />
    </Routes>
    </Router>


  );
}

export default App;
