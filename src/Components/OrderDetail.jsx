import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router";
import { GetOrderDetail } from "../Features/OrderDetailSlice";
import Header from "../Components/Header";
import Menu from "../Components/Menu";
import Footer from "../Components/Footer";
import OrderProductItem from "../Components/OrderProductItem";

function formatPrice(price) {
  return Math.round(Number(price) || 0).toLocaleString("fa-IR");
}

function OrderDetail() {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const orderId = Number(searchParams.get("orderId"));

  const userId = useSelector((state) => state.login.id);
  const detailKey = `${userId}_${orderId}`;
  const {
    order,
    items = [],
    success,
  } = useSelector((state) => state.orderdetail.orderdetails[detailKey]) ?? {};

  const statusbar = useSelector((state) => state.orderdetail.statusbar);
  const errorbar = useSelector((state) => state.orderdetail.errorbar);

  useEffect(() => {
    if (userId && orderId) {
      dispatch(GetOrderDetail({ userId, orderId }));
    }
  }, [dispatch, userId, orderId]);

  return (
    <>
      <Header />
      <Menu />

      <main dir="rtl" className="min-h-screen bg-gray-50 py-6 font-myfont">
        <div className="mx-auto max-w-7xl space-y-6 px-4 sm:px-6 lg:px-8">
          {/* مسیر صفحه */}
          {/* <div className="flex flex-wrap items-center gap-2 text-sm text-gray-500">
            <Link to="/" className="hover:text-fuchsia-800">خانه</Link>
            <span>/</span>
            <Link to="/orders" className="hover:text-fuchsia-800">سفارش‌ها</Link>
            <span>/</span>
            <span className="font-semibold text-fuchsia-800">جزئیات سفارش</span>
          </div> */}

          {/* وضعیت دریافت اطلاعات */}
          {statusbar === "loading" && !order ? (
            <div className="rounded-xl border border-gray-200 bg-white p-6 text-center text-gray-600 shadow-sm transition-shadow duration-300 hover:shadow-md">
              در حال دریافت جزئیات سفارش...
            </div>
          ) : statusbar === "failed" && !order ? (
            <div className="rounded-xl border border-gray-200 bg-white p-6 text-center text-red-600 shadow-sm transition-shadow duration-300 hover:shadow-md">
              {errorbar || "دریافت جزئیات سفارش ناموفق بود."}
            </div>
          ) : !success || !order ? (
            <div className="rounded-xl border border-gray-200 bg-white p-6 text-center text-gray-500 shadow-sm transition-shadow duration-300 hover:shadow-md">
              جزئیات سفارش یافت نشد.
            </div>
          ) : (
            <>
              {/* عنوان صفحه */}
              <h1 className="text-xl font-bold text-gray-900 transition-colors duration-300 hover:text-fuchsia-800 sm:text-2xl">
                جزئیات سفارش
              </h1>

              {/* اطلاعات سفارش */}
              <section className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition-all duration-300 hover:shadow-lg sm:p-6">
                <h2 className="mb-4 border-b border-gray-100 pb-3 text-base font-bold text-gray-900">
                  اطلاعات سفارش
                </h2>

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <div className="rounded-xl bg-gray-50 p-3 transition-colors duration-300 hover:bg-purple-50">
                    <p className="mb-1.5 text-normal text-gray-500">
                      شماره سفارش
                    </p>
                    <p className="break-all text-normal font-bold text-gray-800">
                      {String(order.orderNumber ?? "").replace(
                        /\d/g,
                        (digit) => "۰۱۲۳۴۵۶۷۸۹"[digit]
                      )}
                    </p>
                  </div>

                  <div className="rounded-xl bg-gray-50 p-3 transition-colors duration-300 hover:bg-purple-50">
                    <p className="mb-1.5 text-normal text-gray-500">
                      تاریخ سفارش
                    </p>
                    <p className="text-normal font-semibold text-gray-800">
                      {order.orderDate
                        ? new Date(order.orderDate).toLocaleDateString("fa-IR")
                        : "-"}
                    </p>

                    <div className="mt-2 flex flex-wrap items-center gap-2 border-t border-gray-200 pt-2">
                      <span className="text-normal text-gray-500">
                        وضعیت سفارش
                      </span>
                      <span
                        className={`rounded-lg px-2.5 py-1 text-normal font-semibold transition-colors duration-300 ${
                          order.status === 0
                            ? "bg-yellow-50 text-yellow-700"
                            : order.status === 1
                              ? "bg-blue-50 text-blue-700"
                              : order.status === 2
                                ? "bg-green-50 text-green-700"
                                : "bg-gray-100 text-gray-600"
                        }`}
                      >
                        {order.status === 0
                          ? "در انتظار پردازش"
                          : order.status === 1
                            ? "در حال پردازش"
                            : order.status === 2
                              ? "تحویل داده شده"
                              : "نامشخص"}
                      </span>
                    </div>
                  </div>

                  <div className="rounded-xl bg-gray-50 p-3 text-normal transition-colors duration-300 hover:bg-purple-50 sm:col-span-2">
                    <p className="mb-1.5 text-normal text-gray-500">
                      آدرس تحویل
                    </p>
                    <p className="break-all text-normal leading-7 text-gray-700">
                      {order.address
                        ? String(order.address).replace(
                            /\d/g,
                            (digit) => "۰۱۲۳۴۵۶۷۸۹"[digit]
                          )
                        : "-"}
                    </p>
                    <p className="mt-2 text-normal text-gray-500">
                      کد پستی:{" "}
                      <span className="font-medium text-gray-700">
                        {order.postalCode
                          ? String(order.postalCode).replace(
                              /\d/g,
                              (digit) => "۰۱۲۳۴۵۶۷۸۹"[digit]
                            )
                          : "-"}
                      </span>
                    </p>
                  </div>
                </div>
              </section>

              {/* محصولات سفارش */}
              <section className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition-all duration-300 hover:shadow-lg sm:p-6">
                <div className="mb-4 flex items-center justify-between gap-3 border-b border-gray-100 pb-3">
                  <h2 className="text-base font-bold text-gray-900">
                    محصولات سفارش
                  </h2>
                  <span className="rounded-lg bg-fuchsia-50 px-3 py-1 font-semibold text-fuchsia-800 transition-colors duration-300 hover:bg-fuchsia-100">
                    {items.length.toLocaleString("fa-IR")} محصول
                  </span>
                </div>

                <div className="flex flex-col gap-3">
                  {items.length ? (
                    items.map((item) => (
                      <OrderProductItem key={item.orderItemId} item={item} />
                    ))
                  ) : (
                    <p className="py-5 text-center text-sm text-gray-500">
                      محصولی برای این سفارش ثبت نشده است.
                    </p>
                  )}
                </div>
              </section>

              {/* خلاصه پرداخت */}
              <section className="rounded-2xl border border-gray-200 bg-white p-4 shadow-xl transition-all duration-300 hover:shadow-2xl sm:p-6">
                <h2 className="mb-4 border-b border-gray-100 pb-3 text-normal font-bold text-gray-900">
                  خلاصه پرداخت
                </h2>

                <div className="space-y-3 text-normal">
                  {[
                    ["مبلغ محصولات", order.totalPrice],
                    ["تخفیف", order.priceSale],
                    ["هزینه ارسال", order.shippingCost],
                    ["هزینه بسته‌بندی", order.packagingCost],
                    ["مالیات", order.tax],
                  ].map(([label, value]) => (
                    <div
                      key={label}
                      className="flex items-center justify-between gap-3 text-gray-600"
                    >
                      <span>{label}</span>
                      <span className="font-medium text-gray-800">
                        {formatPrice(value)} تومان
                      </span>
                    </div>
                  ))}

                  <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-fuchsia-100 bg-fuchsia-50 p-3 transition-all duration-300 hover:border-fuchsia-300 hover:bg-fuchsia-100">
                    <span className="font-bold text-gray-800">
                      مبلغ پرداخت‌شده
                    </span>
                    <span className="font-extrabold text-fuchsia-900">
                      {formatPrice(order.pricePaid)} تومان
                    </span>
                  </div>
                </div>
              </section>
            </>
          )}
        </div>
      </main>

      <Footer />
    </>
  );
}

export default OrderDetail;
