import WhyChooseUs from "./ChooseUs";
import Hero from "./Hero";
import ProductDemo from "./ProductDemo";
import Testimonial from "./Testimonial";

const Home = () => {
  return (
    <div className="flex flex-col w-full ">
      <Hero />
      <ProductDemo />
      <WhyChooseUs />
      <Testimonial />
    </div>
  );
};

export default Home;
