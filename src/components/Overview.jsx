import React, { useEffect, useState } from "react";
import "../css/Overview.css";
import { GoTriangleUp } from "react-icons/go";

export default function Overview() {
  const [overviews, setOverviews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          "https://67c824890acf98d0708518a5.mockapi.io/overview"
        );
        const data = await res.json();
        setOverviews(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="container-overview">
      <div className="logo-overview">
        <img src="../../img/dashboard.png" alt="" />
        Overview
      </div>

      <div className="content-top">
        {overviews.map((item) => (
          <div
            key={item.id}
            className="card-content"
            style={{ backgroundColor: item.bgColor }}
          >
            <div className="card-wrapper">
              <div className="card-left">
                <p>{item.title}</p>
                <h2>{item.value}</h2>
              </div>
              <div className="card-right">
                <img src={item.image} alt="" />
              </div>
            </div>
            <div className="card-bottom">
              <p className="precent">
                <GoTriangleUp />
                {item.percentage}
              </p>
              <p>period of change</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
