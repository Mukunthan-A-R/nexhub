import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ServiceList from "../components/ServiceList";

const AcService = () => {
  const data = [
    {
      name: "Onida AC Service Center",
      role: "AC Service",
      phone: "8531977592",
      location: "Kovilambakkam, Chennai",
    },
    {
      name: "Gavaskar",
      role: "AC Service",
      phone: "8608336399",
      location: "Sembakkam, Chennai",
    },
   
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#f8f4fb] ">
      <Navbar />

      <div className="flex-1">
        <ServiceList title="AC" data={data} />
      </div>
      <Footer />
    </div>
  );
};

export default AcService;
