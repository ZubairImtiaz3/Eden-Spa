import React from "react";

//ANIMATIONS
import { AnimationOnScroll } from "react-animation-on-scroll";

function Pricing() {
  return (
    <>
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
    </>
  );
}

export default Pricing;
