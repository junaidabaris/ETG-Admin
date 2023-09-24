import React from "react";
import { FaShirtsinbulk } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { BiRefresh } from "react-icons/bi";
import { Link } from "react-router-dom";
import Multiselect from "multiselect-react-dropdown";
import { useState } from "react";
import TableHead from "../tableHeader/TableHead";

function WorkOrders(){
    const [data, setData] = useState([
        { name: "GH0001" },
        { name: "GH0002" },
        { name: "GH0003" },
        { name: "GH0004" },
        { name: "GH0005" },
      ]);
      const [data2, setData2] = useState([
        { name: "ertert" },
        { name: "pizza" },
        { name: "New Product_001_VAR2" },
        { name: "New Product_001_VAR3" },
        { name: "test1" },
        { name: "Test" },
      ]);
      const [data3, setData3] = useState([
        { name: "Waiting For Another WO" },
        { name: "Ready" },
        { name: "Processing" },
        { name: "Finished" },
        { name: "Pause" },
       
      ]);
      const [selectedOptions, setSelectedOptions] = useState([]);
      const handleRemove = (option) => {
        setSelectedOptions([...option]);
      };
    return(
        <>
       <div className="container">
        <div className="card p-3">
        <div className="row">
            <label className="form-label">
              <h5>
                {" "}
                <FaShirtsinbulk />
                Work orders
              </h5>
            </label>
          </div>
          <hr className="border-secondary opacity-3" />
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
          <div className="">
            <TableHead/>
          </div>
          <div className="row p-2">
            <table className="table">
                <thead className="table-secondary">
                    <tr>
                        <th>Work Order</th>
                        <th>Scheduled date start</th>
                        <th>Work center</th>
                        <th>Manufacturing Order</th>
                        <th>Product</th>
                        <th>Quantity</th>
                        <th>Unit</th>
                        <th>Status</th>
                    </tr>

                </thead>
                <tbody>
                    <tr  className="Trshow">
                        <td>
                        Cutting <br/>
                  <Link to="/admin/view-work-order" className="eidtbtn1"> 
                  View
                  </Link>
                        </td>
                        <td></td>
                        <td>Test</td>
                        <td>GH00003</td>
                        <td>pizza-1234</td>
                        <td>15.00</td>
                        <td>Gram</td>
                        <td className="" style={{color:"lightblue"}}>Ready</td>
                        </tr>
                </tbody>
            </table>
          </div>
        </div>
       </div>
        </>
    )
}
export default WorkOrders