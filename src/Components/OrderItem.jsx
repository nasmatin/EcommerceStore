function OrderItem({ id, ordernumber, orderdate, pricepaid, link }) {
  return (
    <div
      dir="rtl"
      data-order-id={id}
      className="font-myfont box-border w-full rounded-2xl border border-gray-200 bg-white p-4 shadow-md transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-xl sm:p-5"
    >
      <div className="flex w-full items-center justify-between gap-3">
        {/* اطلاعات سفارش */}
        <div className="min-w-0 flex-1">
          {/* ردیف اول: شماره سفارش */}
          <h3 className="break-all text-base font-bold leading-8 text-gray-800 sm:text-lg">
            شماره سفارش: {ordernumber}
          </h3>

          {/* ردیف دوم: تاریخ و مبلغ */}
          <div className="mt-2 flex flex-wrap items-center justify-between gap-x-6 gap-y-2">
            <p className="text-sm font-semibold leading-7 text-gray-700 sm:text-base">
              تاریخ سفارش: {orderdate}
            </p>

            <p className="text-sm font-semibold leading-7 text-gray-700 sm:text-base">
              مبلغ: {pricepaid} تومان
            </p>
          </div>
        </div>

        {/* دکمه جزئیات در سمت چپ */}
        <div className="flex shrink-0 items-center border-r border-gray-200 pr-3 sm:pr-4">
          <button
            aria-label="مشاهده جزئیات سفارش"
            className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg transition-all duration-200 hover:scale-110 hover:bg-fuchsia-50"
            onClick={() => (window.location.href = link)}
          >
            <i className="fa-solid fa-ellipsis-vertical text-xl text-fuchsia-600"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default OrderItem;
