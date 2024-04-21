import React from "react";

const ProgressBar = ({ label, solvedQuestions, totalQuestions }) => {
  return (
    <div className="progressBar">
      <div className="questionsStatus">
        <span>{label}</span>
        <span>
          <b>{solvedQuestions}</b>/{totalQuestions}
        </span>
      </div>
      <div className={`bar ${label}Bar1`}>
        <div style={{
          width: `${(solvedQuestions / totalQuestions) * 100}%`
        }} className={`actualProgress ${label}Bar2`}></div>
      </div>
    </div>
  );
};

export default ProgressBar;
