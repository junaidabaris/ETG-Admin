import React from "react";
import TableHead from "../tableHeader/TableHead";
function File() {
    return (
        <>
            <div className="container">
                <div className="row">
                    <input className="" style={{ width: '500', height: '200' }} type="file" />
                </div>
                <div className="">
                    <label className="form-label">
                        Visible to Customer
                    </label>
                    <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                        {/* <label className="form-check-label" for="flexSwitchCheckDefault">Default switch checkbox input</label> */}
                    </div>
                </div>
                <div className="card mt-3">
                    <div className="mt-3">
                        <TableHead />
                    </div>
                    <div className="row">
                        <table className="table-secondary">
                            <thead>
                                <tr>
                                    <th>
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                defaultValue=""
                                                id="flexCheckDefault"
                                            />

                                        </div>

                                    </th>
                                    <th>FileName</th>
                                    <th>File Type</th>
                                    <th>Last Activity</th>
                                    <th>Total Comment</th>
                                    <th>Visible to customer</th>
                                    <th>Uploaded By</th>
                                    <th>Date uploaded</th>
                                    <th>Options</th>

                                </tr>

                            </thead>
                            <tbody>
                                No entries found
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}
export default File