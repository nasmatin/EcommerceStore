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

  const formatPrice = (price) =>
    Math.round(Number(price) || 0).toLocaleString("fa-IR");

  return (
    <>
      <Header />
      <Menu />

      <main
        dir="rtl"
        className="min-h-[60vh] bg-[#faf8fc] px-3 py-8 font-myfont sm:px-6 sm:py-10"
      >
        <div className="mx-auto w-full max-w-4xl">
          {/* عنوان صفحه */}
          <div className="mb-7 flex flex-col items-center text-center">
            <div
              className="
              mb-3 flex size-14 items-center justify-center
              rounded-2xl bg-linear-to-br
              from-purple-800 to-fuchsia-700
              text-white shadow-lg shadow-purple-200/60
            "
            >
              <i className="fa-solid fa-receipt text-xl" />
            </div>

            <h1 className="text-xl font-black text-purple-950 sm:text-2xl">
              سفارش‌های من
            </h1>

            <p className="mt-2 text-xs leading-6 text-gray-500 sm:text-sm">
              مشاهده و پیگیری سفارش‌هایی که ثبت کرده‌ای
            </p>

            <div className="mt-4 h-1 w-16 rounded-full bg-linear-to-l from-purple-800 to-fuchsia-500" />
          </div>

          {/* تعداد سفارش‌ها */}
          {statusbar !== "loading" &&
            statusbar !== "failed" &&
            userorder.length > 0 && (
              <div
                className="
                mb-4 flex items-center justify-between
                rounded-2xl border border-purple-100
                bg-white px-4 py-3
                shadow-sm shadow-purple-100/40
              "
              >
                <span className="text-sm font-bold text-purple-900">
                  لیست سفارش‌ها
                </span>

                <span
                  className="
                  rounded-xl bg-purple-50 px-3 py-1.5
                  text-xs font-extrabold text-fuchsia-700
                "
                >
                  {userorder.length.toLocaleString("fa-IR")} سفارش
                </span>
              </div>
            )}

          {/* محتوای سفارش‌ها */}
          <div className="flex w-full flex-col gap-4">
            {statusbar === "loading" ? (
              <div
                className="
                flex min-h-64 flex-col items-center justify-center
                gap-4 rounded-3xl border border-purple-100
                bg-white p-8 shadow-sm
              "
              >
                <div
                  className="
                  size-11 animate-spin rounded-full
                  border-4 border-purple-100
                  border-t-fuchsia-700
                "
                />
                <p className="text-sm font-medium text-gray-500">
                  در حال دریافت سفارش‌ها...
                </p>
              </div>
            ) : statusbar === "failed" ? (
              <div
                className="
                flex min-h-64 flex-col items-center justify-center
                gap-4 rounded-3xl border border-red-100
                bg-white p-6 text-center shadow-sm
              "
              >
                <div
                  className="
                  flex size-14 items-center justify-center
                  rounded-2xl bg-red-50 text-red-500
                "
                >
                  <i className="fa-solid fa-triangle-exclamation text-2xl" />
                </div>

                <p className="text-sm leading-7 text-red-600">
                  {errorbar || "دریافت سفارش‌ها با خطا مواجه شد."}
                </p>

                <button
                  type="button"
                  onClick={() => dispatch(GetOrders(userId))}
                  className="
                    inline-flex min-h-11 items-center justify-center
                    gap-2 rounded-xl
                    bg-linear-to-l from-purple-900 to-fuchsia-800
                    px-6 py-2.5 text-sm font-bold text-white
                    shadow-md shadow-purple-200/60
                    transition-all duration-300
                    hover:-translate-y-1 hover:shadow-lg
                    active:scale-95
                  "
                >
                  <i className="fa-solid fa-rotate-left" />
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
      </main>

      <Footer />
    </>
  );
}

export default Orders;
