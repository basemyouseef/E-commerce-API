import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./SwiperSlider.css";
import banner1 from "../../img/banner_Hero1.jpg";
import banner2 from "../../img/banner_Hero2.jpg";
import banner3 from "../../img/banner_Hero3.jpg";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

function SwiperSlider() {
  return (
    <>
      <div className="hero">
        <div className="container">

          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper">
                 {/* slid 1 */}

            <SwiperSlide>
              <div className="content">
                <h4>Introducing</h4>
                <h3>
                  Microsoft Xbox <hr />
                  360 Controller
                </h3>
                <p>Windows XP/10/7/8, PS3, TV</p>
                <Link className="btn">Shop Now</Link>
              </div>
              <img src={banner1} alt="banner" />
            </SwiperSlide>
{/* slid 2 */}
            <SwiperSlide>
              <div className="content">
                <h4>Introducing</h4>
                <h3>
                  Microsoft Xbox <hr />
                  360 Controller
                </h3>
                <p>Windows XP/10/7/8, PS3, TV</p>
                <Link className="btn">Shop Now</Link>
              </div>
              <img src={banner2} alt="banner" />
            </SwiperSlide>
{/* slid3 */}
            <SwiperSlide>
              <div className="content">
                <h4>Introducing</h4>
                <h3>
                  Microsoft Xbox <hr />
                  360 Controller
                </h3>
                <p>Windows XP/10/7/8, PS3, TV</p>
                <Link className="btn">Shop Now</Link>
              </div>
              <img src={banner3} alt="banner" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default SwiperSlider;
