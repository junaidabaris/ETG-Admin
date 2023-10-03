import { AiFillSetting, AiTwotoneStar } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import { LiaLessThanSolid } from "react-icons/lia";
import { LiaGreaterThanSolid } from "react-icons/lia";
import { RxHamburgerMenu } from "react-icons/rx";
import { TbLayoutKanban } from "react-icons/tb";
import { ImLocation } from "react-icons/im";
import { BiCalendar } from "react-icons/bi";
import { FaBarsProgress } from "react-icons/fa6";
import { MdOutlineViewQuilt } from "react-icons/md";
import { BsGraphDownArrow } from "react-icons/bs";
import { LuClock9 } from "react-icons/lu";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { LuSettings2 } from "react-icons/lu";
import { AiOutlineStar } from "react-icons/ai";
import { FaCircle } from "react-icons/fa";
import img from "../../../../../src/assets/img/Michell.jpeg";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function ToInvoice() {
  const [state, setState] = useState(false);

  const navigate = useNavigate();
  const changeRoute = () => {
    navigate("/admin/new-button");
  };

  return (
    <>
      {" "}
      <div className="card">
        <div className="card-body">
          <div className="row" style={{ marginBottom: "15px" }}>
            <div className="col-md-1" style={{ paddingRight: "0px" }}>
              <button
                className="btn btn-primary btn-sm"
                type="button"
                onClick={changeRoute}
              >
                NEW
              </button>
            </div>
            <div className="col-md-3" style={{ paddingLeft: "0px" }}>
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
                  To Schedule
                </button>

                <button type="button" className="btn btn-light">
                  <AiFillSetting />
                </button>
              </div>
            </div>
            <div className="col-md-3">
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
            <div className="col-md-2">
              <div className="row">
                <div
                  className="col-md-6"
                  style={{
                    paddingLeft: "0px",
                    paddingRight: "0px",
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "6px",
                  }}
                >
                  {" "}
                  <span>1-23 / 23</span>
                </div>
                <div className="col-md-6" style={{ paddingLeft: "0px" }}>
                  <div className="btn-group btn-group-sm" role="group">
                    <button type="button" className="btn btn-light">
                      <LiaLessThanSolid />
                    </button>

                    <button type="button" className="btn btn-light">
                      <LiaGreaterThanSolid />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="btn-group btn-group-sm" role="group">
                <button type="button" className="btn btn-secondary">
                  <RxHamburgerMenu />
                </button>
                <button type="button" className="btn btn-secondary">
                  <TbLayoutKanban />
                </button>
                <button type="button" className="btn btn-secondary">
                  <ImLocation />
                </button>
                <button type="button" className="btn btn-secondary">
                  <BiCalendar />
                </button>
                <button type="button" className="btn btn-secondary">
                  <FaBarsProgress />
                </button>
                <button type="button" className="btn btn-secondary">
                  <MdOutlineViewQuilt />
                </button>
                <button type="button" className="btn btn-secondary">
                  <BsGraphDownArrow />
                </button>
                <button type="button" className="btn btn-secondary">
                  <LuClock9 />
                </button>
              </div>
            </div>
          </div>
          <div className="row">
            <table className="table table-hover ">
              <thead>
                <tr>
                  <th>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue=""
                        id="flexCheckDefault"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexCheckDefault"
                      ></label>
                    </div>
                  </th>
                  <th></th>
                  <th></th>
                  <th>
                    Title <MdOutlineArrowDropDown />
                  </th>
                  <th>
                    Project <MdOutlineArrowDropDown />
                  </th>
                  <th>
                    Worksheet Templates <MdOutlineArrowDropDown />
                  </th>
                  <th>
                    Customer <MdOutlineArrowDropDown />{" "}
                  </th>
                  <th>
                    Assinees <MdOutlineArrowDropDown />{" "}
                  </th>
                  <th>
                    Company <MdOutlineArrowDropDown />
                  </th>
                  <th>
                    Start date <MdOutlineArrowDropDown />
                  </th>
                  <th>
                    Hours Spent <MdOutlineArrowDropDown />
                  </th>
                  <th>
                    Progress <MdOutlineArrowDropDown />
                  </th>
                  <th>
                    New Activity <MdOutlineArrowDropDown />
                  </th>

                  <th>
                    Tag <MdOutlineArrowDropDown />
                  </th>
                  <th>
                    Status <MdOutlineArrowDropDown />{" "}
                  </th>
                  <th>
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
              <tbody></tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
export default ToInvoice;
