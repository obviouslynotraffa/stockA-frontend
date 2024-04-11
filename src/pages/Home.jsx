import Hero from "../components/Home/Hero"
import BestBrands from "../components/Home/BestBrands"
import TravisScottSection from "../components/Home/TravisScottSection"
import Subscribe from "../components/Home/Subscribe"
import Services from "../components/Home/Services"
import CustomerReviews from "../components/Home/CustomerReviews"

const Home = () => {
  return (
    <section className="max-container">
      <Hero />
      <BestBrands />
      <TravisScottSection/>
      <Subscribe/>
      <Services/>
      <CustomerReviews/>
    </section>
  )
}

export default Home