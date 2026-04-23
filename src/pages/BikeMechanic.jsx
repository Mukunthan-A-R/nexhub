import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ServiceList from "../components/ServiceList";

const BikeMechanic = () => {
  const data = [
    {
      name: "Dinesh Kumar",
      role: "Bike Mechanic",
      phone: "+91 9023456781",
      location: "Guindy, Chennai",
    },
    {
      name: "Aravind Raj",
      role: "Bike Mechanic",
      phone: "+91 9182736450",
      location: "Kodambakkam, Chennai",
    },
    {
      name: "Sunil Verma",
      role: "Bike Mechanic",
      phone: "+91 9873401256",
      location: "Mylapore, Chennai",
    },
    {
      name: "Kishore Reddy",
      role: "Bike Mechanic",
      phone: "+91 9012456783",
      location: "Perungudi, Chennai",
    },
    {
      name: "Vikas Sharma",
      role: "Bike Mechanic",
      phone: "+91 9765012348",
      location: "Thoraipakkam, Chennai",
    },
    {
      name: "Senthil Kumar",
      role: "Bike Mechanic",
      phone: "+91 9345801276",
      location: "Poonamallee, Chennai",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#f8f4fb] ">
      <Navbar />

      <div className="flex-1">
        <ServiceList title="Bike Mechanic" data={data} />
      </div>
      <Footer />
    </div>
  );
};

export default BikeMechanic;
