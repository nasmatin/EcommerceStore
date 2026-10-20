import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams, Link } from "react-router";

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
  const account = useSelector((state) => state.login);
  const userId = account.id;

  const detailKey = `${userId}_${orderId}`;

  const detail = useSelector(
    (state) => state.orderdetail.orderdetails[detailKey]
  );

  const statusbar = useSelector((state) => state.orderdetail.statusbar);

  const errorbar = useSelector((state) => state.orderdetail.errorbar);

  useEffect(() => {
    if (userId && orderId) {
      dispatch(GetOrderDetail({ userId, orderId }));
    }
  }, [dispatch, userId, orderId]);

  const order = detail?.order;
  const items = detail?.items ?? [];

  return (
    <>
      <Header />
      <Menu />

      <main dir="rtl" className="min-h-screen bg-gray-50 py-8 font-myfont">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* مسیر صفحه */}
          <div className="mb-6 flex flex-wrap items-center gap-2 text-sm text-gray-500">
            <Link to="/" className="transition hover:text-purple-800">
              خانه
            </Link>

            <span>/</span>

            <Link to="/orders" className="transition hover:text-purple-800">
              سفارش‌ها
            </Link>

            <span>/</span>

            <span className="font-semibold text-purple-800">جزئیات سفارش</span>
          </div>

          {/* وضعیت دریافت اطلاعات */}
          {statusbar === "loading" && !detail ? (
            <div className="rounded-2xl border border-gray-200 bg-white p-8 text-center text-gray-600 shadow-sm">
              در حال دریافت جزئیات سفارش...
            </div>
          ) : statusbar === "failed" && !detail ? (
            <div className="rounded-2xl border border-gray-200 bg-white p-8 text-center text-red-600 shadow-sm">
              {errorbar || "دریافت جزئیات سفارش ناموفق بود."}
            </div>
          ) : !detail?.success || !order ? (
            <div className="rounded-2xl border border-gray-200 bg-white p-8 text-center text-gray-500 shadow-sm">
              جزئیات سفارش یافت نشد.
            </div>
          ) : (
            <>
              {/* عنوان صفحه */}
              <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
                <div>
                  <h1 className="text-xl font-bold leading-9 text-gray-900 sm:text-2xl">
                    جزئیات سفارش
                  </h1>

                  <p className="mt-1 break-all text-sm text-gray-500">
                    شماره سفارش: {order.orderNumber}
                  </p>
                </div>

                <span
                  className={`rounded-xl px-4 py-2 text-sm font-semibold ${
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

              {/* اطلاعات سفارش */}
              <section className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm sm:p-6 lg:p-8">
                <h2 className="mb-5 border-b border-gray-100 pb-4 text-lg font-bold text-gray-900">
                  اطلاعات سفارش
                </h2>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="rounded-xl bg-gray-50 p-4">
                    <p className="mb-2 text-sm text-gray-500">شماره سفارش</p>

                    <p className="break-all font-bold text-gray-800">
                      {order.orderNumber}
                    </p>
                  </div>

                  <div className="rounded-xl bg-gray-50 p-4">
                    <p className="mb-2 text-sm text-gray-500">تاریخ سفارش</p>

                    <p className="font-semibold text-gray-800">
                      {order.orderDate
                        ? new Date(order.orderDate).toLocaleDateString("fa-IR")
                        : "-"}
                    </p>
                  </div>

                  <div className="rounded-xl bg-gray-50 p-4 sm:col-span-2">
                    <p className="mb-2 text-sm text-gray-500">آدرس تحویل</p>

                    <p className="break-all text-sm leading-8 text-gray-700">
                      {order.address || "-"}
                    </p>

                    <p className="mt-3 text-sm text-gray-500">
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
              <section className="mt-6 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm sm:p-6 lg:p-8">
                <div className="mb-5 flex flex-wrap items-center justify-between gap-3 border-b border-gray-100 pb-4">
                  <h2 className="text-lg font-bold text-gray-900">
                    محصولات سفارش
                  </h2>

                  <span className="rounded-lg bg-purple-50 px-3 py-1.5 text-sm font-semibold text-purple-800">
                    {items.length.toLocaleString("fa-IR")} محصول
                  </span>
                </div>

                <div className="flex flex-col gap-4">
                  {items.length > 0 ? (
                    items.map((item) => (
                      <OrderProductItem key={item.orderItemId} item={item} />
                    ))
                  ) : (
                    <p className="py-6 text-center text-sm text-gray-500">
                      محصولی برای این سفارش ثبت نشده است.
                    </p>
                  )}
                </div>
              </section>

              {/* خلاصه پرداخت */}
              <section className="mt-6 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm sm:p-6 lg:p-8">
                <h2 className="mb-5 border-b border-gray-100 pb-4 text-lg font-bold text-gray-900">
                  خلاصه پرداخت
                </h2>

                <div className="space-y-4">
                  <div className="flex items-center justify-between gap-4 text-sm text-gray-600">
                    <span>مبلغ محصولات</span>

                    <span className="font-medium text-gray-800">
                      {formatPrice(order.totalPrice)} تومان
                    </span>
                  </div>

                  <div className="flex items-center justify-between gap-4 text-sm text-gray-600">
                    <span>تخفیف</span>

                    <span className="font-medium text-gray-800">
                      {formatPrice(order.priceSale)} تومان
                    </span>
                  </div>

                  <div className="flex items-center justify-between gap-4 text-sm text-gray-600">
                    <span>هزینه ارسال</span>

                    <span className="font-medium text-gray-800">
                      {formatPrice(order.shippingCost)} تومان
                    </span>
                  </div>

                  <div className="flex items-center justify-between gap-4 text-sm text-gray-600">
                    <span>هزینه بسته‌بندی</span>

                    <span className="font-medium text-gray-800">
                      {formatPrice(order.packagingCost)} تومان
                    </span>
                  </div>

                  <div className="flex items-center justify-between gap-4 text-sm text-gray-600">
                    <span>مالیات</span>

                    <span className="font-medium text-gray-800">
                      {formatPrice(order.tax)} تومان
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-purple-100 bg-purple-50 p-4">
                    <span className="font-bold text-gray-800">
                      مبلغ پرداخت‌شده
                    </span>

                    <span className="text-lg font-extrabold text-purple-900 sm:text-xl">
                      {formatPrice(order.pricePaid)}
                      <span className="mr-2 text-sm font-medium">تومان</span>
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
