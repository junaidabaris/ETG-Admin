import React, { useEffect, useState } from "react";
import { FaFilter } from "react-icons/fa";
import { AiFillFile } from "react-icons/ai";
import { Link, useParams } from "react-router-dom";
import TableHead from "../tableHeader/TableHead";
import { Checkbox } from "@mui/material";
import TaskModal from "./TaskModal";
import axios from "axios";
import { Table } from "react-bootstrap";
function Task() {
  const [modalShow, setModalShow] = useState(false);


  const [state1, setState1] = useState()
  const params = useParams()
  const token = window.localStorage.getItem('adminToken')
  const getDatas = async () => {
    const res = await axios.get(`https://onlineparttimejobs.in/api/task/project/${params.id}`, {
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
              <Link
                to={"/admin/task-overview"}
                className="btn btn-success mr-2"
              // onClick={() => setModalShow(true)}
              >
                Task Overview
              </Link>
              <Link
                to={"#"}
                className="btn btn-success mr-2"
                onClick={() => setModalShow(true)}
              >
                Add Task
              </Link>
            </div>
            {modalShow && <TaskModal show={modalShow}
              onHide={() => setModalShow(false)} />}
          </div>
          <div className="col-md-6 text-end">
            <button className="btn btn-outline-secondary mr-2">
              <span>
                <FaFilter />
              </span>
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 mt-3 ">
            <h4 className="form-label">
              {" "}
              <span>
                <AiFillFile />
              </span>
              Task Summary
            </h4>
          </div>
          <div className="col-md-2">
            <lable className="form-lable text-primary fs-2 mr-2">0</lable>
            <span className="">
              Not Started <br />
              Tasks assigned to me: 0
            </span>
          </div>
          <div className="col-md-2">
            <lable className="form-lable text-primary fs-2 mr-2">3</lable>
            <span className="text-info">
              In Progress <br />
              Tasks assigned to me: 3
            </span>
          </div>
          <div className="col-md-2">
            <lable className="form-lable text-primary fs-2 mr-2">0</lable>
            <span className="text-danger">
              Testing <br />
              Tasks assigned to me: 0
            </span>
          </div>
          <div className="col-md-2">
            <lable className="form-lable text-primary fs-2 mr-2">0</lable>
            <span style={{}}>
              Awaiting Feedback Testing <br />
              Tasks assigned to me: 0
            </span>
          </div>
          <div className="col-md-2">
            <lable className="form-lable text-primary fs-2 mr-2">0</lable>
            <span style={{ color: "#4caf50" }}>
              Complete <br />
              Tasks assigned to me: 0
            </span>
          </div>
        </div>
        <hr className="border-1 border-secondary mt-3" />
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="">
            <TableHead />
          </div>
        </div>
      </div>
      <div className="row">

        <Table striped bordered>
          <thead>
            <tr>
              <th>#</th>
              <th>Name </th>
              <th>status</th>
              <th>Start Date</th>
              <th>Due Date</th>
              <th>assigned to</th>
              <th>Recurring_type</th>
              <th>Priority</th>
            </tr>
          </thead>
          <tbody>

            {state1 && state1?.map((item,i) => {
              return <tr key={i}>
                <td>{1 + i}</td>
                <td>{item?.name}</td>
                <td>{item?.status}</td>
                <td>{item?.startdate}</td>
                <td>{item?.duedate}</td>
                <td>--</td>
                <td>{item?.recurring_type}</td>
                <td>{item?.priority}</td>
              </tr>

            })}

          </tbody>
        </Table>
      </div>
    </>
  );
}
export default Task;
