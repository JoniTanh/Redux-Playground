import Counter from "./components/Counter.jsx";
import Auth from "./components/Auth.jsx";
import UserProfile from "./components/UserProfile.jsx";
import { useSelector, useDispatch } from "react-redux";
import Cart from "./components/Cart.jsx";
import Products from "./components/Products.jsx";
import { useEffect } from "react";
import Layout from "./components/Layout.jsx";
import Notification from "./components/Notification.jsx";
import { sendCartData, fetchCartData } from "./store/cart-actions.js";

let isInitial = true;

const App = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notification);

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }

    if (cart.changed) {
      dispatch(sendCartData(cart));
    }
  }, [cart, dispatch]);

  return (
    <>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {!isAuth && <Auth />}
        {isAuth && <UserProfile />}
        {showCart && <Cart />}
        <Products />
        <Counter />
      </Layout>
    </>
  );
};

export default App;
