import GetInTouch from "../sections/Contact/GetInTouch"
import Map from "../sections/Contact/Map"
import FAQ from "../sections/Contact/FAQ"
import { Helmet } from "react-helmet"

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact &ndash; StockA</title>
        <meta charset="UTF-8"/>
        <meta name="description" content="Contact StockA directly for information about products for sale or to request an appointment at our headquarters in New York." />
        <meta name="keywords" content="StockA, contact, information, phone number, email, chatbot, New York"/>
        <meta name="author" content="StockA"/>
      </Helmet>
      <main>
        <GetInTouch /> 
        <Map />
        <FAQ />
      </main>
    </>
  )
}

export default Contact
