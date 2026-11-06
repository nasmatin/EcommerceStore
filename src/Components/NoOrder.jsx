function NoOrder() {
  return (
    <div
      dir="rtl"
      className="
        col-span-full flex min-h-105
        items-center justify-center
        px-4 py-12 font-myfont
        animate-in fade-in duration-500
      "
    >
      <div
        className="
          flex w-full max-w-md flex-col
          items-center rounded-3xl
          border border-purple-100
          bg-white px-6 py-10
          text-center shadow-lg shadow-purple-100/50
          transition-all duration-300
          hover:-translate-y-1 hover:shadow-xl
        "
      >
        <div
          className="
            mb-5 flex size-20 items-center
            justify-center rounded-3xl
            bg-linear-to-br from-purple-100 to-fuchsia-100
            text-purple-700 shadow-inner
            transition-transform duration-300
            hover:scale-110
          "
        >
          <i className="fa-solid fa-box-open text-3xl" />
        </div>

        <h2 className="mb-3 text-lg font-extrabold text-purple-950 sm:text-xl">
          سفارشی پیدا نشد!
        </h2>

        <p className="max-w-xs text-sm leading-8 text-gray-500">
          متأسفانه هنوز سفارشی برای نمایش وجود ندارد.
        </p>

        <div
          className="
          mt-6 h-1 w-16 rounded-full
          bg-linear-to-l from-purple-700 to-fuchsia-500
        "
        />
      </div>
    </div>
  );
}

export default NoOrder;
