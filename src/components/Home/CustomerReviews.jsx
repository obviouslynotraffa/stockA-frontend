import ReviewCard from "./ReviewCard"
import { reviews } from "../../constants"

const CustomerReviews = () => {
  return (
    <section className='w-full bg-pale-blue padding-x mt-10'>
      <div className='padding-y max-container max-w-screen-wide m-auto'>
        <h3 className="font-palaquin text-center font-bold text-4xl">
            What Our
            <span className="text-flag-color "> Customers </span>
            Say?
        </h3>
        <p className="info-text m-auto mt-4 max-w-lg text-center">
            Hear genuine stories from our satisfied customers about their 
            <span className='font-bold'> exceptional experiences </span> 
            with us.
        </p>
        <div className='flex justify-evenly align-middle flex-wrap'>
            {reviews.map((review) => (
                <ReviewCard 
                    key={review.customerName}
                    imgURL={review.imgURL}
                    customerName={review.customerName}
                    rating={review.rating}
                    feedback={review.feedback}
                />
            ))}
        </div>
      </div>
    </section>
  )
}

export default CustomerReviews
