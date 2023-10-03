import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getProductData } from './api';
import { HiArrowNarrowLeft, HiArrowNarrowRight } from "react-icons/hi";
import Loading from './Loading';
import NotFound from './NotFound';

function ProductDetails({onAddToCart}) {
     const id = (+useParams().id);
     const [product, setProduct] = useState();
     const[loading,setLoading]=useState(true);
      const [count,setCount] = useState(1);


     useEffect(
          function () {
               const p = getProductData(id);

               p.then(function (product){
                    setProduct(product);
                    setLoading(false);
               });

               p.catch(function(error) {
                    setLoading(false);
               });         
        },
         [id]
      );

      function handleCountChange(event) {
          setCount(+event.target.value);
      }

      function handleButtonClick (){
          onAddToCart(id,count);

      }

      if (loading){
          return <Loading/>;
      }

      if (!product) {
          return <NotFound/>
      }

     return (

          <>
          <div className="p-2 mac-w-6xl  bg-white mx-36 my-16">
               <div>
                    <Link className='h-10 w-10 text-lime-500' to="/">
                         <HiArrowNarrowLeft className="text-3xl" />
                    </Link>
               </div>

               <div className="p-5  flex  mx-16 ">

                    <div className=" w-96 h-96">
                    
                    

                    <div className="relative w-96 h-96 ">
                    <img className="" alt={product.title} src={product.thumbnail}  />
                    </div>
                    </div>

                    <div className=" flex flex-col" >

                         <h1 className="text-5xl mx-10 text-gray-500 cursor-pointer">{product.title}</h1>

                         <h1 className="text-4xl mx-10 pt-10  md:font-bold text-gray-600">$ {product.price}</h1>

                         <p className="text-3xl text-gray-400 mx-10 pt-10 cursor-pointer" >{product.description}</p>

                         <div className="p-10">
                              <input value={count} onChange={handleCountChange} type="number" className="border-2 p-3 rounded box-border-md h-15 w-20  "></input>

                              <button onClick={handleButtonClick} className="ml-2 cursor-pointer border border-lime-500 p-4 rounded-md px-20 hover:bg-lime-500 hover:text-white">ADD TO CART</button>
                         </div>
                         </div>
                    </div>
               


               
<div className='flex justify-between'>
               { id > 1 && (
               <Link className='h-10 w-10  flex item-center' to={"/products/" + (id - 1)} >
               <HiArrowNarrowLeft className="text-3xl text-lime-500" />
                    </Link>
               )}

                    <Link className='h-10 w-10  flex item-center' to={"/products/" + (id + 1)} >
                          <HiArrowNarrowRight className="text-3xl text-lime-500" />
                    </Link>
</div>     
</div>

          </>   
     );
     
}

export default ProductDetails;
