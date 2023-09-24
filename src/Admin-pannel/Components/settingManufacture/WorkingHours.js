import React from "react";
import { GrGallery } from "react-icons/gr"
import TableHead from "../tableHeader/TableHead";
import { Link } from "react-router-dom";
function WorkingHours(){
    return(
        <>
        <div className="container">
            <div className="card p-3">
                <div className="row">
                    <label className="form-lable">
                   <h5> <GrGallery/>Working hours</h5>
                    </label>
                </div>
                <hr className="border-secondary opacity-3" />
                <div className="row">
                    <div className="col-4">
                    <Link to="/admin/add-working-hours" className="btn btn-primary">
                            Add Working Hours
                       </Link>
                    </div>
                </div>
                <div className="mt-3">
                    <TableHead/>
                </div>
                <div className="row p-2">
                    <table className="table">
                        <thead className="table-secondary">
                            <tr>
                                <th>Names</th>
                                <th>Hours per day</th>
                                <th>Option</th>
                            </tr>
                        </thead>
                        <tbody>
                            no entries found
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        </>
    )
}
export default WorkingHours