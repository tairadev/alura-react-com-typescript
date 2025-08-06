import Banner from "./components/Banner"
import Header from "./components/Header"
import MovieSection from "./components/MovieSection"
import NewsLetter from "./components/Newsletter"

function App() {
  return (
    <>
      <Header />
      <Banner src="./banner.jpg" alt="Banner" />
      <MovieSection />
      <Banner src="./combo.png" alt="Combo" />
      <NewsLetter />
    </>
  )
}

export default App
