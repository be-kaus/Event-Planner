import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import api from "../../config/api";
import { CiEdit } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  const [userdata, setUserData] = useState("");

  const fetchUserData = async () => {
    try {
      const res = await api.get("/user/profile");
      setUserData(res.data.data);
      toast.success(res.data.message);
    } catch (error) {
      toast.error(
        `Error : ${error.response?.status || error.message} | ${
          error.response?.data.message || ""
        }`
      );
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <>
    <section className="bg-gradient-to-b from-[#fff7ef] to-[#fdeada] min-h-screen py-16 px-4 font-serif relative">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-5xl font-extrabold text-[#7a1d1d] mb-3 tracking-wide">
          Welcome, {userdata.fullName?.split(" ")[0]}
        </h1>
        <p className="text-[#6b3b16] text-lg italic">
          A graceful glance at your profile.
        </p>
      </div>

      <div>
        <div className="bg-white border border-[#d6b78f] rounded-3xl shadow-2xl p-10 max-w-4xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10 transition-all duration-500 ease-in-out hover:shadow-[0_10px_50px_rgba(0,0,0,0.1)]">
          {/* Info Section */}
          <div className="flex-1 text-[#5e2c04] space-y-4 text-lg w-full">
            <div>
              <span className="font-semibold text-[#a3542d]">Name:</span>{" "}
              {userdata.name}
            </div>
            <div>
              <span className="font-semibold text-[#a3542d]">Email:</span>{" "}
              {userdata.email}
            </div>
            <div>
              <span className="font-semibold text-[#a3542d]">Phone:</span>{" "}
              {userdata.phone}
            </div>
          </div>

          {/* Image Section */}
          <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-[#c49b63] shadow-md">
            <img src={userdata.photo} alt="Profile" className="object-cover w-full h-full" />
          </div>
        </div>

        {/* ✨ Additional Info Section */}
        <div className="bg-white border border-[#e8d4bb] rounded-2xl shadow-md p-8 max-w-4xl mx-auto mt-8 text-[#5e2c04]">
          <h2 className="text-2xl font-bold mb-4 text-[#7a1d1d]">Additional Information</h2>
          <div className="space-y-3 text-md">
            <div>
              <span className="font-semibold text-[#a3542d]">Name:</span>{" "}
              {userdata.name}
            </div>
            <div>
              <span className="font-semibold text-[#a3542d]">Email:</span>{" "}
              {userdata.email}
            </div>
            <div>
              <span className="font-semibold text-[#a3542d]">Phone:</span>{" "}
              {userdata.phone}
            </div>
          </div>
        </div>

        <button
          onClick={() => navigate("/userDashboardEdit")}
          className="absolute top-5 right-5 bg-[#f5cbaa] hover:bg-[#896b51] text-[#492609] hover:text-[#f5cbaa] font-semibold px-5 py-2 rounded-full flex items-center gap-2  ">
          <CiEdit />
          Edit
        </button>
      </div>
    </section>
    </>
  );
};

export default Profile;
