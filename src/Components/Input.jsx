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
      className=
       {` w-full 
        font-myfont
        my-2 ml-0
        px-3 py-3
        text-right
        bg-white
        border border-[#ddd]
        rounded-2xl
        text-[#333]
        outline-none
        shadow-[0_2px_5px_rgba(0,0,0,0.05)]
        transition duration-200 ease-in-out
        cursor-text
        font-bold
        ${className}
      `}
    
    />
  );
}

export default Input;