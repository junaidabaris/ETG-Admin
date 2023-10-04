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
import { TbAdjustmentsHorizontal } from "react-icons/tb";
import { AiOutlineStar } from "react-icons/ai";
import { ImCopy } from "react-icons/im";
import phg from "../../../assets/img/MitchellAdmin122.png"
import { useNavigate } from "react-router-dom";
function Purchases() {
    const navigater = useNavigate()
    const changeRock=()=>{
        navigater('/admin/req-qua')
    }
  return (
    <>
      <div className="container">
        <div className="card p-2">
          <div className="row mt-2">
            <div className="col-4">
              <div className="">
                <button className="btn btn-primary">New</button>
                <label className="form-label ml-1 fs-6">
                  Requests for Quotation
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
            <div className="col-4">
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
                <button className="btn">
                  <MdOutlinePivotTableChart />
                </button>
                <button className="btn">
                  <GoGraph />
                </button>
                <button className="btn">
                  <AiOutlineCalendar />
                </button>
                <button className="btn">
                  <AiFillClockCircle />
                </button>
              </div>
            </div>
          </div>
          <div className="row mt-2">
            <div className="col-6">
              <div className="row">
                <div className="col-3">
                  <label className="fs-6" style={{ marginTop: 20 }}>
                    All RFQs
                  </label>
                </div>
                <div className="col-3">
                  <button
                    className="btn btn-primary"
                    style={{
                      width: 130,
                      height: 70,
                      backgroundColor: "#714b67",
                    }}
                  >
                    <div className="fs-3">9</div>
                    <span>To Send</span>
                  </button>
                </div>
                <div className="col-3">
                  <button
                    className="btn btn-primary"
                    style={{
                      width: 130,
                      height: 70,
                      backgroundColor: "#714b67",
                    }}
                  >
                    <div className="fs-3">0</div>
                    <span>To Send</span>
                  </button>
                </div>
                <div className="col-3">
                  <button
                    className="btn btn-primary"
                    style={{
                      width: 130,
                      height: 70,
                      backgroundColor: "#714b67",
                    }}
                  >
                    <div className="fs-3">10</div>
                    <span>To Send</span>
                  </button>
                </div>
              </div>
              <div className="row mt-2">
                <div className="col-3">
                  <label className="fs-6" style={{ marginTop: 20 }}>
                    My RFQs
                  </label>
                </div>
                <div className="col-3">
                  <button className="btn" style={{ width: 130, height: 70 }}>
                    <div className="">9</div>
                  </button>
                </div>
                <div className="col-3">
                  <button className="btn" style={{ width: 130, height: 70 }}>
                    <div className="">0</div>
                  </button>
                </div>
                <div className="col-3">
                  <button className="btn" style={{ width: 130, height: 70 }}>
                    <div className="">10</div>
                  </button>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="row">
                <div className="col-6">
                  <div className="d-flex">
                    <div className="col text-right" style={{ marginTop: 10 }}>
                      <span className="">Avg Order value</span>
                    </div>
                    <div className="col" style={{ marginTop: 10 }}>
                      <span className="">$ 6,602.50</span>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="d-flex">
                    <div className="col" style={{ marginTop: 10 }}>
                      <span className="">Purchased Last 7 Days</span>
                    </div>
                    <div className="col" style={{ marginTop: 10 }}>
                      <span className="">$ 22,696.40</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mt-2">
                <div className="col-6">
                  <div className="d-flex">
                    <div className="col text-right" style={{ marginTop: 10 }}>
                      <span className="">Lead Time to Purchase</span>
                    </div>
                    <div className="col" style={{ marginTop: 10 }}>
                      <span className="">-6.4 Days</span>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="d-flex">
                    <div className="col" style={{ marginTop: 10 }}>
                      <span className="">RFQs Sent Last 7 Days</span>
                    </div>
                    <div className="col" style={{ marginTop: 10 }}>
                      <span className="">0</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="table">
            <table className="table">
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
                  <th></th>
                  <th></th>
                  <th>Reference</th>
                  <th>Vendor</th>
                  <th>Company</th>
                  <th>Buyer</th>
                  <th>Order Deadline</th>
                  <th>Activites</th>
                  <th>Source Document</th>
                  <th>Total </th>
                  <th>Status</th>
                  <th>
                    <TbAdjustmentsHorizontal />
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr onClick={changeRock}>
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
                  <td>
                    <AiOutlineStar />
                  </td>
                  <td></td>
                  <td>P00015</td>
                  <td>Ready Mat</td>
                  <td>Demo Company</td>
                  <td> <img src={phg} alt="MitchellAdmin122"style={{width:25, height:25}} className="mr-1"/>Mitchell Admin</td>
                  <td></td>
                  <td>< AiFillClockCircle/> </td>
                  <td></td>
                  <td>$ 6,596.40</td>
                  <td> <button className="ml-1 fs-9" style={{height:29,width:60, borderRadius:15, backgroundColor:"#20ba22"}}>
                                    Purchase Order
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
                  <td>
                    <AiOutlineStar />
                  </td>
                  <td><ImCopy/></td>
                  <td>P00014</td>
                  <td>Deco Addict</td>
                  <td>Demo Company</td>
                  <td> <img src={phg} alt="MitchellAdmin122"style={{width:25, height:25}} className="mr-1"/>Mitchell Admin</td>
                  <td>Today</td>
                  <td>< AiFillClockCircle/> </td>
                  <td></td>
                  <td>$ 552.00</td>
                  <td> <button className="ml-1 fs-9" style={{height:29,width:60, borderRadius:15, backgroundColor:"#209cc9"}}>
                                    RFQ
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
                  <td>
                    <AiOutlineStar />
                  </td>
                  <td><ImCopy/></td>
                  <td>P00014</td>
                  <td>Deco Addict</td>
                  <td>Demo Company</td>
                  <td> <img src={phg} alt="MitchellAdmin122"style={{width:25, height:25}} className="mr-1"/>Mitchell Admin</td>
                  <td>Today</td>
                  <td>< AiFillClockCircle/> </td>
                  <td></td>
                  <td>$ 552.00</td>
                  <td> <button className="ml-1 fs-9" style={{height:29,width:60, borderRadius:15, backgroundColor:"#209cc9"}}>
                                    RFQ
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
                  <td>
                    <AiOutlineStar />
                  </td>
                  <td><ImCopy/></td>
                  <td>P00014</td>
                  <td>Deco Addict</td>
                  <td>Demo Company</td>
                  <td> <img src={phg} alt="MitchellAdmin122"style={{width:25, height:25}} className="mr-1"/>Mitchell Admin</td>
                  <td>Today</td>
                  <td>< AiFillClockCircle/> </td>
                  <td></td>
                  <td>$ 552.00</td>
                  <td> <button className="ml-1 fs-9" style={{height:29,width:60, borderRadius:15, backgroundColor:"#209cc9"}}>
                                    RFQ
                                </button></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
export default Purchases;
