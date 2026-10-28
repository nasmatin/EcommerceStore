import Header from "../Components/Header";
import Menu from "../Components/Menu";
import Footer from "../Components/Footer";
import OrderItem from "../Components/OrderItem";
import NoOrder from "../Components/NoOrder";
import { GetOrders } from "../Features/OrderListSlice";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

function Orders() {
  const dispatch = useDispatch();
  const account = useSelector((state) => state.login);

  const userId = account.id;
  const order = useSelector((state) => state.order.orders);
  const statusbar = useSelector((state) => state.order.statusbar);
  const errorbar = useSelector((state) => state.order.errorbar);

  const userorder = order?.[String(userId)] ?? [];

  useEffect(() => {
    if (userId) {
      dispatch(GetOrders(userId));
    }
  }, [dispatch, userId]);

  const formatPrice = (price) => Math.round(price).toLocaleString("fa-IR");

  return (
    <>
      <Header />
      <Menu />

      <div dir="rtl" className="font-myfont text-center">
        <div className="flex w-full flex-col items-center gap-4 px-4 py-4">
          {statusbar === "loading" ? (
            <div className="flex flex-col items-center gap-3 py-10">
              <div className="h-10 w-10 animate-spin rounded-full border-4 border-purple-200 border-t-purple-800" />
              <p className="text-sm text-gray-500">در حال دریافت سفارش‌ها...</p>
            </div>
          ) : statusbar === "failed" ? (
            <div className="flex flex-col items-center gap-3 py-6">
              <p className="text-red-600">
                {errorbar || "دریافت سفارش‌ها با خطا مواجه شد."}
              </p>
              <button
                type="button"
                onClick={() => dispatch(GetOrders(userId))}
                className="rounded-lg bg-purple-800 px-4 py-2 text-white transition-all duration-300 ease-in-out hover:scale-105 hover:bg-purple-900 active:scale-95"
              >
                تلاش مجدد
              </button>
            </div>
          ) : !userorder || userorder.length === 0 ? (
            <NoOrder />
          ) : (
            userorder.map((uorder) => (
              <OrderItem
                key={uorder.id}
                id={uorder.id}
                ordernumber={String(uorder.ordernumber ?? "").replace(
                  /\d/g,
                  (digit) => "۰۱۲۳۴۵۶۷۸۹"[digit]
                )}
                orderdate={String(uorder.orderdatePersian ?? "").replace(
                  /\d/g,
                  (digit) => "۰۱۲۳۴۵۶۷۸۹"[digit]
                )}
                pricepaid={formatPrice(uorder.pricepaid)}
                link={`/store/orders/ordersdetail?userId=${userId}&orderId=${uorder.id}`}
              />
            ))
          )}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Orders;
