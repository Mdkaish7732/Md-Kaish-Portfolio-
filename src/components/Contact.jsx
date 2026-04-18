import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { SiLeetcode } from "react-icons/si";
import {
  FaLinkedin, FaGithub, FaTwitter, FaEnvelope, FaMapMarkerAlt,FaPhoneAlt, FaUser,
} from "react-icons/fa";

export default function Contact() {
  const form = useRef();

  const [isSending, setIsSending] = useState(false);
  const [cooldown, setCooldown] = useState(0);

  const sendEmail = async (e) => {
    e.preventDefault();


   if (isSending) return; // silent block during sending

   if (cooldown > 0) {
      toast.error(`Please wait ${cooldown}s ⏳`);
     return;
    }

    setIsSending(true);

    const formData = new FormData(form.current);


  // ✅ GET EMAIL
  const email = formData.get("user_email");

  // ✅ REGEX VALIDATION for valid write email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    toast.error("Please enter a valid email address ❌");
    return; // STOP if invalid
  }

    try {
      // 1️⃣ Send main email to you
      await emailjs.sendForm(
        "service_ngir6pm", // Replace with your actual service ID
        "template_vm5s7js", // Replace with your main template ID
        form.current,
        "ewO1ZU9XS6a1QfYb5" // Replace with your actual public key
      );

      // 2️⃣ Send auto-reply to the user
      await emailjs.send(
        "service_ngir6pm", // Same service ID
        "template_ntrb0ou", // Replace with auto-reply template ID
        {
          first_name: formData.get("first_name"),
          last_name: formData.get("last_name"),
          subject: formData.get("subject"),
          message: formData.get("message"),
          user_email: formData.get("user_email"), // This goes to the user
        },
        "ewO1ZU9XS6a1QfYb5" // Same public key
      );

      toast.success("Thanks! I'll get back to you soon 😊");
      form.current.reset();

     // 🔥 Start 120 sec cooldown
      setCooldown(120);

      const timer = setInterval(() => {
        setCooldown((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);


    } catch (error) {
      console.error("Email send error:", error);
      toast.error("❌ Something went wrong. Please try again.");
    }
  };

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-[#050517] via-[#0f172a] to-[#1e1b4b] text-blue-500 relative overflow-hidden"
    >
      {/* Glowing background orbs */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-bold text-center mb-12">Contact Me</h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left - Contact Info */}
          <motion.div
            className="relative p-8 rounded-3xl shadow-xl bg-white/5 border border-white/10 backdrop-blur-lg"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-cyan-400 text-center">
              Get in Touch
            </h3>

            <div className="space-y-5 text-lg">
              <p className="flex items-center space-x-3">
                <FaUser className="text-cyan-400" /> <span>Md Kaish</span>
              </p>
              <p className="flex items-center space-x-3">
                <FaPhoneAlt className="text-cyan-400" />{" "}
                <span>+91 7870536377</span>
              </p>
              <p className="flex items-center space-x-3">
                <FaEnvelope className="text-cyan-400" />{" "}
                <span>mdkaish7732@gmail.com</span>
              </p>
              
              <p className="flex items-center space-x-3">
                <FaMapMarkerAlt className="text-cyan-400" />{" "}
                <span>Noida, India</span>
              </p>
            </div>

            {/* Social Icons */}
            <div className="mt-8 flex space-x-6">
              {[
                { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/md-kaish-3b7986211/" },
                { icon: <FaGithub />, link: "https://github.com/Mdkaish7732" },
                { icon: <SiLeetcode className="text-orange-400" />, link: "https://leetcode.com/u/Mdkaish7732/" },
                { icon: <FaTwitter />, link: "https://twitter.com" },
                
              ].map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl p-3 rounded-full bg-white/10 border border-white/10 hover:bg-cyan-400 hover:text-black transition"
                  whileHover={{ scale: 1.2 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right - Send Message Form */}
          <motion.form
            ref={form}
            onSubmit={sendEmail}
            className="relative p-8 rounded-3xl shadow-xl bg-white/5 border border-white/10 backdrop-blur-lg"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >

          
            <h3 className="text-2xl font-semibold mb-6 text-cyan-400   text-center">
             Let’s Work Together
            </h3>

            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  name="first_name"
                  placeholder="First Name"
                  className="px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-cyan-400 outline-none text-white placeholder-gray-400"
                  required
                />
                <input
                  type="text"
                  name="last_name"
                  placeholder="Last Name"
                  className="px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-cyan-400 outline-none text-white placeholder-gray-400"
                  required
                />
              </div>

              <input
                type="email"
                name="user_email"
                placeholder="Email"
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-cyan-400 outline-none text-white placeholder-gray-400"
                required
              />

              <input
                type="text"
                name="subject"
                placeholder="Subject"
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-cyan-400 outline-none text-white placeholder-gray-400"
                required
              />

              <textarea
                name="message"
                placeholder="Your message"
                rows="5"
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-cyan-400 outline-none text-white placeholder-gray-400 resize-none"
                required
              ></textarea>

              <button
                type="submit"
                className="w-full py-3 bg-cyan-400 text-black font-semibold rounded-lg hover:bg-cyan-300 transition duration-300"
              >
                Send Message
              </button>
            </div>
          </motion.form>
        </div>
      </div>

      {/* Toast notifications */}
      <Toaster position="bottom-right" reverseOrder={false} />
    </section>
  );
}