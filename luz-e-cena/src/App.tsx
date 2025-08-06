import Banner from "./components/Banner"
import Header from "./components/Header"
import Link from "./components/Link"

function App() {
  return (
    <>
      <Header />
      <Banner src="./banner.jpg" alt="Banner" />
      <Link href="/" target="_blank">
        Link
      </Link>
    </>
  )
}

export default App
