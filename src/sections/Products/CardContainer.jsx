import Card from "../../components/Card"
import { PRODUCTS } from "../../constants/products"

const CardContainer = () => {
  return (
    <section className='padding-x pb-16  max-container'>
        <div className='w-full max-w-screen-wide m-auto'>
            <div className='flex flex-row gap-3 justify-center items-center flex-wrap '>
                {PRODUCTS.map((product) => (
                    <Card
                        key={product.shoeName}
                        imgURL={product.imgUrl}
                        shoeName={product.shoeName}
                        price={product.price}
                    />
                ))}
    
            </div>  
        </div>
    </section>
  )
}

export default CardContainer