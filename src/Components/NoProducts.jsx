
function NoProducts() {
  return (
    <div
      dir="rtl"
      className="col-span-full flex min-h-sm items-center justify-center px-4 py-12"
    >
      {" "}
      <div className="flex w-full max-w-md flex-col items-center rounded-2xl border border-purple-100 bg-white px-6 py-10 text-center shadow-sm">
        {" "}
        <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-purple-50">
          {" "}
          <i className="fa-solid fa-box-open text-3xl text-purple-700"></i>{" "}
        </div>{" "}
        <h2 className="mb-3 text-xl font-bold text-gray-800">
          {" "}
          محصولی پیدا نشد!{" "}
        </h2>{" "}
        <p className="mb-7 max-w-xs text-sm leading-7 text-gray-500">
          {" "}
          متأسفانه در این دسته‌بندی محصولی برای نمایش وجود ندارد. 
              {" "}
        </p>{" "}
       
      </div>{" "}
    </div>
  );
}
export default NoProducts;
