import React from "react";

//ANIMATIONS
import { AnimationOnScroll } from "react-animation-on-scroll";

//Accordian
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function Faq() {
  return (
    <>
      <div className="containerFaq max-w-[85.83%] mx-auto">
        <AnimationOnScroll animateOnce={true} animateIn="animate__fadeIn">
          <h2 className="font-Domine text-[#2A2A2A] max-w-[39.188rem] font-medium text-[2.5rem] sm:text-[4rem] sm:leading-[5.313rem] mt-[6.75rem]">
            Frequently Asked Questions
          </h2>
        </AnimationOnScroll>
        <div className="faqs mt-[5.938rem] space-y-6">
          <AnimationOnScroll animateOnce={true} animateIn="animate__fadeIn">
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <h3 className="font-Poppins text-[#2A2A2A] font-medium text-xl md:text-2xl">
                  Do I need to tip the massage therapist?
                </h3>
              </AccordionSummary>
              <div className="bg-[#2A2A2A] md:pt-[0.625rem]">
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
          <AnimationOnScroll animateOnce={true} animateIn="animate__fadeIn">
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <h3 className="font-Poppins text-[#2A2A2A] font-medium text-xl md:text-2xl">
                  Can I gift an in-home massage?
                </h3>
              </AccordionSummary>
              <div className="bg-[#2A2A2A] md:pt-[0.625rem]">
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
          <AnimationOnScroll animateOnce={true} animateIn="animate__fadeIn">
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <h3 className="font-Poppins text-[#2A2A2A] font-medium text-xl md:text-2xl">
                  Can I book with the same massage therapist again?
                </h3>
              </AccordionSummary>
              <div className="bg-[#2A2A2A]  md:pt-[0.625rem]">
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
          <AnimationOnScroll animateOnce={true} animateIn="animate__fadeIn">
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <h3 className="font-Poppins text-[#2A2A2A] font-medium text-xl md:text-2xl">
                  When will I be charged?
                </h3>
              </AccordionSummary>
              <div className="bg-[#2A2A2A]  md:pt-[0.625rem]">
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
          <AnimationOnScroll animateOnce={true} animateIn="animate__fadeIn">
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <h3 className="font-Poppins text-[#2A2A2A] font-medium text-xl md:text-2xl">
                  Will my therapist bring a massage table?
                </h3>
              </AccordionSummary>
              <div className="bg-[#2A2A2A]  md:pt-[0.625rem]">
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
          <AnimationOnScroll animateOnce={true} animateIn="animate__fadeIn">
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <h3 className="font-Poppins text-[#2A2A2A] font-medium text-xl md:text-2xl">
                  Can I choose the gender of my therapist?
                </h3>
              </AccordionSummary>
              <div className="bg-[#2A2A2A]  md:pt-[0.625rem]">
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
        <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInUp">
          <div className="flex justify-center items-center mt-[4.125rem]">
            <button className="faqBtn">View all FAQs</button>
          </div>
        </AnimationOnScroll>
      </div>
    </>
  );
}

export default Faq;
