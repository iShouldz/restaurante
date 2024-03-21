import styles from "./footer.module.css";
import cart from "../../assets/shopping-cart.svg";

const Footer = () => {
  return (
    <footer className={styles.footerCotainer}>
      <h3>Veja seu carrinho</h3>
      <img src={cart} />
    </footer>
  );
};

export default Footer;
