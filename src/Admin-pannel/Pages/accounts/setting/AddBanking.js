import { useState } from "react"

function AddBanking() {
    const [state,setState] = useState(false)
    return <div className="container card" style={{ width: "1200px", margin: "10px auto" }}>
        <div className="row">
            <h4> Banking rule</h4>
            <hr />
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">*Name</label>
                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>
            <div className="col-6">
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Apply this to transactions that are</label>
                    <select class="form-select" aria-label="Default select example">
                        <option selected>Open this select menu</option>
                        <option value="1">Money Out</option>
                        <option value="2">Money In</option>
                    </select>
                </div>
            </div>
            <div className="col-6">
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">and include the following</label>
                    <select class="form-select" aria-label="Default select example">
                        <option selected>Open this select menu</option>
                        <option value="1">Any </option>
                        <option value="2">All</option>
                    </select>
                </div>
            </div>



        </div>
        <div className="row" style={{ margin: "20px 0" }}>
            <div className="col-4">
                <select class="form-select" aria-label="Default select example">
                    <option selected>Open this select menu</option>
                    <option value="1">Any </option>
                    <option value="2">All</option>
                </select>
            </div>
            <div className="col-3">
                <select class="form-select" aria-label="Default select example">
                    <option selected>Open this select menu</option>
                    <option value="1">Any </option>
                    <option value="2">All</option>
                </select>
            </div>
            <div className="col-3" style={{ display: "flex", margin: "0 10px" }}>
                <input className="form-control" />
                <button onClick={()=>{setState(true)}} style={{ margin: "0 10px" }} type="button" class="btn btn-success">Add</button>
            </div>
        </div>

        {state && <div className="row" style={{ margin: "20px 0" }}>
            <div className="col-4">
                <select class="form-select" aria-label="Default select example">
                    <option selected>Open this select menu</option>
                    <option value="1">Any </option>
                    <option value="2">All</option>
                </select>
            </div>
            <div className="col-3">
                <select class="form-select" aria-label="Default select example">
                    <option selected>Open this select menu</option>
                    <option value="1">Any </option>
                    <option value="2">All</option>
                </select>
            </div>
            <div className="col-3" style={{ display: "flex", margin: "0 10px" }}>
                <input className="form-control" />
                <button onClick={()=>{setState(false)}} style={{ margin: "0 10px" }} type="button" class="btn btn-danger">-</button>
            </div>
        </div>}



        <div className="row" style={{ margin: "20px 0" }}>
            <div className="col-12">
                <label for="exampleInputEmail1" class="form-label">*Then    </label>
                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>
            <div className="col-6">
                <label for="exampleInputEmail1" class="form-label">Payment account </label>
                <select class="form-select" aria-label="Default select example">
                    <option selected>Open this select menu</option>
                    <option value="1">Any </option>
                    <option value="2">All</option>
                </select>
            </div>
            <div className="col-6">
                <label for="exampleInputEmail1" class="form-label">Deposit to </label>
                <select class="form-select" aria-label="Default select example">
                    <option selected>Open this select menu</option>
                    <option value="1">Any </option>
                    <option value="2">All</option>
                </select>
            </div>
        </div>
        <hr />
        <div className="row" style={{ margin: "20px 0" }}>
            <h6>Automatically confirm transactions this rule applies to</h6>
            <div class="form-check form-switch">
                <label class="form-check-label" for="flexSwitchCheckChecked">Checked switch checkbox input</label>
                <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" style={{ margin: "0 20px" }} />
            </div>
            <button type="button" style={{ width: "200px", margin: "20px 0" }} class="btn btn-success">Save</button>
        </div>
    </div>
}
export default AddBanking