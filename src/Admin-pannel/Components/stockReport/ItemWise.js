import React from "react";
function ItemWise(){
    return(
        <>
        <div className="row">
            <div className="col-md-10">
              <label className="form-label ml-2">Records Table</label>
            </div>
            <div className="col-md-2">
              <div className="dropdown">
                <a
                  className="btn btn-secondary dropdown-toggle"
                  href="#"
                  role="button"
                  id="dropdownMenuLink"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Export
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuLink"
                >
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
            </div>
          </div>
          <div className="row p-3">
            <table className="table table-secondary">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Item Code</th>

                  <th>Item Name</th>
                  <th>Brand</th>
                  <th>Category</th>
                  <th>Unit Price</th>
                  <th>	Tax</th>
                  <th>Purchase Cost</th>
                  <th>Sales Price</th>
                  <th>Current Stock</th>
                  <th>Stock Value(By Sale Price)</th>
                  <th>Stock Value(By Purchase Price)</th>
                </tr>
              </thead>
            </table>
          </div>
        </>
    )
}
export default ItemWise