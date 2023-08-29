import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import { HiOutlinePencilAlt } from "react-icons/hi";
import { AiOutlineCheck } from "react-icons/ai";
import { FiMail } from "react-icons/fi";
// import TableHead from "../tableHeader/TableHead";
function RecruitmentDashNew() {
  return (
    <>
      <div className="container p-2">
        <div className="card">
          <div className="card-body">
            <div className="">
              <label className="form-label">RECRUITMENT DASHBOARD</label>
            </div>
            <hr className="border-1 border-secondary ml-3 mr-3" />
            <div className="row">
              <div className="col-3">
                <div className="card">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-12 mt2">
                        <label className="form-label">
                          <span>
                            <HiOutlinePencilAlt />
                          </span>
                          TOTAL CAMPAIGN
                        </label>
                      </div>
                      <div className="col-12 mt-3 text-end">
                        <label className="fs-5">0</label>
                      </div>
                      <div className="col-12 mt-2">
                        <ProgressBar variant="success" now={100} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className="card">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-12 mt2">
                        <label className="form-label">
                          <span>
                            <HiOutlinePencilAlt />
                          </span>
                          CAMPAIGNS IN PROGRESS
                        </label>
                      </div>
                      <div className="col-12 mt-3 text-end">
                        <label className="fs-5">0</label>
                      </div>
                      <div className="col-12 mt-2">
                        <ProgressBar variant="success" now={0} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className="card">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-12 mt2">
                        <label className="form-label">
                          <span>
                            <FiMail />
                          </span>
                          PLANNED CAMPAIGNS
                        </label>
                      </div>
                      <div className="col-12 mt-3 text-end">
                        <label className="fs-5">0</label>
                      </div>
                      <div className="col-12 mt-2">
                        <ProgressBar variant="success" now={0} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className="card">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-12 mt2">
                        <label className="form-label">
                          <span>
                            <AiOutlineCheck />
                          </span>
                          COMPLETED CAMPAIGNS
                        </label>
                      </div>
                      <div className="col-12 mt-3 text-end">
                        <label className="fs-5">0</label>
                      </div>
                      <div className="col-12 mt-2">
                        <ProgressBar variant="success" now={0} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <div className="row mt-3">
                <div className="col-md-6 text-center">
                  <label className="fs-6">Status of recruitment plans</label>
                </div>
                <div className="col-md-6 text-center">
                  <label className="fs-6">
                    Status of recruitment campaigns
                  </label>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 text-align-center">
                <div
                  className="border"
                  style={{ width: 300, height: 300 }}
                ></div>
              </div>
              <div className="col-md-6 text-end">
                <div
                  className="border"
                  style={{ width: 300, height: 300 }}
                ></div>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-6">
                <div className="row">
                  <div className="col-md-6">
                    <div className="card">
                      <div className="card-body">
                        <div className="row">
                          <div className="col-12">
                            <span>
                              <HiOutlinePencilAlt />
                            </span>
                            <label className="form-label">
                              CANDIDATES NEED TO RECRUIT
                            </label>
                          </div>
                          <div className="col-12 mt-3 text-end">
                            <label className="fs-5">0</label>
                          </div>
                          <div className="col-12 mt-2">
                            <ProgressBar variant="success" now={100} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="card">
                      <div className="card-body">
                        <div className="row">
                          <div className="col-12">
                            <span>
                              <HiOutlinePencilAlt />
                            </span>
                            <label className="form-label">
                              CANDIDATES RECRUITED
                            </label>
                          </div>
                          <div className="col-12 mt-3 text-end">
                            <label className="fs-5">0</label>
                          </div>
                          <div className="col-12 mt-2">
                            <ProgressBar variant="success" now={0} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="card">
                      <div className="card-body">
                        <div className="row">
                          <div className="col-12">
                            <span>
                              <FiMail />
                            </span>
                            <label className="form-label">
                              UPCOMING INTERVIEW
                            </label>
                          </div>
                          <div className="col-12 mt-3 text-end">
                            <label className="fs-5">0</label>
                          </div>
                          <div className="col-12 mt-2">
                            <ProgressBar variant="primary" now={100} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="card">
                      <div className="card-body">
                        <div className="row">
                          <div className="col-12">
                            <span>
                              <AiOutlineCheck />
                            </span>
                            <label className="form-label">
                              CAMPAIGNS RUNNING
                            </label>
                          </div>
                          <div className="col-12 mt-3 text-end">
                            <label className="fs-5">0</label>
                          </div>
                          <div className="col-12 mt-2">
                            <ProgressBar variant="primary" now={0} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                            <div className="">
                                <label className="form-label">
                                Upcoming interview
                                </label>
                            </div>
                            <hr className="border-1 border-secondary ml-3 mr-3"/>
                            <div className="">
                                {/* <TableHead/> */}
                                <table className="table table-secondary">
                            <thead>
                                <tr>
                                    <th>
                                        Interview schedule name
                                    </th>
                                    <th>Recruitment campaigns</th>
                                    <th>
                                        Time
                                    </th>
                                    <th>Interview Date</th>
                                </tr>

                            </thead>
                            <tbody>
                                No Entry found
                            </tbody>
                        </table>
                            </div>
                        </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default RecruitmentDashNew