import React, { useState } from "react";
import loginbg from "../assets/loginbg.jpg";
import { Link } from 'react-router-dom';

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const formSubmitKro = (e) => {
    e.preventDefault();
    const logindata = {
      Email: email,
      Password: password,
    }
    console.log(logindata);
  }

  return (
    <>
    <div className='mt-[-16%] bg-cover flex justify-center relative'>
      <img src={loginbg} alt="" className='absolute'/>


      <div className="min-h-screen mt-20 pt-35 flex items-center justify-center p-4">
      <div className="backdrop-blur-lg bg-white/1 border border-white/30 shadow-xl rounded-2xl p-8 w-full max-w-md text-white">
        <h2 className="text-3xl font-semibold text-center mb-6">Login</h2>
        <form className="space-y-5" onSubmit={formSubmitKro}>
          <div>
            <label className="block mb-1 text-sm font-medium text-white/90" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 rounded-lg bg-white/20 border border-white/30 placeholder-white/70 text-white focus:outline-none focus:ring-2 focus:ring-white/50"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium text-white/90" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 rounded-lg bg-white/20 border border-white/30 placeholder-white/70 text-white focus:outline-none focus:ring-2 focus:ring-white/50"
              placeholder="••••••••"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 rounded-lg bg-[#C70039] hover:bg-[#de313d] transition-colors font-medium shadow-md"
          >
            Sign In
          </button>
          <div>
            Don't have an account ? <Link to={"/register"} className='text-[#f19fb6] font-bold'>Register</Link>
          </div>
        </form>
      </div>
    </div>
    </div>
    </>
  )
}

export default Login;