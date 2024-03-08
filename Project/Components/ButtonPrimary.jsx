// eslint-disable-next-line react/prop-types
const PrimaryButton = ({ type, children, clickHandler }) => {
  return (
    <button
      onClick={clickHandler}
      type={type ? type : "button"}
      className="bg-red-500 text-white text-nowrap py-4 px-6 rounded-md  border-none w-fit"
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
