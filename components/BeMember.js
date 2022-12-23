import React from "react";

//ANIMATIONS
import { AnimationOnScroll } from "react-animation-on-scroll";

// Images
import Image from "next/image";
import memberpic from "../imgs/memberpic.png";

function BeMembers() {
  return (
    <>
      <div className="containerMember w-full max-h-max xl:h-[68.313rem] bg-[#F6F4F2] mt-[5.5rem] flex flex-col items-center justify-center gap-[1.875rem] pt-8 pb-8 xl:pt-0 xl-pb-0">
        <Image
          className="memberpic hidden md:block"
          quality={100}
          src={memberpic}
          alt="Main Logo"
        />

        <div className="flex flex-col items-center justify-center gap-[1.875rem] p-2 md:p-0">
          <AnimationOnScroll animateOnce={true} animateIn="animate__fadeIn">
            <h2 className="font-Domine text-3xl lg:text-5xl font-medium max-w-[45.25rem] leading-[133%] text-center">
              A Membership Designed for Your Lifestyle
            </h2>
          </AnimationOnScroll>
          <AnimationOnScroll
            animateOnce={true}
            delay={200}
            animateIn="animate__fadeInRight"
          >
            <p className="max-w-[35.188rem] text-[#969696] text-sm lg:text-base text-center">
              Zeel Members enjoy a monthly in-home massage at a preferred
              rate—the natural choice for making wellness a central to your
              daily routine.
            </p>
          </AnimationOnScroll>
          <AnimationOnScroll
            animateOnce={true}
            delay={500}
            animateIn="animate__fadeInUp"
          >
            <button className="memberBtn">Become a member</button>
          </AnimationOnScroll>
        </div>
      </div>
    </>
  );
}

export default BeMembers;
