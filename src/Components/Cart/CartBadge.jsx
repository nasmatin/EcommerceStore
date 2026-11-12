import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

function CartBadge() {
  const navigate = useNavigate();

  const totalCount = useSelector((state) => state.cart.totalCount);

  return (
    <button
      type="button"
      onClick={() => navigate("/cart")}
      aria-label={`سبد خرید، ${totalCount} کالا`}
      className="
        group fixed bottom-5 right-4 z-50
        flex size-14 cursor-pointer items-center justify-center
        rounded-2xl border border-white/20
        bg-linear-to-br from-purple-800 to-fuchsia-600
        text-white shadow-xl shadow-purple-300/40
        transition-all duration-300 ease-out
        hover:-translate-y-1 hover:scale-110
        hover:shadow-2xl hover:shadow-fuchsia-300/50
        active:scale-95
        sm:bottom-7 sm:right-7 sm:size-16
      "
    >
      <i
        className="
        fa-solid fa-cart-shopping text-xl
        transition-transform duration-300
        group-hover:rotate-[-8deg]
        sm:text-2xl
      "
      ></i>

      {totalCount > 0 && (
        <span
          className="
          absolute -right-2 -top-2
          flex min-h-6 min-w-6 items-center justify-center
          rounded-full border-2 border-white
          bg-red-500 px-1.5
          text-[10px] font-extrabold text-white
          shadow-md transition-transform duration-300
          group-hover:scale-110
          sm:min-h-7 sm:min-w-7 sm:text-xs
        "
        >
          {totalCount.toLocaleString("fa-IR")}
        </span>
      )}

      {/* Tooltip */}
      <span
        className="
        pointer-events-none absolute right-full mr-3
        whitespace-nowrap rounded-lg bg-gray-900
        px-3 py-2 text-xs font-medium text-white
        opacity-0 shadow-lg transition-all duration-200
        group-hover:translate-x-0 group-hover:opacity-100
      "
      >
        مشاهده سبد خرید
      </span>
    </button>
  );
}

export default CartBadge;
