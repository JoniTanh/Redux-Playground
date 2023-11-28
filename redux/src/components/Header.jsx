import styles from "../assets/Header.module.css";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../store/auth";
import CartButton from "./CartButton";

const Header = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.auth.isAuthenticated);

  const logoutHandler = () => {
    dispatch(authActions.logout());
  };

  return (
    <header className={styles.header}>
      <h1>Redux</h1>
      {isAuth && (
        <nav>
          <ul>
            <li>
              <CartButton />
            </li>
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
