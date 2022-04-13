import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const breakPoints = [
    { width: 1, divsToShow: 1 },
    { width: 550, divsToShow: 2 },
    { width: 768, divsToShow: 3 },
    { width: 1200, divsToShow: 4 },
  ];
const Home2 = () => {
    
  return (
    <div className="relative ">
      <div className=" relative text-center font-semibold text-3xl top-8">
        Most Famous In India
      </div>
      <div className=" justify-center flex relative top-20">
        <div className=" relative my-4 border-2 border-white rounded-l-lg  shadow-xl " style={{width:"600px"}} >
          <div className=" relative right-1 top-4 mx-2 font-semibold text-3xl">Taj mahal</div>
          <div className="relative right-0 top-10 px-10 py-3">
            Mughal emperor Shah Jahan, the creator of the Taj Mahal, said that
            the beauty of the monument made “the sun and the moon shed tears
            from their eyes”. It has also been described as a “teardrop on the
            cheek of eternity” by Nobel laureate Rabindranath...
          </div>
        </div>
        <div className=" rounded-lg relative my-4 left-0 border-2 mx-2 text-xl border-white shadow-xl h-72 w-96" >
          <img
            className="h-72 w-96 rounded-r-lg shadow-xl  " 
            src="https://cdn.pixabay.com/photo/2015/07/29/22/56/taj-mahal-866692__480.jpg"
          />{" "}
        </div>
      </div>
      <div className=" flex justify-center">
      <div className=" relative top-40 border-2 justify-center border-black " style={{width:"50%", height:"100px"}}>
        <Carousel >
          <div className=" h-10 border-black ">
          one
          </div>
          <div className=" h-10 border-black ">One</div>
          
        </Carousel>
       
      </div>
      </div>
      <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
    </div>
  );
};

export default Home2;