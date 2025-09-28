import { FaArrowLeft } from "react-icons/fa";
import HeroImage from "../assets/heroImage.png";

const HeroSection = () => {
  return (
    <section className="w-full h-[450px] relative mb-8">
      <img
        src={HeroImage}
        alt="heroImage"
        className="w-full overflow-hidden h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute bg-black/60 inset-0" />

      {/* Mobile Header */}
      <div className="w-full px-4 flex justify-between items-center md:hidden absolute top-12">
        <FaArrowLeft  size={24} className="text-white" />
        <button className="border border-white bg-transparent text-white px-4 py-2 rounded-sm cursor-pointer">
          Join Now
        </button>
      </div>

      {/* Hero text */}
      <div className="flex flex-col gap-2 absolute bottom-[15%] left-[5%] md:left-[15%]">
        <h3 className="text-3xl sm:text-4xl md:text-5xl text-white font-bold">
          Computer Engineering
        </h3>
        <p className="text-sm md:text-lg font-light  text-white tracking-[1px]">
          142,765 Computer Engineers follow this
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
