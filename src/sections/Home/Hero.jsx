import { Link } from 'react-router-dom'

const Hero = () => {
    return (
        <section className='bg-gradient-to-b from-white to-gray-300'>
          <div className='padding-x pb-8 w-full max-w-screen-wide m-auto'>
            <div className='flex flex-col md:flex-row lg:justify-around justify-center items-center md:px-5 pb-10 gap-5'>
              <div className='flex py-5 flex-col justify-around lg:w-[50%] w-[90%] pb-20 md:pb-0'>

                <div className='flex flex-col justify-center'>
                  <p className='text-slate-gray text-2xl leading-6'>
                    Don't miss the most recent release!
                  </p>

                  <h2 className='xl:text-8xl md:text-[4rem] md:leading-20 text-4xl font-bold font-montserrat py-6'>
                    Give Your Outfit A <span className='text-flag-color'>New</span> Style
                  </h2>

                  <p className='text-slate-gray text-2xl leading-6'>
                    Buy limited editions sneakers.
                  </p>
                </div>
                

                <div className='flex justify-center items-center md:mt-5'>
                  <Link 
                    to="/products" 
                    className='bg-flag-color mt-5 rounded-full py-2.5 w-[200px] hover:bg-green-900 flex justify-center items-center md:mt-5'
                  >
                    <span className='text-white font-semibold hover:underline '>
                      Explore Our Collection
                    </span>
                  </Link>
                </div>
                
              </div>
      
              <div className="w-[200px] h-[200px] md:w-[300px] md:h-[500px] bg-hero bg-contain bg-center bg-no-repeat">
              </div> 

            </div>
          </div>
        </section>
      )
}

export default Hero
