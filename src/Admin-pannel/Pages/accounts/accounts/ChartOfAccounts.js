import React from "react";
function ChartOfAccounts(){
    return(
        <>
        <div className="container">
           <div className="row">
            <div className="col-md-6">
            <h5>Chart of Accounts</h5>
            </div>
            <div className="col-md-6 text-end">
                <div className="">
                    <button className="btn btn-primary mr-2">
                        + Accounts
                    </button>
                    <button className="btn btn-primary mr-2">
                        + Sub Group
                    </button>
                    <button className="btn btn-primary">
                        + Group
                    </button>
                </div>
            </div>
           </div>
             
                <div className="row mt-3">
                   <div className="card">
                   <div className="">
                        <label className="form-label">Assests</label>
                    </div>
                   </div>
                </div>
                <div className="row ml-2">
                   <div className="card">
                   <div className="">
                        <label className="form-label">Current Assests</label>
                    </div>
                   </div>
                </div>
                <div className="row ml-3">
                   <div className="card">
                   <div className="">
                        <label className="form-label">Stock</label>
                    </div>
                   </div>
                </div>
                <div className="row ml-3">
                   <div className="card">
                   <div className="">
                        <label className="form-label">Customer</label>
                    </div>
                   </div>
                </div>
                <div className="row ml-3">
                   <div className="card">
                   <div className="">
                        <label className="form-label">Cash</label>
                    </div>
                   </div>
                </div>
                <div className="row ml-3">
                   <div className="card">
                   <div className="">
                        <label className="form-label">Bank</label>
                    </div>
                   </div>
                </div>
                <div className="row ml-3">
                   <div className="card">
                   <div className="">
                        <label className="form-label">Purchase VAT</label>
                    </div>
                   </div>
                </div>
                <div className="row ml-2">
                   <div className="card">
                   <div className="">
                        <label className="form-label">Fixed Assests</label>
                    </div>
                   </div>
                </div>
                <div className="row">
                   <div className="card">
                   <div className="">
                        <label className="form-label">Liabilities</label>
                    </div>
                   </div>
                </div>
                <div className="row">
                   <div className="card">
                   <div className="">
                        <label className="form-label">Expenses</label>
                    </div>
                   </div>
                </div>
                <div className="row">
                   <div className="card">
                   <div className="">
                        <label className="form-label">Income</label>
                    </div>
                   </div>
                </div>
            
        </div>
        </>
    )
}
export default ChartOfAccounts