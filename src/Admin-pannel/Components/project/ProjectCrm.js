import React, { useEffect, useState } from "react";
import { AiOutlineAlignLeft } from 'react-icons/ai';
import { FaFilter } from 'react-icons/fa'
import { AiFillFile } from 'react-icons/ai'
import { BiRefresh } from 'react-icons/bi'
import { AiOutlineSearch } from 'react-icons/ai'
import { Link } from "react-router-dom";
import axios from "axios";

function ProjectCrm() {

  const [state, setState] = useState()
  const token = window.localStorage.getItem('adminToken')
  const getDatas = async () => {
    const res = await axios.get(`https://onlineparttimejobs.in/api/project`, {
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        Authorization: `Bearer ${token}`,
      },
    })
    setState(res.data)
  }
  useEffect(() => {
    getDatas()
  }, [])
  return (
    <>
      <div className="container">
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-md-6">
                <Link to="/admin/add-new-project" className="btn btn-circle btn-info"> + Add New Project</Link>
                <button className="btn outline-secondary">
                  <span>
                    <AiOutlineAlignLeft />
                  </span>
                </button>
              </div>
              <div className="col-md-6 text-end">
                <button className="btn outline-secondary ">
                  <span><FaFilter /></span>
                </button>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 mt-3 ">
                <h4 className="form-label"> <span><AiFillFile /></span>Projects Summary</h4>
              </div>
              <div className="col-md-2">
                <lable className='form-lable text-primary fs-2 mr-2' >0</lable>
                <span className="">Not Started</span>
              </div>
              <div className="col-md-2">
                <lable className='form-lable text-primary fs-2 mr-2' >1</lable>
                <span className="text-info">In Progress</span>
              </div>
              <div className="col-md-2">
                <lable className='form-lable text-primary fs-2 mr-2' >0</lable>
                <span className="text-danger">On Hold</span>
              </div>
              <div className="col-md-2">
                <lable className='form-lable text-primary fs-2 mr-2' >0</lable>
                <span style={{}}>Cancelled</span>
              </div>
              <div className="col-md-2">
                <lable className='form-lable text-primary fs-2 mr-2' >0</lable>
                <span style={{ color: "#4caf50" }}>Finished</span>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
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
                      <th>Project Name</th>
                      <th>Customer</th>
                      <th>Tags</th>
                      <th>Start Date</th>
                      <th>Deadlines</th>
                      <th>Members</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>

                    {state && state.map((item,i) => {
                      return <tr key={i}>
                        <td>1</td>
                        <td>
                          <div>{item?.name}</div>
                          <div className="row-options">
                            <Link   to={`project-view/${item._id}`}>View</Link> |{" "}
                            {/* <Link to="#">Edit </Link> |{" "} */}
                            <Link
                              to="#"
                              className="text-danger _delete"
                            >
                              Delete{" "}
                            </Link>
                          </div>

                        </td>
                        <td>{item?.user_id?.firstname + " " +item?.user_id?.lastname}</td>
                        <td>

                        </td>
                        <td>{item.start_date}</td>
                        <td>{item.deadline}</td>
                        <td>--</td>
                        <td><button>{item?.status}</button></td>
                      </tr>
                    })}


                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <div className="row">
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
      </div>
    </>
  )
}
export default ProjectCrm