import React from "react";
import dummyImage from "../assets/dummy.jpg";
import "../css/ProfileCard.css";

const ProfileCard = ({ username, rank, totalSolved, reputation, contri }) => {
  return (
    <div className="card profileCard">
      <div className="top">
        {/* <img src={dummyImage} alt="User Image" /> */}
        <div className="text">
          <div className="textTop">
            {/* <h3 className="name">Umair Faheem</h3> */}
            <h6 className="username">{username}</h6>
          </div>
          <div className="rank textBottom">
            # <span>{rank}</span>
          </div>
        </div>
      </div>
      <hr />
      <div className="bottom">
        <div className="profileStat">
          <div className="parameter">Total Questions Solved</div>
          <div className="value">{totalSolved}</div>
        </div>
        <div className="profileStat">
          <div className="parameter">Reputation</div>
          <div className="value">{reputation}</div>
        </div>
        <div className="profileStat">
          <div className="parameter">Contribution Points</div>
          <div className="value">{contri}</div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
