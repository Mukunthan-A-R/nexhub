import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ServiceList from "../components/ServiceList";

const Plumbing = () => {
  const data = [
  {
    name: "Sampath",
    role: "Plumbing",
    phone: "8870041057",
    location: "Sembakkam, Chennai",
  },
  {
    name: "Arun",
    role: "Plumbing",
    phone: "9941650233",
    location: "Sembakkam, Chennai",
  },
  {
    name: "Jeeva",
    role: "Plumbing",
    phone: "9551093017",
    location: "Sembakkam, Chennai",
  },
  {
    name: "Sundaram",
    role: "Plumbing",
    phone: "9840057790",
    location: "Sembakkam, Chennai",
  },
  {
    name: "Gopal",
    role: "Plumbing",
    phone: "9710343024",
    location: "Sembakkam, Chennai",
  },
  {
    name: "Mohan",
    role: "Plumbing",
    phone: "9841097088",
    location: "Chitlapakkam, Chennai",
  },
  {
    name: "Moni",
    role: "Plumbing",
    phone: "9551775556",
    location: "Gowrivakkam, Chennai",
  },
  {
    name: "Pandiyan",
    role: "Plumbing",
    phone: "9840526251",
    location: "Pallikaranai, Chennai",
  },
  {
    name: "Rajesh",
    role: "Plumbing",
    phone: "9840177888",
    location: "Santhosapuram, Chennai",
  },
  {
    name: "Sankar",
    role: "Plumbing",
    phone: "9840347817",
    location: "Pallikaranai, Chennai",
  },
  {
    name: "Venkatesh",
    role: "Plumbing",
    phone: "9884659865",
    location: "Palavakkam, Chennai",
  },
  {
    name: "Charles",
    role: "Plumbing",
    phone: "9791277726",
    location: "Rajakilpakkam, Chennai",
  },
  {
    name: "Gowsik",
    role: "Plumbing",
    phone: "9386645613",
    location: "Sembakkam, Chennai",
  },
  {
    name: "Sundaram",
    role: "Plumbing",
    phone: "9941828270",
    location: "Sembakkam, Chennai",
  },
  {
    name: "Jayaram",
    role: "Plumbing",
    phone: "9591779144",
    location: "Sembakkam, Chennai",
  },
  {
    name: "Unnikrishnan",
    role: "Plumbing",
    phone: "8124290416",
    location: "Sembakkam, Chennai",
  }
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
