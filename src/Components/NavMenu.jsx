import { Routes, Route } from "react-router";
import Home from "../Components/Home";
import Login from "../Components/Login";
import Cart from "../Components/Cart";
import Account from "../Components/Account";
import AboutUs from "../Components/AboutUs";
import Favorite from "../Components/Favorite";
import ContactUs from "../Components/ContactUs";
import Support from "../Components/Support";
import Register from "../Components/Register";
import Products from "../Components/Products";
import ProductDetail from "../Components/ProductDetail";
import NotFound from "../Components/NotFound";
import AccountEdit from "../Components/AccountEdit";
import Address from "../Components/Address";
import AddressForm from "../Components/AddressForm";
import Orders from "../Components/Orders";
import OrderDetail from "../Components/OrderDetail";
import ProtectedRoute from "./ProtectedRoute";
function NavMenu() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/account" element={<Account />} />
      <Route path="/accountedit" element={<AccountEdit />} />
      <Route element={<ProtectedRoute />}>
        <Route path="/cart" element={<Cart />} />
        <Route path="/favorite" element={<Favorite />} />
      </Route>
      <Route path="/aboutus" element={<AboutUs />} />
      <Route path="/contactus" element={<ContactUs />} />
      <Route path="/support" element={<Support />} />
      <Route path="/register" element={<Register />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/productdetail" element={<ProductDetail />} />
      <Route path="/address" element={<Address />} />
      <Route path="address/addressform" element={<AddressForm />} />
      <Route path="/orders" element={<Orders />} />
      <Route path="/orders/ordersdetail" element={<OrderDetail />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
export default NavMenu;
