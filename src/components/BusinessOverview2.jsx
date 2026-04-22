export default function BusinessOverview2() {
  return (
    <section className="bg-[#f8f4fb] py-5 sm:py-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row gap-12 items-center">
        {/* LEFT CONTENT */}

        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold text-purple-900 leading-tight">
            Automate your work, simplify your life
          </h2>

          <p className="text-gray-600 max-w-md leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris.
          </p>

          {/* Stats */}
          <div className="mt-10">
            <h3 className="text-6xl font-bold text-purple-900">35%</h3>
            <p className="text-purple-900 mt-2 text-sm max-w-xs">
              increase in time saved due to automations for users
            </p>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative">
          <img
            src="https://media.istockphoto.com/id/185568132/photo/outdoor-shot-of-garden-equipment.jpg?s=612x612&w=0&k=20&c=lbVrk5n0QKttg3o-dObaBRHAPOXdaFCr4W8zFOnSt-g="
            alt="automation preview"
            className="w-full h-100 object-cover rounded-2xl shadow-lg"
          />

          {/* Optional soft glow (matches Slack feel) */}
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-pink-400 rounded-full blur-3xl opacity-30"></div>
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-400 rounded-full blur-3xl opacity-30"></div>
        </div>
      </div>
    </section>
  );
}
