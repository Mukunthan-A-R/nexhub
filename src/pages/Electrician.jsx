import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ServiceList from "../components/ServiceList";

const Electrician = () => {
 const data = [
  {
    name: "Benjamin",
    role: "Electrician",
    phone: "9840368575",
    location: "Pallavaram, Chennai",
  },
  {
    name: "Chandru",
    role: "Electrician",
    phone: "9841746777",
    location: "Duraipakkam, Chennai",
  },
  {
    name: "Basker",
    role: "Electrician",
    phone: "9791072477",
    location: "Gudavencherry, Chennai",
  },
  {
    name: "Murugan",
    role: "Electrician",
    phone: "9841212164",
    location: "Vengaivasal, Chennai",
  },
  {
    name: "Antony",
    role: "Electrician",
    phone: "9677008095",
    location: "Sembakkam, Chennai",
  },
  {
    name: "Kalimuthu",
    role: "Electrician",
    phone: "9884918495",
    location: "Thiruvanmiyur, Chennai",
  },
  {
    name: "Raj",
    role: "Electrician",
    phone: "9940252941",
    location: "Neelangarai, Chennai",
  },
  {
    name: "Raja",
    role: "Electrician",
    phone: "8072999043",
    location: "Sembakkam, Chennai",
  },
  {
    name: "Saravanan",
    role: "Electrician",
    phone: "9791746064",
    location: "Sembakkam, Chennai",
  },
  {
    name: "Saravanan",
    role: "Electrician",
    phone: "9841581859",
    location: "Sembakkam, Chennai",
  },
  {
    name: "Sathyaram",
    role: "Electrician",
    phone: "7358108713",
    location: "Sembakkam, Chennai",
  },
  {
    name: "Suresh",
    role: "Electrician",
    phone: "8939768569",
    location: "Sembakkam, Chennai",
  },
  {
    name: "Sriram",
    role: "Electrician",
    phone: "9884166114",
    location: "Sembakkam, Chennai",
  },
  {
    name: "Johnson",
    role: "Electrician",
    phone: "9283207018",
    location: "Sembakkam, Chennai",
  }
];

  return (
    <div className="min-h-screen flex flex-col bg-[#f8f4fb] ">
      <Navbar />

      <div className="flex-1">
        <ServiceList title="Electrician" data={data} />
      </div>
      <Footer />
    </div>
  );
};

export default Electrician;
