"use client";
import React from "react";

const ContactButton = () => {
  const handleClick = () => {
    const section = document.getElementById("contact");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <button
      className="mt-2 glassmorphic py-3 px-7 rounded-lg hover:bg-secondary/10 transition-all duration-200 text-white text-lg font-semibold border border-white/10 focus:outline-none"
      onClick={handleClick}
    >
      Me contacter
    </button>
  );
};

export default ContactButton;