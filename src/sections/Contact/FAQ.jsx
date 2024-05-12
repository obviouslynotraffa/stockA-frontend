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
                    <details className="w-full [&_svg]:open:-rotate-90" key={info.question}>
                        <summary className="flex flex-row justify-between cursor-pointer hover:bg-gray-100 items-center rounded-full ">
                            <span className="font-semibold font-montserrat text-xl text-gray-800 px-4 py-2 max-w-[87%]">
                                {info.question}
                            </span>
                            
                            <svg className="w-[32px] h-[32px] p-1 mr-2 rotate-0 transform transition-all duration-300" fill="#000000" height="200px" width="200px" version="1.1" id="Icons" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" xmlSpace="preserve">
                                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                <g id="SVGRepo_iconCarrier"> 
                                    <g> 
                                        <path d="M19.5,28C19.5,28,19.5,28,19.5,28c-1,0-1.8-0.4-2.5-1l-9.3-9.4c-0.9-0.9-0.9-2.3,0-3.1l9.3-9.4c0.7-0.7,1.6-1,2.5-1 c0,0,0,0,0,0c1,0,1.8,0.4,2.5,1c1.4,1.4,1.4,3.6,0,5l-5.7,5.8c-0.1,0.1-0.1,0.2,0,0.3l5.7,5.8c1.4,1.4,1.4,3.6,0,5 C21.3,27.6,20.4,28,19.5,28z M8.3,15.1L8.3,15.1L8.3,15.1z"></path> 
                                    </g> 
                                </g>
                            </svg>
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