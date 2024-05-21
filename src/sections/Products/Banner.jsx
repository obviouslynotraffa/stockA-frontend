import sneaker_sound from '../../assets/sneaker_sound.mp3'

const Banner = () => {

  function play() {
    new Audio(sneaker_sound).play()
  }


  return (
    <section className='w-full py-10 padding-x max-w-screen-wide max-container'>
        <div className='bg-gray-300 py-8 px-8 md:px-24 flex flex-col gap-3 rounded-xl'>
            <div className='font-bold font-palanquin text-4xl'>
              sneaker
            </div>
            <div className='flex flex-col gap-3 italic text-xl'>
              <p>
                noun
              </p>
              <div className='flex fle-row gap-4'>
                <p className='font-bold'>
                  /ˈsniː.kɚ/
                </p>
                <button
                  onClick={play}
                  className='w-[30px] h-[30px] bg-sound-wave'
           
                >
                  
                  <svg 
                    width="32px" 
                    height="32px" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg" 
                    aria-labelledby="soundsIconTitle" 
                    stroke="#000000" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    color="#000000"
                  > 
                    <title id="soundsIconTitle">Listen to the American English pronunciation</title> 
                    <path d="M12 7L12 17"/> 
                    <path d="M15 10L15 14"/> 
                    <path d="M18 8L18 16"/> 
                    <path d="M21 13L21 11"/> 
                    <path d="M9 4L9 20"/> 
                    <path d="M6 9L6 15"/> 
                    <path d="M3 13L3 11"/> 
                  </svg>
                </button>
              </div>
              
            </div>
            <p className='font-palanquin text-lg leading-6'>
            is a lightweight and comfortable sports shoe, typically characterized by a rubber sole and a fabric or synthetic upper. It is primarily designed for activities such as walking, running, or exercising, but is often worn for fashion or casual purposes as well.
            </p>
        </div>
    </section>
  )
}

export default Banner
