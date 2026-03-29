import React, { useContext, useEffect, useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import './Cart.css';
import { CartContext } from '../../Componetes/CartContext/CartContext';
import SlideProduct from '../../Componetes/SlideProduct/SlideProduct';
import Loader from '../Home/Loader';
import PageMotion from '../../Componetes/PageMotion';

function Cart() {
  const { cartItem, IncrassQuantity, derassQuantity, removeCart } = useContext(CartContext);
  const Total = cartItem.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 100);
    return () => clearTimeout(timer); // تنظيف التايمر
  }, []);

  return (
    <PageMotion type='bounce'>
  <div className="CheckOut">
      <div className="MyOrder">
        <div className="Cart_order">
                  <h1>My order</h1>
        <div className="items">
          {cartItem.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            cartItem.map((item) => (
              <div className="cart_item" key={item.id}>
                <div className="images_name">
                  <div className="image_item">
                    {item.images?.length > 0 && (
                      <img src={item.images[0]} alt={item.title} />
                    )}
                  </div>
                  <div className="content">
                    <h4>{item.title}</h4>
                    <p>${item.price.toFixed(2)}</p>
                    <div className="quntity_control">
                      <button onClick={() => IncrassQuantity(item.id)}>+</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => derassQuantity(item.id)}>-</button>
                    </div>
                  </div>
                </div>
                <button className="delet_icon" onClick={() => removeCart(item.id)}>
                  <DeleteIcon />
                </button>
              </div>
            ))
          )}
        </div>
        <div className="buttom_total">
          <div className="shop_table">
            <p>total</p>
            <span>${Total.toFixed(2)}</span>
          </div>
          <div className="buttom_dev">
            <button type="submit">Place Order</button>
          </div>
        </div>
        </div>
      </div>
      {loading ? <Loader /> :
      <SlideProduct data={cartItem} title="Recommended Products" />}

    </div>
    </PageMotion>
  
  );
}

export default Cart;
