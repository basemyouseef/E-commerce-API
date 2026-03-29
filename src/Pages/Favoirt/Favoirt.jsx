import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Product from '../../Componetes/SlideProduct/Product'
import Loader from '../Home/Loader'
import PageMotion from '../../Componetes/PageMotion'
import { CartContext } from '../../Componetes/CartContext/CartContext'

function Favoirt() {
  const [loading, setLoading] = useState(true)
const{cartIFav}=useContext(CartContext)

  return (
     <PageMotion type='bounce'>
    <div className="catogry_Page">
      <div className="container">
        <div className="top_slideP">
          <div className="hover">
            <h2 className="title" data-text="Awesome">
              <span className="actual-text">&nbsp;cartIFav: {cartIFav.length}&nbsp;</span>
              <span aria-hidden="true" className="hover-text">&nbsp;cartIFav&nbsp;</span>
            </h2>
          </div>
          <p>Shopping Know</p>
        </div>

        <div className="products">
            {cartIFav.map((item,index)=>(
       <div className="product-card">
        <Product key={index} item={item}/>
              </div>
            ))}
       

        </div>
      </div>
    </div>
    </PageMotion>
  )
}

export default Favoirt
