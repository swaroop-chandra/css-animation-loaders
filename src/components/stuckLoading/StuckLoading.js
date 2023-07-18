import React from "react";
import "./StuckLoading.css";

function StuckLoading() {
  return (
    <div className="stuckBody">
      <div className="loaderStuck">
        <div className="loader-ring">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default StuckLoading;
