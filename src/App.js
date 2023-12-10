import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Layout/Navbar';
 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
 
import Home from './Component/Pages/Home';
import Login from './Component/Pages/Login';
import Footer from './Component/Layout/Footer';

function App() {
  return (
    <div className="App">
      
      <Router>
        <Navbar />
        <Routes >
          <Route path='/' element={<Home />} />
         
          <Route path='/login' element={<Login />} />
           
        </Routes>
         <Footer />
      </Router>
    </div>
  );
}

export default App;
