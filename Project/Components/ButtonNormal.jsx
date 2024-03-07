const NormalButton = ({ type, children }) => {
  return (
    <button
      type={type ? type : "button"}
      className="bg-white text-red-400 px-6 py-4 rounded-sm border border-red-400"
    >
      {children}
    </button>
  );
};

export default NormalButton;