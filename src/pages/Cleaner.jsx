import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ServiceList from "../components/ServiceList";

const Cleaner = () => {
  const data = [
    {
      name: "Ajay Nair",
      role: "Cleaning Service",
      phone: "+91 8897321456",
      location: "Adyar, Chennai",
    },
    {
      name: "Rohit Gupta",
      role: "Cleaning Service",
      phone: "+91 9016782345",
      location: "Anna Nagar, Chennai",
    },
    {
      name: "Sanjay Iyer",
      role: "Cleaning Service",
      phone: "+91 9765432108",
      location: "T. Nagar, Chennai",
    },
    {
      name: "Prakash Yadav",
      role: "Cleaning Service",
      phone: "+91 9123987654",
      location: "Porur, Chennai",
    },
    {
      name: "Naveen Das",
      role: "Cleaning Service",
      phone: "+91 9345612789",
      location: "Chromepet, Chennai",
    },
    {
      name: "Harish Pillai",
      role: "Cleaning Service",
      phone: "+91 9871203456",
      location: "Ambattur, Chennai",
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
