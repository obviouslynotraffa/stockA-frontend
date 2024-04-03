import Hero from "../components/Home/Hero"
import BestBrands from "../components/Home/BestBrands"
import GreenZone from "../components/Home/GreenZone"

const Home = () => {
  return (
    <section className="max-container">
      <Hero />
      <BestBrands />
      <GreenZone/>
    </section>
  )
}

export default Home