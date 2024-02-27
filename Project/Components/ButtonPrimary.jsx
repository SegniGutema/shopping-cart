const PrimaryButton = ({ children }) => {
  return (
    <button className="bg-red-500 text-white py-4 px-6 rounded-sm  border-none">
      {children}
    </button>
  );
};

export default PrimaryButton;
