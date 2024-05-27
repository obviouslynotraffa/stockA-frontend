import { useParams } from 'react-router-dom';
import { PRODUCTS } from '../constants/products';
import Breadcrumb from '../components/Breadcrumb';


function ProductDetail() {

    const { id } = useParams();
    const product = PRODUCTS.find((product) => product.URLName === id);

    if (!product) {
        return <h1>404 page placeholder</h1>
    }

  return (
    <main>
        <Breadcrumb shoeName={product.shoeName} />

        
    </main>
  )
}

export default ProductDetail