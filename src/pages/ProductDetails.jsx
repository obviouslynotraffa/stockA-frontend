import { useParams } from 'react-router-dom';
import { PRODUCTS } from '../constants/products';
import Breadcrumb from '../components/Breadcrumb';
import ShoeDetails from '../sections/ProductDetails/ShoeDetails';


const ProductDetails = () => {

  const { id } = useParams();
  const product = PRODUCTS.find((product) => product.URLName === id);

  if (!product) {
      return <h1>404 page placeholder</h1>
  }

  return (
    <main>
      <Breadcrumb shoeName={product.shoeName} />
      <ShoeDetails product={product} />    
    </main>
  )
}
 
export default ProductDetails