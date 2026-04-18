import React from "react";
import { motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  const handleDownload = () => {
    toast.loading("Downloading CV... ⏳");

    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "resume.pdf";
    link.click();

    setTimeout(() => {
      toast.dismiss();
      toast.success("CV downloaded successfully 📄✅");
    }, 1000);
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-[80vh] text-center md:text-left">
      <Toaster position="top-center" />

      <motion.img
        src="/dp.png"
        alt="Md Kaish"
        className="w-40 h-40 md:w-56 md:h-56 rounded-full shadow-lg border-4 border-cyan-400 object-cover cursor-pointer"
        initial={{ rotateY: 0, perspective: 1000 }}
        whileHover={{ rotateY: 150, scale: 1.05 }}
        transition={{ duration: 0.6 }}
      />

      <div className="md:ml-10 mt-6 md:mt-0">
        <motion.h1
          className="text-4xl md:text-6xl font-bold"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <span className="bg-gradient-to-r from-cyan-400 to-green-500 bg-clip-text text-transparent">
            Hi, I’m Md Kaish
          </span>
        </motion.h1>
        {/*For TypeAnimation line */}
        <TypeAnimation
          sequence={[
            "Full-Stack Developer | Python Developer | AI & ML Enthusiast",
          ]}
          wrapper="span"
          speed={50}
        />
        <div className="mt-6 flex justify-center md:justify-start space-x-4">
          {/* Contact Button */}
          <a
            href="#contact"
            className="bg-cyan-400 text-black px-5 py-2 rounded-lg font-semibold hover:bg-cyan-300 transition"
          >
            Contact Me
          </a>

          {/* Download CV Button */}
          <button
            onClick={handleDownload}
            className="border border-cyan-400 px-5 py-2 rounded-lg font-semibold hover:bg-cyan-400 hover:text-black transition"
          >
            Download CV
          </button>
        </div>
      </div>
    </div>
  );
}

