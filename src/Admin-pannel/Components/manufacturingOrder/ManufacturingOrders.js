import React from "react";
import { FaShirtsinbulk } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { BiRefresh } from "react-icons/bi";

import { Link } from "react-router-dom";
import Multiselect from "multiselect-react-dropdown";
import { useState } from "react";
function ManufacturingOrders() {
  const [data, setData] = useState([
    { name: "ertert" },
    { name: "pizza" },
    { name: "New Product_001_VAR2" },
    { name: "New Product_001_VAR3" },
    { name: "test1" },
    { name: "Test" },
  ]);
  const [data2, setData2] = useState([
    { name: "aaaa" },
    { name: "New Test" },
    { name: "Test" },
    { name: "Test_Routing" },
    { name: "test1" },
    { name: "Test" },
  ]);
  const [data3, setData3] = useState([
    { name: "Draft" },
    { name: "Planned" },
    { name: "Cancelled" },
    { name: "Confirmed" },
    { name: "Done" },
    { name: "In Progress" },
  ]);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const handleRemove = (option) => {
    setSelectedOptions([...option]);
  };
  return (
    <>
      <div className="container">
        <div className="card p-3">
          <div className="row">
            <label className="form-label">
              <h5>
                {" "}
                <FaShirtsinbulk />
                Manufacturing orders
              </h5>
            </label>
          </div>
          <hr className="border-secondary opacity-3" />
          <div className="row">
            <div className="col-4">
              <Link to="/admin/add-order" className="btn btn-primary">
                {" "}
                Add
              </Link>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-4">
              <Multiselect
                isObject={true}
                displayValue="name"
                options={data}
                selectedValues={[]}
                onRemove={(option) => {
                  handleRemove(option);
                }}
                onSelect={(option) => {
                  let clonedOptions = [...option];
                  setSelectedOptions(clonedOptions);
                }}
              />
            </div>
            <div className="col-4">
              <Multiselect
                isObject={true}
                displayValue="name"
                options={data2}
                selectedValues={[]}
                onRemove={(option) => {
                  handleRemove(option);
                }}
                onSelect={(option) => {
                  let clonedOptions = [...option];
                  setSelectedOptions(clonedOptions);
                }}
              />
            </div>
            <div className="col-4">
              <Multiselect
                isObject={true}
                displayValue="name"
                options={data3}
                selectedValues={[]}
                onRemove={(option) => {
                  handleRemove(option);
                }}
                onSelect={(option) => {
                  let clonedOptions = [...option];
                  setSelectedOptions(clonedOptions);
                }}
              />
            </div>
          </div>
          <div className="mt-2 ">
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
                    <span>Bulk action</span>
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
          <div className="row mt-3">
            <table className="table">
                <thead className="table-secondary">
                    <tr>
                    <th>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                  </div>
                </th>
                <th>
                    Reference
                </th>
                <th>Product</th>
                <th>Bills Of Material</th>
                <th>Quantity</th>
                <th>Unit</th>
                <th>Routing</th>
                <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="Trshow">
                        <td>
                        <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                  </div>
                        </td>
                        <td>
                        GH00002
                         <br/>
                  <Link to="/admin/view-manuf" className="eidtbtn1"> 
                  View
                  </Link>
                        </td>
                        <td>
                        ertert
                        </td>
                        <td>
                        BOM00001 ertert
                        </td>
                        <td>
                        10.00
                        </td>
                        <td>
                        Kilogram
                        </td>
                        <td>
                        aaaaaaaaaaa
                        </td>
                        <td>
                            <button className="btn btn-success">
                                Done
                            </button>
                        </td>

                    </tr>
                    <tr className="Trshow">
                        <td>
                        <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                  </div>
                        </td>
                        <td>
                        GH00001
                         <br/>
                  <Link to="/admin/view-billsofmaterials" className="eidtbtn1"> 
                  View
                  </Link>
                        </td>
                        <td>
                        ertert
                        </td>
                        <td>
                        BOM00001 ertert
                        </td>
                        <td>
                        50.00
                        </td>
                        <td>
                        Kilogram
                        </td>
                        <td>
                        New Test
                        </td>
                        <td>
                            <button className="btn btn-success">
                                Done
                            </button>
                        </td>

                    </tr>
                </tbody>
            </table>
          </div>
          <div className="row mt-3">
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
      </div>
    </>
  );
}

export default ManufacturingOrders;
