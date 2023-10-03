import { AiFillSetting } from "react-icons/ai";
import { AiOutlineSearch, AiOutlineBarChart } from "react-icons/ai";

import { FaChartPie } from "react-icons/fa6";
import { MdOutlineViewQuilt } from "react-icons/md";
import { FaChartLine } from "react-icons/fa";
import {
  BsGraphDownArrow,
  BsFillDatabaseFill,
  BsSortDownAlt,
  BsSortDown,
} from "react-icons/bs";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import React, { PureComponent } from "react";
import { LineChart, Line } from "recharts";
import { PieChart, Pie } from "recharts";

function TasksAnalysis() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const Count = [{ name: "Field Service", count: "23", amt: "25" }];

  return (
    <>
      <div className="card">
        <div className="card-body">
          <div className="container">
            <div className="row">
              <div className="col-md-4" style={{ paddingLeft: "0px" }}>
                <div
                  className="btn-group btn-group-sm"
                  role="group"
                  aria-label="Basic example"
                >
                  <button
                    type="button"
                    className="btn btn-light "
                    style={{ marginRight: "2px" }}
                  >
                    Tasks Analysis
                  </button>
                  <Dropdown>
                    <Dropdown.Toggle variant="light" id="dropdown-basic">
                      <AiFillSetting />
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">
                        Link menu in spreadsheet
                      </Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item href="#/action-2">
                        Insert view in article
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-3">
                        Insert link in article
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </div>
              <div className="col-md-4">
                <div className="input-group input-group-sm ">
                  <button className="btn btn-light btn-sm">
                    <AiOutlineSearch />
                  </button>
                  <input
                    type="text"
                    className="form-control"
                    aria-label="search with dropdown button"
                    placeholder="Search..."
                  />
                  <button
                    className="btn btn-outline-secondary dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  ></button>
                  <ul className="dropdown-menu dropdown-menu-end">
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
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Separated link
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div
                className="col-md-4"
                style={{ display: "flex", justifyContent: "end" }}
              >
                <div className="btn-group btn-group-sm" role="group">
                  <button type="button" className="btn btn-secondary">
                    <BsGraphDownArrow />
                  </button>
                  <button type="button" className="btn btn-secondary">
                    <MdOutlineViewQuilt />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-12" style={{ display: "flex" }}>
            <div className="row">
              {" "}
              <div className="col-md-2">
                <DropdownButton id="dropdown-basic-button" title="Measures">
                  <Dropdown.Item href="#/action-1">
                    Allocated Time
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    Days to Deadline{" "}
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Hours Spent</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item href="#/action-4">Count</Dropdown.Item>
                </DropdownButton>
              </div>
              <div className="col-md-3" style={{ paddingRight: "0px" }}>
                <button
                  className="btn btn-secondary"
                  type="button"
                  onClick={handleShow}
                  style={{ width: "max-content" }}
                >
                  Insert in spreadsheet
                </button>
                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>
                      Select a spreadsheet to insert your graph
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <div className="container">
                      <div className="row">
                        <div className="col-md-3">
                          <label className="form-label" for="project">
                            Name of the graph
                          </label>
                        </div>
                        <div className="col-md-8">
                          <InputGroup className="mb-3">
                            <Form.Control
                              placeholder="Task Analysis"
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
                              <Dropdown.Item>Task Analysis</Dropdown.Item>
                            </DropdownButton>
                          </InputGroup>
                        </div>
                      </div>
                      <div className="row">
                        <Tabs
                          defaultActiveKey="spreadsheets"
                          id="uncontrolled-tab-example"
                          className="mb-3"
                        >
                          <Tab
                            eventKey="spreadsheets"
                            title="Spreadsheets"
                          ></Tab>
                          <Tab eventKey="dashboard" title="Dashboard"></Tab>
                        </Tabs>
                      </div>
                    </div>
                  </Modal.Body>
                  <Modal.Footer
                    style={{ display: "flex", justifyContent: "start" }}
                  >
                    <Button variant="primary" onClick={handleClose}>
                      Confirm
                    </Button>
                    <Button variant="light" onClick={handleClose}>
                      Cancel
                    </Button>
                  </Modal.Footer>
                </Modal>
              </div>
              <div
                className="col-md-2"
                style={{
                  marginRight: "40px",
                  paddingRight: "0px",
                  paddingLeft: "4px",
                }}
              >
                <div
                  className="btn-group"
                  role="group"
                  aria-label="Basic example"
                >
                  <button type="button" className="btn btn-secondary">
                    <AiOutlineBarChart />
                  </button>
                  <button type="button" className="btn btn-secondary">
                    <FaChartLine />
                  </button>
                  <button type="button" className="btn btn-secondary">
                    <FaChartPie />
                  </button>
                </div>
              </div>
              <div className="col-md-1">
                <button className="btn btn-secondary" type="button">
                  <BsFillDatabaseFill />
                </button>
              </div>
              <div className="col-md-2">
                {" "}
                <div
                  className="btn-group"
                  role="group"
                  aria-label="Basic example"
                >
                  <button type="button" className="btn btn-secondary">
                    <BsSortDown />
                  </button>

                  <button type="button" className="btn btn-secondary">
                    <BsSortDownAlt />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6"></div>
        </div>
        <div className="row">
          <div className="col-md-12" style={{ marginTop: "20px" }}>
            {" "}
            <BarChart
              width={1050}
              height={500}
              data={Count}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="count" fill="#8884d8" />
            </BarChart>
          </div>
        </div>
        <div className="row" style={{ marginTop: "20px" }}>
          <LineChart
            width={1050}
            height={500}
            data={Count}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="count"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </div>
        <div className="row" style={{ marginTop: "20px" }}>
          <PieChart width={400} height={400}>
            <Pie
              data={Count}
              dataKey="count"
              cx={200}
              cy={200}
              outerRadius={50}
              fill="#8884d8"
            />
          </PieChart>
        </div>
      </div>
    </>
  );
}
export default TasksAnalysis;
