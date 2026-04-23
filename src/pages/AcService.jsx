import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ServiceList from "../components/ServiceList";

const AcService = () => {
  const data = [
    {
      name: "Arun Kumar",
      role: "AC Service",
      phone: "+91 9845123670",
      location: "Sembakkam, Chennai",
    },
    {
      name: "Vikram Singh",
      role: "AC Service",
      phone: "+91 9786452310",
      location: "Medavakkam, Chennai",
    },
    {
      name: "Rahul Sharma",
      role: "AC Service",
      phone: "+91 9901234567",
      location: "Velachery, Chennai",
    },
    {
      name: "Karthik Raj",
      role: "AC Service",
      phone: "+91 9678452312",
      location: "Tambaram, Chennai",
    },
    {
      name: "Manoj Verma",
      role: "AC Service",
      phone: "+91 9812345678",
      location: "Perumbakkam, Chennai",
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
