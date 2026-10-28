import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

function CartBadge() {
  const navigate = useNavigate();

  const totalCount = useSelector((state) => state.cart.totalCount);

  return (
    <button
      type="button"
      onClick={() => navigate("/cart")}
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-fuchsia-800 text-white shadow-lg transition-all duration-300 ease-in-out hover:scale-110 hover:bg-fuchsia-900 hover:shadow-xl active:scale-95"
      aria-label={`سبد خرید، ${totalCount} کالا`}
    >
      <i className="fa-solid fa-cart-shopping text-xl transition-transform duration-300 group-hover:rotate-[-8deg]"></i>

      {totalCount > 0 && (
        <span className="absolute -right-1 -top-1 flex h-6 min-w-6 items-center justify-center rounded-full bg-red-600 px-1 text-xs font-bold text-white transition-transform duration-300 hover:scale-110">
          {totalCount}
        </span>
      )}
    </button>
  );
}

export default CartBadge;
