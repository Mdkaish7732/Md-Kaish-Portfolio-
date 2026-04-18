import { motion } from "framer-motion";
import { FaPython, FaReact, FaAws, FaGitAlt, FaGithub, FaBrain } from "react-icons/fa";
import { SiDjango, SiJavascript, SiCss3, SiHtml5, SiOracle } from "react-icons/si";

const skillCategories = [
  {
    title: "Programming",
    skills: [
      { name: "Python", icon: <FaPython className="text-yellow-400" /> },
      { name: "JavaScript", icon: <SiJavascript className="text-yellow-300" /> },
      { name: "HTML", icon: <SiHtml5 className="text-orange-400" /> },
      { name: "CSS", icon: <SiCss3 className="text-blue-400" /> },
    ],
  },
  {
    title: "Frameworks & AI",
    skills: [
      { name: "Django", icon: <SiDjango className="text-green-500" /> },
      { name: "React.js", icon: <FaReact className="text-cyan-400" /> },
      { name: "Machine Learning", icon: <FaBrain className="text-pink-400" /> },
    ],
  },
  {
    title: "Tools & Cloud",
    skills: [
      { name: "Oracle SQL", icon: <SiOracle className="text-orange-500" /> },
      { name: "AWS", icon: <FaAws className="text-orange-300" /> },
      { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
      { name: "GitHub", icon: <FaGithub className="text-gray-300" /> },
    ],
  },
];

export default function Skills() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#0f172a] via-[#1e1b4b] to-[#312e81]">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-blue-500 mb-12">My Skills</h2>
        <div className="grid md:grid-cols-3 gap-12">
          {skillCategories.map((category, i) => (
            <div key={i}>
              <h3 className="text-2xl font-semibold text-cyan-400 mb-6">{category.title}</h3>
              <div className="grid grid-cols-2 gap-8">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    className="p-6 rounded-2xl bg-gradient-to-br from-cyan-500/30 to-purple-500/30 backdrop-blur-lg shadow-lg border border-white/20 flex flex-col items-center justify-center space-y-3"
                    initial={{ x: -200, rotate: -60, opacity: 0 }}
                    animate={{ x: 0, rotate: 0, opacity: 1 }}
                    transition={{
                      duration: 0.8,
                      delay: index * 0.2,
                      type: "spring",
                    }}
                    whileHover={{ scale: 1.1, rotate: 2 }}
                  >
                    <div className="text-6xl">{skill.icon}</div>
                    <p className="text-lg text-white font-medium">{skill.name}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
