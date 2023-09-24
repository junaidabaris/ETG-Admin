function ImportExcel() {
  return (
    <>
      <div className="container">
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-md-3">
                <button className="btn btn-primary" type="button">
                  DOWNLOAD SAMPLE FILE{" "}
                </button>
              </div>
              <div className="col-md-2">
                <button className="btn btn-light" type="button">
                  BACK
                </button>
              </div>
            </div>
            <hr style={{ opacity: "20" }} />
            <div className="row" style={{ marginBottom: "15px" }}>
              <ul>
                <li>
                  1. The Excel data file (.xlsx) must have column header and
                  format like the table below. Some columns refer to the values
                  below.
                </li>
                <li>
                  {" "}
                  2. HR code: corresponding to the column of employee is hr code
                </li>
                <li>
                  {" "}
                  3. Date of birth, Effective date, Expiration date: enter with
                  the format "yyyy-mm-dd": eg: 2020-12-30{" "}
                </li>
                <li>
                  {" "}
                  4. Status: Enter 2 corresponds to "Rejected", other value 2
                  corresponds to "Approved"
                </li>
              </ul>
            </div>

            <div className="row" style={{ marginBottom: "15px" }}>
              <table className="table table-light table-sm">
                <thead>
                  <tr>
                    <th>
                      <span className="text-danger">*</span>Staff code
                    </th>
                    <th>
                      <span className="text-danger">*</span>Dependant name
                    </th>
                    <th>Relationship</th>
                    <th>Date of birth</th>
                    <th>Citizen identification type</th>

                    <th>Reason</th>
                    <th>Effective date</th>
                    <th>Expiration date</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <th>-</th>
                  <th>-</th>
                  <th>-</th>
                  <th>-</th>
                  <th>-</th>
                  <th>-</th>
                  <th>-</th>
                  <th>-</th>
                  <th>-</th>
                </tbody>
              </table>
            </div>

            <hr style={{ opacity: "20" }} />
            <div className="row">
              <div className="col-md-6" style={{ marginBottom: "15px" }}>
                <label
                  className="form-label"
                  for="ChooseCSVfile"
                  style={{ marginBottom: "5px", marginLeft: "0px" }}
                >
                  <span className="text-danger">*</span>Choose excel file
                </label>
                <input className="form-control" type="file"></input>
              </div>
            </div>
            <div className="row">
              <div className="col-md-3">
                <button className="btn btn-primary" type="button">
                  IMPORT
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default ImportExcel;
