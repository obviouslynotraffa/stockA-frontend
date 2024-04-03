import { BrandImages } from "../../constants"


const BestBrands = () => {
  return (
    <section className="padding-x pb-8 w-full bg-gradient-to-b from-gray-300 to-white">
      <div className="flex flex-col justify-center items-center max-w-screen-wide m-auto">
        <h2 className="md:text-4xl text-[30px] leading-loose  font-montserrat font-bold py-8">
            Best Seller Brands
        </h2>

        <div className="flex flex-1 flex-wrap justify-evenly items-center md:flex-row flex-col py-8 gap-20">
            {BrandImages.map((brand)=> (
              <img 
                key={brand.alt}
                src={brand.src}
                alt={brand.alt}
                className="md:w-[15%] w-[150px] hover:scale-125 transition-transform duration-500 transform origin-center"
              />
            ))}
        </div>
      </div>
    </section>
  )
}

export default BestBrands
