function OrderItem({ id, ordernumber, orderdate, pricepaid, link }) {
  return (
    <div
      dir="rtl"
      data-order-id={id}
      className="
        group box-border w-full
        rounded-2xl border border-purple-100
        bg-white p-4 font-myfont
        shadow-sm shadow-purple-100/40
        transition-all duration-300 ease-out
        hover:-translate-y-1 hover:border-fuchsia-200
        hover:shadow-lg hover:shadow-purple-100/60
        sm:p-5
      "
    >
      <div className="flex w-full items-center justify-between gap-3">
        {/* اطلاعات سفارش */}
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-purple-100 text-purple-700">
              <i className="fa-solid fa-receipt" />
            </span>

            <h3 className="break-all text-sm font-extrabold leading-7 text-purple-950 sm:text-base">
              شماره سفارش: {ordernumber}
            </h3>
          </div>

          <div
            className="
            mt-3 flex flex-col gap-2
            border-t border-purple-100 pt-3
            sm:flex-row sm:flex-wrap sm:items-center
            sm:justify-between sm:gap-4
          "
          >
            <p className="flex items-center gap-2 text-xs font-medium text-gray-600 sm:text-sm">
              <i className="fa-regular fa-calendar text-fuchsia-600" />
              تاریخ سفارش: {orderdate}
            </p>

            <p className="flex items-center gap-2 text-xs font-bold text-purple-800 sm:text-sm">
              <i className="fa-solid fa-wallet text-fuchsia-600" />
              مبلغ: {pricepaid} تومان
            </p>
          </div>
        </div>

        {/* دکمه جزئیات */}
        <div className="flex shrink-0 items-center border-r border-purple-100 pr-3 sm:pr-4">
          <button
            type="button"
            aria-label="مشاهده جزئیات سفارش"
            title="مشاهده جزئیات سفارش"
            onClick={() => (window.location.href = link)}
            className="
              flex size-10 cursor-pointer
              items-center justify-center
              rounded-xl bg-purple-50
              text-purple-700
              transition-all duration-300
              hover:scale-110 hover:bg-purple-800
              hover:text-white hover:shadow-md
              active:scale-95
              sm:size-11
            "
          >
            <i className="fa-solid fa-ellipsis-vertical text-lg" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default OrderItem;
