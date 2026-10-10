const Button = ({ label }) => {
  return (
    <button
      type="submit"
           className="rounded-lg bg-purple-800 px-5 py-2 font-myfont text-sm font-semibold text-purple-100 transition hover:bg-purple-700"

    >
      {label}
    </button>
  );
};

export default Button;