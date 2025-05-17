"use client";

import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import NavLink from "./NavLink";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = [
    { href: "#hero", label: "Accueil" },
    { href: "#about", label: "À propos" },
    { href: "#projects", label: "Projets" },
    { href: "#contact", label: "Contacte" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent p-4">
      <div className="flex justify-end items-center">
        <button
          onClick={toggleMenu}
          className={`text-white text-2xl p-3 glassmorphic rounded-xl focus:outline-none transition-all duration-200 ${
            isOpen ? "hidden" : ""
          }`}
        >
          <FiMenu />
        </button>
      </div>

      {isOpen && (
        <div className="fixed top-0 right-0 h-1/3 w-50 glassmorphic shadow-lg overflow-hidden z-50 p-4 rounded-xl m-4 flex flex-col justify-center items-center">
          <button
            onClick={toggleMenu}
            className="absolute top-0 p-3 right-0 text-2xl bg-secondary rounded-xl border border-white/10 hover:text-white"
          >
            <FiX />
          </button>
          <ul className="w-full text-center space-y-3">
            {navItems.map((item) => (
              <NavLink key={item.href} href={item.href} label={item.label} onClick={toggleMenu} />
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
