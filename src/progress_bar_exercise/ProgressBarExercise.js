import React, { useState, useEffect } from "react";
import Exercise from "../exercise/Exercise";

const ProgressBarExercise = () => {
  return (
    <div className="progress-bar-exercise">
      <Exercise
        solution={<Solution />}
        specsUrl="https://github.com/SpiffInc/spiff_react_exercises/issues/1"
        title="Progress Bar Exercise"
      />
    </div>
  );
};

export default ProgressBarExercise;

// ----------------------------------------------------------------------------------
const Solution = () => {
  const [count, setCount] = useState(1)
  const [buttonStatus, setButtonStatus] = useState(false)

  const toggleExpand = () => {
    setCount(1);
    setButtonStatus(!buttonStatus ? "...Loading" : "Start Request");
  };

  useEffect(() => {
    if(count < 90) {
      let interval = setInterval(() => setCount(count + 0.1), 15)
      return () => clearInterval(interval)
    }
  }, [count])

  return (
    <div>
      <div>
        <span className='progress-bar'>{count.toFixed(0)}%</span>
      </div>
      <br/>
      <button className="button-border" onClick={() => toggleExpand()}>{`${buttonStatus ? "...Loading" : "Start Request"}`}</button>
    </div>
  )
}
