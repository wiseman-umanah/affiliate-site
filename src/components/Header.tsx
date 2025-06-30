// import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
// import { Menu, X } from "lucide-react";

export function Header() {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const menuRef = useRef<HTMLDivElement>(null);

  // Close if clicked outside
//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
//         setMobileMenuOpen(false);
//       }
//     };

//     if (mobileMenuOpen) {
//       document.addEventListener("mousedown", handleClickOutside);
//     } else {
//       document.removeEventListener("mousedown", handleClickOutside);
//     }

//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, [mobileMenuOpen]);

  return (
    <header className="bg-black fixed left-0 right-0 top-0 z-20 px-4 py-4 shadow-lg">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <Link to="/">
			<h1 className="text-white font-bold text-lg sm:text-xl">
				PropLite <span className="text-cyan-300">Trades</span> & Oraimo{" "}
				<span className="text-cyan-300">Deals</span>
			</h1>
		</Link>

        {/* Desktop Nav */}
        {/* <nav className="hidden font-bold md:flex gap-4 text-sm">
          <Link
            to="/about"
            className="text-gray-300 hover:text-cyan-400 transition-colors"
          >
            About Us
          </Link>
          <Link
            to="/privacy-policy"
            className="text-gray-300 hover:text-cyan-400 transition-colors"
          >
            Privacy Policy
          </Link>
          <Link
            to="/contact"
            className="text-gray-300 hover:text-cyan-400 transition-colors"
          >
            Contact Us
          </Link>
          <Link
            to="/terms"
            className="text-gray-300 hover:text-cyan-400 transition-colors"
          >
            Terms of Use
          </Link>
        </nav> */}

        {/* Mobile Menu Button */}
        {/* <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-gray-300 hover:text-cyan-400 transition-colors"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button> */}
      </div>

      {/* Mobile Dropdown */}
      {/* {mobileMenuOpen && (
        <div
          ref={menuRef}
          className="md:hidden bg-black flex flex-col gap-4 px-4 py-4"
        >
          <Link
            to="/about"
            onClick={() => setMobileMenuOpen(false)}
            className="text-gray-300 hover:text-cyan-400 transition-colors"
          >
            About Us
          </Link>
          <Link
            to="/privacy-policy"
            onClick={() => setMobileMenuOpen(false)}
            className="text-gray-300 hover:text-cyan-400 transition-colors"
          >
            Privacy Policy
          </Link>
          <Link
            to="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="text-gray-300 hover:text-cyan-400 transition-colors"
          >
            Contact Us
          </Link>
          <Link
            to="/terms"
            onClick={() => setMobileMenuOpen(false)}
            className="text-gray-300 hover:text-cyan-400 transition-colors"
          >
            Terms of Use
          </Link>
        </div>
      )} */}
    </header>
  );
}
