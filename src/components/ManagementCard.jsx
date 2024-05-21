

const ManagementCard = ({imgURL, name, title}) => {
  return (
    <div className='flex flex-col max-w-[300px] group hover:cursor-pointer'>
                <img 
                    src={imgURL} 
                    alt={name}
                    width={300}
                    height={300}
                />
                <p className='text-2xl font-montserrat group-hover:text-flag-color group-hover:underline pt-3 pb-1'>
                    {name}
                </p>
                <p className='font-palanquin text-xl text-gray-600'>
                    {title}
                </p>
    </div>
  )
}

export default ManagementCard