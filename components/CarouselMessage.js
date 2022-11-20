import React from "react";
import Image from "next/image";

//ANIMATIONS
import { AnimationOnScroll } from "react-animation-on-scroll";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

//images
import bookmassage1 from "../imgs/swedish.png";
import bookmassage2 from "../imgs/deeptissue.png";
import bookmassage3 from "../imgs/parental.png";

function CarouselMessage() {
  return (
    <>
      <div className="max-w-[85.83%] mx-auto">
        <AnimationOnScroll duration={2} animateIn="animate__fadeIn">
          <h2 className="font-Domine text-[#2A2A2A] font-medium text-[2.5rem] sm:text-[4rem] sm:leading-[5.313rem] mt-[10.75rem] max-w-[35.625rem]">
            Book Massage On Demand® Now
          </h2>
          <p className="font-Poppins text-[#969696] text-sm lg:text-base mt-4 sm:mt-0">
            Start by choosing your massage technique.
          </p>
        </AnimationOnScroll>

        <div className="bookMassageCardsContainer mt-[5.563rem]">
          <Swiper
            navigation={true}
            modules={[Navigation]}
            slidesPerView={3}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              290: {
                slidesPerView: 1,
                spaceBetween: 0,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 36,
              },
              1280: {
                slidesPerView: 3,
                spaceBetween: 36,
              },
            }}
            className="mySwiper"
          >
            <SwiperSlide>
              <AnimationOnScroll duration={2} animateIn="animate__fadeIn">
                <div className="card">
                  <Image src={bookmassage1} alt="Main Logo" />
                  <h3 className="font-Domine font-medium text-[2rem] lg:text-[2.5rem] text-[#2A2A2A] mt-4">
                    Swedish
                  </h3>
                  <p className="font-Poppins text-[#969696] text-sm lg:text-base max-w-[17.938rem] mt-[0.62rem]">
                    Book an on-demand massage at home, in your hotel room, or at
                    your office, from our app or zeel.com.
                  </p>
                </div>
              </AnimationOnScroll>
            </SwiperSlide>
            <SwiperSlide>
              <AnimationOnScroll
                duration={2}
                delay={500}
                animateIn="animate__fadeIn"
              >
                <div className="card">
                  <Image src={bookmassage2} alt="Main Logo" />
                  <h3 className="font-Domine font-medium text-[2rem] lg:text-[2.5rem] text-[#2A2A2A] mt-4">
                    Deep Tissue
                  </h3>
                  <p className="font-Poppins text-[#969696] text-sm lg:text-base max-w-[17.938rem] mt-[0.62rem]">
                    Book an on-demand massage at home, in your hotel room, or at
                    your office, from our app or zeel.com.
                  </p>
                </div>
              </AnimationOnScroll>
            </SwiperSlide>
            <SwiperSlide>
              <AnimationOnScroll
                duration={2}
                delay={1000}
                animateIn="animate__fadeIn"
              >
                <div className="card">
                  <Image src={bookmassage3} alt="Main Logo" />
                  <h3 className="font-Domine font-medium text-[2rem] lg:text-[2.5rem] text-[#2A2A2A] mt-4">
                    Prenatal
                  </h3>
                  <p className="font-Poppins text-[#969696] text-sm lg:text-base max-w-[17.938rem] mt-[0.62rem]">
                    Book an on-demand massage at home, in your hotel room, or at
                    your office, from our app or zeel.com.
                  </p>
                </div>
              </AnimationOnScroll>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card">
                <Image src={bookmassage1} alt="Main Logo" />
                <h3 className="font-Domine font-medium text-[2rem] lg:text-[2.5rem] text-[#2A2A2A] mt-4">
                  Sports
                </h3>
                <p className="font-Poppins text-[#969696] text-sm lg:text-base max-w-[17.938rem] mt-[0.62rem]">
                  Book an on-demand massage at home, in your hotel room, or at
                  your office, from our app or zeel.com.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card">
                <Image src={bookmassage2} alt="Main Logo" />
                <h3 className="font-Domine font-medium text-[2rem] lg:text-[2.5rem] text-[#2A2A2A] mt-4">
                  Sleep
                </h3>
                <p className="font-Poppins text-[#969696] text-sm lg:text-base max-w-[17.938rem] mt-[0.62rem]">
                  Book an on-demand massage at home, in your hotel room, or at
                  your office, from our app or zeel.com.
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default CarouselMessage;
