import React, { useState, useEffect } from "react";

export default function Certificates() {
  const [selected, setSelected] = useState(null);
  const [zoomStyle, setZoomStyle] = useState({});

  const certificates = [
    {
      src: "/certificate/cir1.jpg",
      title: "Python for Data Science AI Development",
      org: "IBM",
    },
    {
      src: "/certificate/cir2.jpg",
      title: "Machine Learning with Python",
      org: "Coursera",
    },
    {
      src: "/certificate/cir3.jpg",
      title: "AWS Cloud Technical Essential",
      org: "aws",
    },
    {
      src: "/certificate/cir4.jpg",
      title: "Migrating to aws cloud",
      org: "aws",
    },
    {
      src: "/certificate/cirf.jpg",
      title: "Full Stack Development",
      org: "Qspiders Noida",
    },
  ];

  // ESC close
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") setSelected(null);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  // Zoom inside modal
  const handleMouseMove = (e) => {
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();

    const x = (e.clientX - left) / width;
    const y = (e.clientY - top) / height;

    setZoomStyle({
      transform: "scale(2)",
      transformOrigin: `${x * 100}% ${y * 100}%`,
    });
  };

  const resetZoom = () => {
    setZoomStyle({
      transform: "scale(1)",
      transformOrigin: "center",
    });
  };

  return (
    <section
      id="certificates"
      className="py-16 overflow-hidden select-none"
      onContextMenu={(e) => e.preventDefault()}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-blue-500">
        Certifications
      </h2>

      {/* AUTO SLIDER */}
      <div className="overflow-hidden w-full">
        <div className="flex animate-autoScroll gap-10 w-max">
          {[...certificates, ...certificates].map((cert, index) => (
            <div
              key={index}
              className="min-w-[420px] md:min-w-[500px] p-[1.5px] rounded-2xl animate-border"
            >
              <div
                className="bg-[#0f172a]/70 backdrop-blur-lg rounded-2xl overflow-hidden shadow-xl cursor-pointer hover:scale-105 transition"
                onClick={() => setSelected(cert)}
              >
                {/* Watermark */}
                <div className="absolute inset-0 flex items-center justify-center opacity-10 text-red font-bold rotate-[-25deg] pointer-events-none">
                  Md Kaish
                </div>

                {/* IMAGE (FULL VIEW) */}
                <div className="bg-black/30 p-4 flex items-center justify-center">
                  <img
                    src={cert.src}
                    alt={cert.title}
                    draggable="false"
                    className="w-full h-[350px] object-contain rounded-lg"
                  />
                </div>

                {/* TEXT */}
                <div className="py-3 text-center">
                  <p className="text-cyan-400 font-semibold text-lg">
                    {cert.title}
                  </p>
                  <p className="text-gray-400 text-sm">
                    {cert.org}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* MODAL */}
      {selected && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
          onClick={() => setSelected(null)}
        >
          <div
            className="relative w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className="overflow-hidden rounded-lg"
              onMouseMove={handleMouseMove}
              onMouseLeave={resetZoom}
            >
              <img
                src={selected.src}
                alt={selected.title}
                className="w-full max-h-[80vh] object-contain transition-transform duration-300"
                
              />
            </div>

            <div className="text-center mt-4">
              <p className="text-xl text-cyan-400 font-semibold">
                {selected.title}
              </p>
              <p className="text-gray-300">{selected.org}</p>
            </div>

            <button
              onClick={() => setSelected(null)}
              className="absolute top-2 right-2 bg-white/10 hover:bg-red-500 text-white px-3 py-1 rounded-full"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
}