import ItemMenu from "../ItemMenu/ItemMenu";
import styles from "./menu.module.css";
import cart from "../../assets/shopping-cart.svg";
import { itensCart } from "../../utils/itens";
const Menu = () => {
  return (
    <section className={styles.menuContainer}>
      <h2>Conheça nosso menu</h2>

      <article className={styles.itensContainer}>
        {itensCart.map((item) => (
          <ItemMenu
            key={item.img}
            img={item.img}
            titulo={item.title}
            valor={item.valor}
            descricao={item.descricao}
          />
        ))}
      </article>
    </section>
  );
};

export default Menu;
