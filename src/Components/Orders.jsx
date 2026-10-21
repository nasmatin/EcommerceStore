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

  const userorder = order?.[String(userId)] ?? [];

  useEffect(() => {
    if (userId) {
      dispatch(GetOrders(userId));
      console.log("GetOrders", userId);
    }
  }, [dispatch, userId]);

  const formatPrice = (price) => Math.round(price).toLocaleString("fa-IR");
  return (
    <>
      <Header />
      <Menu />
      <div dir="rtl" className=" font-myfont text-center">
        <div className=" flex w-full  flex-col items-center gap-4 px-4 py-4">
          {!userorder || userorder.length === 0 ? (
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
                link={`/orders/ordersdetail?userId=${userId}&orderId=${uorder.id}`}
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
