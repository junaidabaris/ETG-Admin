import React from "react";
function Gantt(){
    return(
        <>
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                <label className="form-label">
            No Tasks Found
            </label>
                </div>
                
            </div>
            <div className="row mt-3">
                <div className="col-md-6">

                </div>
                <div className="col-md-3">
                    <select className="form-select">All
                        <option>All</option>
                        <option>Not Started</option>
                        <option>In Progress</option>
                        <option>Testing</option>
                        <option>Awaiting Feedback</option>
                        <option>Complete</option>
                    </select>
                   
                    </div>
                    <div className="col-md-3">
                    <select className="form-select">All
                        <option>Milestone</option>
                        <option>Members</option>
                        <option>Status</option>
                    </select>
                    </div>
            </div>
        </div>
        </>
    )
}
export default Gantt