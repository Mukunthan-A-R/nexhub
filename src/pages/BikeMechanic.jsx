import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ServiceList from "../components/ServiceList";

const BikeMechanic = () => {
  const data = [
    {
      name: "Balu",
      role: "Bike Mechanic",
      phone: "9841988738",
      location: "Sembakkam, Chennai",
    },
    {
      name: "Raja",
      role: "Bike Mechanic",
      phone: "70110157966",
      location: "Sembakkam, Chennai",
    },
    {
      name: "Balu",
      role: "Bike Mechanic",
      phone: "9962300269",
      location: "Sembakkam, Chennai",
    },
    {
      name: "Ranjith",
      role: "Bike Mechanic",
      phone: "7338941369",
      location: "Padhuvancherry Chennai",
    },
    {
      name: "Jeyendra Nagar workshop",
      role: "Bike Mechanic",
      phone: "8667274214",
      location: "Jeyendra Nagar, Chennai",
    },
    {
      name: "Thirumulai Nagar workshop",
      role: "Bike Mechanic",
      phone: "7200257564",
      location: "Thirumulai Nagar, Chennai",
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
