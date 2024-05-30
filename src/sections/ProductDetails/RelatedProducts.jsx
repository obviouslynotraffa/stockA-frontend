import React from 'react'
import Card from '../../components/Card';
import { PRODUCTS } from "../../constants/products"
import { Link } from 'react-router-dom';


const RelatedProducts = ({product}) => {

  const Product_array = PRODUCTS.filter((item) => item.shoeName !== product.shoeName)

  const uniqueProducts = [];
  while (uniqueProducts.length < 4) {
    const randomIndex = Math.floor(Math.random() * Product_array.length);
    const randomProduct = Product_array[randomIndex];

    if (!uniqueProducts.includes(randomProduct)) {
      uniqueProducts.push(randomProduct);
    }
  }

  return (
    <section className='flex flex-col w-full'>
      <h5 className='font-bold font-montserrat text-3xl'>
        Related Products
      </h5>
      <div className='flex flex-row flex-wrap justify-center md:justify-evenly items-center gap-5'>
        {uniqueProducts.map((product, index) => (
          <Link to={`/product/${product.URLName}`} key={index}>
            <Card
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

export default RelatedProducts
