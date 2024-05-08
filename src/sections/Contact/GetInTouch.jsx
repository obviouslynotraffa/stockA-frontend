import { ContactInfo } from "../../constants"

const GetInTouch = () => {
  return (
    <section className='w-full py-10 padding-x max-w-screen-wide max-container '>
        <div className='flex flex-col'>
            <h1 className='w-full font-montserrat text-4xl font-bold'>
                Get In Touch
            </h1>
            <div className='flex flex-row justify-evenly py-10'>
                <div className='w-[500px] flex flex-col'>
                    <div className="flex flex-col justify-start">
                        <h3 className="font-bold font-palanquin text-xl">
                            Send Message
                        </h3>
                        <p className="font-montserrat text-gray-800 py-3">
                        Sending us an email is another convenient way to get in touch. Drop us a message, and we'll get back to you as soon as possible with the information or assistance you need.
                        </p>
                    </div>
                    <form action="" className="flex flex-col gap-10 py-5">
                        <div className="flex flex-row justify-between">
                            <div className="flex flex-col w-[48%]">
                                <label htmlFor="name" className="font-semibold font-palanquin">
                                    Name
                                </label>
                                <input 
                                    type="text" 
                                    id="name"
                                    className="border-b-4 border-black focus:outline-none text-gray-800"
                                />
                            </div>
                            <div className="flex flex-col w-[48%]">
                                <label htmlFor="surname" className="font-semibold font-palanquin">
                                    Surname
                                </label>
                                <input 
                                    type="text" 
                                    id="surname"
                                    className="border-b-4 border-black focus:outline-none"
                                />
                            </div>
                        </div>

                        <div className="flex flex-row justify-between">
                            <div className="flex flex-col w-[48%]">
                                <label htmlFor="email" className="font-semibold font-palanquin">
                                    Email
                                </label>
                                <input 
                                    type="text" 
                                    id="email"
                                    className="border-b-4 border-black focus:outline-none"
                                />
                            </div>
                            <div className="flex flex-col w-[48%]">
                                <label htmlFor="phone" className="font-semibold font-palanquin">
                                    Phone Number
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
                                    Message
                                </label>
                                <textarea 
                                    cols={20}
                                    rows={7} 
                                    id="message"
                                    className="border-b-4 border-black focus:outline-none"
                                >
                                </textarea>
                            </div>
                        </div>

                        <input 
                            type="submit" 
                            value="Submit"
                            className="ml-auto text-white bg-black font-bold font-lg p-3 hover:cursor-pointer hover:bg-slate-800 hover:underline"
                        />

                    </form>
                </div>

                <div className='w-[400px] flex flex-col gap-14'>
        
                    {ContactInfo.map((section) =>(
                        <div key={section.title} className="flex flex-col">
                            <h3 className="font-bold font-palanquin text-xl">
                                {section.title}
                            </h3>
                            <p className="py-3 font-montserrat text-gray-800">
                                {section.info}
                            </p>
                            <div className="font-palanquin text-flag-color font-bold text-xl flex flex-row gap-6 items-center">
                                <img 
                                    src={section.icon}
                                    alt={section.title}
                                    className="bg-flag-color rounded-full w-[40px] h-[40px] object-fill p-1"
                                />
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