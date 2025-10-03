import "./App.css";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { ContactForm } from "./components/ContactForm";
import { MeetingForm } from "./components/MeetingForm";
import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
  }, []);

  return (
    <div className={`app ${isLoaded ? "loaded" : ""}`}>
      <Navbar />

      <Hero />
      <Projects />

      {/* Forms */}
      <ContactForm />
      <MeetingForm />

      <motion.footer
        className="footer"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p>&copy; 2025 Chirag Choken. All rights reserved.</p>
      </motion.footer>
    </div>
  );
}

export default App;
