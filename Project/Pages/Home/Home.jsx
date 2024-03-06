import WhyChooseUs from "./ChooseUs";
import Hero from "./Hero";
import ProductDemo from "./ProductDemo";
import Testimonial from "./Testimonial";
import Promotion from "./Promotion";
import Subscribe from "./subscribe";

const Home = () => {
  return (
    <div className="flex flex-col w-full ">
      <Hero />
      <ProductDemo />
      <Promotion />
      <WhyChooseUs />
      <Testimonial />
      <Subscribe />
    </div>
  );
};

export default Home;
