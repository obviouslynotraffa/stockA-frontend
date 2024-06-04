import sneaker_sound from '../../assets/sneaker_sound.mp3'

const Banner = () => {

  function play() {
    new Audio(sneaker_sound).play()
  }


  return (
    <section className='w-full py-10 padding-x max-w-screen-wide max-container'>
        <div className='bg-gray-300 py-8 px-8 md:px-24 flex flex-col gap-3 rounded-xl shadow-xl'>
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
                  className='w-[30px] h-[30px] bg-sound-wave bg-no-repeat bg-center bg-cover'
                  aria-describedby="voice"
                >
                  <span className='sr-only' id="voice">
                    Listen to the american-english pronunciation
                  </span>
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
