import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-purple-900 text-purple-100 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12 grid gap-10 md:grid-cols-3">
        {/* BRAND */}
        <div>
          <h2 className="text-xl font-semibold text-white">NEX HUB</h2>
          <p className="text-sm mt-3 text-purple-200 leading-relaxed">
            Helping you connect with trusted home services instantly. Fast,
            reliable, and simple.
          </p>
        </div>

        {/* LINKS */}
        <div>
          <h3 className="text-white font-medium mb-3">Company</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">
              <Link to="/about">About</Link>
            </li>
            <li className="hover:text-white cursor-pointer">
              <Link to="/contact">Contact</Link>
            </li>
            <li className="hover:text-white cursor-pointer">
              <Link to="/partner">Be a Business Partner</Link>
            </li>
          </ul>
        </div>

        {/* SERVICES */}
        {/* <div>
          <h3 className="text-white font-medium mb-3">Services</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Plumbing</li>
            <li className="hover:text-white cursor-pointer">Electrical</li>
            <li className="hover:text-white cursor-pointer">Cleaning</li>
          </ul>
        </div> */}

        {/* CONTACT */}
        <div>
          <h3 className="text-white font-medium mb-3">Contact</h3>
          <ul className="space-y-2 text-sm text-purple-200">
            <li>Email: support@nexhub.com</li>
            <li>Phone: +91 98765 43210</li>
            <li>Location: Chennai, India</li>
          </ul>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-purple-700 text-center text-sm text-purple-300 py-4 px-6">
        © {new Date().getFullYear()} NEX HUB. All rights reserved.
      </div>
    </footer>
  );
}
