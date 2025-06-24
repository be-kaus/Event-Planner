import React from 'react'
import Navbar from './components/Navbar';
import Home from "./components/Home";
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Login from './components/Login';
import Contact from './components/Contact';


const App = () => {
  return (
    <>
    <BrowserRouter>
    <header>
      <Navbar/>
    </header>

    <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/login" element={<Login />} />
     <Route path="/contact" element={<Contact />} />
     
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;