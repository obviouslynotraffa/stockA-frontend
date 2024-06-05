import { OurValuesData } from "../../constants"

const OurValues = () => {
  return (
    <section className="py-16 padding-x max-w-screen-wide max-container flex justify-evenly flex-row flex-wrap gap-10 lg:gap-0">
        <h5 className="font-montserrat text-4xl font-bold">
            Our Values
        </h5>
        <div className="flex flex-col gap-16 md:gap-8 w-[700px]">
            {OurValuesData.map((value, index) => {
                return (
                    <div className="flex flex-col justify-center items-center md:flex-row md:gap-5" key={index}>
                        <div className={"border-2 border-gray-200 rounded-md bg-contain bg-center bg-no-repeat w-[100px] h-[100px] md:min-w-[125px] md:min-h-[125px] " + value.imgURL}>
                        </div>
                        <div className="flex flex-col justify-evenly text-center md:text-start ">
                            <h6 className="font-semibold font-palanquin text-3xl">
                                {value.title}
                            </h6>

                            <p className="font-palanquin text-xl text-gray-800">
                                {value.desc}
                            </p>
                        </div>
                    </div>
                )
            })}
        </div>
    </section>
  )
}

export default OurValues