import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadCart } from "./Features/AddToCartSlice";
import { loadFavorites } from "./Features/FavoriteSlice";
import NavMenu from "./Components/NavMenu";

function App() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.login.isLoggedIn);
  const userId = useSelector((state) => state.login.id);

  useEffect(() => {
    if (isLoggedIn && userId) {
      dispatch(loadCart(userId));
      dispatch(loadFavorites(userId));
    }
  }, [dispatch, isLoggedIn, userId]);

  return <NavMenu />;
}

export default App;
