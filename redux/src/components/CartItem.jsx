import styles from "../assets/CartItem.module.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/cart";

const CartItem = (props) => {
  const dispatch = useDispatch();

  const { title, quantity, total, price, id } = props.item;

  const removeItemHandler = () => {
    dispatch(cartActions.removeItemFromCart(id));
  };

  const addItemHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id,
        title,
        price,
      })
    );
  };

  return (
    <li className={styles.item}>
      <header>
        <h3>{title}</h3>
        <div className={styles.price}>
          ${total} <span className={styles.itemprice}>(${price}/item)</span>
        </div>
      </header>
      <div className={styles.details}>
        <div className={styles.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={styles.actions}>
          <button onClick={removeItemHandler}>-</button>
          <button onClick={addItemHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
