import styles from "./footer.module.css";
import cart from "../../assets/shopping-cart.svg";
import { useDispatch } from "react-redux";
import { carrinhoActions } from "../../store/carrinho/carrinhoSlice";

const Footer = () => {
  const dispatch = useDispatch()
  const handleChangeModal = () => {
    dispatch(carrinhoActions.handleChangeModal())
  }

  return (
    <>
      <footer className={styles.footerCotainer}>
        <button onClick={handleChangeModal}>
          <h3>Veja seu carrinho</h3>
        </button>

        <img src={cart} />
      </footer>
    </>
  );
};

export default Footer;
