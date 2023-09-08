import React from "react";
import Select from "react-select";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FaShirtsinbulk } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { BiRefresh } from "react-icons/bi";
function ViewBillsofMaterials() {
  const [value, setValue] = useState(null);
  const options1 = [
    { value: "", label: " " },
    { value: " ", label: " " },
    { value: "", label: "" },
  ];
  const options2 = [
    { value: "", label: "" },
    { value: "ENR0007 abc", label: "ENR0007 Abc" },
    { value: "ENR0008 Abc", label: "ENR0008 Abc" },
  ];
  const options3 = [
    {
      value: "When all Component are avilable",
      label: "When all Component are avilable",
    },
    {
      value: "When  Component for 1st opration are avilable",
      label: "When  Component for 1st opration are avilable",
    },
  ];
  const options4 = [
    { value: "Strict", label: "Strict" },
    { value: "Flexible", label: "Flexible" },
  ];
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="card p-3">
              <div className="row mt-2">
                <label className="form-label">
                  <h5>Small Kulfi</h5>
                </label>
                <hr className="border-secondary opacity-3" />
                <div className="">
                  <div className="form">
                    <lable>BOM code</lable>
                    <input className="form-control" type="text" />
                  </div>
                  <div className="form">
                    <lable> Product</lable>
                    <select className="form-select">
                      <option>cxc</option>
                      <option>car tyre</option>
                      <option>italian kitchen</option>
                      <option>amd ryden</option>
                      <option>amd ryden</option>
                      <option>amd ryden</option>
                      <option>amd ryden</option>
                      <option>amd ryden</option>
                      <option>amd ryden</option>
                      <option>amd ryden</option>
                    </select>
                  </div>
                  <div className="form">
                    <lable>Product variant</lable>
                    <Select options={options1} defaultValue={value} />
                  </div>
                  <div className="row">
                    <div className="col-6">
                      <div className="form">
                        <lable>Quantity</lable>
                        <input type="number" className="form-control" />
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="form">
                        <label className="form-label">Unit of measure</label>
                        <select className="form-select">
                          <option>ML</option>
                          <option>Pcs</option>
                          <option>Litre</option>
                          <option>ci</option>
                          <option>VND</option>
                          <option>Piecs</option>
                          <option>Carton</option>
                          <option>Outer</option>
                          <option>Aser</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-6">
                      <div className="form">
                        <lable>Routing</lable>
                        <Select options={options2} defaultValue={value} />
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="form">
                        <div className="">
                          <label className="form-label">BoM Type</label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexRadioDefault1"
                          >
                            Manufacture this product
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexRadioDefault1"
                          >
                            Kit
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <label className="form-label">
                      <h5>Miscellaneous</h5>
                    </label>
                  </div>
                  <div className="row">
                    <div className="form">
                      <lable>Manufacturing Readiness</lable>
                      <Select options={options3} defaultValue={value} />
                    </div>
                  </div>
                  <div className="row">
                    <div className="form">
                      <lable>Consumption</lable>
                      <Select options={options4} defaultValue={value} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card p-3">
              <div className="row mt-2">
                <label className="form-label">
                  <h5>
                    <FaShirtsinbulk />
                    Component
                  </h5>
                </label>
              </div>
              <div className="row">
                <div className="col-4">
                  <button className="btn btn-info">Add</button>
                </div>
              </div>
              <div className="mt-2 ml-3">
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
              <div className="row">
              <table className="table table-secondary mt-3">
                <thead>
                    <tr>
                        <th>Order</th>
                        <th>Componenet</th>
                        <th>Quantity</th>
                        <th>Unit</th>
                        <th>Apply On Variant</th>
                        <th>Consumed in opration</th>
                    </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>	New Product 001 <br/>New_Product_001_VAR1-<br/>New_Product_001_VAR2-<br/>New_Product_001_VAR3</td>
                            <td>1.00</td>
                            <td>Cl</td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
              </table>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default ViewBillsofMaterials