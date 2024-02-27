const Product = ({ src, title, price }) => {
  return (
    <>
      <div>
        <img src={src} alt={title} />
      </div>
      <div>
        <p>{title}</p>
        <p>{price}</p>
      </div>
    </>
  );
};

export default Product;
