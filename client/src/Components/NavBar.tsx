import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

function NavBar() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  return (
    <nav
      className={`fixed w-full z-50 top-0 transition-all duration-300 ${
        scrolled
          ? "bg-white dark:bg-black/50 backdrop-blur-md shadow-lg"
          : "bg-white dark:bg-black/50 backdrop-blur-md shadow-lg"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo - Left */}
          <div className="flex-shrink-0 flex items-center">
            <a href="/">
              <img
                src={isDarkMode ? "/Images/logo.png" : "/Images/logso.png"}
                alt="Logo"
                className="h-8 w-auto object-contain"
              />
            </a>
          </div>

          {/* Desktop Menu - Center */}
          <div className="hidden md:flex justify-center items-center space-x-8 flex-1">
            {["Home", "Features", "About Us", "Contact Us"].map(
              (label, idx) => (
                <a
                  key={idx}
                  href={`#${label.toLowerCase().replace(/ /g, "")}`}
                  className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white font-medium underline decoration-yellow-400 underline-offset-4 hover:decoration-4 transition"
                >
                  {label}
                </a>
              )
            )}
          </div>

          {/* Right Side - Sign Up & Theme Toggle */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="/signup"
              className="bg-yellow-400 text-white px-4 py-2 rounded-md hover:bg-yellow-300 hover:text-black transition font-semibold"
            >
              Sign Up
            </a>
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="border px-2 py-1 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition"
              title="Toggle theme"
            >
              {isDarkMode ? "☀️" : "🌙"}
            </button>
          </div>

          {/* Mobile Menu Icons */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition"
              title="Toggle theme"
            >
              {isDarkMode ? "☀️" : "🌙"}
            </button>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition"
              title="Menu"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-black px-4 pt-4 pb-6 space-y-4 shadow-md">
          {["Home", "Features", "About Us", "Contact Us"].map((label, idx) => (
            <a
              key={idx}
              href={`#${label.toLowerCase().replace(/ /g, "")}`}
              className="block text-gray-700 dark:text-gray-300 hover:underline underline-offset-4 decoration-yellow-400 transition"
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </a>
          ))}
          <a
            href="#signup"
            className="block bg-yellow-400 text-white px-4 py-2 rounded-md hover:bg-yellow-300 hover:text-black transition font-semibold"
            onClick={() => setMenuOpen(false)}
          >
            Sign Up
          </a>
        </div>
      )}
    </nav>
  );
}

export default NavBar;
