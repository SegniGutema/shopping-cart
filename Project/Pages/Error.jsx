import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section className="h-screen w-full flex flex-col gap-6 items-center justify-center">
      <h2 className="text-3xl">{"Oophs  : ("}</h2>
      <p className="text-xl">Error : Could not load the page</p>
      <Link className="text-blue-400 text-xl font-bold" to="/">
        back home
      </Link>
    </section>
  );
};
export default Error;
