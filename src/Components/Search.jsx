function Search() {
  return (
    <div
      dir="rtl"
      className="
        flex flex-row relative
        font-myfont
        h-10
        w-full
        rounded-sm
        border-2 border-purple-400
      "
    >
      <form className="flex flex-1 items-center min-w-0">
        <i
          className="
            fa-solid fa-magnifying-glass
            pr-3 
            text-purple-400
            dark:text-purple-500
            text-xl
            shrink-0
          "
        />

        <input
          type="text"
          placeholder="جست و جو"
          className="
            flex-1
            min-w-0
            pr-3
            font-semibold
            border-none
            text-purple-800
            outline-none
            dark:text-purple-600
            bg-transparent
          "
        />
      </form>
    </div>
  );
}

export default Search;