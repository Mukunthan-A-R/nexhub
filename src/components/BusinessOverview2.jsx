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
            Let us handle the hard part. Easily connect with the right people
            and get your work done without wasting time or effort.
          </p>
          <p className="text-gray-600 max-w-md leading-relaxed">
            No more searching or waiting. Get connected to reliable local
            workers instantly and get things done faster.
          </p>

          {/* Stats */}
          {/* <div className="mt-10">
            <h3 className="text-6xl font-bold text-purple-900">35%</h3>
            <p className="text-purple-900 mt-2 text-sm max-w-xs">
              increase in time saved due to automations for users
            </p>
          </div> */}
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative">
          <img
            src="https://dam.thdstatic.com/content/production/zJJ2AGRyHQ_7Mf4dXwtPRw/me-eR4BtwDl9mBZOlF8azA/Original%20file/simple-steps-to-clean-up-your-yard-step-3.jpg"
            alt="automation preview"
            className="w-full h-75 md:h-95 object-cover rounded-2xl shadow-lg"
          />

          {/* Optional soft glow (matches Slack feel) */}
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-pink-400 rounded-full blur-3xl opacity-30"></div>
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-400 rounded-full blur-3xl opacity-30"></div>
        </div>
      </div>
    </section>
  );
}
