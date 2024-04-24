import React, { useEffect, useState } from "react";
import ProfileCard from "../components/ProfileCard";
import ProgressCard from "../components/ProgressCard";
// import SubmissionsCard from "../components/SubmissionsCard";
import HistoryCard from "../components/HistoryCard";
import { useParams } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import { TailSpin } from "react-loader-spinner";

const Result = () => {
  window.scrollTo(0, 0);
  const { username } = useParams();
  const [error, setError] = useState(true);
  const [userInfo, setUserInfo] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const res = await fetch(
          `https://leetcode-api-faisalshohag.vercel.app/${username}`
        );
        const data = await res.json();
        if (data.errors) {
          setTimeout(() => {
            setLoading(false);
          }, 500);
          setError(true);
          // setLoading(false);
          return;
        }
        setUserInfo(data);
        setError(false);
      } catch (error) {
        setError(true);
      }
      setTimeout(() => {
        setLoading(false);
      }, 500);
    }

    fetchData();
  }, [username]);

  console.log(userInfo);
  if (loading)
    return (
      <div className="loadingScreen">
        <TailSpin
          visible={true}
          height="80"
          width="80"
          color="#ffa116"
          ariaLabel="tail-spin-loading"
          radius="1"
        />
      </div>
    );

  if (error) {
    return <ErrorPage />;
  }

  return (
    <div className="result maxWidth">
      <div className="resultTop">
        <ProfileCard
          username={username}
          rank={userInfo.ranking}
          totalSolved={userInfo.totalSolved}
          reputation={userInfo.reputation}
          contri={userInfo.contributionPoint}
        />
        {/* <CircleProgress /> */}
        <ProgressCard progress={userInfo} />
      </div>
      {/* <SubmissionsCard /> */}
      <HistoryCard history={userInfo.recentSubmissions} />
    </div>
  );
};

export default Result;
