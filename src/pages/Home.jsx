import Hero from "../components/Home/Hero"
import BestBrands from "../components/Home/BestBrands"
import TravisScottSection from "../components/Home/TravisScottSection"
import Subscribe from "../components/Home/Subscribe"

const Home = () => {
  return (
    <section className="max-container">
      <Hero />
      <BestBrands />
      <TravisScottSection/>
      <Subscribe/>
    </section>
  )
}

export default Home