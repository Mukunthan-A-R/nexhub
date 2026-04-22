import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ServiceList from "../components/ServiceList";

const Plumbing = () => {
  const data = [
    {
      name: "Ravi Plumbing Works",
      role: "Plumber",
      phone: "+91 9876543210",
      location: "Sembakkam, Chennai",
    },
    {
      name: "Suresh Electricals",
      role: "Electrician",
      phone: "+91 9123456780",
      location: "Medavakkam, Chennai",
    },
  ];

  return (
    <div>
      <Navbar />
      <ServiceList title="Plumbing" data={data} />
      <Footer />
    </div>
  );
};

export default Plumbing;
