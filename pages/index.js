import Image from "next/image";
import Link from "next/dist/client/link";

// Slider
import React, { useRef, useState } from "react";

//ANIMATIONS
import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { Autoplay } from "swiper";
import { Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

//Accordian
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

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
import whyusvector from "../imgs/whyusvector.png";
import whyusicon1 from "../imgs/whyusicon1.png";
import whyusicon2 from "../imgs/whyusicon2.png";
import whyusicon3 from "../imgs/whyusicon3.png";
import provider1 from "../imgs/provider1.png";
import provider2 from "../imgs/provider2.png";
import provider3 from "../imgs/provider3.png";
import jobvector from "../imgs/Job.png";
import memberpic from "../imgs/memberpic.png";

//SCROLLTOTOP
import ScrollTop from "react-scrolltop-button";

export default function Home() {
  return (
    <>
      <ScrollTop
        text="^"
        distance={850}
        className="scroll-your-role"
        speed={1000}
        target={10}
        breakpoint={2560}
      />

      {/* HEROSECTION */}

      <div className="bgHeroSection bg-[#F6F4F2] w-auto h-[53rem] sm:h-[43rem]">
        <div className="contentHero pt-[5.625rem] max-w-[85.83%] mx-auto">
          <div className="contentLeft">
            <div className="flex items-center space-x-8">
              <h1 className="animate__animated animate__fadeInLeft animate__slow font-Domine text-[#2A2A2A] font-medium text-[3.6rem] lg:text-[3.938rem] leading-[4.5rem] lg:leading-[5.313rem]">
                The Perfect
              </h1>

              <div className="animate__animated animate__fadeIn animate__delay-2s lineHero relative -top-4 hidden sm:block"></div>
            </div>
            <div className="flex items-center space-x-0 sm:space-x-8 mt-[1rem]">
              <div className="animate__animated animate__fadeIn animate__delay-3s animate__faster lineHero relative -top-4 hidden sm:block"></div>
              <h1 className="animate__delay-1s animate__animated animate__fadeInRight animate__slow font-Domine text-[#2A2A2A] font-medium text-[3.6rem] lg:text-[3.938rem] leading-[4.5rem] lg:leading-[5.313rem]">
                In-Home Massage
              </h1>
            </div>

            <div className="space-y-[3.438rem]">
              <p className="animate__animated animate__fadeIn animate__slow animate__delay-3s	font-Poppins text-[#969696] text-base mt-7 max-w-[35.188rem]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                ipsum quis phasellus tincidunt commodo, mi turpis velit,
                sollicitudin. Sapien sed petra, vitae sodales in rhoncus ac.
              </p>
              <div>
                <Link href="Appointment">
                  <button className="animate__animated animate__fadeInUp animate__slow animate__delay-4s navBtn lg:text-base">
                    Make an appointment
                  </button>
                </Link>
              </div>
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
            className="heroImg animate__animated animate__fadeIn animate__slow animate__delay-4s relative top-[-28.6rem] left-[40rem] hidden xl:block"
            src={heroimg}
            alt="fbLogo"
          />
        </div>
      </div>

      {/* CARDSSECTION */}
      <AnimationOnScroll duration={2} animateIn="animate__fadeIn">
        <h2
          id="howitworks"
          className="font-Domine font-medium text-[2.5rem] lg:text-[4rem] mt-[6rem] max-w-[85.83%] mx-auto"
        >
          How it works
        </h2>
      </AnimationOnScroll>
      <div className="containerCard mt-12 flex max-w-[85.83%] mx-auto justify-between items-baseline flex-wrap space-y-12 xl:space-y-0">
        <AnimationOnScroll duration={1.5} animateIn="animate__fadeInUp">
          <div className="card">
            <Image className="howItWorkPic" src={cardimg1} alt="Main Logo" />
            <h3 className="font-Domine font-medium text-[2rem] lg:text-[2.5rem] text-[#2A2A2A] mt-6">
              Book
            </h3>
            <p className="font-Poppins text-[#969696] text-sm lg:text-base max-w-[17.938rem]">
              Book an on-demand massage at home, in your hotel room, or at your
              office, from our app or zeel.com.
            </p>
          </div>
        </AnimationOnScroll>
        <AnimationOnScroll
          duration={1.5}
          delay={500}
          animateIn="animate__fadeInUp"
        >
          <div className="card">
            <Image className="howItWorkPic" src={cardimg2} alt="Main Logo" />
            <h3 className="font-Domine font-medium text-[2rem] lg:text-[2.5rem] text-[#2A2A2A] mt-6">
              Relax
            </h3>
            <p className="font-Poppins text-[#969696] text-sm lg:text-base max-w-[17.938rem]">
              Choose the massage type and the gender of your therapist, and he
              or she will arrive with a massage table.
            </p>
          </div>
        </AnimationOnScroll>
        <AnimationOnScroll
          duration={1.5}
          delay={1000}
          animateIn="animate__fadeInUp"
        >
          <div className="card">
            <Image className="howItWorkPic" src={cardimg3} alt="Main Logo" />
            <h3 className="font-Domine font-medium text-[2rem] lg:text-[2.5rem] text-[#2A2A2A] mt-6">
              Repeat
            </h3>
            <p className="font-Poppins text-[#969696] text-sm lg:text-base max-w-[17.938rem]">
              Book whenever you like, 8am to midnight, 365 days a year, and
              enjoy a 5-star experience every time.
            </p>
          </div>
        </AnimationOnScroll>
      </div>

      {/* MASSAGESECTION */}

      <div
        id="blog"
        className="massageContainer max-w-[85.83%] mx-auto space-y-[4.85rem] mt-[9.563rem]"
      >
        <div className="flex items-center justify-center">
          <div className="contentLeft max-w-[36rem] space-y-[2.563rem]">
            <AnimationOnScroll duration={2} animateIn="animate__fadeIn">
              <h2 className="font-Domine text-[#2A2A2A] font-medium text-[2.5rem] sm:text-[4rem] sm:leading-[5.313rem]">
                On-Demand Massage Made Simple
              </h2>
            </AnimationOnScroll>
            <AnimationOnScroll
              duration={2}
              delay={300}
              animateIn="animate__fadeIn"
            >
              <p className="font-Poppins text-[#969696] text-base">
                A Zeel in-home massage offers all the benefits of a spa
                experience with none of the travel, waiting, or logistics—and no
                need to call a babysitter. Whether you use massage for athletic
                recovery, relaxation, or pain relief, Zeel has the on-demand
                massage—and skilled massage therapists—for your needs. You
                choose the massage type, gender preference, location and time.
                Book on-demand with as little as an hour’s notice or up to 30
                days in advance.
              </p>
            </AnimationOnScroll>
            <AnimationOnScroll duration={2} animateIn="animate__fadeInUp">
              <Link href="Appointment">
                <button className="massageBtn lg:text-base">
                  Make an appointment
                </button>
              </Link>
            </AnimationOnScroll>
          </div>
          <AnimationOnScroll
            duration={2}
            delay={1000}
            animateIn="animate__fadeInRight"
          >
            <Image
              className="hidden xl:block"
              src={massage1}
              alt="massagePic"
            />
          </AnimationOnScroll>
        </div>
        <div className="flex items-center justify-center">
          <AnimationOnScroll duration={2} animateIn="animate__fadeInLeft">
            <Image
              className="hidden xl:block"
              src={massage2}
              alt="massagePic"
            />
          </AnimationOnScroll>
          <div className="contentLeft max-w-[36rem] space-y-[2.563rem]">
            <AnimationOnScroll duration={2} animateIn="animate__fadeIn">
              <h2 className="font-Domine text-[#2A2A2A] font-medium text-[2.5rem] sm:text-[4rem] sm:leading-[5.313rem]">
                Your Trust is Our Highest Priority
              </h2>
            </AnimationOnScroll>
            <AnimationOnScroll
              duration={2}
              delay={300}
              animateIn="animate__fadeIn"
            >
              <p className="font-Poppins text-[#969696] text-base">
                As the industry leader in security, all professionals in the
                Zeel network are licensed, insured, and thoroughly vetted using
                our industry-leading security protocols. When you book a Zeel
                in-home massage, you will receive a confirmation with the
                therapist's full name and professional bio, so you always know
                who’s coming to your home. That’s just one reason we’re The Most
                Trusted Name in Massage®.
              </p>
            </AnimationOnScroll>
            <AnimationOnScroll
              duration={2}
              delay={300}
              animateIn="animate__fadeInUp"
            >
              <Link href="Appointment">
                <button className="massageBtn">Make an appointment</button>
              </Link>
            </AnimationOnScroll>
          </div>
        </div>
      </div>

      {/* BOOKSECTION */}

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

      {/* REVIEWSECTION */}
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

      {/* WHYUSSECTION */}
      <div className="contentWhyUs flex justify-center flex-col items-center">
        <AnimationOnScroll duration={2} animateIn="animate__fadeIn">
          <h2 className="font-Domine text-[#2A2A2A] font-medium text-[2.5rem] sm:text-[4rem] sm:leading-[5.313rem] text-center mt-[8.125rem]">
            Why choose EDEN SPA
          </h2>
        </AnimationOnScroll>
        <AnimationOnScroll duration={2} animateIn="animate__fadeInRight">
          <p className="font-Poppins text-[#969696] text-center text-sm lg:text-base max-w-[44.438rem] p-2 md:p-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ipsum
            quis phasellus tincidunt commodo.
          </p>
        </AnimationOnScroll>
      </div>
      <div className="containerWhyUS flex items-center xl:space-x-[6.375rem] justify-center max-w-[85.83%] mx-auto mt-20">
        <AnimationOnScroll
          duration={2}
          delay={300}
          animateIn="animate__fadeInLeft"
        >
          <div className="contentLeft">
            <Image
              className="hidden xl:block"
              quality={100}
              src={whyusvector}
              alt="Main Logo"
            />
          </div>
        </AnimationOnScroll>
        <div className="contentRight space-y-10">
          <AnimationOnScroll
            duration={2}
            delay={800}
            animateIn="animate__fadeIn"
          >
            <div className="content flex items-center space-x-[1.938rem]">
              <Image
                className="min-w-[3.875rem]"
                quality={100}
                src={whyusicon1}
                alt="Main Logo"
              />
              <div>
                <h3 className="font-Domine font-medium text-[1.75rem] text-[#2A2A2A]">
                  EDEN SPA comes to you - always
                </h3>
                <p className="font-Poppins text-[#969696] text-sm lg:text-base max-w-[25.875rem]">
                  Book an on-demand massage at home, in your hotel room, or at
                  your office, from our app or zeel.com.
                </p>
              </div>
            </div>
          </AnimationOnScroll>
          <AnimationOnScroll
            duration={2}
            delay={900}
            animateIn="animate__fadeIn"
          >
            <div className="content flex items-center space-x-[1.938rem]">
              <Image
                className="min-w-[3.875rem]"
                quality={100}
                src={whyusicon2}
                alt="Main Logo"
              />
              <div>
                <h3 className="font-Domine font-medium text-[1.75rem] text-[#2A2A2A]">
                  Easy app-based scheduling
                </h3>
                <p className="font-Poppins text-[#969696] text-sm lg:text-base max-w-[25.875rem]">
                  Book an on-demand massage at home, in your hotel room, or at
                  your office, from our app or zeel.com.
                </p>
              </div>
            </div>
          </AnimationOnScroll>
          <AnimationOnScroll
            duration={2}
            delay={900}
            animateIn="animate__fadeIn"
          >
            <div className="content flex items-center space-x-[1.938rem]">
              <Image
                className="min-w-[3.875rem]"
                quality={100}
                src={whyusicon3}
                alt="Main Logo"
              />
              <div>
                <h3 className="font-Domine font-medium text-[1.75rem] text-[#2A2A2A]">
                  Your safety comes first
                </h3>
                <p className="font-Poppins text-[#969696] text-sm lg:text-base max-w-[25.875rem]">
                  Book an on-demand massage at home, in your hotel room, or at
                  your office, from our app or zeel.com.
                </p>
              </div>
            </div>
          </AnimationOnScroll>
        </div>
      </div>

      {/* PROVIDERSECTION */}
      <div className="contentProvider flex justify-center flex-col items-center">
        <AnimationOnScroll duration={2} delay={500} animateIn="animate__fadeIn">
          <h2 className="font-Domine text-[#2A2A2A] font-medium text-[2.5rem] sm:text-[4rem] sm:leading-[5.313rem] text-center mt-[10.75rem]">
            Meet your providers
          </h2>
          <p className="font-Poppins text-[#969696] text-center text-sm lg:text-base max-w-[44.438rem] p-2 md:p-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ipsum
            quis phasellus tincidunt commodo.
          </p>
        </AnimationOnScroll>
      </div>

      <div className="containerProvider mt-[3.563rem] max-w-[85.83%] mx-auto flex items-center justify-center gap-[4.875rem] flex-wrap lg:space-y-0 lg:justify-between lg:flex-nowrap">
        <AnimationOnScroll duration={2} animateIn="animate__fadeIn">
          <div className="card space-y-[0.938rem]">
            <Image
              className="providerPics"
              quality={100}
              src={provider1}
              alt="Main Logo"
            />
            <div className="ml-[1.25rem] space-y-[0.938rem]">
              <h3 className="font-Poppins text-xl md:text-2xl font-medium">
                James Bennett
              </h3>
              <div className="flex items-center space-x-3">
                <Image quality={100} src={jobvector} alt="Main Logo" />
                <p className="font-Poppins text-sm md:text-base text-[#969696]">
                  App Developer
                </p>
              </div>
            </div>
          </div>
        </AnimationOnScroll>
        <AnimationOnScroll duration={2} delay={500} animateIn="animate__fadeIn">
          <div className="card space-y-[0.938rem]">
            <Image
              className="providerPics"
              quality={100}
              src={provider2}
              alt="Main Logo"
            />
            <div className="ml-[1.25rem] space-y-[0.938rem]">
              <h3 className="font-Poppins text-xl md:text-2xl font-medium">
                Kevin Al-Rizal
              </h3>
              <div className="flex items-center space-x-3">
                <Image quality={100} src={jobvector} alt="Main Logo" />
                <p className="font-Poppins text-sm md:text-base text-[#969696]">
                  Product designer
                </p>
              </div>
            </div>
          </div>
        </AnimationOnScroll>
        <AnimationOnScroll duration={2} delay={800} animateIn="animate__fadeIn">
          <div className="card space-y-[0.938rem]">
            <Image
              className="providerPics"
              quality={100}
              src={provider3}
              alt="Main Logo"
            />
            <div className="ml-[1.25rem] space-y-[0.938rem]">
              <h3 className="font-Poppins text-xl md:text-2xl font-medium">
                Logo Preneur
              </h3>
              <div className="flex items-center space-x-3">
                <Image quality={100} src={jobvector} alt="Main Logo" />
                <p className="font-Poppins text-sm md:text-base text-[#969696]">
                  Motion designer
                </p>
              </div>
            </div>
          </div>
        </AnimationOnScroll>
      </div>

      {/* MEMBERSECTION */}
      <div className="containerMember w-full max-h-max xl:h-[68.313rem] bg-[#F6F4F2] mt-[5.5rem] flex flex-col items-center justify-center gap-[1.875rem] pt-8 pb-8 xl:pt-0 xl-pb-0">
        <Image
          className="memberpic hidden md:block"
          quality={100}
          src={memberpic}
          alt="Main Logo"
        />

        <div className="flex flex-col items-center justify-center gap-[1.875rem] p-2 md:p-0">
          <AnimationOnScroll duration={2} animateIn="animate__fadeIn">
            <h2 className="font-Domine text-3xl lg:text-5xl font-medium max-w-[45.25rem] leading-[133%] text-center">
              A Membership Designed for Your Lifestyle
            </h2>
          </AnimationOnScroll>
          <AnimationOnScroll delay={200} animateIn="animate__fadeInRight">
            <p className="max-w-[35.188rem] text-[#969696] text-sm lg:text-base text-center">
              Zeel Members enjoy a monthly in-home massage at a preferred
              rate—the natural choice for making wellness a central to your
              daily routine.
            </p>
          </AnimationOnScroll>
          <AnimationOnScroll
            duration={2}
            delay={500}
            animateIn="animate__fadeInUp"
          >
            <button className="memberBtn">Become a member</button>
          </AnimationOnScroll>
        </div>
      </div>

      {/* FAQSECTION */}
      <div className="containerFaq max-w-[85.83%] mx-auto">
        <AnimationOnScroll duration={2} animateIn="animate__fadeIn">
          <h2 className="font-Domine text-[#2A2A2A] max-w-[39.188rem] font-medium text-[2.5rem] sm:text-[4rem] sm:leading-[5.313rem] mt-[6.75rem]">
            Frequently Asked Questions
          </h2>
        </AnimationOnScroll>
        <div className="faqs mt-[5.938rem] space-y-6">
          <AnimationOnScroll duration={2} animateIn="animate__fadeIn">
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <h3 className="font-Poppins text-[#2A2A2A] font-medium text-xl md:text-2xl md:mt-[0.625rem]">
                  Do I need to tip the massage therapist?
                </h3>
              </AccordionSummary>
              <div className="bg-[#2A2A2A] md:h-[5.438rem] md:mt-[0.625rem]">
                <AccordionDetails>
                  <p className="font-Poppins text-base md:text-xl text-white">
                    To make your home massage as convenient as possible, we
                    automatically include an 18% tip - no cash needed! To make
                    your home massage as convenient as possible, we
                    automatically include an 18% tip - no cash needed!
                  </p>
                </AccordionDetails>
              </div>
            </Accordion>
          </AnimationOnScroll>
          <AnimationOnScroll duration={2} animateIn="animate__fadeIn">
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <h3 className="font-Poppins text-[#2A2A2A] font-medium text-xl md:text-2xl mt-[0.625rem]">
                  Can I gift an in-home massage?
                </h3>
              </AccordionSummary>
              <div className="bg-[#2A2A2A] md:h-[5.438rem] md:mt-[0.625rem]">
                <AccordionDetails>
                  <p className="font-Poppins text-base md:text-xl text-white">
                    To make your home massage as convenient as possible, we
                    automatically include an 18% tip - no cash needed! To make
                    your home massage as convenient as possible, we
                    automatically include an 18% tip - no cash needed!
                  </p>
                </AccordionDetails>
              </div>
            </Accordion>
          </AnimationOnScroll>
          <AnimationOnScroll duration={2} animateIn="animate__fadeIn">
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <h3 className="font-Poppins text-[#2A2A2A] font-medium text-xl md:text-2xl md:mt-[0.625rem]">
                  Can I book with the same massage therapist again?
                </h3>
              </AccordionSummary>
              <div className="bg-[#2A2A2A] md:h-[5.438rem] md:mt-[0.625rem]">
                <AccordionDetails>
                  <p className="font-Poppins text-base md:text-xl text-white">
                    To make your home massage as convenient as possible, we
                    automatically include an 18% tip - no cash needed! To make
                    your home massage as convenient as possible, we
                    automatically include an 18% tip - no cash needed!
                  </p>
                </AccordionDetails>
              </div>
            </Accordion>
          </AnimationOnScroll>
          <AnimationOnScroll duration={2} animateIn="animate__fadeIn">
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <h3 className="font-Poppins text-[#2A2A2A] font-medium text-xl md:text-2xl mt-[0.625rem]">
                  When will I be charged?
                </h3>
              </AccordionSummary>
              <div className="bg-[#2A2A2A] md:h-[5.438rem] md:mt-[0.625rem]">
                <AccordionDetails>
                  <p className="font-Poppins text-base md:text-xl text-white">
                    To make your home massage as convenient as possible, we
                    automatically include an 18% tip - no cash needed! To make
                    your home massage as convenient as possible, we
                    automatically include an 18% tip - no cash needed!
                  </p>
                </AccordionDetails>
              </div>
            </Accordion>
          </AnimationOnScroll>
          <AnimationOnScroll duration={2} animateIn="animate__fadeIn">
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <h3 className="font-Poppins text-[#2A2A2A] font-medium text-xl md:text-2xl md:mt-[0.625rem]">
                  Will my therapist bring a massage table?
                </h3>
              </AccordionSummary>
              <div className="bg-[#2A2A2A] md:h-[5.438rem] md:mt-[0.625rem]">
                <AccordionDetails>
                  <p className="font-Poppins text-base md:text-xl text-white">
                    To make your home massage as convenient as possible, we
                    automatically include an 18% tip - no cash needed! To make
                    your home massage as convenient as possible, we
                    automatically include an 18% tip - no cash needed!
                  </p>
                </AccordionDetails>
              </div>
            </Accordion>
          </AnimationOnScroll>
          <AnimationOnScroll duration={2} animateIn="animate__fadeIn">
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <h3 className="font-Poppins text-[#2A2A2A] font-medium text-xl md:text-2xl mt-[0.625rem]">
                  Can I choose the gender of my therapist?
                </h3>
              </AccordionSummary>
              <div className="bg-[#2A2A2A] md:h-[5.438rem] md:mt-[0.625rem]">
                <AccordionDetails>
                  <p className="font-Poppins text-base md:text-xl text-white">
                    To make your home massage as convenient as possible, we
                    automatically include an 18% tip - no cash needed! To make
                    your home massage as convenient as possible, we
                    automatically include an 18% tip - no cash needed!
                  </p>
                </AccordionDetails>
              </div>
            </Accordion>
          </AnimationOnScroll>
        </div>
        <AnimationOnScroll duration={2} animateIn="animate__fadeInUp">
          <div className="flex justify-center items-center mt-[4.125rem]">
            <button className="faqBtn">View all FAQs</button>
          </div>
        </AnimationOnScroll>
      </div>

      {/* PRICINGSECTION */}
      <div className="containerPricing w-full max-h-max xl:h-[52.5rem] bg-[#F6F4F2] mt-[5.25rem] pb-8 xl:pb-0">
        <AnimationOnScroll duration={2} delay={500} animateIn="animate__fadeIn">
          <div className="contentPricing flex justify-center flex-col items-center">
            <h2 className="font-Domine text-[#2A2A2A] font-medium text-[2.5rem] sm:text-[4rem] sm:leading-[5.313rem] text-center pt-[5.938rem]">
              Our Pricing
            </h2>
            <p className="font-Poppins text-[#969696] text-center text-sm lg:text-base lg:ml-[25%] lg:mr-[25%] mt-2 p-2 md:p-0">
              Prices shown are for a 60-minute massage in your area.
            </p>
          </div>
        </AnimationOnScroll>
        <div className="cardsContainerPricing flex justify-center gap-10 mt-[4.125rem] flex-wrap">
          <AnimationOnScroll
            duration={2}
            delay={700}
            animateIn="animate__fadeInLeft"
          >
            <div className="cards w-[20rem] h-[22.375rem] bg-[#FFFFFF] flex flex-col items-center justify-center">
              <h3 className="font-Poppins text-xl md:text-2xl text-[#2A2A2A]">
                Single Appointment
              </h3>
              <h2 className="font-Poppins font-bold text-[2rem] md:text-[2.5rem] text-[#2A2A2A] mt-[1.813rem]">
                $159.00
              </h2>
              <p className="font-Poppins text-sm md:text-base font-light opacity-[0.8]">
                + tax and 18% tip = $194.78
              </p>
              <button className="pricingBtn text-base mt-[3.25rem]">
                book a massage
              </button>
            </div>
          </AnimationOnScroll>
          <AnimationOnScroll duration={2} animateIn="animate__fadeInUp">
            <div className="cards w-[20rem] h-[22.375rem] bg-[#EFBD69] flex flex-col items-center justify-center">
              <h3 className="font-Poppins text-xl md:text-2xl text-[#2A2A2A]">
                Member
              </h3>
              <h2 className="font-Poppins font-bold text-[2rem] md:text-[2.5rem] text-[#2A2A2A] mt-[1.813rem]">
                $149.00
              </h2>
              <p className="font-Poppins text-sm md:text-base font-light opacity-[0.8]">
                + tax and 18% tip = $182.53
              </p>
              <button className="pricingBtn2 text-base mt-[3.25rem]">
                Subscribe & save
              </button>
            </div>
          </AnimationOnScroll>
          <AnimationOnScroll
            duration={2}
            delay={700}
            animateIn="animate__fadeInRight"
          >
            <div className="cards w-[20rem] h-[22.375rem] bg-[#FFFFFF] flex flex-col items-center justify-center">
              <h3 className="font-Poppins text-xl md:text-2xl text-[#2A2A2A]">
                Member Plus
              </h3>
              <h2 className="font-Poppins font-bold text-[2rem] md:text-[2.5rem] text-[#EFBD69] mt-[1.813rem]">
                $135.00
              </h2>
              <p className="font-Poppins text-sm md:text-base font-light opacity-[0.8]">
                + tax and 18% tip = $165.38
              </p>
              <button className="pricingBtn text-base mt-[3.25rem]">
                Subscribe & save
              </button>
            </div>
          </AnimationOnScroll>
        </div>
      </div>

      {/* BEFOREFOOTER */}
      <AnimationOnScroll duration={2} animateIn="animate__fadeIn">
        <h2 className="font-Domine text-[#2A2A2A] font-medium text-[2.5rem] sm:text-[4rem] sm:leading-[5.313rem] text-center mt-[11.125rem]">
          Lets stay connected
        </h2>
        <p className="font-Poppins text-[#969696] text-center text-sm lg:text-base max-w-[47.563rem] lg:ml-[25%] lg:mr-[25%] mt-[2.938rem]">
          Book an on-demand massage at home, in your hotel room, or at your
          office, from our app or zeel.com.
        </p>
      </AnimationOnScroll>

      <div className="form flex items-center justify-center flex-wrap gap-[2.875rem] mt-[3.938rem] mb-[11.25rem]">
        <AnimationOnScroll duration={2} delay={300} animateIn="animate__fadeIn">
          <form action="">
            <input
              className="emailInput"
              type="text"
              placeholder="Enter Your Email Address"
            />
          </form>
        </AnimationOnScroll>
        <AnimationOnScroll
          duration={2}
          delay={400}
          animateIn="animate__fadeInRight"
        >
          <button className="subscribeBtn">Subscribe</button>
        </AnimationOnScroll>
      </div>
    </>
  );
}
