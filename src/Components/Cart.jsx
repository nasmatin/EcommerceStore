import Header from "../Components/Header";
import Menu from "../Components/Menu";
import Footer from "../Components/Footer";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "../Features/AddToCartSlice";
import { useNavigate } from "react-router";
import CartCard from "../Components/CartCard";
import { clear } from "../Features/AddToCartSlice";
import Button from "./Button";
import { GetPayment } from "../Features/PaymentSlice";
function Cart() {
  const dispatch = useDispatch();
  const AddCart = useSelector((state) => state.cart);
  const Cartitems = AddCart.items;
  const shipping = 80000;
  const post = 50000;
  const tax = 20000;
const account = useSelector((state) => state.login);

  const userId = account.id;  //const payment=useSelector((state)=>state.payment.payments);
  const handlesubmitorder = async () => {
  const paymentdata = {
    userid: userId, // باید شناسه واقعی کاربر باشد
    shippingcost: shipping,
    packagingcost: post,
    tax: tax,
    items: Cartitems.map((item) => ({
      productid: item.id,
      quantity: item.quantity,
    })),
  };
      console.log("payemntdata cart",paymentdata);
            console.log("userid cart",paymentdata);


  try {
    console.log("payemntdata cart 2",paymentdata);
            console.log("userid cart 2",paymentdata);
    await dispatch(GetPayment(paymentdata)).unwrap();
console.log("payemntdata cart 3",paymentdata);
            console.log("userid cart 3",paymentdata);
    dispatch(clear());
    navigate("/");
  } catch (error) {
    console.log("خطا در ثبت سفارش:", error);
  }
};
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <Menu />
      <main dir="rtl" className="min-h-screen bg-gray-50 py-8">
        <div className="mx-auto max-w-6xl px-4">
          <h1 className="font-myfont mb-2 text-2xl font-bold text-gray-800">
            سبد خرید
          </h1>

          <p className="font-myfont mb-8 text-sm text-gray-500">
            محصولات انتخاب‌شده شما
          </p>

          {Cartitems.length === 0 ? (
            <div className="font-myfont rounded-2xl bg-white p-10 text-center shadow-sm">
              <p className="text-lg font-semibold text-gray-700">
                سبد خریدت خالیه!
              </p>
              <p className="mt-2 text-sm text-gray-500">
                برای خرید، محصولات موردنظرت رو انتخاب کن.
              </p>
              {/* <a
              href="/"
              className="mt-5 inline-block rounded-xl bg-purple-800
                px-6 py-3 text-white hover:bg-purple-900"
            >
              بازگشت به فروشگاه
            </a> */}
            </div>
          ) : (
            <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-3">
              <section className="font-myfont space-y-4 lg:col-span-2">
                {Cartitems.map((item) => {

                  return (
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
                  );
                })}
              </section>

              <aside
                className="rounded-2xl border border-gray-100
              bg-white p-5 shadow-sm lg:sticky lg:top-6"
              >
                <h2 className="font-myfont mb-5 text-lg font-bold text-gray-800">
                  خلاصه سفارش
                </h2>

                <div className="font-myfont flex justify-between gap-3 text-sm text-gray-600">
                  <span>تعداد محصولات</span>
                  <span>
                    {Cartitems.reduce((sum, item) => sum + item.quantity, 0)}
                  </span>
                </div>

                <div className="font-myfont mt-4 flex justify-between gap-3 text-sm text-gray-600">
                  <span>جمع محصولات</span>
                  <span>
                    {AddCart.totalPrice.toLocaleString("fa-IR")} تومان
                  </span>
                </div>

                <div className="font-myfont mt-4 flex justify-between gap-3 text-sm text-gray-600">
                  <span>هزینه ارسال</span>
                  <span>
                    {shipping === 0
                      ? "رایگان"
                      : `${shipping.toLocaleString("fa-IR")} تومان`}
                  </span>
                </div>
                <div className="font-myfont mt-4 flex justify-between gap-3 text-sm text-gray-600">
                  <span>هزینه پست</span>
                  <span>
                    {post === 0
                      ? "رایگان"
                      : `${post.toLocaleString("fa-IR")} تومان`}
                  </span>
                </div>
                <div className="font-myfont mt-4 flex justify-between gap-3 text-sm text-gray-600">
                  <span>هزینه مالیات</span>
                  <span>
                    {tax === 0
                      ? "رایگان"
                      : `${tax.toLocaleString("fa-IR")} تومان`}
                  </span>
                </div>
                <div className="my-5 border-t border-dashed border-gray-200" />

                <div className="font-myfont flex justify-between gap-3 font-bold text-gray-800">
                  <span>مبلغ نهایی</span>
                  <span className="text-purple-800">
                    {(AddCart.totalPrice + shipping).toLocaleString("fa-IR")}{" "}
                    تومان
                  </span>
                </div>
                <div className="flex flex-col">
                  <Button
                    label="ادامه و ثبت سفارش"
                    onClick={handlesubmitorder}
                  />

                  <Button
                    label="خالی کردن سبد خرید"
                    onClick={() => dispatch(clear())}
                  />
                  <Button
                    label="   ادامه خرید "
                    onClick={() => navigate("/")}
                  />
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
