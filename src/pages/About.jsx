import AboutBanner from "../sections/About/AboutBanner"
import { Management } from "../sections/About/Management"
import KeyNumbers from "../sections/About/KeyNumbers"
import OurValues from "../sections/About/OurValues"
import Community from "../sections/About/Community"
import { Helmet } from "react-helmet-async"

const About = () => {
  return (
    <>
      <Helmet>
        <title>About &ndash; StockA</title>
        <meta charset="UTF-8"/>
        <meta name="description" content="Information about the company StockA, an online marketplace and clothing retailer, primarily focused on sneakers." />
        <meta name="keywords" content="StockA, mission, CEO, CTO, management, values, community, New York"/>
        <meta name="author" content="StockA"/>
      </Helmet>
      <main>
        <AboutBanner />
        <Management />
        <KeyNumbers />
        <OurValues />
        <Community />
      </main>
    </>
  )
}

export default About
