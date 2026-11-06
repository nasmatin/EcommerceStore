function ProductCard({ id, image, link, label, price, sale, brand }) {
  // تبدیل قیمت فارسی به عدد قابل محاسبه
  const numericPrice = Number(
    String(price)
      .replace(/[۰-۹]/g, (digit) => "۰۱۲۳۴۵۶۷۸۹".indexOf(digit))
      .replace(/[^0-9]/g, "")
  );

  const discountPercent = Number(sale) || 0;
  const discountAmount = (numericPrice * discountPercent) / 100;
  const finalPrice = numericPrice - discountAmount;

  const formatPrice = (value) => Math.round(value).toLocaleString("fa-IR");

  return (
    <div
      dir="rtl"
      data-product-id={id}
      onClick={() => (window.location.href = link)}
      className="
        group relative h-full min-w-0 cursor-pointer
        overflow-hidden rounded-2xl
        border border-purple-100
        bg-white
        p-2.5 sm:p-3 md:p-4
        flex flex-col items-center text-center
        shadow-[0_4px_18px_rgba(139,92,246,0.08)]
        transition-all duration-300 ease-out
        hover:-translate-y-2
        hover:border-purple-300
        hover:shadow-[0_12px_28px_rgba(139,92,246,0.17)]
        font-myfont
      "
    >
      {/* DISCOUNT */}

      {discountPercent > 0 && (
        <span
          className="
          absolute top-3 right-3 z-10
          rounded-full
          bg-linear-to-l from-fuchsia-600 to-purple-600
          px-2.5 py-1
          text-[10px] sm:text-xs
          font-bold text-white
          shadow-md
        "
        >
          {formatPrice(discountPercent)}٪ تخفیف
        </span>
      )}

      {/* PRODUCT IMAGE */}

      <div
        className="
        w-full aspect-square
        flex items-center justify-center
        rounded-xl
        bg-linear-to-br from-purple-50 to-fuchsia-50
        p-2 sm:p-3
        overflow-hidden
      "
      >
        <img
          src={`https://emadtalebloo.com/panelapi/Uploads/Products/${image}`}
          alt={label}
          className="
            w-full h-full
            object-contain
            transition-transform duration-500
            group-hover:scale-105
          "
        />
      </div>

      {/* PRODUCT INFO */}

      <div className="flex flex-col items-center w-full mt-3 flex-1">
        <p
          className="
          text-gray-400 text-[10px] sm:text-xs
          font-medium mb-1
          truncate max-w-full
        "
        >
          {brand}
        </p>

        <h3
          className="
          font-bold text-xs sm:text-sm
          text-gray-800 leading-6
          line-clamp-2
          min-h-12
          px-1
        "
        >
          {label}
        </h3>

        {/* PRICE */}

        <div
          className="
          flex items-center justify-between
          w-full min-h-12 gap-1 mt-2
        "
        >
          <div className="flex flex-col items-center justify-center flex-1 gap-1 min-w-0">
            <p
              className={`
              text-[10px] sm:text-xs font-medium
              ${
                discountPercent > 0 ? "text-gray-400 line-through" : "invisible"
              }
            `}
            >
              {formatPrice(numericPrice)} تومان
            </p>

            <p
              className="
              text-purple-700
              font-extrabold
              text-xs sm:text-sm md:text-base
              whitespace-nowrap
            "
            >
              {formatPrice(discountPercent > 0 ? finalPrice : numericPrice)}{" "}
              تومان
            </p>
          </div>
        </div>
      </div>

      {/* BOTTOM DECORATION */}

      <div
        className="
        absolute bottom-0 right-0 left-0
        h-1
        bg-linear-to-l from-purple-500 via-fuchsia-400 to-purple-300
        scale-x-0 origin-right
        transition-transform duration-300
        group-hover:scale-x-100
      "
      />
    </div>
  );
}

export default ProductCard;
