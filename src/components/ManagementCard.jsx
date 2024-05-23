

const ManagementCard = ({imgURL, name, title}) => {
  return (
    <div className='flex flex-col max-sm:max-w-[40%] max-md:max-w-[200px] max-lg:max-w-[25%] max-w-[20%] group hover:cursor-pointer'>
                <img 
                    src={imgURL} 
                    alt={name}
                    width={300}
                    height={300}
                />
                <p className='xl:text-2xl text-xl font-montserrat group-hover:text-flag-color group-hover:underline pt-3 pb-1'>
                    {name}
                </p>
                <p className='font-palanquin lg:text-lg text-base text-gray-600'>
                    {title}
                </p>
    </div>
  )
}

export default ManagementCard