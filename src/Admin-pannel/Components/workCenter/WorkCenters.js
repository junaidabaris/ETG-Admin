import React from "react";
import { FaShirtsinbulk } from "react-icons/fa";
import TableHead from "../tableHeader/TableHead";
import { Link } from "react-router-dom";
function WorkCenters(){
    return(
        <>
        <div className="container">
            <div className="card p-3">
                    <div className="row">
                        <label className="form-label">
                            <h5> <FaShirtsinbulk/> Work Centers</h5>
                        </label>
                    </div>
                    <hr className="border-secondary opacity-3" />
                    <div className="row">
                        <div className="col-4">
                           <Link to="/admin/Add-work-center" className="btn btn-primary">  Add Work center</Link>
                        </div>
                    </div>
                    <div className="row">
                        <TableHead/>
                    </div>
                    <div className="row p-2">
                        <table>
                            <thead className="table-secondary">
                                <tr>
                                    <th>
                                        Code
                                    </th>
                                    <th>Work Center Name</th>
                                    <th>Working Hours</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="Trshow">
                                    <td>001</td>
                                    <td>Test</td>
                                    <td>Standart 40 hours/week</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="row">
                            <div className="col-md-6">
                                <label className="form-label">Showing 1 to 1 of 1 entries</label>
                            </div>
                            <div className="col-md-6 text-end">
                                <button className="btn outline-secondary"> Previous</button>
                                <button className="btn btn-primary text-enter" style={{width:20,height:35}}>1</button>
                                <button className="btn outline-secondary"> Next</button>
                            </div>
                        </div>
            </div>
        </div>
        </>
    )
}
export default WorkCenters