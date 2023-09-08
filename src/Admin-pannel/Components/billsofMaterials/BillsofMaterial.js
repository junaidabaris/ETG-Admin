import Multiselect from "multiselect-react-dropdown";
import React from "react";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { FaShirtsinbulk } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { BiRefresh } from "react-icons/bi";
import Select from "react-select";
import { Link } from "react-router-dom";

function BillsofMaterial() {
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
    { value: "When all Component are avilable", label: "When all Component are avilable" },
    { value: "When  Component for 1st opration are avilable", label: "When  Component for 1st opration are avilable" },
    
  ];
  const options4 = [
    { value: "Strict", label: "Strict" },
    { value: "Flexible", label: "Flexible" },
    
  ];
  const [show, setShow] = useState(false);
  const [value, setValue] = useState(null);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [data, setData] = useState([
    { name: "New Product 001" },
    { name: "New Product_001_VAR1" },
    { name: "New Product_001_VAR2" },
    { name: "New Product_001_VAR3" },
    { name: "New Product_001_VAR4" },
    { name: "MobileAuto 12-15-20" },
  ]);
  const [data1, setData1] = useState([
    { name: "Kit " },
    { name: "Manufacture this product" },
  ]);
  const [data2, setData2] = useState([{ name: "abc " }, { name: "Tin" }]);

  const [selectedOptions, setSelectedOptions] = useState([]);
  const handleRemove = (option) => {
    setSelectedOptions([...option]);
  };
  return (
    <>
      <div className="container">
        <div className="card">
          <div className="row">
            <div className="p-3 ml-3">
              <h5>
                {" "}
                <FaShirtsinbulk />
                Bills of materials
              </h5>
            </div>
          </div>
          <hr className="border-secondary opacity-3" />
          <div className="row">
            <div className="col-md-3">
              <Button
                variant="primary"
                onClick={handleShow}
                style={{ width: 150 }}
              >
                Add
              </Button>

              <Modal className="pop" show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Add bills of material</Modal.Title>
                </Modal.Header>
                <Modal.Body>
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
                    <label  className="form-label">
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

                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                  <Button variant="primary" onClick={handleClose}>
                    Save Changes
                  </Button>
                </Modal.Footer>
              </Modal>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="mt-3 ml-3">
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
            </div>
            <div className="col-md-4">
              <div className="mt-3 ml-3">
                <Multiselect
                  isObject={true}
                  displayValue="name"
                  options={data1}
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
            <div className="col-md-4">
              <div className="mt-3 ml-3">
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
          <table className="table mt-3">
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
                <th>Product</th>
                <th>BOM Code</th>
                <th>BOM Type</th>
                <th>Product Variant</th>
                <th>Quantity</th>
                <th>Unit</th>
                <th>Routing</th>
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
                  Small Kulfi <br/>
                  <Link to="/admin/view-billsofmaterials" className="eidtbtn1"> 
                  View
                  </Link>
                   
                  
                </td>
                <td>BOM00309</td>
                <td>Manufacture this product</td>
                <td></td>
                <td>100.00</td>
                <td>Pcs</td>
                <td>abc</td>
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
                  italian kitchen
                  <br/>
                  <Link to="/admin/view-billsofmaterials" className="eidtbtn1"> 
                  View
                  </Link>
                </td>
                <td>BOM00308</td>
                <td>Manufacture this product</td>
                <td></td>
                <td>5.00</td>
                <td>Pcs</td>
                <td>abc</td>
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
                  italian kitchen
                  <br/>
                  <Link to="/admin/view-billsofmaterials" className="eidtbtn1"> 
                  View
                  </Link>
                </td>
                <td>BOM00307</td>
                <td>Manufacture this product</td>
                <td></td>
                <td>1.00</td>
                <td>Pcs</td>
                <td>abc</td>
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
                  Car Tyre
                  <br/>
                  <Link to="/admin/view-billsofmaterials" className="eidtbtn1"> 
                  View
                  </Link>
                </td>
                <td>BOM00306</td>
                <td>Manufacture this product</td>
                <td></td>
                <td>1.00</td>
                <td>Pcs</td>
                <td>abc</td>
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
                <br/>
                  <Link to="/admin/view-billsofmaterials" className="eidtbtn1"> 
                  View
                  </Link>
                </td>
                <td>BOM00305</td>
                <td>Manufacture this product</td>
                <td></td>
                <td>1.00</td>
                <td>Pcs</td>
                <td>abc</td>
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
                <br/>
                  <Link to="/admin/view-billsofmaterials" className="eidtbtn1"> 
                  View
                  </Link>
                </td>
                <td>BOM00305</td>
                <td>Manufacture this product</td>
                <td></td>
                <td>1.00</td>
                <td>Pcs</td>
                <td>abc</td>
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
                <br/>
                  <Link to="/admin/view-billsofmaterials" className="eidtbtn1"> 
                  View
                  </Link>
                </td>
                <td>BOM00305</td>
                <td>Manufacture this product</td>
                <td></td>
                <td>1.00</td>
                <td>Pcs</td>
                <td>abc</td>
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
                <br/>
                  <Link to="/admin/view-billsofmaterials" className="eidtbtn1"> 
                  View
                  </Link>
                </td>
                <td>BOM00305</td>
                <td>Manufacture this product</td>
                <td></td>
                <td>1.00</td>
                <td>Pcs</td>
                <td>abc</td>
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
                <br/>
                  <Link to="/admin/view-billsofmaterials" className="eidtbtn1"> 
                  View
                  </Link>
                </td>
                <td>BOM00305</td>
                <td>Manufacture this product</td>
                <td></td>
                <td>1.00</td>
                <td>Pcs</td>
                <td>abc</td>
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
                <br/>
                  <Link to="/admin/view-billsofmaterials" className="eidtbtn1"> 
                  View
                  </Link>
                </td>
                <td>BOM00305</td>
                <td>Manufacture this product</td>
                <td></td>
                <td>1.00</td>
                <td>Pcs</td>
                <td>abc</td>
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
                <br/>
                  <Link to="/admin/view-billsofmaterials" className="eidtbtn1"> 
                  View
                  </Link>
                </td>
                <td>BOM00305</td>
                <td>Manufacture this product</td>
                <td></td>
                <td>1.00</td>
                <td>Pcs</td>
                <td>abc</td>
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
                <br/>
                  <Link to="/admin/view-billsofmaterials" className="eidtbtn1"> 
                  View
                  </Link>
                </td>
                <td>BOM00305</td>
                <td>Manufacture this product</td>
                <td></td>
                <td>1.00</td>
                <td>Pcs</td>
                <td>abc</td>
              </tr>
            </tbody>
          </table>
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
      </div>
    </>
  );
}
export default BillsofMaterial;
