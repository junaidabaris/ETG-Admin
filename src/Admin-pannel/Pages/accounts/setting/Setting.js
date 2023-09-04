import React from "react";
import { Link, Outlet } from "react-router-dom";
import Generals from "./Generals";

const Setting = () => {
    return (
        <>
            <div className="container">
                <div className="row ps-3 pe-3">
                    <div className="col-md-3">
                        <ul class="list-group">
                            <li class="list-group-item"><Link to={''}>General</Link></li>
                            <li class="list-group-item"><Link to={'banking'}>Banking Rules</Link></li>
                            <li class="list-group-item"><Link to={'#'}>Mapping Setup</Link></li>
                            <li class="list-group-item"><Link to={'#'}>Account Details types</Link></li>
                            
                        </ul>
                    </div>
                    <div className="col-md-9">
                        <Outlet></Outlet>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Setting;