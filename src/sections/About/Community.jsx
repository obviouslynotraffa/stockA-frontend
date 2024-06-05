import { CommunityData } from "../../constants"

const Community = () => {
  return (
    <section className='py-16 padding-x max-w-screen-wide max-container flex flex-col gap-14'>
      <h6 className="font-montserrat text-4xl font-bold">
        Commited To The Community
      </h6>
      <div className="flex flex-row flex-wrap justify-center gap-16 md:gap-10">
        {CommunityData.map((value, index) => {
          return (
            <div className="flex flex-col gap-3 md:gap-5 md:w-[300px] lg:w-[350px] w-[80%]" key={index}>
              <div className={"w-full h-[200px] bg-cover bg-center bg-no-repeat " + value.imgURL}>
              </div>
               
              <h6 className="font-semibold font-montserrat text-xl">
                {value.title}
              </h6>

              <p className="font-montserrat text-gray-800">
                {value.text}
              </p>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Community