

function AddDiamondColor () {
    return (
        <>
        <div className="aiz-main-content">
                <div className="px-15px px-lg-25px">
                    <div className="aiz-titlebar text-left mt-2 mb-3">
                        <div className="row align-items-center">
                            <div className="col-md-6">
                                <h1 className="h3">Add Diamond Color</h1>
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
                            <h5 className="mb-0 h6">Add Diamond Color</h5>
                        </div>
                        <div className="card-body">

                            <section className="form-section">
                                <div className="row">
                                    {/* <form action=""> */}
                                    <div className="col-lg-4">
                                        <div>
                                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Name*" />
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div>
                                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Code*" />
                                        </div>
                                    </div>
                                    
                                    <div className="col-lg-12 mt-3">
                                        <textarea id="w3review" name="w3review" rows={4} cols={177} defaultValue={'Description'} />

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
export default AddDiamondColor