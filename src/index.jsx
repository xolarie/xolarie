import Hero from "./components/Hero"
import Services from "./components/Services"
import About from "./components/About"


const Home = () => {
  return (
    <div>
        <Hero />
        <div className="bg-primary1">
        <About />
        <Services />
        </div>
    </div>
  )
}

export default Home