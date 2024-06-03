import { useParams } from 'react-router-dom';
import { PRODUCTS } from '../constants/products';
import Breadcrumb from '../components/Breadcrumb';
import ShoeDetails from '../sections/ProductDetails/ShoeDetails';
import { Helmet } from "react-helmet"


const ProductDetails = () => {

  const { id } = useParams();
  const product = PRODUCTS.find((product) => product.URLName === id);

  if (!product) {
      return <h1>404 page placeholder</h1>
  }
product.
  return (
    <>
      <Helmet>
        <title>{product.shoeName} &ndash; StockA</title>
        <meta charset="UTF-8"/>
        <meta name="description" content={"Product detail page of " + product.shoeName } />
        <meta name="keywords" content={"StockA, " + product.shoeName + product.URLName + product.SKU + product.price}/>
        <meta name="author" content="StockA"/>
      </Helmet>
      <main>
        <Breadcrumb shoeName={product.shoeName} />
        <ShoeDetails product={product} />    
      </main>
    </>
  )
}
 
export default ProductDetails