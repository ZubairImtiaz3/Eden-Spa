import React from "react";
import Image from "next/image";
import StepProgressBar from "react-step-progress";
import "react-step-progress/dist/index.css";

//Images
import bookmassage1 from "../imgs/swedish.png";
import bookmassage2 from "../imgs/deeptissue.png";
import bookmassage3 from "../imgs/parental.png";
import finish from "../imgs/finish.png";

function Appointment() {
  // var continueBtn = document.querySelector("._hsN1w");
  // continueBtn.addEventListener("click", scrollTo(0, 0));

  const step1Content = (
    <div className="containerStep1">
      <div className="content flex justify-center flex-col items-center">
        <h2 className="font-Domine text-[#2A2A2A] font-medium text-[2.5rem] sm:text-[4rem] sm:leading-[5.313rem] text-center mt-[6rem]">
          Choose a service
        </h2>
        <p className="font-Poppins text-[#969696] text-center text-sm lg:text-base max-w-[44.438rem] p-2 md:p-0">
          A Zeel in-home massage offers all the benefits of a spa experience
          with none of the travel, waiting, or logistics—and no need to call a
          babysitter.
        </p>
      </div>
      <div className="bookMassageCardsContainer mt-[5.563rem] flex items-center justify-center gap-7 mb-[3.75rem]">
        <input type="radio" name="selectMassage" id="selectMassageCard1" />
        <input type="radio" name="selectMassage" id="selectMassageCard2" />
        <input type="radio" name="selectMassage" id="selectMassageCard3" />
        <label htmlFor="selectMassageCard1">
          <div className="cardBookMassage w-[24.5rem] h-[22.188rem] flex flex-col items-center justify-center">
            <Image src={bookmassage1} alt="Main Logo" />
            <h3 className="font-Domine font-medium text-[2rem] lg:text-[2.5rem] text-[#2A2A2A] mt-4">
              Swedish
            </h3>
            <p className="font-Poppins text-[#969696] text-sm lg:text-base max-w-[17.938rem] mt-[0.62rem]">
              Book an on-demand massage at home, in your hotel room, or at your
              office, from our app or zeel.com.
            </p>
          </div>
        </label>
        <label htmlFor="selectMassageCard2">
          <div className="cardBookMassage w-[24.5rem] h-[22.188rem] flex flex-col items-center justify-center">
            <Image src={bookmassage2} alt="Main Logo" />
            <h3 className="font-Domine font-medium text-[2rem] lg:text-[2.5rem] text-[#2A2A2A] mt-4">
              Deep Tissue
            </h3>
            <p className="font-Poppins text-[#969696] text-sm lg:text-base max-w-[17.938rem] mt-[0.62rem]">
              Book an on-demand massage at home, in your hotel room, or at your
              office, from our app or zeel.com.
            </p>
          </div>
        </label>
        <label htmlFor="selectMassageCard3">
          <div className="cardBookMassage w-[24.5rem] h-[22.188rem] flex flex-col items-center justify-center">
            <Image src={bookmassage3} alt="Main Logo" />
            <h3 className="font-Domine font-medium text-[2rem] lg:text-[2.5rem] text-[#2A2A2A] mt-4">
              Prenatal
            </h3>
            <p className="font-Poppins text-[#969696] text-sm lg:text-base max-w-[17.938rem] mt-[0.62rem]">
              Book an on-demand massage at home, in your hotel room, or at your
              office, from our app or zeel.com.
            </p>
          </div>
        </label>
      </div>
    </div>
  );
  const step2Content = <h1></h1>;
  const step3Content = <h1></h1>;
  const step4Content = <h1></h1>;
  const step5Content = (
    <div className="containerPricing w-full max-h-max xl:h-[52.5rem] bg-[#F6F4F2] pb-8 xl:pb-0">
      <div className="contentPricing flex justify-center flex-col items-center">
        <h2 className="font-Domine text-[#2A2A2A] font-medium text-[2.5rem] sm:text-[4rem] sm:leading-[5.313rem] text-center pt-[5.938rem]">
          Our Pricing
        </h2>
        <p className="font-Poppins text-[#969696] text-center text-sm lg:text-base lg:ml-[25%] lg:mr-[25%] mt-2 p-2 md:p-0">
          A Zeel in-home massage offers all the benefits of a spa experience
          with none of the travel, waiting, or logistics—and no need to call a
          babysitter.
        </p>
      </div>

      <div className="cardsContainerPricing flex justify-center gap-10 mt-[4.125rem] flex-wrap">
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
      </div>
    </div>
  );
  const step6Content = (
    <div className="contentPricing flex justify-center flex-col items-center">
      <h2 className="font-Domine text-[#2A2A2A] font-medium text-[2.5rem] sm:text-[4rem] sm:leading-[5.313rem] text-center pt-[5.938rem]">
        Finish
      </h2>
      <p className="font-Poppins text-[#969696] text-center text-sm lg:text-base lg:ml-[25%] lg:mr-[25%] mt-2 p-2 md:p-0">
        A Zeel in-home massage offers all the benefits of a spa experience with
        none of the travel, waiting, or logistics—and no need to call a
        babysitter.
      </p>
      <Image className="mt-24 mb-24" src={finish} alt="vector" />
    </div>
  );

  // setup step validators, will be called before proceeding to the next step
  function step2Validator() {
    return true;
  }

  function step3Validator() {
    // return a boolean
  }

  return (
    <>
      <div className="mt-[2.688rem]">
        <StepProgressBar
          startingStep={0}
          nextBtnName={"Continue"}
          previousBtnName={"Back"}
          steps={[
            {
              label: "Choose",
              name: "Choose",
              content: step1Content,
            },
            {
              label: "Details",
              name: "Details",
              content: step2Content,
            },
            {
              label: "Location",
              name: "Location",
              content: step3Content,
              validator: step2Validator,
            },
            {
              label: "Time",
              name: "Time",
              content: step4Content,
            },
            {
              label: "Payment",
              name: "Payment",
              content: step5Content,
            },
            {
              label: "Finish",
              name: "Finish",
              content: step6Content,
            },
          ]}
        />
      </div>
    </>
  );
}

export default Appointment;
