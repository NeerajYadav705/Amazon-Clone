import React from 'react';
import { Link } from "react-router-dom";

function Product({ title, price, category, thumbnail, Rating, id }) {

  return (
    <>
      <div className=''>
        <div className="w-full h-60"><img className='w-full h-full object-cover cursor-pointer' src={thumbnail} />
        </div>
        <div className='p-3'>
          <h1 className='text-lime-700'>{category}</h1>
          <h1 className='font-semibold text-2xl cursor-pointer'>{title}</h1>
          <p className='text-lime-500'>☆☆☆☆☆{Rating}</p>
          <p className='font-bold'>$ {price}</p>

          <Link className='border border-lime-500 rounded-sm px-4 hover:bg-lime-500 hover:text-white' to={"/products/" + id}>
            Show Details
          </Link>
        </div>

      </div>
    </>
  )
};

export default Product;










