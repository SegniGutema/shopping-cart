import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faPinterestP,
} from "@fortawesome/free-brands-svg-icons";
import InputForm from "./Form";
import { Link } from "react-router-dom";

const ContactUs = () => {
  return (
    <section className="py-24 max-w-[1000px] mx-auto flex flex-wrap gap-14">
      <div className="ml-12">
        <h2 className="text-2xl md:text-3xl  font-bold mb-6">
          Store Locations
        </h2>
        <ul className="text-lg flex flex-col gap-4">
          <li>Merkato</li>
          <li>Bole</li>
          <li>Megenagna</li>
          <li>Ayer tena</li>
        </ul>
      </div>
      <div>
        <h2 className="ml-12 text-2xl md:text-3xl  font-bold mb-6">
          Contact Us
        </h2>
        <div>
          <div className="ml-12 mt-4 text-blue-600">
            <Link to="#">251 900 000</Link>
          </div>
          <div className="ml-12 mt-4 text-blue-600">
            <Link to="#">251 911 111</Link>
          </div>
          <div className="ml-12 mt-4 text-blue-600">
            <Link to="#">example@gmail.com</Link>
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
        <div className="flex flex-wrap gap-6 ml-12 ">
          <Link
            to={"#"}
            className="text-2xl bg-blue-600 p-4 hover:translate-y-[-8px] transition-all ease-linear hover:shadow-stone-500"
          >
            <FontAwesomeIcon icon={faFacebookF} />
          </Link>
          <Link
            to={"#"}
            className="text-2xl bg-red-500 p-4  hover:translate-y-[-8px] transition-all ease-linear hover:shadow-stone-500"
          >
            <FontAwesomeIcon icon={faInstagram} className="rounded-full" />
          </Link>
          <Link
            to={"#"}
            className="text-2xl bg-sky-500 p-4  hover:translate-y-[-8px] transition-all ease-linear hover:shadow-stone-500"
          >
            <FontAwesomeIcon icon={faTwitter} className="rounded-[100%]" />
          </Link>
          <Link
            to={"#"}
            className="text-2xl bg-red-700 p-4  hover:translate-y-[-8px] transition-all ease-linear hover:shadow-stone-500"
          >
            <FontAwesomeIcon icon={faPinterestP} className="rounded-[100%]" />
          </Link>
        </div>
      </div>
      <div className="px-8 flex-grow max-w-[800px]">
        <h2 className="text-center text-2xl md:text-3xl font-bold mb-8">
          Leave us a feedback
        </h2>
        <InputForm />
      </div>
    </section>
  );
};

export default ContactUs;
