function Input({
  type = "text",
  name,
  value,
  onChange,
  placeholder,
}) {
  return (
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="
        w-full 
        my-[10px] ml-0
        px-[10px] py-[10px]
        text-right
        bg-white
        border border-[#ddd]
        rounded-[8px]
        text-[#333]
        outline-none
        shadow-[0_2px_5px_rgba(0,0,0,0.05)]
        transition duration-200 ease-in-out
        cursor-text
        font-bold
      "
      style={{
        fontFamily: '"Digi Hamishe Regular"',
      }}
    />
  );
}

export default Input;