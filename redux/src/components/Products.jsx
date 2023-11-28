import ProductItem from "./ProductItem";
import styles from "../assets/Products.module.css";

const DUMMY_PRODUCTS = [
  { id: "p1", price: "5", title: "Apple", description: "Nam nam nam" },
  { id: "p2", price: "7", title: "Banana", description: "Lorem" },
];

const Products = (props) => {
  return (
    <section className={styles.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
