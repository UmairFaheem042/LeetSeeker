import React from "react";
import "../css/ProgressCard.css";
import ProgressBar from "./ProgressBar";

const ProgressCard = ({ progress }) => {
  return (
    <div className="card progressCard">
      <h4>Solved Problems</h4>

      <ProgressBar
        label="Easy"
        solvedQuestions={progress.easySolved}
        totalQuestions={progress.totalEasy}
      />
      <ProgressBar
        label="Medium"
        solvedQuestions={progress.mediumSolved}
        totalQuestions={progress.totalMedium}
      />
      <ProgressBar
        label="Hard"
        solvedQuestions={progress.hardSolved}
        totalQuestions={progress.totalHard}
      />
    </div>
  );
};

export default ProgressCard;
