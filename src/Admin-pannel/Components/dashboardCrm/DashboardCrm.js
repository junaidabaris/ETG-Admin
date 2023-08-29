import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import { MdOutlinePayment } from "react-icons/md";
import { AiOutlineStock } from "react-icons/ai";
import { GrTasks } from "react-icons/gr";
import { MdTask } from "react-icons/md";
import { LiaFileInvoiceSolid } from "react-icons/lia";
import { TfiAnnouncement } from "react-icons/tfi";
import { AiFillFolder } from "react-icons/ai";
import { GoAlertFill } from "react-icons/go";
import { AiOutlineFile } from "react-icons/ai";
import { AiOutlineCheck } from "react-icons/ai";

import { BsFillFileEarmarkBarGraphFill } from "react-icons/bs";
import { BiTimeFive } from "react-icons/bi";
import { BsTicket } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import { BiRefresh } from "react-icons/bi";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import { useState } from "react";

import Calendar from "react-calendar";
import { FaTasks } from "react-icons/fa";
import { VscProject } from "react-icons/vsc";
import { AiFillCheckCircle } from "react-icons/ai";
import { useRef } from "react";
import "./Table.css";
import TaskCrm from "../taskCrm/TaskCrm";
import ProjectCrm from "../project/ProjectCrm";
import ReminderDash from "../reminderDashboard/ReminderDash";
import "react-calendar/dist/Calendar.css";
import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import dash from "../../../assets/img/Screenshotdashboard.png"
import leadOver from "../../../assets/img/leadoverview.png"
import leadOvernext from "../../../assets/img/dash.png"
function DashboardCrm() {
  const [value, onChange] = useState();
  const [toggle, setToggle] = useState(1);
  const [content, setContent] = useState("");
  const now = 60;
  function updateToggle(id) {
    setToggle(id);
  }


  const [show, setShow] = useState(false);
  const inputBound = document.getElementsByClassName(
    "react-calendar__month-view__days"
  )[0]


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true)
  return (

    <>
      <Modal show={show} onHide={handleClose} className="cusModal">
        <Modal.Header closeButton>
          <Modal.Title>Add new event</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-md-12">
              <div className="form p-2">
                <label className="form-label">
                  Event title
                </label>
                <input className="form-control" type="text" />
              </div>
            </div>
            <div className="col-md-12">
              <div className="form p-2">
                <label className="form-label">
                  Description
                </label>
                <textarea className="form-control" type="text" />
              </div>
            </div>
            <div className="col-md-12">
              <div className="form p-2">
                <label className="form-label">
                  Start Date
                </label>
                <input className="form-control" type="date" />
              </div>
            </div>
            <div className="col-md-12">
              <div className="form p-2">
                <label className="form-label">
                  End Date
                </label>
                <input className="form-control" type="date" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form p-2">
                <label className="form-label">
                  Notification
                </label>
                <input className="form-control" type="number" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form p-2">
                <label className="form-label">

                </label>
                <select className="form-control">
                  <option>Minutes</option>
                  <option>Hours</option>
                  <option>Days</option>
                  <option>weeks</option>
                </select>
              </div>
            </div>
            <div className="col-md-12">
              <Form >
                {['checkbox'].map((type) => (
                  <div key={`default-${type}`} className="mb-3" >
                    <Form.Check // prettier-ignore
                      type={type}
                      id={`default-${type}`}
                      label={`public event `}
                    />


                  </div>
                ))}
              </Form>
            </div>

          </div>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>

      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div className="card ">
              <div className="card-body">
                <div className="row mt-3">
                  <div className="d-flex">
                    <div className="col-md-3 fs-5">
                      <MdOutlinePayment />
                    </div>
                    <div className="col-md-6 fs-7 d-flex">
                      Invoices Awaiting Payment
                    </div>
                    <div className="col-md-3 ">1 / 1</div>
                  </div>
                  <div className="col-md-12 mt-3">
                    <ProgressBar variant="danger" now={100} />
                  </div>
                </div>
              </div>
              {/* <ProgressBar now={now} label={`${now}%`} visuallyHidden  /> */}
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <div className="card-body">
                <div className="row mt-3">
                  <div className="d-flex">
                    <div className="col-md-3 fs-5">
                      <AiOutlineStock />
                    </div>
                    <div className="col-md-6 fs-7 d-flex">Converted Leads</div>
                    <div className="col-md-3 ">4/5</div>
                  </div>
                  <div className="col-md-12 mt-3">
                    {" "}
                    <ProgressBar variant="success" now={80} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <div className="card-body">
                <div className="row mt-3">
                  <div className="d-flex">
                    <div className="col-md-3 fs-5">
                      <GrTasks />
                    </div>
                    <div className="col-md-6 fs-7 d-flex">
                      Projects In Progress
                    </div>
                    <div className="col-md-3 ">1 / 1</div>
                  </div>
                  <div className="col-md-12 mt-3">
                    <ProgressBar
                      style={{ backgroundColor: "#2563eb" }}
                      now={100}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <div className="card-body">
                <div className="row mt-3">
                  <div className="d-flex">
                    <div className="col-md-3 fs-5">
                      <MdTask />
                    </div>
                    <div className="col-md-6 fs-7 d-flex">
                      Tasks Not Finished
                    </div>
                    <div className="col-md-3 ">5/6</div>
                  </div>
                  <div className="col-md-12 mt-3">
                    <ProgressBar
                      style={{ backgroundColor: "#434f5f" }}
                      now={0}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-8">
            <div className="card">
              <div className="row">
                <div className="col-md-4 ">
                  <div className="fs-5">
                    <LiaFileInvoiceSolid />
                    Invoice overview
                  </div>

                  <div className=" mt-2 ml-2">
                    <label className="form-label">0 Draft</label>
                    <div className="progress mb-3 ">
                      <ProgressBar variant="" now={100} />
                    </div>
                  </div>
                  <div className=" mt-2 ml-2">
                    <label className="form-label">1 Not Sent</label>
                    <div className="progress mb-3 ">
                      <ProgressBar
                        style={{ backgroundColor: "#434f5f", width: "100%" }}
                        now={0}
                      />
                    </div>
                  </div>
                  <div className=" mt-2 ml-2">
                    <label className="form-label" style={{ color: "red" }}>
                      1 Unpaid
                    </label>
                    <div className="progress mb-3 ">
                      <ProgressBar
                        style={{ backgroundColor: "red", width: "100%" }}
                        now={0}
                      />
                    </div>
                  </div>
                  <div className=" mt-2 ml-2">
                    <label className="form-label" style={{ color: "#d28a52" }}>
                      0 Partially Paid
                    </label>
                    <div className="progress mb-3 ">
                      <ProgressBar variant="" now={100} />
                    </div>
                  </div>
                  <div className=" mt-2 ml-2">
                    <label className="form-label" style={{ color: "#d28a52" }}>
                      0 Overdue
                    </label>
                    <div className="progress mb-3 ">
                      <ProgressBar variant="" now={100} />
                    </div>
                  </div>
                  <div className=" mt-2 ml-2">
                    <label className="form-label" style={{ color: "#50a85a" }}>
                      0 Paid
                    </label>
                    <div className="progress mb-3 ">
                      <ProgressBar variant="" now={100} />
                    </div>
                  </div>
                </div>
                <div className="col-md-4 ">
                  <div className="fs-5">
                    <AiOutlineFile />
                    Estimate Overview
                  </div>

                  <div className=" mt-2 ml-2">
                    <label className="form-label">0 Draft</label>
                    <div className="progress mb-3 ">
                      <ProgressBar variant="" now={100} />
                    </div>
                  </div>
                  <div className=" mt-2 ml-2">
                    <label className="form-label">0 Not Sent</label>
                    <div className="progress mb-3 ">
                      <ProgressBar variant="" now={100} />
                    </div>
                  </div>
                  <div className=" mt-2 ml-2">
                    <label className="form-label" style={{ color: "#418bc8" }}>
                      0 Sent
                    </label>
                    <div className="progress mb-3 ">
                      <ProgressBar variant="" now={100} />
                    </div>
                  </div>
                  <div className=" mt-2 ml-2">
                    <label className="form-label" style={{ color: "#d28a52" }}>
                      0 Expired
                    </label>
                    <div className="progress mb-3 ">
                      <ProgressBar variant="" now={100} />
                    </div>
                  </div>
                  <div className=" mt-2 ml-2">
                    <label className="form-label" style={{ color: "red" }}>
                      0 Declined
                    </label>
                    <div className="progress mb-3 ">
                      <ProgressBar style={{ backgroundColor: "red" }} now={0} />
                    </div>
                  </div>
                  <div className=" mt-2 ml-2">
                    <label className="form-label" style={{ color: "#50a85a" }}>
                      0 Accepted
                    </label>
                    <div className="progress mb-3 ">
                      <ProgressBar variant="" now={100} />
                    </div>
                  </div>
                </div>
                <div className="col-md-4 ">
                  <div className="fs-5">
                    <BsFillFileEarmarkBarGraphFill />
                    Proposal overview
                  </div>
                  <div className=" mt-2 ml-2">
                    <label className="form-label">0 Draft</label>
                    <div className="progress mb-3 ">
                      <ProgressBar variant="" now={100} />
                    </div>
                  </div>
                  <div className=" mt-2 ml-2">
                    <label className="form-label" style={{ color: "#418bc8" }}>
                      0 Sent
                    </label>
                    <div className="progress mb-3 ">
                      <ProgressBar variant="" now={100} />
                    </div>
                  </div>
                  <div className=" mt-2 ml-2">
                    <label className="form-label">0 open</label>
                    <div className="progress mb-3 ">
                      <ProgressBar variant="" now={100} />
                    </div>
                  </div>
                  <div className=" mt-2 ml-2">
                    <label className="form-label" style={{ color: "#418bc8" }}>
                      0 Revised
                    </label>
                    <div className="progress mb-3 ">
                      <ProgressBar variant="" now={100} />
                    </div>
                  </div>
                  <div className=" mt-2 ml-2">
                    <label className="form-label" style={{ color: "red" }}>
                      0 Declined
                    </label>
                    <div className="progress mb-3 ">
                      <ProgressBar style={{ backgroundColor: "red" }} now={0} />
                    </div>
                  </div>
                  <div className=" mt-2 ml-2">
                    <label className="form-label" style={{ color: "#50a85a" }}>
                      0 Accepted
                    </label>
                    <div className="progress mb-3 ">
                      <ProgressBar variant="" now={100} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <Dropdown as={ButtonGroup}>
                  <Button variant="">2023</Button>

                  <Dropdown.Toggle
                    split
                    variant="btn-outline-secondary"
                    id="dropdown-split-basic"
                  />

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">2022</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">2023</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>
            <div className="card mt-3 mb-3">
              <div className="row p-3">
                <div className="col-md-4">
                  <div className="card">
                    <div className="card-body">
                      <div className="row">
                        <label
                          className="form-label"
                          style={{ color: "#d28a52" }}
                        >
                          Outstanding Invoices
                        </label>
                        <label
                          className="form-label fs-6"
                          style={{ color: "#7d63eb" }}
                        >
                          INR0,00
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card">
                    <div className="card-body">
                      <div className="row">
                        <label
                          className="form-label"
                          style={{ color: "#323232" }}
                        >
                          Past Due Invoices
                        </label>
                        <label
                          className="form-label fs-6"
                          style={{ color: "#7d63eb" }}
                        >
                          INR0,00
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card">
                    <div className="card-body">
                      <div className="row">
                        <label
                          className="form-label"
                          style={{ color: "#16a355" }}
                        >
                          Paid Invoices
                        </label>
                        <label
                          className="form-label fs-6"
                          style={{ color: "#7d63eb" }}
                        >
                          INR0,00
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card mt-3">
              <div className="row">
                <div className="col-md-12">
                  <div className="">
                    <div className=" tab p-2">
                      <ul className="">
                        <li
                          className="flex-fil "
                          onClick={() => updateToggle(1)}
                        >
                          <FaTasks /> My Task
                        </li>

                        <li
                          className="flex-fil "
                          onClick={() => updateToggle(2)}
                        >
                          <VscProject /> My Projects
                        </li>

                        <li
                          className="flex-fil "
                          onClick={() => updateToggle(3)}
                        >
                          <BiTimeFive /> My Reminders
                        </li>

                        <li
                          className="flex-fil "
                          onClick={() => updateToggle(4)}
                        >
                          <BsTicket />
                          Ticket
                        </li>

                        <li
                          className="flex-fil "
                          onClick={() => updateToggle(5)}
                        >
                          <TfiAnnouncement /> Announcement
                        </li>

                        <li
                          className="flex-fil "
                          onClick={() => updateToggle(6)}
                        >
                          <AiFillFolder /> Latest Activity
                        </li>
                      </ul>
                      <div
                        className={toggle === 1 ? "show-content" : "content"}
                      >
                        <TaskCrm />
                      </div>

                      <div
                        className={toggle === 2 ? "show-content" : "content"}
                      >
                        <ProjectCrm />
                      </div>
                      <div
                        className={toggle === 3 ? "show-content" : "content"}
                      >
                        <ReminderDash />
                      </div>
                      <div
                        className={toggle === 4 ? "show-content" : "content"}
                      ></div>
                      <div
                        className={toggle === 5 ? "show-content" : "content"}
                      ></div>
                      <div
                        className={toggle === 6 ? "show-content" : "content"}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card mt-3">
              <Calendar onChange={onChange} value={value} className="cusModal1" />
            </div>
            <div className="card">
              <div className="row">
                <div className="col-md-6">
                  <label className="form-label">
                    Payment Records
                  </label>
                </div>
                <div className="col-md-6 text-end">
                  <button className="btn btn-text-only" style={{ color: "blue" }}>
                    Full Report
                  </button>
                </div>
                <div className="col-md-12">
                  <img
                    src={dash}
                    // style={{ width: 300, height: 350 }}
                    alt='nsdl-img'
                  />
                </div>
              </div>
            </div>
            <div className="card">
              <div className="row">
                <div className="col-md-6">
                  <label className="form-label">
                    <h5>Contracts Expiring Soon</h5>
                  </label>
                </div>
                <div className="col-md-6 text-end">
                  <button className="btn btn-text-only" style={{ color: "blue" }}>View All</button>
                </div>
              </div>
              <div className="bidy">
                <h3>

                  There are no contracts<br /> that are going to expire in the next 7 days.
                </h3>
              </div>
            </div>
            <div className="card">
              <div className="row p-3">
                <div className="col-md-6  ">
                  <div className="head">
                    <label className="form-label">
                      <h5><BsTicket /> Staff Tickets Report</h5>

                    </label>
                  </div>
                </div>
                <div className="col-md-6 text-right ">
                  <div className="head">
                    <select className="text-only" style={{ color: "blue" }} aria-label="Default select example">
                      <option selected>This Week   </option>
                      <option value="1">Last Week</option>
                      <option value="2">This Month</option>
                      <option value="3">Last Month</option>
                      <option value="3"> This Year Last Year</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="row p-3">
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
              <div className="table">
                <table className="table table-secondary">
                  <thead>
                    <tr>
                      <th>Staff Member</th>
                      <th>Total Assingend Tickets</th>
                      <th>open Tickets</th>
                      <th>Closed Tickets</th>
                      <th>Replied To</th>
                      <th>Average Reply Time</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Azharuddin Shamim</td>
                      <td>
                        0
                      </td>
                      <td>0</td>
                      <td> 0</td>
                      <td> 0</td>
                      <td> -</td>

                    </tr>
                    <tr>
                      <td>Staff 1  Sikandrabad</td>
                      <td>
                        0
                      </td>
                      <td>0</td>
                      <td> 0</td>
                      <td> 0</td>
                      <td> -</td>

                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="row">
                <div className="col-md-7">
                  <div className="">
                    <lable className="form-lable">
                      Showing 1 to 2 of 2 entries
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
          <div className="col-md-4">
            <div className="card p-3">
              <div className="row">
                <div className="col-md-6">
                  <div className="">
                    <label className="form-label">
                      <AiFillCheckCircle /> My To Do Items
                    </label>
                  </div>
                </div>
                <div className="col-md-6 text-right">
                  <div className="">
                    <button className="btn btn-text-only" style={{ color: "blue" }}>
                      View All
                    </button>
                    {/* <button className="btn btn-text-only"style={{color:"blue"}}>
                          New To Do
                        </button> */}
                  </div>
                </div>
                <div className="col-md-12">
                  <label className="form-label" style={{ color: "#d28a52" }}>
                    <span className="mr-2"><GoAlertFill /></span>Latest to do's
                  </label>
                </div>
                <div className="col-md-12">
                  <label className="form-label">
                    <span className="mr-2"></span>No todos found
                  </label>
                </div>
                <div className="col-md-12">
                  <label className="form-label" style={{ color: "#50a85a" }}>
                    <span className="mr-2"><AiOutlineCheck /></span> Latest finished to do's
                  </label>
                </div>
                <div className="col-md-12">
                  <label className="form-label">
                    <span className="mr-2"></span>No finished todos found
                  </label>
                </div>
              </div>


            </div>
            <div className="card p-3">
              <div className="row">
                <div className="col-md-12">
                  {/* <label className="form-label fs-6">
               Leads Overview
                </label> */}
                  <img
                    src={leadOver}
                    // style={{ width: 300, height: 350 }}
                    alt='nsdl-img'
                  />
                </div>
              </div>
            </div>
            <div className="card p-3">
              <div className="row">
                <div className="col-md-12">
                  <label className="form-label fs-6">
                    Latest Project Activity
                  </label>
                  <img
                    src={leadOvernext}
                    // style={{ width: 300, height: 350 }}
                    alt='nsdl-img'
                  />
                </div>
              </div>
            </div>
            <div className="card p-3">
              <div className="row">
                <div className="col-md-6">
                  <label className="form-label fs-6">
                    My To Do List
                  </label>
                </div>
                <div className="col-md-6 text-right">
                  <button className="btn btn-text-only" style={{ color: "blue" }}>
                    New To Do
                  </button>

                </div>
                <div className="col-md-12">
                  <label className="form-label">
                    Latest to do's
                  </label>
                  <div class="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label className="form-check-label" for="flexCheckDefault">

                      Its an urgent task to do.
                      Model Selection
                      <br />
                      <br />
                      <br />
                      11/03/2023 11:53:39
                    </label>
                  </div>
                  <label className="form-label mr-3" style={{ color: "green" }}>
                    Latest finished to do's
                  </label>
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </>

  );

}
export default DashboardCrm