import { KeyNumbersData } from "../../constants"
import CountUp from 'react-countup'

function KeyNumbers() {
  return (
    <section className='w-full bg-pale-blue py-5'>
        <div className='py-10 padding-x max-w-screen-wide max-container'>
            <div className='flex flex-col justify-center items-center lg:w-[750px] m-auto gap-12'>
                <h4 className='font-extrabold font-montserrat text-4xl max-sm:text-center'>
                    KEY NUMBERS
                </h4>

                <div className='flex flex-col md:flex-row flex-wrap gap-8 justify-center'>
                    {KeyNumbersData.map((data, index) => (
                        <div key={index} className="w-[350px] flex flex-col items-center gap-3">
                            <div className="font-bold font-palanquin text-4xl" >
                                <CountUp 
                                    end={data.number}
                                    duration={5} 
                                />
                                {data.additional}
                            </div>
                            <p className="font-montserrat text-xl text-center ">
                                {data.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
  )
}

export default KeyNumbers