import { useState } from "react";
import Select from "react-select";
import { FiRefreshCcw } from "react-icons/fi";
import { BiSearch } from "react-icons/bi";
import img from "../../../../assets/img/empty table.png";
import { LuArrowDownWideNarrow } from "react-icons/lu";

function Trainingresults() {
  const [value, setValue] = useState(null);
  const options = [
    {
      value: 1,
      label: "Walk-in Customer",
    },
    {
      value: 2,
      label: "Micheal-98765464747",
    },
    {
      value: 3,
      label: "Chris Moris-845457454545",
    },
  ];
  return (
    <>
      <div className="card">
        <div className="card-body">
          <div className="container">
            <div className="row" style={{ marginBottom: "15px" }}>
              <div className="col-md-4">
                {" "}
                <label
                  classNmae="form-label"
                  for="Staff"
                  style={{ paddingLeft: "0px", paddingBottom: "5px" }}
                >
                  Staff
                </label>
                <Select
                  options={options}
                  placeholder="None selected"
                  value={value}
                />
              </div>{" "}
              <div className="col-md-4">
                {" "}
                <label
                  classNmae="form-label"
                  for="training-library"
                  style={{ paddingLeft: "0px", paddingBottom: "5px" }}
                >
                  Training library
                </label>
                <Select
                  options={options}
                  placeholder="None selected"
                  value={value}
                />
              </div>{" "}
              <div className="col-md-4">
                {" "}
                <label
                  classNmae="form-label"
                  for="Training-program"
                  style={{ paddingLeft: "0px", paddingBottom: "5px" }}
                >
                  Training program
                </label>
                <Select
                  options={options}
                  placeholder="None selected"
                  value={value}
                />
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
                      <th>Staff name</th>
                      <th>Training library</th>
                      <th>Training type</th>

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
export default Trainingresults