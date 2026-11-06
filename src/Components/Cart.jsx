import Header from "../Components/Header";
import Menu from "../Components/Menu";
import Footer from "../Components/Footer";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset, clear } from "../Features/AddToCartSlice";
import { useNavigate } from "react-router";
import CartCard from "../Components/CartCard";
import { GetPayment } from "../Features/PaymentSlice";

function Cart() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const AddCart = useSelector((state) => state.cart);
  const Cartitems = AddCart.items;
  const account = useSelector((state) => state.login);

  const shipping = 80000;
  const post = 50000;
  const tax = 20000;
  const userId = account.id;

  const totalQuantity = Cartitems.reduce((sum, item) => sum + item.quantity, 0);

  const finalPrice = AddCart.totalPrice + shipping + post + tax;

  const handlesubmitorder = async () => {
    const paymentdata = {
      userid: userId,
      shippingcost: shipping,
      packagingcost: post,
      tax: tax,
      items: Cartitems.map((item) => ({
        productid: item.id,
        quantity: item.quantity,
      })),
    };

    try {
      await dispatch(GetPayment(paymentdata)).unwrap();

      dispatch(clear());
      navigate("/successpayment");
    } catch (error) {
      console.log("خطا در ثبت سفارش:", error);
    }
  };

  return (
    <>
      <Header />
      <Menu />

      <main
        dir="rtl"
        className="min-h-screen bg-[#faf8fc] py-8 font-myfont sm:py-12"
      >
        <div className="mx-auto max-w-7xl px-3 sm:px-5 lg:px-8">
          {/* Page Header */}
          <div className="mb-8 flex items-center gap-3 sm:mb-10">
            <div className="flex size-12 items-center justify-center rounded-2xl bg-linear-to-br from-purple-700 to-fuchsia-600 text-2xl text-white shadow-md shadow-purple-200 sm:size-14">
              <i className="fa-solid fa-cart-shopping"></i>
            </div>

            <div>
              <h1 className="text-xl font-extrabold text-purple-950 sm:text-2xl">
                سبد خرید
              </h1>
              <p className="mt-1 text-xs text-gray-500 sm:text-sm">
                محصولات انتخاب‌شده شما
              </p>
            </div>
          </div>

          {Cartitems.length === 0 ? (
            <div className="rounded-3xl border border-purple-100 bg-white px-5 py-14 text-center shadow-sm sm:py-20">
              <div className="mx-auto mb-5 flex size-20 items-center justify-center rounded-3xl bg-purple-50 text-4xl text-purple-400">
                <i className="fa-solid fa-basket-shopping"></i>
              </div>

              <h2 className="text-lg font-extrabold text-purple-950 sm:text-xl">
                سبد خریدت خالیه!
              </h2>

              <p className="mt-3 text-xs leading-7 text-gray-500 sm:text-sm">
                برای خرید، محصولات موردنظرت رو انتخاب کن.
              </p>

              <button
                type="button"
                onClick={() => navigate("/")}
                className="mt-6 cursor-pointer rounded-xl bg-linear-to-l from-purple-800 to-fuchsia-700 px-7 py-3 text-sm font-bold text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                بازگشت به فروشگاه
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 items-start gap-5 lg:grid-cols-3 lg:gap-7">
              {/* Cart Products */}
              <section className="min-w-0 space-y-4 lg:col-span-2">
                {Cartitems.map((item) => (
                  <CartCard
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    image={item.image}
                    link={`/products/productdetail?id=${item.id}`}
                    price={item.price}
                    quantity={item.quantity}
                    stock={item.stock}
                    onIncrease={() => dispatch(increment(item.id))}
                    onDecrease={() => dispatch(decrement(item.id))}
                    onRemove={() => dispatch(reset(item.id))}
                  />
                ))}
              </section>

              {/* Order Summary */}
              <aside className="h-fit rounded-3xl border border-purple-100 bg-white p-5 shadow-sm transition-all duration-300 hover:shadow-lg hover:shadow-purple-100/50 sm:p-6 lg:sticky lg:top-6">
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex size-11 items-center justify-center rounded-xl bg-purple-50 text-xl text-purple-700">
                    <i className="fa-solid fa-receipt"></i>
                  </div>

                  <div>
                    <h2 className="font-extrabold text-purple-950">
                      خلاصه سفارش
                    </h2>
                    <p className="mt-1 text-[11px] text-gray-400">
                      جزئیات هزینه خرید شما
                    </p>
                  </div>
                </div>

                <div className="space-y-4 text-xs text-gray-600 sm:text-sm">
                  <div className="flex justify-between gap-3">
                    <span>تعداد محصولات</span>
                    <span className="font-bold text-gray-800">
                      {totalQuantity.toLocaleString("fa-IR")}
                    </span>
                  </div>

                  <div className="flex justify-between gap-3">
                    <span>جمع محصولات</span>
                    <span className="font-semibold text-gray-800">
                      {AddCart.totalPrice.toLocaleString("fa-IR")} تومان
                    </span>
                  </div>

                  <div className="flex justify-between gap-3">
                    <span>هزینه ارسال</span>
                    <span>
                      {shipping === 0
                        ? "رایگان"
                        : `${shipping.toLocaleString("fa-IR")} تومان`}
                    </span>
                  </div>

                  <div className="flex justify-between gap-3">
                    <span>هزینه پست</span>
                    <span>
                      {post === 0
                        ? "رایگان"
                        : `${post.toLocaleString("fa-IR")} تومان`}
                    </span>
                  </div>

                  <div className="flex justify-between gap-3">
                    <span>مالیات</span>
                    <span>
                      {tax === 0
                        ? "رایگان"
                        : `${tax.toLocaleString("fa-IR")} تومان`}
                    </span>
                  </div>
                </div>

                <div className="my-5 border-t border-dashed border-purple-100" />

                <div className="flex items-center justify-between gap-3">
                  <span className="text-sm font-extrabold text-gray-800">
                    مبلغ نهایی
                  </span>

                  <span className="text-base font-extrabold text-fuchsia-800 sm:text-lg">
                    {finalPrice.toLocaleString("fa-IR")} تومان
                  </span>
                </div>

                {/* Actions */}
                <div className="mt-6 flex flex-col gap-3">
                  <button
                    type="button"
                    onClick={handlesubmitorder}
                    className="flex min-h-12 w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-linear-to-l from-purple-900 to-fuchsia-800 px-4 py-3 text-sm font-bold text-white shadow-md shadow-purple-200/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg active:scale-95"
                  >
                    <i className="fa-solid fa-credit-card"></i>
                    ادامه و ثبت سفارش
                  </button>

                  <button
                    type="button"
                    onClick={() => dispatch(clear())}
                    className="flex min-h-11 w-full cursor-pointer items-center justify-center gap-2 rounded-xl border border-red-100 bg-red-50 px-4 py-3 text-xs font-bold text-red-600 transition-all duration-300 hover:border-red-200 hover:bg-red-100"
                  >
                    <i className="fa-solid fa-trash-can"></i>
                    خالی کردن سبد خرید
                  </button>

                  <button
                    type="button"
                    onClick={() => navigate("/")}
                    className="flex min-h-11 w-full cursor-pointer items-center justify-center gap-2 rounded-xl border border-purple-100 bg-purple-50 px-4 py-3 text-xs font-bold text-purple-700 transition-all duration-300 hover:border-purple-200 hover:bg-purple-100"
                  >
                    <i className="fa-solid fa-arrow-right"></i>
                    ادامه خرید
                  </button>
                </div>
              </aside>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </>
  );
}

export default Cart;
