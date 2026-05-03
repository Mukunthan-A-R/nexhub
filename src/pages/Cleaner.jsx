import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ServiceList from "../components/ServiceList";

const Cleaner = () => {
  const data = [
    {
      name: "Hasthinapuram Cleaning Service",
      role: "Cleaning Service",
      phone: "9600186321",
      location: "Hasthinapuram, Chennai",
    }, 
    {
      name: "Narayanan",
      role: "Cleaning Service",
      phone: "6385124579",
      location: "Sembakkam, Chennai",
    }, 
    {
      name: "Sembakkam Cleanning (Water Tank, Sump)",
      role: "Cleaning Service",
      phone: "9363327948",
      location: "Sembakkam, Chennai",
    }, 
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#f8f4fb] ">
      <Navbar />

      <div className="flex-1">
        <ServiceList title="Cleaning" data={data} />
      </div>
      <Footer />
    </div>
  );
};

export default Cleaner;
