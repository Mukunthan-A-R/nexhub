import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ServiceList from "../components/ServiceList";

const Cleaner = () => {
  const data = [
    {
      name: "Ravi Plumbing Works",
      role: "Plumber",
      phone: "+91 9876543210",
      location: "Sembakkam, Chennai",
    },
    {
      name: "Suresh Electricals",
      role: "Electrician",
      phone: "+91 9123456780",
      location: "Medavakkam, Chennai",
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
