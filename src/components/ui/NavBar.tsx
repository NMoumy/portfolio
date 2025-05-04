import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <nav className="top-5 left-1/2 transform -translate-x-1/2 glassmorphic z-50 px-20 py-5 fixed rounded-2xl">
      <div className="flex gap-4 text-white">
        <Link href="#hero">Accueil</Link>
        <Link href="#about">About</Link>
        <Link href="#projects">Projet</Link>
        <Link href="#services">Services</Link>
      </div>
    </nav>
  );
};

export default NavBar;
