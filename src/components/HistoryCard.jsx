import React, { useEffect, useState } from "react";
import "../css/HistoryCard.css";

const HistoryCard = ({ history }) => {
  const [submissions, setSubmissions] = useState(history);

  useEffect(() => {
    setSubmissions(history);
  }, [history]);

  function timestampToHumanDate(timestamp) {
    // Create a new Date object using the timestamp (in milliseconds)
    const date = new Date(timestamp * 1000);

    // Get the day, month, and year
    const day = date.getDate();
    const month = date.getMonth() + 1; // Months are zero-indexed
    const year = date.getFullYear();

    // Get the day of the week
    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const dayOfWeek = daysOfWeek[date.getDay()];

    // Format the date as "DayOfWeek, DD.MM.YYYY"
    const formattedDate = `${dayOfWeek}, ${day < 10 ? "0" : ""}${day}.${
      month < 10 ? "0" : ""
    }${month}.${year}`;

    return formattedDate;
  }

  return (
    <div className="card historyCard">
      <h4>Recent Submissions</h4>
      <div className="questions">
        {submissions &&
          submissions.map((item, index) => (
            <p key={index} className="question">
              <span>{item.title}</span>
              <span className="time">
                {timestampToHumanDate(item.timestamp)}
              </span>
            </p>
          ))}
        {/* {!submissions && <p className="notFound">🚫 No Recent Submissions</p>} */}
      </div>
    </div>
  );
};

export default HistoryCard;
