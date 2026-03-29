import { stringify } from "postcss";
import React, { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export default function CartProvider({ children }) {
  const [cartItem, SetCartItem] = useState(()=>{
    const saveCart = localStorage.getItem('cartItem');
    return saveCart ? JSON.parse(saveCart) : [];
  });
  const [cartIFav, SetFavItem] = useState(()=>{
    const saveFav=localStorage.getItem('cartIFav')
    return saveFav?JSON.parse(saveFav): []
  });

  const AddToCart = (item) => {
    SetCartItem((prev) => {
      if (prev.some((i) => i.id === item.id)) return prev;
      return [...prev, { ...item, quantity: 1 }];
    });
  };
  const IncrassQuantity = (id) =>{
    SetCartItem((prev)=>
    prev.map((item)=>
    item.id===id?{...item,quantity:item.quantity+1}:item
    )
    )
  }
  const derassQuantity  = (id) => {
    SetCartItem((prev)=>
    prev.map((item)=>
    item.id===id&&item.quantity>1?{...item,quantity:item.quantity-1}:item
    )
    )
  }
  const removeCart = (id) => {
    SetCartItem((prev)=>
    prev.filter((item)=>item.id!==id)
    )
  }
  useEffect(()=>{
    localStorage.setItem('cartItem',JSON.stringify(cartItem))
  },[cartItem])


  const AddFavorit = (item) => {
    SetFavItem((prev)=>{
        if(prev.some((i)=>i.id===item.id))return prev
        return [...prev,item]
    })
  };
const removeFAv = (item) => {
  SetFavItem(prev => prev.filter(i => i.id !== item.id));
};
  useEffect(()=>{
    localStorage.setItem('cartIFav',JSON.stringify(cartIFav))
  },[cartIFav])
  return (
    <CartContext.Provider
      value={{
        cartItem,
        SetCartItem,
        AddToCart,
        removeCart,
        IncrassQuantity,
        derassQuantity,
        cartIFav,
        AddFavorit,
        removeFAv
      }}>
      {children}
    </CartContext.Provider>
  );
}
