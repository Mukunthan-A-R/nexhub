import { Link } from "react-router-dom";

const ServicesCarouselCard = ({ item, i }) => {
  return (
    <div className="w-1/3 p-2 flex-shrink-0">
      <Link
        to={item.link}
        className="relative rounded-xl overflow-hidden group h-32 block"
      >
        {/* Background Image */}
        <img
          src={
            "https://theragcompany.eu/cdn/shop/articles/DSC08500.jpg?v=1715157054&width=1920"
          }
          //   src={item.img}
          alt={item.title}
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-500"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

        {/* Text */}
        <div className="absolute bottom-2 left-2 right-2 z-10">
          <p className="text-white text-sm font-medium leading-tight">
            {item.title}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default ServicesCarouselCard;
