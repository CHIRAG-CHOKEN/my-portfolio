import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// 🟢 Define your project data in an array (easy to scale later)
const projects = [
  {
    title: "AI SaaS Platform",
    description:
      "A modern SaaS platform built with Next.js and OpenAI integration, featuring real-time AI-powered content generation and analytics.",
    image: "/projects/ai-saas.png",
    tech: ["Next.js", "OpenAI", "TailwindCSS"],
    link: "https://your-ai-saas-link.com",
  },
  {
    title: "Social Media Dashboard",
    description:
      "A comprehensive social media management dashboard with analytics, scheduling, and engagement tracking features.",
    image: "/projects/social-media.png",
    tech: ["React", "Node.js", "MongoDB"],
    link: "https://your-social-dashboard-link.com",
  },
  {
    title: "Productivity Timer",
    description:
      "A sleek productivity timer application with customizable work sessions, statistics tracking, and dark mode support.",
    image: "/projects/stopwatch.png",
    tech: ["React", "TypeScript", "TailwindCSS"],
    link: "https://your-productivity-timer-link.com",
  },
  {
    title: "E-Commerce Store",
    description:
      "A full-stack e-commerce web app with product listings, cart, checkout, and payment gateway integration.",
    image: "/projects/ecommerce.png",
    tech: ["Next.js", "Stripe", "TailwindCSS"],
    link: "https://your-ecommerce-link.com",
  },
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio showcasing projects, blogs, and contact form, built with animations and modern design.",
    image: "/projects/portfolio.png",
    tech: ["React", "Framer Motion", "TailwindCSS"],
    link: "https://your-portfolio-link.com",
  },
  {
    title: "Chat Application",
    description:
      "A real-time chat application with WebSocket integration, authentication, and group chat features.",
    image: "/projects/chatapp.png",
    tech: ["Node.js", "Socket.IO", "React"],
    link: "https://your-chat-app-link.com",
  },
];

export const Projects = () => {
  return (
    <motion.section
      id="projects"
      className="projects px-6 py-12"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2
        className="text-3xl font-bold mb-10 text-center"
        variants={fadeInUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        My Projects
      </motion.h2>

      {/* 🟢 Grid changed: 3 columns on large screens so 6 projects fit in 2 rows */}
      <motion.div
        className="project-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        {projects.map((project, index) => (
          <motion.a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card block rounded-xl shadow-lg overflow-hidden bg-white dark:bg-gray-900 hover:shadow-2xl transition"
            variants={fadeInUp}
            whileHover={{ y: -10, transition: { duration: 0.2 } }}
          >
            <motion.div
              className="project-image h-48 bg-cover bg-center"
              style={{ backgroundImage: `url(${project.image})` }}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                {project.description}
              </p>
              <div className="project-tech flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 text-xs rounded bg-gray-200 dark:bg-gray-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.a>
        ))}
      </motion.div>
    </motion.section>
  );
};
