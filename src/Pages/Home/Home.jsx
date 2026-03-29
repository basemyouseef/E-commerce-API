import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import SwiperSlider from "../../Componetes/SwiperSlider/SwiperSlider";
import SlideProduct from "../../Componetes/SlideProduct/SlideProduct";
import Loader from "./Loader";
import PageMotion from "../../Componetes/PageMotion";
import ProjectFooter from "../../Componetes/ProjectFooter/ProjectFooter";
function Home() {
  const categories = [
    "smartphones",
    "beauty",
    "laptops",
    "mens-watches",
    "womens-shoes",
    "sunglasses",
  ];

  const [products, setProducts] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const results = await Promise.all(
          categories.map(async (category) => {
            const res = await fetch(
              `https://dummyjson.com/products/category/${category}`
            );
            const data = await res.json();
            return { [category]: data.products };
          })
        );
        const productDetails = Object.assign({}, ...results);
        setProducts(productDetails);
      } catch (error) {
        console.log("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);
const animations = [
  { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 } }, // smartphones → Fade + Slide Up
  { initial: { opacity: 0, x: -50 }, whileInView: { opacity: 1, x: 0 } }, // beauty → Slide Left
  { initial: { opacity: 0, x: 50 }, whileInView: { opacity: 1, x: 0 } }, // laptops → Slide Right
  { initial: { scale: 0.9, opacity: 0 }, whileInView: { scale: 1, opacity: 1 } }, // mens-watches → Zoom In
  { initial: { rotate: -5, opacity: 0 }, whileInView: { rotate: 0, opacity: 1 } }, // womens-shoes → Rotate
  { initial: { y: -20, opacity: 0 }, whileInView: { y: 0, opacity: 1 } }, // sunglasses → Bounce-like
];

  return (
    <div>
      <div>
    
          <SwiperSlider />

        {loading ? (
          <Loader />
        ) : (
          categories.map((category, index) => (
            <motion.div
              key={category}
              initial={animations[index].initial}
              whileInView={animations[index].whileInView}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <SlideProduct
              key={index}
                data={products[category] || []}
                title={category}/>
            </motion.div>
          ))
        )}
      </div>
                <ProjectFooter/>

    </div>


  );
}

export default Home;
