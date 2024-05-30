import GoodToKnow from "../../components/GoodToKnow"
import ShoeDescription from "./ShoeDescription"
import ShoeHero from "./ShoeHero"
import SmallInfo from "./SmallInfo"
import SizeSection from "./SizeSection"
import RelatedProducts from "./RelatedProducts"

const ShoeDetails = ({product}) => {
  return (
    <section className='py-16 padding-x max-w-screen-wide max-container flex flex-col gap-10'>
        <ShoeHero product={product} />
        
        <div className="flex flex-row flex-wrap-reverse justify-around gap-8 h-fit">
          <div className="flex flex-col w-[90%] lg:w-[45%] gap-16">
              <GoodToKnow />
              <ShoeDescription />
              <SmallInfo 
                sku={product.SKU} 
                date={product.date} 
              />
          </div>
          <SizeSection />
        </div>

        <RelatedProducts product={product} />
    </section>
  )
}

export default ShoeDetails