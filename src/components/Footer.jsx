import React from "react";

export default function Footer() {
  return (
    <footer className="text-center text-gray-400 py-2 text-sm border-t border-white/10">
      © {new Date().getFullYear()}{" "}
      <span className="text-cyan-400 font-medium">Md Kaish</span>. 
      All rights reserved • Full-Stack Developer 🚀
    </footer>
  );
}