import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function Projects() {
  const mainProject = {
    name: "E-commerce Snowboard Collection",
    description:
      "A modern e-commerce app for snowboard products with animated UI, responsive design, and smooth shopping flow.",
    github: "https://github.com/Mdkaish7732/E-commerce-Snowboard-Collection-",
    live: "https://e-commerce-snowboard-collection.vercel.app/",
    image: "/public/image.png",
  };

  const miniProjects = [
    {
      name: "React User Authentication",
      github: "https://github.com/Mdkaish7732/React-User-Authentication/",
      live: "https://react-user-authentication-two.vercel.app/",
    },


    {
      name: "Notes App",
      github: "https://github.com/Mdkaish7732/django-notes-app",
      live: "https://django-notes-app-rvz0.onrender.com",
    },
    
    {
      name: "Portfolio Website",
      github: "https://github.com/",
      live: "https://vercel.com/",
    },
  ];

  return (  
    <section
      id="projects"
      className="py-20 bg-gradient-to-br from-[#0f172a] via-[#1e1b4b] to-[#050517] text-blue-500 relative overflow-hidden"
    >
      {/* Background glowing blobs */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-bold text-center mb-16">Projects</h2>

        {/* Main Project Spotlight */}
        <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} perspective={1000} scale={1.02} transitionSpeed={800}>
          <motion.div
            className="max-w-3xl mx-auto relative rounded-3xl overflow-hidden shadow-2xl group mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{
              background:
                "linear-gradient(145deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))",
              border: "1px solid rgba(255,255,255,0.1)",
              boxShadow:
                "0 10px 30px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.1)",
            }}
          >
            {/* Screenshot */}
            <div className="relative">
              <img
                src={mainProject.image}
                alt={mainProject.name}
                className="w-full h-96 object-cover rounded-t-3xl group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            </div>

            {/* Project Details */}
            <div className="p-8 relative z-10">
              <h3 className="text-3xl font-semibold text-cyan-400 mb-4">
                {mainProject.name}
              </h3>
              <p className="text-gray-300 mb-6">{mainProject.description}</p>

              {/* Action Buttons */}
              <div className="flex space-x-4">
                <a
                  href={mainProject.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-cyan-400 text-black font-semibold px-5 py-3 rounded-lg hover:bg-cyan-300 transition"
                >
                  <FaExternalLinkAlt /> Live Demo
                </a>
                <a
                  href={mainProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-white/10 border border-white/20 text-white px-5 py-3 rounded-lg hover:bg-cyan-400 hover:text-black transition"
                >
                  <FaGithub /> View Code
                </a>
              </div>
            </div>
          </motion.div>
        </Tilt>

        {/* Mini Project Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {miniProjects.map((proj, idx) => (
            <motion.div
              key={idx}
              className="p-6 rounded-2xl shadow-lg text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
              style={{
                background:
                  "linear-gradient(145deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))",
                border: "1px solid rgba(255,255,255,0.1)",
                boxShadow:
                  "0 6px 20px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.05)",
              }}
            >
              <h4 className="text-xl font-semibold text-cyan-300 mb-4">
                {proj.name}
              </h4>
              <div className="flex justify-center space-x-4">
                <a
                  href={proj.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-cyan-200 transition"
                >
                  <FaExternalLinkAlt size={20} />
                </a>
                <a
                  href={proj.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-cyan-400 transition"
                >
                  <FaGithub size={20} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
