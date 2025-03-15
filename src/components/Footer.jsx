const Footer = () => {
  return (
    <footer className="bg-primary2 text-tertiary2 font-orbitron py-8">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        {/* Brand Logo */}
        <h1 className="text-2xl font-bold text-primary1">XOLARIE</h1>

        {/* Navigation Links */}
        <nav className="flex gap-6 mt-4 md:mt-0 text-tertiary1">
          <a href="#" className="hover:text-secondary1 transition">Home</a>
          <a href="#" className="hover:text-secondary1 transition">Services</a>
          <a href="#" className="hover:text-secondary1 transition">Projects</a>
          <a href="#" className="hover:text-secondary1 transition">Contact</a>
        </nav>

        {/* Social Media Icons */}
        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="#" className="hover:text-secondary1 transition">
            <i className="fab fa-twitter text-xl"></i>
          </a>
          <a href="#" className="hover:text-secondary1 transition">
            <i className="fab fa-linkedin text-xl"></i>
          </a>
          <a href="#" className="hover:text-secondary1 transition">
            <i className="fab fa-github text-xl"></i>
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-sm mt-6 text-tertiary3">
        © {new Date().getFullYear()} XOLARIE. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
