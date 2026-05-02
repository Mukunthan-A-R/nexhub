import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Mission from "../components/Mission";

export default function About() {
  return (
    <div className="bg-purple-50 min-h-screen font-sans">
      <Navbar />

      <div className="max-w-3xl mx-auto px-6 py-6 pb-0">
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 leading-tight">
          <span className=" text-purple-700">A</span>
          bout NexHub
        </h1>

        {/* Main Content */}
        <div className="mt-8 space-y-6 text-lg text-gray-700 leading-relaxed">
          <p>
            NexHub helps you quickly find trusted local service providers
            without the hassle of long booking processes.
          </p>

          <p>
            Whether it's plumbing, electrical work, or cleaning services, NexHub
            gives you direct access to phone numbers, shop locations, and
            contact details — so you can connect instantly.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition">
            <h3 className="text-lg font-semibold text-purple-700">
              Direct Contact
            </h3>
            <p className="mt-2 text-gray-600 text-sm">
              Get phone numbers instantly without extra steps.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition">
            <h3 className="text-lg font-semibold text-purple-700">
              Local Discovery
            </h3>
            <p className="mt-2 text-gray-600 text-sm">
              Find nearby shops and service providers easily.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition">
            <h3 className="text-lg font-semibold text-purple-700">
              Simple & Fast
            </h3>
            <p className="mt-2 text-gray-600 text-sm">
              No booking. No waiting. Just connect.
            </p>
          </div>
        </div>

        <Mission></Mission>
      </div>

      <Footer />
    </div>
  );
}
