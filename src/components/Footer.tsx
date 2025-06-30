import { Link } from "react-router-dom";
import FacebookCircleIcon from "./icons/Facebook";
import InstagramIcon from "./icons/Instagram";
import TwitterXIcon from "./icons/XLogo";

export default function Footer() {
  return (
    <footer className="bg-[#0c1524] text-gray-400 mt-12">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        <div className="flex flex-col items-center md:items-start gap-3 text-center md:text-left">
			<Link to="/">
				<div className="text-white text-lg font-bold tracking-wide">
					PropLite
				</div>
			</Link>
          <div className="text-sm">
          Copyright  &copy; {new Date().getFullYear()} PropLite Future Trades. All rights reserved.
          </div>
        </div>

        <div className="flex flex-col items-center gap-3 text-center md:text-left">
          <h4 className="text-white font-semibold text-sm">Quick Links</h4>
          <nav className="flex md:flex-col gap-2 flex-wrap justify-center text-center text-sm">
				<Link to="/about" className="hover:text-cyan-400 transition-colors">
					About Us
				</Link>
				<Link to="/privacy-policy" className="hover:text-cyan-400 transition-colors">
					Privacy Policy
				</Link>
				<Link to="/contact" className="hover:text-cyan-400 transition-colors">
					Contact Us
				</Link>
				<Link to="/terms" className="hover:text-cyan-400 transition-colors">
					Terms of Use
				</Link>
			</nav>

        </div>

        <div className="flex flex-col items-center md:items-start gap-3 text-center md:text-left w-full">
          <h4 className="text-white font-semibold text-sm">Subscribe to our newsletter</h4>
          <p className="text-xs text-gray-400 max-w-xs">
            Get the latest prop trading offers and updates straight to your inbox.
          </p>
          <form className="flex w-full max-w-xs">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow rounded-l-md px-3 py-2 bg-slate-800 border border-slate-700 text-sm text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
            <button
              type="submit"
              className="bg-[#2563EB] hover:bg-cyan-400 text-white font-semibold px-4 rounded-r-md text-sm transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>

        <div className="flex flex-col items-center md:items-start gap-3 text-center md:text-left">
          <h4 className="text-white font-semibold text-sm">Connect With Us</h4>
          <div className="flex gap-4">
            <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
			  <FacebookCircleIcon className="w-6 h-6"/>
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
			  <TwitterXIcon className="w-6 h-6" />
            </a>
            <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
			  <InstagramIcon className="w-6 h-6"/>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
