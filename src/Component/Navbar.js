import React from 'react'
import incr from './incr.png'
const Navbar = () => {
  return (
      <div className="" >
    <nav className='top-0  sticky flex  shadow-md  mx-auto  px-16 pt-8 '>
            

    <div className="flex gap-4 container justify-start p-0.5  left-0   ">
    <div className="text-2xl absolute left-3 sm:hidden">
        <a href="">
        <i className="fas fa-bars"></i>
        </a>
        

    </div>
    <div className="font-serif  relative" style={{width:"170px"}}>
     <img src={incr}  alt="" />

    </div>
       

    </div>
    <div className="three flex text-lg font-light">
    <div className=" hidden  lg:justify-center lg:flex  mx-3 font-serif p-0.5 ">
    Destinations
    </div>
    <div className=" hidden  lg:justify-center lg:flex mx-3 font-serif p-0.5 ">
    Experience
    </div>
    <div className=" hidden  lg:justify-center lg:flex  mx-3 font-serif p-0.5 ">
    Travel
    </div>
    </div>

    <div className="flex container  justify-end  gap-4 absolute lg:relative right-0   ">
        <div>
            <ul className='flex gap-4  '>
                <li className='p-0.5 font-medium hidden cursor-pointer sm:flex'><a to="gallery" >1800 11-1363</a> </li>
               
            </ul>
        </div>
        <div>

       
        


        </div>
    </div>
    

</nav>
       
    </div>
  )
}

export default Navbar