import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faPinterestP,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const Footer = () => {
  const footer = {
    company: {
      header: "Company",
      links: [
        { name: "About us", link: "#" },
        { name: "Policies", link: "#" },
        { name: "Shop Locations", link: "#" },
      ],
    },
    products: {
      header: "Products",
      links: [
        { name: "Clothing", link: "#" },
        { name: "Electronics", link: "#" },
        { name: "Accessory", link: "#" },
        { name: "Jewelry", link: "#" },
      ],
    },
    services: {
      header: "Services",
      links: [
        { name: "Free Shipping", link: "#" },
        { name: "Replacement", link: "#" },
        { name: "Repairing", link: "#" },
        { name: "Outfit consultancy", link: "#" },
      ],
    },
    contacts: {
      links: [
        {
          name: "facebook",
          icon: (
            <FontAwesomeIcon icon={faFacebookF} className="text-blue-600" />
          ),
          link: "#",
        },
        {
          name: "instagram",
          icon: <FontAwesomeIcon icon={faInstagram} className="text-red-500" />,
          link: "#",
        },
        {
          name: "twitter",
          icon: <FontAwesomeIcon icon={faTwitter} className="text-sky-500" />,
          link: "#",
        },
        {
          name: "pinterest",
          icon: (
            <FontAwesomeIcon icon={faPinterestP} className="text-red-700" />
          ),
          link: "#",
        },
      ],
    },
  };

  return (
    <>
      <div className="px-14 md:px-20 md:py-16 py-12 bg-blue-950 flex justify-center flex-col gap-10 md:gap-14 w-full">
        <div className="flex justify-between flex-wrap gap-10">
          <section className="flex flex-wrap gap-10 md:gap-16 text-white ">
            <div>
              <h2 className="font-bold mb-6 text-lg">
                {footer.company.header}
              </h2>
              <ul className="flex flex-col gap-4">
                {footer.company.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.link}
                      className="cursor pointer hover:text-red-400 active:bg-red-500"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-bold mb-6 text-lg ">
                {footer.products.header}
              </h2>

              <ul className="flex flex-col gap-4">
                {footer.products.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.link}
                      className="cursor pointer hover:text-red-400 active:bg-red-500"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-bold mb-6 text-lg">
                {footer.services.header}
              </h2>
              <ul className="flex flex-col gap-4">
                {footer.services.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.link}
                      className="cursor pointer hover:text-red-400 active:bg-red-500"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </section>
          <section>
            <ul className="flex  gap-8">
              {footer.contacts.links.map((link) => (
                <li key={link.name}>
                  <Link
                    to={"#"}
                    className="text-3xl rounded-full cursor pointer"
                    href={link.link}
                  >
                    <span>{link.icon}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </div>
        <div className="text-white">
          <p>
            Copyright 2024 by LoremIpsum. All Rights Reserved. DubaiTera is
            Powered by panda community.
          </p>
        </div>
      </div>
      <div className="w-full py-8 flex justify-center items-center bg-black text-white">
        <p>Created by Segni (panda)</p>
      </div>
    </>
  );
};

export default Footer;
