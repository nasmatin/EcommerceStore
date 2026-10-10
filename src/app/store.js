import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "../Features/MenuSlice";
import loginReducer from "../Features/LoginSlice";
import registerReducer from "../Features/RegisterSlice";
import productReducer from "../Features/ProductSlice";


export const store = configureStore({
  reducer: {
   menu: menuReducer,
   login:loginReducer,
   register:registerReducer,
   product:productReducer,
  },
  //////optional////////
});
