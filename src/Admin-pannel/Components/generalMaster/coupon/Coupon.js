import { AiFillEdit } from "react-icons/ai"
import { Link } from "react-router-dom"

function Coupon() {
    return (
        <>
            <div className="aiz-main-content">
                <div className="px-15px px-lg-25px">
                    <div className="aiz-titlebar text-left mt-2 mb-3">
                        <div className="row align-items-center">
                            <div className="col-md-6">
                                <h1 className="h3">Coupon</h1>
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
                            <h5 className="mb-0 h6">Coupon</h5>
                            <div className="col-md-6 text-md-right">
                                <Link to="/admin/add-couponn" className="btn btn-circle btn-info">
                                    <span>Add Coupon</span>
                                </Link>
                            </div>
                        </div>
                        <div className="card-body">

                            <section className="form-section">
                                <div className="row">
                                    {/* <form action=""> */}
                                    <div className="col-lg-3">
                                        <div>
                                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Name" />
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div>
                                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Code" />
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <select className="form-select" aria-label="Default select example">
                                            <option selected>Discount Type</option>
                                            <option value={1}>Flat</option>
                                        </select>
                                    </div>
                                    <div className="col-lg-3">
                                        <div>
                                            <input type="date" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Select Date Range" />
                                        </div>
                                    </div>
                                    <div className="col-lg-3 mt-3">
                                        <select className="form-select" aria-label="Default select example">
                                            <option selected>Status</option>
                                            <option value={1}>Active</option>
                                            <option value={1}>Inactive</option>
                                        </select>
                                    </div>
                                    <div className="col-lg-3 mt-3">
                                        <button className="btn btn-primary mr-3">Search</button>
                                        <button className="btn btn-danger">Rest</button>
                                    </div>
                                    {/* </form> */}
                                </div>
                            </section>
                            <table className="table table-3">
                                <thead>
                                    <tr>
                                        <th class="table-secondary" scope="col">Name</th>
                                        <th class="table-secondary" scope="col">Code</th>
                                        <th class="table-secondary" scope="col">Discount</th>
                                        <th class="table-secondary" scope="col">Discount Type</th>
                                        <th class="table-secondary" scope="col">Valid Form</th>
                                        <th class="table-secondary" scope="col">Valid To</th>
                                        <th class="table-secondary" scope="col">Status</th>
                                        <th class="table-secondary" scope="col">Active</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td scope="row">Sonu</td>
                                        <td>abcd12345e</td>
                                        <td>Discount</td>
                                        <td>Inactive</td>
                                        <td>20-03-2023</td>
                                        <td>20-03-2023</td>
                                        <td>Active</td>
                                        <td>
                                            <Link className="btn btn-soft-primary btn-icon btn-circle btn-sm me-2 btn-circle-2" title="View" to="/admin/add-ring-size">
                                                {/* <i className="las la-eye">
                                                </i> */}
                                                <AiFillEdit className="icon-icon" />
                                            </Link>
                                            <button type="button" className="btn btn-soft-danger btn-icon btn-circle btn-sm btn-circle-2" title="delete" fdprocessedid="yghhlt">
                                                <i className="las la-trash icon-icon">
                                                </i>
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                    <td scope="row">Sonu</td>
                                        <td>abcd12345e</td>
                                        <td>Discount</td>
                                        <td>Inactive</td>
                                        <td>20-03-2023</td>
                                        <td>20-03-2023</td>
                                        <td>Active</td>
                                        <td>
                                            <a className="btn btn-soft-primary btn-icon btn-circle btn-sm me-2 btn-circle-2" title="View" href="/admin/all_orders/order-Details/64789b752a93b23fb3d1220d">
                                                {/* <i className="las la-eye">
                                                </i> */}
                                                <AiFillEdit className="icon-icon" />
                                            </a>
                                            <button type="button" className="btn btn-soft-danger btn-icon btn-circle btn-sm btn-circle-2" title="delete" fdprocessedid="yghhlt">
                                                <i className="las la-trash icon-icon">
                                                </i>
                                            </button>
                                        </td>

                                    </tr>
                                    <tr>
                                    <td scope="row">Sonu</td>
                                        <td>abcd12345e</td>
                                        <td>Discount</td>
                                        <td>Inactive</td>
                                        <td>20-03-2023</td>
                                        <td>20-03-2023</td>
                                        <td>Active</td>
                                        <td>
                                            <a className="btn btn-soft-primary btn-icon btn-circle btn-sm me-2 btn-circle-2" title="View" href="/admin/all_orders/order-Details/64789b752a93b23fb3d1220d">
                                                {/* <i className="las la-eye">
                                                </i> */}
                                                <AiFillEdit className="icon-icon" />
                                            </a>
                                            <button type="button" className="btn btn-soft-danger btn-icon btn-circle btn-sm btn-circle-2" title="delete" fdprocessedid="yghhlt">
                                                <i className="las la-trash icon-icon">
                                                </i>
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                    <td scope="row">Sonu</td>
                                        <td>abcd12345e</td>
                                        <td>Discount</td>
                                        <td>Inactive</td>
                                        <td>20-03-2023</td>
                                        <td>20-03-2023</td>
                                        <td>Active</td>
                                        <td>
                                            <Link className="btn btn-soft-primary btn-icon btn-circle btn-sm me-2 btn-circle-2" title="View" to="#">
                                                <AiFillEdit className="icon-icon" />
                                            </Link>
                                            <button type="button" className="btn btn-soft-danger btn-icon btn-circle btn-sm btn-circle-2" title="delete" fdprocessedid="yghhlt">
                                                <i className="las la-trash icon-icon">
                                                </i>
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
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
export default Coupon