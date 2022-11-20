import React from "react";

//ANIMATIONS
import { AnimationOnScroll } from "react-animation-on-scroll";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import { Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

function Reviews() {
  return (
    <>
      <div id="review" className="containerReivew ml-8 sm:ml-[6.375rem]">
        <AnimationOnScroll duration={2} animateIn="animate__fadeIn">
          <h2 className="font-Domine text-[#2A2A2A] font-medium text-[2.5rem] sm:text-[4rem] sm:leading-[5.313rem] mt-[10rem] max-w-[47.188rem] mb-[4rem]">
            What our customers say about EDEN SPA
          </h2>
        </AnimationOnScroll>
        <AnimationOnScroll duration={2} animateIn="animate__fadeInRight">
          <Swiper
            slidesPerView={3}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              290: {
                slidesPerView: 1,
                spaceBetween: 200,
              },
              600: {
                slidesPerView: 2,
                spaceBetween: 350,
              },

              1024: {
                slidesPerView: 2,
                spaceBetween: 75,
              },
              1280: {
                slidesPerView: 3,
                spaceBetween: 280,
              },
            }}
            modules={[Pagination, Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="cardReview w-[29.875rem] h-[15.125rem]">
                <p className="font-Poppins text-base font-medium text-[#2A2A2A] italic mt-[2.563rem] max-w-[26.125rem] mx-auto">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam
                  consectetur laoreet a neque. Vestibulum eget ipsum tortor nec
                  aliquet nullam mauris sagittis, pulvinar.
                </p>
                <p className="font-Poppins text-lg font-bold text-[#2A2A2A] mt-3 max-w-[26.125rem] mx-auto">
                  John Smith
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="cardReview w-[29.875rem] h-[15.125rem]">
                <p className="font-Poppins text-base font-medium text-[#2A2A2A] italic mt-[2.563rem] max-w-[26.125rem] mx-auto">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam
                  consectetur laoreet a neque. Vestibulum eget ipsum tortor nec
                  aliquet nullam mauris sagittis, pulvinar.
                </p>
                <p className="font-Poppins text-lg font-bold text-[#2A2A2A] mt-3 max-w-[26.125rem] mx-auto">
                  Mansur
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="cardReview w-[29.875rem] h-[15.125rem]">
                <p className="font-Poppins text-base font-medium text-[#2A2A2A] italic mt-[2.563rem] max-w-[26.125rem] mx-auto">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam
                  consectetur laoreet a neque. Vestibulum eget ipsum tortor nec
                  aliquet nullam mauris sagittis, pulvinar.
                </p>
                <p className="font-Poppins text-lg font-bold text-[#2A2A2A] mt-3 max-w-[26.125rem] mx-auto">
                  Sajib Smith
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="cardReview w-[29.875rem] h-[15.125rem]">
                <p className="font-Poppins text-base font-medium text-[#2A2A2A] italic mt-[2.563rem] max-w-[26.125rem] mx-auto">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam
                  consectetur laoreet a neque. Vestibulum eget ipsum tortor nec
                  aliquet nullam mauris sagittis, pulvinar.
                </p>
                <p className="font-Poppins text-lg font-bold text-[#2A2A2A] mt-3 max-w-[26.125rem] mx-auto">
                  Ammar UI
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="cardReview w-[29.875rem] h-[15.125rem]">
                <p className="font-Poppins text-base font-medium text-[#2A2A2A] italic mt-[2.563rem] max-w-[26.125rem] mx-auto">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam
                  consectetur laoreet a neque. Vestibulum eget ipsum tortor nec
                  aliquet nullam mauris sagittis, pulvinar.
                </p>
                <p className="font-Poppins text-lg font-bold text-[#2A2A2A] mt-3 max-w-[26.125rem] mx-auto">
                  Khizer UX
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="cardReview w-[29.875rem] h-[15.125rem]">
                <p className="font-Poppins text-base font-medium text-[#2A2A2A] italic mt-[2.563rem] max-w-[26.125rem] mx-auto">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam
                  consectetur laoreet a neque. Vestibulum eget ipsum tortor nec
                  aliquet nullam mauris sagittis, pulvinar.
                </p>
                <p className="font-Poppins text-lg font-bold text-[#2A2A2A] mt-3 max-w-[26.125rem] mx-auto">
                  Abdullah
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="cardReview w-[29.875rem] h-[15.125rem]">
                <p className="font-Poppins text-base font-medium text-[#2A2A2A] italic mt-[2.563rem] max-w-[26.125rem] mx-auto">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam
                  consectetur laoreet a neque. Vestibulum eget ipsum tortor nec
                  aliquet nullam mauris sagittis, pulvinar.
                </p>
                <p className="font-Poppins text-lg font-bold text-[#2A2A2A] mt-3 max-w-[26.125rem] mx-auto">
                  Lilbaby
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </AnimationOnScroll>
      </div>
    </>
  );
}

export default Reviews;
