import React from 'react'
import registerbg from "../assets/registerbg.jpg"
import { Link } from 'react-router-dom';



const Register = () => {
  return (
    <>
    <div className='mt-[-19%] bg-cover  flex justify-center relative'>
        <img src={registerbg} alt="" className='absolute'/>

        <div className="min-h-screen flex items-center justify-center p-4">
      <div className=" mt-90 ml-10 backdrop-blur-lg bg-white/10 border border-white/30 shadow-xl rounded-2xl p-8 w-md text-white">
        <h2 className="text-3xl font-semibold text-center mb-6">Create Account</h2>
        <form className="space-y-5">
          <div>
            <label htmlFor="name" className="block mb-1 text-sm font-medium text-white/90">
              Full Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="John Doe"
              className="w-full px-4 py-2 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-1 text-sm font-medium text-white/90">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
          </div>
          <div>
            <label htmlFor="password" className="block mb-1 text-sm font-medium text-white/90">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Create a password"
              className="w-full px-4 py-2 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
          </div>
          <div>
            <label htmlFor="confirm" className="block mb-1 text-sm font-medium text-white/90">
              Confirm Password
            </label>
            <input
              id="confirm"
              type="password"
              placeholder="Re-enter password"
              className="w-full px-4 py-2 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 rounded-lg bg-[#FF8243] hover:bg-[#fb9062] transition-colors font-medium shadow-md"
          >
            Register
          </button>
          <div className='flex justify-center'>
            Don't have an account ? <Link to={"/login"} className='text-[#fc9300] font-bold'>Login</Link>
          </div>
        </form>
      </div>
    </div>
    </div>
    </>
  )
}

export default Register