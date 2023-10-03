import React from 'react';
import { BsCartFill } from 'react-icons/bs';

function NavBar({productCount}) {
  return (
    <>
    
      <div className="bg-white w-full h-20 flex justify-between items-center ">
      <img className="h-15 w-60 p-5 pl-8 cursor-pointer"  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7TgcOA5-3fQH5lTcpUpVcDg39P3Hh-hSDQGnr1LsF&s" />


      <div className=' w-16 h-16 mx-20 justify-center items-center flex '>
       <h1 className="text-gray-400 text-5xl"><BsCartFill/></h1>
       <span className='absolute text-white  '>{productCount}</span>
      </div> 
     
      </div>
   
    </>
  );
}

export default NavBar;