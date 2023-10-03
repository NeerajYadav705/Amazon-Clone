import React from "react";
import ProductList from "./ProductList";
import { useState } from "react";
import Loading from "./Loading";
import NoMatching from "./NoMatching";
import { getProductList } from "./api";
import { useEffect } from "react";



function ProductA() {

  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);

  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("default");


  useEffect(function () {
    const xyz = getProductList();

    const abc = xyz.then(function (products) {
      setProductList(products);
      setLoading(false);
      return products[0];
    });

  }, []);


  const data = productList.filter(function (item) {
    const lowerCaseTitle = item.title.toLowerCase();
    const lowerCaseQuery = query.toLowerCase();

    return lowerCaseTitle.indexOf(lowerCaseQuery) != -1;
  });

  if (sort == "price") {
    data.sort(function (x, y) {
      return x.price - y.price;
    });
  } else if (sort == "name") {
    data.sort(function (x, y) {
      return x.title < y.title ? -1 : 1;
    });
  }

  function handlequeryChange(event) {
    setQuery(event.target.value);
  }

  function handleSortChange(event) {
    setSort(event.target.value);
  }

  if (loading) {
    return <Loading />
  }

  return (
    <div className="p-2 mac-w-6xl  bg-white mx-8 my-16" >
      <input
        value={query}
        className="border border-black-300 rounded-md mb-2 m-4 ml-20"
        placeholder="Search"
        type="text"
        onChange={handlequeryChange}
      />

      <select value={sort} onChange={handleSortChange} className="border border-black-500 rounded-md mb-2">
        <option value={"default"}>Default sort</option>
        <option value={"name"}>sort by name</option>
        <option value={"price"}>sort by price</option>
      </select>

      {data.length > 0 && <ProductList products={data} />}
      {data.length == 0 && <NoMatching />}

    </div>
  );
}
export default ProductA;