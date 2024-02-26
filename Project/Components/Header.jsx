import Nav from "./Nav";

const Header = () => {
  return (
    <header className="bg-white fixed w-full  top-0 left-0 flex items-center justify-between  z-10 shadow-md md:px-20 px-8 md:py-10 py-6 ">
      <div className="md:text-3xl text-2xl font-bold">
        Dubai<span className="text-red-500">Tera</span>
      </div>
      <Nav />
    </header>
  );
};

export default Header;
