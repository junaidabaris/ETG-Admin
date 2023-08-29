import React from "react";
import { BiRefresh } from 'react-icons/bi';
import { AiOutlineSearch } from 'react-icons/ai';

function ReminderDash(){
    return(
        <>
        <div className="card">
          <div className="card-body">
            <h5>Reminders</h5>
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
                <th>Related To</th>
                <th>Description</th>
                  <th>Date</th>
                  <th>Remind</th>
                  <th>Is notified</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                <td>tehseel</td>
                <td>
                    Raju has to give us the old PAN as well. Plz send ASAP.
                    Thanks.
                  </td>
                  <td>23/11/2022 17:09:20</td>
                  <td>Azharuddin Shamim</td>
                 
                  <td> No</td>
                  
                </tr>
                <tr>
                <td>Asheeq Ahmed-century@gmail.com</td>
                  <td>
                    Raju has to give us the old PAN as well. Plz send ASAP.
                    Thanks.
                  </td>
                  <td>09/11/2022 17:09:20</td>
                  <td>Azharuddin Shamim</td>
                 
                  
                  <td>No</td>
                    
                </tr>
              </tbody>
            </table>
          </div>
          <div className="row">
            <div className="col-md-7">
              <div className="">
                <lable className="form-lable">
                  Showing 1 to 1 of 1 entries
                </lable>
              </div>
            </div>
            <div className="col-md-5 text-end">
              <button
                className="btn-outline-secondary"
                style={{ width: 80, height: 40 }}
              >
                Previous
              </button>
              <button
                className="btn btn-primary"
                style={{ width: 40, height: 40 }}
              >
                1
              </button>
              <button
                className="btn-outline-secondary"
                style={{ width: 80, height: 40 }}
              >
                Next
              </button>
            </div>
          </div>
        </div>
        </>
    )
}
export default ReminderDash