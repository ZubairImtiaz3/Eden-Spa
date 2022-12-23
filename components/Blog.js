import React from "react";
import Link from "next/dist/client/link";

//ANIMATIONS
import { AnimationOnScroll } from "react-animation-on-scroll";

// Images
import Image from "next/image";
import massage1 from "../imgs/massage1.png";
import massage2 from "../imgs/massage2.png";

function Blog() {
  return (
    <>
      <div
        id="blog"
        className="massageContainer max-w-[85.83%] mx-auto space-y-[4.85rem] mt-[9.563rem]"
      >
        <div className="flex items-center justify-center">
          <div className="contentLeft max-w-[36rem] space-y-[2.563rem]">
            <AnimationOnScroll animateOnce={true} animateIn="animate__fadeIn">
              <h2 className="font-Domine text-[#2A2A2A] font-medium text-[2.5rem] sm:text-[4rem] sm:leading-[5.313rem]">
                On-Demand Massage Made Simple
              </h2>
            </AnimationOnScroll>
            <AnimationOnScroll
              animateOnce={true}
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
            <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInUp">
              <Link href="Appointment">
                <button className="massageBtn lg:text-base">
                  Make an appointment
                </button>
              </Link>
            </AnimationOnScroll>
          </div>
          <AnimationOnScroll
            animateOnce={true}
            delay={600}
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
          <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInLeft">
            <Image
              className="hidden xl:block"
              src={massage2}
              alt="massagePic"
            />
          </AnimationOnScroll>
          <div className="contentLeft max-w-[36rem] space-y-[2.563rem]">
            <AnimationOnScroll animateOnce={true} animateIn="animate__fadeIn">
              <h2 className="font-Domine text-[#2A2A2A] font-medium text-[2.5rem] sm:text-[4rem] sm:leading-[5.313rem]">
                Your Trust is Our Highest Priority
              </h2>
            </AnimationOnScroll>
            <AnimationOnScroll
              animateOnce={true}
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
              animateOnce={true}
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
    </>
  );
}

export default Blog;
