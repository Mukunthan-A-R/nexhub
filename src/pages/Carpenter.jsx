import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ServiceList from "../components/ServiceList";

const Carpenter = () => {
  const data = [
    {
      name: "Viswanathan",
      role: "carpenter",
      phone: "9176574096",
      location: "Sembakkam, Chennai",
    },
    {
      name: "Rajesh",
      role: "carpenter",
      phone: "9047186209",
      location: "Sembakkam, Chennai",
    },
    {
      name: "Rajkumar",
      role: "carpenter",
      phone: "9941472651",
      location: "Sembakkam, Chennai",
    },
    {
      name: "Angappan",
      role: "carpenter",
      phone: "9840247036",
      location: "Sembakkam, Chennai",
    },
    {
      name: "Arokiyaraj",
      role: "carpenter",
      phone: "9952930103",
      location: "Sembakkam, Chennai",
    },
    {
      name: "Kuberan",
      role: "carpenter",
      phone: "9952940099",
      location: "Sembakkam, Chennai",
    },
    {
      name: "Loganathan",
      role: "carpenter",
      phone: "9710972887",
      location: "Sembakkam, Chennai",
    },
    {
      name: "Rajendran",
      role: "carpenter",
      phone: "9171694629",
      location: "Sembakkam, Chennai",
    },
    {
      name: "Senthil",
      role: "carpenter",
      phone: "8939435012",
      location: "Sembakkam, Chennai",
    },
    {
      name: "Siva",
      role: "carpenter",
      phone: "9087202619",
      location: "Kovilambakkam, Chennai",
    },
    {
      name: "Kumar",
      role: "carpenter",
      phone: "9123574163",
      location: "Rajakilpakkam, Chennai",
    },
    {
      name: "Kumar",
      role: "carpenter",
      phone: "9444495276",
      location: "Selaiyur, Chennai",
    },
    {
      name: "Selvam",
      role: "carpenter",
      phone: "9551903288",
      location: "Nanmangalam, Chennai",
    },
    {
      name: "Selvam",
      role: "carpenter",
      phone: "9710736062",
      location: "Kovilambakkam, Chennai",
    },
    {
      name: "Kannan",
      role: "carpenter",
      phone: "9789971311",
      location: "Sembakkam, Chennai",
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

export default Carpenter;
