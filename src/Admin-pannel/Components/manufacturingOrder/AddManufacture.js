import React from "react";
import Select from "react-select";
import { useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs"
function AddManufacture(){
    const [value, setValue] = useState(null);
    const options = [
        { value: "", label: " " },
        { value: " ertert", label: " ertert" },
        { value: "Pizza_1234", label: "Pizza_1234" },
        { value: "Test", label: "Test" },
        { value: "Test", label: "Test" },
        { value: "Anasa001", label: "Anasa001" },
        { value: "Window", label: "Window" },
      ];
    const options1 = [
        { value: "", label: " " },
        { value: " Kilogram", label: " Kilogram" },
        { value: "Ton", label: "Ton" },
        { value: "Gram", label: "Gram" },
        { value: "Peice", label: "Peice" },
       
      ];
    const options2 = [
        { value: "", label: " " },
        { value: " yorr", label: " Kicdlogram" },
        { value: "jjk", label: "Todscn" },
        { value: "Gram", label: "Gredfcam" },
        { value: "Peice", label: "Pedfceice" },
       
      ];
    const options3 = [
        { value: "", label: " " },
        { value: " ", label: " " },
        { value: "", label: "" },
        { value: "", label: "" },
        { value: "", label: "" },
       
      ];
    const options5 = [
        { value: "", label: "All " },
        { value: " ", label: "qef " },
        { value: "", label: "dfv" },
        { value: "", label: "sg" },
        { value: "", label: "trhgvd" },
       
      ];
    return(
        <>
        <div className="container">
            <div className="card p-3">
                <div className="row">
                    <label className="form-label">
                        <h5>Add manufacturing order</h5>
                    </label>
                </div>
                <hr className="border-secondary opacity-3" />
                <div className="">
                <div className="row mt-3">
                    <div className="col-6">
                        <div className="">
                            <label className="form-label">Product</label>
                            <Select options={options} defaultValue={value} />
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="">
                            <label className="form-label">Deadline</label>
                            <input className="form-control" type="date"/>
                        </div>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-6">
                        <div className="">
                            <label className="form-label"> Quantity</label>
                            <input className="form-control" type="number"/>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="">
                            <label className="form-label">Plan from</label>
                            <input className="form-control" type="date"/>
                        </div>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-6">
                        <div className="">
                            <label className="form-label">Unit of measure</label>
                            <Select options={options1} defaultValue={value} />
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="">
                            <label className="form-label">Responsible</label>
                            <Select options={options2} defaultValue={value} />
                        </div>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-6">
                        <div className="">
                            <label className="form-label">Bills of material</label>
                            <Select options={options3} defaultValue={value} />
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="">
                            <label className="form-label">Reference code</label>
                            <input className="form-control" type="number"/>
                        </div>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-6">
                        <div className="">
                            <label className="form-label">Routing</label>
                            <input className="form-control" type="number" disabled/>
                        </div>
                    </div>
                    {/* <div className="col-6">
                        <div className="">
                            <label className="form-label">Reference code</label>
                            <input className="form-control" type="number"/>
                        </div>
                    </div> */}
                </div>
                </div>
                <div className="row mt-3 ml-3">
                    <label className="form-label">
                    Production Information
                    </label>
                </div>
                <hr className="border-secondary opacity-3" />
                        <div className="">
                        <Tabs
              defaultActiveKey="payment2"
              id="uncontrolled-tab-example"
              className="mb-3"
            >
              <Tab eventKey="payment2" title="Component">
                <div className="">
                    <div className="row">
                        <table className="table-secondary">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Product</th>
                                    <th>Unit</th>
                                    <th>To Consume</th>
                                    <th>Reserved</th>
                                    <th>Consumed</th>
                                </tr>
                            </thead>
                        </table>
                    </div>
                </div>
              </Tab>
              <Tab eventKey="Finished Product" title="Finished Product">
                <div className="mt-3">
                Use the Produce button or process the work orders to create some finished products.
                <hr className="border-secondary opacity-3" />
                </div>
              </Tab>
              <Tab eventKey="Miscellaneous" title=" Miscellaneous">
                <div className="">
                <div className="row mt-3">
                    <div className="col-12">
                        <div className="">
                            <label className="form-label">Components warehouse</label>
                            <Select options={options5} defaultValue={value} />
                        </div>
                    </div>
                   
                </div>
                <div className="row mt-3">
                    <div className="col-12">
                        <div className="">
                            <label className="form-label">Finished Products warehouse</label>
                            <Select options={options5} defaultValue={value} />
                        </div>
                    </div>
                   
                </div>
                </div>
              </Tab>
             
   </Tabs>
                        </div>
            </div>
        </div>
        </>
    )
}
export default AddManufacture