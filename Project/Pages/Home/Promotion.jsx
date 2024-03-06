const Promotion = () => {
  return (
    <section className="flex flex-wrap justify-between items-center min-h-screen bg-orange-400 w-full px-12 md:px-14 pt-14 mt-14">
      <div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
          30% <i>off</i>
        </h1>
        <p>Enjoy 30 % discount on tour first purchase </p>
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
