import React from "react";

//ANIMATIONS
import { AnimationOnScroll } from "react-animation-on-scroll";

//images
import Image from "next/image";
import provider1 from "../imgs/provider1.png";
import provider2 from "../imgs/provider2.png";
import provider3 from "../imgs/provider3.png";
import jobvector from "../imgs/Job.png";

function Providers() {
  return (
    <>
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
    </>
  );
}

export default Providers;
