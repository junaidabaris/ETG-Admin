import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Actions from "../../Components/allSeller/Actions";

function AssignOrder() {
    const [data, setData] = useState()
    const [data2, setData2] = useState()
    const pickupId = window.localStorage.getItem('pickIds')
    const isDeleveryBoy = window.localStorage.getItem('isDeleveryBoy')
    const DeleveryBoyId = window.localStorage.getItem('DeleveryBoyId')
    const token = window.localStorage.getItem('token')
    const getData = async () => {
        try {
            const res = await axios.get(`https://onlineparttimejobs.in/api/orderAssign/pickupPoints`, {
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                    'Authorization': 'Bearer ' + token
                },
            })
            setData(res.data)
        } catch (error) {
            alert('Server Error Fail to load Assign Order')
        }
    }
    const getData2 = async () => {
        try {
            const res = await axios.get(`https://onlineparttimejobs.in/api/assignDeliveryBoy/deliveryBoy`, {
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                    'Authorization': 'Bearer ' + token
                },
            })
            setData2(res.data)
        } catch (error) {
            alert('Server Error Fail to load Assign Order')
        }
    }

    useEffect(() => {
        if (isDeleveryBoy === 'true') {
            getData2()
        } else {
            getData()
        }

    }, [])

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
                                <h5 className="mb-md-0 h6">All Assign Orders {data?.length}</h5>
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
                                        {/* <th
                                            data-breakpoints="md"
                                            style={{ display: "table-cell" }}
                                        >
                                            Num. of Products
                                        </th> */}
                                        {/* <th
                                            data-breakpoints="md"
                                            style={{ display: "table-cell" }}
                                        >
                                            First Name
                                        </th> */}
                                        <th
                                            data-breakpoints="md"
                                            style={{ display: "table-cell" }}
                                        >
                                            Name
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

                                {isDeleveryBoy === 'true' ?
                                  <tbody>


                                  {data2 && data2?.map((item, i) => {
                                      return <tr key={item._id} style={{ cursor: "pointer" }}
                                      //  onClick={()=>{navigate(`/admin/all_orders/order-Details/${item._id}`)}}
                                      >
                                          <td
                                              className="footable-first-visible"
                                              style={{ display: "table-cell" }}
                                          >
                                              {i + 1}
                                          </td>
                                          {/* <td style={{ display: "table-cell" }}>
                                           {item.parent_id}
                                         </td> */}
                                          <td style={{ display: "table-cell" }}>
                                              {item._id}
                                          </td>
                                          <td style={{ display: "table-cell" }}>
                                              {item?.referenceNo}
                                          </td>


                                          <td style={{ display: "table-cell" }}>{item.createdAt}</td>
                                          {/* <td style={{ display: "table-cell" }}>-</td> */}
                                          <td style={{ display: "table-cell" }}>
                                              {item?.user?.firstname + " " + item?.user?.lastname}
                                          </td>
                                          <td style={{ display: "table-cell" }}>
                                              {item?.seller_id[0]?.firstname}  {item?.seller_id[0]?.lastname}
                                          </td>

                                          <td style={{ display: "table-cell" }}>
                                              {item?.currency?.symbol ? item?.currency?.symbol : 'ZK'} {item.grandTotal}
                                          </td>

                                          <td style={{ display: "table-cell" }}>COD</td>

                                          <td style={{ display: "table-cell" }}>
                                              {item?.status[item.status.length - 1]?.orderStatusName}
                                          </td>

                                          <td style={{ display: "table-cell" }}>
                                              COD
                                          </td>
                                          <td style={{ display: "table-cell" }}>
                                              {item.pickupAddress ? "Pick Up Piont" + " " + item.pickupAddress.pickupPoint_name : "HOME DELEVERY"}
                                          </td>



                                          <td
                                              style={{ display: "table-cell" }}
                                          //  style={{ display: "inline-flex" }}
                                          >

                                              <Actions item={item} deleteOrderData={deleteOrderData} />

                                          </td>
                                      </tr>
                                  })}


                              </tbody>
                                    :

                                    <tbody>


                                        {data && data.map((item, i) => {
                                            return <tr key={item._id} style={{ cursor: "pointer" }}
                                            //  onClick={()=>{navigate(`/admin/all_orders/order-Details/${item._id}`)}}
                                            >
                                                <td
                                                    className="footable-first-visible"
                                                    style={{ display: "table-cell" }}
                                                >
                                                    {i + 1}
                                                </td>
                                                {/* <td style={{ display: "table-cell" }}>
                                                 {item.parent_id}
                                               </td> */}
                                                <td style={{ display: "table-cell" }}>
                                                    {item._id}
                                                </td>
                                                <td style={{ display: "table-cell" }}>
                                                    {item?.referenceNo}
                                                </td>


                                                <td style={{ display: "table-cell" }}>{item.createdAt}</td>
                                                {/* <td style={{ display: "table-cell" }}>-</td> */}
                                                <td style={{ display: "table-cell" }}>
                                                    {item?.user?.firstname + " " + item?.user?.lastname}
                                                </td>
                                                <td style={{ display: "table-cell" }}>
                                                    {item?.seller_id[0]?.firstname}  {item?.seller_id[0]?.lastname}
                                                </td>

                                                <td style={{ display: "table-cell" }}>
                                                    {item?.currency?.symbol ? item?.currency?.symbol : 'ZK'} {item.grandTotal}
                                                </td>

                                                <td style={{ display: "table-cell" }}>COD</td>

                                                <td style={{ display: "table-cell" }}>
                                                    {item?.status[item.status.length - 1]?.orderStatusName}
                                                </td>

                                                <td style={{ display: "table-cell" }}>
                                                    COD
                                                </td>
                                                <td style={{ display: "table-cell" }}>
                                                    {item.pickupAddress ? "Pick Up Piont" + " " + item.pickupAddress.pickupPoint_name : "HOME DELEVERY"}
                                                </td>



                                                <td
                                                    style={{ display: "table-cell" }}
                                                //  style={{ display: "inline-flex" }}
                                                >

                                                    <Actions item={item} deleteOrderData={deleteOrderData} />

                                                </td>
                                            </tr>
                                        })}


                                    </tbody>}




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
export default AssignOrder