import React from 'react'

const UserDashboard = () => {
  return (
    <>
    <section className="bg-gradient-to-b from-[#fff3e0] to-[#fbe8d3] py-24 px-6 min-h-screen">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-4xl font-bold text-[#8b1f1f] mb-12 font-serif text-center">User Dashboard</h2>

    <div className="grid gap-10 lg:grid-cols-2">
      {[
        {
          title: "Personal Info",
          icon: "👤",
          items: [
            "Name: Aditi Sharma",
            "Email: aditi@example.com",
            "Phone: +91 98765 43210"
          ]
        },
        {
          title: "Wedding Details",
          icon: "💍",
          items: [
            "Date: 20 Dec 2025",
            "Location: Udaipur",
            "Theme: Royal Rajasthani"
          ]
        },
        {
          title: "Order Status",
          icon: "📦",
          items: [
            "Mehndi Ceremony - Confirmed",
            "Catering - Pending",
            "Floral Decor - Confirmed"
          ]
        },
        {
          title: "Budget Overview",
          icon: "💸",
          items: [
            "Total: ₹10,00,000",
            "Spent: ₹6,25,000",
            "Remaining: ₹3,75,000"
          ]
        },
        {
          title: "Wallet",
          icon: "👛",
          items: [
            "Balance: ₹5,000",
            "Last Txn: ₹2,500 (Advance)"
          ]
        },
        {
          title: "Notifications",
          icon: "🔔",
          items: [
            "📩 New message from planner",
            "💰 Payment reminder: Catering",
            "🎀 Decor vendor confirmed"
          ]
        },
        {
          title: "Guest List",
          icon: "🧾",
          items: [
            "Invited: 250",
            "RSVPs: 180"
          ]
        },
        {
          title: "Event Timeline",
          icon: "🗓",
          items: [
            "Sangeet: 18 Dec, 6 PM",
            "Wedding: 20 Dec, 9 AM",
            "Reception: 21 Dec, 8 PM"
          ]
        },
        {
          title: "Login Activity",
          icon: "🔐",
          items: [
            "Last Login: 6 July, 2025",
            "IP: 192.168.1.23",
            "Device: Chrome on Windows"
          ]
        }
      ].map((section, idx) => (
        <div
          key={idx}
          className="relative bg-white border border-[#c49b63] rounded-3xl shadow-xl p-8 hover:shadow-2xl transition duration-300"
        >
          <div className="absolute -top-6 left-6 bg-[#fff3e0] border border-[#c49b63] rounded-full p-3 text-xl">
            {section.icon}
          </div>
          <h4 className="text-2xl font-bold text-[#8b1f1f] mb-4 font-serif pl-12">{section.title}</h4>
          <ul className="space-y-2 pl-12">
            {section.items.map((item, i) => (
              <li key={i} className="text-[#5e2c04] text-sm">{item}</li>
            ))}
          </ul>
        </div>
      ))}

      <div className="bg-white border border-[#c49b63] rounded-3xl shadow-xl p-8 flex flex-col gap-4 hover:shadow-2xl transition duration-300">
        <h4 className="text-2xl font-bold text-[#8b1f1f] mb-4 font-serif">⚙ Account Settings</h4>
        <button className="bg-[#8b1f1f] text-white text-sm px-4 py-2 rounded-md hover:bg-[#a83232] transition">
          Logout
        </button>
        <button className="border border-red-500 text-red-600 text-sm px-4 py-2 rounded-md hover:bg-red-50 transition">
          Delete Account
        </button>
      </div>
    </div>
  </div>
</section>
    </>
  )
}

export default UserDashboard