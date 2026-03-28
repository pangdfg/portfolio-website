
const Footer = () => {
  return (
<footer className="w-full bg-gray-950 border-t-2 border-solid border-dark font-medium text-lg">
    <div className="w-full mx-auto max-w-7xl p-4 md:flex md:items-center md:justify-between">
      <span className="text-cyan-50">{new Date().getFullYear()} &copy; All Rights Reserved.</span>
    </div>
    </footer>
  );
};

export default Footer;