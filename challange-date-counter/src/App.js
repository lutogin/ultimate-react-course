import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [step, setStep] = useState(1);
  const [shift, setShift] = useState(0);

  const [date, setDate] = useState(new Date());

  function handleIncreaseStep() {
    setStep((s) => s + 1)
  }

  function handleReduceStep() {
    setStep((s) => s - 1)
  }

  function handleIncreaseShift() {
    setShift((shift) => shift + step);
  }

  function handleReduceShift() {
    setShift((shift) => shift - step);
  }

  useEffect(() => {
    const newDate = new Date();
    newDate.setDate(newDate.getDate() + shift);
    setDate(newDate);
  }, [shift]);

  return (
    <div className="App">
      <div className="step">
        <button onClick={handleReduceStep}>-</button>
        <span>{`Step: ${step}`}</span>
        <button onClick={handleIncreaseStep}>+</button>
      </div>

      <div className="shift">
        <button onClick={handleReduceShift}>-</button>
        <span>{`Shift: ${shift}`}</span>
        <button onClick={handleIncreaseShift}>+</button>
      </div>

      <div className="date">
        <p>{`${shift} days from today is: ${date.toDateString()}`}</p>
      </div>
    </div>
  );
}

export default App;
