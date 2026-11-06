const DROPDOWN = ({
  options = [],
  value,
  onChange,
  name,
  disabled = false,
}) => {
  return (
    <div className="relative my-2 w-full max-w-48 font-myfont">
      <select
        id={name}
        name={name}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        disabled={disabled}
        className="
          w-full cursor-pointer appearance-none
          rounded-xl border border-purple-200
          bg-white px-4 py-3 pl-10
          text-right text-sm font-bold text-purple-950
          shadow-sm shadow-purple-100/50
          outline-none
          transition-all duration-200
          hover:border-fuchsia-400 hover:shadow-md
          hover:shadow-purple-100/70
          focus:border-fuchsia-600
          focus:ring-2 focus:ring-fuchsia-100
          disabled:cursor-not-allowed
          disabled:bg-gray-100 disabled:opacity-60
        "
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      <span
        className="
          pointer-events-none absolute left-3 top-1/2
          -translate-y-1/2 text-sm text-fuchsia-700
          transition-transform duration-200
        "
      >
        <i className="fa-solid fa-chevron-down" />
      </span>
    </div>
  );
};

export default DROPDOWN;
