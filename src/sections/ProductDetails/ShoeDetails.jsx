import GoodToKnow from "../../components/GoodToKnow"
import ShoeDescription from "./ShoeDescription"
import ShoeHero from "./ShoeHero"
import SmallInfo from "./SmallInfo"

const ShoeDetails = ({product}) => {
  return (
    <section className='py-16 padding-x max-w-screen-wide max-container '>
        <ShoeHero product={product} />
        
        <div className="flex flex-col w-[55%] gap-16">
            <GoodToKnow />
            <ShoeDescription />
            <SmallInfo 
              sku={product.SKU} 
              date={product.date} 
            />
            
        </div>
    </section>
  )
}

export default ShoeDetails