import React, { useState } from "react";
import ProductA from "./components/ProductA";
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
import { Routes, Route } from "react-router-dom"
import ProductDetails from "./components/ProductDetails"
import NotFound from "./components/NotFound";

function App() {

const [cart, setCart] = useState({});


  function handleAddToCart(productId, count){
    
    const oldCount = cart[productId] || 0;
    
    setCart({ ...cart, [productId]: oldCount + count});
  
  } 

 const totalCount = Object.keys(cart).reduce(function (previous, current) {
   return previous + cart[current];
  }, 0);

  return (
    <>
      <NavBar productCount={totalCount}/>

      <div className=" bg-gray-200 h-screen overflow-scroll flex flex-col">
 
        <Routes>
          <Route index element={<ProductA />}></Route>
          <Route path="/products/:id"
           element={<ProductDetails onAddToCart={handleAddToCart} />}>
          </Route>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
        

      </div>




      <Footer />

    </>
  );
}
export default App;






