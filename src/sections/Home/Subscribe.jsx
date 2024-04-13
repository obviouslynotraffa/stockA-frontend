import React from 'react'

const Subscribe = () => {
    return (
      <section className='w-full bg-flag-color padding-x my-10'>
        <div className='flex justify-between items-center max-w-screen-wide gap-10 py-20 max-lg:flex-col m-auto'>
            <div className='flex justify-center items-center flex-col gap-5'>
                <h3 className='text-4xl leading-[68px] lg:max-w-md font-palanquin font-bold text-black'>
                    Sign Up for
                    <span className='text-white '> Updates </span>& Newsletter
                </h3>
                <p className='text-white lg:max-w-md font-montserrat'>
                    Don't miss a single drop! You will receive an email every time there is a <span className=' font-bold'>raffle</span> and <span className=' font-bold'>releases</span>.
                </p>
            </div>
            
            <div className='lg:max-w-[50%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 bg-white max-sm:bg-transparent rounded-full border-black'>
                <input 
                    type='text' 
                    placeholder='subscribe@stocka.com' 
                    className='input py-5 rounded-full' 
                />
                <div className='flex max-sm:justify-end items-center max-sm:w-full'>
                    <button className='w-[120px] max-sm:w-full bg-black text-white max-sm:rounded-full rounded-r-full py-5 hover:bg-slate-700 font-bold'>
                        Sign Up
                    </button>
                </div>
            </div>
        </div>
      </section>
    )
  }

export default Subscribe
