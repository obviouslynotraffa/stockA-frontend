import Hero from "../components/Home/Hero"
import BestBrands from "../components/Home/BestBrands"
import TravisScottSection from "../components/Home/TravisScottSection"
import Subscribe from "../components/Home/Subscribe"
import Services from "../components/Home/Services"

const Home = () => {
  return (
    <section className="max-container">
      <Hero />
      <BestBrands />
      <TravisScottSection/>
      <Subscribe/>
      <Services/>
    </section>
  )
}

export default Home