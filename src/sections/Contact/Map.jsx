import React from 'react'

const Map = () => {
  return (
    <section className='w-full py-10 padding-x max-w-screen-wide max-container'>
        <div className='flex justify-center items-center'>
            <iframe
                src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=123%20Main%20Street,%20New%20York,%20NY%2010001+(StockA)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                className=' w-full lg:w-[80%] h-[500px] '
            >
                <a href="https://www.gps.ie/">
                    gps trackers
                </a>
            </iframe>
        </div>
    </section>
  )
}

export default Map