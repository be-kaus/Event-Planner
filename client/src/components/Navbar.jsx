import React from 'react'
import {Link} from "react-router-dom";
import logo from "../assets/logo.png"

const Navbar = () => {
  return (
    <>
    <div className="bg-transparent flex justify-evenly gap-30 text-xl items-center sticky top-0 z-99 text-[#f39b15] font-bold">
        <Link to={"/about"}>About</Link>
        <Link to={"/services"}>Our Services</Link>
        <Link to={"/stories"}>Client Stories</Link>
        <Link to={"/"}>
          <img src={logo} alt="" className="h-[5em]" />
        </Link>
        <Link to={"/gallery"}>Gallery</Link>
        <Link to={"/contact"}>Contact Us</Link>
        <Link to="/login">Login</Link>
    </div>
    </>
  )
}

export default Navbar;