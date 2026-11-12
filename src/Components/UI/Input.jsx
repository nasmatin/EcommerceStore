function Input({
  type = "text",
  name,
  value,
  onChange,
  placeholder,
  readOnly = false,
  disabled = false,
  className = "",
}) {
  return (
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      readOnly={readOnly}
      disabled={disabled}
      className={`
        my-1.5 w-full min-w-0
        rounded-xl border border-purple-200
        bg-white px-4 py-3
        font-myfont text-right text-sm font-medium
        text-purple-950 placeholder:text-gray-400
        shadow-sm shadow-purple-100/50
        outline-none
        transition-all duration-200
        hover:border-fuchsia-300
        focus:border-fuchsia-600
        focus:ring-2 focus:ring-fuchsia-100
        read-only:cursor-default read-only:bg-purple-50/50
        disabled:cursor-not-allowed disabled:bg-gray-100
        disabled:opacity-60
        ${className}
      `}
    />
  );
}

export default Input;
