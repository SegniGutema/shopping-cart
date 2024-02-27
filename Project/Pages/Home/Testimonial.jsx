import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

const Testimonial = () => {
  const testimonials = [
    {
      name: "brad",
      testimony:
        "DubaiTera is one of the best shopping site I have ever come across aefnvg qetiokbv oefkfnoe  bkqoe oebvqob qenvb 34j wrbno tboqekgo prknbwrib ",
      //   img: ".../Assets/c3.png",
      img: "Project/Assets/c2.png",
    },
    {
      name: "Lucy",
      testimony:
        "DubaTera makes the process of purchasing very easy for me that's why its always my choice  roenv o wrnv    owvp wdvnrjv vpvt ",
      img: "Project/Assets/user1.png",
    },
    {
      name: "John",
      testimony:
        "DubaiTera is my number one choice and always has been weqjnvjkne jerjknv eroinvoer eronvqeor rqwonvsokl   qerqvorenv reon",
      img: "Project/Assets/c3.png",
    },
  ];
  return (
    <div className="flex flex-col gap-5 py-28 w-9/12 mx-auto">
      <div className="mx-auto mb-12">
        <h2 className="font-bold text-3xl md:text-4xl mb-6 mx-auto">
          Still not convinced ?
        </h2>
        <p className="text-lg mx-auto md:text-xl">
          Check what or customers are saying
        </p>
      </div>
      <div className="mx-auto">
        {testimonials.map((testifier) => (
          <div key={testifier.name} className="flex flex-col gap-6 mb-16">
            <img
              className="mx-auto"
              src={testifier.img}
              alt={testifier.name + "'s-img"}
            />
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
