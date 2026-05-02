import { Link } from "react-router-dom";

export default function Mission() {
  return (
    <section className="bg-white py-4 md:py-8 my-4">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT - TEXT */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-purple-900">
            Our Mission
          </h2>

          <div className="w-16 h-1 bg-purple-600 mt-3 mb-6 rounded"></div>

          <p className="text-gray-700 text-lg leading-relaxed">
            At <span className="font-semibold text-purple-800">NexHub</span>,
            our mission is to remove the friction between people and local
            services.
          </p>

          <p className="mt-4 text-gray-600 text-lg leading-relaxed">
            Finding help shouldn’t be complicated. Whether it’s fixing a leak,
            repairing an appliance, or handling daily tasks — you should connect
            with the right person instantly.
          </p>

          <p className="mt-4 text-gray-600 text-lg leading-relaxed">
            We make local discovery faster, simpler, and more transparent —
            empowering both customers and service providers.
          </p>

          {/* CTA */}
          <Link to="/">
            <button className="mt-6 bg-purple-700 text-white px-6 py-3 rounded-lg hover:bg-purple-800 transition">
              Get Started
            </button>
          </Link>
        </div>

        {/* RIGHT - IMAGE / VISUAL */}
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1521791136064-7986c2920216"
            alt="team working"
            className="rounded-2xl shadow-lg object-cover w-full h-[87]"
          />

          {/* Decorative glow */}
          <div className="absolute -top-6 -right-6 w-32 h-32 bg-purple-400 rounded-full blur-2xl opacity-20"></div>
          <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-pink-400 rounded-full blur-2xl opacity-20"></div>
        </div>
      </div>
    </section>
  );
}
