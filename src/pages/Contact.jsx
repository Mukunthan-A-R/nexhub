import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <div className="bg-purple-50 min-h-screen font-sans">
      <Navbar />
      <div className="max-w-5xl mx-auto px-6 py-16">
        <h1 className="text-3xl md:text-4xl font-bold text-purple-900 text-center">
          Contact Us
        </h1>

        <p className="text-gray-600 text-center mt-4 max-w-xl mx-auto">
          Have a question or need help? Our team is here to assist you — feel
          free to reach out anytime.
        </p>

        {/* Contact Card */}
        <div className="mt-12 bg-white/80 backdrop-blur-md border border-purple-100 rounded-3xl shadow-lg p-8 md:p-10 grid md:grid-cols-2 gap-8">
          {/* LEFT - Info */}
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-purple-900">
              Get in touch
            </h2>

            <p className="text-gray-600">
              We usually respond within a few hours. Reach out through any of
              the options below.
            </p>

            <div className="space-y-5 pt-4">
              <div className="flex items-start gap-4">
                <div className="bg-purple-100 p-3 rounded-lg">📧</div>
                <div>
                  <p className="font-medium text-gray-800">Email</p>
                  <p className="text-gray-600 text-sm">support@nexhub.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-purple-100 p-3 rounded-lg">📞</div>
                <div>
                  <p className="font-medium text-gray-800">Phone</p>
                  <p className="text-gray-600 text-sm">+91 98765 43210</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-purple-100 p-3 rounded-lg">📍</div>
                <div>
                  <p className="font-medium text-gray-800">Location</p>
                  <p className="text-gray-600 text-sm">Chennai, Tamil Nadu</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT - Form */}
          <div className="bg-purple-50 rounded-2xl p-6 space-y-4">
            <h3 className="font-semibold text-gray-800">Send a message</h3>

            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-purple-100 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-300"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full border border-purple-100 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-300"
            />

            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full border border-purple-100 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-300"
            />

            <button className="w-full bg-purple-700 text-white py-3 rounded-lg hover:bg-purple-800 transition">
              Send Message
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
