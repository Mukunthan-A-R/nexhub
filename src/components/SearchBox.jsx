import { useState } from "react";
import { Search } from "lucide-react";
import { services } from "../data/services";
import { useNavigate } from "react-router-dom";

export default function SearchBox() {
  const [query, setQuery] = useState("");
  const [focused, setFocused] = useState(false);
  const navigate = useNavigate();

  const filtered = services.filter((item) =>
    item.title.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <div className="relative w-full">
      {/* INPUT */}
      <div className="flex items-center gap-2 border border-purple-600 bg-purple-700 rounded-md px-3 py-2 text-sm text-purple-200">
        <Search size={16} />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setTimeout(() => setFocused(false), 150)}
          placeholder="Search services..."
          className="outline-none w-full bg-transparent placeholder-purple-300 text-white"
        />
      </div>

      {/* DROPDOWN */}
      {focused && query && (
        <div className="absolute top-full left-0 w-full bg-white text-black rounded-md mt-2 shadow-lg max-h-60 overflow-y-auto z-50">
          {filtered.length > 0 ? (
            filtered.map((item) => (
              <div
                key={item.id}
                onClick={() => navigate(item.link)}
                className="flex items-center gap-3 px-4 py-2 hover:bg-purple-100 cursor-pointer"
              >
                <span>{item.title}</span>
              </div>
            ))
          ) : (
            <div className="px-4 py-2 text-sm text-gray-500">
              No results found
            </div>
          )}
        </div>
      )}
    </div>
  );
}
