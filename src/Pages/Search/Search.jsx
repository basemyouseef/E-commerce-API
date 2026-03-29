import React, { useEffect, useState } from "react";
import Product from "../../Componetes/SlideProduct/Product";
import Loader from "../Home/Loader";
import './SearchBar.css';
import { useLocation } from "react-router-dom";
import PageMotion from "../../Componetes/PageMotion";

function Search() {
  const location = useLocation(); 
  const query = new URLSearchParams(location.search).get("query"); 

  const [loading, setLoading] = useState(true);
  const [resultProduct, setResultProduct] = useState([]);

  useEffect(() => {
    setLoading(true);

    if (query) {
      fetch(`https://dummyjson.com/products/search?q=${query}`)
        .then((res) => res.json())
        .then((data) => {
          setResultProduct(data.products || []);
        })
        .catch((error) => {
          console.log("the error is", error);
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      setLoading(false);
      setResultProduct([]);
    }
  }, [query]);

  return (
    <PageMotion type="sSearch">
  <div className="my-Search">
      <div className="container">
        <div className="search">
          <div className="top_slideP-Search">
            <div className="Search-Top">
              <h2 className="title" data-text="Awesome">
                <span className="actual-text">
                  &nbsp;Results: {resultProduct.length}&nbsp;
                </span>
                <span aria-hidden="true" className="hover-text">
                  &nbsp;Results: {resultProduct.length}&nbsp;
                </span>
              </h2>
            </div>
            <p>Shopping Know</p>
          </div>
          <div>
<div className="product">
       {loading ? (
            <Loader />
          ) : resultProduct.length > 0 ? (
            resultProduct.map((item, index) => (
              
        <div className="product-card">
          <Product item={item} key={index} />
        </div>
            ))
          ) : (
            <p className="no-results">No results found for your search.</p>
          )}
</div>
          </div>

   
        </div>
      </div>
    </div>
    </PageMotion>

  );
}

export default Search;
