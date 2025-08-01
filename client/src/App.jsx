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
import {Toaster} from "react-hot-toast";
import CustomerDashboard from './components/CustomerDashboard';
import AdminPanel from './components/AdminPanel';

const App = () => {
  return (
    <>
    <BrowserRouter>
    <header>
      <Toaster/>
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
     <Route path="/dashboard" element={<CustomerDashboard />} />
     <Route path="/adminpanel" element={<AdminPanel />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;