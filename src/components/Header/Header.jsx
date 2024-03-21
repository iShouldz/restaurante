import styles from './header.module.css'
import hambuLogo from '../../assets/imagens/hamb-1.png'
const Header = () => {
  return (
    <header className={styles.headerContainer}>
        <img src={hambuLogo}/>

        <h3>Red Burger</h3>
        <p>Rua dev sucesso, 12, Campo Grande, MS</p>

        <div className={styles.horario}>
        Seg á Dom - 18:00 as 22:00
        </div>
    </header>
  )
}

export default Header