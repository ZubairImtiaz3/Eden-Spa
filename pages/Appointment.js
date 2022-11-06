import React from "react";
import StepProgressBar from "react-step-progress";
import "react-step-progress/dist/index.css";

function Appointment() {
  const step1Content = <div className="containerStep1"></div>;
  const step2Content = <h1></h1>;
  const step3Content = <h1></h1>;

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
              content: step1Content,
            },
            {
              label: "Payment",
              name: "Payment",
              content: step1Content,
            },
            {
              label: "Finish",
              name: "Finish",
              content: step3Content,
            },
          ]}
        />
      </div>
    </>
  );
}

export default Appointment;
