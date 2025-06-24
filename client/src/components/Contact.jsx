import React from "react";

const Contact = () => {
  return (
    <>
      <div className="flex justify-center pt-10 text-3xl font-bold">
        Contact Us
      </div>

      <section
        style={{
          backgroundImage:
            "url('https://planning.wedding/_next/image?url=%2Fassets%2Fi%2Fpages%2Fcontacts%2Ftalk.png&w=1920&q=75')",
        }}
      >
        <div className="flex justify-center h-100 bg-center w-full mt-20 font-bold text-3xl mb-20"></div>
      </section>

      <section className="mb-10">
        <form className="max-w-md mx-auto mt-10 space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
            required
          />
          <textarea
            placeholder="Your Message"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
            rows="4"
            required
          ></textarea>
          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-md hover:bg-transparent hover:border hover:border-black hover:text-black transition"
          >
            Send
          </button>
        </form>
      </section>
    </>
  );
};

export default Contact;
