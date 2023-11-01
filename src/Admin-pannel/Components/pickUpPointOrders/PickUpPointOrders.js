import { Link } from "react-router-dom";
import { useDeleteOrderMutation, useGetOrdersByPickupsQuery, useGetPickupPointQuery } from "../all-products/allproductsApi/allProductsApi";
import { useEffect, useState } from "react";
import axios from "axios";

function PickUpPointOrder() {

  const { isLoading, data, isError } = useGetOrdersByPickupsQuery();

  const [deleteOrder, response] = useDeleteOrderMutation();
  const isLoginPickup = window.localStorage.getItem('isPickupManagerLogin')
  const isLoginPickupId = window.localStorage.getItem('pickIds')

  const deleteOrderData = (id) => {
    deleteOrder(id)
  };

  const nameOrder = window.localStorage.getItem('orderName')

  useEffect(() => {
    if (response.isSuccess === true) {
      alert('Order deleted Successfully')
    }
    if (response.isError === true) {
      alert('Order Not deleted !!')
    }
  }, [response])


  const [pickData, setPickData] = useState(null)

  const getData = async () => {
    try {
      const res = await axios.get(`https://onlineparttimejobs.in/api/order/getAllOrderPickup/${isLoginPickupId}`)
      setPickData(res.data)
    } catch (error) {
      alert('Fail To Load Pickups Orders !!')
    }
  }


  useEffect(() => {
    if (isLoginPickup) {
      getData()
    }
  }, [])

  return (
    <>
      <div className="aiz-main-content">
        <div className="px-15px px-lg-25px">
          <div className="card">
            <form id="sort_orders">
              <div className="card-header row gutters-5">
                <div className="col">
                  <h5 className="mb-md-0 h6">{nameOrder} {isLoginPickup ? pickData?.length : data?.length}</h5>
                </div>

                <div className="col-lg-2 ml-auto">
                  <select
                    className="form-select"
                    aria-label="Default select example"
                  >
                    <option value="1">Pending</option>
                    <option value="2">Confirmed</option>
                    <option value="3">Picked Up</option>
                    <option value="3">On The Way</option>
                  </select>

                </div>
                <div className="col-lg-2 ml-auto">
                  <select
                    className="form-select"
                    aria-label="Default select example"
                  >
                    <option value="1">Paid</option>
                    <option value="2">Un-Paid</option>
                  </select>

                </div>
                <div className="col-lg-2">
                  <div className="form-group mb-0">
                    <input
                      type="text"
                      className="aiz-date-range form-control"
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
                {isError && <h3 style={{ color: "red" }}>Server Error !</h3>}

                {isLoading ? <h2>Loading...</h2>
                  : <table className="table aiz-table mb-0 footable footable-1 breakpoint-xl" style={{}}  >
                    <thead>
                      <tr className="footable-header">
                        {/*<th>#</th>*/}
                        <th
                          className="footable-first-visible"
                          style={{ display: "table-cell" }}
                        >
                          #
                        </th>
                        <th style={{ display: "table-cell" }}>Order Code</th>
                        <th style={{ display: "table-cell" }}>Order No</th>
                        <th style={{ display: "table-cell" }}>Order Date:</th>

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

                      {
                        isLoginPickup ?

                          pickData?.length && pickData?.map((item, i) => {
                            return <tr key={item._id}>
                              <td
                                className="footable-first-visible"
                                style={{ display: "table-cell" }}
                              >
                                {i + 1}
                              </td>
                              <td style={{ display: "table-cell" }}>
                                {item._id}
                              </td>
                              <td style={{ display: "table-cell" }}>
                                {item.order_referenceNo}
                              </td>
                              <td style={{ display: "table-cell" }}>
                                {item.createdAt}
                              </td>


                              <td style={{ display: "table-cell" }}>{item?.user?.firstname}</td>
                              <td style={{ display: "table-cell" }}>
                                {item?.user?.lastname}
                              </td>
                              <td style={{ display: "table-cell" }}>
                                {item?.Seller[0]?.firstname}  {item?.Seller[0]?.lastname}
                              </td>
                              <td style={{ display: "table-cell" }}>ZK <strong>{item?.grandTotal}</strong></td>
                              <td style={{ display: "table-cell" }}>amount</td>
                              <td style={{ display: "table-cell" }}>
                                {item.Delivery_Status}
                              </td>
                              <td style={{ display: "table-cell" }}>payment method</td>

                              {/* <td style={{ display: "table-cell" }}>No Refund</td> */}
                              <td
                                className="text-right footable-last-visible"
                                style={{ display: "table-cell" }}
                              >
                                <Link
                                  className="btn btn-soft-primary btn-icon btn-circle btn-sm"
                                  to={`/admin/all_orders/order-Details/${item._id}`}
                                  title="View"
                                >
                                  <i className="las la-eye" />
                                </Link>
                                {/* <a
                                className="btn btn-soft-info btn-icon btn-circle btn-sm"
                                href="https://mmslfashions.in/invoice/8"
                                title="Download Invoice"
                              >
                                <i className="las la-download" />
                              </a> */}

                                <button type="button" onClick={() => deleteOrderData(item._id)} className="btn btn-soft-danger btn-icon btn-circle btn-sm">
                                  <i className="las la-trash" />
                                </button>

                              </td>
                            </tr>
                          })

                          :

                          data?.length && data?.map((item, i) => {
                            return <tr key={item._id}>
                              <td
                                className="footable-first-visible"
                                style={{ display: "table-cell" }}
                              >
                                {i + 1}
                              </td>
                              <td style={{ display: "table-cell" }}>
                                {item._id}
                              </td>
                              <td style={{ display: "table-cell" }}>
                                {item.order_referenceNo}
                              </td>
                              <td style={{ display: "table-cell" }}>
                                {item.createdAt}
                              </td>


                              <td style={{ display: "table-cell" }}>{item.user.firstname}</td>
                              <td style={{ display: "table-cell" }}>
                                {item.user.lastname}
                              </td>
                              <td style={{ display: "table-cell" }}>
                                {item?.Seller[0]?.firstname}  {item?.Seller[0]?.lastname}
                              </td>
                              <td style={{ display: "table-cell" }}>ZK <strong>{item?.grandTotal}</strong></td>
                              <td style={{ display: "table-cell" }}>amount</td>
                              <td style={{ display: "table-cell" }}>
                                {item.Delivery_Status}
                              </td>
                              <td style={{ display: "table-cell" }}>payment method</td>

                              {/* <td style={{ display: "table-cell" }}>No Refund</td> */}
                              <td
                                className="text-right footable-last-visible"
                                style={{ display: "table-cell" }}
                              >
                                <Link
                                  className="btn btn-soft-primary btn-icon btn-circle btn-sm"
                                  to={`/admin/all_orders/order-Details/${item._id}`}
                                  title="View"
                                >
                                  <i className="las la-eye" />
                                </Link>
                                {/* <a
                                className="btn btn-soft-info btn-icon btn-circle btn-sm"
                                href="https://mmslfashions.in/invoice/8"
                                title="Download Invoice"
                              >
                                <i className="las la-download" />
                              </a> */}

                                <button type="button" onClick={() => deleteOrderData(item._id)} className="btn btn-soft-danger btn-icon btn-circle btn-sm">
                                  <i className="las la-trash" />
                                </button>

                              </td>
                            </tr>
                          })
                      }

                    </tbody>
                  </table>
                }

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
  );
}
export default PickUpPointOrder;
