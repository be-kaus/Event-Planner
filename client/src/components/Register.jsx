import React, { useState } from "react";
import registerpage from "../assets/registerpage.png";
import { Link } from "react-router-dom";
import api from "../config/api";
import {toast} from "react-hot-toast";

const Register = () => {
  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const handelChange = (e) => {
    const { name, value } = e.target;

    setRegisterData((previousData) => ({ ...previousData, [name]: value }));
  };

  const handelSubmit = async (e) => {
    e.preventDefault();

    console.log(registerData);
    try {
      const res = await api.post("/auth/register", registerData);
      toast.success(res.data.message);
      setRegisterData({
      name: "",
      email: "",
      phone: "",
      password: "",
    });
    } catch (error) {
      toast.error(error.message)

    }

    
  };

  return (
    <>
      <div className="mt-[-19%] bg-cover  flex justify-center relative">
        <img src={registerpage} alt="" className="absolute" />

        <div className="min-h-screen flex items-center justify-center p-4">
          <div className=" mt-90 ml-10 backdrop-blur-lg bg-white/10 border border-white/30 shadow-xl rounded-2xl p-8 w-md text-white">
            <h2 className="text-3xl font-semibold text-center mb-6">
              Create Account
            </h2>
            <form className="space-y-5" onSubmit={handelSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="block mb-1 text-sm font-medium text-white/90"
                >
                  Full Name
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  value={registerData.name}
                  onChange={handelChange}
                  placeholder="name"
                  className="w-full px-4 py-2 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-1 text-sm font-medium text-white/90"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={registerData.email}
                  onChange={handelChange}
                  placeholder="you@example.com"
                  className="w-full px-4 py-2 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block mb-1 text-sm font-medium text-white/90"
                >
                  Phone 
                </label>
                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  value={registerData.phone }
                  onChange={handelChange}
                  placeholder="Enter your phone number"
                  className="w-full px-4 py-2 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-1 text-sm font-medium text-white/90"
                >
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  name="password"
                  value={registerData.password}
                  onChange={handelChange}
                  placeholder="Create a password"
                  className="w-full px-4 py-2 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
              </div>

              <button
                type="submit"
                className="w-full py-2 rounded-lg bg-[#C70039] hover:bg-[#de313d] transition-colors font-medium shadow-md"
              >
                Register
              </button>
              <div className="flex justify-center">
                Don't have an account ?{" "}
                <Link to={"/login"} className="text-[#C70039] font-bold pl-3">
                  Login
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
