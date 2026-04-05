"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

import { NAV_LINKS } from "../data/nav";

/* ================= LINK ================= */

const NavLink = ({ href, title }: { href: string; title: string }) => {
  const pathname = usePathname();

  return (
    <Link href={href} className="relative group px-3 py-2 text-sm">
      {title}
      <span
        className={`absolute left-0 -bottom-0.5 h-0.5 bg-amber-400 transition-all duration-300
        ${pathname === href ? "w-full" : "w-0 group-hover:w-full"}`}
      />
    </Link>
  );
};

/* ================= NAVBAR ================= */

export default function NavBar() {
  return (
    <Disclosure
      as="nav"
      className="fixed top-0 w-full z-50 bg-neutral-900/80 backdrop-blur-md border-b border-white/10"
    >
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">

              {/* LOGO */}
              <div className="text-amber-400 font-bold text-lg">
                Pongsapak Suwandee
              </div>

              {/* DESKTOP */}
              <div className="hidden md:flex space-x-6 text-gray-300 hover:text-white">
                {NAV_LINKS.map((link) => (
                  <NavLink key={link.href} {...link} />
                ))}
              </div>

              {/* MOBILE BUTTON */}
              <div className="md:hidden">
                <DisclosureButton className="p-2 text-gray-300 hover:text-white">
                  {open ? (
                    <XMarkIcon className="w-6 h-6" />
                  ) : (
                    <Bars3Icon className="w-6 h-6" />
                  )}
                </DisclosureButton>
              </div>
            </div>
          </div>

          {/* MOBILE MENU */}
          <DisclosurePanel>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="md:hidden px-4 pb-4 flex flex-col space-y-3 bg-neutral-900"
            >
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-300 hover:text-white"
                >
                  {link.title}
                </Link>
              ))}
            </motion.div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
}