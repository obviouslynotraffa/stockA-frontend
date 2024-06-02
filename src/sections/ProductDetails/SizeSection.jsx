import React, { useState } from 'react';

const SizeSection = () => {

    const sizes = [];
    for (let i=35.5; i<45.5; i+=0.5) {
        sizes.push(i);
    }

    
    const [selectedSizeIndex, setSelectedSizeIndex] = useState(null);

  const handleClick = (index) => {
    setSelectedSizeIndex(index);
  };

  return (
    <section className='flex flex-col w-[90%] lg:w-[45%] gap-10'>
      <p className='font-montserrat text-2xl'>
        Select Size
      </p>
      <div className='flex flex-row flex-wrap items-center justify-center gap-2'>
        {sizes.map((size, index) => (
            <button 
                key={index} 
                className={`text-lg h-[50px] w-[100px] hover:bg-gray-200 p-4 ${selectedSizeIndex === index ? 'border border-gray-400' : ''}`}
                onClick={() => handleClick(index)}>
                EU {size}
            </button>
        ))}
      </div>
      <p className='text-lg font-montserrat text-gray-800'>
      There are 2 products left
      </p>
      <div className='flex flex-row justify-around items-center gap-5 max-sm:flex-col'>
        <button className='border-2 border-black text-xl py-4 px-8 w-[45%] max-sm:w-[90%] font-semibold hover:bg-gray-200'>
            ADD TO CART
        </button>

        <button className='text-lg py-5 px-8 w-[45%] max-sm:w-[90%] bg-yellow-400 text-gray-800 font-palanquin hover:bg-yellow-500'>
            Buy with 
            <span className='text-blue-800 pl-1 font-bold font-sans text-xl italic'>
                Pay
            </span>
            <span className='font-bold text-xl font-sans italic text-blue-500'>
                Pal
            </span>
        </button>
      </div>
    </section>
  )
}

export default SizeSection
