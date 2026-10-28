function NoAddress() {
  return (
    <div
      dir="rtl"
      className="col-span-full flex min-h-sm items-center justify-center px-4 py-12 animate-in fade-in duration-500"
    >
      <div className="flex w-full max-w-md flex-col items-center px-6 py-10 text-center">
        <div className="mb-5 flex h-20 w-20 items-center justify-center transition-transform duration-300 hover:scale-110">
          <i className="fa-solid fa-box-open text-3xl text-fuchsia-700 transition-colors duration-300 hover:text-fuchsia-500"></i>
        </div>

        <h2 className="mb-3 text-xl font-bold text-gray-800 transition-colors duration-300 hover:text-fuchsia-800">
          آدرسی پیدا نشد!
        </h2>

        <p className="mb-7 max-w-xs text-sm leading-7 text-gray-500">
          برای ثبت آدرس از دکمه + بالای صفحه اقدام کنید.
        </p>
      </div>
    </div>
  );
}

export default NoAddress;
