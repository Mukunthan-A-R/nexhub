import { useState, useMemo } from "react";
import ServiceCard from "./ServiceCard";
import { Search } from "lucide-react";

export default function ServiceList({ title, data = [] }) {
  const [search, setSearch] = useState("");

  // derived filtered list (case-insensitive)
  const filteredData = useMemo(() => {
    if (!search.trim()) return data;

    return data.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase()),
    );
  }, [search, data]);

  return (
    <div className="py-10">
      <div className="max-w-5xl mx-auto px-4 space-y-4">
        {/* Heading */}
        <h2 className="text-2xl font-semibold text-purple-900">
          {title} Services Available Near You
        </h2>

        {/* Search Input */}
        <div className="w-full md:w-96">
          <label className="sr-only">Search services</label>

          <div className="relative">
            {/* Icon */}
            <Search
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />

            {/* Input */}
            <input
              type="text"
              placeholder="Search by name..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="
        w-full pl-10 pr-4 py-2.5
        text-sm text-gray-800 placeholder-gray-400
        bg-white
        border border-gray-300
        rounded-md
        shadow-sm
        focus:outline-none
        focus:ring-2 focus:ring-purple-600
        focus:border-purple-600
        transition
      "
            />
          </div>
        </div>

        {/* List */}
        {filteredData.map((item) => (
          <ServiceCard
            key={item.phone}
            name={item.name}
            role={item.role}
            phone={item.phone}
            location={item.location}
          />
        ))}
      </div>
    </div>
  );
}
