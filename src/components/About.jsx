import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

export default function About() {
  return (
    <section className="py-20">
      <div className="container mx-auto text-center">
        <motion.div
          className="relative w-full max-w-4xl mx-auto p-10 rounded-3xl bg-gradient-to-br from-gray-800 via-gray-900 to-black dark:from-[#1e1b4b] dark:via-[#0f172a] dark:to-[#050517] shadow-2xl border border-gray-700"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{
            transform: "perspective(1000px) rotateX(2deg) rotateY(-2deg)",
          }}
        >
          {/* Floating 3D Objects */}
          <div className="absolute -top-6 -left-6 w-16 h-16 bg-gradient-to-tr from-pink-500 to-purple-600 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-gradient-to-tr from-cyan-400 to-blue-600 rounded-full blur-xl animate-ping"></div>

          {/* Card Content */}
          <div className="relative z-10">
            <h3 className="text-3xl font-semibold text-blue-500 mb-4">
              About Me
            </h3>
            <p className="mt-4 text-lg text-gray-300 leading-relaxed">
              I am {" "}
              <span className="text-cyan-400 font-semibold">
              Full-Stack Developer
               </span>  {" "}

              with hands-on experience in building scalable web applications
              using modern technologies. I specialize in developing responsive{" "}
              <span className="text-pink-400">frontends with React and robust</span> backend systems using Python
              frameworks.
              <br />
              <br />I have practical experience in working on real-world
              projects, including authentication systems, API integrations, and
              dynamic user interfaces. I am also passionate about
              <span className="text-purple-400">
                {" "}
                AI & Machine Learning
              </span>{" "}
              and continuously explore ways to integrate intelligent solutions
              into applications.
              <br />
              <br />I focus on writing clean, maintainable code and creating
              user-centric designs that deliver real value.
            </p>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
