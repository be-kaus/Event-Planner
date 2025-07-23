import React from "react";
import {
  FaTachometerAlt,
  FaUser,
  FaCalendarCheck,
  FaLifeRing,
  FaCommentDots,
  FaSignOutAlt,
} from "react-icons/fa";
import api from "../../config/api";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const Sidebar = ({ active, setActive }) => {
  const { setUser, setIsLogin, setIsAdmin } = useAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    const res = await api.get("/auth/logout");
    setUser("");
    sessionStorage.removeItem("EventUser");
    setIsLogin(false);
    setIsAdmin(false);
    navigate("/");
  };

  return (
    <div className="w-64 min-h-screen bg-[#fff3e0] border-r border-[#c49b63] shadow-xl py-8 px-6 flex flex-col justify-between">
      {/* Header */}
      <div>
        <div className="border-b border-[#c49b63] pb-4 mb-6">
          <span className="text-2xl font-bold text-[#8b1f1f] font-serif block text-center">
            Customer's Dashboard
          </span>
        </div>
        {/* Menu Items */}
        <ul className="space-y-3">
          <SidebarItem
            label="Overview"
            icon={<FaTachometerAlt />}
            isActive={active === "overview"}
            onClick={() => setActive("overview")}
          />
          <SidebarItem
            label="Profile"
            icon={<FaUser />}
            isActive={active === "profile"}
            onClick={() => setActive("profile")}
          />
          <SidebarItem
            label="Bookings"
            icon={<FaCalendarCheck />}
            isActive={active === "bookings"}
            onClick={() => setActive("bookings")}
          />
          <SidebarItem
            label="Support"
            icon={<FaLifeRing />}
            isActive={active === "support"}
            onClick={() => setActive("support")}
          />
          <SidebarItem
            label="Feedback"
            icon={<FaCommentDots />}
            isActive={active === "feedback"}
            onClick={() => setActive("feedback")}
          />
        </ul>
      </div>

      {/* Logout Button */}
      <div className="">
        <button
          className="text-[#8b1f1f] hover:text-white font-semibold w-full border border-[#8b1f1f] py-2 rounded-lg flex gap-2 items-center justify-center bg-transparent hover:bg-[#8b1f1f] transition duration-300"
          onClick={handleLogout}
        >
          Logout
          <FaSignOutAlt />
        </button>
      </div>
    </div>
  );
};

// Sidebar item as reusable component
const SidebarItem = ({ label, icon, isActive, onClick }) => {
  return (
    <li
      onClick={onClick}
      className={`flex items-center gap-3 px-4 py-2 rounded-lg cursor-pointer transition duration-300
        ${
          isActive
            ? "bg-[#f9c4a3] text-[#5e2c04] font-semibold shadow-sm"
            : "text-[#6c3d0c] hover:bg-[#fae1c3] hover:text-[#5e2c04]"
        }`}
    >
      <span className="text-lg">{icon}</span>
      <span className="text-base">{label}</span>
    </li>
  );
};

export default Sidebar;
