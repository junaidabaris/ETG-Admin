import React, { useEffect, useState } from "react";
import { AiFillCheckCircle } from 'react-icons/ai'
import { BiTask } from 'react-icons/bi'
import ProgressBar from "react-bootstrap/ProgressBar";
import axios from "axios";
import { useParams } from "react-router-dom";
// import overview from "../../assets/img/overview.png"

function createMarkup(data) {
  return { __html: data };
}
function Overview() {


  const params = useParams()

  const [state1, setState1] = useState()
  const token = window.localStorage.getItem('adminToken')
  const getDatas = async () => {
    const res = await axios.get(`https://onlineparttimejobs.in/api/project/${params.id}`, {
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
      <div className="container p-3">
        <div className="row mt-3">
          <div className="col-md-6">
            <div className="card" style={{padding:"15px"}}>
              <div className="row">
                <div className="col-md-12">
                  <label className="form-label">Project Progress 100%</label>
                </div>
                <div className="col-md-12">
                  <ProgressBar variant="success" now={100} />
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <label className="form-label fs-6">Overview</label>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="label">
                    <label className="form-label">Project cost</label>
                  </div>
                  <div className="label">
                    <label className="form-label">{state1?.project_cost}</label>
                  </div>
                  <div className="label">
                    <label className="form-label mt-3">Billing Type</label>
                  </div>
                  <div className="label">
                    <label className="form-label">{state1?.billing_type.name}</label>
                  </div>
                  <div className="label">
                    <label className="form-label mt-3">Status</label>
                  </div>
                  <div className="label">
                    <label className="form-label">{state1?.status}</label>
                  </div>
                  <div className="label">
                    <label className="form-label mt-3">Start Date</label>
                  </div>
                  <div className="label">
                    <label className="form-label">{state1?.start_date}</label>
                  </div>
                  {/* <div className="label">
                    <label className="form-label mt-3">Tags</label>
                  </div>
                  <div className="label">
                    <button className="btn btn-text-only">Almonds</button>
                  </div> */}
                  <div className="label">
                    <label className="form-label mt-3">Description</label>
                  </div>
                  <div className="label">
                    <label className="form-label" dangerouslySetInnerHTML={createMarkup(state1?.description)}></label>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="label">
                    <label className="form-label">Customer</label>
                  </div>
                  <div className="label">
                    <label className="form-label">{state1?.user_id?.firstname + " "  + state1?.user_id?.lastname}</label>
                  </div>
                  <div className="label mt-3">
                    <label className="form-label">Rate Per Hour</label>
                  </div>
                  <div className="label">
                    <label className="form-label">INR {state1?.project_rate_per_hour}</label>
                  </div>
                  <div className="label mt-3">
                    <label className="form-label">Date Created</label>
                  </div>
                  <div className="label">
                    <label className="form-label">{state1?.createdAt}</label>
                  </div>
                  <div className="label mt-3">
                    <label className="form-label">Deadline</label>
                  </div>
                  <div className="label">
                    <label className="form-label">{state1?.deadline}</label>
                  </div>
                  <div className="label mt-3">
                    <label className="form-label">Total Logged Hours</label>
                  </div>
                  <div className="label">
                    <label className="form-label">--NA--</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="row">
              <div className="col-md-6">
                <div className="card mb-3">
                  <div className="row">
                    <div className="col-md-6 fs-6">
                      <label className="form-label">
                        0 / 0 Open Tasks
                      </label>
                    </div>
                    <div className="">
                      0%
                    </div>
                    <div className="col-md-6 fs-5">
                      <label className="form-label">
                        <AiFillCheckCircle />
                      </label>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-md-12">
                      <ProgressBar variant="success" now={0} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card mb-3">
                  <div className="row">
                    <div className="col-md-6 fs-6">
                      <label className="form-label">
                        1 / 2 Days Left
                      </label>
                    </div>
                    <div className="">
                      50%
                    </div>
                    <div className="col-md-6 fs-5">
                      <label className="form-label">
                        <BiTask />
                      </label>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-md-12">
                      <ProgressBar variant="success" now={0} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card mt-3">
              <div className="row mt-3">
                <div className="col-md-3">
                  <div className="">
                    <label className="from-label">
                      Logged Hours:
                    </label>
                  </div>
                  <div className="">
                    <span className="bold">00:00</span>
                  </div>
                  <div className="">
                    <label className="form-label fs-5">
                      INR0,00
                    </label>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="">
                    <label className="from-label" style={{ color: "blue" }}>
                      Billable Hours
                    </label>
                  </div>
                  <div className="">
                    <span className="bold" style={{ color: "blue" }}>00:00</span>
                  </div>
                  <div className="">
                    <label className="form-label fs-5">
                      INR0,00
                    </label>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="">
                    <label className="from-label" style={{ color: "green" }}>
                      Billable Hours
                    </label>
                  </div>
                  <div className="">
                    <span className="bold" style={{ color: "green" }}>00:00</span>
                  </div>
                  <div className="">
                    <label className="form-label fs-5">
                      INR0,00
                    </label>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="">
                    <label className="from-label" style={{ color: "red" }}>
                      Unbilled Hours:
                    </label>
                  </div>
                  <div className="">
                    <span className="bold" style={{ color: "red" }}>00:00</span>
                  </div>
                  <div className="">
                    <label className="form-label fs-5">
                      INR0,00
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="card mt-3">
              <div className="row mt-3">
                <div className="col-md-3">
                  <div className="">
                    <label className="from-label">
                      Total Expenses
                    </label>
                  </div>
                  <div className="">
                    <span className="bold">00:00</span>
                  </div>
                  <div className="">
                    <label className="form-label fs-5">
                      INR0,00
                    </label>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="">
                    <label className="from-label" style={{ color: "blue" }}>
                      BillableExpenses
                    </label>
                  </div>
                  <div className="">
                    <span className="bold" style={{ color: "blue" }}>00:00</span>
                  </div>
                  <div className="">
                    <label className="form-label fs-5">
                      INR0,00
                    </label>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="">
                    <label className="from-label" style={{ color: "green" }}>
                      Billed Expenses
                    </label>
                  </div>
                  <div className="">
                    <span className="bold" style={{ color: "green" }}>00:00</span>
                  </div>
                  <div className="">
                    <label className="form-label fs-5">
                      INR0,00
                    </label>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="">
                    <label className="from-label" style={{ color: "red" }}>
                      Unbilled Expenses:
                    </label>
                  </div>
                  <div className="">
                    <span className="bold" style={{ color: "red" }}>00:00</span>
                  </div>
                  <div className="">
                    <label className="form-label fs-5">
                      INR0,00
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-8">

              </div>
              <div className="col-md-4 justify-content-right">
                <div className="dropdown">
                  <button className="btn btn-text-only dropdown-toggle" style={{ color: "blue" }} type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    this week
                  </button>
                  <ul class="dropdown-menu">
                    <li><a className="dropdown-item" href="#">This week</a></li>
                    <li><a className="dropdown-item" href="#">Last week</a></li>
                    <li><a className="dropdown-item" href="#">this month</a></li>
                    <li><a className="dropdown-item" href="#">last month</a></li>
                  </ul>
                </div>
              </div>
              <img
                // src={overview}
                style={{ width: 600, height: 350 }}
                alt='overview'
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Overview;
