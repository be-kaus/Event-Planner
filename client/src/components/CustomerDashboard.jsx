import React from "react";

const CustomerDashboard = () => {
  return (
    <>
      <div className="w-75 border min-h-[87vh] p-5 ">
        <div className=" border-b-2 pb-3 h-fit">
          <span className="text-2xl font-bold ">Customer's Dashboard</span>
        </div>

        <div className="p-5">
          <ul className="grid gap-4">
            <li>Overview</li>
            <li>Profile</li>
            <li>Bookings</li>
            <li>Support</li>
            <li>Feedback</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default CustomerDashboard;
