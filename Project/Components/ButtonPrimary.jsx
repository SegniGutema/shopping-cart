const PrimaryButton = ({ type, children, clickHandler }) => {
  return (
    <button
      onClick={clickHandler}
      type={type ? type : "button"}
      className="bg-red-500 text-white py-4 px-6 rounded-sm  border-none"
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
