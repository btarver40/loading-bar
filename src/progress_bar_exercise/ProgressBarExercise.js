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
// ----------------------------------------------------------------------------------
const Solution = () => {
  const [count, setCount] = useState(1)
  const [buttonStatus, setButtonStatus] = useState(false)
  
  const toggleExpand = () => {
    setCount(1);
    setButtonStatus(!buttonStatus ? "...Loading" : "Start Request");
  };

  const loadingColor = {
    background: "linear-gradient(90deg, rgba(255,206,63,1) 0%, rgba(255,130,0,1) 50%, rgba(255,0,0,1) 100%)",
    borderRadius: "8px",
    padding: "10px",
    width: count + "%"
  }

  useEffect(() => {
    if(count < 90) {
      let interval = setInterval(() => setCount(count + 0.1), 15)
      return () => clearInterval(interval)
    }
  }, [count])
  
  return (
    <div className="progress">
      <div style={loadingColor}>
        <span>{count.toFixed(0)}%</span>
      </div>
      <br/>
      <button 
        className="button-style" 
        data-testid="send-request" 
        onClick={() => toggleExpand()}>{`${buttonStatus ? "...Loading" : "Start Request"}`}
      </button>
    </div>
  )
}

export default ProgressBarExercise;