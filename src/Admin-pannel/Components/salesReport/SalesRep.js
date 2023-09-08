import React from "react";
import { useState } from "react";
import Select from "react-select";
import { LiaBezierCurveSolid, LiaTachometerAltSolid } from 'react-icons/lia'

function SalesRep(){
    const options = [
        { value: "All WareHouse", label: "All WareHouse" },
        { value: "System WareHouse", label: "System WareHouse" },
        { value: "Warehouse2", label: "Warehouse2" },
      ];
    const options1 = [
        { value: "All ", label: "All" },
        { value: "Admin", label: "Admin" },
        { value: "Seller", label: "Seller" },
        { value: "Purchase", label: "Purchase" },
        { value: "Accounts", label: "Accounts" },
      ];
      const options2 = [
        { value: "", label: " " },
        { value: " ", label: " " },
        { value: "", label: "" },
      ];
      const [value, setValue] = useState(null);
    return(
        <>
        <div className="container">
        <div className="row">
                <div className="col-md-6 mt-2">
                    <h5>Sales Report  </h5>
                </div>
                <div className="col-md-6 text-right">
                    <button className="btn btn-text-only"><span><LiaTachometerAltSolid/></span> Home  </button>
                    <button className="btn btn-text-only">Sales Report   </button>
                </div>
            </div>
            <div className="card">
                <div className="row p-3">
                    <div className="col">
                    <label className="form-label fs-6">Please Enter Valid Information</label>
                    </div>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="d-flex">
                                        <label className="form-label">
                                        Warehouse *
                                        </label>
                                       
                                    </div>
                                </div>
                                <div className="col-md-6">
                                <div className="ml-3" style={{width:200}}>
                                       <Select
                                  options={options}
                                  defaultValue={value}
                                />
                                       </div>
                                </div>
                                <div className="col-md-6 mt-3">
                                    <div className="d-flex">
                                        <label className="form-label">
                                        From Date
                                        </label>
                                        
                                    </div>
                                </div>
                                <div className="col-md-6 mt-3">
                                <div className="ml-3">
                                            <input className="form-control" type="date" style={{width:200}}/>
                                        </div>
                                </div>
                                <div className="col-md-6 mt-3">
                                    <div className="d-flex">
                                        <label className="form-label">
                                        User
                                        </label>

                                    </div>
                                </div>
                                <div className="col-md-6 mt-3">
                                <div className="ml-3" style={{width:200}}>
                                       <Select
                                  options={options1}
                                  defaultValue={value}
                                />
                                </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="row">
                            <div className="col-md-6">
                                    <div className="d-flex">
                                        <label className="form-label">
                                        Customer Name 
                                        </label>
                                       
                                    </div>
                                </div>
                                <div className="col-md-6">
                                <div className="" style={{width:200}}>
                                       <Select
                                  options={options2}
                                  defaultValue={value}
                                />
                                       </div>
                                </div>
                                <div className="col-md-6 mt-3">
                                    <div className="d-flex">
                                        <label className="form-label">
                                        To Date
                                        </label>
                                       
                                    </div>
                                </div>
                                <div className="col-md-6 mt-3">
                                    <div className="d-flex">
                                        <input className="form-control" type="date" style={{width:200}}/>
                                       
                                    </div>
                                </div>
                                <div className="col-md-6 mt-3">
                                    <div className="d-flex">
                                    <label className="form-label">
                                    View Account Receivable
                                    </label>                                  
                                                                         
                                    </div>
                                </div>
                                <div className="col-md-6 mt-3">
                                    <div className="d-flex">
                                    <input className="" type="checkbox" style={{width:200}}/>                                  
                                                                         
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-md-6 text-right">
                            <button className="btn btn-success">Show</button>
                        </div>
                        <div className="col-md-6">
                            <button className="btn btn-primary" style={{backgroundColor:"#f39c12"}}>Close</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card mt-3">
                <div className="row">
                    <div className="col-md-10">
                        <label className="form-label ml-2">
                        Records Table
                        </label>
                    </div>
                    <div className="col-md-2">
                    <div className="dropdown">
  <a
    className="btn btn-secondary dropdown-toggle"
    href="#"
    role="button"
    id="dropdownMenuLink"
    data-bs-toggle="dropdown"
    aria-expanded="false"
  >
   Export
  </a>
  <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
    <li>
      <a className="dropdown-item" href="#">
        Action
      </a>
    </li>
    <li>
      <a className="dropdown-item" href="#">
        Another action
      </a>
    </li>
    <li>
      <a className="dropdown-item" href="#">
        Something else here
      </a>
    </li>
  </ul>
</div>

                    </div>
                </div>
                <div className="row p-3">
                    <table className="table table-secondary">
                        <thead>
                            <tr>
                                <th>
                                    #
                                </th>
                                <th>
                                Warehouse Name
                                    </th>

                                <th>Invoice No.</th>
                                <th>Sales Date</th>
                                <th>Customer ID</th>
                                <th>Customer Name</th>
                                <th>Invoice Total(₹)e</th>
                                <th>	Paid Payment(₹)</th>
                                <th>Due Amount(₹)</th>
                                <th>User</th>
                               
                            </tr>
                        </thead>
                    </table>
                </div>
            </div>
        </div>
        </>
    )
}
export default SalesRep