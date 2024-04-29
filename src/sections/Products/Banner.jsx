import React from 'react'

const Banner = () => {
  return (
    <section className='padding-x padding-y max-container'>
        <div className='w-full max-w-screen-wide m-auto bg-gray-400 py-8 px-6 flex flex-col gap-3 rounded-xl'>
            <div className='font-bold font-palanquin text-4xl'>
              sneaker
            </div>
            <div className='flex flex-col gap-3 italic text-xl'>
              <p>
                noun
              </p>
              <p>
              /ˈsniː.kər/ or /ˈsniː.kɚ/
              </p>
            </div>
            <p className='font-palanquin text-lg'>
            is a lightweight and comfortable sports shoe, typically characterized by a rubber sole and a fabric or synthetic upper. It is primarily designed for activities such as walking, running, or exercising, but is often worn for fashion or casual purposes as well.
            </p>
        </div>
    </section>
  )
}

export default Banner
