import Hero from "../components/Home/Hero"
import BestBrands from "../components/Home/BestBrands"
import TravisScottSection from "../components/Home/TravisScottSection"

const Home = () => {
  return (
    <section className="max-container">
      <Hero />
      <BestBrands />
      <TravisScottSection/>
    </section>
  )
}

export default Home