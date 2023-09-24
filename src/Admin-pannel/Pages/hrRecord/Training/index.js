import Training from "../../../Components/HRrecord/Training/Training";
import { Outlet } from "react-router-dom";
import React from "react";

function Trainings() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-3">
            <Training />
          </div>
          <div className="col-9">
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </>
  );
}
export default Trainings