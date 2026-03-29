import React, { useContext } from "react";
import "./SlideProduct.css";
import { HiHeart, HiShoppingCart } from "react-icons/hi";
import { Link } from "react-router-dom";
import { CartContext } from "../CartContext/CartContext";
import { FaCheck } from "react-icons/fa";
import toast from "react-hot-toast";
function Product({ item }) {
  const { cartItem, AddToCart, AddFavorit, removeFAv, cartIFav } = useContext(CartContext);

  const isInCart = cartItem.some((i) => i.id === item.id);
  const isInFav = cartIFav.some((i) => i.id === item.id);

  const handleAddToCart = (e) => {
    e.preventDefault();
    if (!isInCart) {
      AddToCart(item);
      toast.success(
        <div className="toast_wrapper">
          <img src={item.images[0]} alt={item.title} className="toast_img" />
          <div className="toast_content">
            <strong>{item.title}</strong> added to cart
            <Link to="/Cart">
              <button className="toast_btn">View Cart</button>
            </Link>
          </div>
        </div>,
        { duration: 3500 }
      );
    }
  };

const handFav = (e) => {
  e.preventDefault();
  if (isInFav) {
    removeFAv(item);
    toast.error(`${item.title} removed from Favorites`);
  } else {
    AddFavorit(item);
    toast.success(`${item.title} added to Favorites`);
  }
};

  return (
    <div className="products">
      <Link to={`/products/${item.id}`} className="card-3d">
        <div className="card-inner">
          {isInCart && (
            <span className="Stat_cart isIn-Cart">
              <FaCheck /> in cart
            </span>
          )}

          <div className="images_prodecut">
            <img src={item.images[0]} alt={item.title} className="card-img" />
          </div>

          <button
            className={`favorite-btn ${isInFav ? "isIn-Fav" : ""}`}
            onClick={handFav}
          >
            <HiHeart />
          </button>

          <button
            className={`cart-icon ${isInCart ? "in-Cart" : ""}`}
            onClick={handleAddToCart}
            disabled={isInCart}
          >
            <HiShoppingCart />
          </button>

          <div className="card-content">
            <p className="card-title">{item.title}</p>
            <p className="card-desc">{item.description}</p>

            <div className="stars">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="star" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 
                    1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 
                    0 1.371 1.24.588 1.81l-2.8 2.034a1 
                    1 0 00-.364 1.118l1.07 3.292c.3.921-.755 
                    1.688-1.54 1.118l-2.8-2.034a1 1 
                    0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 
                    1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 
                    1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>

            <div className="card-footer">
              <span className="price">${item.price}</span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Product;
