import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

const Testimonial = () => {
  const testimonials = [
    {
      name: "Brad",
      testimony:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque blanditiis, quos, voluptatibus obcaecati delectus quasi esse quaerat quae illum corrupti dicta veritatis iste laborum dolores quo eum vero, natus nobis. adipisicing elit. Itaque blanditiis, quos, voluptatibus obcaecati delectus quasi esse quaerat quae illum corrupti dicta veritatis iste laborum dolores quo eum vero, natus nobis.",
      img: "/c2.png",
      role: "Customer",
    },
    {
      name: "Lucy",
      testimony:
        "Lorem ipsum dolor sit amet, iste laborum dolores quo eum vero, natus nobis. adipisicing elit. Itaque blanditiis, quos, voluptatibus obcaecati delectus quasi esse quaerat quae illum corrupti dicta veritatis iste laborum dolores quo eum vero, natus nobis.",
      img: "/user1.png",
      role: "Partner",
    },
    {
      name: "John",
      testimony:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque blanditiis, quos, voluptatibus obcaecati delectus quasi esse quaerat quae illum corrupti dicta veritatis iste laborum dolores quo eum vero, natus nobis. adipisicing elit. Itaque blanditiis, quos, voluptatibus obcaecati delectus quasi esse quaerat quae illum corrupti dicta veritatis iste laborum dolores quo eum vero, natus nobis.",
      role: "Designer",
      img: "/c3.png",
    },
  ];
  return (
    <div className="flex flex-col gap-5 py-28 w-9/12 mx-auto">
      <div className="mx-auto mb-12">
        <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl mb-6 mx-auto">
          Still not convinced ?
        </h2>
        <p className="text-lg mx-auto md:text-xl">
          Check what our customers are saying
        </p>
      </div>
      <div className="mx-auto">
        {testimonials.map((testifier) => (
          <div key={testifier.name} className="flex flex-col gap-6 mb-16 ">
            <div className="flex gap-3 items-center">
              <img
                className=""
                src={`${testifier.img}`}
                alt={testifier.name + "'s-img"}
              />
              <div>
                <p className="align-bottom text-lg font-bold">
                  {testifier.name}
                </p>
                <p>{testifier.role}</p>
              </div>
            </div>
            <p className="mx-auto max-w-96  relative ">
              <span className="absolute left-[-30px] top-[-35px] md:left-[-60px] md:top-[-55px] ">
                <FontAwesomeIcon
                  className="md:w-12 md:h-12 w-8 h-8 text-slate-600"
                  icon={faQuoteLeft}
                />
              </span>
              {testifier.testimony}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
