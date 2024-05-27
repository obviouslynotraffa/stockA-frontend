import Card from "../../components/Card"
import { PRODUCTS } from "../../constants/products"
import { Link } from 'react-router-dom';


const CardContainer = () => {
  return (
    <section className='py-16 max-container w-full max-w-screen-wide m-auto padding-x max-sm:px-0 '>
            <div className='flex flex-row gap-3 justify-center items-center flex-wrap  '>
                {PRODUCTS.map((product) => (
                  <Link to={`/product/${product.URLName}`} key={product.shoeName} >
                    <Card
                        key={product.shoeName}
                        imgURL={product.imgUrl}
                        shoeName={product.shoeName}
                        price={product.price}
                    />
                  </Link>
                ))}
    
            </div>
    </section>
  )
}

export default CardContainer