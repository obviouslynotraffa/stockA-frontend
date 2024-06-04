import { GoodToKnowData } from "../constants"

const GoodToKnow = () => {
  return (
    <section className="flex flex-col gap-10 w-full">
        <h3 className='flex flex-row items-center gap-2'>
            <span className="text-3xl font-bold">
                GOOD TO KNOW
            </span>
            
            <div className="bg-flag w-8 h-8 bg-center bg-no-repeat bg-cover">

            </div>
        </h3>

        <div className="flex flex-col gap-10 ">
            {GoodToKnowData.map((item, index) => (
                <details key={index} className=" w-full [&_span]:open:-rotate-90 [&_span]:hover:fill-gray-500">
                    <summary className="flex flex-row items-center gap-5 hover:cursor-pointer hover:text-gray-500">
 
                        <div className={"w-[52px] h-[52px] bg-center bg-no-repeat bg-cover "+ item.imgURL}>
                        </div>
                        <p className="text-xl font-palanquin font-semibold">
                            {item.title}
                        </p>
                        
                        <span className="w-[32px] h-[32px] p-1 mr-2 rotate-0 transform transition-all duration-300 ml-auto bg-arrow bg-center bg-no-repeat bg-cover">
                        </span>

                    </summary>
                    <div className="flex flex-col font-montserrat gap-10 text-gray-800">
                        <div className="flex flex-col gap-2 pt-5">
                            <p className="font-bold text-lg">
                                {item.subt1}
                            </p>
                            <p>
                                {item.text1}
                            </p>
                        </div>
                        
                        <div className="flex flex-col gap-2">
                            <p className="font-bold text-lg">
                                {item.subt2}
                            </p>
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