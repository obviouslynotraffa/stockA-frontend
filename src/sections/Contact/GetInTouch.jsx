import { ContactInfo } from "../../constants"

const GetInTouch = () => {
  return (
    <section className='w-full py-10 padding-x max-w-screen-wide max-container '>
        <div className='flex flex-col'>
            <h2 className='w-full font-montserrat text-4xl font-bold '>
                Get In Touch
            </h2>
            <div className='flex flex-row justify-around py-10 flex-wrap gap-5 max-sm:gap-10'>
                <div className='w-[500px] max-lg:w-[80%] max-sm:w-full max-md:w-[90%] flex flex-col'>
                    <div className="flex flex-col justify-start">
                        <h3 className="font-bold font-palanquin text-xl">
                            Send Message
                        </h3>
                        <p className="font-montserrat text-gray-800 py-3">
                        Sending us an email is another convenient way to get in touch. Drop us a message, and we'll get back to you as soon as possible with the information or assistance you need.
                        </p>
                    </div>
                    <span className="text-red-500 pt-5 font-montserrat text-sm" aria-hidden="true">
                        * Required fields
                    </span>
                    <form action="" className="flex flex-col gap-10 py-5">
                        <div className="flex flex-row justify-between">
                            <div className="flex flex-col w-[48%]">
                                <label htmlFor="name" className="font-semibold font-palanquin">
                                    <div className="flex flex-row gap-1 ">
                                        Name
                                        <span aria-hidden="true" className="text-red-500">*</span>
                                        <span className="sr-only">(obbligatorio)</span>
                                    </div>
                                </label>
                                <input 
                                    type="text" 
                                    id="name"
                                    className="border-b-4 border-black focus:outline-none text-gray-800"
                                    required aria-required="true"
                                />
                            </div>
                            <div className="flex flex-col w-[48%]">
                                <label htmlFor="surname" className="font-semibold font-palanquin">
                                    <div className="flex flex-row gap-1 ">
                                        Surname
                                        <span aria-hidden="true" className="text-red-500">*</span>
                                        <span className="sr-only">(obbligatorio)</span>
                                    </div>
                                </label>
                                <input 
                                    type="text" 
                                    id="surname"
                                    className="border-b-4 border-black focus:outline-none"
                                    required aria-required="true"
                                />
                            </div>
                        </div>

                        <div className="flex flex-row justify-between">
                            <div className="flex flex-col w-[48%]">
                                <label htmlFor="email" className="font-semibold font-palanquin">
                                    <div className="flex flex-row gap-1 ">
                                        Email
                                        <span aria-hidden="true" className="text-red-500">*</span>
                                        <span className="sr-only">(obbligatorio)</span>
                                    </div>
                                </label>
                                <input 
                                    type="email" 
                                    id="email"
                                    className="border-b-4 border-black focus:outline-none"
                                    required aria-required="true"
                                />
                            </div>
                            <div className="flex flex-col w-[48%]">
                                <label htmlFor="phone" className="font-semibold font-palanquin">
                                    Phone number
                                </label>
                                <input 
                                    type="text" 
                                    id="phone"
                                    className="border-b-4 border-black focus:outline-none"
                                />
                            </div>
                        </div>
                            
                        <div>
                            <div className="flex flex-col w-full">
                                <label htmlFor="message" className="font-semibold font-palanquin">
                                    <div className="flex flex-row gap-1 ">
                                        Message
                                        <span aria-hidden="true" className="text-red-500">*</span>
                                        <span className="sr-only">(obbligatorio)</span>
                                    </div>
                                </label>
                                <textarea 
                                    cols={20}
                                    rows={7} 
                                    id="message"
                                    className="border-b-4 border-black focus:outline-none"
                                    required aria-required="true"
                                >
                                </textarea>
                            </div>
                        </div>

                        <button 
                            type="submit" 
                            className="ml-auto text-white bg-black font-bold font-lg p-3 hover:cursor-pointer hover:bg-slate-800 hover:underline"
                        >
                            Submit
                        </button>

                    </form>
                </div>

                <div className='w-[400px] max-lg:w-[80%] flex flex-col gap-14'>
        
                    {ContactInfo.map((section) =>(
                        <div key={section.title} className="flex flex-col">
                            <h3 className="font-bold font-palanquin text-xl">
                                {section.title}
                            </h3>
                            <p className="py-3 font-montserrat text-gray-800">
                                {section.info}
                            </p>
                            <div className="font-palanquin text-flag-color font-bold text-xl flex flex-row gap-6 items-center">
                                <div className={"w-[42px] h-[36px] bg-center bg-no-repeat bg-contain " + section.icon}>
                                </div>
                                <span className="w-full hover:underline hover:cursor-pointer">
                                    {section.details}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
  )
}

export default GetInTouch