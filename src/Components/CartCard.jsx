import { useNavigate } from "react-router";

function CartCard({
  id,
  image,
  link,
  name,
  brand,
  price,
  quantity,
  onIncrease,
  onDecrease,
  onRemove,
}) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(link);
  };

  return (
    <div
      dir="rtl"
      data-product-id={id}
      onClick={handleClick}
      className="
        group flex w-full min-w-0 flex-col gap-4
        rounded-2xl border border-purple-100
        bg-white p-3 shadow-sm
        transition-all duration-300
        hover:-translate-y-1 hover:border-fuchsia-200
        hover:shadow-lg hover:shadow-purple-100/60
        sm:flex-row sm:items-center sm:gap-5 sm:p-5
      "
    >
      {/* تصویر محصول */}
      <div
        className="
          flex shrink-0 items-center justify-center
          self-center overflow-hidden rounded-2xl
          bg-linear-to-br from-purple-50 to-fuchsia-50
          p-2 transition-transform duration-300
          group-hover:scale-105
          sm:size-32
        "
      >
        <img
          src={`https://emadtalebloo.com/panelapi/Uploads/Products/${image}`}
          alt={name}
          className="size-28 object-contain sm:size-28"
        />
      </div>

      {/* اطلاعات محصول */}
      <div className="flex min-w-0 flex-1 flex-col gap-3">
        <div>
          <h3 className="line-clamp-2 text-sm font-extrabold leading-7 text-purple-950 sm:text-base">
            {name}
          </h3>

          {brand && (
            <p className="mt-1 text-xs text-gray-500 sm:text-sm">
              برند: {brand}
            </p>
          )}
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-xs text-gray-500 sm:text-sm">قیمت هر عدد</p>
            <p className="mt-1 text-sm font-bold text-gray-700 sm:text-base">
              {price?.toLocaleString("fa-IR")} تومان
            </p>
          </div>

          {/* تعداد محصول */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="
              inline-flex items-center gap-1
              rounded-xl border border-purple-100
              bg-purple-50/70 p-1
            "
          >
            <button
              type="button"
              onClick={onIncrease}
              aria-label="افزایش تعداد"
              className="
                flex size-8 cursor-pointer items-center
                justify-center rounded-lg
                text-lg font-bold text-purple-800
                transition hover:bg-purple-200
              "
            >
              +
            </button>

            <span className="min-w-9 text-center text-sm font-extrabold text-purple-950">
              {quantity.toLocaleString("fa-IR")}
            </span>

            <button
              type="button"
              onClick={onDecrease}
              aria-label="کاهش تعداد"
              disabled={quantity <= 1}
              className="
                flex size-8 cursor-pointer items-center
                justify-center rounded-lg
                text-lg font-bold text-purple-700
                transition hover:bg-purple-200
                disabled:cursor-not-allowed disabled:opacity-40
              "
            >
              −
            </button>
          </div>
        </div>

        <div
          className="
          flex flex-wrap items-center justify-between
          gap-3 border-t border-purple-100 pt-3
        "
        >
          <div>
            <p className="text-xs text-gray-500 sm:text-sm">
              جمع قیمت این محصول
            </p>
            <p className="mt-1 text-base font-extrabold text-fuchsia-800 sm:text-lg">
              {(price * quantity).toLocaleString("fa-IR")} تومان
            </p>
          </div>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onRemove();
            }}
            className="
              inline-flex cursor-pointer items-center
              gap-1.5 rounded-xl px-3 py-2
              text-xs font-bold text-red-500
              transition-all duration-200
              hover:bg-red-50 hover:text-red-700
              sm:text-sm
            "
          >
            <i className="fa-solid fa-trash-can" />
            حذف محصول
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartCard;
