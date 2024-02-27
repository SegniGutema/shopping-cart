import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faClockRotateLeft,
  faSackDollar,
  faTruck,
} from "@fortawesome/free-solid-svg-icons";

const WhyChooseUs = () => {
  const data = [
    {
      id: 1,
      icon: <FontAwesomeIcon icon={faTruck} />,
      title: "Free Delivery",
      description: "Receive your order without  any additional cost",
    },
    {
      id: 2,
      icon: <FontAwesomeIcon icon={faClockRotateLeft} />,
      title: "45 days Return",
      description:
        "You can return the product and get a replace if you find any issue with the product within 45 days",
    },
    {
      id: 3,
      icon: <FontAwesomeIcon icon={faSackDollar} />,
      title: "100% Money Back Guarantee",
      description:
        "You will get you money back if there is any problem with the product you got",
    },
    {
      id: 4,
      icon: <FontAwesomeIcon icon={faClock} />,
      title: "24 / 7 service",
      description: "We are available and at your service at any time",
    },
  ];

  return (
    <div className="mt-28">
      <h1 className="text-3xl md:text-4xl mx-auto mb-10 text-center">
        Why Choose Us ?
      </h1>
      <div className="mx-auto max-w-600px flex flex-col px-14">
        {data.map((item) => (
          <div
            key={item.id}
            className="flex flex-wrap gap-8 items-center mt-24 px-16 py-12 bg-slate-50 rounded-md w-350px md:w-450px "
          >
            <div className="text-red-400 text-3xl">{item.icon}</div>
            <div>
              <h3 className="font-bold text-lg md:text-xl mb-6">
                {item.title}
              </h3>
              <p className="">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
