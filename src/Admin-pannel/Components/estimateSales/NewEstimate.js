import React from "react";
import Select from "react-select";
import { useState } from "react";
import { BiEditAlt } from "react-icons/bi";
import { BsTagFill } from "react-icons/bs";
import { BsFillCheckSquareFill } from "react-icons/bs";
function NewEstimate() {
  const [content, setContent] = useState("");

  const [value, setValue] = useState(null);
  const options = [
    { value: "p", label: "pe" },
    { value: "Comp", label: "Comp" },
  ];
  const options4 = [
    { value: "Azhruddin Shammim", label: "Azhruddin Shammim" },
    { value: "Staff1 Sec", label: "Staff1 Sec" },
  ];
  const options5 = [
    { value: "New Widow Pension", label: "New Widow Pension" },
    { value: "Pan Card Name", label: "Pan Card Name" },
  ];
  return (
    <>
      <div className="container">
        <h4>Create New Estimate</h4>
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-md-6">
                <div className="form">
                  <label className="form-label">Customer</label>
                  <Select options={options} defaultValue={value} />
                </div>
                <div className="row mt-3">
                  <div className="col-md-12">
                    <span>
                      <BiEditAlt />
                    </span>
                  </div>
                  <div className="col-md-6 mt-3">
                    <p>Bill To</p>
                    <address>
                      <span className="billing-street">---</span>
                      <br />
                      <span className="billing-city">---,</span>
                      <span className="billing-state">---</span>
                      <br />
                      <span className="billing-country">---,</span>
                      <span className="billing-zip">---</span>
                    </address>
                  </div>
                  <div className="col-md-6 mt-3">
                    <p>Ship To</p>
                    <address>
                      <span className="billing-street">---</span>
                      <br />
                      <span className="billing-city">---,</span>
                      <span className="billing-state">---</span>
                      <br />
                      <span className="billing-country">---,</span>
                      <span className="billing-zip">---</span>
                    </address>
                  </div>
                  <div className="col-md-12 mt-3">
                    <div className="form-group">
                      <label className="form-label">Estimate Number</label>
                      <div className="input-group flex-nowrap">
                        <span class="input-group-text" id="addon-wrapping">
                          EST-
                        </span>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Username"
                          aria-label="Username"
                          aria-describedby="addon-wrapping"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="form-label">Estimate Date</label>
                        <input className="form-control" type="date" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="form-label">Expiry Date</label>
                        <input className="form-control" type="date" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form mt-3">
                  <span>
                    <BsTagFill />
                  </span>
                  <label className="form-label">Tags</label>
                  <select>
                    <option></option>
                  </select>
                </div>
                <div className="row mt-3">
                  <div className="col-md-6">
                    <div className="form">
                      <label className="form-label">Currency</label>
                      <select className="form-select" placeholder="INR">
                        <option placeholder="INR">INR</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form">
                      <label className="form-label">Status</label>
                      <select className="form-select">
                        <option>Draft</option>
                        <option>Sent</option>
                        <option>Expired</option>
                        <option>Declined</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-md-12">
                    <div className="form">
                      <label className="form-label">Reference #</label>
                      <input className="form-control" type="text" />
                    </div>
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-md-6">
                    <div className="form">
                      <label className="form-label">Sale Agent</label>
                      <Select options={options4} defaultValue={value} />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form">
                      <label className="form-label">Discount Type</label>
                      <select className="form-select">
                        <option>No Discount</option>
                        <option>Before Tax</option>
                        <option>After Tax</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="row  mt-3">
                  <div className="col-md-12">
                    <div className="form">
                      <label className="form-label">Admin Note</label>
                      <textarea className="form-control" typeof="text" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr className="border border-1 border-secondary opacity-50" />
            <div className="row">
              <div className="col-md-6">
                <Select options={options5} defaultValue={value} />
              </div>
              <div className="col-md-6 d-flex">
                <div className="form">
                  <label>Show Quantity as:</label>
                </div>
                <div className="form-check ml-3">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                  />
                  <label className="form-check-label" for="flexRadioDefault1">
                    <h5>Qty</h5>
                  </label>
                </div>
                <div className="form-check ml-3">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                  />
                  <label className="form-check-label" for="flexRadioDefault1">
                    <h5>Hours</h5>
                  </label>
                </div>
                <div className="form-check ml-3">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                  />
                  <label className="form-check-label" for="flexRadioDefault1">
                    <h5>Qty/Hours</h5>
                  </label>
                </div>
              </div>
            </div>

            <div className="table mt-3">
              <div className="table">
                <table className="form-table table-secondary">
                  <thead>
                    <tr>
                      <th> Item</th>
                      <th>Description</th>
                      <th>Qty</th>
                      <th>Rate</th>
                      <th>Tax</th>
                      <th>Amount</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <textarea className="form-control " type="text" />
                      </td>
                      <td>
                        <textarea className="form-control " type="text" />
                      </td>
                      <td>
                        <input className="form-control" type="text" />
                        <span>Unit</span>
                      </td>
                      <td>
                        <input className="form-control" type="rate" />
                      </td>
                      <td>
                        <select className="form-select" style={{ width: 60 }}>
                          <option></option>
                          <option></option>
                          <option></option>
                        </select>
                      </td>

                      <td></td>
                      <td>
                        <button className="btn">
                          <BsFillCheckSquareFill />
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="row text-end">
              <div className="col-md-5 col-lg-5"></div>
              <div className="col-md-7 col-md-7">
                <table className="">
                  <tbody>
                    <tr>
                      <td className="subtotal">
                        <span>Sub Total :</span>
                      </td>
                      <td className="subtotal">$00.10</td>
                    </tr>
                    <tr>
                      <td>
                        <div className="row">
                          <div className="col-md-7">
                            <span>Discount</span>
                          </div>
                          <div className="col-md-5">
                            <div className="">
                              <input className="form-control" type="number" />
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>$0.00</td>
                    </tr>
                    <tr>
                      <td>
                        <div className="row">
                          <div className="col-md-7">
                            <span>Adjustment</span>
                          </div>
                          <div className="col-md-5">
                            <div className="">
                              <input className="form-control" typeof="number" />
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>$0.00</td>
                    </tr>

                  </tbody>
                </table>
              </div>
              <hr className="border border-1 border-secondary opacity-50" />
            
            </div>
            <div className="row mt-3">
                <div className="col-md-12">
                    <label className="form-label">Client Notes</label>
                    <textarea className="form-control" typeof="text"/>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-md-12">
                    <label className="form-label">Terms & Conditions</label>
                    <textarea className="form-control" typeof="text"/>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-md-12 text-right">
                    <div className="button">
                        <button className="btn btn-primary">
                            Save
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
export default NewEstimate