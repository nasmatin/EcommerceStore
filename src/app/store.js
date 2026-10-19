import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "../Features/MenuSlice";
import loginReducer from "../Features/LoginSlice";
import registerReducer from "../Features/RegisterSlice";
import productReducer from "../Features/ProductSlice";
import productdetailReducer from "../Features/ProductDetailSlice";
import cartReducer from "../Features/AddToCartSlice";
import searchReducer from "../Features/SearchSlice";
import favoriteReducer from "../Features/FavoriteSlice";
import accountReducer from "../Features/AccountSlice";
import addressReducer from "../Features/AddressListSlice";
import addaddressReducer from "../Features/AddAddressSlice";
import deleteaddressReducer from "../Features/DeleteAddressSlice";
import editaddressReducer from "../Features/EditAddressSlice";

import provinceReducer from "../Features/ProvinceSlice";
import cityReducer from "../Features/CitySlice";

export const store = configureStore({
  reducer: {
    menu: menuReducer,
    login: loginReducer,
    register: registerReducer,
    product: productReducer,
    productdetail: productdetailReducer,
    cart: cartReducer,
    search: searchReducer,
    favorite: favoriteReducer,
    account: accountReducer,
    address: addressReducer,
    addaddress: addaddressReducer,
    province: provinceReducer,
    city: cityReducer,
    deleteaddress: deleteaddressReducer,
    editaddress: editaddressReducer,
  },
});

