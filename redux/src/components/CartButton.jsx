import styles from "../assets/CartButton.module.css";
import { uiActions } from "../store/ui";
import { useDispatch, useSelector } from "react-redux";

const CartButton = (props) => {
  const dispatch = useDispatch();
  const cartQuantity = useSelector((state) => state.cart.totalQuantity);

  const toggleCartHandle = () => {
    dispatch(uiActions.toggleCart());
  };

  return (
    <button className={styles.button} onClick={toggleCartHandle}>
      <span>My Cart</span>
      <span className={styles.badge}>{cartQuantity}</span>
    </button>
  );
};

export default CartButton;
