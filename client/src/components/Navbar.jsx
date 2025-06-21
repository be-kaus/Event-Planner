import React from 'react'
import {Link} from "react-router-dom";
import logo from "../assets/logo.png"

const Navbar = () => {
  return (
    <>
    <div className="bg-transparent flex justify-evenly gap-25 text-xl items-center sticky top-0 z-99 text-amber-950 font-semibold">
      <Link to={"/about"}>About</Link>
        <Link to={"/services"}>Our Services</Link>
        <Link to={"/stories"}>Client Stories</Link>
        <Link to={"/"}>
          <img src={logo} alt="" className="h-[5em]" />
        </Link>
        <Link to={"/gallery"}>Gallery</Link>
        <Link to={"/contact"}>Contact Us</Link>
      <button>Login to Plan your Event</button>
    </div>
    </>
  )
}

export default Navbar;