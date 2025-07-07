import React from 'react'

const UserDashboard = () => {
  return (
    <>
    <section className="bg-gradient-to-b from-[#fff3e0] to-[#fbe8d3] py-24 px-6 min-h-screen">
  <div className="max-w-7xl mx-auto text-center">
    <h2 className="text-4xl font-bold text-[#8b1f1f] mb-12 font-serif animate-fade-in">User Dashboard</h2>

    <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
      {[
        {
          title: "Personal Info",
          items: [
            "Name: Aditi Sharma",
            "Email: aditi@example.com",
            "Phone: +91 98765 43210"
          ]
        },
        {
          title: "Wedding Details",
          items: [
            "Date: 20 Dec 2025",
            "Location: Udaipur",
            "Theme: Royal Rajasthani"
          ]
        },
        {
          title: "Order Status",
          items: [
            "Mehndi Ceremony - Confirmed",
            "Catering - Pending",
            "Floral Decor - Confirmed"
          ]
        },
        {
          title: "Budget Overview",
          items: [
            "Total: ₹10,00,000",
            "Spent: ₹6,25,000",
            "Remaining: ₹3,75,000"
          ]
        },
        {
          title: "Wallet",
          items: [
            "Balance: ₹5,000",
            "Last Txn: ₹2,500 (Advance)"
          ]
        },
        {
          title: "Notifications",
          items: [
            "📩 New message from planner",
            "💰 Payment reminder: Catering",
            "🎀 Decor vendor confirmed"
          ]
        },
        {
          title: "Guest List",
          items: [
            "Invited: 250",
            "RSVPs: 180"
          ]
        },
        {
          title: "Event Timeline",
          items: [
            "Sangeet: 18 Dec, 6 PM",
            "Wedding: 20 Dec, 9 AM",
            "Reception: 21 Dec, 8 PM"
          ]
        },
        {
          title: "Login Activity",
          items: [
            "Last Login: 6 July, 2025",
            "IP: 192.168.1.23",
            "Device: Chrome on Windows"
          ]
        }
      ].map((section, idx) => {
        const [isOpen, setIsOpen] = React.useState(false);
        return (
          <div
            key={idx}
            className="bg-white border border-[#c49b63] rounded-xl shadow-md p-6 hover:shadow-lg transition duration-300 cursor-pointer animate-fade-slide"
            onClick={() => setIsOpen(!isOpen)}
          >
            <h4 className="text-xl font-semibold text-[#8b1f1f] mb-2 font-serif flex justify-between items-center">
              {section.title}
              <span className="text-[#5e2c04] text-lg">{isOpen ? "−" : "+"}</span>
            </h4>
            {isOpen && (
              <ul className="space-y-2 mt-2">
                {section.items.map((item, i) => (
                  <li key={i} className="text-[#5e2c04] text-sm animate-fade-in">
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>
        );
      })}

      <div className="bg-white border border-[#c49b63] rounded-xl shadow-md p-6 flex flex-col gap-4 hover:shadow-lg transition duration-300 animate-fade-slide">
        <h4 className="text-xl font-semibold text-[#8b1f1f] mb-2 font-serif">Account</h4>
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

<style jsx>{`
  @keyframes fade-in {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  .animate-fade-in {
    animation: fade-in 0.6s ease-in forwards;
  }
  @keyframes fade-slide {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  .animate-fade-slide {
    animation: fade-slide 0.5s ease-in-out forwards;
  }
`}</style>

    </>
  )
}

export default UserDashboard