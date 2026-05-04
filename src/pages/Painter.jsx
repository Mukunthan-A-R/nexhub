import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ServiceList from "../components/ServiceList";

const Painter = () => {
  const data = [
    {
      name: "John",
      role: "painter",
      phone: "8508055402",
      location: "Sembakkam, Chennai",
    },
    {
      name: "Jayakumar",
      role: "painter",
      phone: "7401818199",
      location: "Sembakkam, Chennai",
    },

    {
      name: "Johnson",
      role: "painter",
      phone: "9884536641",
      location: "Sembakkam, Chennai",
    },
    {
      name: "Mohan",
      role: "painter",
      phone: "9884503529",
      location: "Sembakkam, Chennai",
    },
    {
      name: "Murugan",
      role: "painter",
      phone: "9094019550",
      location: "Sembakkam, Chennai",
    },
    // {
    //   name: "Om Prakash",
    //   role: "painter",
    //   phone: "7708367399",
    //   location: "Sembakkam, Chennai",
    // },
    {
      name: "Periyasamy",
      role: "painter",
      phone: "9176302908",
      location: "Sembakkam, Chennai",
    },
    {
      name: "Periyasamy",
      role: "painter",
      phone: "9566279308",
      location: "Chitlapakkam, Chennai",
    },
    {
      name: "Perumal",
      role: "painter",
      phone: "9003089187",
      location: "Sembakkam, Chennai",
    },
    {
      name: "Ramu",
      role: "painter",
      phone: "9025447132",
      location: "Sembakkam, Chennai",
    },
    {
      name: "Ravi",
      role: "painter",
      phone: "9677131564",
      location: "Madambakkam, Chennai",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#f8f4fb] ">
      <Navbar />

      <div className="flex-1">
        <ServiceList title="Painter" data={data} />
      </div>
      <Footer />
    </div>
  );
};

export default Painter;
