function AddressCard({ id, title, fullAddress, postalCode, onEdit, onRemove }) {
  return (
    <div
      dir="rtl"
      data-address-id={id}
      className="font-myfont flex w-full items-center gap-3 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition hover:shadow-md"
    >
      {/* اطلاعات آدرس در سمت راست */}
      <div className="flex-1 min-w-0">
        <h3 className="text-balance font-bold leading-7 text-gray-800">
          {title}
        </h3>

        <p className="mt-2 break-words text-balance font-medium text-gray-700">
           {String(fullAddress ?? "").replace(
            /\d/g,
            (digit) => "۰۱۲۳۴۵۶۷۸۹"[digit]
          )} - کد پستی:{" "}
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
      <div className="flex left-0 shrink-0 items-center gap-2 border-r border-gray-100 pr-2">
        <button
          type="button"
          onClick={onEdit}
          className="px-2 py-2 transition hover:bg-green-50 hover:text-green-700"
        >
          <i className="fa-solid fa-pen text-lg text-green-600"></i>
        </button>

        <button
          type="button"
          onClick={onRemove}
          className=" px-2 py-2  text-red-500 transition hover:bg-red-50 hover:text-red-700"
        >
          <i className="fa-solid fa-trash text-lg text-red-600"></i>
        </button>
      </div>
    </div>
  );
}

export default AddressCard;
