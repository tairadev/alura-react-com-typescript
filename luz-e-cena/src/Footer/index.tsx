import FooterInfo from "./FooterInfo"
import FooterLinks from "./FooterLinks"
import FooterLogo from "./FooterLogo"
import styles from "./Footer.module.css"
import FooterInstitutional from "./FooterInstitutional"

const Footer = () => {
  return (
    <footer className={styles.rodape}>
      <div className={styles.rodape_informacoes}>
        <FooterLogo />
        <FooterInfo />
        <FooterInstitutional />
        <FooterLinks />
      </div>
    </footer>
  )
}

export default Footer