import { Star, Users } from "lucide-react";
import Navbar from "../components/Navbar";
import AutomationSection from "../components/BusinessOverview";
import Footer from "../components/Footer";
import BusinessOverview from "../components/BusinessOverview";
import BusinessOverview2 from "../components/BusinessOverview2";
import { Link } from "react-router-dom";
import { services } from "../data/services";

export default function Home() {
  return (
    <div className="bg-purple-50 min-h-screen">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* LEFT SECTION */}
        <div>
          {/* Heading */}
          <h1 className="text-2xl md:text-3xl font-semibold text-gray-900 leading-snug">
            <span className="text-4xl text-purple-700">N</span>
            eed Help at Home? <br />
            <span className="text-4xl text-purple-700">G</span>
            et the Number Now.
          </h1>

          {/* Card */}
          <div className="mt-6 border border-purple-200 bg-white rounded-xl p-5 shadow-sm">
            <p className="text-gray-800 font-medium mb-4">
              What are you looking for?
            </p>

            {/* Services Grid */}
            <div className="grid grid-cols-3 gap-4 text-xs">
              {services.map((item, i) => (
                <Link to={item.link}>
                  <div className="bg-purple-50 border border-transparent hover:border-purple-300 rounded-lg p-3 flex flex-col items-center justify-center hover:bg-purple-100 cursor-pointer transition">
                    <img
                      src={item.img}
                      alt=""
                      className="w-10 h-10 mb-2 object-contain"
                    />
                    <p className="text-gray-700 leading-tight">{item.title}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="hidden sm:grid grid-cols-2 gap-4">
          <div className="space-y-4">
            <img
              src="https://api.gharpedia.com/wp-content/uploads/2018/08/0602030005-01-Plumbers.jpg"
              className="rounded-xl object-cover w-full h-60 shadow-md"
            />
            <img
              src="https://5.imimg.com/data5/SELLER/Default/2024/6/429178565/EC/FF/DY/76226430/electrician-services.jpeg"
              className="rounded-xl object-cover w-full h-50 shadow-md"
            />
          </div>

          <div className="space-y-4 mt-6 md:mt-0">
            <img
              src="https://www.rd.com/wp-content/uploads/2021/06/20210609-HowToMop-AD-0222.jpg"
              className="rounded-xl object-cover w-full h-50 shadow-md"
            />
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOd3f0f-15trmMbCm1iMc6TVmNNytOZqOgaw&s"
              className="rounded-xl object-cover w-full h-60 shadow-md"
            />
          </div>
        </div>
      </div>
      <BusinessOverview></BusinessOverview>
      <BusinessOverview2></BusinessOverview2>
      <Footer></Footer>
    </div>
  );
}
