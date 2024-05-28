import React from 'react'

const SmallInfo = ({sku, date}) => {
  return (
    <div className="flex flex-col gap-2">
    <p className="flex flex-row items-center text-xl font-montserrat">
      <span className="font-bold font-montserrat pr-1 ">
        SKU: 
      </span>
      {sku}
    </p>
    <p className="flex flex-row items-center text-xl font-montserrat">
      <span className="font-bold font-montserrat pr-1 ">
        RELEASE DATE: 
      </span>
      {date}  
    </p>
  </div>
  )
}

export default SmallInfo
