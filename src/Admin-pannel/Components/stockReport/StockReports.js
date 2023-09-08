import React from "react";
import { useState } from "react";
import Select from "react-select";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs"

import { LiaBezierCurveSolid, LiaTachometerAltSolid } from "react-icons/lia";
import ItemWise from "./ItemWise";
import BrandWise from "./BrandWise";
function StockReports(){
    const options1 = [
        { value: "Select", label: "Select" },
        { value: "Rebook", label: "Rebook" },
        { value: "Lenovo", label: "Lenovo" },
        { value: "Redmi", label: "Redmi" },
        { value: "Apple", label: "Apple" },
        { value: "OnePlus", label: "OnePlus" },
      ];
      const options2 = [
        { value: "All WareHouse", label: "All WareHouse" },
        { value: "System WareHouse", label: "System WareHouse" },
        { value: "Warehouse2", label: "Warehouse2" },
      ];
      const options3 = [
        { value: "Select", label: "Select" },
        { value: "Electric", label: "Electric" },
        { value: "Service", label: "Service" },
        { value: "Accessories", label: "Accessories" },
        { value: "Mobile", label: "Mobile" },
        { value: "Watch", label: "Watch" },
      ];
      const [value, setValue] = useState(null);
    return(
        <>
         <div className="container">
        <div className="row">
          <div className="col-md-6 mt-2">
            <h5>Stock Report </h5>
          </div>
          <div className="col-md-6 text-right">
            <button className="btn btn-text-only">
              <span>
                <LiaTachometerAltSolid />
              </span>{" "}
              Home{" "}
            </button>
            <button className="btn btn-text-only">Stock Report </button>
          </div>
        </div>
        <div className="card">
          <div className="row p-3">
            <div className="col">
              <label className="form-label fs-6">
                Please Enter Valid Information
              </label>
            </div>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-md-1"></div>
              <div className="col-md-10">
                {/* <div className="row">
                  <div className="col-6">
                    <div className="row">
                      <div className="col-6 text-right">
                        <label className="form-label">User</label>
                      </div>

                      <div className="col-md-6">
                        <div className="" style={{ width: 200 }}>
                          <Select options={options} defaultValue={value} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6"></div>
                </div> */}
                <div className="row mt-3">
                  <div className="col-6">
                    <div className="row">
                      <div className="col-6 text-right">
                        <label className="form-label">Warehouse </label>
                      </div>

                      <div className="col-md-6">
                        <div className="" style={{ width: 200 }}>
                          <Select options={options2} defaultValue={value} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-6">
                    <div className="row">
                      <div className="col-6 text-right">
                        <label className="form-label">Brand</label>
                      </div>

                      <div className="col-md-6">
                        <div className="" style={{ width: 200 }}>
                        <Select options={options1} defaultValue={value} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="row">
                      <div className="col-6 text-right">
                        <label className="form-label">Category</label>
                      </div>

                      <div className="col-md-6">
                        <div className="" style={{ width: 200 }}>
                        <Select options={options3} defaultValue={value} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-3"></div>
            <div className="row mt-3">
              <div className="col-md-6 text-right">
                <button className="btn btn-success">Show</button>
              </div>
              <div className="col-md-6">
                <button
                  className="btn btn-primary"
                  style={{ backgroundColor: "#f39c12" }}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="card mt-3">
                <div className="card-body">
                <Tabs
              defaultActiveKey="payment2"
              id="uncontrolled-tab-example"
              className="mb-3"
            >
              <Tab eventKey="payment2" title="Item Wise">
                <ItemWise/>
              </Tab>
              <Tab eventKey="invoice2" title="Brand Wise">
                <BrandWise/>
              </Tab>
             
            </Tabs>
                </div>
            </div>
       
      </div>
        
        </>
    )
}
export default StockReports