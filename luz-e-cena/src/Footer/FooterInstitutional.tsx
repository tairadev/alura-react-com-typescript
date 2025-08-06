import Link from '../components/Link'
import styles from './Footer.module.css'

const FooterInstitutional = () => {
  return (
    <div className={styles.institucional}>
      <h4 className={styles.titulo}>Institucional</h4>
      <Link href="/sobre-nos" className={styles.ancora}>Sobre nós</Link>
      <Link href="/para-empresas" className={styles.ancora}>Para empresas</Link>
      <Link href="/clube-fidelidade" className={styles.ancora}>Clube fidelidade</Link>
    </div>
  )
}

export default FooterInstitutional