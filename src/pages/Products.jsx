import Banner from "../sections/Products/Banner"
import CardContainer from "../sections/Products/CardContainer"
import { Helmet } from "react-helmet"

const Products = () => {
  return (
    <>
      <Helmet>
        <title>Products &ndash; StockA</title>
        <meta charset="UTF-8"/>
        <meta name="description" content="Showcase of all the sneakers currently for sale at StockA."/>
        <meta name="keywords" content="StockA, sneakers, air jordan 1 retro high, showcase, nike, jordan high retro, jordan 1 high, New York"/>
        <meta name="author" content="StockA"/>
      </Helmet>
      <main>
        <Banner />
        <CardContainer />
      </main>
    </>
  )
}

export default Products
