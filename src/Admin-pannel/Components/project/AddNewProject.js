import React, { useEffect } from "react";
import JoditEditor from "jodit-react";
import { useState } from "react";
import Select from "react-select";
import { useRef } from "react";
import { BsTagFill } from "react-icons/bs";
import "./Table.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
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

  const [state, setState] = useState({
    name: "",
    description: "",
    status: "",
    user_id: "",
    billing_type: '',
    start_date: "",
    deadline: "",
    date_finished: "",
    // progress: "",
    // progress_from_tasks: "",
    project_cost: "",
    project_rate_per_hour: "",
    estimated_hours: "",
    // addedfrom: "",
    // contact_notification: "",
    notify_contacts: false,
  })

  const [customers, setCustomers] = useState(null)
  const [bills, setBills] = useState(null)

  const getDatas = async () => {
    const res = await axios.get(`https://onlineparttimejobs.in/api/customer`)
    setCustomers(res.data)
    const res2 = await axios.get(`https://onlineparttimejobs.in/api/billingType`)
    setBills(res2.data)
  }

  useEffect(() => {
    getDatas()
  }, [])




  const onChangeHandel = (e) => {
    const clone = { ...state }
    clone[e.target.name] = e.target.value
    setState(clone)
  }




  const toastSuccessMessage2 = () => {
    toast.success("Project Added Successfully", {
      position: "top-center"
    })
  };

  const toastErrorMessage2 = () => {
    toast.error("Project Not Added", {
      position: "top-center"
    })
  };

  const token = window.localStorage.getItem('adminToken')
  const sendData = async () => {
    const obj = { ...state, description: content }
    try {
      const res = await axios.post(`https://onlineparttimejobs.in/api/project/add_Project`, obj, {
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: `Bearer ${token}`,
        },
      })
      toastSuccessMessage2()
    } catch (error) {
      toastErrorMessage2()
    }

  }

  return (
    <>
      <div className="container">
        <ToastContainer/>
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
                        <input className="form-control" name="name" value={state.name} onChange={onChangeHandel} type="text" />
                      </div>
                      <div className="form mt-3">
                        <label className="form-label">Customer</label>
                        <select className="form-select" name="user_id" value={state.user_id} onChange={onChangeHandel}>
                          <option>Select Customer</option>
                          {customers && customers.map((item) => {
                            return <option key={item._id} value={item._id}>{item.firstname + " " + item.lastname}</option>
                          })}

                        </select>
                      </div>
                      {/* <div className="form mt-3">
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
                      */}
                    </div>
                    <div className="col-md-6">
                      <div className="form mt-3">
                        <label className="form-label">Billing Type</label>
                        <select className="form-select" name="billing_type" value={state.billing_type} onChange={onChangeHandel}>
                          <option>Select billing_type</option>
                          {bills && bills.map((item) => {
                            return <option value={item._id} key={item._id}>{item.name}</option>
                          })}

                        </select>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form mt-3">
                        <label className="form-label">Status</label>
                        <select className="form-select" name="status" value={state.status} onChange={onChangeHandel}>
                          <option>Select Status</option>
                          <option value={'Not Started'}>Not Started</option>
                          <option value={'In Progress'}>In Progress</option>
                          <option value={'On Hold'}>On Hold </option>
                          <option value={'Cancelled'}>Cancelled</option>
                        </select>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form mt-3">
                        <label className="form-label">Rate Per Hour</label>
                        <input className="form-control" type="number" name="project_rate_per_hour" value={state.project_rate_per_hour} onChange={onChangeHandel} />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form mt-3">
                        <label className="form-label">Estimated Hours</label>
                        <input className="form-control" type="number" name="estimated_hours" value={state.estimated_hours} onChange={onChangeHandel} />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form mt-3">
                        <label className="form-label">Date Finished</label>
                        <input className="form-control" type="date" name="date_finished" value={state.date_finished} onChange={onChangeHandel} />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form mt-3">
                        <label className="form-label">Start Date</label>
                        <input className="form-control" type="date" name="start_date" value={state.start_date} onChange={onChangeHandel} />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form mt-3">
                        <label className="form-label">Deadline</label>
                        <input className="form-control" type="date" name="deadline" value={state.deadline} onChange={onChangeHandel} />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form mt-3">
                        <label className="form-label">Project Cost</label>
                        <input className="form-control" type="number" name="project_cost" value={state.project_cost} onChange={onChangeHandel} />
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
                  <button className="btn btn-primary" type="button" onClick={sendData}>Save</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default AddNewProject