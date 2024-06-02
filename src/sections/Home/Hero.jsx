import { HeroImg } from '../../assets/images';
import { Link } from 'react-router-dom'

const Hero = () => {
    return (
        <section className='bg-gradient-to-b from-white to-gray-300'>
          <div className='padding-x pb-8 w-full max-w-screen-wide m-auto'>
            <div className='flex lg:flex-row flex-col justify-evenly items-center md:px-5 pb-10 gap-5 lg:gap-0 '>
              <div className='flex py-5 flex-col justify-center lg:w-[50%] w-[90%] pb-20 md:pb-0'>

                <p className='text-slate-gray text-2xl leading-6'>
                  Don't miss the most recent release!
                </p>

                <h1 className='xl:text-8xl md:text-[4rem] md:leading-20 text-4xl font-bold font-montserrat py-6'>
                  Give Your Outfit A <span className='text-flag-color'>New</span> Style
                </h1>

                <p className='text-slate-gray text-2xl leading-6'>
                  Buy limited editions sneakers.
                </p>

                <div className='flex justify-center items-center'>
                  <Link 
                    to="/products" 
                    className='bg-flag-color mt-5 rounded-full py-2.5 w-[200px] hover:bg-green-900 flex justify-center items-center'
                  >
                    <span className='text-white font-semibold hover:underline'>
                      Explore Now
                    </span>
                  </Link>
                </div>
                
              </div>

              <img 
                src={HeroImg} 
                alt=""
                className='w-[70%] lg:w-[35%] object-cover md:object-contain rounded-lg md:shadow-2xl'
              />

            </div>
          </div>
        </section>
      )
}

export default Hero
