import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PartnerForm from "../components/PartnerForm";

export default function Partner() {
  return (
    <div className="bg-purple-50 min-h-screen">
      <Navbar />

      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* HERO */}
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-purple-900">
            Become a Business Partner
          </h1>

          <p className="text-gray-600 mt-4">
            Join NexHub and connect with customers near you. Grow your business,
            get more work, and manage everything.
          </p>
        </div>

        {/* BENEFITS */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-sm text-center">
            <h3 className="font-semibold text-gray-800">More Customers</h3>
            <p className="text-gray-600 text-sm mt-2">
              Get discovered by people looking for your services.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm text-center">
            <h3 className="font-semibold text-gray-800">Easy to Manage</h3>
            <p className="text-gray-600 text-sm mt-2">
              Handle bookings and requests in one place.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm text-center">
            <h3 className="font-semibold text-gray-800">Grow Your Business</h3>
            <p className="text-gray-600 text-sm mt-2">
              Build trust and expand your customer base.
            </p>
          </div>
        </div>

        <PartnerForm></PartnerForm>
        {/* TRUST LINE */}
        <p className="text-center text-gray-500 text-sm mt-6">
          We will review your details and contact you shortly.
        </p>
      </div>

      <Footer />
    </div>
  );
}
