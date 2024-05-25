import AboutBanner from "../sections/About/AboutBanner"
import {Management} from "../sections/About/Management"
import KeyNumbers from "../sections/About/KeyNumbers"
import OurValues from "../sections/About/OurValues"
import Community from "../sections/About/Community"

const About = () => {
  return (
    <section>
      <AboutBanner />
      <Management />
      <KeyNumbers />
      <OurValues />
      <Community />
    </section>
  )
}

export default About
