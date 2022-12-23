import React from "react";
import Link from "next/dist/client/link";

//Components
import Reviews from "../components/Reviews.js";
import Faq from "../components/Faq.js";
import Pricing from "../components/Pricing.js";
import BeMembers from "../components/BeMember.js";
import WhyUs from "../components/WhyUs.js";
import Blog from "../components/Blog.js";
import CarouselBook from "../components/CarouselMessage.js";
import Providers from "../components/Providers.js";

// //ANIMATIONS
import { AnimationOnScroll } from "react-animation-on-scroll";

// Images
import Image from "next/image";
import fblogo from "../imgs/facebook.png";
import twitterlogo from "../imgs/twitter.png";
import linkdinlogo from "../imgs/linkdin.png";
import heroimg from "../imgs/heroimg.png";
import cardimg1 from "../imgs/book.png";
import cardimg2 from "../imgs/relax.png";
import cardimg3 from "../imgs/repeat.png";

//SCROLLTOTOP
import ScrollTop from "react-scrolltop-button";

export default function Home() {
  return (
    <>
      <ScrollTop
        text="^"
        distance={850}
        className="react-scrolltop-button"
        speed={1000}
        target={10}
        breakpoint={2560}
      />

      {/* HEROSECTION */}

      <div className="bgHeroSection bg-[#F6F4F2] w-auto h-[53rem] sm:h-[43rem]">
        <div className="contentHero pt-[5.625rem] max-w-[85.83%] mx-auto">
          <div className="contentLeft">
            <div className="flex items-center space-x-8">
              <h1 className="animate__animated animate__fadeInLeft font-Domine text-[#2A2A2A] font-medium text-[3.6rem] lg:text-[3.938rem] leading-[4.5rem] lg:leading-[5.313rem]">
                The Perfect
              </h1>

              <div className="animate__animated animate__fadeIn animate__delay-1s lineHero relative -top-4 hidden sm:block"></div>
            </div>
            <div className="flex items-center space-x-0 sm:space-x-8 mt-[1rem]">
              <div className="animate__animated animate__fadeIn animate__delay-1s animate__slow lineHero relative -top-4 hidden sm:block"></div>
              <h1 className="animate__animated animate__slow animate__fadeInRight font-Domine text-[#2A2A2A] font-medium text-[3.6rem] lg:text-[3.938rem] leading-[4.5rem] lg:leading-[5.313rem]">
                In-Home Massage
              </h1>
            </div>

            <div className="space-y-[3.438rem]">
              <p className="animate__animated animate__fadeIn animate__delay-1s animate__slower font-Poppins text-[#969696] text-base mt-7 max-w-[35.188rem]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                ipsum quis phasellus tincidunt commodo, mi turpis velit,
                sollicitudin. Sapien sed petra, vitae sodales in rhoncus ac.
              </p>
              <div>
                <Link href="Appointment">
                  <button className="animate__animated animate__fadeInUp animate__delay-1s navBtn lg:text-base">
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
            className="heroImg animate__animated animate__fadeIn animate__delay-2s animate__fast relative top-[-28.6rem] left-[40rem] hidden xl:block"
            src={heroimg}
            alt="fbLogo"
          />
        </div>
      </div>

      {/* CARDSSECTION */}
      <AnimationOnScroll animateOnce={true} animateIn="animate__fadeIn">
        <h2
          id="howitworks"
          className="font-Domine font-medium text-[2.5rem] lg:text-[4rem] mt-[6rem] max-w-[85.83%] mx-auto"
        >
          How it works
        </h2>
      </AnimationOnScroll>
      <div className="containerCard mt-12 flex max-w-[85.83%] mx-auto justify-between items-baseline flex-wrap space-y-12 xl:space-y-0">
        <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInUp">
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
          animateOnce={true}
          delay={300}
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
          animateOnce={true}
          delay={600}
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

      <Blog />

      <CarouselBook />

      <Reviews />

      <WhyUs />

      <Providers />

      <BeMembers />

      <Faq />

      <Pricing />

      {/* BEFOREFOOTER */}
      <AnimationOnScroll animateOnce={true} animateIn="animate__fadeIn">
        <h2 className="font-Domine text-[#2A2A2A] font-medium text-[2.5rem] sm:text-[4rem] sm:leading-[5.313rem] text-center mt-[11.125rem]">
          Lets stay connected
        </h2>
        <p className="font-Poppins text-[#969696] text-center text-sm lg:text-base max-w-[47.563rem] lg:ml-[25%] lg:mr-[25%] mt-[2.938rem]">
          Book an on-demand massage at home, in your hotel room, or at your
          office, from our app or zeel.com.
        </p>
      </AnimationOnScroll>

      <div className="form flex items-center justify-center flex-wrap gap-[2.875rem] mt-[3.938rem] mb-[11.25rem]">
        <AnimationOnScroll
          animateOnce={true}
          delay={300}
          animateIn="animate__fadeIn"
        >
          <form action="">
            <input
              className="emailInput"
              type="text"
              placeholder="Enter Your Email Address"
            />
          </form>
        </AnimationOnScroll>
        <AnimationOnScroll
          animateOnce={true}
          delay={400}
          animateIn="animate__fadeInRight"
        >
          <button className="subscribeBtn">Subscribe</button>
        </AnimationOnScroll>
      </div>
    </>
  );
}
