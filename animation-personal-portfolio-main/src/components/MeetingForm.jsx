import { useRef } from "react";
import emailjs from "@emailjs/browser";

export const MeetingForm = () => {
  const form = useRef();

  const sendMeetingRequest = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_MEETING_TEMPLATE,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => alert("✅ Meeting request sent!"),
        () => alert("❌ Failed to send request.")
      );
  };

  return (
    <form
      ref={form}
      onSubmit={sendMeetingRequest}
      id="meeting"
      className="meeting-form max-w-lg mx-auto mt-12 p-8 
                 bg-gradient-to-br from-gray-900/80 to-gray-800/80 
                 backdrop-blur-md rounded-2xl shadow-lg border border-gray-700"
    >
      <h2 className="text-2xl font-bold text-white mb-6 text-center">
        📅 Book a Meeting
      </h2>
      <input
        type="text"
        name="user_name"
        placeholder="Your Name"
        required
        className="w-full mb-4 p-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:ring-2 focus:ring-green-500 outline-none"
      />
      <input
        type="email"
        name="user_email"
        placeholder="Your Email"
        required
        className="w-full mb-4 p-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:ring-2 focus:ring-green-500 outline-none"
      />
      <input
        type="datetime-local"
        name="meeting_time"
        required
        className="w-full mb-4 p-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:ring-2 focus:ring-green-500 outline-none"
      />
      <button
        type="submit"
        className="w-full bg-green-600 hover:bg-green-700 transition-all duration-200 
                   text-white font-semibold py-3 rounded-lg shadow-md"
      >
        Request Meeting
      </button>
    </form>
  );
};
