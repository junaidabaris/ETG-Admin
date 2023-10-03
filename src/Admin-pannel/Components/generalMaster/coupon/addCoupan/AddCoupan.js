import JoditEditor from "jodit-react"
function AddCoupan() {
    return (
        <>
            <div className="aiz-main-content">
                <div className="px-15px px-lg-25px">
                    <div className="aiz-titlebar text-left mt-2 mb-3">
                        <div className="row align-items-center">
                            <div className="col-md-6">
                                <h1 className="h3">Add Coupon</h1>
                            </div>
                            {/* <div className="col-md-6 text-md-right">
                                <Link to="/admin/roles/create" className="btn btn-circle btn-info">
                                    <span>Add New Role</span>
                                </Link>
                            </div> */}
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header">
                            <h5 className="mb-0 h6">Add Coupon</h5>
                        </div>
                        <div className="card-body">
                            <section className="form-section">
                                <div className="row">
                                    {/* <form action=""> */}
                                    <div className="col-lg-3">
                                        <select className="form-select" aria-label="Default select example">
                                            <option selected>Country</option>
                                            <option value={1}>India</option>
                                            <option value={1}>United State</option>
                                        </select>
                                    </div>
                                    <div className="col-lg-3">
                                        <div>
                                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Name*" />
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div>
                                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Code*" />
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <select className="form-select" aria-label="Default select example">
                                            <option selected>Discount Type</option>
                                            <option value={1}>Flate</option>
                                            <option value={1}>Discount</option>
                                        </select>
                                    </div>
                                    <div className="col-lg-3 mt-3">
                                        <select className="form-select" aria-label="Default select example">
                                            <option selected>Type</option>
                                            <option value={1}>Final Price</option>
                                            <option value={1}>Metal Price</option>
                                            <option value={1}>Diamond Price</option>
                                            <option value={1}>Color Stone Price</option>
                                        </select>
                                    </div>
                                    <div className="col-lg-3 mt-3">
                                        <div>
                                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Discount Amount*" />
                                        </div>
                                    </div>
                                    <div className="col-lg-3 mt-3">
                                        <div>
                                            <input type="date" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Valid Form*" />
                                        </div>
                                    </div>
                                    <div className="col-lg-3 mt-3">
                                        <div>
                                            <input type="date" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Valid To*" />
                                        </div>
                                    </div>
                                    <div className="col-lg-3 mt-3">
                                        <div>
                                            <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Minimum Final Amount*" />
                                        </div>
                                    </div>
                                    <div className="col-lg-3 mt-3">
                                        <div>
                                            <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Maximum Final Amount*" />
                                        </div>
                                    </div>
                                    <div className="col-lg-3 mt-3">
                                        <div>
                                            <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Maximum User Coupon*" />
                                        </div>
                                    </div>
                                    <div className="col-lg-3 mt-3">
                                        <div>
                                            <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Per User Limit*" />
                                        </div>
                                    </div>
                                    <div className="col-lg-12 mt-3">
                                        <JoditEditor />
                                    </div>
                                    <div className="col-lg-3 mt-3">
                                        <label className="form-check-label" htmlFor="flexRadioDefault1">
                                            Status
                                        </label>
                                        <div className="d-flex">
                                            <div className="form-check mr-4">
                                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                                <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                    Active
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" defaultChecked />
                                                <label className="form-check-label" htmlFor="flexRadioDefault2">
                                                    In Active
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 mt-3">
                                        <button className="btn btn-primary mr-3">Save</button>
                                        <button className="btn btn-danger">Cancle</button>
                                    </div>
                                    {/* </form> */}
                                </div>
                            </section>
                            <div className="aiz-pagination">
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-white text-center py-3 px-15px px-lg-25px mt-auto">
                </div>
            </div>
        </>
    )
}
export default AddCoupan