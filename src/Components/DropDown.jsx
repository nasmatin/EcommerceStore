
const DROPDOWN = ({
  options = [],
  value,
  onChange,
  name,
  disabled = false,
}) => {
  return (
    <div className="font-myfont relative w-full max-w-48 ">
      <select
className="my-2 mx-2 w-full max-w-96 cursor-pointer appearance-none rounded-lg border border-purple-500 bg-white p-3 text-right font-myfont font-bold text-[#333] shadow-sm [user-select:none]"   
     id={name}
        name={name}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        disabled={disabled}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      <span className="pointer-events-none absolute left-[10px] top-1/2 -translate-y-1/2">
        <i className="fa-solid fa-caret-down"></i>
      </span>
    </div>
  );
};

export default DROPDOWN;
