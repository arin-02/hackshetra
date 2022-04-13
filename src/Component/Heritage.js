import React from 'react'
import five from './five.jpeg'
import four from './four.jpeg'
import three from './three.jpeg'
import two from './two.jpeg'
import one from './one.jpeg'
export const Heritage = () => {
  return (
    <div>
    <div className="head flex my-2  text-4xl font-semibold justify-center">
        FAMOUS HERITAGE DESTINATIONS
    </div>
    <div className="all my-5 flex   gap-x-10 ">

        <div className="one w-full">
        <img src={one} alt="" />
        </div>

        <div className="one w-full">
        <img src={one} alt="" />
        </div>

        <div className="one w-full">
        <img src={one} alt="" />
        </div>
        

    </div>
    </div>
  )
}
