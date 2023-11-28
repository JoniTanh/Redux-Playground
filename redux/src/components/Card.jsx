import styles from "../assets/Card.module.css";

const Card = (props) => {
  return (
    <section
      className={`${styles.card} ${props.className ? props.className : ""}`}
    >
      {props.children}
    </section>
  );
};

export default Card;
