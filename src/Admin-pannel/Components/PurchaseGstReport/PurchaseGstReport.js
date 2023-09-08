import { useState } from "react";
import Select from "react-select";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiFillDashboard } from "react-icons/ai";
import { MdOutlineArrowDropDown } from "react-icons/md";

function PurchaseGstReport() {
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
      value: 4,
      label: "Moin Ali-98757444888",
    },
  ];

  return (
    <>
      {" "}
      <section className="header-content">
        <div className="container">
          <div
            className="row"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <div className="col-md-6">
              <h4>Purchase GST Report</h4>
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
                    Purchase GST Report
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
              <div className="row" style={{ marginLeft: "162px" }}>
                <div className="col-md-3">
                  <label
                    className="form-label"
                    for="supplier-name"
                    style={{ marginLeft: "0px", marginBottom: "5px" }}
                  >
                    Supplier Name
                  </label>
                  <Select
                    options={options}
                    defaultValue={value}
                    placeholder=" Nothing Selected"
                  />
                </div>
              </div>
              <hr style={{ opacity: "5" }} />

              <div
                className="row"
                style={{ display: "flex", justifyContent: "center" }}
              >
                <div className="col-md-3">
                  <button className="btn btn-success" type="button">
                    Show
                  </button>
                </div>
                <div className="col-md-3">
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
                    <th>Invoice No.</th>
                    <th>Supplier Name</th>
                    <th>GST Number</th>
                    <th>Purchase Date</th>
                    <th>Item Name</th>
                    <th>Purchase Qty</th>
                    <th>HSN</th>
                    <th>Amount</th>
                    <th>Discount</th>
                    <th>Taxable</th>
                    <th>GST %</th>
                    <th>CGST %</th>
                    <th>CGST Amt</th>
                    <th>SGST %</th>
                    <th>SGST Amt</th>
                    <th>IGST %</th>
                    <th>IGST Amt</th>
                    <th>Round Off</th>
                    <th>Total</th>
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
export default PurchaseGstReport;
