import React from "react";

const Contact = () => {
  return (
    <>
      <section className="min-h-screen bg-gradient-to-br from-[#fbe8d3] via-[#f7d9c4] to-[#fff3e0] flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-3xl bg-white shadow-2xl rounded-2xl p-8 border border-[#c49b63]">
        <h2 className="text-4xl font-bold text-[#8b1f1f] mb-6 text-center font-serif">
          Contact Us
        </h2>
        <p className="text-center text-[#6c3d0c] mb-10">
          We'd love to be a part of your big day. Reach out to us for bookings,
          queries, or blessings!
        </p>
        <form className="space-y-6">
          <div>
            <label className="block text-[#5e2c04] font-semibold mb-1">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 border border-[#c49b63] rounded-md focus:outline-none focus:ring-2 focus:ring-[#d4a373]"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label className="block text-[#5e2c04] font-semibold mb-1">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border border-[#c49b63] rounded-md focus:outline-none focus:ring-2 focus:ring-[#d4a373]"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="block text-[#5e2c04] font-semibold mb-1">
              Message
            </label>
            <textarea
              rows="5"
              className="w-full px-4 py-2 border border-[#c49b63] rounded-md focus:outline-none focus:ring-2 focus:ring-[#d4a373]"
              placeholder="Share your thoughts..."
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-[#8b1f1f] text-white px-6 py-2 rounded-full hover:bg-[#a83232] transition duration-300"
            >
              Send Message
            </button>
          </div>
        </form>
        <p className="text-sm text-center text-[#754c24] mt-6 italic">
          We’ll get back to you within 24 hours. Your memories matter to us!
        </p>
      </div>
    </section>
    </>
  );
};

export default Contact;
