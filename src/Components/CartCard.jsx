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
      className="flex flex-col gap-4 rounded-2xl border cursor-pointer border-gray-200 bg-white p-4 shadow-sm transition hover:shadow-md sm:flex-row sm:items-center sm:gap-5"
    >
      {/* تصویر محصول */}
      <a href={link} className="shrink-0 self-center sm:self-auto">
        <img
          src={image}
          alt={name}
          className="h-28 w-28 rounded-xl bg-gray-50 object-contain p-2 sm:h-32 sm:w-32"
        />
      </a>

      {/* اطلاعات محصول */}
      <div className="flex min-w-0 flex-1 flex-col gap-3">
        <div>
          <h3 className="line-clamp-2 text-base font-bold leading-7 text-gray-800">
            {name}
          </h3>

          {brand && <p className="mt-1 text-sm text-gray-500">برند: {brand}</p>}
        </div>

        {/* قیمت واحد و تعداد */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-xs text-gray-500">قیمت هر عدد</p>
            <p className="mt-1 text-sm font-medium text-gray-700">
              {price?.toLocaleString("fa-IR")} تومان
            </p>
          </div>

          <div className="inline-flex items-center rounded-xl border border-gray-200 bg-gray-50 p-1">
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onIncrease();
              }}
              aria-label="افزایش تعداد"
              className="flex h-8 w-8 items-center justify-center rounded-lg text-lg font-bold text-purple-800 transition hover:bg-purple-100"
            >
              +
            </button>

            <span className="min-w-10 text-center text-sm font-bold text-gray-800">
              {quantity}
            </span>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onDecrease();
              }}
              aria-label="کاهش تعداد"
              disabled={quantity <= 1}
              className="flex h-8 w-8 items-center justify-center rounded-lg text-lg font-bold text-gray-700 transition hover:bg-gray-200 disabled:cursor-not-allowed disabled:opacity-40"
            >
              −
            </button>
          </div>
        </div>

        {/* جمع قیمت و حذف */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-gray-100 pt-3">
          <div>
            <p className="text-xs text-gray-500">جمع قیمت این محصول</p>
            <p className="mt-1 text-base font-extrabold text-purple-800">
              {(price * quantity).toLocaleString("fa-IR")} تومان
            </p>
          </div>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onRemove();
            }}
            className="inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium text-red-500 transition hover:bg-red-50 hover:text-red-700"
          >
            <span aria-hidden="true">×</span>
            حذف محصول
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartCard;
