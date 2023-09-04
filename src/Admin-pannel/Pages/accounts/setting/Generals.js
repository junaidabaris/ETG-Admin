import React from "react";
import { Link } from "react-router-dom";

const Generals = () => {
    return (
        <>
            <div className="container bg-white pd-4" style={{ padding: "20px" }}>
                <div className="row">
                    <div className="col-md-12">
                        <button className="btn btn-sm btn-primary" >Reset Data</button><span style={{ margin: "0 10px ", color: "red" }}>It will delete all data related to the accounting module</span>
                        <hr></hr>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <h5>Accounting</h5>
                        <div class="mb-3">
                            <label htmlFor="exampleInputEmail1" class="form-label">First month of financial year </label>
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Open this select menu</option>
                                <option selected value='1'>Janaury</option>
                                <option value='2'>February</option>
                                <option value='3'>March</option>
                                <option value='4'>April</option>
                                <option value='5'>May</option>
                                <option value='6'>June</option>
                                <option value='7'>July</option>
                                <option value='8'>August</option>
                                <option value='9'>September</option>
                                <option value='10'>October</option>
                                <option value='11'>November</option>
                                <option value='12'>December</option>
                            </select>
                        </div>
                        <div class="mb-3">
                            <label htmlFor="exampleInputEmail1" class="form-label">First month of tax year</label>
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Open this select menu</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                        <div class="mb-3">
                            <label htmlFor="exampleInputEmail1" class="form-label">Accounting method </label>
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Open this select menu</option>
                                <option value="1">Cash</option>
                            </select>
                        </div>
                        <div class="mb-3">
                            <p>When you use the accrual method in reports:</p>
                        </div>
                        <div class="mb-3">
                            <p>Your report counts income and expenses as if they happened when you sent the invoice or got the bill</p>
                        </div>
                        <div class="mb-3">
                            <p>It includes income and expenses even if the money hasn’t changed hands yet</p>
                        </div>
                        <div class="form-check form-switch">
                            <label class="form-check-label" for="flexSwitchCheckChecked">Checked switch checkbox input</label>
                            <input style={{marginLeft:"12px"}}  class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked />
                        </div>
                    </div>
                    <div className="col-6">
                        <h5>Chart of Accounts</h5>
                        <div class="form-check form-switch">
                            <label class="form-check-label" for="flexSwitchCheckChecked">Enable account numbers </label>
                            <input style={{marginLeft:"12px"}} class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Generals;