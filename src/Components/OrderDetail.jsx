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

function toPersianNumber(value) {
  return String(value ?? "").replace(/\d/g, (digit) => "۰۱۲۳۴۵۶۷۸۹"[digit]);
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

  const statusInfo = {
    0: {
      label: "در انتظار پردازش",
      style: "bg-amber-50 text-amber-700 border-amber-200",
      icon: "fa-clock",
    },
    1: {
      label: "در حال پردازش",
      style: "bg-blue-50 text-blue-700 border-blue-200",
      icon: "fa-box",
    },
    2: {
      label: "تحویل داده شده",
      style: "bg-green-50 text-green-700 border-green-200",
      icon: "fa-check-circle",
    },
  };

  return (
    <>
      <Header />
      <Menu />

      <main dir="rtl" className="min-h-screen bg-[#faf8fc] py-8 font-myfont">
        <div className="mx-auto max-w-7xl space-y-6 px-4 sm:px-6 lg:px-8">
          {/* عنوان صفحه */}
          <div
            className="
            relative overflow-hidden rounded-3xl
            bg-linear-to-l from-purple-950
            via-purple-900 to-fuchsia-800
            px-6 py-7 text-white shadow-lg
            shadow-purple-200/50 sm:px-8
          "
          >
            <div className="absolute -left-10 -top-16 size-48 rounded-full border border-white/10" />

            <div className="relative flex items-center gap-4">
              <div
                className="
                flex size-14 shrink-0 items-center
                justify-center rounded-2xl
                border border-white/20 bg-white/10
                text-2xl backdrop-blur-sm
              "
              >
                <i className="fa-solid fa-receipt" />
              </div>

              <div>
                <h1 className="text-xl font-extrabold sm:text-2xl">
                  جزئیات سفارش
                </h1>
                <p className="mt-2 text-xs text-purple-100 sm:text-sm">
                  مشاهده اطلاعات، محصولات و خلاصه پرداخت سفارش
                </p>
              </div>
            </div>
          </div>

          {/* وضعیت دریافت اطلاعات */}
          {statusbar === "loading" && !order ? (
            <div
              className="
              flex flex-col items-center gap-4
              rounded-2xl border border-purple-100
              bg-white p-10 text-center
              text-purple-700 shadow-sm
            "
            >
              <i className="fa-solid fa-spinner fa-spin text-3xl" />
              <p className="text-sm font-semibold">
                در حال دریافت جزئیات سفارش...
              </p>
            </div>
          ) : statusbar === "failed" && !order ? (
            <div
              className="
              rounded-2xl border border-red-100
              bg-white p-8 text-center
              text-sm text-red-600 shadow-sm
            "
            >
              <i className="fa-solid fa-circle-exclamation mb-3 text-3xl" />
              <p>{errorbar || "دریافت جزئیات سفارش ناموفق بود."}</p>
            </div>
          ) : !success || !order ? (
            <div
              className="
              rounded-2xl border border-purple-100
              bg-white p-10 text-center
              shadow-sm
            "
            >
              <i className="fa-solid fa-file-circle-question text-4xl text-purple-300" />
              <p className="mt-4 text-sm font-bold text-purple-900">
                جزئیات سفارش یافت نشد.
              </p>
            </div>
          ) : (
            <>
              {/* اطلاعات سفارش */}
              <section
                className="
                rounded-3xl border border-purple-100
                bg-white p-5 shadow-sm
                transition-all duration-300
                hover:shadow-lg hover:shadow-purple-100/60
                sm:p-7
              "
              >
                <div className="mb-5 flex items-center gap-3 border-b border-purple-100 pb-4">
                  <div className="flex size-10 items-center justify-center rounded-xl bg-purple-100 text-purple-700">
                    <i className="fa-solid fa-clipboard-list" />
                  </div>
                  <h2 className="font-extrabold text-purple-950">
                    اطلاعات سفارش
                  </h2>
                </div>

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <div
                    className="
                    rounded-2xl border border-purple-100
                    bg-purple-50/60 p-4
                  "
                  >
                    <p className="mb-2 text-xs text-gray-500">شماره سفارش</p>
                    <p className="break-all text-sm font-extrabold text-purple-950">
                      {toPersianNumber(order.orderNumber)}
                    </p>
                  </div>

                  <div
                    className="
                    rounded-2xl border border-purple-100
                    bg-purple-50/60 p-4
                  "
                  >
                    <p className="mb-2 text-xs text-gray-500">تاریخ سفارش</p>
                    <p className="text-sm font-bold text-purple-950">
                      {order.orderDate
                        ? new Date(order.orderDate).toLocaleDateString("fa-IR")
                        : "-"}
                    </p>

                    <div className="mt-3 flex flex-wrap items-center gap-2 border-t border-purple-100 pt-3">
                      <span className="text-xs text-gray-500">
                        وضعیت سفارش:
                      </span>

                      <span
                        className={`
                        inline-flex items-center gap-1.5
                        rounded-lg border px-3 py-1.5
                        text-xs font-bold
                        ${statusInfo[order.status]?.style || "bg-gray-100 text-gray-600 border-gray-200"}
                      `}
                      >
                        <i
                          className={`fa-solid ${statusInfo[order.status]?.icon || "fa-circle-question"}`}
                        />
                        {statusInfo[order.status]?.label || "نامشخص"}
                      </span>
                    </div>
                  </div>

                  <div
                    className="
                    rounded-2xl border border-purple-100
                    bg-purple-50/60 p-4 sm:col-span-2
                  "
                  >
                    <div className="mb-3 flex items-center gap-2">
                      <i className="fa-solid fa-location-dot text-fuchsia-700" />
                      <p className="text-xs font-bold text-purple-900">
                        آدرس تحویل
                      </p>
                    </div>

                    <p className="break-all text-sm leading-8 text-gray-700">
                      {order.address ? toPersianNumber(order.address) : "-"}
                    </p>

                    <div className="mt-3 border-t border-purple-100 pt-3">
                      <span className="text-xs text-gray-500">کد پستی:</span>
                      <span className="mr-2 text-sm font-bold text-purple-900">
                        {order.postalCode
                          ? toPersianNumber(order.postalCode)
                          : "-"}
                      </span>
                    </div>
                  </div>
                </div>
              </section>

              {/* محصولات سفارش */}
              <section
                className="
                rounded-3xl border border-purple-100
                bg-white p-5 shadow-sm
                transition-all duration-300
                hover:shadow-lg hover:shadow-purple-100/60
                sm:p-7
              "
              >
                <div className="mb-5 flex flex-wrap items-center justify-between gap-3 border-b border-purple-100 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="flex size-10 items-center justify-center rounded-xl bg-fuchsia-100 text-fuchsia-700">
                      <i className="fa-solid fa-bag-shopping" />
                    </div>
                    <h2 className="font-extrabold text-purple-950">
                      محصولات سفارش
                    </h2>
                  </div>

                  <span
                    className="
                    rounded-xl bg-purple-50 px-3 py-2
                    text-xs font-bold text-purple-800
                  "
                  >
                    {items.length.toLocaleString("fa-IR")} محصول
                  </span>
                </div>

                <div className="flex flex-col gap-3">
                  {items.length ? (
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
              <section
                className="
                rounded-3xl border border-purple-100
                bg-white p-5 shadow-sm
                transition-all duration-300
                hover:shadow-lg hover:shadow-purple-100/60
                sm:p-7
              "
              >
                <div className="mb-5 flex items-center gap-3 border-b border-purple-100 pb-4">
                  <div className="flex size-10 items-center justify-center rounded-xl bg-fuchsia-100 text-fuchsia-700">
                    <i className="fa-solid fa-wallet" />
                  </div>
                  <h2 className="font-extrabold text-purple-950">
                    خلاصه پرداخت
                  </h2>
                </div>

                <div className="space-y-4 text-sm">
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
                      <span className="font-bold text-gray-800">
                        {formatPrice(value)} تومان
                      </span>
                    </div>
                  ))}

                  <div
                    className="
                    mt-5 flex flex-wrap items-center
                    justify-between gap-3 rounded-2xl
                    border border-fuchsia-200
                    bg-linear-to-l from-purple-50 to-fuchsia-50
                    p-4
                  "
                  >
                    <span className="font-extrabold text-purple-950">
                      مبلغ پرداخت‌شده
                    </span>

                    <span className="text-lg font-black text-fuchsia-800">
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
