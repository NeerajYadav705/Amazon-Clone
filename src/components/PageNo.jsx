import React from 'react';


function PageNo() {
  return (
    <>
      <div className=" flex space-x-1 pl-20 mb-20">

        <div className=" text-orange-600 border border-orange-600 w-5 h-5 flex justify-center items-center hover:bg-orange-600 hover:text-white cursor-pointer">
          <h1 className="relative ">1</h1>



        </div>

        <div className="  text-orange-600 border border-orange-600 w-5 h-5 flex justify-center items-center hover:bg-orange-600 hover:text-white cursor-pointer">
          <h1 className="relative ">2</h1>
        </div>

        <div className=" h-5 justify-center items-center text-orange-600 border border-orange-600 flex  hover:bg-orange-600 hover:text-white cursor-pointer px-1"><h1>Next</h1>

        </div>

      </div>

    </>
  );


}

export default PageNo;