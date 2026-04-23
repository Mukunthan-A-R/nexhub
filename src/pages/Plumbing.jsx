import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ServiceList from "../components/ServiceList";

const Plumbing = () => {
  const data = [
    {
      name: "Murugan Selvam",
      role: "Plumbing",
      phone: "+91 9156723480",
      location: "Royapettah, Chennai",
    },
    {
      name: "Ramesh Babu",
      role: "Plumbing",
      phone: "+91 9843215670",
      location: "Ashok Nagar, Chennai",
    },
    {
      name: "Ganesh Kumar",
      role: "Plumbing",
      phone: "+91 9034567812",
      location: "Vadapalani, Chennai",
    },
    {
      name: "Selvakumar Mani",
      role: "Plumbing",
      phone: "+91 9786543201",
      location: "Avadi, Chennai",
    },
    {
      name: "Balaji Narayanan",
      role: "Plumbing",
      phone: "+91 9321456780",
      location: "Mogappair, Chennai",
    },
    {
      name: "Sathish Kumar",
      role: "Plumbing",
      phone: "+91 9012348756",
      location: "Nanganallur, Chennai",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#f8f4fb] ">
      <Navbar />

      <div className="flex-1">
        <ServiceList title="Plumbing" data={data} />
      </div>
      <Footer />
    </div>
  );
};

export default Plumbing;
