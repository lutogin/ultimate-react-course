import { messages } from './msgs';
import { useState } from 'react';

const MENU_RANGE = [0, 2];

function Button({ onClickFn, backgroundColor, children }) {
  return (
    <button className="button"
            style={{color: "#fff", backgroundColor}}
            onClick={onClickFn}
    >{children}</button>
  )
}

function StepMessage({ step, children }) {
  return (
    <div className="message">Step {step}: {children}</div>
  )
}


export default function App() {
  const [isOpen, setIsOpen] = useState(true);
  const [step, setStep] = useState(0);

  function prevStep() {
    if (step > MENU_RANGE[0]) {
      setStep((s) => s - 1)
    }
  }

  function nextStep() {
    if (step < MENU_RANGE[1]) {
      setStep((s) => s + 1);
    }
  }

  function closeBtn() {
    setIsOpen((isOpen) => !isOpen);
  }

  return (
    <>
      <button className="close" onClick={closeBtn}>&times;</button>

      {
        isOpen && (
          <div className="steps">
            <div className="numbers">
              <div className={step >= 0 ? "active" : ""}>1</div>
              <div className={step >= 1 ? "active" : ""}>2</div>
              <div className={step >= 2 ? "active" : ""}>3</div>
            </div>

            <StepMessage step={step + 1}>{messages[step]}</StepMessage>

            <div className="buttons">
              <Button
                onClickFn={prevStep}
                backgroundColor={step > MENU_RANGE[0] ? "#7959f2" : ""}
              >
                <span>👈</span> Previous
              </Button>

              <Button
                onClickFn={nextStep}
                backgroundColor={step < MENU_RANGE[1] ? "#7959f2" : ""}
              >
                Next <span>👉</span>
              </Button>

            </div>
          </div>
        )
      }
    </>
  )
}