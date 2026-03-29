import React, { useState, useEffect, useContext } from "react";
import {  Link, useParams } from "react-router-dom";
import Loader from "../Home/Loader";
import "./Detailes.css";
import SlideProduct from "../../Componetes/SlideProduct/SlideProduct";
import { CartContext } from "../../Componetes/CartContext/CartContext";
import toast from "react-hot-toast";
import PageMotion from "../../Componetes/PageMotion";
function Detalies() {
  const [product, setProduct] = useState(null);
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [relatedProduct, setrelatedProduct] = useState([]);
  const [loadingCatogry, setLoadingCatogry] = useState(true);
  const { cartItem, AddToCart } = useContext(CartContext);
const isInCart = product 
  ? cartItem.some(i => i.id === product.id) 
  : false;
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`https://dummyjson.com/products/${id}`);
        const data = await res.json();
        setProduct(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProduct();
  }, [id]);
  console.log(product);

  useEffect(() => {
    if (!product) return;
    fetch(`https://dummyjson.com/products/category/${product.category}`)
      .then((res) => res.json())
      .then((data) => {
        setrelatedProduct(data.products);
      })
      .catch((error) => console.error(error))
      .finally(() => setLoadingCatogry(false));
  }, [product?.category]);

  if (loading) {
    return <Loader />;
  }

  if (!product) {
    return <p>Product not found</p>;
  }
  const handleAddToCart = () => {
    AddToCart(product);
 toast.success(
    <div className="toast_wrapper">
      <img
        src={product.images[0]}
        alt={product.title}
        className="toast_img"
      />
      <div className="toast_content">
        <strong>{product.title}</strong> added to cart
        <Link to="/Cart">
          <button className="toast_btn">View Cart</button>
        </Link>
      </div>
    </div>,
{duration:3500}
  );
  };
  return (
        <PageMotion type="scale" key={id} >

    <div>
      <div className="item_details">
        <div className="container">
          {/* صور المنتج */}
          <div className="imgs_item">
            <div className="big_img">
              <img id="big_img" src={product.images[0]} alt={product.title} />
            </div>

            <div className="sm_img">
              {product.images.map((img, index) => (
                <div className="img_div_sm" key={index}>
                  <img
                    src={img}
                    onClick={() =>
                      (document.getElementById("big_img").src = img)
                    }
                  />
                </div>
              ))}
            </div>
          </div>

          {/* تفاصيل المنتج */}
          <div className="details_item">
            <h1 className="name">{product.title}</h1>
            <p className="price">💲 {product.price}</p>
            <h5>
              Availability:{" "}
              <span>{product.availabilityStatus || "In stock"}</span>
            </h5>
            <h5 className="desc">
              Brand: <span>{product.brand}</span>
            </h5>
            <p>
              Description: <span>{product.description}</span>
            </p>
            <h5 className="stock">
              <span> Hurry Up! Only {product.stock} products left</span>
            </h5>
    <div 
  className={`btn_cartd ${isInCart ? "in-cart" : ""}`} 
  onClick={!isInCart ? handleAddToCart : undefined}
>
  <button 
    className="btn add-to-cart" 
  
  >
    {isInCart ? "In Cart ✅" : "Add to Cart 🛒"}
  </button>
</div>
          </div>
        </div>
      </div>

      {loadingCatogry ? (
        <Loader />
      ) : (
        <SlideProduct
         key={product.category}
          data={relatedProduct}
          title={product.category.replace('-', ' ')}
        />
      )}
    </div>
        </PageMotion>


  );
}

export default Detalies;
