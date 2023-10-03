import React from 'react';

function Sorting() {
  return (
    <div class=" justify-end border-2  bg-gray-300 right-20 mt-10 z-50 absolute">

      <select class="text-md" placeholder="Default Sorting">
        <label>cat.</label>
        <option>Default Sort</option>
        <option>Sort by Title</option>
        <option>Sort by Price: Low to High</option>
        <option>Sort by Price: High to Low</option>
      </select>
    </div>
  );


}

export default Sorting;