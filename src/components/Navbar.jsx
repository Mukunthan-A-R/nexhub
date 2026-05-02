import { MapPin, Search, User } from "lucide-react";
import { Link } from "react-router-dom";
import { services } from "../data/services";
import SearchBox from "./SearchBox";

export default function Navbar() {
  return (
    <header className="w-full border-b border-purple-700 bg-purple-800 text-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        {/* LEFT SECTION */}
        <div className="flex items-center gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="bg-white text-purple-800 text-xs font-bold px-2 py-1 rounded">
              NH
            </div>
            <span className="font-semibold text-sm leading-tight">
              NEX
              <br />
              HUB
            </span>
          </div>

          {/* Nav Links */}
          <nav className="flex items-center gap-6 text-sm text-purple-200 font-medium">
            <Link to="/" className="hover:text-white transition">
              Homes
            </Link>
            <Link to="/about" className="hover:text-white transition">
              About
            </Link>
            <Link to="/contact" className="hover:text-white transition">
              Contact
            </Link>
          </nav>
        </div>

        {/* CENTER SECTION */}
        <div className="hidden md:flex items-center gap-3 flex-1 max-w-xl mx-6">
          {/* Location Box */}
          <div className="flex items-center gap-2 border border-purple-600 bg-purple-700 rounded-md px-3 py-2 w-[260px] text-sm text-purple-100">
            <MapPin size={16} />
            <span className="truncate">Sembakkam , Chennai , India</span>
          </div>

          {/* Search Box */}
          <SearchBox></SearchBox>
        </div>

        {/* RIGHT SECTION */}
        {/* <div className="flex items-center gap-4">
          <User className="w-5 h-5 text-purple-200 hover:text-white cursor-pointer transition" />
        </div> */}
      </div>
    </header>
  );
}
