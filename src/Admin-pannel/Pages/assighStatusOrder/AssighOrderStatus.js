

import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function AssighOrderStatus() {
    const [data, setData] = useState()
    const isLoginPickupId = window.localStorage.getItem('pickIds')
    const params = useParams()

    const isDelevery = window.localStorage.getItem('isDeleveryBoy')
    const DeleveryBoyId = window.localStorage.getItem('DeleveryBoyId')

    const nameOrder = window.localStorage.getItem('orderName')
    const getData = async () => {
        try {
            const res = await axios.get(`https://onlineparttimejobs.in/api/orderassign/orderStatus/${params.id + '&' + isLoginPickupId}`)
            setData(res.data)
        } catch (error) {
            alert('Server Error Fail to load Assign Order')
        }
    }

    const getDataDelevry = async () => {
        try {
            const res = await axios.get(`https://onlineparttimejobs.in/api/assignDeliveryBoy/deliveryBoy/status/${DeleveryBoyId + '&' + params.id}`)
            setData(res.data)
        } catch (error) {
            alert('Server Error Fail to load Assign Order')
        }
    }

    useEffect(() => {
        if (isDelevery === 'true') {
            getDataDelevry()
        } else {
            getData()
        }
    }, [params])

    const deleteOrderData = (id) => {
        console.log(id);
    }

    return <>
        <div className="aiz-main-content">
            <div className="px-15px px-lg-25px">
                <div className="card">
                    <form >
                        <div className="card-header row gutters-5">
                            <div className="col">
                                <h5 className="mb-md-0 h6">{nameOrder} Assign Orders</h5>
                            </div>

                            <div className="col-lg-2 ml-auto">
                                <select
                                    class="form-select"
                                    aria-label="Default select example"
                                >
                                    <option selected>Filter by Delivery Status</option>
                                    <option value="1">Pending</option>
                                    <option value="2">Confirmed</option>
                                    <option value="3">Picked Up</option>
                                    <option value="3">On The Way</option>
                                </select>
                            </div>
                            <div className="col-lg-2 ml-auto">
                                <select
                                    class="form-select"
                                    aria-label="Default select example"
                                >
                                    <option selected>Filter by Payment Status</option>
                                    <option value="1">Paid</option>
                                    <option value="2">Un-Paid</option>
                                </select>
                            </div>
                            <div className="col-lg-2">
                                <div className="form-group mb-0">
                                    <input
                                        type="text"
                                        className="aiz-date-range form-control"
                                        defaultValue
                                        name="date"
                                        placeholder="Filter by date"
                                        data-format="DD-MM-Y"
                                        data-separator=" to "
                                        data-advanced-range="true"
                                        autoComplete="off"
                                        fdprocessedid="sq6vu7"
                                    />
                                </div>
                            </div>
                            <div className="col-lg-2">
                                <div className="form-group mb-0">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="search"
                                        name="search"
                                        placeholder="Type Order code & hit Enter"
                                        fdprocessedid="wffmea"
                                    />
                                </div>
                            </div>
                            <div className="col-auto">
                                <div className="form-group mb-0">
                                    <button
                                        type="submit"
                                        className="btn btn-primary"
                                        fdprocessedid="24gy4"
                                    >
                                        Filter
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="card-body">


                            <table className="table aiz-table mb-0 footable footable-1 breakpoint-xl" style={{}}  >
                                <thead>
                                    <tr className="footable-header">
                                        {/*<th>#</th>*/}
                                        <th
                                            className="footable-first-visible"
                                            style={{ display: "table-cell" }}
                                        >
                                            #
                                        </th>
                                        <th style={{ display: "table-cell" }}>Order Code:</th>
                                        <th style={{ display: "table-cell" }}>order ReferenceNo:</th>
                                        <th style={{ display: "table-cell" }}>Order Date:</th>
                                        {/* <th style={{ display: "table-cell" }}>Order Time:</th> */}
                                        <th
                                            data-breakpoints="md"
                                            style={{ display: "table-cell" }}
                                        >
                                            Num. of Products
                                        </th>
                                        <th
                                            data-breakpoints="md"
                                            style={{ display: "table-cell" }}
                                        >
                                            First Name
                                        </th>
                                        <th
                                            data-breakpoints="md"
                                            style={{ display: "table-cell" }}
                                        >
                                            Last Name
                                        </th>

                                        <th
                                            data-breakpoints="md"
                                            style={{ display: "table-cell" }}
                                        >
                                            Seller
                                        </th>
                                        <th
                                            data-breakpoints="md"
                                            style={{ display: "table-cell" }}
                                        >
                                            Amount
                                        </th>
                                        <th
                                            data-breakpoints="md"
                                            style={{ display: "table-cell" }}
                                        >
                                            Delivery Type
                                        </th>
                                        <th
                                            data-breakpoints="md"
                                            style={{ display: "table-cell" }}
                                        >
                                            Delivery Status
                                        </th>
                                        <th
                                            data-breakpoints="md"
                                            style={{ display: "table-cell" }}
                                        >
                                            Payment method
                                        </th>
                                        <th
                                            data-breakpoints="md"
                                            style={{ display: "table-cell" }}
                                        >
                                            Payment Status
                                        </th>
                                        {/* <th style={{ display: "table-cell" }}>Refund</th> */}
                                        <th
                                            className="text-right footable-last-visible"
                                            style={{ display: "table-cell", width: "20%" }}
                                        >
                                            Options
                                        </th>
                                    </tr>
                                </thead>

                                <tbody>


                                    {data?.length && data?.map((item, i) => {
                                        return <tr key={i}>
                                            <td
                                                className="footable-first-visible"
                                                style={{ display: "table-cell" }}
                                            >
                                                {1 + i}
                                            </td>
                                            <td style={{ display: "table-cell" }}>
                                                {item?.orderId._id}
                                            </td>
                                            <td style={{ display: "table-cell" }}>
                                                {item?.orderId?.order_referenceNo}
                                            </td>
                                            <td style={{ display: "table-cell" }}>
                                                {item?.createdAt}
                                            </td>

                                            <td style={{ display: "table-cell" }}>
                                                {item?.orderId?.products.length}
                                            </td>
                                            <td style={{ display: "table-cell" }}>
                                                {item?.orderId?.user ? item?.orderId?.user.firstname : ''}
                                            </td>
                                            <td style={{ display: "table-cell" }}>
                                                {item?.orderId?.user ? item?.orderId?.user.lastname : ''}
                                            </td>
                                            <td style={{ display: "table-cell" }}>

                                                {item?.orderId?.Seller[0]?.firstname + ' ' + item?.orderId?.Seller[0]?.lastname}
                                            </td>
                                            <td style={{ display: "table-cell" }}>
                                                {item?.orderId.currency ? item?.orderId.currency.symbol : 'ZK'} {item?.orderId?.grandTotal}
                                            </td>
                                            <td style={{ display: "table-cell" }}>
                                                {item?.orderId?.deliveryType}
                                            </td>
                                            <td style={{ display: "table-cell" }}>
                                                {item?.orderId?.orderStatusTrans ? item?.orderId?.orderStatusTrans[item?.orderId?.orderStatusTrans.length - 1].orderStatusId?.orderStatusName : ''}
                                            </td>
                                            <td style={{ display: "table-cell" }}>
                                                COD
                                            </td>
                                            <td style={{ display: "table-cell" }}>
                                                {item?.orderId?.Payment_Status?.paymentStatusName}
                                            </td>



                                            <td
                                                className="text-right footable-last-visible"
                                                style={{ display: "table-cell" }}
                                            >
                                                <Link
                                                    className="btn btn-soft-primary btn-icon btn-circle btn-sm"
                                                    to={`/admin/all_orders/order-Details/${item?.orderId._id}`}
                                                    title="View"
                                                >
                                                    <i className="las la-eye" />
                                                </Link>

                                                <button type="button" onClick={() => deleteOrderData(1)} className="btn btn-soft-danger btn-icon btn-circle btn-sm">
                                                    <i className="las la-trash" />
                                                </button>

                                            </td>
                                        </tr>
                                    })}


                                </tbody>
                            </table>

                            <div className="aiz-pagination"></div>
                        </div>
                    </form>
                </div>
            </div>
            <div className="bg-white text-center py-3 px-15px px-lg-25px mt-auto">
                {/*p class="mb-0">&copy;  v6.3.3</p*/}
            </div>
        </div>
    </>
}
export default AssighOrderStatus