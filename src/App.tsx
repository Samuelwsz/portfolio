import About from "./components/About"
import Banner from "./components/Banner"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Nav from "./components/Nav"
import Projects from "./components/Projects"
import Services from "./components/Services"
import "./global.css"

function App() {
  return (
    <>
      <div className="bg-slate-900">
        <Nav />
        <Banner />
        <About />
        <Services />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default App
