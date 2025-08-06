import Logo from '../components/Logo'
import styles from './Footer.module.css'

const FooterLogo = () => {
  return (
    <div className={styles.logo}>
      <Logo src="./logo-branca.png" alt="Logo" />
      <p>Onde a realidade encontra a fantasia!</p>
    </div>
  )
}

export default FooterLogo