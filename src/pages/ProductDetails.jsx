import { useParams } from 'react-router-dom';
import { PRODUCTS } from '../constants/products';
import Breadcrumb from '../components/Breadcrumb';
import ShoeDetails from '../sections/ProductDetails/ShoeDetails';
import Page404 from './Page404';
import { Helmet, HelmetProvider } from "react-helmet-async"


const ProductDetails = () => {

  const { id } = useParams();
  const product = PRODUCTS.find((product) => product.URLName === id);

  if (!product) {
      return <Page404 />
  }

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>{product.shoeName} &ndash; StockA</title>
          <meta charset="UTF-8"/>
          <meta name="description" content={"Product detail page of " + product.shoeName } />
          <meta name="keywords" content={"StockA, " + product.shoeName + product.URLName + product.SKU + product.price}/>
          <meta name="author" content="StockA"/>
        </Helmet>
      </HelmetProvider>
      <main>
        <Breadcrumb shoeName={product.shoeName} />
        <ShoeDetails product={product} />    
      </main>
    </>
  )
}
 
export default ProductDetails