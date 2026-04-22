export default function BusinessOverview() {
  return (
    <section className="bg-[#f8f4fb] py-10 md:py-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col-reverse md:flex-row gap-10 md:gap-16 items-center">
        {/* IMAGE */}
        <div className="relative w-full md:w-1/2">
          <img
            src="https://www.fplglaw.com/wp-content/uploads/2024/05/books-8594725_640.jpg"
            alt="business"
            className="w-full h-[300px] md:h-[420px] object-cover rounded-2xl shadow-lg"
          />

          {/* Soft glow */}
          <div className="hidden md:block absolute -top-10 -left-10 w-40 h-40 bg-pink-400 rounded-full blur-3xl opacity-20"></div>
          <div className="hidden md:block absolute -bottom-10 -right-10 w-40 h-40 bg-blue-400 rounded-full blur-3xl opacity-20"></div>
        </div>

        {/* CONTENT */}
        <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-bold text-purple-900 leading-tight">
            Trusted services for your everyday needs
          </h2>

          <p className="text-gray-600 leading-relaxed max-w-lg mx-auto md:mx-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>

          {/* Stats */}
          <div className="pt-4">
            <h3 className="text-5xl md:text-6xl font-bold text-purple-900">
              35%
            </h3>
            <p className="text-purple-900 mt-2 text-sm max-w-xs mx-auto md:mx-0">
              increase in time saved for our customers
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
