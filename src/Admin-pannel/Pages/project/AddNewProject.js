import React from "react";
import JoditEditor from "jodit-react";
import { useState } from "react";
import Select from "react-select";
import { useRef } from "react";
import { BsTagFill } from "react-icons/bs";
import "./Table.css";
function AddNewProject() {
  const editor = useRef(null);
  const [toggle, setToggle] = useState(1);
  const [content, setContent] = useState("");

  const [value, setValue] = useState(null);
  const options = [
    { value: "", label: "Select and being Typing" },
    { value: "", label: "" },
  ];

  function updateToggle(id) {
    setToggle(id);
  }
  return (
    <>
      <div className="container">
        <h4>Add New Project</h4>
        <div className="card m-auto" style={{ width: 700 }}>
          <div className="card-body">
            <div className="row">
              <div className="col-12 tab p-2">
                <ul className="d-flex">
                  <div className="row">
                    <div className="col-md-6 d-flex">
                      <li
                        className="flex-fill fs-5"
                        onClick={() => updateToggle(1)}
                      >
                        Project
                      </li>
                    </div>
                    <div className="col-md-6">
                      <li
                        className="flex-fil fs-5"
                        onClick={() => updateToggle(2)}
                      >
                        Project Setting
                      </li>
                    </div>
                  </div>
                </ul>
                <div className={toggle === 1 ? "show-content" : "content"}>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form">
                        <label className="form-label">Project Name</label>
                        <input className="form-control" type="text" />
                      </div>
                      <div className="form mt-3">
                        <label className="form-label">Customer</label>
                        <Select options={options} defaultValue={value} />
                      </div>
                      <div className="form mt-3">
                        <div class="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                            style={{ width: 20, height: 20 }}
                          />
                          <label
                            className="form-check-label fs-5 ml-3"
                            for="flexCheckDefault"
                          >
                            Calculate progress through tasks
                          </label>
                        </div>
                      </div>
                      <div className="form">
                        <label className="form-label">Progress</label>
                        {/* <input className="form-control" type="text" /> */}
                        <br />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form mt-3">
                        <label className="form-label">Billing Type</label>
                        <select className="form-select">
                          <option></option>
                          <option>Fixed Rate</option>
                          <option>Project Hours</option>
                          <option>Task Hours </option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form mt-3">
                        <label className="form-label">Status</label>
                        <select className="form-select">
                          <option></option>
                          <option>Not Started</option>
                          <option>In Progress</option>
                          <option>On Hold </option>
                          <option>Cancelled</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form mt-3">
                        <label className="form-label">Billing Type</label>
                        <input className="form-control" type="number" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form mt-3">
                        <label className="form-label">Estimated Hours</label>
                        <input className="form-control" type="number" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form mt-3">
                        <label className="form-label">Estimated Hours</label>
                        <select className="form-select">
                          <option></option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form mt-3">
                        <label className="form-label">Start Date</label>
                        <input className="form-control" type="date" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form mt-3">
                        <label className="form-label">Deadline</label>
                        <input className="form-control" type="date" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form mt-3">
                        <label className="form-label">
                          <span>
                            <BsTagFill />
                          </span>
                          Tags
                        </label>
                      </div>
                    </div>
                    <div className="col-md-12 mt-3">
                      <label className="form-label">Description</label>
                    </div>
                    <div className="row">
                      <div className="">
                        <JoditEditor
                          ref={editor}
                          value={content}
                          onChange={(newContent) => setContent(newContent)}
                        />
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-body">
                        <div className="row">
                          <div className="col-md-12">
                            <div className="form mt-3">
                              <div class="form-check">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  value=""
                                  id="flexCheckDefault"
                                  style={{ width: 20, height: 20 }}
                                />
                                <label
                                  className="form-check-label fs-6 ml-2"
                                  for="flexCheckDefault"
                                >
                                  Send project created email
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={toggle === 2 ? "show-content" : "content"}>
                 <div className="container">
                  <div className="card">
                    <div className="card-body">
                      <div className="row">
                        <div className="col-md-12">
                          <div className="form">
                           <label className="form-label">
                             Send contacts notifications
                           
                           </label>
                            <select className="form-select">
                              <option>To All Contacts With notifications For Project Enable</option>
                              <option>
                                Specific Contacts
                              </option>
                              <option>Do not Send notifications</option>
                            </select>
                          </div>
                        </div>
                         <div className="col-md-12">
                          <div className="form">
                           <label className="form-label">
                             Select contacts to notify
                           
                           </label>
                            <select className="form-select">
                             
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                 </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 text-end">
                <div className="button">
                  <button className="btn btn-primary">Save</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default AddNewProject;
