function formatPrice(price) {
  return Math.round(Number(price) || 0).toLocaleString("fa-IR");
}

const serverUrl = "https://www.emadtalebloo.com/panelapi/Uploads/Products";

function OrderProductItem({ item }) {
  const product = item.product ?? {};

  const imageUrl = product.img1
    ? `${serverUrl}/${product.img1.replace(/^\/+/, "")}`
    : null;

  const quantity = Number(item.quantity) || 0;
  const unitPrice = Number(item.unitPrice) || 0;
  const totalPrice = Number(item.totalPrice) || 0;
  const discount = Number(item.discount) || 0;

  return (
    <div
      dir="rtl"
      className="
        group w-full overflow-hidden
        rounded-2xl border border-purple-100
        bg-white p-3 font-myfont
        shadow-sm shadow-purple-100/40
        transition-all duration-300
        hover:-translate-y-1 hover:border-fuchsia-200
        hover:shadow-lg hover:shadow-purple-100/60
        sm:p-4
      "
    >
      {/* مشخصات محصول */}
      <div className="flex min-w-0 items-center gap-3 sm:gap-4">
        <div
          className="
          flex size-20 shrink-0 items-center
          justify-center overflow-hidden
          rounded-2xl border border-purple-100
          bg-linear-to-br from-purple-50 to-fuchsia-50
          p-2 sm:size-24
        "
        >
          {imageUrl ? (
            <img
              src={imageUrl}
              alt={product.name || "محصول"}
              className="
                h-full w-full object-contain
                transition-transform duration-500
                group-hover:scale-110
              "
            />
          ) : (
            <i className="fa-regular fa-image text-3xl text-purple-200" />
          )}
        </div>

        <div className="min-w-0 flex-1">
          <h3
            className="
            line-clamp-2 break-all
            text-sm font-extrabold leading-7
            text-purple-950 sm:text-base
          "
          >
            {product.name || "نام محصول"}
          </h3>

          <div
            className="
            mt-3 inline-flex items-center gap-2
            rounded-xl bg-purple-50 px-3 py-2
            text-xs font-medium text-gray-600
          "
          >
            <i className="fa-solid fa-box text-fuchsia-600" />
            تعداد:
            <span className="font-extrabold text-purple-900">
              {quantity.toLocaleString("fa-IR")} عدد
            </span>
          </div>
        </div>
      </div>

      {/* قیمت‌ها */}
      <div
        className="
        mt-4 grid grid-cols-1 gap-3
        border-t border-purple-100 pt-4
        sm:grid-cols-2
      "
      >
        <div className="rounded-xl bg-purple-50/70 p-3">
          <p className="text-xs text-gray-500">قیمت هر عدد</p>
          <p className="mt-2 text-sm font-bold text-purple-950">
            {formatPrice(unitPrice)} تومان
          </p>
        </div>

        <div className="rounded-xl bg-fuchsia-50/70 p-3">
          <p className="text-xs text-gray-500">مبلغ کل محصول</p>
          <p className="mt-2 text-sm font-extrabold text-fuchsia-800">
            {formatPrice(totalPrice)} تومان
          </p>
        </div>
      </div>

      {/* تخفیف */}
      {discount > 0 && (
        <div
          className="
          mt-3 flex items-center gap-2
          rounded-xl border border-red-100
          bg-red-50/70 px-3 py-2
          text-xs font-bold text-red-600
        "
        >
          <i className="fa-solid fa-tag" />
          تخفیف:
          <span>{formatPrice(discount)} تومان</span>
        </div>
      )}
    </div>
  );
}

export default OrderProductItem;
