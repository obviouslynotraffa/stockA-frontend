import { whiteLogo } from "../assets/icons"
import { socials, appStores } from "../constants"
import { footerLinks } from "../constants"

const Footer = () => {
  return (
    <section className="w-full py-8 max-container bg-black">
        <div className="padding-x text-white max-w-screen-wide m-auto flex flex-col pt-3">
            <div className="flex flex-row flex-wrap gap-5 justify-between max-md:justify-center items-start pb-8 ">
                <div className="flex flex-col items-start gap-5 w-[275px] max-sm:items-center max-sm:text-center">
                    <img 
                        src={whiteLogo}
                        alt="StockA logo"
                        width={150}
                        height={150} 
                    />
                    <p className="text-zinc-400 font-montserrat font-medium">
                        Passion, style, and comfort come together in every step. Explore our range of sneakers to meet your every fashion and functionality desire.
                    </p>
                    <div className='flex items-center gap-5 mt-2 max-sm:mb-8'>
                        {socials.map((social) => (
                            <div className="flex items-center justify-center w-12 h-12 bg-white rounded-full gap-8 hover:cursor-pointer hover:bg-slate-gray" key={social.alt}>
                                <img 
                                    src={social.src}
                                    alt={social.alt}
                                    width={24}
                                    height={24}    
                                />
                            </div>
                        ))}
                    </div>
                </div>
                
                {footerLinks.map((section)=> (
                    <div className="w-[170px]" key={section.title}>
                        <h4 className="font-bold text-2xl py-5 max-sm:text-center">
                            {section.title}
                        </h4>
                        <ul>
                            {section.links.map((link) => (
                                <li className="text-zinc-400 font-medium font-montserrat py-1 hover:underline hover:text-slate-gray max-sm:text-center" key={link.name}>
                                    <a href={link.link}>
                                    {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>   
                ))}

                <div className="flex flex-col gap-10 w-[295px] max-sm:text-center">
                    <p className="font-bold font-palanquin text-2xl text-white max-sm:pt-5">
                        Download our App!
                    </p>
                    <p className="font-montserrat text-zinc-400  font-medium">
                        Download the App from Play Store and Apple Store to have a better experience.
                    </p>
                    <div className="flex justify-center items-center gap-3 flex-wrap">
                        {appStores.map((store) => (
                            <img 
                                alt={store.alt}
                                src={store.src}
                                width={140}
                                height={140}
                                className="hover:cursor-pointer"
                                key={store.alt}
                            />
                        ))}
                    </div> 
                </div>
            </div>

            <div className="pt-8 border-t-2 border-white-400 text-center text-zinc-400 font-montserrat font-bold">
                Copyright 2024 - StockA
            </div>
        </div>
    </section>
  )
}

export default Footer
