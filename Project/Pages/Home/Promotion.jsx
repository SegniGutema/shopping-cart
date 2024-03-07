const Promotion = () => {
  return (
    <section className="flex flex-wrap gap-10 justify-between items-center min-h-screen bg-yellow-400 w-full px-14 md:px-16 py-14 mt-14">
      <div>
        <h1 className="w-fit text-sky-300xl lg:text-5xl font-bold bg-red-600 text-white px-5 py-4 skew-x-12 -rotate-6">
          Mega sale
        </h1>
        <p className="w-fit text-2xl lg:text-4xl font-bold bg-green-600 text-white px-5 py-4 skew-x-12 -rotate-6">
          Purchase Now
        </p>
        <p className="w-fit text-xl lg:text-3xl font-bold bg-red-600 text-white px-5 py-4 skew-x-12 -rotate-6">
          With Big Discount !
        </p>
      </div>
      <div>
        <img
          className="w-[400px]"
          src="Project/Assets/imgbin_discount-tag-with-30-off-discount-tag-discount-label-png.png"
          alt="30% off"
        />
      </div>
    </section>
  );
};

export default Promotion;
