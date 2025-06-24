import React from 'react'
import loginpkka from "../assets/loginpkka.jpg"
const Login = () => {
  return (
    <>

    <section  className='mt-[-10%] h-189' style={{backgroundImage:"url('https://www.dapetra.com/wp-content/uploads/slider/cache/96f749dc60d19c47f3603fcec0863719/4-Weddings-at-Stanjel-Castle.jpg')"}}>
    
      <div className="min-h-screen  flex items-center justify-center  p-4">
      <div className="backdrop-blur-lg mt-50 bg-white/10 border border-white/30 shadow-xl rounded-2xl p-8 w-full max-w-md text-white">
        <h2 className="text-3xl font-semibold text-center mb-6">Login</h2>
        <form className="space-y-5">
          <div>
            <label className="block mb-1 text-sm font-medium text-white/90" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
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
              className="w-full px-4 py-2 rounded-lg bg-white/20 border border-white/30 placeholder-white/70 text-white focus:outline-none focus:ring-2 focus:ring-white/50"
              placeholder="••••••••"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 rounded-lg bg-[#6f4e37] hover:bg-[#5b3e2c] transition-colors font-medium shadow-md"
          >
            Sign In
          </button>
        </form>
      </div>
    </div> 
    
    </section>
    
    
    </>
  )
}

export default Login