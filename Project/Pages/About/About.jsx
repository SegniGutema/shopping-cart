const About = () => {
  return (
    <section className="py-16 md:py-20 w-full max-w-[800px] mx-auto px-8">
      <div>
        <h1 className="text-2xl md:text-3xl text-center font-bold mb-10">
          About the company
        </h1>
        <p className="max-w-[700px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis iusto
          suscipit rem velit voluptas culpa dolores quisquam dolorem officia
          deserunt. Aspernatur architecto repudiandae assumenda blanditiis eos
          provident esse et quia!Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Facilis iusto suscipit rem velit voluptas culpa
          dolores quisquam dolorem officia deserunt. Aspernatur architecto
          repudiandae assumenda blanditiis eos provident esse et quia!
        </p>
      </div>
      <div>
        <h1 className="text-2xl md:text-3xl text-center font-bold mb-10 mt-8 ">
          {"our policies"}
        </h1>
        <div>
          <h2 className="text-xl md:text-2xl  font-bold mb-6">Return policy</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            iusto suscipit rem velit voluptas culpa dolores quisquam dolorem
            officia deserunt. Aspernatur architecto repudiandae assumenda
            blanditiis eos provident esse et quia! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Facilis iusto suscipit rem velit
            voluptas culpa dolores quisquam dolorem officia deserunt. Aspernatur
            architecto repudiandae assumenda blanditiis eos provident esse et
            quia!
          </p>
        </div>
        <div>
          <h2 className="text-xl md:text-2xl  font-bold my-6">Refund policy</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            iusto suscipit rem velit voluptas culpa dolores quisquam dolorem
            officia deserunt. Aspernatur architecto repudiandae assumenda
            blanditiis eos provident esse et quia! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Facilis iusto suscipit rem velit
            voluptas culpa dolores quisquam dolorem officia deserunt. Aspernatur
            architecto repudiandae assumenda blanditiis eos provident esse et
            quia!
          </p>
        </div>
      </div>
      <div>
        <h1 className="text-2xl md:text-3xl text-center font-bold mb-10 mt-8 ">
          Our Services
        </h1>
        <div>
          <ul className="text-center">
            <li className="text-lg font-bold mb-6">Free Shipping</li>
            <li className="text-lg font-bold mb-6">Replacement</li>
            <li className="text-lg font-bold mb-6">Repairing</li>
            <li className="text-lg font-bold mb-6">Outfit consultancy</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
