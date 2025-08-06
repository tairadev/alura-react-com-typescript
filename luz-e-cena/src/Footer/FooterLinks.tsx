import { FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa"
import styles from "./Footer.module.css"
import Link from "../components/Link"

const FooterLinks = () => {
  return (
    <div className={styles.redes}>
      <h4 className={styles.titulo}>Siga nossas redes:</h4>
      <div className={styles.icones}>
        <Link href="https://web.whatsapp.com/" target="_blank">
          <FaWhatsapp className={styles.icone} />
        </Link>
        <Link href="https://instagram.com/" target="_blank">
          <FaInstagram className={styles.icone} />
        </Link>
        <Link href="https://www.tiktok.com/" target="_blank">
          <FaTiktok className={styles.icone} />
        </Link>
      </div>
    </div>
  )
}

export default FooterLinks