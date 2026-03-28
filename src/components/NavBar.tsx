"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

import { NAV_LINKS } from "../data/nav";
import { SOCIAL_LINKS } from "../data/social";

/* ================= TYPES ================= */

type CustomLinkProps = {
  href: string;
  title: string;
  className?: string;
};

type CustomMobileLinkProps = CustomLinkProps & {
  toggle: () => void;
};

/* ================= DESKTOP LINK ================= */

const CustomLink = ({ href, title, className = "" }: CustomLinkProps) => {
  const pathname = usePathname();

  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`h-px inline-block bg-amber-50 absolute left-0 -bottom-0.5 
        group-hover:w-full transition-[width] duration-300 ease
        ${pathname === href ? "w-full" : "w-0"}`}
      />
    </Link>
  );
};

/* ================= MOBILE LINK ================= */

const CustomMobileLink = ({
  href,
  title,
  className = "",
  toggle,
}: CustomMobileLinkProps) => {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      onClick={toggle}
      className={`${className} relative group text-gray-50 my-2`}
    >
      {title}
      <span
        className={`h-px inline-block bg-amber-50 absolute left-0 -bottom-0.5 
        group-hover:w-full transition-[width] duration-300 ease
        ${pathname === href ? "w-full" : "w-0"}`}
      />
    </Link>
  );
};

/* ================= NAVBAR ================= */

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () =>{
    setIsOpen(!isOpen)
  }

  return (
    <header
      className="w-full px-32 py-8 flex items-center justify-between z-100
      lg:px-16 md:px-12 sm:px-8 fixed top-0 border-default bg-neutral-900"
    >
      {/* MOBILE BUTTON */}
      <button
        className="flex-col justify-center items-center hidden lg:flex"
        onClick={handleClick}
      >
        <span
          className={`bg-gray-900 h-0.5 w-6 rounded-sm transition-all 
          ${isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"}`}
        />
        <span
          className={`bg-gray-900 h-0.5 w-6 my-0.5 rounded-sm transition-all 
          ${isOpen ? "opacity-0" : "opacity-100"}`}
        />
        <span
          className={`bg-gray-900 h-0.5 w-6 rounded-sm transition-all 
          ${isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"}`}
        />
      </button>

      {/* DESKTOP */}
      <div className="w-full flex justify-between items-center ">
        <nav>
          {NAV_LINKS.map((link) => (
            <CustomLink key={link.href} {...link} className="mx-4 text-amber-50"  />
          ))}
        </nav>

        <nav className="flex items-center justify-center flex-wrap gap-6">
          {SOCIAL_LINKS.map(({ href, Icon }) => (
            <motion.a
              key={href}
              href={href}
              target="_blank"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6  mr-3 bg-amber-50 rounded-full"
            >
              <Icon />
            </motion.a>
          ))}
        </nav>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <motion.div
          initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
          animate={{ scale: 1, opacity: 1, x: "-50%", y: "-50%" }}
          className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
          w-[70vw] flex flex-col items-center justify-between
          bg-neutral-800/90 rounded-lg backdrop-blur-md py-32 z-30"
        >
          <nav className="flex flex-col items-center text-amber-50">
            {NAV_LINKS.map((link) => (
              <CustomMobileLink
                key={link.href}
                {...link}
                toggle={handleClick}
              />
            ))}
          </nav>

          <nav className="flex items-center mt-4">
            {SOCIAL_LINKS.map(({ href, Icon }) => (
              <motion.a
                key={href}
                href={href}
                target="_blank"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="w-6 mx-3 bg-amber-50"
              >
                <Icon />
              </motion.a>
            ))}
          </nav>
        </motion.div>
      )}
    </header>
  );
};

export default NavBar;