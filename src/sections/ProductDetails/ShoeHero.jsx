import React from 'react'

const ShoeHero = ({product}) => {
  return (
    <div className='flex flex-row flex-wrap  justify-center  items-center'>
        <img 
            src={product.imgUrl}
            alt={product.shoeName} 
            className='md:w-1/2 md:h-1/2 w-[90%] object-cover '
        />

        <div className='flex flex-col gap-5 flex-wrap w-[85%] md:w-1/2 justify-center'>
            <h1 className='font-bold font-montserrat text-4xl max-sm:text-3xl max-sm:font-extrabold'>
                {product.shoeName}
            </h1>
            <p className='font-bold font-montserrat text-3xl'>
                € {product.price}.99
            </p>
            <span className='text-xl text-gray-600 font-montserrat '>
                SKU: {product.SKU}
            </span>
        </div>
    </div>
  )
}

export default ShoeHero
