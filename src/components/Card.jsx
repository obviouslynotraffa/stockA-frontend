

const Card = ({imgURL, shoeName, price}) => {
  return (
    <div className='w-[160px] h-[200px] flex flex-col py-4 px-4 hover:underline hover:cursor-pointer'>
        <img 
            src={imgURL}
            alt={shoeName}
            className='object-contain'
        />
        <div className='w-full font-montserrat leading-5 line-clamp-3'>
            {shoeName}
        </div>
        <div className='font-bold text-2xl font-montserrat mt-auto'>
            {price} €
        </div>
    </div>
  )
}

export default Card