import { FiRefreshCcw } from "react-icons/fi";
import { BiSearch } from "react-icons/bi";
import img from "../../../../assets/img/empty table.png";
import { LuArrowDownWideNarrow } from "react-icons/lu";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useRef } from "react";
import Select from "react-select";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Dependant() {
  const editor = useRef(null);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [value, setValue] = useState(null);
  const Ttype = [
    {
      value: 1,
      label: "test Training",
    },
    {
      value: 2,
      label: "Main training",
    },
    {
      value: 3,
      label: "Training",
    },
  ];
  const depart = [
    {
      value: 1,
      label: "Sales Management",
    },
    {
      value: 2,
      label: "Professional Services",
    },
    {
      value: 3,
      label: "Sale",
    },
  ];

  const navigate = useNavigate();
  const changeRoute = () => {
    navigate("/admin/import-excel");
  };

  return (
    <>
      <div className="container">
        <div className="card">
          <div className="card-body">
            <div className="row" style={{ marginBottom: "15px" }}>
              <div className="col-md-6">
                <button className="btn btn-primary" onClick={handleShow}>
                  NEW DEPENTDANT
                </button>
                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>New dependant</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <div className="row" style={{ marginBottom: "15px" }}>
                      <div className="col-md-12">
                        {" "}
                        <label
                          classNmae="form-label"
                          for="staff-name"
                          style={{ paddingLeft: "0px", paddingBottom: "5px" }}
                        >
                          <span className="text-danger">*</span>Staff name
                        </label>
                        <Select
                          options={Ttype}
                          placeholder="None selected"
                          value={value}
                        />
                      </div>
                    </div>
                    <div className="row" style={{ marginBottom: "15px" }}>
                      <div className="col-md-6">
                        <label
                          classNmae="form-label"
                          for="dependant-name"
                          style={{ paddingLeft: "0px", paddingBottom: "5px" }}
                        >
                          <span className="text-danger">*</span>Dependant name
                        </label>
                        <input className="form-control" type="number"></input>
                      </div>
                      <div className="col-md-6">
                        {" "}
                        <label
                          classNmae="form-label"
                          for="relationship"
                          style={{ paddingLeft: "0px", paddingBottom: "5px" }}
                        >
                          <span className="text-danger">*</span>Relationship
                        </label>
                        <input className="form-control" type="number"></input>
                      </div>
                    </div>

                    <div className="row" style={{ marginBottom: "15px" }}>
                      <div className="col-md-6">
                        <label
                          classNmae="form-label"
                          for="date-of-birth"
                          style={{ paddingLeft: "0px", paddingBottom: "5px" }}
                        >
                          <span className="text-danger">*</span>Date of birth
                        </label>
                        <input className="form-control" type="date"></input>
                      </div>
                      <div className="col-md-6">
                        <label
                          classNmae="form-label"
                          for="citizen-identification"
                          style={{ paddingLeft: "0px", paddingBottom: "5px" }}
                        >
                          Citizen Identification
                        </label>
                        <input className="form-control" type="number"></input>
                      </div>
                    </div>
                    <div className="row" style={{ marginBottom: "15px" }}>
                      <div className="col-md-6">
                        <label
                          classNmae="form-label"
                          for="effective-date"
                          style={{ paddingLeft: "0px", paddingBottom: "5px" }}
                        >
                          <span className="text-danger">*</span>Effective date
                        </label>
                        <input className="form-control" type="date"></input>
                      </div>
                      <div className="col-md-6">
                        <label
                          classNmae="form-label"
                          for="expiration-date"
                          style={{ paddingLeft: "0px", paddingBottom: "5px" }}
                        >
                          <span className="text-danger">*</span>Expiration date
                        </label>
                        <input className="form-control" type="date"></input>
                      </div>
                    </div>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="light" size="sm" onClick={handleClose}>
                      CLOSE
                    </Button>
                    <Button variant="primary" size="sm" onClick={handleClose}>
                      SAVE
                    </Button>
                  </Modal.Footer>
                </Modal>
                <button className="btn btn-LIGHT" onClick={changeRoute}>
                  IMPORT EXCEL
                </button>
              </div>
              <div
                className="col-md-6"
                style={{ display: "flex", justifyContent: "end" }}
              ></div>
            </div>
            <div
              className="row"
              style={{
                marginBottom: "15px",
                display: "flex",
                justifyContent: "end",
              }}
            >
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
                <div class="form-floating">
                  <select
                    class="form-select"
                    id="floatingSelect"
                    aria-label="status"
                  >
                    <option selected></option>
                    <option value="1">Approved</option>
                    <option value="2">Rejected</option>
                    <option value="3">Pending</option>
                  </select>
                  <label for="floatingSelect">Status</label>
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
                    Bulk Actions
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
                      <th
                        style={{
                          display: "flex",
                          justifyContent: "space-around",
                        }}
                      >
                        {/* <div className="row"></div> */}
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
                        <div>
                          {" "}
                          <LuArrowDownWideNarrow />
                        </div>
                      </th>
                      <th>Dependant name</th>
                      <th>Staff name</th>
                      <th>Date of birth</th>
                      <th>Citizen identification type</th>

                      <th>Effective date</th>
                      <th>Reason</th>
                      <th>Status</th>
                      <th>Options</th>
                      <th>Respond</th>
                    </tr>
                  </thead>
                  <tbody></tbody>
                  <caption>No entries found</caption>
                </table>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  {" "}
                  <img src={img} className="img-fluid" alt="..." />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Dependant;
