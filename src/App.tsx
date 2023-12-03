import About from "./components/About"
import Banner from "./components/Banner"
import Nav from "./components/Nav"
import "./global.css"

function App() {
  return (
    <>
      <div className="bg-slate-900">
        <Nav />
        <Banner />
        <About />
      </div>
    </>
  )
}

export default App
