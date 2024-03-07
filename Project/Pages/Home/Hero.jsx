import NormalButton from "../../Components/ButtonNormal";
import PrimaryButton from "../../Components/ButtonPrimary";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section
      // style={{ backgroundImage: "url('Project/Assets/slider_1.jpg')" }}
      className="bg-emerald-500 py-14 min-h-screen w-full flex gap-10 flex-wrap items-center justify-center px-12 md:px-20"
    >
      <div className="flex flex-col gap-10 w-fit mt-20">
        <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl">
          Panda<span className="text-red-700">Shop</span>
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl">
          Lorem ipsum dolor sit ametvoluptatibus <br />
          voluptatum iure ipsam quae?
          <br />
          oluptatum iure ipsam
        </p>
        <div className="flex gap-4 items-center">
          <Link to="/products">
            <PrimaryButton>SHOP NOW</PrimaryButton>
          </Link>
          <Link to="/about">
            <NormalButton>Read More</NormalButton>
          </Link>
        </div>
      </div>
      <div className="w-fit">
        <img
          className="w-[500px]  -skew-x-12 -skew-y-3"
          src="Project/Assets/—Pngtree—online shopping e-commerce with cellphone_5347885.png"
          alt="hero-img"
        ></img>
      </div>
    </section>
  );
};

export default Hero;