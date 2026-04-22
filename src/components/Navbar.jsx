import { MapPin, Search, User } from "lucide-react";
import { Link } from "react-router-dom";

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

            <a href="#" className="hover:text-white transition">
              About
            </a>
            <a href="#" className="hover:text-white transition">
              Contact
            </a>
          </nav>
        </div>

        {/* CENTER SECTION */}
        <div className="hidden md:flex items-center gap-3 flex-1 max-w-xl mx-6">
          {/* Location Box */}
          <div className="flex items-center gap-2 border border-purple-600 bg-purple-700 rounded-md px-3 py-2 w-[260px] text-sm text-purple-100">
            <MapPin size={16} />
            <span className="truncate">Sembakkam</span>
          </div>

          {/* Search Box */}
          <div className="flex items-center gap-2 border border-purple-600 bg-purple-700 rounded-md px-3 py-2 flex-1 text-sm text-purple-200">
            <Search size={16} />
            <input
              type="text"
              placeholder="Search for AC"
              className="outline-none w-full bg-transparent placeholder-purple-300 text-white"
            />
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="flex items-center gap-4">
          <User className="w-5 h-5 text-purple-200 hover:text-white cursor-pointer transition" />
        </div>
      </div>
    </header>
  );
}
