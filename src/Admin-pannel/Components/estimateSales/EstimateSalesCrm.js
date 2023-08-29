import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineDoubleLeft } from "react-icons/ai";
import { FaFilter } from "react-icons/fa";
import { BiRefresh } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";
function EstimateSalesCrm(){
    return(
        <>
       <div className="container">
        <div className="card">
            <div className="card-body">
                <div className="row">
                    <div className='col-md-6 '>
                    <Link to="/admin/new-estimate" className="btn btn-circle btn-info"> Create New Estimate</Link>
                    </div>
                    <div className="col-md-6 text-right ">
                    <div className="button">
                  <button className="btn outline-secondary">
                    <span>
                      <AiOutlineDoubleLeft />
                    </span>
                  </button>
                  <button className="btn">
                    <span>
                      <FaFilter />
                    </span>
                  </button>
                </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="card">
            <div className="card-body">
                <div className="row">
                <div className="col-md-6">
                <div className="select d-flex">
                  <select className="form-select" style={{ width: 120 }}>
                    <option>25</option>
                    <option>50</option>
                    <option>100</option>
                  </select>
                  <button className="btn btn-outline-secondary  ml-2">
                    <span>Export</span>
                  </button>
                  <button className="btn btn-outline-secondary">
                    <span>
                      <BiRefresh />
                    </span>
                  </button>
                </div>
              </div>
              <div className="col-md-6 d-flex justify-content-end">
                <div
                  className="input-group flex-nowrap text-end"
                  style={{ width: 140 }}
                >
                  <span className="input-group-text" id="addon-wrapping">
                    <AiOutlineSearch />
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search"
                    aria-label="Search"
                    aria-describedby="addon-wrapping"
                  />
                </div>
              </div>
                </div>
            </div>
            <div className="table">
                <table className="table table-secondary">
                    <thead>
                        <tr>
                            <th>Estimate #</th>
                            <th>Amount</th>
                            <th>Total Tax</th>
                            <th>Customer</th>
                            <th>Project</th>
                            <th>Tags</th>
                            <th>Date</th>
                            <th>Expiry Date</th>
                            <th>Reference#</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                           No Record
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
      </div>
        </>
    )
}
export default EstimateSalesCrm