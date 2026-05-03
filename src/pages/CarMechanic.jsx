import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ServiceList from "../components/ServiceList";

const CarMechanic = () => {
  const data = [
  {
    name: "Chakkarai",
    role: "Car Mechanic",
    phone: "9551330333",
    location: "Ashok Nagar, Chennai",
  },
  {
    name: "Rajan",
    role: "Car Mechanic",
    phone: "9444493934",
    location: "Chennai",
  },
  {
    name: "Muthu",
    role: "Car Mechanic",
    phone: "9710691110",
    location: "Pallavaram, Chennai",
  },
  {
    name: "Antony",
    role: "Car Mechanic",
    phone: "6379228288",
    location: "Chennai",
  },
  {
    name: "Daniel",
    role: "Car Mechanic",
    phone: "9444744263",
    location: "Chennai",
  },
  {
    name: "Dhayaalan",
    role: "Car Mechanic",
    phone: "9380905273",
    location: "Kadapperi, Chennai",
  },
  {
    name: "Sahayam",
    role: "Car Mechanic",
    phone: "9791056229",
    location: "Sembakkam, Chennai",
  },
  {
    name: "Sahayam",
    role: "Car Mechanic",
    phone: "7358299722",
    location: "Sembakkam, Chennai",
  },
  {
    name: "Swamy",
    role: "Car Mechanic",
    phone: "7305054684",
    location: "Sembakkam, Chennai",
  }
];

  return (
    <div className="min-h-screen flex flex-col bg-[#f8f4fb] ">
      <Navbar />

      <div className="flex-1">
        <ServiceList title="Car Mechanic" data={data} />
      </div>
      <Footer />
    </div>
  );
};

export default CarMechanic;
