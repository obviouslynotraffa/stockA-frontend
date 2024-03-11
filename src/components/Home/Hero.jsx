import { HeroImg } from '../../assets/images';
import { Link } from 'react-router-dom'

const Hero = () => {
    return (
        <section className='padding-x pb-8 w-full  bg-gradient-to-b from-white to-gray-300'>
          <div className='flex md:flex-row flex-col justify-between items-center md:px-5 pb-10 '>
            <div className='flex flex-col justify-center md:w-[50%] pb-20 md:pb-0'>

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
              className='md:rounded-full xl:w-[550px] md:w-[50%] rounded-xl '
            />

          </div>
        </section>
      )
}

export default Hero
