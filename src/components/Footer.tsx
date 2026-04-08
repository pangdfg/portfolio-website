import { motion } from "framer-motion";

import { SOCIAL_LINKS } from "../data/social";

const Footer = () => {
  return (
<footer className="bg-neutral-950 border-t-2 border-solid border-dark font-medium text-lg">
  <div className="w-full mx-auto max-w-7xl p-4 flex flex-col md:flex-row md:items-center md:justify-between">
    <span className="text-cyan-50 text-center md:text-left">
      {new Date().getFullYear()} &copy; All Rights Reserved.
    </span>
    <ul className="flex flex-wrap items-center justify-center md:justify-end mb-6 text-sm sm:mb-0 text-amber-50">
      <li>
        <a className="me-4 md:me-6">Email : </a>
        <a href="mailto:pongsapak.suwa@gmail.com" className="text-blue-100 font-medium">
          pongsapak.suwa@gmail.com
        </a>
      </li>

    </ul>
  </div>
</footer>
  );
};

export default Footer;