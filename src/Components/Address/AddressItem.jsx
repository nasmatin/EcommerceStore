function AddressCard({ id, title, fullAddress, postalCode, onEdit, onRemove }) {
  const toPersianNumber = (value) =>
    String(value ?? "").replace(/\d/g, (digit) => "۰۱۲۳۴۵۶۷۸۹"[digit]);

  return (
    <div
      dir="rtl"
      data-address-id={id}
      className="
        group flex w-full min-w-0 items-center gap-3
        rounded-2xl border border-purple-100
        bg-white p-3 shadow-sm
        transition-all duration-300 ease-out
        hover:-translate-y-1 hover:border-fuchsia-200
        hover:shadow-lg hover:shadow-purple-100/60
        sm:gap-4 sm:p-5
      "
    >
      {/* Address Icon */}
      <div
        className="
        flex size-11 shrink-0 items-center justify-center
        rounded-xl bg-linear-to-br from-purple-100 to-fuchsia-100
        text-xl text-purple-700
        transition-all duration-300
        group-hover:from-purple-700 group-hover:to-fuchsia-600
        group-hover:text-white
        sm:size-14 sm:rounded-2xl sm:text-2xl
      "
      >
        <i className="fa-solid fa-location-dot"></i>
      </div>

      {/* Address Information */}
      <div className="min-w-0 flex-1">
        <h3 className="truncate text-sm font-extrabold leading-7 text-purple-950 sm:text-base">
          {title}
        </h3>

        <p className="mt-1 break-all text-xs font-normal leading-7 text-gray-600 sm:text-sm">
          {toPersianNumber(fullAddress)}
        </p>

        <div
          className="
          mt-2 inline-flex max-w-full flex-wrap items-center
          gap-1.5 rounded-lg bg-purple-50 px-2.5 py-1.5
          text-[10px] font-medium text-purple-700
          sm:text-xs
        "
        >
          <i className="fa-solid fa-envelopes-bulk text-fuchsia-600"></i>
          <span>کد پستی:</span>
          <span className="font-bold tracking-wide">
            {toPersianNumber(postalCode)}
          </span>
        </div>
      </div>

      {/* Action Buttons */}
      <div
        className="
        flex shrink-0 flex-col items-center gap-2
        border-r border-purple-100 pr-2
        sm:flex-row sm:gap-2 sm:pr-3
      "
      >
        <button
          type="button"
          onClick={onEdit}
          aria-label="ویرایش آدرس"
          title="ویرایش آدرس"
          className="
            flex size-9 cursor-pointer items-center justify-center
            rounded-xl bg-green-50 text-green-600
            transition-all duration-200
            hover:scale-110 hover:bg-green-600 hover:text-white
            sm:size-10
          "
        >
          <i className="fa-solid fa-pen text-sm sm:text-base"></i>
        </button>

        <button
          type="button"
          onClick={onRemove}
          aria-label="حذف آدرس"
          title="حذف آدرس"
          className="
            flex size-9 cursor-pointer items-center justify-center
            rounded-xl bg-red-50 text-red-500
            transition-all duration-200
            hover:scale-110 hover:bg-red-600 hover:text-white
            sm:size-10
          "
        >
          <i className="fa-solid fa-trash text-sm sm:text-base"></i>
        </button>
      </div>
    </div>
  );
}

export default AddressCard;
