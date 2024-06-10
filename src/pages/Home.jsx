import Hero from "../sections/Home/Hero"
import BestBrands from "../sections/Home/BestBrands"
import TravisScottSection from "../sections/Home/TravisScottSection"
import Subscribe from "../sections/Home/Subscribe"
import Services from "../sections/Home/Services"
import CustomerReviews from "../sections/Home/CustomerReviews"
import { Helmet, HelmetProvider } from "react-helmet-async"

const Home = () => {
  return (
    <>
      <Helmet>
        <title>StockA</title>
        <meta name="description" content="StockA is an online marketplace and clothing retailer, primarily focused on sneakers." />
        <meta name="keywords" content="StockA, sneakers, air jordan 1, air jordan 1 retro high, air jordan high og, New York"/>
        <meta name="author" content="StockA"/>
      </Helmet>
      <main>
        <Hero />
        <BestBrands />
        <TravisScottSection/>
        <Subscribe/>
        <Services/>
        <CustomerReviews/>
      </main>
    </>
  )
}

export default Home