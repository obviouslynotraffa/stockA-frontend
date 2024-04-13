import { Jordan1RetroHighOGxTS } from '../../assets/images'
import { TravisScottSneakers } from '../../constants'


const TravisScottSection = () => {
  return (
    <section className='w-full max-w-screen-wide m-auto'>
      <div className='padding-x padding-y flex flex-1 justify-around items-center lg:flex-row flex-col-reverse'>
        <div className='flex flex-col'>
          <div>
            <img 
              src={Jordan1RetroHighOGxTS} 
              alt="Jordan x Travis Scott Shoes" 
              className='rounded-xl shadow-2xl bg-card bg-center bg-cover'
              width={550}
              height={550}
            />           
          </div>
          <div className='flex justify-center items-center gap-2 py-5 flex-wrap'>

            {TravisScottSneakers.map((shoe) =>
            (
              <img 
                key={shoe.alt}
                src={shoe.src}
                alt={shoe.alt}
                width={175}
                height={175} 
                className='rounded-xl shadow-2xl cursor-pointer bg-card bg-center bg-cover'
              />
            ))}
            
          </div>
        </div>

        <div className=' w-[90%] mb-8 lg:w-[50%] px-10  text-center flex justify-center items-center flex-col gap-8'>
          <p className='font-bold text-4xl xl:text-4xl mb-auto'>
            Experience the <span className='text-flag-color'>Travis Scott</span> Collection: Where Style Meets <span className='text-flag-color'>Innovation</span>
          </p>

          <div className='text-slate-gray flex flex-col justify-center items-center gap-8 text-lg leading-8'>
            <p>
              Get ready to step into a new realm of footwear fashion with our exclusive Travis Scott shoe collection. Each pair is not just a shoe, but a statement - a reflection of <span className='font-bold'>bold creativity</span> and  <span className='font-bold'>unparalleled craftsmanship</span>.
            </p>
            <p>
              Don't just follow the trends - <span className='font-bold'>set them</span> . Elevate your sneaker game with the Travis Scott collection and experience a new level of style revolution. Shop now and be part of the movement that's reshaping the fashion landscape.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TravisScottSection