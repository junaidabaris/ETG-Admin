import React from "react";
import { Link } from "react-router-dom";
import { FaChartArea } from "react-icons/fa"
import { FaCertificate } from "react-icons/fa"
import { FaListAlt } from "react-icons/fa"
import { BiMenu } from "react-icons/bi"
function SettingManfuctures(){
    return(
        <>
        <div className="mainbox">
            <div>
            <Link to=""><FaChartArea/> Working Hours</Link>
            </div>
            <div>
        <Link to="unit-categories"><FaCertificate/>Unit Of Measure categories</Link>
      </div>
      <div>
        <Link to="unit-measure"><FaListAlt/>Unit Of Measure</Link>
      </div>
      <div>
        <Link to="genral"><BiMenu/>Genral Setting</Link>
      </div>
        </div>
        </>
    )
}
export default SettingManfuctures