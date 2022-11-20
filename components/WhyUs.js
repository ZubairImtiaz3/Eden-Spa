import React from "react";

//ANIMATIONS
import { AnimationOnScroll } from "react-animation-on-scroll";

//Images
import Image from "next/image";
import whyusvector from "../imgs/whyusvector.png";
import whyusicon1 from "../imgs/whyusicon1.png";
import whyusicon2 from "../imgs/whyusicon2.png";
import whyusicon3 from "../imgs/whyusicon3.png";

function WhyUs() {
  return (
    <>
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
    </>
  );
}

export default WhyUs;
