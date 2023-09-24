import React from "react";
import SettingManfuctures from "../../components/settingManufacture/settingManufactures";
import { Outlet } from "react-router-dom";
function SettingManfucture(){
    return(
        <>
       <div className="container">
        <div className="row">
        <div className="col-3">
        <SettingManfuctures/>
       </div>
       <div className="col-9">
            <Outlet></Outlet>
        </div>
        </div>
       </div>
        </>
    )
}
export default SettingManfucture