import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
const Slide = () => {
  return (
    <div style={{height:"100%",width:"100%"}}>
      <Carousel style ={{height:"70% !important"}} >
        <div>
          <img className=""   src="https://cdn.pixabay.com/photo/2015/07/29/22/56/taj-mahal-866692__480.jpg" />
           <div className="relative top-10 left-10">
               Forts and Palaces
           </div>
        </div>
        <div>
          <img  src="https://cdn.pixabay.com/photo/2015/07/29/22/56/taj-mahal-866692__480.jpg" />
    
        </div>
        <div>
          <img src="https://cdn.pixabay.com/photo/2015/07/29/22/56/taj-mahal-866692__480.jpg" />
        </div>
      </Carousel>
    </div>
  )
}

export default Slide