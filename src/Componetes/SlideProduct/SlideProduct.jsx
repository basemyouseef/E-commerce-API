import React from "react";
import Product from "./Product";
import "./SlideProduct.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import PageMotion from "../PageMotion";

function SlideProduct({ data, title  }) {
  console.log("the data id :=", data);
  return (
    <PageMotion type="slideRight">
    <div className="SlideProduct">
      <div className="container">
        <div className="top_slideP">
          <div className="hover">
            <h2 className="title" data-text="Awesome">
              <span className="actual-text">&nbsp;{title}&nbsp;</span>
              <span aria-hidden="true" className="hover-text">&nbsp;{title}&nbsp;</span>
            </h2>
          </div>
          <p>Shopping Know</p>
        </div>

        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          centeredSlides={false}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {data.map((item) => (
            <SwiperSlide key={item.id}>
              <Product item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
    </PageMotion>

  );
}

export default SlideProduct;
