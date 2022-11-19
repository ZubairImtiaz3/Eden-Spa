import React, { useState } from "react";
import Image from "next/image";
import StepProgressBar from "react-step-progress";
import "react-step-progress/dist/index.css";

//Images
import bookmassage1 from "../imgs/swedish.png";
import bookmassage2 from "../imgs/deeptissue.png";
import bookmassage3 from "../imgs/parental.png";
import finish from "../imgs/finish.png";

//SCROLLTOTOP
import ScrollTop from "react-scrolltop-button";

//DATETIMEPICKER
import DateTimePicker from "../components/Datetimepicker";

function Appointment() {
  //Validation
  const [validate, setvalidate] = useState(false);

  let validationRadio = () => {
    setvalidate(true);
  };

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
      <div className="bookMassageCardsContainer mt-[5.563rem] flex items-center justify-center gap-7 mb-[3.75rem] flex-wrap">
        <input
          validate={validate}
          onClick={validationRadio}
          type="radio"
          name="selectMassage"
          id="selectMassageCard1"
        />
        <input
          validate={validate}
          onClick={validationRadio}
          type="radio"
          name="selectMassage"
          id="selectMassageCard2"
        />
        <input
          validate={validate}
          onClick={validationRadio}
          type="radio"
          name="selectMassage"
          id="selectMassageCard3"
        />
        <label htmlFor="selectMassageCard1">
          <div className="cardBookMassage w-[20rem] md:w-[24.5rem] h-[22.188rem] flex flex-col items-center justify-center">
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
          <div className="cardBookMassage w-[20rem] md:w-[24.5rem] h-[22.188rem] flex flex-col items-center justify-center">
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
          <div className="cardBookMassage w-[20rem] md:w-[24.5rem] h-[22.188rem] flex flex-col items-center justify-center">
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
  const step2Content = (
    <div className="containerStep2">
      <div className="contentStep2 flex justify-center flex-col items-center">
        <h2 className="font-Domine text-[#2A2A2A] font-medium text-[2.5rem] sm:text-[4rem] sm:leading-[5.313rem] text-center mt-[6rem]">
          Massage Details
        </h2>
        <p className="font-Poppins text-[#969696] text-center text-sm lg:text-base max-w-[44.438rem] p-2 md:p-0">
          Massage Details A Zeel in-home massage offers all the benefits of a
          spa experience with none of the travel, waiting, or logistics—and no
          need to call a babysitter.
        </p>
      </div>
      <div className="containerStep2Details flex justify-center items-center gap-[3.563rem] mt-28 flex-wrap mb-[3.75rem]">
        <div className="mainContainerSelectDetailsPeople flex flex-col items-start gap-4">
          <h2 className="font-Poppins text-base text-[#2A2A2A]">
            How many people?
          </h2>
          <div className="containerSelectDetailsPeople flex">
            <input
              type="radio"
              name="selectDetailsPeople"
              id="selectDetailsPeople1"
            />
            <input
              type="radio"
              name="selectDetailsPeople"
              id="selectDetailsPeople2"
            />
            <label htmlFor="selectDetailsPeople1">
              <div className="selectDetails">
                <div className="detail w-[10rem] md:w-[17.25rem] h-[3.5rem] flex justify-center items-center">
                  <h2 className="font-Poppins text-[#969696] text-sm lg:text-base">
                    One
                  </h2>
                </div>
              </div>
            </label>
            <label htmlFor="selectDetailsPeople2">
              <div className="selectDetails">
                <div className="detail w-[10rem] md:w-[17.25rem] h-[3.5rem] flex justify-center items-center">
                  <h2 className="font-Poppins text-[#969696] text-sm lg:text-base">
                    Multiple
                  </h2>
                </div>
              </div>
            </label>
          </div>
        </div>
        <div className="mainContainerSelectDetailsDuration flex flex-col items-start gap-4 order-2 xl:-order-none">
          <h2 className="font-Poppins text-base text-[#2A2A2A]">Duration</h2>
          <div className="containerSelectDetailsDuration flex">
            <input
              type="radio"
              name="selectDetailsDuration"
              id="selectDetailsDuration1"
            />
            <input
              type="radio"
              name="selectDetailsDuration"
              id="selectDetailsDuration2"
            />
            <input
              type="radio"
              name="selectDetailsDuration"
              id="selectDetailsDuration3"
            />
            <label htmlFor="selectDetailsDuration1">
              <div className="selectDetails">
                <div className="detail w-[6.66rem] md:w-[13.125rem] h-[3.5rem] flex justify-center items-center">
                  <h2 className="font-Poppins text-[#969696] text-sm lg:text-base">
                    60m
                  </h2>
                </div>
              </div>
            </label>
            <label htmlFor="selectDetailsDuration2">
              <div className="selectDetails">
                <div className="detail w-[6.66rem] md:w-[13.125rem] h-[3.5rem] flex justify-center items-center">
                  <h2 className="font-Poppins text-[#969696] text-sm lg:text-base">
                    75m
                  </h2>
                </div>
              </div>
            </label>
            <label htmlFor="selectDetailsDuration3">
              <div className="selectDetails">
                <div className="detail w-[6.66rem] md:w-[13.125rem] h-[3.5rem] flex justify-center items-center">
                  <h2 className="font-Poppins text-[#969696] text-sm lg:text-base">
                    90m
                  </h2>
                </div>
              </div>
            </label>
          </div>
        </div>
        <div className="mainContainerSelectDetailsGender flex flex-col items-start gap-4">
          <h2 className="font-Poppins text-base text-[#2A2A2A]">
            Therapist Gender
          </h2>
          <div className="containerSelectDetailsGender flex">
            <input
              type="radio"
              name="selectDetailsGender"
              id="selectDetailsGender1"
            />
            <input
              type="radio"
              name="selectDetailsGender"
              id="selectDetailsGender2"
            />
            <input
              type="radio"
              name="selectDetailsGender"
              id="selectDetailsGender3"
            />
            <label htmlFor="selectDetailsGender1">
              <div className="selectDetails">
                <div className="detail w-[6.66rem] md:w-[11.5rem] h-[3.5rem] flex justify-center items-center">
                  <h2 className="font-Poppins text-[#969696] text-sm lg:text-base">
                    Female
                  </h2>
                </div>
              </div>
            </label>
            <label htmlFor="selectDetailsGender2">
              <div className="selectDetails">
                <div className="detail w-[6.66rem] md:w-[11.5rem] h-[3.5rem] flex justify-center items-center">
                  <h2 className="font-Poppins text-[#969696] text-sm lg:text-base">
                    Male
                  </h2>
                </div>
              </div>
            </label>
            <label htmlFor="selectDetailsGender3">
              <div className="selectDetails">
                <div className="detail w-[6.66rem] md:w-[11.5rem] h-[3.5rem] flex justify-center items-center">
                  <h2 className="font-Poppins text-[#969696] text-sm lg:text-base">
                    Either
                  </h2>
                </div>
              </div>
            </label>
          </div>
        </div>
        <div className="mainContainerSelectDetailsFormStep2 flex flex-col items-start gap-4 order-4 xl:-order-none">
          <h2 className="font-Poppins text-base text-[#2A2A2A]">
            Who is this mssage for?
          </h2>
          <div className="formStep2">
            <div className="w-[20rem] md:w-[39.25rem] h-[3.5rem] relative border border-[#969696] text-gray-800">
              <label for="frm-whatever" className="sr-only">
                My field
              </label>
              <select
                className="appearance-none w-full h-full py-1 px-5 bg-white font-Poppins text-[#969696] text-sm lg:text-base"
                name="whatever"
                id="frm-whatever"
              >
                <option
                  className="font-Poppins text-[#969696] text-sm lg:text-base"
                  value=""
                >
                  -Please Select-
                </option>
                <option
                  className="font-Poppins text-[#969696] text-sm lg:text-base"
                  value="1"
                >
                  Male
                </option>
                <option
                  className="font-Poppins text-[#969696] text-sm lg:text-base"
                  value="2"
                >
                  Female
                </option>
                <option
                  className="font-Poppins text-[#969696] text-sm lg:text-base"
                  value="3"
                >
                  Either
                </option>
              </select>
              <div className="pointer-events-none absolute right-0 top-0 bottom-0 flex items-center px-2 text-gray-700 border-l">
                <svg
                  className="h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  const step3Content = (
    <div className="containerStep3">
      <div className="contentStep3 flex justify-center flex-col items-center">
        <h2 className="font-Domine text-[#2A2A2A] font-medium text-[2.5rem] sm:text-[4rem] sm:leading-[5.313rem] text-center mt-[6rem]">
          Address
        </h2>
        <p className="font-Poppins text-[#969696] text-center text-sm lg:text-base max-w-[44.438rem] p-2 md:p-0">
          A Zeel in-home massage offers all the benefits of a spa experience
          with none of the travel, waiting, or logistics—and no need to call a
          babysitter.
        </p>
      </div>
      <div className="containerStep2Details flex justify-center items-center gap-[3.563rem] mt-28 flex-wrap mb-[3.75rem]">
        <div className="mainContainerSelectDetailsFormStep2 flex flex-col items-start gap-4">
          <h2 className="font-Poppins text-base text-[#2A2A2A]">Country</h2>
          <div className="formStep2">
            <div className="w-[20rem] md:w-[39.25rem] h-[3.5rem] relative border border-[#969696] text-gray-800">
              <label for="frm-whatever" className="sr-only">
                My field
              </label>
              <select
                className="appearance-none w-full h-full py-1 px-5 bg-white font-Poppins text-[#969696] text-sm lg:text-base"
                name="whatever"
                id="frm-whatever"
              >
                <option
                  className="font-Poppins text-[#969696] text-sm lg:text-base"
                  value=""
                >
                  -Please Select-
                </option>
                <option
                  className="font-Poppins text-[#969696] text-sm lg:text-base"
                  value="1"
                >
                  Pakistan
                </option>
                <option
                  className="font-Poppins text-[#969696] text-sm lg:text-base"
                  value="2"
                >
                  India
                </option>
                <option
                  className="font-Poppins text-[#969696] text-sm lg:text-base"
                  value="3"
                >
                  Either
                </option>
              </select>
              <div className="pointer-events-none absolute right-0 top-0 bottom-0 flex items-center px-2 text-gray-700 border-l">
                <svg
                  className="h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="gap-[1.688rem] flex justify-center order-3 xl:-order-none flex-wrap">
          <div className="mainContainerSelectDetailsFormStep2 flex flex-col items-start gap-4">
            <h2 className="font-Poppins text-base text-[#2A2A2A]">City</h2>
            <div className="formStep2">
              <div className="w-[20rem] md:w-[16.375rem] h-[3.5rem] relative border border-[#969696] text-gray-800">
                <label for="frm-whatever" className="sr-only">
                  My field
                </label>
                <select
                  className="appearance-none w-full h-full py-1 px-5 bg-white font-Poppins text-[#969696] text-sm lg:text-base"
                  name="whatever"
                  id="frm-whatever"
                >
                  <option
                    className="font-Poppins text-[#969696] text-sm lg:text-base"
                    value=""
                  >
                    -Please Select-
                  </option>
                  <option
                    className="font-Poppins text-[#969696] text-sm lg:text-base"
                    value="1"
                  >
                    Lahore
                  </option>
                  <option
                    className="font-Poppins text-[#969696] text-sm lg:text-base"
                    value="2"
                  >
                    Delhi
                  </option>
                  <option
                    className="font-Poppins text-[#969696] text-sm lg:text-base"
                    value="3"
                  >
                    Either
                  </option>
                </select>
                <div className="pointer-events-none absolute right-0 top-0 bottom-0 flex items-center px-2 text-gray-700 border-l">
                  <svg
                    className="h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="mainContainerSelectDetailsFormStep2 flex flex-col items-start gap-4">
            <h2 className="font-Poppins text-base text-[#2A2A2A]">Zip Code</h2>
            <div className="formStep2">
              <div className="w-[20rem] md:w-[16.375rem] h-[3.5rem] relative border border-[#969696] text-gray-800">
                <input
                  className="w-full h-full font-Poppins text-[#969696] text-sm lg:text-base py-1 px-5"
                  type="text"
                  name=""
                  id=""
                  placeholder="Enter Zip Code"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mainContainerSelectDetailsFormStep2 flex flex-col items-start gap-4">
          <h2 className="font-Poppins text-base text-[#2A2A2A]">
            Address Line 1
          </h2>
          <div className="formStep2">
            <div className="w-[20rem] md:w-[39.25rem] h-[3.5rem] relative border border-[#969696] text-gray-800">
              <input
                className="w-full h-full font-Poppins text-[#969696] text-sm lg:text-base py-1 px-5"
                type="text"
                name=""
                id=""
                placeholder="Write address"
              />
            </div>
          </div>
        </div>
        <div className="mainContainerSelectDetailsGender flex flex-col items-start gap-4">
          <h2 className="font-Poppins text-base text-[#2A2A2A]">
            Do you have a massage table?
          </h2>
          <div className="containerSelectDetailsGender flex">
            <input
              type="radio"
              name="selectDetailsGender"
              id="selectDetailsGender1"
            />
            <input
              type="radio"
              name="selectDetailsGender"
              id="selectDetailsGender2"
            />
            <input
              type="radio"
              name="selectDetailsGender"
              id="selectDetailsGender3"
            />
            <label htmlFor="selectDetailsGender1">
              <div className="selectDetails">
                <div className="detail w-[6.66rem] md:w-[11.5rem] h-[3.5rem] flex justify-center items-center">
                  <h2 className="font-Poppins text-[#969696] text-sm lg:text-base">
                    1 Table
                  </h2>
                </div>
              </div>
            </label>
            <label htmlFor="selectDetailsGender2">
              <div className="selectDetails">
                <div className="detail w-[6.66rem] md:w-[11.5rem] h-[3.5rem] flex justify-center items-center">
                  <h2 className="font-Poppins text-[#969696] text-sm lg:text-base">
                    2 Table
                  </h2>
                </div>
              </div>
            </label>
            <label htmlFor="selectDetailsGender3">
              <div className="selectDetails">
                <div className="detail w-[6.66rem] md:w-[11.5rem] h-[3.5rem] flex justify-center items-center">
                  <h2 className="font-Poppins text-[#969696] text-sm lg:text-base">
                    3 Table
                  </h2>
                </div>
              </div>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
  const step4Content = (
    <div className="containerStep1">
      <div className="content flex justify-center flex-col items-center">
        <h2 className="font-Domine text-[#2A2A2A] font-medium text-[2.5rem] sm:text-[4rem] sm:leading-[5.313rem] text-center mt-[6rem]">
          When would you like to book?
        </h2>
        <p className="font-Poppins text-[#969696] text-center text-sm lg:text-base max-w-[44.438rem] p-2 md:p-0">
          A Zeel in-home massage offers all the benefits of a spa experience
          with none of the travel, waiting, or logistics—and no need to call a
          babysitter.
        </p>
      </div>
      <DateTimePicker />
    </div>
  );
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
        <input type="radio" name="selectPricing" id="selectPricingCard1" />
        <input
          checked
          type="radio"
          name="selectPricing"
          id="selectPricingCard2"
        />
        <input type="radio" name="selectPricing" id="selectPricingCard3" />
        <label htmlFor="selectPricingCard1">
          <div className="cardPricing w-[20rem] h-[22.375rem] bg-[#FFFFFF] flex flex-col items-center justify-center">
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
        </label>
        <label htmlFor="selectPricingCard2">
          <div className="cardPricing w-[20rem] h-[22.375rem] bg-[#EFBD69] flex flex-col items-center justify-center">
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
        </label>
        <label htmlFor="selectPricingCard3">
          <div className="cardPricing w-[20rem] h-[22.375rem] bg-[#FFFFFF] flex flex-col items-center justify-center">
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
        </label>
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
  function stepValidator() {
    window.scrollTo(0, 0);

    if (validationRadio()) {
      return true;
    } else {
      return false;
    }
  }

  function step3Validator() {
    // return a boolean
  }

  return (
    <>
      <ScrollTop
        text="^"
        distance={550}
        className="react-scrolltop-button"
        speed={1000}
        target={10}
        breakpoint={2560}
      />

      <div className="md:pt-[2.688rem] bg-[#F6F4F2] pb-[0.1rem]">
        <StepProgressBar
          startingStep={0}
          nextBtnName={"Continue"}
          previousBtnName={"Back"}
          steps={[
            {
              label: "Choose",
              name: "Choose",
              content: step1Content,
              validator: stepValidator,
            },
            {
              label: "Details",
              name: "Details",
              content: step2Content,
              validator: stepValidator,
            },
            {
              label: "Location",
              name: "Location",
              content: step3Content,
              validator: stepValidator,
            },
            {
              label: "Time",
              name: "Time",
              content: step4Content,
              validator: stepValidator,
            },
            {
              label: "Payment",
              name: "Payment",
              content: step5Content,
              validator: stepValidator,
            },
            {
              label: "Finish",
              name: "Finish",
              content: step6Content,
              validator: stepValidator,
            },
          ]}
        />
      </div>
    </>
  );
}

export default Appointment;
