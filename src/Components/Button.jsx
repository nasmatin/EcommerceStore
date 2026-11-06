const Button = ({ label, onClick, className = "" }) => {
  return (
    <button
      type="submit"
      onClick={onClick}
      className={`
        inline-flex min-h-12 w-full min-w-0
        cursor-pointer items-center justify-center
        rounded-xl bg-linear-to-l from-purple-900 to-fuchsia-800
        px-6 py-3
        font-myfont text-sm font-bold text-white
        shadow-md shadow-purple-200/60
        transition-all duration-300 ease-out
        hover:-translate-y-1
        hover:from-purple-800 hover:to-fuchsia-700
        hover:shadow-lg hover:shadow-fuchsia-200/70
        active:translate-y-0 active:scale-95
        focus-visible:outline-2 focus-visible:outline-offset-2
        focus-visible:outline-fuchsia-600
        ${className}
      `}
    >
      {label}
    </button>
  );
};

export default Button;
