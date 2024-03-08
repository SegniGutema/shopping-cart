// eslint-disable-next-line react/prop-types
const NormalButton = ({ type, children }) => {
  return (
    <button
      type={type ? type : "button"}
      className="bg-white text-nowrap  text-red-400 px-6 py-4 rounded-md border border-red-400 w-fit"
    >
      {children}
    </button>
  );
};

export default NormalButton;
