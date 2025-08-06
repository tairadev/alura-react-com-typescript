import Banner from "./components/Banner"
import Copyright from "./components/Copyright"
import Header from "./components/Header"
import MovieSection from "./components/MovieSection"
import NewsLetter from "./components/Newsletter"
import Footer from "./Footer"

function App() {
  return (
    <>
      <Header />
      <Banner src="./banner.jpg" alt="Banner" />
      <MovieSection />
      <Banner src="./combo.png" alt="Combo" />
      <NewsLetter />
      <Banner src="./banner-footer.png" alt="Tarjeta" />
      <Footer />
      <Copyright />
    </>
  )
}

export default App
