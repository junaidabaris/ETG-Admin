import {
  AiOutlineStar,
  AiTwotoneStar,
  AiOutlineArrowRight,
  AiOutlinePaperClip,
} from "react-icons/ai";
import { LuClock9 } from "react-icons/lu";
import { BsFillPersonFill } from "react-icons/bs";
import { BsQuestion } from "react-icons/bs";
import { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import img from "../../../../../src/assets/img/Michell.jpeg";
import { LuSettings2 } from "react-icons/lu";
import { MdOutlineArrowDropDown, MdOutlineExposureZero } from "react-icons/md";

function NewButton() {
  const [state, setState] = useState(false);
  const [text, setText] = useState(false);
  return (
    <>
      <div className="container" style={{ marginBottom: "10px" }}>
        <div className="row">
          <div className="col-md-1">
            <button className="btn btn-primary" type="button">
              Start
            </button>
          </div>
          <div className="col-md-6">
            <button className="btn btn-secondary" type="button">
              Mark as done
            </button>{" "}
          </div>
          <div
            className="col-md-5"
            style={{ display: "flex", justifyContent: "end" }}
          >
            {" "}
            <button className="btn btn-secondary" type="button">
              New
            </button>{" "}
            <button className="btn btn-secondary" type="button">
              Planned
            </button>{" "}
            <button className="btn btn-secondary" type="button">
              In Progress
            </button>{" "}
            <button className="btn btn-secondary" type="button">
              More
            </button>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="card">
          <div className="card-body">
            <div className="row" style={{ marginBottom: "10px" }}>
              <div
                className="col-md-1"
                style={{
                  fontSize: "xxx-large",
                  paddingRight: "0px",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                {state ? (
                  <AiOutlineStar
                    onClick={() => {
                      setState(!state);
                    }}
                  />
                ) : (
                  <AiTwotoneStar
                    onClick={() => {
                      setState(!state);
                    }}
                  />
                )}
              </div>
              <div
                className="col-md-9 "
                style={{ height: "45px", paddingLeft: "0px" }}
              >
                <textarea
                  className="textarea1"
                  placeholder="Task Title..."
                ></textarea>
              </div>
              <div className="col-md-2">
                <button
                  className="btn btn-light btn-outline-secondary"
                  type="button"
                  style={{ borderRadius: "10px" }}
                >
                  In Progress
                </button>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="row">
                  <div className="col-md-3">
                    <label className="form-label" for="project">
                      Project
                    </label>
                  </div>
                  <div className="col-md-8">
                    <InputGroup className="mb-3">
                      <Form.Control
                        placeholder="Field Service"
                        aria-label="Text input with dropdown button"
                        style={{
                          borderTopWidth: "0px",
                          borderLeftWidth: "0px",
                          borderRightWidth: "0px",
                        }}
                      />

                      <DropdownButton
                        variant="outline-light"
                        id="input-group-dropdown-2"
                        align="end"
                      >
                        <Dropdown.Item>Field Service</Dropdown.Item>
                      </DropdownButton>
                    </InputGroup>
                  </div>
                  <div
                    className="col-md-1"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      paddingLeft: "0px",
                    }}
                  >
                    <AiOutlineArrowRight />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-3">
                    <label
                      className="form-label"
                      for="project"
                      style={{ marginLeft: "2px" }}
                    >
                      Worksheet Template
                      <span>
                        <BsQuestion />
                      </span>
                    </label>
                  </div>
                  <div className="col-md-8">
                    <InputGroup className="mb-3">
                      <Form.Control
                        placeholder="Device Installation and Maintenance"
                        aria-label="Text input with dropdown button"
                        style={{
                          borderTopWidth: "0px",
                          borderLeftWidth: "0px",
                          borderRightWidth: "0px",
                        }}
                      />

                      <DropdownButton
                        variant="outline-light"
                        id="input-group-dropdown-2"
                        align="end"
                      >
                        <Dropdown.Item>
                          Device Installation and Maintenance
                        </Dropdown.Item>
                      </DropdownButton>
                    </InputGroup>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-3">
                    <label
                      className="form-label"
                      for="assignees"
                      style={{ marginLeft: "2px" }}
                    >
                      Assignees
                      <span>
                        <BsQuestion />
                      </span>
                    </label>
                  </div>
                  <div className="col-md-8">
                    <InputGroup className="mb-3">
                      <Form.Control
                        aria-label="Text input with dropdown button"
                        style={{
                          borderTopWidth: "0px",
                          borderLeftWidth: "0px",
                          borderRightWidth: "0px",
                        }}
                      />

                      <DropdownButton
                        variant="outline-light"
                        id="input-group-dropdown-2"
                        align="end"
                      >
                        <Dropdown.Item></Dropdown.Item>
                      </DropdownButton>
                    </InputGroup>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-3">
                    <label
                      className="form-label"
                      for="tags"
                      style={{ marginLeft: "2px" }}
                    >
                      Tags
                      <span>
                        <BsQuestion />
                      </span>
                    </label>
                  </div>
                  <div className="col-md-8">
                    <InputGroup className="mb-3">
                      <Form.Control
                        aria-label="Text input with dropdown button"
                        style={{
                          borderTopWidth: "0px",
                          borderLeftWidth: "0px",
                          borderRightWidth: "0px",
                        }}
                      />

                      <DropdownButton
                        variant="outline-light"
                        id="input-group-dropdown-2"
                        align="end"
                      >
                        <Dropdown.Item></Dropdown.Item>
                      </DropdownButton>
                    </InputGroup>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="row">
                  <div className="col-md-3">
                    <label className="form-label" for="customer">
                      Customer
                    </label>
                  </div>
                  <div className="col-md-8">
                    <InputGroup className="mb-3">
                      <Form.Control
                        aria-label="Text input with dropdown button"
                        style={{
                          borderTopWidth: "0px",
                          borderLeftWidth: "0px",
                          borderRightWidth: "0px",
                        }}
                      />

                      <DropdownButton
                        variant="outline-light"
                        id="input-group-dropdown-2"
                        align="end"
                      >
                        <Dropdown.Item>Decco Addict</Dropdown.Item>
                        <Dropdown.Item>Azure Interior</Dropdown.Item>
                        <Dropdown.Item>Anita Oliver</Dropdown.Item>
                      </DropdownButton>
                    </InputGroup>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-3"></div>
                  <div
                    className="col-md-1"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "end",
                      paddingLeft: "0px",
                      paddingRight: "0px",
                    }}
                  >
                    <AiOutlineArrowRight />
                  </div>
                  <div
                    className="col-md-8"
                    style={{
                      paddingLeft: "0px",
                      paddingRight: "0px",
                    }}
                  >
                    <button
                      className="btn btn-link"
                      type="button"
                      style={{
                        paddingLeft: "3px",
                      }}
                    >
                      Navigate To
                    </button>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-3">
                    <label
                      className="form-label"
                      for="phone"
                      style={{ marginLeft: "2px" }}
                    >
                      Phone
                    </label>
                  </div>
                  <div className="col-md-8">
                    <InputGroup className="mb-3">
                      <Form.Control
                        aria-label="Text input with dropdown button"
                        style={{
                          borderTopWidth: "0px",
                          borderLeftWidth: "0px",
                          borderRightWidth: "0px",
                        }}
                      />
                    </InputGroup>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-3">
                    <label
                      className="form-label"
                      for="sales-order-item"
                      style={{ marginLeft: "2px" }}
                    >
                      Sales Order Item
                      <span>
                        <BsQuestion />
                      </span>
                    </label>
                  </div>
                  <div className="col-md-8">
                    <InputGroup className="mb-3">
                      <Form.Control
                        placeholder="Non-billable"
                        aria-label="Text input with dropdown button"
                        style={{
                          borderTopWidth: "0px",
                          borderLeftWidth: "0px",
                          borderRightWidth: "0px",
                        }}
                      />

                      <DropdownButton
                        variant="outline-light"
                        id="input-group-dropdown-2"
                        align="end"
                      >
                        <Dropdown.Item></Dropdown.Item>
                      </DropdownButton>
                    </InputGroup>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-3">
                    <label
                      className="form-label"
                      for="allocated-time"
                      style={{ marginLeft: "2px" }}
                    >
                      Allocated Time
                    </label>
                  </div>
                  <div className="col-md-3">
                    <InputGroup className="mb-3">
                      <Form.Control
                        placeholder="00:00"
                        aria-label="Text input with dropdown button"
                        style={{
                          borderTopWidth: "0px",
                          borderLeftWidth: "0px",
                          borderRightWidth: "0px",
                        }}
                      />
                    </InputGroup>
                  </div>
                  <div
                    className="col-md-2"
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <span>(0%)</span>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-3">
                    <label
                      className="form-label"
                      for="planned-date"
                      style={{ marginLeft: "2px" }}
                    >
                      Planned Date
                    </label>
                  </div>
                  <div className="col-md-8">
                    <InputGroup className="mb-3">
                      <Form.Control
                        aria-label="Text input with dropdown button"
                        style={{
                          borderTopWidth: "0px",
                          borderLeftWidth: "0px",
                          borderRightWidth: "0px",
                        }}
                      />
                    </InputGroup>
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <div className="row">
              <Tabs
                defaultActiveKey="description"
                id="uncontrolled-tab-example"
                className="mb-3"
              >
                <Tab eventKey="description" title="Description">
                  {text ? (
                    <span
                      onClick={() => {
                        setText(!text);
                      }}
                    >
                      type "/" for commands
                    </span>
                  ) : (
                    <span
                      onClick={() => {
                        setText(!text);
                      }}
                    >
                      {" "}
                      Add details about this task
                    </span>
                  )}
                </Tab>
                <Tab eventKey="timesheets" title="Timesheets">
                  <div className="container">
                    {" "}
                    <div className="row">
                      <table className="table table-hover ">
                        <thead>
                          <tr>
                            <th className="hideborder1">
                              D... <MdOutlineArrowDropDown />
                            </th>
                            <th className="hideborder1">
                              Employee <MdOutlineArrowDropDown />
                            </th>
                            <th className="hideborder1">
                              Description <MdOutlineArrowDropDown />
                            </th>
                            <th className="hideborder1">
                              <MdOutlineArrowDropDown />
                              Hours Spent
                              <div className="dropdown">
                                <button
                                  className="btn dropdown-toggle"
                                  type="button"
                                  data-bs-toggle="dropdown"
                                  aria-expanded="false"
                                >
                                  <LuSettings2 />
                                </button>
                                <ul className="dropdown-menu">
                                  <li>
                                    <a className="dropdown-item" href="#">
                                      Action
                                    </a>
                                  </li>
                                  <li>
                                    <a className="dropdown-item" href="#">
                                      Another action
                                    </a>
                                  </li>
                                  <li>
                                    <a className="dropdown-item" href="#">
                                      Something else here
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td colSpan={4} className="hideborder1">
                              <button className="btn btn-link" type="button">
                                Add a line
                              </button>
                            </td>
                          </tr>
                          <tr>
                            <td colSpan={4} className="hideborder1"></td>
                          </tr>{" "}
                          <tr>
                            <td colSpan={4} className="hideborder1"></td>
                          </tr>{" "}
                          <tr>
                            <td colSpan={4} className="hideborder1"></td>
                          </tr>{" "}
                          <tr>
                            <td colSpan={4} className="hideborder1"></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="row">
                      <div className="col-md-3"></div>
                      <div className="col-md-3"></div>
                      <div className="col-md-3"></div>
                      <div className="col-md-3" style={{ height: "10px" }}>
                        <hr style={{ opacity: "30" }} />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-3"></div>
                      <div className="col-md-3"></div>
                      <div className="col-md-3"></div>
                      <div className="col-md-3">
                        <div className="row">
                          <div className="col-md-6">
                            <label className="form-label" for="hours-time">
                              Hours Time
                            </label>
                          </div>
                          <div
                            className="col-md-6"
                            style={{
                              display: "flex",
                              alignItems: "center",
                            }}
                          >
                            <span>00:00</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Tab>
                <Tab eventKey="sub-tasks" title="Sub Tasks">
                  <div className="container">
                    {" "}
                    <div className="row">
                      <table className="table table-hover ">
                        <thead>
                          <tr>
                            <th className="hideborder1">
                              Title <MdOutlineArrowDropDown />
                            </th>
                            <th className="hideborder1">
                              Assignees <MdOutlineArrowDropDown />
                            </th>

                            <th className="hideborder1">
                              <div className="dropdown">
                                <button
                                  className="btn dropdown-toggle"
                                  type="button"
                                  data-bs-toggle="dropdown"
                                  aria-expanded="false"
                                >
                                  <LuSettings2 />
                                </button>
                                <ul className="dropdown-menu">
                                  <li>
                                    <a className="dropdown-item" href="#">
                                      Action
                                    </a>
                                  </li>
                                  <li>
                                    <a className="dropdown-item" href="#">
                                      Another action
                                    </a>
                                  </li>
                                  <li>
                                    <a className="dropdown-item" href="#">
                                      Something else here
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td colSpan={4} className="hideborder1">
                              <button className="btn btn-link" type="button">
                                Add a line
                              </button>
                            </td>
                          </tr>
                          <tr>
                            <td colSpan={4} className="hideborder1"></td>
                          </tr>{" "}
                          <tr>
                            <td colSpan={4} className="hideborder1"></td>
                          </tr>{" "}
                          <tr>
                            <td colSpan={4} className="hideborder1"></td>
                          </tr>{" "}
                          <tr>
                            <td colSpan={4} className="hideborder1"></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </Tab>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        {" "}
        <div className="row" style={{ marginBottom: "10px" }}>
          <div className="col-md-6">
            <div className="row">
              <div
                className="col-md-4"
                style={{ paddingRight: "0px", marginRight: "-20" }}
              >
                <button
                  className="btn btn-primary"
                  type="button"
                  style={{ width: "max-content" }}
                >
                  Send messages
                </button>
              </div>
              <div
                className="col-md-3"
                style={{
                  paddingLeft: "0px",
                  paddingRight: "0px",
                  marginRight: "-20",
                }}
              >
                <button
                  className="btn btn-secondary"
                  type="button"
                  style={{ width: "104" }}
                >
                  Log note
                </button>{" "}
              </div>
              <div className="col-md-5" style={{ paddingLeft: "0px" }}>
                <button className="btn btn-secondary" type="button">
                  <LuClock9 /> Activities
                </button>{" "}
              </div>
            </div>
          </div>
          <div
            className="col-md-6"
            style={{ display: "flex", justifyContent: "end" }}
          >
            <div className="btn-group btn-group-sm" role="group">
              <button type="button" className="btn btn-link">
                <AiOutlinePaperClip />
              </button>
              <button
                type="button"
                className="btn btn-link"
                style={{ marginRight: "5px" }}
              >
                <BsFillPersonFill />
                <MdOutlineExposureZero />
              </button>
              <button type="button" className="btn btn-link">
                Follow
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-5">
            <hr style={{ opacity: "30" }} />
          </div>
          <div
            className="col-md-1"
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            Today
          </div>
          <div className="col-md-5">
            {" "}
            <hr style={{ opacity: "30" }} />
          </div>
        </div>
        <div className="row">
          <div className="col-md-1">
            <img src={img} className="img-fluid" alt="..." />
          </div>
          <div className="col-md-11">
            <div className="row">
              <div
                className="col-md-2"
                style={{
                  paddingRight: "0px",
                  marginRight: "-43px",
                }}
              >
                {" "}
                <h6>Mitchell Admin</h6>
              </div>
              <div
                className="col-md-10"
                style={{
                  paddingLeft: "0px",
                }}
              >
                <span style={{ opacity: "50" }}>- 42 minutes ago</span>
              </div>
            </div>
            <div className="row">Creating a new record...</div>
          </div>
        </div>
      </div>
    </>
  );
}
export default NewButton