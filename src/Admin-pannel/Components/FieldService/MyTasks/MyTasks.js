import { AiFillSetting, AiTwotoneStar } from "react-icons/ai";
import {
  AiOutlineSearch,
  AiOutlineArrowRight,
  AiOutlineStar,
} from "react-icons/ai";
import { LiaLessThanSolid } from "react-icons/lia";
import { LiaGreaterThanSolid } from "react-icons/lia";
import { RxHamburgerMenu } from "react-icons/rx";
import { TbLayoutKanban } from "react-icons/tb";
import { BsFillPersonPlusFill } from "react-icons/bs";
import { ImLocation } from "react-icons/im";
import { BiCalendar } from "react-icons/bi";
import { FaBarsProgress } from "react-icons/fa6";
import { MdOutlineViewQuilt } from "react-icons/md";
import { FaCircle } from "react-icons/fa";
import { BsGraphDownArrow, BsTelephoneFill } from "react-icons/bs";
import { LuClock9, LuSettings } from "react-icons/lu";
import { PiNumberSixBold } from "react-icons/pi";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import img from "../../../../../src/assets/img/Michell.jpeg";

function MyTasks() {
  const [state, setState] = useState(false);

  const navigate = useNavigate();
  const changeRoute = () => {
    navigate("/admin/new-button");
  };

  return (
    <>
      <div className="card">
        <div className="card-body">
          <div className="container">
            <div className="row">
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
                    My Tasks
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
          </div>
        </div>
      </div>
      <div className="container">
        <div className="wrappert">
          <div className="item">
            <div className="row" style={{ margin: "auto" }}>
              <div className="row">
                <div className="col-md-10">
                  <h6>20 Sep 2023</h6>
                </div>
                <div className="col-md-2">
                  <LuSettings />
                </div>
              </div>
              <div
                className="row"
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <div className="col-md-8">
                  <div
                    className="progress"
                    role="progressbar"
                    aria-label="Basic example"
                    aria-valuenow={100}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    <div className="progress-bar" style={{ width: "100%" }} />
                  </div>
                </div>
                <div className="col-md-1">
                  <PiNumberSixBold />
                </div>
              </div>
              <div
                className="row"
                style={{
                  backgroundColor: "white",
                  margin: "1px",
                  border: "1px solid lightgray",
                  borderLeft: "2px solid blue",
                  padding: "1px",
                }}
              >
                <div>
                  <strong>Boiler maintenance</strong>
                  <br />
                  <span>Device Installation and Maintenance</span>
                  <br />
                  <span>Field Service</span>
                  <br />
                  <span>Azure Interior, Colleen Diaz • Fremont</span>
                </div>
                <div>
                  <span>
                    <span> 09/20/2023 12:30:00</span> <AiOutlineArrowRight />
                    <span>09/20/2023 14:30:00</span>
                  </span>
                </div>
                <div
                  className="row"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "5px",
                  }}
                >
                  <div className="col-md-6">
                    {" "}
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
                    <LuClock9 />
                  </div>
                  <div
                    className="col-md-6"
                    style={{
                      display: "flex",
                      justifyContent: "end",
                      padding: "0px",
                    }}
                  >
                    <BsFillPersonPlusFill />
                    <img
                      src={img}
                      className="img-fluid"
                      alt="..."
                      style={{
                        width: "20px",
                        height: "15px",
                        marginLeft: "5px",
                        marginRight: "5px",
                      }}
                    />
                    <button
                      className="btn"
                      type="button"
                      style={{
                        display: "flex",
                        alignItems: "baseline",
                        padding: "0px",
                      }}
                    >
                      <FaCircle />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="row" style={{ margin: "auto" }}>
              <div
                className="row"
                style={{
                  backgroundColor: "white",
                  margin: "1px",
                  border: "1px solid lightgray",
                  borderLeft: "2px solid blue",
                  padding: "1px",
                }}
              >
                <div>
                  <strong>Boiler maintenance</strong>
                  <br />
                  <span>Device Installation and Maintenance</span>
                  <br />
                  <span>Field Service</span>
                  <br />
                  <span>Azure Interior, Colleen Diaz • Fremont</span>
                </div>
                <div>
                  <span>
                    <span> 09/20/2023 12:30:00</span> <AiOutlineArrowRight />
                    <span>09/20/2023 14:30:00</span>
                  </span>
                </div>
                <div
                  className="row"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "5px",
                  }}
                >
                  <div className="col-md-6">
                    {" "}
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
                    <LuClock9 />
                  </div>
                  <div
                    className="col-md-6"
                    style={{
                      display: "flex",
                      justifyContent: "end",
                      padding: "0px",
                    }}
                  >
                    <BsFillPersonPlusFill />
                    <img
                      src={img}
                      className="img-fluid"
                      alt="..."
                      style={{
                        width: "20px",
                        height: "15px",
                        marginLeft: "5px",
                        marginRight: "5px",
                      }}
                    />
                    <button
                      className="btn"
                      type="button"
                      style={{
                        display: "flex",
                        alignItems: "baseline",
                        padding: "0px",
                      }}
                    >
                      <FaCircle />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="row" style={{ margin: "auto" }}>
              <div
                className="row"
                style={{
                  backgroundColor: "white",
                  margin: "1px",
                  border: "1px solid lightgray",
                  borderLeft: "2px solid blue",
                  padding: "1px",
                }}
              >
                <div>
                  <strong>Boiler maintenance</strong>
                  <br />
                  <span>Device Installation and Maintenance</span>
                  <br />
                  <span>Field Service</span>
                  <br />
                  <span>Azure Interior, Colleen Diaz • Fremont</span>
                </div>
                <div>
                  <span>
                    <span> 09/20/2023 12:30:00</span> <AiOutlineArrowRight />
                    <span>09/20/2023 14:30:00</span>
                  </span>
                </div>
                <div
                  className="row"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "5px",
                  }}
                >
                  <div className="col-md-6">
                    {" "}
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
                    <BsTelephoneFill />
                  </div>
                  <div
                    className="col-md-6"
                    style={{
                      display: "flex",
                      justifyContent: "end",
                      padding: "0px",
                    }}
                  >
                    <BsFillPersonPlusFill />
                    <img
                      src={img}
                      className="img-fluid"
                      alt="..."
                      style={{
                        width: "20px",
                        height: "15px",
                        marginLeft: "5px",
                        marginRight: "5px",
                      }}
                    />
                    <button
                      className="btn"
                      type="button"
                      style={{
                        display: "flex",
                        alignItems: "baseline",
                        padding: "0px",
                      }}
                    >
                      <FaCircle />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="row" style={{ margin: "auto" }}>
              <div
                className="row"
                style={{
                  backgroundColor: "white",
                  margin: "1px",
                  border: "1px solid lightgray",
                  borderLeft: "2px solid blue",
                  padding: "1px",
                }}
              >
                <div>
                  <strong>Boiler maintenance</strong>
                  <br />
                  <span>Device Installation and Maintenance</span>
                  <br />
                  <span>Field Service</span>
                  <br />
                  <span>Azure Interior, Colleen Diaz • Fremont</span>
                </div>
                <div>
                  <span>
                    <span> 09/20/2023 12:30:00</span> <AiOutlineArrowRight />
                    <span>09/20/2023 14:30:00</span>
                  </span>
                </div>
                <div
                  className="row"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "5px",
                  }}
                >
                  <div className="col-md-6">
                    {" "}
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
                    <LuClock9 />
                  </div>
                  <div
                    className="col-md-6"
                    style={{
                      display: "flex",
                      justifyContent: "end",
                      padding: "0px",
                    }}
                  >
                    <BsFillPersonPlusFill />
                    <img
                      src={img}
                      className="img-fluid"
                      alt="..."
                      style={{
                        width: "20px",
                        height: "15px",
                        marginLeft: "5px",
                        marginRight: "5px",
                      }}
                    />
                    <button
                      className="btn"
                      type="button"
                      style={{
                        display: "flex",
                        alignItems: "baseline",
                        padding: "0px",
                      }}
                    >
                      <FaCircle />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="row" style={{ margin: "auto" }}>
              <div
                className="row"
                style={{
                  backgroundColor: "white",
                  margin: "1px",
                  border: "1px solid lightgray",
                  borderLeft: "2px solid blue",
                  padding: "1px",
                }}
              >
                <div>
                  <strong>Boiler maintenance</strong>
                  <br />
                  <span>Device Installation and Maintenance</span>
                  <br />
                  <span>Field Service</span>
                  <br />
                  <span>Azure Interior, Colleen Diaz • Fremont</span>
                </div>
                <div>
                  <span>
                    <span> 09/20/2023 12:30:00</span> <AiOutlineArrowRight />
                    <span>09/20/2023 14:30:00</span>
                  </span>
                </div>
                <div
                  className="row"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "5px",
                  }}
                >
                  <div className="col-md-6">
                    {" "}
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
                    <LuClock9 />
                  </div>
                  <div
                    className="col-md-6"
                    style={{
                      display: "flex",
                      justifyContent: "end",
                      padding: "0px",
                    }}
                  >
                    <BsFillPersonPlusFill />
                    <img
                      src={img}
                      className="img-fluid"
                      alt="..."
                      style={{
                        width: "20px",
                        height: "15px",
                        marginLeft: "5px",
                        marginRight: "5px",
                      }}
                    />
                    <button
                      className="btn"
                      type="button"
                      style={{
                        display: "flex",
                        alignItems: "baseline",
                        padding: "0px",
                      }}
                    >
                      <FaCircle />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="row" style={{ margin: "auto" }}>
              <div
                className="row"
                style={{
                  backgroundColor: "white",
                  margin: "1px",
                  border: "1px solid lightgray",
                  borderLeft: "2px solid blue",
                  padding: "1px",
                }}
              >
                <div>
                  <strong>Boiler maintenance</strong>
                  <br />
                  <span>Device Installation and Maintenance</span>
                  <br />
                  <span>Field Service</span>
                  <br />
                  <span>Azure Interior, Colleen Diaz • Fremont</span>
                </div>
                <div>
                  <span>
                    <span> 09/20/2023 12:30:00</span> <AiOutlineArrowRight />
                    <span>09/20/2023 14:30:00</span>
                  </span>
                </div>
                <div
                  className="row"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "5px",
                  }}
                >
                  <div className="col-md-6">
                    {" "}
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
                    <LuClock9 />
                  </div>
                  <div
                    className="col-md-6"
                    style={{
                      display: "flex",
                      justifyContent: "end",
                      padding: "0px",
                    }}
                  >
                    <BsFillPersonPlusFill />
                    <img
                      src={img}
                      className="img-fluid"
                      alt="..."
                      style={{
                        width: "20px",
                        height: "15px",
                        marginLeft: "5px",
                        marginRight: "5px",
                      }}
                    />
                    <button
                      className="btn"
                      type="button"
                      style={{
                        display: "flex",
                        alignItems: "baseline",
                        padding: "0px",
                      }}
                    >
                      <FaCircle />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            {" "}
            <div className="row" style={{ margin: "auto" }}>
              <div className="row">
                <div className="col-md-10">
                  <h6>20 Sep 2023</h6>
                </div>
                <div className="col-md-2">
                  <LuSettings />
                </div>
              </div>
              <div
                className="row"
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <div className="col-md-8">
                  <div
                    className="progress"
                    role="progressbar"
                    aria-label="Basic example"
                    aria-valuenow={100}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    <div className="progress-bar" style={{ width: "100%" }} />
                  </div>
                </div>
                <div className="col-md-1">
                  <PiNumberSixBold />
                </div>
              </div>
              <div
                className="row"
                style={{
                  backgroundColor: "white",
                  margin: "1px",
                  border: "1px solid lightgray",
                  borderLeft: "2px solid blue",
                  padding: "1px",
                }}
              >
                <div>
                  <strong>Boiler maintenance</strong>
                  <br />
                  <span>Device Installation and Maintenance</span>
                  <br />
                  <span>Field Service</span>
                  <br />
                  <span>Azure Interior, Colleen Diaz • Fremont</span>
                </div>
                <div>
                  <span>
                    <span> 09/20/2023 12:30:00</span> <AiOutlineArrowRight />
                    <span>09/20/2023 14:30:00</span>
                  </span>
                </div>
                <div
                  className="row"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "5px",
                  }}
                >
                  <div className="col-md-6">
                    {" "}
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
                    <LuClock9 />
                  </div>
                  <div
                    className="col-md-6"
                    style={{
                      display: "flex",
                      justifyContent: "end",
                      padding: "0px",
                    }}
                  >
                    <BsFillPersonPlusFill />
                    <img
                      src={img}
                      className="img-fluid"
                      alt="..."
                      style={{
                        width: "20px",
                        height: "15px",
                        marginLeft: "5px",
                        marginRight: "5px",
                      }}
                    />
                    <button
                      className="btn"
                      type="button"
                      style={{
                        display: "flex",
                        alignItems: "baseline",
                        padding: "0px",
                      }}
                    >
                      <FaCircle />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            {" "}
            <div className="row" style={{ margin: "auto" }}>
              <div className="row">
                <div className="col-md-10">
                  <h6>20 Sep 2023</h6>
                </div>
                <div className="col-md-2">
                  <LuSettings />
                </div>
              </div>
              <div
                className="row"
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <div className="col-md-8">
                  <div
                    className="progress"
                    role="progressbar"
                    aria-label="Basic example"
                    aria-valuenow={100}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    <div className="progress-bar" style={{ width: "100%" }} />
                  </div>
                </div>
                <div className="col-md-1">
                  <PiNumberSixBold />
                </div>
              </div>
              <div
                className="row"
                style={{
                  backgroundColor: "white",
                  margin: "1px",
                  border: "1px solid lightgray",
                  borderLeft: "2px solid blue",
                  padding: "1px",
                }}
              >
                <div>
                  <strong>Boiler maintenance</strong>
                  <br />
                  <span>Device Installation and Maintenance</span>
                  <br />
                  <span>Field Service</span>
                  <br />
                  <span>Azure Interior, Colleen Diaz • Fremont</span>
                </div>
                <div>
                  <span>
                    <span> 09/20/2023 12:30:00</span> <AiOutlineArrowRight />
                    <span>09/20/2023 14:30:00</span>
                  </span>
                </div>
                <div
                  className="row"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "5px",
                  }}
                >
                  <div className="col-md-6">
                    {" "}
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
                    <LuClock9 />
                  </div>
                  <div
                    className="col-md-6"
                    style={{
                      display: "flex",
                      justifyContent: "end",
                      padding: "0px",
                    }}
                  >
                    <BsFillPersonPlusFill />
                    <img
                      src={img}
                      className="img-fluid"
                      alt="..."
                      style={{
                        width: "20px",
                        height: "15px",
                        marginLeft: "5px",
                        marginRight: "5px",
                      }}
                    />
                    <button
                      className="btn"
                      type="button"
                      style={{
                        display: "flex",
                        alignItems: "baseline",
                        padding: "0px",
                      }}
                    >
                      <FaCircle />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            {" "}
            <div className="row" style={{ margin: "auto" }}>
              <div className="row">
                <div className="col-md-10">
                  <h6>20 Sep 2023</h6>
                </div>
                <div className="col-md-2">
                  <LuSettings />
                </div>
              </div>
              <div
                className="row"
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <div className="col-md-8">
                  <div
                    className="progress"
                    role="progressbar"
                    aria-label="Basic example"
                    aria-valuenow={100}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    <div className="progress-bar" style={{ width: "100%" }} />
                  </div>
                </div>
                <div className="col-md-1">
                  <PiNumberSixBold />
                </div>
              </div>
              <div
                className="row"
                style={{
                  backgroundColor: "white",
                  margin: "1px",
                  border: "1px solid lightgray",
                  borderLeft: "2px solid blue",
                  padding: "1px",
                }}
              >
                <div>
                  <strong>Boiler maintenance</strong>
                  <br />
                  <span>Device Installation and Maintenance</span>
                  <br />
                  <span>Field Service</span>
                  <br />
                  <span>Azure Interior, Colleen Diaz • Fremont</span>
                </div>
                <div>
                  <span>
                    <span> 09/20/2023 12:30:00</span> <AiOutlineArrowRight />
                    <span>09/20/2023 14:30:00</span>
                  </span>
                </div>
                <div
                  className="row"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "5px",
                  }}
                >
                  <div className="col-md-6">
                    {" "}
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
                    <LuClock9 />
                  </div>
                  <div
                    className="col-md-6"
                    style={{
                      display: "flex",
                      justifyContent: "end",
                      padding: "0px",
                    }}
                  >
                    <BsFillPersonPlusFill />
                    <img
                      src={img}
                      className="img-fluid"
                      alt="..."
                      style={{
                        width: "20px",
                        height: "15px",
                        marginLeft: "5px",
                        marginRight: "5px",
                      }}
                    />
                    <button
                      className="btn"
                      type="button"
                      style={{
                        display: "flex",
                        alignItems: "baseline",
                        padding: "0px",
                      }}
                    >
                      <FaCircle />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            {" "}
            <div className="row" style={{ margin: "auto" }}>
              <div className="row">
                <div className="col-md-10">
                  <h6>20 Sep 2023</h6>
                </div>
                <div className="col-md-2">
                  <LuSettings />
                </div>
              </div>
              <div
                className="row"
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <div className="col-md-8">
                  <div
                    className="progress"
                    role="progressbar"
                    aria-label="Basic example"
                    aria-valuenow={100}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    <div className="progress-bar" style={{ width: "100%" }} />
                  </div>
                </div>
                <div className="col-md-1">
                  <PiNumberSixBold />
                </div>
              </div>
              <div
                className="row"
                style={{
                  backgroundColor: "white",
                  margin: "1px",
                  border: "1px solid lightgray",
                  borderLeft: "2px solid blue",
                  padding: "1px",
                }}
              >
                <div>
                  <strong>Boiler maintenance</strong>
                  <br />
                  <span>Device Installation and Maintenance</span>
                  <br />
                  <span>Field Service</span>
                  <br />
                  <span>Azure Interior, Colleen Diaz • Fremont</span>
                </div>
                <div>
                  <span>
                    <span> 09/20/2023 12:30:00</span> <AiOutlineArrowRight />
                    <span>09/20/2023 14:30:00</span>
                  </span>
                </div>
                <div
                  className="row"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "5px",
                  }}
                >
                  <div className="col-md-6">
                    {" "}
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
                    <LuClock9 />
                  </div>
                  <div
                    className="col-md-6"
                    style={{
                      display: "flex",
                      justifyContent: "end",
                      padding: "0px",
                    }}
                  >
                    <BsFillPersonPlusFill />
                    <img
                      src={img}
                      className="img-fluid"
                      alt="..."
                      style={{
                        width: "20px",
                        height: "15px",
                        marginLeft: "5px",
                        marginRight: "5px",
                      }}
                    />
                    <button
                      className="btn"
                      type="button"
                      style={{
                        display: "flex",
                        alignItems: "baseline",
                        padding: "0px",
                      }}
                    >
                      <FaCircle />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default MyTasks;
