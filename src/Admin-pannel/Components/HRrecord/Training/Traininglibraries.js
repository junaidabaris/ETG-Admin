import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Select from "react-select";
import { useState } from "react";
import JoditEditor from "jodit-react";
import { useRef } from "react";
import { FiRefreshCcw } from "react-icons/fi";
import { BiSearch } from "react-icons/bi";

import { Link, useNavigate } from "react-router-dom";

function Traininglibraries() {
  const navigate = useNavigate();
  const changeRoute = () => {
    navigate("/admin/libraries-add");
  };
  return (
    <>
      <div className="card">
        <div className="card-body">
          <div className="container">
            <div className="row" style={{ marginBottom: "15px" }}>
              <div className="col-md-2">
                <button
                  className="btn btn-primary btn-sm"
                  type="button"
                  onClick={changeRoute}
                >
                  ADD
                </button>
              </div>
            </div>
            <div className="row" style={{ marginBottom: "15px" }}>
              <div className="col-md-2" style={{ paddingRight: "0px" }}>
                <div className="dropdown">
                  <select className="form-select form-select-sm">
                    <option value={0}>10</option>
                    <option value={0} selected>
                      25
                    </option>
                    <option value={0}>50</option>
                    <option value={0}>100</option>
                    <option value={0}>All</option>
                  </select>
                </div>
              </div>

              <div className="col-md-6" style={{ paddingLeft: "2px" }}>
                <div
                  className="btn-group btn-group-sm"
                  role="group"
                  aria-label="Basic outlined example"
                  style={{ height: "31px" }}
                >
                  <button type="button" className="btn btn-outline-primary">
                    Export
                  </button>
                  <button type="button" className="btn btn-outline-primary">
                    Bulk Actions
                  </button>

                  <button type="button" className="btn btn-outline-primary">
                    <FiRefreshCcw />
                  </button>
                </div>
              </div>

              <div className="Incsearch col-md-4">
                <div>
                  <div
                    className="input-group flex-nowrap incwidth"
                    style={{ height: "31px" }}
                  >
                    <span className="input-group-text" id="addon-wrapping">
                      <BiSearch />
                    </span>
                    <input
                      type="text"
                      placeholder=" Search..."
                      aria-label="Search"
                      aria-describedby="addon-wrapping"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row">
                <table className="table table-sm">
                  <thead className="table-info">
                    <tr>
                      <th>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            defaultValue=""
                            id="flexCheckDefault"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexCheckDefault"
                          ></label>
                        </div>
                      </th>
                      <th>Name</th>
                      <th>Training Type</th>
                      <th>Total questions</th>
                      <th>Total participants</th>
                      <th>Created date</th>
                    </tr>
                  </thead>
                  <tbody className="table-light">
                    <tr>
                      <td>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            defaultValue=""
                            id="flexCheckDefault"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexCheckDefault"
                          ></label>
                        </div>
                      </td>
                      <td>
                        <a href="#" class="text-decoration-none">
                          {" "}
                          4234234234
                        </a>
                        <div className="row">
                          <div
                            className="col-md-4"
                            style={{
                              borderRight: "1px solid lightgrey",
                              paddingRight: "0px",
                            }}
                          >
                            Edit
                          </div>

                          <div
                            className="col-md-6 text-danger"
                            style={{
                              paddingLeft: "2px",
                            }}
                          >
                            Delete
                          </div>
                        </div>
                      </td>
                      <td>Đào tạo thuê ngoài</td>
                      <td>0</td>
                      <td>0</td>
                      <td> 2023-09-08 11:28:49</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="row" style={{ marginBottom: "15px" }}>
                <div className="col-md-12">
                  <span>Showing 1 to 1 of 1 entries</span>
                </div>
              </div>
              <div className="row">
                <div
                  className="col-md-12"
                  style={{ display: "flex", justifyContent: "end" }}
                >
                  <button
                    type="button"
                    className="btn btn-outline-secondary  btn-sm"
                  >
                    Previous
                  </button>
                  <button type="button" className="btn btn-primary  btn-sm">
                    1
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-secondary  btn-sm"
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Traininglibraries