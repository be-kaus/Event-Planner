import React from 'react'
import Navbar from './components/Navbar';
import Home from "./components/Home";
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Login from './components/Login';
import Contact from './components/Contact';
import Register from './components/Register';
import Stories from './components/Stories';
import Services from './components/Services';
import About from './components/About';


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
     <Route path="/register" element={<Register />} />
     <Route path="/stories" element={<Stories />} />
     <Route path="/services" element={<Services />} />
     <Route path="/about" element={<About />} />
     
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;