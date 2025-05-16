"use client";

import Link from "next/link";
import React from "react";

type NavLinkProps = {
  href: string;
  label: string;
  onClick?: () => void;
};

const NavLink: React.FC<NavLinkProps> = ({ href, label, onClick }) => {
  return (
    <li>
      <Link
        href={href}
        onClick={onClick}
        className="block text-white hover:bg-secondary hover:border border-white/10 rounded-md px-3 py-2 transition"
      >
        {label}
      </Link>
    </li>
  );
};

export default NavLink;
