import React from 'react'

const AboutBanner = () => {
  return (
    <section className='w-full bg-black'>
        <div className='py-10 padding-x max-w-screen-wide max-container'>
            <div className='flex flex-row justify-evenly items-center flex-wrap-reverse gap-10'>
                <p className='font-bold text-black font-montserrat text-2xl md:text-3xl p-4 bg-white max-w-[550px]'>
                Empowering Everyone To Trade What They Love
                </p>
                <h1 className='flex flex-col text-4xl font-extrabold text-white'>
                    <span>MISSION</span>
                    <span>MISSION</span>
                    <span>MISSION</span>
                </h1>
            </div>   
        </div>
    </section>
  )
}

export default AboutBanner