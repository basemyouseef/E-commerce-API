import React, { useEffect, useState } from 'react'
import './CatogryPage.css'
import { useParams } from 'react-router-dom'
import Product from '../../Componetes/SlideProduct/Product'
import Loader from '../Home/Loader'
import PageMotion from '../../Componetes/PageMotion'
function CatogryPage() {
  const [catogryProduct, setCatogryProduct] = useState([])
  const { catogry } = useParams()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    fetch(`https://dummyjson.com/products/category/${catogry}`)
      .then(res => res.json())
      .then(data => setCatogryProduct(data.products || []))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false))
  }, [catogry])

  return (
         <PageMotion type='bounce'>
    <div className="catogry_Page">
      <div className="container">
        <div className="top_slideP">
          <div className="hover">
            <h2 className="title" data-text="Awesome">
              <span className="actual-text">&nbsp;{catogry} : {catogryProduct.length}&nbsp;</span>
              <span aria-hidden="true" className="hover-text">&nbsp;{catogry}&nbsp;</span>
            </h2>
          </div>
          <p>Shopping Know</p>
        </div>

        <div className="products">
          {loading ? (
            <Loader />
          ) : catogryProduct.length > 0 ? (
            catogryProduct.map((item, index) => (
              <div className="product-card">
              <Product key={index} item={item} />

              </div>
            ))
          ) : (
            <p>لا توجد منتجات في هذا التصنيف</p>
          )}
        </div>
      </div>
    </div>
         </PageMotion>

  )
}

export default CatogryPage
