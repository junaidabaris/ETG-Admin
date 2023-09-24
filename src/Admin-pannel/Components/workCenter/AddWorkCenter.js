import React from "react";
import Select from "react-select";
import { BiSolidPieChartAlt2 } from 'react-icons/bi'
import { useState } from "react";
import JoditEditor from "jodit-react";
import { useRef } from "react";
function AddWorkCenter(){
    const options2 = [
        { value: "", label: "Not Selected" },
        { value: "Standart 40 hours/week", label: "Standart 40 hours/week" },
        
      ];
      const [value, setValue] = useState(null);
      const editor = useRef(null);
  const [content, setContent] = useState("");
    return(
        <>
        <div className="container">
            <div className="card p-3">
                <div className="row">
                    <div className="col-6">
                        <label className="form-label">
                            <h5>Add Work Center</h5>
                        </label>
                    </div>
                    <div className="col-6">
                        {/* <div className="">
                            <button>
                                <span><BiSolidPieChartAlt2/></span>
                            </button>
                        </div> */}
                        <div className="o_not_full oe_button_box">
  <button type="button" name={240} className="btn oe_stat_button">
    <i className="fa fa-fw o_button_icon fa-pie-chart" />
    <div className="o_field_widget o_stat_info">
      <span className="o_stat_value">
        <div
          name="oee"
          className="o_field_widget o_stat_info o_readonly_modifier"
          data-original-title=""
          title=""
        >
          <span className="o_stat_value">0.00</span>
          <span className="o_stat_text" />
        </div>
        %
      </span>
      <span className="o_stat_text">OEE</span>
    </div>
  </button>
  <button type="button" name={241} className="btn oe_stat_button">
    <i className="fa fa-fw o_button_icon fa-bar-chart" />
    <div className="o_field_widget o_stat_info">
      <span className="o_stat_value">
        <div
          name="blocked_time"
          className="o_field_widget o_stat_info o_readonly_modifier"
          data-original-title=""
          title=""
        >
          <span className="o_stat_value">0.00</span>
          <span className="o_stat_text" />
        </div>{" "}
        Hours
      </span>
      <span className="o_stat_text">Lost</span>
    </div>
  </button>
  <button
    type="button"
    name={237}
    className="btn oe_stat_button"
    context="{'search_default_workcenter_id': id}"
  >
    <i className="fa fa-fw o_button_icon fa-bar-chart" />
    <div className="o_field_widget o_stat_info">
      <span className="o_stat_value">
        <div
          name="workcenter_load"
          className="o_field_widget o_stat_info o_readonly_modifier"
        >
          <span className="o_stat_value">0.00</span>
          <span className="o_stat_text" />
        </div>{" "}
        Minutes
      </span>
      <span className="o_stat_text">Load</span>
    </div>
  </button>
  <button
    type="button"
    name={243}
    className="btn oe_stat_button"
    context="{'search_default_workcenter_id': id, 'search_default_thisyear': True}"
  >
    <i className="fa fa-fw o_button_icon fa-bar-chart" />
    <div className="o_field_widget o_stat_info">
      <span className="o_stat_value">
        <div
          name="performance"
          className="o_field_widget o_stat_info o_readonly_modifier"
          data-original-title=""
          title=""
        >
          <span className="o_stat_value">0</span>
          <span className="o_stat_text" />
        </div>
        %
      </span>
      <span className="o_stat_text">Performance</span>
    </div>
  </button>
</div>

                    </div>
                    <hr className="border-secondary opacity-3" style={{color:"#d8341b"}}/>
                    <div className="row mt-3">
                         <div className="col-6">
                            <div className="">
                                <label className="form-label">
                                Work Center Name
                                </label>
                                <input className="form-control" type="text"/>
                            </div>
                         </div>
                         <div className="col-6 ">
                            <div className="">
                                <label className="form-label">
                                Code
                                </label>
                                <input className="form-control" type="text"/>
                            </div>
                         </div>

                    </div>
                    <div className="row mt-3">
                        <div className="col-6">
                            <div className="">
                                <label className="from-label">
                                Working Hours
                                </label>
                                <Select options={options2} defaultValue={value} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-3">
                    <label>Production Information</label>
                </div>
                <hr className="border-secondary opacity-3" style={{color:"#d8341b"}}/>
                <div className="row mt-3">
                    <div className="col-6">
                        <div className="">
                            <label className="form-label">
                            Time Efficiency (%)
                            </label>
                            <input className="form-control" type="number"/>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="">
                            <label className="form-label">
                            Cost per hour
                            </label>
                            <input className="form-control" type="number"/>
                        </div>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-6">
                        <div className="">
                            <label className="form-label">
                            Capacity
                            </label>
                            <input className="form-control" type="number"/>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="">
                            <label className="form-label">
                            OEE Target (%)
                            </label>
                            <input className="form-control" type="number"/>
                        </div>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-6">
                        <div className="">
                            <label className="form-label">
                            Time before prod (m)
                            </label>
                            <input className="form-control" type="number"/>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="">
                            <label className="form-label">
                            Time after prod
                            </label>
                            <input className="form-control" type="number"/>
                        </div>
                    </div>
                </div>
                <div className="row mt-3 ml-3">
                    <label>Description</label>
                </div>
                <div className="row">
                    <div className="col">
                    <JoditEditor
                      ref={editor}
                      value={content}
                      onChange={(newContent) => setContent(newContent)}
                    />
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-7">

                    </div>
                    <div className="col-5 text-right">
                        <button className="btn btn-secondary mr-3">
                            Close
                        </button>
                        <button className="btn btn-primary">
                            Save
                        </button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default AddWorkCenter