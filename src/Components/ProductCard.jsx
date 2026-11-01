
function ProductCard({ id, image, link, label, price, sale }) {
  // تبدیل قیمت فارسی به عدد قابل محاسبه
  const numericPrice = Number(
    String(price)
      .replace(/[۰-۹]/g, (digit) => "۰۱۲۳۴۵۶۷۸۹".indexOf(digit))
      .replace(/[^0-9]/g, "")
  );

  const discountPercent = Number(sale) || 0;
  const discountAmount = (numericPrice * discountPercent) / 100;
  const finalPrice = numericPrice - discountAmount;

  const formatPrice = (value) =>
    Math.round(value).toLocaleString("fa-IR");

  return (
    <div
      dir="rtl"
      className="relative cursor-pointer font-myfont border border-fuchsia-200 bg-fuchsia-50 rounded-2xl shadow-md p-2 sm:p-3 flex flex-col items-center text-center transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-xl"
      data-product-id={id}
      onClick={() => (window.location.href = link)}
    >
      <img
        src={`https://emadtalebloo.com/panelapi/Uploads/Products/${image}`}
        alt={label}
        className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-30 lg:h-30 mb-2 object-cover rounded-full shrink-0 transition-transform duration-300 ease-out hover:scale-105"
      />

      <div className="flex flex-col items-center w-full mt-1 sm:mt-2">
        <h3 className="font-extrabold text-xs sm:text-sm leading-5 line-clamp-2 h-10 px-1">
          {label}
        </h3>

        <div className="flex items-center justify-between w-full min-h-10 gap-1">
          <div className="flex flex-col items-center justify-center flex-1 gap-1 min-w-0">
            <p
              className={`text-[10px] sm:text-xs font-bold ${
                discountPercent > 0
                  ? "text-gray-400 line-through"
                  : "invisible"
              }`}
            >
              {formatPrice(numericPrice)} تومان
            </p>

            <p className="text-fuchsia-700 font-extrabold text-sm sm:text-base md:text-lg whitespace-nowrap">
              {formatPrice(discountPercent > 0 ? finalPrice : numericPrice)} تومان
            </p>
          </div>

          <span
            className={`shrink-0 self-center rounded-full bg-red-500 px-1.5 sm:px-2 py-1 text-[10px] sm:text-xs font-extrabold text-white ${
              discountPercent > 0 ? "visible" : "invisible"
            }`}
          >
            {formatPrice(discountPercent)}٪
          </span>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
