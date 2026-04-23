import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ServiceList from "../components/ServiceList";

const CarMechanic = () => {
  const data = [
    {
      name: "Raghavendra Rao",
      role: "Car Mechanic",
      phone: "+91 9384726150",
      location: "Ekkatuthangal, Chennai",
    },
    {
      name: "Imran Khan",
      role: "Car Mechanic",
      phone: "+91 9021567843",
      location: "Triplicane, Chennai",
    },
    {
      name: "Lokesh Kumar",
      role: "Car Mechanic",
      phone: "+91 9172635480",
      location: "Koyambedu, Chennai",
    },
    {
      name: "Praveen Shetty",
      role: "Car Mechanic",
      phone: "+91 9890345612",
      location: "Alwarpet, Chennai",
    },
    {
      name: "Faizal Ahmed",
      role: "Car Mechanic",
      phone: "+91 9756123489",
      location: "Teynampet, Chennai",
    },
    {
      name: "Bharath R",
      role: "Car Mechanic",
      phone: "+91 9001234786",
      location: "Kolathur, Chennai",
    },
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
