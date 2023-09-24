import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Select from "react-select";
import { useState } from "react";
import JoditEditor from "jodit-react";
import { useRef } from "react";
import { FiRefreshCcw } from "react-icons/fi";
import { BiSearch } from "react-icons/bi";
import img from "../../../../assets/img/empty table.png";
import { LuArrowDownWideNarrow } from "react-icons/lu";

function Trainingprograms() {
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

  const editor = useRef(null);
  const [content, setContent] = useState("");

  return (
    <>
      <div className="card">
        <div className="card-body">
          <div className="container">
            <div className="row" style={{ marginBottom: "15px" }}>
              <div className="col-md-2">
                <button
                  className="btn btn-primary btn-sm"
                  type="button"
                  onClick={handleShow}
                >
                  ADD
                </button>
                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>New training program</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <div className="row" style={{ marginBottom: "15px" }}>
                      <div className="col-md-6">
                        {" "}
                        <label
                          classNmae="form-label"
                          for="Training-program-name"
                          style={{ paddingLeft: "0px", paddingBottom: "5px" }}
                        >
                          <span className="text-danger">*</span> Training
                          program name
                        </label>
                        <input className="form-control" type="text"></input>
                      </div>
                      <div className="col-md-6">
                        {" "}
                        <label
                          classNmae="form-label"
                          for="training-type"
                          style={{ paddingLeft: "0px", paddingBottom: "5px" }}
                        >
                          <span className="text-danger">*</span>Training type
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
                        {" "}
                        <label
                          classNmae="form-label"
                          for="training-program-item"
                          style={{ paddingLeft: "0px", paddingBottom: "5px" }}
                        >
                          <span className="text-danger">*</span>Training program
                          item
                        </label>
                        <Select
                          options={Ttype}
                          placeholder="None selected"
                          value={value}
                        />
                      </div>
                      <div className="col-md-6">
                        {" "}
                        <label
                          classNmae="form-label"
                          for="minimum-point"
                          style={{ paddingLeft: "0px", paddingBottom: "5px" }}
                        >
                          <span className="text-danger">*</span>Minimum point
                        </label>
                        <input className="form-control" type="number"></input>
                      </div>
                    </div>
                    <div className="row" style={{ marginBottom: "15px" }}>
                      <div className="col-md-3">
                        {" "}
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                          />
                          <label
                            class="form-check-label"
                            for="flexCheckDefault"
                          >
                            Additional training program for staff
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="row" style={{ marginBottom: "15px" }}>
                      <div className="col-md-6">
                        <label
                          classNmae="form-label"
                          for="department"
                          style={{ paddingLeft: "0px", paddingBottom: "5px" }}
                        >
                          <span className="text-danger">*</span>Department
                        </label>
                        <Select
                          options={depart}
                          placeholder="None selected"
                          value={value}
                        />
                      </div>{" "}
                      <div className="col-md-6">
                        <label
                          classNmae="form-label"
                          for="job-position "
                          style={{ paddingLeft: "0px", paddingBottom: "5px" }}
                        >
                          <span className="text-danger">*</span>Job position to
                          apply
                        </label>
                        <Select
                          options={depart}
                          placeholder="None selected"
                          value={value}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <label
                          className="Marginlb1 form-label"
                          for="description"
                        >
                          Description
                        </label>
                      </div>
                    </div>
                    <div className="editor">
                      <JoditEditor
                        ref={editor}
                        value={content}
                        onChange={(newContent) => setContent(newContent)}
                      />
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
                      <th>Name</th>
                      <th>Training Type</th>
                      <th>Description</th>
                      <th>Minimum point</th>
                      <th>Created date</th>
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
export default Trainingprograms