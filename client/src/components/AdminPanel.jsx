import React, { useState } from "react";
import Sidebar from "../components/Customer/Sidebar";
import Overview from "../components/Customer/Overview";
import Bookings from "../components/Customer/Bookings";
import Support from "../components/Customer/Support";
import Feedback from "../components/Customer/Feedback";
import Profile from "./customer/Profile";

const CustomerDashboard = () => {
  const [active, setActive] = useState("overview");

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fff3e0] to-[#fbe8d3] flex">
      
      <Sidebar active={active} setActive={setActive} />

      <div className="w-full p-6 md:p-10 border-l border-[#c49b63] bg-white shadow-lg overflow-y-auto">
        {active === "overview" && <Overview />}
        {active === "profile" && <Profile />}
        {active === "bookings" && <Bookings />}
        {active === "support" && <Support />}
        {active === "feedback" && <Feedback />}
      </div>
    </div>
  );
};

export default CustomerDashboard;
