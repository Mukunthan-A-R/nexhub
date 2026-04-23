import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ServiceList from "../components/ServiceList";

const Electrician = () => {
  const data = [
    {
      name: "Ravi Kumar",
      role: "AC Service",
      phone: "+91 9876543210",
      location: "Sembakkam, Chennai",
    },
    {
      name: "Suresh Reddy",
      role: "AC Service",
      phone: "+91 9123456780",
      location: "Medavakkam, Chennai",
    },
    {
      name: "Arjun Patel",
      role: "AC Service",
      phone: "+91 9988776655",
      location: "Velachery, Chennai",
    },
    {
      name: "Kiran Nair",
      role: "AC Service",
      phone: "+91 9012345678",
      location: "Tambaram, Chennai",
    },
    {
      name: "Deepak Singh",
      role: "AC Service",
      phone: "+91 9345678123",
      location: "Perumbakkam, Chennai",
    },
    {
      name: "Vignesh Kumar",
      role: "AC Service",
      phone: "+91 9567890123",
      location: "Sholinganallur, Chennai",
    },
    {
      name: "Manoj Sharma",
      role: "AC Service",
      phone: "+91 9789012345",
      location: "Pallikaranai, Chennai",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#f8f4fb] ">
      <Navbar />

      <div className="flex-1">
        <ServiceList title="Electrician" data={data} />
      </div>
      <Footer />
    </div>
  );
};

export default Electrician;
