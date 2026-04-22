import { Phone, Copy, MapPin } from "lucide-react";

function ServiceCard({ key: keyVal, name, role, phone, location }) {
  const handleCopy = () => {
    navigator.clipboard.writeText(phone);
  };

  return (
    <div
      key={keyVal}
      className="bg-white border border-purple-100 rounded-xl p-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4 hover:shadow-md transition"
    >
      {/* LEFT */}
      <div className="space-y-1">
        <h3 className="font-semibold text-gray-900">{name}</h3>

        <p className="text-sm text-purple-700">{role}</p>

        <div className="flex items-center gap-1 text-xs text-gray-500">
          <MapPin size={14} />
          {location}
        </div>

        {/* PHONE */}
        <div className="flex items-center gap-2 mt-2">
          <span className="text-sm font-medium text-gray-800">{phone}</span>

          {/* COPY */}
          <button
            onClick={handleCopy}
            className="p-1 rounded hover:bg-purple-100 transition"
          >
            <Copy size={16} className="text-purple-700" />
          </button>
        </div>
      </div>

      {/* RIGHT ACTION */}
      <a
        href={`tel:${phone}`}
        className="flex items-center justify-center gap-2 bg-purple-700 text-white px-4 py-2 rounded-lg text-sm hover:bg-purple-800 transition"
      >
        <Phone size={16} />
        Call
      </a>
    </div>
  );
}

export default ServiceCard;
