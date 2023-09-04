
import React from "react";
import { Link } from "react-router-dom";

const Banking = () => {
    return (
        <>
            <div className="container bg-white pd-4" style={{ padding: "20px" }}>
                <div className="row">
                    <div className="col-md-12">
                        <Link to='/admin/add-banking' className="btn btn-sm btn-primary" >Add</Link>
                        <hr></hr>
                    </div>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between" ,margin:"10px 0" }}>
                    <div className="d-flex">
                        <select class="form-select" aria-label="Default select example">
                            <option selected>25</option>
                            <option value="1">10</option>
                            <option value="2">15</option>
                        </select>
                        <button type="button" class="btn btn-primary">Export</button>
                    </div>
                    <form class="d-flex">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
                <div>
                    <table class="table">
                        <thead>
                            <tr>    
                                <th scope="col">Name</th>
                                <th scope="col">Transaction</th>
                            </tr>
                        </thead>
                        <tbody>
                        </tbody>
                    </table>
                </div>
            </div>

        </>
    )
}

export default Banking;