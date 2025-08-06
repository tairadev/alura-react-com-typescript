import Button from "../Button"
import Fieldset from "../Fieldset"
import InputText from "../InputText"
import styles from "./Newsletter.module.css"

const NewsLetter = () => {
  return (
    <section className={styles.newsletter}>
      <h2 className={styles.titulo}>Inscreva-se para ganhar descontos!</h2>
      <form className={styles.form}>
        <Fieldset>
          <InputText placeholder="Digite o seu melhor e-mail" />
        </Fieldset>
        <Button type="submit" variant="default">Inscreva-se</Button>
      </form>
    </section>
  )
}

export default NewsLetter