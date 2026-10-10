import Header from "../Components/Header";
import Menu from "../Components/Menu";
import Footer from "../Components/Footer";
import OrderItem from "../Components/OrderItem";
function Orders() {
    return(
   <>
      <Header />
      <Menu />
      <div className=" ml-8">
      </div>
      <OrderItem />
      <OrderItem />

      <Footer />
    </>
    );
}
export default Orders;