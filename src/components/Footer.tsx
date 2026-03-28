
const Footer = () => {
  return (
<footer className=" bg-neutral-950 border-t-2 border-solid border-dark font-medium text-lg">
    <div className="w-full mx-auto max-w-7xl p-4 md:flex md:items-center md:justify-between">
      <span className="text-cyan-50">{new Date().getFullYear()} &copy; All Rights Reserved.</span>
      <ul className="flex flex-wrap items-center mb-6 text-sm sm:mb-0 text-amber-50">
                <li>
                    <a className=" me-4 md:me-6">Thank you.</a>
                </li>
            </ul>
    </div>
    </footer>
  );
};

export default Footer;