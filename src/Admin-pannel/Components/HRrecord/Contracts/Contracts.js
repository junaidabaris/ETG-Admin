import { RiArrowLeftDoubleFill } from "react-icons/ri";
import { FaFilter } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { FiRefreshCcw } from "react-icons/fi";
import { BiSearch } from "react-icons/bi";

function Contracts() {
  const navigate = useNavigate();
  const changeRoute = () => {
    navigate("/admin/new-contract");
  };
  return (
    <>
      <div className="container">
        <div className="card">
          <div className="card-body">
            <div className="row" style={{ marginBottom: "15px" }}>
              <div className="col-md-6">
                <button className="btn btn-primary" onClick={changeRoute}>
                  NEW CONTRACTS
                </button>
              </div>
              <div
                className="col-md-6"
                style={{ display: "flex", justifyContent: "end" }}
              >
                <div class="btn-group" role="group" aria-label="Basic example">
                  <button
                    type="button"
                    class="btn btn-light"
                    style={{ marginRight: "1.5px", borderRadius: "5px" }}
                  >
                    <RiArrowLeftDoubleFill />
                  </button>

                  <button
                    type="button"
                    class="btn btn-light"
                    style={{ borderRadius: "5px" }}
                  >
                    <FaFilter />
                  </button>
                </div>
              </div>
            </div>
            <div className="row" style={{ marginBottom: "15px" }}>
              <div className="col-md-3">
                <div class="form-floating">
                  <select
                    class="form-select"
                    id="floatingSelect"
                    aria-label="Floating label select example"
                  >
                    <option selected></option>
                    <option value="1">none Selected </option>
                    <option value="2">Ecommerce</option>
                    <option value="3">Purchase</option>
                  </select>
                  <label for="floatingSelect">Filter by department</label>
                </div>
              </div>
              <div className="col-md-3">
                <div class="form-floating">
                  <select
                    class="form-select"
                    id="floatingSelect"
                    aria-label="Floating label select example"
                  >
                    <option selected></option>
                    <option value="1">سوداني احمد</option>
                    <option value="2">Yasir</option>
                    <option value="3">junaiid</option>
                  </select>
                  <label for="floatingSelect">Staff</label>
                </div>
              </div>
              <div className="col-md-3">
                <div className="form-floating">
                  <input type="date" className="form-control" />
                  <label htmlFor="date">Effective date</label>
                </div>
              </div>
              <div className="col-md-3">
                <div className="form-floating">
                  {" "}
                  <input type="date" className="form-control" />
                  <label htmlFor="expiration-date">Expiration date</label>
                </div>
              </div>
            </div>
            <div className="row" style={{ marginBottom: "15px" }}>
              <div className="col-md-2" style={{ paddingRight: "0px" }}>
                <div className="dropdown">
                  <select className="form-select form-select-sm">
                    <option value={0}>10</option>
                    <option value={0} selected>
                      25
                    </option>
                    <option value={0}>50</option>
                    <option value={0}>100</option>
                    <option value={0}>All</option>
                  </select>
                </div>
              </div>

              <div className="col-md-6" style={{ paddingLeft: "2px" }}>
                <div
                  className="btn-group btn-group-sm"
                  role="group"
                  aria-label="Basic outlined example"
                  style={{ height: "31px" }}
                >
                  <button type="button" className="btn btn-outline-primary">
                    Export
                  </button>

                  <button type="button" className="btn btn-outline-primary">
                    <FiRefreshCcw />
                  </button>
                </div>
              </div>

              <div className="Incsearch col-md-4">
                <div>
                  <div
                    className="input-group flex-nowrap incwidth"
                    style={{ height: "31px" }}
                  >
                    <span className="input-group-text" id="addon-wrapping">
                      <BiSearch />
                    </span>
                    <input
                      type="text"
                      placeholder=" Search..."
                      aria-label="Search"
                      aria-describedby="addon-wrapping"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row">
                <table className="table table-sm">
                  <thead className="table-info">
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
                      <th>Contract code </th>
                      <th>Contract type</th>
                      <th>Staff</th>
                      <th>Department </th>
                      <th>Effective date</th>
                      <th>Expiiration date</th>
                      <th>Status</th>
                      <th>Signature Date</th>
                    </tr>
                  </thead>
                  <tbody className="table-light">
                    <tr>
                      <td>
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
                      </td>
                      <td>
                        <a href="#" class="text-decoration-none">
                          #CONTRATO00093-Sep-2023
                        </a>
                        <div className="row">
                          <div
                            className="col-md-3"
                            style={{
                              borderRight: "1px solid lightgrey",
                              paddingRight: "0px",
                            }}
                          >
                            View
                          </div>
                          <div
                            className="col-md-2"
                            style={{
                              borderRight: "1px solid lightgrey",
                              paddingRight: "0px",
                              paddingLeft: "2px",
                            }}
                          >
                            Edit
                          </div>

                          <div
                            className="col-md-4  text-danger"
                            style={{
                              paddingLeft: "2px",
                            }}
                          >
                            Delete
                          </div>
                        </div>
                      </td>
                      <td></td>
                      <td>سوداني احمد</td>
                      <td>
                        <button className="btn btn-light btn-sm" type="button">
                          {" "}
                          SALES
                        </button>
                        <button className="btn btn-light btn-sm" type="button">
                          Management
                        </button>
                        <button className="btn btn-light btn-sm" type="button">
                          Professional Services
                        </button>
                        <button className="btn btn-light btn-sm" type="button">
                          {" "}
                          okan
                        </button>
                      </td>
                      <td> 2023-09-11</td>
                      <td> 2024-11-01</td>
                      <td>
                        <button
                          className="btn btn-success btn-sm"
                          type="button"
                        >
                          valid
                        </button>{" "}
                      </td>
                      <td>2023-09-15</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="row" style={{ marginBottom: "15px" }}>
                <div className="col-md-12">
                  <span>Showing 1 to 1 of 1 entries</span>
                </div>
              </div>
              <div className="row">
                <div
                  className="col-md-12"
                  style={{ display: "flex", justifyContent: "end" }}
                >
                  <button
                    type="button"
                    className="btn btn-outline-secondary  btn-sm"
                  >
                    Previous
                  </button>
                  <button type="button" className="btn btn-primary  btn-sm">
                    1
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-secondary  btn-sm"
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Contracts;
