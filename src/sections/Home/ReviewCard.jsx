
const ReviewCard = ({imgURL, customerName, rating, feedback}) => {
  return (
    <div className="flex flex-col justify-center items-center mt-20">
        <img 
            src={imgURL} 
            alt={ customerName + " profile pic"}
            className="rounded-full object-cover w-[120px] h-[120px]"  
        />
        <p className="mt-6 max-w-sm text-center info-text">
            {feedback}
        </p>
        <div className=' mt-3 flex justify-center items-center gap-2.5 '>
            <div className='object-contain m-0 bg-star bg-no-repeat bg-center bg-cover w-[24px] h-[24px]'>
            </div>
            <p className='text-xl font-montserrat text-slate-gray'>
                ({rating})
            </p>
        </div>
        <span className='mt-1 font-palanquin text-3xl text-center font-bold'>
            {customerName}
        </span>
    </div>
  )
}

export default ReviewCard
