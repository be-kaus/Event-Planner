import React from 'react'
import {Link} from "react-router-dom";
import logo from "../assets/logo.png"

const Navbar = () => {
  return (
    <>
    <div className="bg-transparent flex justify-evenly text-xl items-center relative  top-0 z-99 text-[#f39b15] mt-10 font-bold">
        <Link to={"/about"}>About</Link>
        <Link to={"/services"}>Our Services</Link>
        <Link to={"/stories"}>Client Stories</Link>
        <Link to={"/"}>
          <img src={logo} alt="" className="h-[5em] absolute top-0 left-185 " />
        </Link>
        <Link to={"/gallery"}>Gallery</Link>
        <Link to={"/contact"}>Contact Us</Link>
        <Link to="/login">Login</Link>
    </div>
    </>
  )
}

export default Navbar;