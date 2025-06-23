import { useState } from "react";
import { Link } from "react-router-dom";
import { navLinks } from "../constant/navlink";
import { BsArrowRight } from "react-icons/bs";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full max-w-7xl mx-auto sticky top-0 z-50 bg-white backdrop-blur-sm transition duration-300">
      <div>
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link
              to="/"
              className="text-3xl font-bold text-teal-600 hover:text-teal-700 transition-colors ml-2"
            >
              Heal Nexus🏥
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-teal-600 px-3 py-2 text-sm font-bold transition-colors duration-200 relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-600 transition-all duration-200 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          <div className="hidden md:flex gap-5">
            <Link
              to="/login"
              className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2 rounded-lg font-medium transition-all duration-200 flex items-center"
            >
              Login
            </Link>
            <Link
              to="/quote"
              className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2 rounded-lg font-medium transition-all duration-200 flex items-center gap-2 shadow-sm hover:shadow-md"
            >
              Get a Quote
              <BsArrowRight />
            </Link>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-teal-600 focus:outline-none focus:text-teal-600 transition-colors"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isOpen
              ? "max-h-96 opacity-100"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200 shadow-lg">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-gray-700 hover:text-teal-600 hover:bg-gray-50 block px-3 py-2 text-base font-bold transition-colors duration-200 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-2 flex flex-col gap-3">
              <Link
                to="/login"
                className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2 rounded-lg font-medium transition-all duration-200 flex items-center"
              >
                Login
              </Link>
              <Link
                to="/quote"
                className="bg-teal-600 hover:bg-teal-700 text-white  px-3 py-2 text-base font-medium transition-colors duration-200 rounded-md text-center flex items-center justify-center gap-2"
                onClick={() => setIsOpen(false)}
              >
                Get a Quote
                <BsArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
