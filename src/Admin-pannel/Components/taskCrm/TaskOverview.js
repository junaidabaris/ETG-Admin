import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Select from "react-select";
function TaskOverview(){
    const options4 = [
        { value: "Azhruddin Shammim", label: "Azhruddin Shammim" },
        { value: "Staff1 Sec", label: "Staff1 Sec" },
      ];
      const options5 = [
        { value: "January", label: "January" },
        { value: "Febuary", label: "Febuary" },
        { value: "March", label: "March" },
        { value: "April", label: "April" },
        { value: "May", label: "May" },
        { value: "June", label: "June" },
        { value: "July", label: "July" },
        { value: "August", label: "August" },
        { value: "September", label: "September" },
        { value: "October", label: "October" },
        { value: "November", label: "November" },
        { value: "December", label: "December" },
        
      ];
      const [value,setValue] = useState(null);

    return(
        <>
        <div className="container">
           
        <div className="row">
                        <div className="col-md-2">
                            <div className="button">
                                <Link to='/admin/task-crm' className="btn btn-primary ml-3">Back to Task List</Link>
                            </div>
                        </div>
                       <div className="col-md-2">
                       <div className="select">
                        <Select options={options4} defaultValue={value} />
                        </div>
                       </div>
                       <div className="col-md-2">
                       <div className="select">
                        <Select options={options5} defaultValue={value} />
                        </div>
                       </div>
                       <div className="col-md-2">
                       <div className="select">
                        <select className="form-select">
                            <option>All</option>
                            <option>Not Started</option>
                            <option>In Progress</option>
                            <option>Testing</option>
                            <option>Awaiting  Feedback</option>
                            <option>Complete</option>
                        </select>
                        </div>
                        </div>
                        <div className="col-md-2">
                       <div className="select">
                        <select className="form-select">
                            <option>2022</option>
                            <option>2023</option>
                           
                        </select>
                        </div>
                        </div>
                        <div className="col-md-2 text-center">
                            <div className="button">
                                <button className="btn btn-primary">Filter</button>
                            </div>
                        </div>
                    </div>
            </div>
        </>
    )
}
export default TaskOverview