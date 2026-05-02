import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ServicesCarouselCard from "./ServicesCarouselCard";

export default function ServicesCarousel({ services }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % services.length);
    }, 2000); // speed

    return () => clearInterval(interval);
  }, [services.length]);

  return (
    <section className="py-10">
      {/* Title */}
      <div className="text-center mb-6">
        <h2 className="text-4xl font-semibold">Our Services</h2>
        <p className="text-gray-500 text-base mt-2 max-w-md mx-auto">
          We provide a range of solutions to help you grow faster and smarter.
        </p>
      </div>
      <div className="overflow-hidden w-full">
        <div
          className="flex transition-transform duration-500"
          style={{
            transform: `translateX(-${index * (100 / 3)}%)`,
          }}
        >
          {services.map((item, i) => (
            <ServicesCarouselCard item={item} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
