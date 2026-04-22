import { Phone, MapPin } from "lucide-react";
import ServiceCard from "./ServiceCard";

export default function ServiceList({ title, data }) {
  return (
    <div className="bg-[#f8f4fb] min-h-screen py-10">
      <div className="max-w-5xl mx-auto px-4 space-y-4">
        {/* Heading */}
        <h2 className="text-2xl font-semibold text-purple-900">
          {title} Services Available Near You
        </h2>

        {data.map((item, i) => (
          <>
            {/* List */}
            <ServiceCard
              name={item.name}
              role={item.role}
              phone={item.phone}
              location={item.location}
            />
          </>
        ))}
      </div>
    </div>
  );
}
