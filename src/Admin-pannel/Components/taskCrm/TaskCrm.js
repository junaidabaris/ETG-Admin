import React, { useEffect } from "react";
import { FaFilter } from 'react-icons/fa';
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { BsTagFill } from 'react-icons/bs';
import Select from "react-select";

import { AiOutlineAlignLeft } from 'react-icons/ai';

import { AiFillFile } from 'react-icons/ai'
import { BiRefresh } from 'react-icons/bi'
import { AiOutlineSearch } from 'react-icons/ai'
import { Form, Link } from "react-router-dom";
import EditTask from "./EditTask";
import axios from "axios";
import ReminerModal from "./ReminerModal";
import { toast } from "react-toastify";
import Multiselect from "multiselect-react-dropdown";
function TaskCrm() {
  const options4 = [
    { value: "Azhruddin Shammim", label: "Azhruddin Shammim" },
    { value: "Staff1 Sec", label: "Staff1 Sec" },
  ];
  const options5 = [
    { value: "Azhruddin Shammim", label: "Azhruddin Shammim" },
    { value: "Staff1 Sec", label: "Staff1 Sec" },
  ];

  const [show, setShow] = useState(false);
  const [value, setValue] = useState(null);


  const handleShow = () => setShow(true);
  const [modalShow, setModalShow] = useState(false);
  const [modalShow2, setModalShow2] = useState(false);

  const [state, setState] = useState({
    name: "",
    description: "",
    priority: "",
    startdate: "",
    duedate: "",
    datefinished: "",
    addedfrom: "",
    user_id: "",
    shipp_id: "",
    bill_id: "",
    is_added_from_contact: "No",
    status: "pending",
    recurring_type: "",
    subject: "",
    hourly_rate: "",
    visible_to_client: true,
    estimate_hour: '',
    deadline_notified: true,
    followerStaff: [],
    followerUser: ['64561a0f124eb95f6a489fe5']
  })
  const [customers, setCustomers] = useState(null)
  const [followers, setfollowers] = useState(null)
  const [ship_id, setShipid] = useState(null)
  const [bill_id, setbill_id] = useState(null)
  const [finalCatD, setFinalCatD] = useState();
  const getDatas1 = async () => {
    const res = await axios.get(`https://onlineparttimejobs.in/api/customer`)
    const res2 = await axios.get(`https://onlineparttimejobs.in/api/staff`)
    setCustomers(res.data)
    setfollowers(res2.data)
  }

  useEffect(() => {
    getDatas1()
  }, [])


  const onchangeHandel = async (e) => {
    if (e.target.name == 'user_id') {
      const id = e.target.value
      const clone = { ...state }
      clone[e.target.name] = e.target.value
      setState(clone)

      const res1 = await axios.get(`https://onlineparttimejobs.in/api/user/shipAddress/${id}`)
      const res2 = await axios.get(`https://onlineparttimejobs.in/api/user/billAddress/${id}`)
      setShipid(res1.data)
      setbill_id(res2.data)
      return
    }
    const clone = { ...state }
    clone[e.target.name] = e.target.value
    setState(clone)
  }

  const toastSuccessMessage2 = () => {
    toast.success("Task Added Successfully", {
      position: "top-center"
    })
  };

  const toastErrorMessage2 = () => {
    toast.error("Task Not Added", {
      position: "top-center"
    })
  };

  const SendDatas = async () => {
    const obj = {...state ,followerStaff:finalCatD}
    try {
      const res = await axios.post(`https://onlineparttimejobs.in/api/task/add_Task`, obj, {
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: `Bearer ${token}`,
        },
      })
      toastSuccessMessage2()
      setTimeout(() => {
        setState({
          name: "",
          description: "",
          priority: "",
          startdate: "",
          duedate: "",
          datefinished: "",
          addedfrom: "",
          user_id: "",
          is_added_from_contact: "No",
          status: "pending",
          recurring_type: "",
          repeat_every: "",
          recurring: "",
          is_recurring_from: "",
          cycles: "",
          total_cycles: "",
          custom_recurring: "",
          last_recurring_date: "",
          rel_id: "",
          rel_type: "",
          is_public: "",
          billable: "",
          subject: "",
          assigned: "",
          billed: "",
          invoice_id: "",
          hourly_rate: "",
          milestone: "",
          kanban_order: "",
          milestone_order: "",
          visible_to_client: "",
          estimate_hour: "",
          deadline_notified: "",
        })

      }, 1000);
      getDatas()
    } catch (error) {
      toastErrorMessage2()
    }

  }




  
  const handleClose = () => {
    setShow(false)
  };


  const [state1, setState1] = useState()
  const token = window.localStorage.getItem('adminToken')
  const getDatas = async () => {
    const res = await axios.get(`https://onlineparttimejobs.in/api/task`, {
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        Authorization: `Bearer ${token}`,
      },
    })
    setState1(res.data)
  }
  useEffect(() => {
    getDatas()
  }, [])
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="button">
              <Button
                variant="primary"
                onClick={handleShow}
                style={{ width: 150 }}
              >
                + Add New
              </Button>

              <Modal className="" show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>
                    <h4>Add New Task</h4>
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <div className="container">
                    <div className="card">
                      <div className="card-body">
                        <div className="row">
                          <div className="col-md-12">
                            <div className="form">
                              <label className="form-label">
                                Attachment
                              </label>
                              <input className="form-control" type="file" />
                            </div>
                            <div className="form">
                              <label className="form-label">
                                Name
                              </label>
                              <input className="form-control" type="text" name='name' value={state.name} onChange={onchangeHandel} />
                            </div>
                            <div className="form">
                              <label className="form-label">
                                Subject
                              </label>
                              <input className="form-control" type="text" name='subject' value={state.subject} onChange={onchangeHandel} />
                            </div>
                            <div className="form">
                              <label className="form-label">
                                Hourly Rate
                              </label>
                              <input className="form-control" type="number" name='hourly_rate' value={state.hourly_rate} onChange={onchangeHandel} />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form">
                              <label className="form-label">Start Date</label>
                              <input className="form-control" type="date" name='startdate' value={state.startdate} onChange={onchangeHandel} />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form">
                              <label className="form-label">Due Date</label>
                              <input className="form-control" type="date" name='duedate' value={state.duedate} onChange={onchangeHandel} />
                            </div>
                          </div>

                          <div className="col-md-6">
                            <div className="form">
                              <label className="form-label">Addedfrom</label>
                              <input className="form-control" type="date" name='addedfrom' value={state.addedfrom} onChange={onchangeHandel} />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form">
                              <label className="form-label">Date Finished</label>
                              <input className="form-control" type="date" name='datefinished' value={state.datefinished} onChange={onchangeHandel} />
                            </div>
                          </div>

                          <div className="col-md-6">
                            <div className="form">
                              <label className="form-label">Related To</label>
                              <select className="form-select" name='recurring_type' value={state.recurring_type} onChange={onchangeHandel} >
                                <option>
                                  Select option
                                </option>
                                <option value='Project'>Project</option>
                                <option value='Invoice'>Invoice</option>
                                <option value='Customer'>Customer </option>
                                <option value='Estimate'>Estimate</option>
                              </select>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form">
                              <label className="form-label" >
                                Priority
                              </label>
                              <Form.Select aria-label="Default select example" name='priority' value={state.priority} onChange={onchangeHandel} >
                                <option>Open this select menu</option>
                                <option value="Low">Low</option>
                                <option value="Medium">Medium</option>
                                <option value="High">High</option>
                                <option value="Urgent">Urgent</option>
                              </Form.Select>
                            </div>

                          </div>
                          <div className="col-md-6">
                            <div className="form">
                              <label className="form-label">
                                Followers
                              </label>

                              {followers && <Multiselect
                                isObject={true}
                                displayValue="firstname"
                                options={followers}
                                showCheckbox
                                selectedValues={[]}
                                onRemove={(selectedCat) => {
                                  const selectedIds = selectedCat?.map((cat) => {
                                    return cat._id
                                  })
                                  setFinalCatD(selectedIds)
                                }}
                                onSelect={(selectedCat) => {
                                  const selectedIds = selectedCat?.map((cat) => {
                                    return cat._id
                                  })
                                  setFinalCatD(selectedIds)
                                }}
                              />}
                            </div>

                          </div>
                          <div className="col-md-6">
                            <div className="form">

                              <label className="form-label">Customer</label>
                              <select className="form-select" name='user_id' value={state.user_id} onChange={onchangeHandel}>
                                <option value='0'>Select Customer</option>
                                {customers && customers.map((item) => {
                                  return <option key={item._id} value={item._id}>{item.firstname + " " + item.lastname}</option>
                                })}

                              </select>
                            </div>

                          </div>
                          {ship_id && <div className="col-md-6">
                            <div className="form">

                              <label className="form-label">Shipping Address</label>
                              <select className="form-select" name='shipp_id' value={state.shipp_id} onChange={onchangeHandel}>
                                <option>Select Address</option>
                                {ship_id && ship_id?.address.map((item) => {
                                  return <option key={item._id} value={item._id}>{item.addressLine1 + " " + item.addressLine2} {item.city + " " + item.state} {item.country + " " + item.province}</option>
                                })}

                              </select>
                            </div>

                          </div>}
                          {bill_id && <div className="col-md-6">
                            <div className="form">

                              <label className="form-label">Billing Address</label>
                              <select className="form-select" name='bill_id' value={state.bill_id} onChange={onchangeHandel}>
                                <option>Select Address</option>
                                {ship_id && bill_id?.address?.map((item) => {
                                  return <option key={item._id} value={item._id}>{item.company + " " + item.addressLine1} {item.city + " " + item.state} {item.country + " " + item.province}</option>
                                })}

                              </select>
                            </div>

                          </div>}
                          {/* <div className="col-md-6">
                  <div className="form">
                    <label className="form-label">
                      <BsTagFill />Tags
                    </label>

                  </div>
                  <div className="col-md-6">

                  </div>

                </div>
                <div className="col-md-6">

                </div> */}
                          {/* <div className="col-md-8">
                  <div className="form">
                    <label className="form-label">Hours Rate</label>
                    <input className="form-control" type="number" name='hourly_rate' value={state.hourly_rate} onChange={onchangeHandel} />
                  </div>
                </div> */}
                          <div className="col-md-12">
                            <div className="form">
                              <label className="form-label">Estimate Hours</label>
                              <input className="form-control" type="number" name='estimate_hour' value={state.estimate_hour} onChange={onchangeHandel} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-body">
                        <div className="row">
                          <div className="col-md-12">
                            <div className="form">
                              <label className=" form-label">
                                Task Description
                              </label>
                              <textarea className="form-control" type="text" name='description' value={state.description} onChange={onchangeHandel} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                  <Button variant="primary" onClick={SendDatas}>
                    Save
                  </Button>
                </Modal.Footer>
              </Modal>


            </div>
          </div>
          <div className="col-md-6 text-right">
            <div className="button">
              <Link to={'/admin/task-overview'} className="btn btn-success mr-2">
                Task Overview
              </Link>

              <button className="btn btn-outline-secondary mr-2">
                <span>
                  <FaFilter />
                </span>
              </button>
            </div>
          </div>
        </div>


        <div className="card">
          <div className="card-body">

            <div className="row">
              <div className="col-md-12 mt-3 ">
                <h4 className="form-label"> <span><AiFillFile /></span>Task Summary</h4>
              </div>
              <div className="col-md-2">
                <lable className='form-lable text-primary fs-2 mr-2' >0</lable>
                <span className="">Not Started <br />Tasks assigned to me: 0</span>
              </div>
              <div className="col-md-2">
                <lable className='form-lable text-primary fs-2 mr-2' >3</lable>
                <span className="text-info">In Progress <br />Tasks assigned to me: 3</span>
              </div>
              <div className="col-md-2">
                <lable className='form-lable text-primary fs-2 mr-2' >0</lable>
                <span className="text-danger">Testing <br />Tasks assigned to me: 0</span>
              </div>
              <div className="col-md-2">
                <lable className='form-lable text-primary fs-2 mr-2' >0</lable>
                <span style={{}}>Awaiting Feedback Testing <br />Tasks assigned to me: 0</span>
              </div>
              <div className="col-md-2">
                <lable className='form-lable text-primary fs-2 mr-2' >0</lable>
                <span style={{ color: "#4caf50" }}>Complete <br />Tasks assigned to me: 0</span>
              </div>
            </div>
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
                  <button className="btn btn-outline-secondary  ml-1">
                    <span>Bulk actions</span>
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
            <div className="table mt-3">
              <table className="table table-secondary">
                <thead>
                  <tr>
                    <th>#</th>
                    <th> Name</th>
                    <th>Status</th>

                    <th>Start Date</th>
                    <th>due Date</th>
                    <th>assigned To</th>
                    <th>Tags</th>
                    <th>Priority</th>
                  </tr>
                </thead>
                <tbody>

                  {state1 && state1.map((item, i) => {
                    return <tr>
                      <td>{1 + i}</td>
                      <td>
                        <h6>{item?.name}</h6>
                        {/* <br /> */}
                        <button className="btn btn-text-only-primary " onClick={() => setModalShow2(true)}>Set Timer</button>
                        <button className="btn btn-text-only-primary " onClick={() => setModalShow(true)}>Edit</button>
                        <button className="btn btn-text-only-primary ">Delete</button>

                      </td>
                      <td>{item?.status}</td>
                      <td>
                        {item?.startdate}
                      </td>
                      <td> {item?.duedate}</td>

                      <td>Img</td>
                      <td>--</td>
                      <td><button className="btn btn-text-only">{item?.priority}</button></td>
                    </tr>
                  })}
                </tbody>
              </table>
            </div>
            {modalShow && <EditTask
              show={modalShow}
              onHide={() => setModalShow(false)}
            />}
            {modalShow2 && <ReminerModal
              state1={state1}
              show={modalShow2} onHide={() => setModalShow2(false)}
            />}

            <div className="row mt-3 row-secondary">
              <div className="col-md-6">
                <label className="form-label">Showing 1 to 1 of 1 entries</label>
              </div>
              <div className="col-md-6 text-end">
                <button className="btn outline-secondary"> Previous</button>
                <button className="btn btn-primary text-enter" style={{ width: 20, height: 35 }}>1</button>
                <button className="btn outline-secondary"> Next</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default TaskCrm