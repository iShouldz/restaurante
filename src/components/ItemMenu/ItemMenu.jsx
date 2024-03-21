/* eslint-disable react/prop-types */
import styles from "./itemmenu.module.css";
import cart from '../../assets/shopping-cart.svg'
const ItemMenu = ({ img, titulo, descricao, valor }) => {
  return (
    <article className={styles.itemMenu}>
      <img src={img} className={styles.item} />

      <div className={styles.info}>
        <h4>{titulo}</h4>

        <p>{descricao}</p>

        <div className={styles.itemFooter}>
          <h3>R${valor}</h3>
          <button className={styles.btn}><img src={cart}/></button>
        </div>
      </div>
    </article>
  );
};

export default ItemMenu;
