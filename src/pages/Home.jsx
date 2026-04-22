import { Star, Users } from "lucide-react";
import Navbar from "../components/Navbar";
import AutomationSection from "../components/BusinessOverview";
import Footer from "../components/Footer";
import BusinessOverview from "../components/BusinessOverview";
import BusinessOverview2 from "../components/BusinessOverview2";

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
                <div
                  key={i}
                  className="bg-purple-50 border border-transparent hover:border-purple-300 rounded-lg p-3 flex flex-col items-center justify-center hover:bg-purple-100 cursor-pointer transition"
                >
                  <img
                    src={item.img}
                    alt=""
                    className="w-10 h-10 mb-2 object-contain"
                  />
                  <p className="text-gray-700 leading-tight">{item.title}</p>
                </div>
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

/* SERVICES DATA */
const services = [
  {
    title: "Plumbing",
    img: "https://cdn-icons-png.flaticon.com/512/312/312971.png",
  },
  {
    title: "Electrical Work",
    img: "https://cdn-icons-png.flaticon.com/512/1909/1909606.png",
  },
  {
    title: "Cleaning Work",
    img: "data:image/png;base64,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",
  },
  {
    title: "Painting & Waterproofing",
    img: "data:image/png;base64,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",
  },
  {
    title: "AC & Appliance Repair",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy0dP11Ep40sO2Y4YXLNjCeXcMuqOlAniavA&s",
  },
  {
    title: "Car Mechanic",
    img: "https://png.pngtree.com/png-clipart/20191120/original/pngtree-car-repair-line-icon-vector-png-image_5079274.jpg",
  },
];
