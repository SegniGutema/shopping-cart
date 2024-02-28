import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import InputForm from "./Form";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const ContactUs = () => {
  return (
    <section className="py-16 max-w-[800px] mx-auto flex flex-col gap-14">
      <div className="w-5/6 mx-auto">
        <h2 className="text-center text-2xl md:text-3xl  font-bold mb-6">
          Store Locations
        </h2>
        {/* map goes here */}
        <div className="w-full h-[60vh] shadow-md shadow-slate-500 "></div>
      </div>
      <div>
        <h2 className="ml-12 text-2xl md:text-3xl  font-bold mb-6">
          Contact Us
        </h2>
        <div>
          <div className="ml-12 mt-4">
            <a href={"#"}>251 900 000</a>
          </div>
          <div className="ml-12 mt-4">
            <a href={"#"}>251 911 111</a>
          </div>
        </div>
        <div>
          <h4 className="font-bold ml-12 my-6 text-2xl">Working Hours</h4>
          <p className="ml-12 mt-4">MON - FRI</p>
          <p className="ml-12 mt-4">2:00 - 6:00 Morning</p>
          <p className="ml-12 mt-4">8:00 - 5:00 Noon</p>
        </div>
      </div>
      <div>
        <h2 className="ml-12 text-2xl md:text-3xl font-bold mb-8">Follow Us</h2>
        <div className="flex gap-12 ml-12 ">
          <a
            href="#"
            className="text-2xl bg-blue-600 p-4 rounded-[100%] hover:translate-y-[-8px] transition-all ease-linear hover:shadow-stone-500"
          >
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a
            href="#"
            className="text-2xl bg-red-500 p-4 rounded-[100%] hover:translate-y-[-8px] transition-all ease-linear hover:shadow-stone-500"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a
            href="#"
            className="text-2xl bg-sky-500 p-4 rounded-[100%] hover:translate-y-[-8px] transition-all ease-linear hover:shadow-stone-500"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </div>
      </div>
      <div className="px-8">
        <h2 className="text-center text-2xl md:text-3xl font-bold mb-8">
          Leave us a feedback
        </h2>
        <InputForm />
      </div>
    </section>
  );
};

export default ContactUs;
