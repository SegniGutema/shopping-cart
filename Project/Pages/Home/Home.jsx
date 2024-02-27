import WhyChooseUs from "./ChooseUs";
import Hero from "./Hero";
import Testimonial from "./Testimonial";

const Home = () => {
  return (
    <div className="flex flex-col mt-20 md:mt-24 w-full ">
      <Hero />
      <WhyChooseUs />
      <Testimonial />
    </div>
  );
};

export default Home;
