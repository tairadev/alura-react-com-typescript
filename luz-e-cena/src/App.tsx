import Banner from "./components/Banner"
import Header from "./components/Header"
import MovieSection from "./components/MovieSection"

function App() {
  return (
    <>
      <Header />
      <Banner src="./banner.jpg" alt="Banner" />
      <MovieSection />
    </>
  )
}

export default App
