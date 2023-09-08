import React from "react";
import { LiaBezierCurveSolid, LiaTachometerAltSolid } from 'react-icons/lia'
function SalesTaxRep(){
    return(
        <>
        <div className="container">
            <div className="row">
                <div className="col-md-6 mt-2">
                    <h5>Sales Tax Report </h5>
                </div>
                <div className="col-md-6 text-right">
                    <button className="btn btn-text-only"><span><LiaTachometerAltSolid/></span> Home  </button>
                    <button className="btn btn-text-only">Sales Tax Report </button>
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
                        <div className="col-md-1">

                        </div>
                        <div className="col-md-5">
                        <div className="d-flex">
                            <label className="form-label mt-2" style={{width:100}}>
                            From Date
                            </label>
                            <input className="form-control" type="date" style={{width:250}}/>
                        </div>
                        </div>
                        <div className="col-md-5">
                        <div className="d-flex">
                            <label className="form-label mt-2" style={{width:100}}>
                            To Date
                            </label>
                            <input className="form-control" type="date" style={{width:250}}/>
                        </div>
                        </div>
                        <div className="col-md-1">
                            
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
                                Invoice No.
                                    </th>

                                <th>Sales Date</th>
                                <th>Customer Name</th>
                                <th>TAX Number</th>
                                <th>Rate</th>
                                <th>Discount Amount</th>
                                <th>Tax Amount</th>
                                <th>	Round Off</th>
                                <th>Invoice Total</th>
                            </tr>
                        </thead>
                    </table>
                </div>
            </div>
        </div>
        </>
    )
}
export default SalesTaxRep