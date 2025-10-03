import { useRef } from "react";
import emailjs from "@emailjs/browser";

export const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_USER_ID"
      )
      .then(
        () => alert("✅ Message sent successfully!"),
        () => alert("❌ Something went wrong, try again!")
      );
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      id="contact"
      className="contact-form max-w-lg mx-auto mt-10 p-8 
                 bg-gradient-to-br from-gray-900/80 to-gray-800/80 
                 backdrop-blur-md rounded-2xl shadow-lg border border-gray-700"
    >
      <h2 className="text-2xl font-bold text-white mb-6 text-center">
        📩 Contact Me
      </h2>
      <input
        type="text"
        name="user_name"
        placeholder="Your Name"
        required
        className="w-full mb-4 p-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:ring-2 focus:ring-blue-500 outline-none"
      />
      <input
        type="email"
        name="user_email"
        placeholder="Your Email"
        required
        className="w-full mb-4 p-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:ring-2 focus:ring-blue-500 outline-none"
      />
      <textarea
        name="message"
        placeholder="Your Message"
        required
        rows="5"
        className="w-full mb-4 p-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:ring-2 focus:ring-blue-500 outline-none resize-none"
      />
      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 transition-all duration-200 
                   text-white font-semibold py-3 rounded-lg shadow-md"
      >
        Send Message
      </button>
    </form>
  );
};
