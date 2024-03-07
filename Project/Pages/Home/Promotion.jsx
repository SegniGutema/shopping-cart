// import imgUrl from "../../Assets/imgbin_discount-tag-with-30-off-discount-tag-discount-label-png.png";
// document.getElementById("promo-img").src = imgUrl;

const Promotion = () => {
  return (
    <section className="flex flex-wrap gap-10 justify-between items-center min-h-screen bg-yellow-400 w-full px-14 md:px-16 py-14 mt-14">
      <div className="mx-auto">
        <h1 className="w-fit text-sky-300xl lg:text-6xl font-bold bg-red-600 text-white px-5 py-4 skew-x-12 -rotate-6">
          Mega sale
        </h1>
        <p className="w-fit text-2xl lg:text-5xl font-bold bg-green-600 text-white px-5 py-4 skew-x-12 -rotate-6">
          Purchase Now
        </p>
        <p className="w-fit text-xl lg:text-5xl font-bold bg-red-600 text-white px-5 py-4 skew-x-12 -rotate-6">
          Get Discount !
        </p>
      </div>
      <div className="mx-autos">
        <img
          src="/imgbin_discount-tag-with-30-off-discount-tag-discount-label-png.png"
          className="w-[300px] lg:w-[400px]"
          alt="30% off"
        />
      </div>
    </section>
  );
};

export default Promotion;
