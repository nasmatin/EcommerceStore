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
      className="w-full rounded-xl border border-fuchsia-200 p-2 shadow-xl transition-shadow hover:shadow-md sm:p-4"
    >
      <div className="flex items-center gap-2">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-lg  sm:h-20 sm:w-20">
          {product.img1 ? (
            <img
              src={imageUrl}
              alt={product.name || "محصول"}
              className="h-full w-full  rounded-full object-contain p-2"
            />
          ) : (
            <div className="h-12 w-12 rounded-full  sm:h-14 sm:w-14" />
          )}
        </div>

        <div className="min-w-0 flex-1">
          <h3 className="break-all text-normal font-semibold leading-6 text-gray-800 sm:text-base">
            {product.name || "نام محصول"}
          </h3>

          <p className="mt-1 text-normal text-gray-600 font-medium">
            تعداد:{" "}
            <span className="font-semibold text-gray-800">
              {quantity.toLocaleString("fa-IR")} عدد
            </span>
          </p>
        </div>
      </div>

      {/* قیمت‌ها */}
      <div className="mt-4 grid grid-cols-1 gap-3 border-t border-gray-100 pt-4 sm:grid-cols-2">
        <div className="rounded-xl p-3">
          <p className="text-normal text-gray-500">قیمت هر عدد</p>
          <p className="mt-2 font-semibold text-gray-800">
            {formatPrice(unitPrice)} تومان
          </p>
        </div>

        <div className="rounded-xl p-3">
          <p className="text-normal text-gray-500">مبلغ کل محصول</p>
          <p className="mt-2 font-bold text-fuchsia-800">
            {formatPrice(totalPrice)} تومان
          </p>
        </div>
      </div>

      {/* تخفیف؛ فقط در صورت وجود */}
      {discount > 0 && (
        <div className="mt-3 border-t border-gray-100 pt-3">
          <span className="inline-flex rounded-lg bg-red-50 px-3 py-1.5 text-xs font-medium text-red-600">
            تخفیف: {formatPrice(discount)} تومان
          </span>
        </div>
      )}
    </div>
  );
}

export default OrderProductItem;
