import { services } from "../../constants"

const Services = () => {
  return (
    <section className='padding-x padding-y max-container'>
      <div className='w-full max-w-screen-wide m-auto flex justify-center flex-wrap gap-9'>
        {services.map((service)=> (
           <div className="flex-1 sm:w-[350px sm:min-w-[350] w-full rounded-[20px] shadow-3xl px-10 py-16" key={service.label}>
            <div className="w-11 h-11 flex justify-center items-center bg-flag-color rounded-full">
                <img 
                  src={service.imgURL} 
                  alt={service.label} 
                  className="w-[24px] h-[24px]" 
                />
            </div>
            <h3 className="mt-5 font-palanquin text-3xl leading-normal font-bold">{service.label}</h3>
            <p className="mt-3 break-words font-montserrat text-xl leading-normal text-slate-gray">{service.subtext}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Services
