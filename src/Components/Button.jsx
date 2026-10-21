const Button = ({ label, onClick }) => {
  return (
    <button
      type="submit"
      className="w-auto h-14 mt-4 cursor-pointer rounded-lg bg-fuchsia-900 px-8 py-2 font-myfont text-l font-semibold text-fuchsia-100 transition hover:bg-fuchsia-700"
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
