import { FAQData } from "../../constants"

const FAQ = () => {
  return (
    <section className='w-full py-10 padding-x max-w-screen-wide max-container'>
        <div className='flex flex-row flex-wrap justify-around gap-10 mb-10'>

            <div className='flex justify-center items-start flex-col'>
                <span className='font-bold font-palanquin text-2xl'>
                    FAQ
                </span>
                <h3 className='flex flex-col text-4xl font-montserrat font-extrabold'>
                    <span>Frequently</span> 
                    <span>Asked</span> 
                    <span>Questions</span>
                </h3>
            </div>

            <div className='flex flex-col items-center w-[550px] gap-5'>
                
                {FAQData.map((info) => (
                    <details className="w-full [&_span]:open:-rotate-90" key={info.question}>
                        <summary className="flex flex-row justify-between cursor-pointer hover:bg-gray-100 items-center rounded-full ">
                            <p className="font-semibold font-montserrat text-xl text-gray-800 px-4 py-2 max-w-[87%]">
                                {info.question}
                            </p>
                            <span className="w-[32px] h-[32px] p-1 mr-2 rotate-0 transform transition-all duration-300 ml-auto bg-arrow bg-center bg-no-repeat bg-cover">
                            </span>
                            
                        </summary>
                            <p className="font-montserrat text-gray-800 px-4">
                                {info.answer}
                            </p>
                    </details>
                ))}
            </div>
        </div>
    </section>
  )
}

export default FAQ