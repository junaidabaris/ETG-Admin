import Select from "react-select";
import { useState } from "react";
import { BiPlusMedical } from "react-icons/bi";

function NewContracts() {
  const [value, setValue] = useState(null);
  const options = [
    {
      value: 1,
      label: "Yasir",
    },
    {
      value: 2,
      label: "Salman",
    },
    {
      value: 3,
      label: "Yunus",
    },
  ];

  return (
    <>
      {" "}
      <div className="container">
        <div className="card">
          <div className="card-body">
            <div className="row">
              <h5 className="card-title">New Contract</h5>
            </div>
            <div className="container">
              <div className="row">
                <span className="text-danger">General information</span>
              </div>
              <hr
                class="border border-danger border-1 opacity-100"
                style={{ marginBottom: "0px", marginTop: "5px" }}
              ></hr>
              <div className="row">
                <div className="col-md-6">
                  <div className="row">
                    <div className="col-md-12">
                      <label
                        className="form-label"
                        for="contract-code"
                        style={{ marginBottom: "5px", marginLeft: "0px" }}
                      >
                        <span className="text-danger">*</span>Contract code
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        placeholder="#CONTRATO00094-Sep-2023"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <label
                        className="form-label"
                        for="contract-type"
                        style={{ marginBottom: "5px", marginLeft: "0px" }}
                      >
                        <span className="text-danger">*</span>Contract type
                      </label>
                      <Select
                        options={options}
                        placeholder="None selected"
                        value={value}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <label
                        className="form-label"
                        for="effective-date"
                        style={{ marginBottom: "5px", marginLeft: "0px" }}
                      >
                        <span className="text-danger">*</span>Effective date
                      </label>
                      <input className="form-control" type="date" />
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="row">
                    <div className="col-md-12">
                      <label
                        className="form-label"
                        for="staff-name"
                        style={{ marginBottom: "5px", marginLeft: "0px" }}
                      >
                        <span className="text-danger">*</span>Staff name
                      </label>
                      <Select
                        options={options}
                        placeholder="None selected"
                        value={value}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <label
                        className="form-label"
                        for="status"
                        style={{ marginBottom: "5px", marginLeft: "0px" }}
                      >
                        <span className="text-danger">*</span>Status
                      </label>
                      <Select
                        options={options}
                        placeholder="Draft"
                        value={value}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <label
                        className="form-label"
                        for="expiration-date"
                        style={{ marginBottom: "5px", marginLeft: "0px" }}
                      >
                        <span className="text-danger">*</span>Expiration date
                      </label>
                      <input className="form-control" type="date" />
                    </div>
                  </div>{" "}
                  <div className="row">
                    <div className="col-md-12">
                      <label
                        className="form-label"
                        for="salary"
                        style={{
                          marginBottom: "5px",
                          marginLeft: "0px",
                          width: "265",
                        }}
                      >
                        Salary and allowance by hourly rate or month
                      </label>
                      <Select
                        options={options}
                        placeholder="Fixed amount"
                        value={value}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <span className="text-danger">Salary and allowances</span>
            </div>
            <hr
              class="border border-danger border-1 opacity-100"
              style={{ marginBottom: "20px", marginTop: "5px" }}
            ></hr>
            <div className="row">
              <table className="table ">
                <thead className="table-secondary">
                  <tr>
                    <td></td>
                    <td>Salary/Allowance</td>
                    <td>Amount</td>
                    <td>Effective date</td>
                    <td>Note</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row" className="table-secondary">
                      1
                    </th>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>{" "}
                  <tr>
                    <th scope="row" className="table-secondary">
                      2
                    </th>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>{" "}
                  <tr>
                    <th scope="row" className="table-secondary">
                      3
                    </th>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>{" "}
                  <tr>
                    <th scope="row" className="table-secondary">
                      4
                    </th>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>{" "}
                  <tr>
                    <th scope="row" className="table-secondary">
                      5
                    </th>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>{" "}
                  <tr>
                    <th scope="row" className="table-secondary">
                      6
                    </th>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>{" "}
                  <tr>
                    <th scope="row" className="table-secondary">
                      7
                    </th>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>{" "}
                  <tr>
                    <th scope="row" className="table-secondary">
                      8
                    </th>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>{" "}
                  <tr>
                    <th scope="row" className="table-secondary">
                      9
                    </th>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>{" "}
                  <tr>
                    <th scope="row" className="table-secondary">
                      10
                    </th>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="row">
              <span className="text-danger">Signing information</span>
            </div>
            <hr
              class="border border-danger border-1 opacity-100"
              style={{ marginBottom: "20px", marginTop: "5px" }}
            ></hr>
            <div className="row">
              <div className="col-md-6">
                <label
                  className="form-label"
                  for="signature-date"
                  style={{ marginBottom: "5px", marginLeft: "0px" }}
                >
                  Signature date
                </label>
                <input className="form-control" type="date" />
              </div>
              <div className="col-md-6">
                <label
                  className="form-label"
                  for="sign-by"
                  style={{ marginBottom: "5px", marginLeft: "0px" }}
                >
                  Sign by
                </label>
                <Select
                  options={options}
                  placeholder="None selected"
                  value={value}
                />
              </div>
              <div className="col-md-6" style={{ padding: "0px" }}>
                <label
                  className="form-label"
                  for="ChooseCSVfile"
                  style={{
                    marginBottom: "5px",
                    marginLeft: "0px",
                  }}
                >
                  Attachment
                </label>
                <input className="form-control" type="file"></input>
              </div>
              <div className="col-md-1" style={{ padding: "0px" }}>
                {" "}
                <button
                  className="btn btn-primary "
                  type="button"
                  style={{ marginTop: "41" }}
                >
                  <BiPlusMedical />
                </button>
              </div>
            </div>
            <hr style={{ opacity: "30" }} />
            <div className="row">
              <div
                className="col-md-12"
                style={{ display: "flex", justifyContent: "end" }}
              >
                <button
                  className="btn btn-light btn-sm"
                  type="button"
                  style={{ marginRight: "5px" }}
                >
                  CLOSE
                </button>
                <button className="btn btn-primary btn-sm" type="button">
                  SAVE
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default NewContracts