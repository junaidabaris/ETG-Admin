import { Link } from "react-router-dom";
import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { useDeleteCurrencyMutation, useGetCurrencyQuery } from "../../all-products/allproductsApi/allProductsApi";
import { token } from "../../../common/TokenArea";

function AllCurrency() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const { isLoading, data ,refetch } = useGetCurrencyQuery(token);

    const [deleteCurr, respo] = useDeleteCurrencyMutation();

    const deleteCurrencyData = (id) => {
        deleteCurr({ id, token })
        refetch()
    }
    if (respo.isSuccess === true) {
        alert('Currency successfully deleted')
    }

    return (
        <>
            <div className="aiz-titlebar text-left mt-2 mb-3">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <h1 className="h3">All Currencies</h1>
                    </div>
                    <div className="col-md-6 text-md-right">
                        <Link to="create" className="btn btn-circle btn-primary">
                            <span>Add New Currency</span>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="card-header row gutters-5">
                    <div className="col text-center text-md-left">
                        <h5 className="mb-md-0 h6">All Currencies</h5>
                    </div>
                    <div className="col-md-4">
                        <form id="sort_currencies">
                            <div className="input-group input-group-sm">
                                <input type="text" className="form-control" id="search" name="search" placeholder="Type name & Enter" fdprocessedid="skb3yv" />
                            </div>
                        </form>
                    </div>
                </div>
                <div className="card-body">

                    {isLoading ? <h2>Loading...</h2>
                        : <table className="table aiz-table mb-0 footable footable-1 breakpoint-xl" style={{}}>
                            <thead>
                                <tr className="footable-header">
                                    <th data-breakpoints="lg" className="footable-first-visible" style={{ display: 'table-cell' }}>#</th>
                                    <th style={{ display: 'table-cell' }}>Currency name</th>
                                    <th data-breakpoints="lg" style={{ display: 'table-cell' }}>Currency symbol</th>
                                    <th data-breakpoints="lg" style={{ display: 'table-cell' }}>Currency code</th>
                                    <th style={{ display: 'table-cell' }}>Exchange Rate(1 USD = ?)</th>
                                    <th data-breakpoints="lg" style={{ display: 'table-cell' }}>Status</th>
                                    <th className="text-right footable-last-visible" style={{ display: 'table-cell' }}>Options</th>
                                </tr>
                            </thead>
                            <tbody>

                                {data && data.map((item, i) => {
                                    return <tr key={item._id}>
                                        <td className="footable-first-visible" style={{ display: 'table-cell' }}>{i + 1}</td>
                                        <td style={{ display: 'table-cell' }}>{item.name}</td>
                                        <td style={{ display: 'table-cell' }}>{item.symbol}</td>
                                        <td style={{ display: 'table-cell' }}>{item.code}</td>
                                        <td style={{ display: 'table-cell' }}>{item.exchange_rate}</td>
                                        <td style={{ display: 'table-cell' }}>
                                            <label className="aiz-switch aiz-switch-success mb-0">
                                                <input defaultValue={29} type="checkbox" defaultChecked />
                                                <span className="slider round" />
                                            </label>
                                        </td>
                                        <td className="text-right footable-last-visible" style={{ display: 'table-cell' }}>
                                            <Link to={`edit/${item._id}`} className="btn btn-soft-primary btn-icon btn-circle btn-sm" title="Edit">
                                                <i className="las la-edit" />
                                            </Link>
                                            <button type="button" onClick={() => deleteCurrencyData(item._id)} className="btn btn-soft-danger btn-icon btn-circle btn-sm">
                                                <i className="las la-trash" />
                                            </button>
                                        </td>
                                    </tr>
                                })}
                            </tbody>
                        </table>
                    }

                    {/* <div className="aiz-pagination">
                        <nav>
                            <ul className="pagination">
                                <li className="page-item disabled" aria-disabled="true" aria-label="« Previous">
                                    <span className="page-link" aria-hidden="true">‹</span>
                                </li>
                                <li className="page-item active" aria-current="page"><span className="page-link">1</span></li>
                                <li className="page-item"><a className="page-link" href="https://mmslfashions.in/admin/currency?page=2">2</a></li>
                                <li className="page-item"><a className="page-link" href="https://mmslfashions.in/admin/currency?page=3">3</a></li>
                                <li className="page-item">
                                    <a className="page-link" href="https://mmslfashions.in/admin/currency?page=2" rel="next" aria-label="Next »">›</a>
                                </li>
                            </ul>
                        </nav>
                    </div> */}
                </div>
            </div>
        </>
    )
}
export default AllCurrency;