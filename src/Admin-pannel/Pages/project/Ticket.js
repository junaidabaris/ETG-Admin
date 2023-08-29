import React from "react";
import { AiFillFile } from 'react-icons/ai'
import TableHead from "../tableHeader/TableHead";
import { Link } from "react-router-dom";

function Ticket(){
    return(
        <>
        <div className="container">
        <div className="row">
                    <div className="col-md-12 mt-3 ">
                        <h4 className="form-label"> <span><AiFillFile/></span>Tickets Summary</h4>
                    </div>
                    <div className="col-md-2">
                    <lable className='form-lable text-primary fs-2 mr-2' >0</lable>
                    <span className="text-danger">Open</span>
                    </div>
                    <div className="col-md-2">
                    <lable className='form-lable text-primary fs-2 mr-2' >0</lable>
                    <span style={{color:"#4caf50"}}>In Progress</span>
                    </div>
                    <div className="col-md-2">
                    <lable className='form-lable text-primary fs-2 mr-2' >0</lable>
                    <span style={{color:"#2563eb"}}>Answered</span>
                    </div>
                    <div className="col-md-2">
                    <lable className='form-lable text-primary fs-2 mr-2' >0</lable>
                    <span style={{}}>On Hold</span>
                    </div>
                    <div className="col-md-2">
                    <lable className='form-lable text-primary fs-2 mr-2' >0</lable>
                    <span style={{color:"#03a9f4"}}>Closed</span>
                    </div>
                </div>
                <div className="row p-2">
                    <div className="col-md-12">
                    <Link to="/admin/new-ticket" className="btn btn-primary ">+ New Ticket</Link>

                    </div>
                    <div className="">
                        <TableHead/>

                    </div>
                    <div className="row">
                        <table className="table-secondary">
                            <thead>
                                <tr>
                                    <th>
                                        #
                                    </th>
                                    <th>Subject</th>
                                    <th>Tags</th>
                                    <th>Department</th>
                                    <th>Service</th>
                                    <th>Contact</th>
                                    <th>Status</th>
                                    <th>Priority</th>
                                    <th>Last Reply</th>
                                    <th>Created</th>

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
export default Ticket