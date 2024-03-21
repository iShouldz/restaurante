import ItemMenu from "../ItemMenu/ItemMenu";
import styles from "./menu.module.css";
import hamburguer1 from "../../assets/imagens/hamb-1.png";

const Menu = () => {
  return (
    <section className={styles.menuContainer}>
      <h2>Conheça nosso menu</h2>

      <article className={styles.itensContainer}>
        <ItemMenu
          img={hamburguer1}
          titulo="Cheese Burger Duplo"
          valor={50.20}
          descricao="Pão levinho de fermentação natural da Trigou, burger 160g, queijo prato e maionese da casa"
        />
        <ItemMenu
          img={hamburguer1}
          titulo="Cheese Burger Duplo"
          descricao="Pão levinho de fermentação natural da Trigou, burger 160g, queijo prato e maionese da casa"
        />
        <ItemMenu
          img={hamburguer1}
          titulo="Cheese Burger Duplo"
          descricao="Pão levinho de fermentação natural da Trigou, burger 160g, queijo prato e maionese da casa"
        />
        <ItemMenu
          img={hamburguer1}
          titulo="Cheese Burger Duplo"
          descricao="Pão levinho de fermentação natural da Trigou, burger 160g, queijo prato e maionese da casa"
        />
      </article>
    </section>
  );
};

export default Menu;
