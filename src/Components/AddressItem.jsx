function AddressCard({ id, title, fullAddress, postalCode, onEdit, onRemove }) {
  return (
    <div
      dir="rtl"
      data-address-id={id}
      className="font-myfont flex w-full items-center gap-3 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg"
    >
      {/* اطلاعات آدرس در سمت راست */}
      <div className="min-w-0 flex-1">
        <h3 className="font-bold leading-7 text-gray-800">{title}</h3>

        <p className="mt-2 min-w-0 max-w-full whitespace-normal break-all font-normal text-gray-700">
          {String(fullAddress ?? "").replace(
            /\d/g,
            (digit) => "۰۱۲۳۴۵۶۷۸۹"[digit]
          )}
          {" - کد پستی: "}
          {String(postalCode ?? "").replace(
            /\d/g,
            (digit) => "۰۱۲۳۴۵۶۷۸۹"[digit]
          )}
        </p>

        {/* {postalcode && (
          <p className="mt-2 text-sm text-gray-500">کد پستی: {postalcode}</p>
        )} */}
      </div>

      {/* دکمه‌ها در انتهای چپ، وسط ارتفاع کارت */}
      <div className="flex shrink-0 items-center gap-2 border-r border-gray-100 pr-2">
        <button
          type="button"
          onClick={onEdit}
          aria-label="ویرایش آدرس"
          className="cursor-pointer rounded-lg px-2 py-2 transition-all duration-200 hover:scale-110 hover:bg-green-50 hover:text-green-700"
        >
          <i className="fa-solid fa-pen text-lg text-green-600"></i>
        </button>

        <button
          type="button"
          onClick={onRemove}
          aria-label="حذف آدرس"
          className="cursor-pointer rounded-lg px-2 py-2 text-red-500 transition-all duration-200 hover:scale-110 hover:bg-red-50 hover:text-red-700"
        >
          <i className="fa-solid fa-trash text-lg text-red-600"></i>
        </button>
      </div>
    </div>
  );
}

export default AddressCard;
