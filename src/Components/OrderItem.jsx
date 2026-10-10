function OrderItem({
  id,
  ordernumber,
  dateorder,
  price,
  onShowDtail,
}) {
  return (
    <div
      dir="rtl"
      data-order-id={id}
      className="font-myfont m-4 max-w-full rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition hover:shadow-md sm:m-8"
    >
      <div className="flex items-start justify-between gap-4">

        {/* اطلاعات سفارش: دو ردیف */}
        <div className="min-w-0 flex-1">

          {/* ردیف اول: شماره سفارش */}
          <h3 className=" text-balance font-bold leading-7 text-gray-800 ">
           شماره سفارش :1234567809
          </h3>

          {/* ردیف دوم: مبلغ و تاریخ */}
          <div className="mt-2 flex flex-wrap justify-between gap-x-4 gap-y-2 ">
                <p className="text-balance font-semibold text-gray-700 ">
              تاریخ  سفارش:1399/02/02
            </p>
            <p className="text-balance font-semibold text-gray-700 ">
              مبلغ: 100,000,000 تومان
            </p>

        
          </div>

        </div>

        {/* دکمه هم‌ردیف شماره سفارش، در انتهای چپ */}
        <div className="shrink-0 border-r border-gray-100 pr-4">
       <button
  type="button"
  onClick={onShowDtail}
  aria-label="جزئیات سفارش"
  className="rounded-lg p-2 text-gray-500 transition hover:bg-gray-100 hover:text-gray-800"
>
  <i className="fa-solid fa-ellipsis-vertical text-lg text-purple-600"></i>
</button>
        </div>

      </div>
    </div>
  );
}

export default OrderItem;