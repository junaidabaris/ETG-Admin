import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { useDeleteStaffMutation, useGetAllStaffsQuery } from '../../../Components/all-products/allproductsApi/allProductsApi';
import axios from 'axios';


function AllDeliveryBoys() {

    const [data, setdata] = useState(null)

    const isPickupManagerLogin = window.localStorage.getItem('isPickupManagerLogin')
    const isPickupManagerId = window.localStorage.getItem('isPickupManagerId')

    const token = window.localStorage.getItem('token')
    const getData = async () => {
        const res = await axios.get(`https://onlineparttimejobs.in/api/deliveryBoy`, {
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
                'Authorization': 'Bearer ' + token
            },
        })
        setdata(res.data)
    }
    const getData2 = async () => {
        const res = await axios.get(`https://onlineparttimejobs.in/api/deliveryBoy/pickupPoint/${isPickupManagerId}`,{
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
                'Authorization': 'Bearer ' + token
            },
        })
        setdata(res.data)
    }

    useEffect(() => {
        if (isPickupManagerLogin === 'true') {
            getData2()
        } else {
            getData()
        }
    }, [])

    const deleteDeliveryBoyData = (id) => {
        // deleteDeliveryBoyD(id)
    };

    // if (response.isSuccess === true) {
    //     alert('Delivery Boy deleted Successfully')
    // }

    return (
        <>
            <div className="aiz-main-content">
                <div className="px-15px px-lg-25px">
                    <div className="aiz-titlebar text-left mt-2 mb-3">
                        <div className="row align-items-center">
                            <div className="col-md-6">
                                <h1 className="h3">All Delivery Boys</h1>
                            </div>
                            <div className="col-md-6 text-md-right">
                                <Link to="/admin/delivery-boys/create" className="btn btn-circle btn-info">
                                    <span>Add New Delivery Boy</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header">
                            <h5 className="mb-0 h6">Delivery Boys</h5>
                        </div>
                        <div className="card-body">

                            <table className="table aiz-table footable footable-1 breakpoint-lg" style={{}}>
                                <thead>
                                    <tr className="footable-header">
                                        <th width="10%" style={{ display: 'table-cell' }}>#</th>
                                        <th style={{ display: 'table-cell' }}>Name</th>
                                        <th style={{ display: 'table-cell' }}>Photo</th>
                                        <th style={{ display: 'table-cell' }}>Email</th>
                                        <th style={{ display: 'table-cell' }}>Phone</th>
                                        {isPickupManagerLogin === 'false' && <th style={{ display: 'table-cell' }}>Pickup Point</th>}

                                        <th style={{ display: 'table-cell' }}>Earnings</th>
                                        <th style={{ display: 'table-cell' }}>Address</th>
                                        <th width="10%" style={{ display: 'table-cell' }}>Options</th>
                                    </tr>
                                </thead>

                                {isPickupManagerLogin ?
                                    <tbody>
                                        {data && data.map((item, i) => {
                                            return <tr className="footable-empty footableIcon" key={item._id}>
                                                <td >{i + 1}</td>
                                                <td >{item.firstname} {item.lastname}</td>
                                                <td >
                                                    <img style={{ width: "100px", height: "100px", objectFit: "cover" }} src={item?.profilePhoto?.url} />
                                                </td>
                                                <td >{item.email}</td>
                                                <td >{item.mobile}</td>
                                                <td >{item?.pickupPoint?.pickupPoint_name}</td>
                                                <td >000</td>
                                                <td >
                                                    <div>{item?.country} {item?.state}</div>
                                                    <div> {item?.city} {item?.province} {item?.pin}</div>
                                                </td>
                                                <td className="text-right footable-last-visible" style={{ display: 'table-cell' }}>
                                                    <Link to={`edit/${item._id}`} className="btn btn-soft-primary btn-icon btn-circle btn-sm" title="Edit">
                                                        <i className="las la-edit" />
                                                    </Link>
                                                    <button type="button" onClick={() => deleteDeliveryBoyData(item._id)} className="btn btn-soft-danger btn-icon btn-circle btn-sm">
                                                        <i className="las la-trash" />
                                                    </button>
                                                </td>
                                            </tr>
                                        })}
                                    </tbody>
                                    :
                                    <tbody>
                                        {data && data.map((item, i) => {
                                            return <tr className="footable-empty footableIcon" key={item._id}>
                                                <td >{i + 1}</td>
                                                <td >{item.firstname} {item.lastname}</td>
                                                <td >
                                                    <img style={{ width: "100px", height: "100px", objectFit: "cover" }} src={item?.profilePhoto?.url} />
                                                </td>
                                                <td >{item.email}</td>
                                                <td >{item.mobile}</td>
                                                <td >{item?.pickupPoint?.pickupPoint_name}</td>
                                                <td >000</td>
                                                <td >
                                                    <div>{item?.country} {item?.state}</div>
                                                    <div> {item?.city} {item?.province} {item?.pin}</div>
                                                </td>
                                                <td className="text-right footable-last-visible" style={{ display: 'table-cell' }}>
                                                    <Link to={`edit/${item._id}`} className="btn btn-soft-primary btn-icon btn-circle btn-sm" title="Edit">
                                                        <i className="las la-edit" />
                                                    </Link>
                                                    <button type="button" onClick={() => deleteDeliveryBoyData(item._id)} className="btn btn-soft-danger btn-icon btn-circle btn-sm">
                                                        <i className="las la-trash" />
                                                    </button>
                                                </td>
                                            </tr>
                                        })}
                                    </tbody>
                                }

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

export default AllDeliveryBoys