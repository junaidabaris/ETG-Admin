import { useState } from "react";
import Select from "react-select";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiFillDashboard } from "react-icons/ai";
import { MdOutlineArrowDropDown } from "react-icons/md";

function SalesSummaryReport() {
  const [value, setValue] = useState(null);
  const options = [
    {
      value: 1,
      label: "All Warehouse",
    },
    {
      value: 2,
      label: "System Warehouse",
    },
    {
      value: 3,
      label: "Warehouse 2",
    },
  ];
  const options2 = [
    {
      value: 1,
      label: "All ",
    },
    {
      value: 2,
      label: "Items",
    },
    {
      value: 3,
      label: "Services",
    },
  ];
  const options3 = [
    {
      value: 1,
      label: "All ",
    },
    {
      value: 2,
      label: "Electric",
    },
    {
      value: 3,
      label: "Services",
    },
    {
      value: 4,
      label: "Accesories",
    },
    {
      value: 5,
      label: "Mobiles",
    },
    {
      value: 6,
      label: "Watches",
    },
  ];
  const options4 = [
    {
      value: 1,
      label: "iPhoneX-IT020001 ",
    },
    {
      value: 2,
      label: "iPhoneX-64GB-IT020002",
    },
    {
      value: 3,
      label: "iPhoneX-128GB-IT020003",
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
              <h4>Sales Summary Report </h4>
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
                    Sales Summary Report
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
              <div
                className="row"
                style={{ display: "flex", justifyContent: "space-evenly" }}
              >
                <div className="col-md-3">
                  <label
                    className="form-label"
                    for="warehouse"
                    style={{ marginLeft: "0px", marginBottom: "5px" }}
                  >
                    Warehouse<span className="text-danger">*</span>
                  </label>
                  <Select options={options} defaultValue={value} />
                </div>{" "}
                <div className="col-md-3">
                  <label
                    className="form-label"
                    for="item-type"
                    style={{ marginLeft: "0px", marginBottom: "5px" }}
                  >
                    Item Type
                  </label>
                  <Select options={options2} defaultValue={value} />
                </div>
              </div>
              <div
                className="row"
                style={{ display: "flex", justifyContent: "space-evenly" }}
              >
                <div className="col-md-3">
                  <label
                    className="form-label"
                    for="category"
                    style={{ marginLeft: "0px", marginBottom: "5px" }}
                  >
                    Category
                  </label>
                  <Select options={options3} defaultValue={value} />
                </div>{" "}
                <div className="col-md-3">
                  <label
                    className="form-label"
                    for="item-name"
                    style={{ marginLeft: "0px", marginBottom: "5px" }}
                  >
                    Item Name
                  </label>
                  <Select
                    options={options4}
                    defaultValue={value}
                    placeholder="Search Name/Code"
                  />
                </div>
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
                    <th>Item Name</th>
                    <th>Category</th>
                    <th>Quantity</th>
                  </tr>
                </thead>
              </table>
            </div>
          </div>
        </div>
      </section>{" "}
    </>
  );
}
export default SalesSummaryReport;
