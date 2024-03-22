import ItemMenu from "../ItemMenu/ItemMenu";
import styles from "./menu.module.css";
import { itensCart } from "../../utils/itens";
import Carrinho from "../Carrinho/Carrinho";
const Menu = () => {
  return (
    <section className={styles.menuContainer}>
      <Carrinho />
      <h2>Conheça nosso menu</h2>

      <article className={styles.itensContainer}>
        {itensCart.map((item) => (
          <ItemMenu
            key={item.img}
            img={item.img}
            titulo={item.title}
            valor={item.valor}
            descricao={item.descricao}
            fullItem={item}
          />
        ))}
      </article>
    </section>
  );
};

export default Menu;
