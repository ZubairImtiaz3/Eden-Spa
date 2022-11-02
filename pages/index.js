import Image from "next/image";
import Link from "next/dist/client/link";

// Slider
import React, { useRef, useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { Autoplay } from "swiper";
import { Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Images
import fblogo from "../imgs/facebook.png";
import twitterlogo from "../imgs/twitter.png";
import linkdinlogo from "../imgs/linkdin.png";
import heroimg from "../imgs/heroimg.png";
import cardimg1 from "../imgs/book.png";
import cardimg2 from "../imgs/relax.png";
import cardimg3 from "../imgs/repeat.png";
import massage1 from "../imgs/massage1.png";
import massage2 from "../imgs/massage2.png";
import bookmassage1 from "../imgs/swedish.png";
import bookmassage2 from "../imgs/deeptissue.png";
import bookmassage3 from "../imgs/parental.png";
export default function Home() {
  return (
    <>
      {/* HEROSECTION */}

      <div className="bgHeroSection bg-[#F6F4F2] w-auto h-[53rem] sm:h-[43rem]">
        <div className="contentHero pt-[5.625rem] max-w-[85.83%] mx-auto">
          <div className="contentLeft">
            <div className="flex items-center space-x-8">
              <h1 className="font-Domine text-[#2A2A2A] font-medium text-[3.6rem] lg:text-[3.938rem] leading-[4.5rem] lg:leading-[5.313rem]">
                The Perfect
              </h1>
              <div className="lineHero relative -top-4 hidden sm:block"></div>
            </div>
            <div className="flex items-center space-x-0 sm:space-x-8 mt-[1rem]">
              <div className="lineHero relative -top-4 hidden sm:block"></div>
              <h1 className="font-Domine text-[#2A2A2A] font-medium text-[3.6rem] lg:text-[3.938rem] leading-[4.5rem] lg:leading-[5.313rem]">
                In-Home Massage
              </h1>
            </div>

            <div className="space-y-[3.438rem]">
              <p className="font-Poppins text-[#969696] text-base mt-7 max-w-[35.188rem]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                ipsum quis phasellus tincidunt commodo, mi turpis velit,
                sollicitudin. Sapien sed petra, vitae sodales in rhoncus ac.
              </p>
              <button className="navBtn lg:text-base">
                Make an appointment
              </button>
              <div className="socialIcons flex space-x-10">
                <Link href="/">
                  <Image src={twitterlogo} alt="twitterLogo" />
                </Link>
                <Link href="/">
                  <Image src={fblogo} alt="fbLogo" />
                </Link>
                <Link href="/">
                  <Image src={linkdinlogo} alt="linkdinLogo" />
                </Link>
              </div>
            </div>
          </div>
          <Image
            className="relative top-[-28.6rem] left-[40rem] hidden lg:block"
            src={heroimg}
            alt="fbLogo"
          />
        </div>
      </div>

      {/* CARDSSECTION */}

      <h2 className="font-Domine font-medium text-[2.5rem] lg:text-[4rem] mt-[6rem] max-w-[85.83%] mx-auto">
        How it works
      </h2>
      <div className="containerCard mt-12 flex max-w-[85.83%] mx-auto justify-between align-baseline flex-wrap space-y-12 xl:space-y-0">
        <div className="card">
          <Image src={cardimg1} alt="Main Logo" />
          <h3 className="font-Domine font-medium text-[2rem] lg:text-[2.5rem] text-[#2A2A2A] mt-6">
            Book
          </h3>
          <p className="font-Poppins text-[#969696] text-sm lg:text-base max-w-[17.938rem]">
            Book an on-demand massage at home, in your hotel room, or at your
            office, from our app or zeel.com.
          </p>
        </div>

        <div className="card">
          <Image src={cardimg2} alt="Main Logo" />
          <h3 className="font-Domine font-medium text-[2rem] lg:text-[2.5rem] text-[#2A2A2A] mt-6">
            Relax
          </h3>
          <p className="font-Poppins text-[#969696] text-sm lg:text-base max-w-[17.938rem]">
            Choose the massage type and the gender of your therapist, and he or
            she will arrive with a massage table.
          </p>
        </div>

        <div className="card">
          <Image src={cardimg3} alt="Main Logo" />
          <h3 className="font-Domine font-medium text-[2rem] lg:text-[2.5rem] text-[#2A2A2A] mt-6">
            Repeat
          </h3>
          <p className="font-Poppins text-[#969696] text-sm lg:text-base max-w-[17.938rem]">
            Book whenever you like, 8am to midnight, 365 days a year, and enjoy
            a 5-star experience every time.
          </p>
        </div>
      </div>

      {/* MASSAGESECTION */}

      <div className="massageContainer max-w-[85.83%] mx-auto space-y-[4.85rem] mt-[9.563rem]">
        <div className="flex items-center justify-center">
          <div className="contentLeft max-w-[36rem] space-y-[2.563rem]">
            <h2 className="font-Domine text-[#2A2A2A] font-medium text-[2.5rem] sm:text-[4rem] sm:leading-[5.313rem]">
              On-Demand Massage Made Simple
            </h2>
            <p className="font-Poppins text-[#969696] text-base">
              A Zeel in-home massage offers all the benefits of a spa experience
              with none of the travel, waiting, or logistics—and no need to call
              a babysitter. Whether you use massage for athletic recovery,
              relaxation, or pain relief, Zeel has the on-demand massage—and
              skilled massage therapists—for your needs. You choose the massage
              type, gender preference, location and time. Book on-demand with as
              little as an hour’s notice or up to 30 days in advance.
            </p>
            <button className="massageBtn lg:text-base">
              Make an appointment
            </button>
          </div>
          <Image className="hidden xl:block" src={massage1} alt="massagePic" />
        </div>
        <div className="flex items-center justify-center">
          <Image className="hidden xl:block" src={massage2} alt="massagePic" />
          <div className="contentLeft max-w-[36rem] space-y-[2.563rem]">
            <h2 className="font-Domine text-[#2A2A2A] font-medium text-[2.5rem] sm:text-[4rem] sm:leading-[5.313rem]">
              Your Trust is Our Highest Priority
            </h2>
            <p className="font-Poppins text-[#969696] text-base">
              As the industry leader in security, all professionals in the Zeel
              network are licensed, insured, and thoroughly vetted using our
              industry-leading security protocols. When you book a Zeel in-home
              massage, you will receive a confirmation with the therapist's full
              name and professional bio, so you always know who’s coming to your
              home. That’s just one reason we’re The Most Trusted Name in
              Massage®.
            </p>
            <button className="massageBtn">Make an appointment</button>
          </div>
        </div>
      </div>

      {/* BOOKSECTION */}

      <div className="max-w-[85.83%] mx-auto">
        <h2 className="font-Domine text-[#2A2A2A] font-medium text-[2.5rem] sm:text-[4rem] sm:leading-[5.313rem] mt-[10.75rem] max-w-[35.625rem]">
          Book Massage On Demand® Now
        </h2>
        <p className="font-Poppins text-[#969696] text-sm lg:text-base mt-4 sm:mt-0">
          Start by choosing your massage technique.
        </p>

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
            </SwiperSlide>
            <SwiperSlide>
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
            </SwiperSlide>
            <SwiperSlide>
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

      {/* REVIEWSECTION */}
      <div className="containerReivew ml-8 sm:ml-[6.375rem]">
        <h2 className="font-Domine text-[#2A2A2A] font-medium text-[2.5rem] sm:text-[4rem] sm:leading-[5.313rem] mt-[10rem] max-w-[47.188rem] mb-[4rem]">
          What our customers say about EDEN SPA
        </h2>
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
      </div>
    </>
  );
}
