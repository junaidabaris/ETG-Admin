import React from "react";
import { Link } from "react-router-dom";

function Training() {
  return (
    <>
      {" "}
      <div className="mainbox" style={{ background: "white" }}>
        <div
          style={{
            border: "1px solid lightgrey",
            height: "30px",
          }}
        >
          <Link to="" style={{ margin: "5px" }}>
            Training programs
          </Link>
        </div>
        <div
          style={{
            borderLeft: "1px solid lightgrey",
            borderRight: "1px solid lightgrey",
            height: "30px",
          }}
        >
          <Link to="t-libraries" style={{ margin: "5px" }}>
            Training libraries
          </Link>
        </div>
        <div
          style={{
            border: "1px solid lightgrey",
            height: "30px",
          }}
        >
          <Link to="t-result" style={{ margin: "5px" }}>
            Training results
          </Link>
        </div>
      </div>
    </>
  );
}
export default Training;
