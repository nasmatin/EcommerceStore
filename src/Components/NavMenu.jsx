import { Routes, Route } from "react-router";
import Home from "../Components/Home";
import Login from "../Components/Login";
import Cart from "../Components/Cart";
import Account from "../Components/Account";
import AboutUs from "../Components/AboutUs";

import ContactUs from "../Components/ContactUs";
import Support from "../Components/Support";
import Register from "../Components/Register";
import Products from "../Components/Products";

import NotFound from "../Components/NotFound";

function NavMenu() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/account" element={<Account />} />
      <Route path="/aboutus" element={<AboutUs />} />
      <Route path="/contactus" element={<ContactUs />} />
      <Route path="/support" element={<Support />} />
      <Route path="/register" element={<Register />} />
        <Route path="/products" element={<Products />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
export default NavMenu;
