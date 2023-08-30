import React from "react";
function AddCompany(){
    return(
        <>
       <div className="container">
        <div className="row ml-3">
            <h5>Create Company</h5>
        </div>
        <div className="card">
            <div className="card-body">
                <div className="row">
                    <div className="col-md-8">
                    <div className="row">
                <div className="col-md-6 mt-3">
                    <label className="form-label">Name</label>
                  </div>
                  <div className="col-md-6 mt-3">
                  <input className="form-control" type="text"/>
                  </div>
                <div className="col-md-6 mt-3">
                    <label className="form-label">XYZ</label>
                  </div>
                  <div className="col-md-6 mt-3">
                  <input className="form-control" type="text"/>
                  </div>
                  
                <div className="col-md-6 mt-3">
                    <label className="form-label">Under</label>
                  </div>
                  <div className="col-md-6 mt-3">
                  <input className="form-control" type="text"/>
                  </div>

                
                </div>
                <hr className="border-secondary mt-3" />
                
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-8">
                        <div className="row">
                        <div className="col-md-6 mt-3">
                    <label className="form-label">Group Behave like a sub-ledger</label>
                  </div>
                  <div className="col-md-6 mt-3">
                  <input className="form-control" type="text"/>
                  </div>
                        <div className="col-md-6 mt-3">
                    <label className="form-label">Net Debit/Credit Balance for Reporting</label>
                  </div>
                  <div className="col-md-6 mt-3">
                  <input className="form-control" type="text"/>
                  </div>
                        <div className="col-md-6 mt-3">
                    <label className="form-label">Used For Calculation</label>
                  </div>
                  <div className="col-md-6 mt-3">
                  <input className="form-control" type="text"/>
                  </div>
                        <div className="col-md-6 mt-3">
                    <label className="form-label">Method to Allocate When Used in Purchase invoice</label>
                  </div>
                  <div className="col-md-6 mt-3">
                  <input className="form-control" type="text"/>
                  </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-8"></div>
                    <div className="col-md-4 text-right">
                    <button className="btn btn-primary">Save</button>
                    </div>
                    
                </div>
            </div>
        </div>
       </div>
        </>
    )
}
export default AddCompany