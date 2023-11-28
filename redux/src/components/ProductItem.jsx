import Card from "./Card";
import styles from "../assets/ProductItem.module.css";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../store/cart";

const ProductItem = (props) => {
  const dispatch = useDispatch();
  const { title, price, description, id } = props;

  const addToCartHandler = () => {
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
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={styles.price}>${price}</div>
        </header>
        <p>{description}</p>
        <div className={styles.actions}>
          <button onClick={addToCartHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
