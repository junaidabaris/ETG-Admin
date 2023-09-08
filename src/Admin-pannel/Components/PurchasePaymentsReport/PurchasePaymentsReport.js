import { useState } from "react";
import Select from "react-select";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiFillDashboard } from "react-icons/ai";
import { MdOutlineArrowDropDown } from "react-icons/md";

function PurchasePaymentsReport() {
  const [value, setValue] = useState(null);
  const options = [
    {
      value: 1,
      label: "John Smith-98765464747",
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
  const options2 = [
    {
      value: 1,
      label: "Cash ",
    },
    {
      value: 2,
      label: "Cheque",
    },
  ];
  const options3 = [
    {
      value: 1,
      label: "All ",
    },
    {
      value: 2,
      label: "Admin",
    },
    {
      value: 3,
      label: "Seller",
    },
    {
      value: 4,
      label: "Purchase",
    },
    {
      value: 5,
      label: "Accounts",
    },
  ];

  return (
    <>
      <section className="header-content">
        <div className="container">
          <div
            className="row"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <div className="col-md-6">
              <h4>Purchase Payments Report </h4>
            </div>{" "}
            <div className="col-md-3">
              {" "}
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="#">
                      <AiFillDashboard />
                      Home
                    </a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Purchase Payments Report
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>
      <section className="main-body">
        <div className="container">
          <div className="card">
            <div className="card-body">
              <div className="row">
                {" "}
                <h6>Please Enter Valid Information</h6>
              </div>
              <hr style={{ opacity: "5" }} />
              <div className="row" style={{ marginLeft: "160px" }}>
                <div className="col-md-3">
                  <label
                    className="form-label"
                    for="supplier-name"
                    style={{ marginLeft: "0px", marginBottom: "5px" }}
                  >
                    Supplier Name
                  </label>
                  <Select options={options} defaultValue={value} />
                </div>{" "}
              </div>

              <div
                className="row"
                style={{ display: "flex", justifyContent: "space-evenly" }}
              >
                <div className="col-md-3">
                  <label
                    className="form-label"
                    for="from-date"
                    style={{ marginLeft: "0px", marginBottom: "5px" }}
                  >
                    From Date
                  </label>
                  <input className="form-control" type="date"></input>
                </div>{" "}
                <div className="col-md-3">
                  <label
                    className="form-label"
                    for="to-date"
                    style={{ marginLeft: "0px", marginBottom: "5px" }}
                  >
                    To Date
                  </label>
                  <input className="form-control" type="date"></input>
                </div>
              </div>
              <div
                className="row"
                style={{ display: "flex", justifyContent: "space-evenly" }}
              >
                <div className="col-md-3">
                  <label
                    className="form-label"
                    for="payment-type"
                    style={{ marginLeft: "0px", marginBottom: "5px" }}
                  >
                    Payment Type
                  </label>
                  <Select options={options2} defaultValue={value} />
                </div>{" "}
                <div className="col-md-3">
                  <label
                    className="form-label"
                    for="user"
                    style={{ marginLeft: "0px", marginBottom: "5px" }}
                  >
                    User
                  </label>
                  <Select options={options3} defaultValue={value} />{" "}
                </div>
              </div>

              <hr style={{ opacity: "5" }} />

              <div className="row">
                <div
                  className="col-md-6"
                  style={{ display: "flex", justifyContent: "end" }}
                >
                  <button className="btn btn-success" type="button">
                    Show
                  </button>
                </div>
                <div className="col-md-6">
                  {" "}
                  <button className="btn btn-warning" type="button">
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="content">
        <div className="card">
          <div className="card-body">
            <div className="row" style={{ paddingBottom: "10px" }}>
              <div className="col-md-6">
                <h6>Records Table</h6>
              </div>
              <div
                className="col-md-6"
                style={{ display: "flex", justifyContent: "end" }}
              >
                <button className="btn btn-primary" type="button">
                  <GiHamburgerMenu />
                  Export
                  <MdOutlineArrowDropDown />
                </button>
              </div>
            </div>
            <div className="row">
              <table className="table">
                <thead className="table-info">
                  <tr>
                    <th>#</th>
                    <th>Purchase Invoive No.</th>
                    <th>Payment Date</th>
                    <th>Supplier ID</th>
                    <th>Supplier Name</th>
                    <th>Payment Type</th>
                    <th>Payment Mode</th>
                    <th>Paid Payment(INR)</th>
                  </tr>
                </thead>
              </table>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default PurchasePaymentsReport;
