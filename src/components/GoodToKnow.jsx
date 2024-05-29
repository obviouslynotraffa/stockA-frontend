import { flag } from "../assets/icons"
import { GoodToKnowData } from "../constants"

const GoodToKnow = () => {
  return (
    <section className="flex flex-col gap-10 w-full">
        <h3 className='flex flex-row items-center gap-2'>
            <span className="text-3xl font-bold">
                GOOD TO KNOW
            </span>
            <img 
                src={flag} 
                alt='flag' 
                className='w-8 h-8' 
            />
        </h3>

        <div className="flex flex-col gap-10 ">
            {GoodToKnowData.map((item, index) => (
                <details key={index} className="[&_svg]:open:-rotate-90 [&_svg]:hover:fill-gray-500 w-full">
                    <summary className="flex flex-row items-center gap-5 hover:cursor-pointer hover:text-gray-500">
                        <img 
                            src={item.imgURL} 
                            alt={item.title} 
                            width={52}
                            height={52}
                        />
                        <span className="text-xl font-palanquin font-semibold">
                            {item.title}
                        </span>
                        <svg className="w-[32px] h-[32px] p-1 mr-2 rotate-0 transform transition-all duration-300 ml-auto " fill="#000000" height="200px" width="200px" version="1.1" id="Icons" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" xmlSpace="preserve">
                                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                <g id="SVGRepo_iconCarrier"> 
                                <g> 
                                    <path d="M19.5,28C19.5,28,19.5,28,19.5,28c-1,0-1.8-0.4-2.5-1l-9.3-9.4c-0.9-0.9-0.9-2.3,0-3.1l9.3-9.4c0.7-0.7,1.6-1,2.5-1 c0,0,0,0,0,0c1,0,1.8,0.4,2.5,1c1.4,1.4,1.4,3.6,0,5l-5.7,5.8c-0.1,0.1-0.1,0.2,0,0.3l5.7,5.8c1.4,1.4,1.4,3.6,0,5 C21.3,27.6,20.4,28,19.5,28z M8.3,15.1L8.3,15.1L8.3,15.1z"></path> 
                                </g> 
                                </g>
                        </svg>

                    </summary>
                    <div className="flex flex-col font-montserrat gap-10 text-gray-800">
                        <div className="flex flex-col gap-2 pt-5">
                            <span className="font-bold text-lg">
                                {item.subt1}
                            </span>
                            <p>
                                {item.text1}
                            </p>
                        </div>
                        

                        <div className="flex flex-col gap-2">
                            <span className="font-bold text-lg">
                                {item.subt2}
                            </span>
                            <p>
                                {item.text2}
                            </p>
                        </div>
                    </div>
                </details>
            ))}
        </div>
    </section>
    
  )
}

export default GoodToKnow