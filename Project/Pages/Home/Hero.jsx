import NormalButton from "../../Components/ButtonNormal";
import PrimaryButton from "../../Components/ButtonPrimary";

const Hero = () => {
  return (
    <section
      style={{ backgroundImage: "url('Project/Assets/slider_1.jpg')" }}
      className="min-h-screen w-full  flex  items-center px-12 md:px-20  relative right-0"
    >
      <div className="flex flex-col gap-10">
        <h1 className="font-bold text-4xl">
          Dubai<span className="text-red-400">Tera</span> Online Shopping
        </h1>
        <p className="text-lg">
          Lorem ipsum dolor sit ametvoluptatibus <br />
          voluptatum iure ipsam quae?
          <br />
          oluptatum iure ipsam
        </p>
        <div className="flex gap-4 items-center">
          <PrimaryButton>SHOP NOW</PrimaryButton>
          <NormalButton>Read More</NormalButton>
        </div>
      </div>
      {/* <div>
        <img
          className=""
          src=".../Assets/deal_ofthe_week.png"
          alt="hero-img"
        ></img>
      </div> */}
    </section>
  );
};

export default Hero;
