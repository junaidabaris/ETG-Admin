import React from "react";
import { IoIosSettings } from "react-icons/io";
import { AiOutlineSearch } from "react-icons/ai";
import { AiFillCaretDown } from "react-icons/ai";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { AiFillClockCircle } from "react-icons/ai";
import { AiOutlineCalendar } from "react-icons/ai";
import { MdViewKanban } from "react-icons/md";
import { BsChevronCompactLeft } from "react-icons/bs";
import { BsChevronRight } from "react-icons/bs";
import { MdOutlinePivotTableChart } from "react-icons/md";
import { GoGraph } from "react-icons/go";
import { TableCell } from "@mui/material";
import { TbAdjustmentsHorizontal } from "react-icons/tb";
import phg from "../../../assets/img/MitchellAdmin122.png"
import ProgressBar from 'react-bootstrap/ProgressBar';
import { Link } from "react-router-dom";
// import { AiOutlineStar } from "react-icons/ai";
// import { ImCopy } from "react-icons/im";
function EmailMarketings(){
    return(
        <>
        <div className="container">
            <div className="card p-2">
            <div className="row mt-2">
            <div className="col-4">
              <div className="">
                <Link to={"/admin/email-new"}  className="btn btn-primary">New</Link>
                {/* <button className="btn btn-primary">New</button> */}
                <label className="form-label ml-1 fs-6">
                Mailings
                </label>
                <span>
                  <button className="btn ">
                    <IoIosSettings />
                  </button>
                </span>
              </div>
            </div>
            <div className="col-4">
              <div className="">
                <div className="input-group mb-3">
                  <span className="input-group-text">
                    <AiOutlineSearch />
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    aria-label="Amount (to the nearest dollar)"
                  />
                  <span className="input-group-text">
                    <AiFillCaretDown />
                  </span>
                </div>
              </div>
            </div>
            <div className="col-4 text-right">
              <div className="">
                <button className="mr-1">
                  <BsChevronCompactLeft />
                </button>
                <button className="">
                  <BsChevronRight />
                </button>
                <button className="btn">
                  <AiOutlineUnorderedList />
                </button>
                <button className="btn">
                  <MdViewKanban />
                </button>
                {/* <button className="btn">
                  <MdOutlinePivotTableChart />
                </button> */}
                <button className="btn">
                  <GoGraph />
                </button>
                <button className="btn">
                  <AiOutlineCalendar />
                </button>
                {/* <button className="btn">
                  <AiFillClockCircle />
                </button> */}
              </div>
            </div>
          </div>
          <div className="row p-3">
            <table className="">
            <thead className="table-secondary">
                <tr>
                  <th>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue=""
                        id="flexCheckDefault"
                      />
                    </div>
                  </th>
                  <th>Date</th>
                  <th>Subject</th>
                  <th>Responsible</th>
                  <th>Sent</th>
                  <th>Delivered(%)</th>
                  <th>Opend(%)</th>
                  <th>Clicked(%)</th>
                  <th>replied(%)</th>
                  <th>Status</th>
                  
                  <th>
                    <TbAdjustmentsHorizontal />
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                    <td>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue=""
                        id="flexCheckDefault"
                      />
                    </div>
                    </td>
                    <td></td>
                    <td>Our last promotions,<br/> just for you!</td>
                    
                    <td> <img src={phg} alt="MitchellAdmin122"style={{width:25, height:25}} className="mr-1"/>Mitchell Admin</td>
                    <td>0</td>
                    <td className="d-flex">  <ProgressBar variant="info"now={0} style={{width:40}}/>0%</td>
                    <td>  <ProgressBar variant="info"now={0} style={{width:30}}/>0%</td>
                    <td>0</td>
                    <td>0</td>
                    <td><button className="ml-1 fs-9" style={{height:29,width:60, borderRadius:15, backgroundColor:"#209cc9"}}>
                                    Draft
                                </button></td>
                </tr>
                <tr>
                    <td>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue=""
                        id="flexCheckDefault"
                      />
                    </div>
                    </td>
                    <td></td>
                    <td>We want to hear from you!</td>
                    
                    <td> <img src={phg} alt="MitchellAdmin122"style={{width:25, height:25}} className="mr-1"/>Mitchell Admin</td>
                    <td>0</td>
                    <td className="d-flex">  <ProgressBar variant="info"now={0} style={{width:40}}/>0%</td>
                    <td>  <ProgressBar variant="info"now={0} style={{width:30}}/>0%</td>
                    <td>0</td>
                    <td>0</td>
                    <td><button className="ml-1 fs-9" style={{height:29,width:60, borderRadius:15, backgroundColor:"#209cc9"}}>
                                    Draft
                                </button></td>
                </tr>
                <tr>
                    <td>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue=""
                        id="flexCheckDefault"
                      />
                    </div>
                    </td>
                    <td>09/24/2023 06:31:44</td>
                    <td>Monthly Newsletter</td>
                    
                    <td> <img src={phg} alt="MitchellAdmin122"style={{width:25, height:25}} className="mr-1"/>Mitchell Admin</td>
                    <td>0</td>
                    <td className="d-flex">  <ProgressBar variant="info"now={62} style={{width:40}}/>62%</td>
                    <td>  <ProgressBar variant="info"now={50} style={{width:30}}/>50%</td>
                    <td>0</td>
                    <td>0</td>
                    <td><button className="ml-1 fs-9" style={{height:29,width:60, borderRadius:15, backgroundColor:"#20ba22"}}>
                                    Sent
                                </button></td>
                </tr>
              </tbody>
            </table>
          </div>
            </div>
        </div>
        </>
    )
}
export default EmailMarketings