import React from "react";
import Overview from "./Overview";
import DetailedReport from "./DetailedReport";

const Main = () => {
  return (
    <div className="container-main">
      <Overview />
      <DetailedReport />
    </div>
  );
};

export default Main;
