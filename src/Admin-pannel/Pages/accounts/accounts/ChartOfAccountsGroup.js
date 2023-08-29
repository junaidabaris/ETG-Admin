import React from "react";
import { AiFillEdit } from "react-icons/ai"
import { AiFillDelete } from "react-icons/ai"
function ChartOfAccountGroup(){
    return(
        <>
        <div className="container">
        <div className="row">
            <div className="col-md-6">
            <h5>Chart of Accounts</h5>
            </div>
            <div className="col-md-6 text-end">
                <div className="">
                    <button className="btn btn-primary mr-2">
                        + Accounts
                    </button>
                    <button className="btn btn-primary mr-2">
                        + Sub Group
                    </button>
                    <button className="btn btn-primary">
                        + Group
                    </button>
                </div>
            </div>
           </div>
           <div className="card">
            <div className="card-body">
                <div className="row">
                    <div className="col-md-3">
                        <div className="">
                            <label className="form-label">
                                Account Code
                            </label>
                            <input className="form-control" type="text"/>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="">
                            <label className="form-label">
                                Account Name
                            </label>
                            <input className="form-control" type="text"/>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="">
                            <label className="form-label">
                                Account Subgroup
                            </label>
                            <select className="form-select">
                                <option></option>
                                <option></option>
                                <option></option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
           </div>
           <div className="card">
            <div className="cad-body">
                <div className="table">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Account code</th>
                                <th>Account name</th>
                                <th>Main Heads</th>
                                <th>Group</th>
                                <th>Sub Group</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>

                        </thead>
                        <tbody>
                            <tr>
                                <td>ACC1004</td>
                                <td>Cash In Hand</td>
                                <td>Accests</td>
                                <td> Current Accests</td>
                                <td> Cash</td>
                                <td> <button className="btn btn-success">Active</button></td>
                                <td><button><AiFillEdit/></button>
                                <button><AiFillDelete/></button></td>

                            </tr>
                            <tr>
                                <td>ACC1004</td>
                                <td>Cash In Hand</td>
                                <td>Accests</td>
                                <td> Current Accests</td>
                                <td> Cash</td>
                                <td> <button className="btn btn-success">Active</button></td>
                                <td><button><AiFillEdit/></button>
                                <button><AiFillDelete/></button></td>

                            </tr>
                            <tr>
                                <td>ACC1004</td>
                                <td>Cash In Hand</td>
                                <td>Accests</td>
                                <td> Current Accests</td>
                                <td> Cash</td>
                                <td> <button className="btn btn-success">Active</button></td>
                                <td><button><AiFillEdit/></button>
                                <button><AiFillDelete/></button></td>

                            </tr>
                            <tr>
                                <td>ACC1004</td>
                                <td>Cash In Hand</td>
                                <td>Accests</td>
                                <td> Current Accests</td>
                                <td> Cash</td>
                                <td> <button className="btn btn-success">Active</button></td>
                                <td><button><AiFillEdit/></button>
                                <button><AiFillDelete/></button></td>

                            </tr>
                            <tr>
                                <td>ACC1004</td>
                                <td>Cash In Hand</td>
                                <td>Accests</td>
                                <td> Current Accests</td>
                                <td> Cash</td>
                                <td> <button className="btn btn-success">Active</button></td>
                                <td><button><AiFillEdit/></button>
                                <button><AiFillDelete/></button></td>

                            </tr>
                            <tr>
                                <td>ACC1004</td>
                                <td>Cash In Hand</td>
                                <td>Accests</td>
                                <td> Current Accests</td>
                                <td> Cash</td>
                                <td> <button className="btn btn-success">Active</button></td>
                                <td><button><AiFillEdit/></button>
                                <button><AiFillDelete/></button></td>

                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
           </div>
        </div>
        </>
    )
}
export default ChartOfAccountGroup