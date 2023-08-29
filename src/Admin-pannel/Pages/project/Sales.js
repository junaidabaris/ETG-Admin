import React from "react";
import TableHead from "../tableHeader/TableHead";
function Sales(){
    return(
        <>
        <div className="container">
        <div className="card mt-3">
                <div className="card-body">
                    <div className="">
                        <TableHead/>
                    </div>
                    <div className="row">
                        <table className="table-secondary">
                            <thead>
                                <tr>
                                    <th>
                                        Members
                                    </th>
                                    <th>Task</th>
                                    <th>Timesheet Tags</th>
                                    <th>Start Time</th>
                                    <th>End Time </th>
                                    <th>Note</th>
                                    <th>Time(h)</th>
                                    <th>Time(decimal)</th>
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
        </div>
        </>
    )
}
export default Sales