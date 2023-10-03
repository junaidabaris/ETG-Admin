
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { token } from "../../common/TokenArea";

function AllWholsaleProductsPage() {
    const [data, setData] = useState(null)

    const getData = async () => {
        try {
            const res = await axios.get(`https://onlineparttimejobs.in/api/wholesale`,{
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                    'Authorization': 'Bearer ' + token
                }
            })
            setData(res.data)
        } catch (error) {
            alert('Server Error ,Fail to Load Data !')
        }
    }

    useEffect(() => {
        getData()
    }, [])

    const deleteData = async (id) => {
        try {
            const res = await axios.delete(`https://onlineparttimejobs.in/api/wholesale/delete_wholesales/${id}`, {
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                    'Authorization': 'Bearer ' + token
                }
            })
            alert('Whole sale product Deleted')
            getData()
        } catch (error) {
            alert('Server Error Not Deleted !')
        }
    }

    return (
        <>
            <div className="aiz-main-content">
                <div className="px-15px px-lg-25px">
                    <div className="aiz-titlebar text-left mt-2 mb-3">
                        <div className="row align-items-center">
                            <div className="col-auto">
                                <h1 className="h3">All Wholesale Products</h1>
                            </div>
                            <div className="col text-right">
                                <Link to="/admin/wholesale-product/create" className="btn btn-circle btn-info">
                                    <span>Add New Wholesale Product</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <br />
                    <div className="card">
                        <form className id="sort_products" action method="GET">
                            <div className="card-header row gutters-5">
                                <div className="col">
                                    <h5 className="mb-md-0 h6">All Wholesale Product</h5>
                                </div>
                                <div className="dropdown mb-2 mb-md-0">
                                    <button className="btn border dropdown-toggle" type="button" data-toggle="dropdown" fdprocessedid="5bpb9r" aria-expanded="false">
                                        Bulk Action
                                    </button>
                                    <div className="dropdown-menu dropdown-menu-right" style={{}}>
                                        <a className="dropdown-item" href="#" onclick="bulk_delete()"> Delete selection</a>
                                    </div>
                                </div>
                                <div className="col-md-2 ml-auto">
                                    <select className="form-select" aria-label="Default select example">
                                        <option selected>Demo Seller</option>
                                        <option value={1}>One</option>
                                        <option value={2}>Two</option>
                                        <option value={3}>Three</option>
                                    </select>

                                </div>
                                <div className="col-md-2 ml-auto">
                                    <select className="form-select" aria-label="Default select example">
                                        <option selected>Sort By</option>
                                        <option value={1}>One</option>
                                        <option value={2}>Two</option>
                                        <option value={3}>Three</option>
                                    </select>
                                </div>
                                <div className="col-md-2">
                                    <div className="form-group mb-0">
                                        <input type="text" className="form-control form-control-sm" id="search" name="search" placeholder="Search" fdprocessedid="93y0ed" />
                                    </div>
                                </div>
                            </div>
                            <div className="card-body">
                                <table className="table aiz-table mb-0 footable footable-1 breakpoint-xl" style={{}}>
                                    <thead>
                                        <tr className="footable-header">
                                            {/*<th data-breakpoints="lg">#</th>*/}
                                            <th className="footable-first-visible" style={{ display: 'table-cell' }}>
                                                <div className="form-group">
                                                    <div className="aiz-checkbox-inline">
                                                        <label className="aiz-checkbox">
                                                            <input type="checkbox" className="check-all" />
                                                            <span className="aiz-square-check" />
                                                        </label>
                                                    </div>
                                                </div>
                                            </th>
                                            <th style={{ display: 'table-cell' }}>Name</th>
                                            <th data-breakpoints="lg" style={{ display: 'table-cell' }}>Added By</th>
                                            <th data-breakpoints="sm" style={{ display: 'table-cell' }}>Info</th>
                                            <th data-breakpoints="md" style={{ display: 'table-cell' }}>Total Stock</th>
                                            <th data-breakpoints="lg" style={{ display: 'table-cell' }}>Todays Deal</th>
                                            <th data-breakpoints="lg" style={{ display: 'table-cell' }}>Published</th>
                                            <th data-breakpoints="lg" style={{ display: 'table-cell' }}>Featured</th>
                                            <th data-breakpoints="sm" className="text-right footable-last-visible" style={{ display: 'table-cell' }}>Options</th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        {data && data.map((item, i) => {
                                            return <tr key={i}>
                                                <td className="footable-first-visible" style={{ display: 'table-cell' }}>
                                                    <div className="form-group d-inline-block">
                                                        <label className="aiz-checkbox">
                                                            <input type="checkbox" className="check-one" name="id[]" defaultValue={74} />
                                                            <span className="aiz-square-check" />
                                                        </label>
                                                    </div>
                                                </td>
                                                <td style={{ display: 'table-cell' }}>
                                                    <div className="row gutters-5 w-200px w-md-300px mw-100">
                                                        {/* <div className="col-auto">
                                                            <img src="https://mmslfashions.in/public/assets/img/placeholder.jpg" alt="Image" className="size-50px img-fit" />
                                                        </div> */}
                                                        <div className="col">
                                                            <span className="text-muted text-truncate-2">{item?.name}</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td style={{ display: 'table-cell' }}>{item?.seller_id?.firstname} {item?.seller_id?.lastname}</td>
                                                <td style={{ display: 'table-cell' }}>
                                                    <strong>Num of Sale:</strong> 0 Times <br />
                                                    <strong>Base Price:</strong> ZK120.00 <br />
                                                    <strong>Rating:</strong> 0 <br />
                                                </td>
                                                <td style={{ display: 'table-cell' }}>
                                                    100
                                                </td>
                                                <td style={{ display: 'table-cell' }}>
                                                    <label className="aiz-switch aiz-switch-success mb-0">
                                                        <input defaultValue={74} type="checkbox" defaultChecked />
                                                        <span className="slider round" />
                                                    </label>
                                                </td>
                                                <td style={{ display: 'table-cell' }}>
                                                    <label className="aiz-switch aiz-switch-success mb-0">
                                                        <input defaultValue={74} type="checkbox" defaultChecked />
                                                        <span className="slider round" />
                                                    </label>
                                                </td>
                                                <td style={{ display: 'table-cell' }}>
                                                    <label className="aiz-switch aiz-switch-success mb-0">
                                                        <input defaultValue={74} type="checkbox" />
                                                        <span className="slider round" />
                                                    </label>
                                                </td>
                                                <td className="text-right footable-last-visible" style={{ display: 'table-cell' }}>
                                                    <Link to="#" className="btn btn-soft-success btn-icon btn-circle btn-sm" target="_blank" title="View">
                                                        <i className="las la-eye" />
                                                    </Link>
                                                    <Link to={`edit/${item._id}`} className="btn btn-soft-primary btn-icon btn-circle btn-sm"
                                                        title="Edit">

                                                        <i className="las la-edit" />
                                                    </Link>

                                                    <button type="button" onClick={() => deleteData(item._id)} class="btn btn-soft-danger btn-icon btn-circle btn-sm confirm-delete">
                                                        <i class="las la-trash"></i>
                                                    </button>
                                                </td>
                                            </tr>
                                        })}


                                    </tbody>
                                </table>
                                <div className="aiz-pagination">
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="bg-white text-center py-3 px-15px px-lg-25px mt-auto">
                    {/*p class="mb-0">&copy;  v6.3.3</p*/}
                </div>
            </div>

        </>
    )
}
export default AllWholsaleProductsPage;