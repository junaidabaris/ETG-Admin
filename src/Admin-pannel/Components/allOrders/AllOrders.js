import { Link, useNavigate } from "react-router-dom";
import { GrUnorderedList } from 'react-icons/gr';
import { useDeleteOrderMutation, useGetOrdersQuery } from "../all-products/allproductsApi/allProductsApi";
import { useEffect, useState } from "react";
import Actions from "../allSeller/Actions";

function AllOrders() {



  const token = window.localStorage.getItem('token')

  const { isLoading, data } = useGetOrdersQuery(token);

  const [deleteOrder, response] = useDeleteOrderMutation();

  const deleteOrderData = (id) => {
    deleteOrder(id)
  };



  useEffect(() => {
    if (response.isSuccess === true) {
      alert('Order deleted Successfully')
    }
  }, [response])

  window.localStorage.setItem("invoice", "")

  let allTotal = 0;
  const navigate = useNavigate()
  return (
    <>
      <div className="aiz-main-content">
        <div className="px-15px px-lg-25px">
          <div className="card">
            <form id="sort_orders" method="GET">
              <div className="card-header row gutters-5">
                <div className="col">
                  <h5 className="mb-md-0 h6">All Orders {data?.length}</h5>
                </div>
                <div className="col-lg-2 dropdown mb-2 mb-md-0">
                  <select
                    className="form-select"
                    aria-label="Default select example"
                  >
                    <option>Bulk Action</option>
                    <option value="1">Delete Selection</option>
                  </select>
                </div>
                <div className="col-lg-2 ml-auto">
                  <select className="form-select" aria-label="Default select example">
                    <option>Filter by Delivery Status</option>
                    <option value="1">Pending</option>
                    <option value="2">Confirmed</option>
                    <option value="3">Picked Up</option>
                    <option value="3">On The Way</option>
                  </select>
                </div>

                <div className="col-lg-2 ml-auto">
                  <select className="form-select" aria-label="Default select example">
                    <option >Filter by Payment Status</option>
                    <option value="1">Paid</option>
                    <option value="2">Un-Paid</option>
                  </select>
                </div>

                <div className="col-lg-2">
                  <div className="form-group mb-0">
                    <input type="text" className="aiz-date-range form-control" name="date" placeholder="Filter by date" data-format="DD-MM-Y" data-separator=" to " data-advanced-range="true" autoComplete="off" fdprocessedid="sq6vu7" />
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

                {isLoading ? <h2>Loading...</h2>
                  : <table className="table table-responsive aiz-table mb-0 footable footable-1 breakpoint-xl" style={{ height: "700px" }} >
                    <thead>
                      <tr className="footable-header">

                        <th
                          className="footable-first-visible"
                          style={{ display: "table-cell" }}
                        >
                          S.No
                        </th>
                        {/* <th style={{ display: "table-cell" }}>Master Order Id</th> */}
                        <th style={{ display: "table-cell" }}>Order Code</th>
                        <th style={{ display: "table-cell" }}>Order No</th>

                        <th
                          data-breakpoints="md"
                          style={{ display: "table-cell" }}
                        >
                          Order Date
                        </th>
                        <th
                          data-breakpoints="md"
                          style={{ display: "table-cell" }}
                        >
                          Buyer Name
                        </th>
                        <th
                          data-breakpoints="md"
                          style={{ display: "table-cell" }}
                        >
                          Seller Name
                        </th>
                        <th
                          data-breakpoints="md"
                          style={{ display: "table-cell" }}
                        >
                          Order Net Amount
                        </th>
                        <th
                          data-breakpoints="md"
                          style={{ display: "table-cell" }}
                        >
                          Payment Mode
                        </th>
                        {/* <th
                          data-breakpoints="md"
                          style={{ display: "table-cell" }}
                        >
                          Delivery Type
                        </th> */}
                        <th
                          data-breakpoints="md"
                          style={{ display: "table-cell" }}
                        >
                          Order Delivery Status
                        </th>
                        <th
                          data-breakpoints="md"
                          style={{ display: "table-cell" }}
                        >
                          Paid
                        </th>
                        <th
                          data-breakpoints="md"
                          style={{ display: "table-cell" }}
                        >
                          Payment Status
                        </th>
                        <th
                          data-breakpoints="md"
                          style={{ display: "table-cell" }}
                        >
                          Balance
                        </th>
                        <th
                          data-breakpoints="md"
                          style={{ display: "table-cell" }}
                        >
                          Delivery Type
                        </th>

                        {/* <th
                          data-breakpoints="md"
                          style={{ display: "table-cell" }}
                        >
                          Delivery Type
                        </th> */}

                        <th
                          className="footable-last-visible"
                          style={{}}
                        >
                          Options
                        </th>

                      </tr>
                    </thead>

                    <tbody>

                      {data && data?.map((item, i) => {
                        if (item?.grandTotal) {
                          allTotal = allTotal + +item?.grandTotal
                        }
                        console.log(item);
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
                          <td style={{ display: "table-cell" }}>
                            {item?.user?.firstname + " "+ item?.user?.lastname}
                          </td>
                          <td style={{ display: "table-cell" }}>
                            {item?.seller_id?.firstname}  {item?.seller_id?.lastname}
                          </td>

                          <td style={{ display: "table-cell" }}>
                            {item?.currency?.symbol ? item?.currency?.symbol : 'ZK'} {item.grandTotal}
                          </td>

                          <td style={{ display: "table-cell" }}>COD</td>

                          <td style={{ display: "table-cell" }}>
                            {item?.status[item.status.length - 1]?.orderStatusName}
                          </td>
                          <td style={{ display: "table-cell" }}>
                            {item?.Paid}
                          </td>

                          <td style={{ display: "table-cell" }}>
                            <span className={`badge badge-inline ${item?.Payment_Status?.paymentStatusName === 'Not Paid' ? 'badge-danger' : 'badge-success'}`}>{item?.Payment_Status?.paymentStatusName}</span>
                          </td>

                          <td style={{ display: "table-cell" }}>
                            {item?.Balance}
                          </td>
                          <td style={{ display: "table-cell" }}>
                            {item.pickupAddress ? "Pick Up Piont" + " " + item.pickupAddress.pickupPoint_name : "HOME DELEVERY"}
                          </td>



                          <td
                            className="text-right footable-last-visible"
                            style={{ display: "inline-flex" }}
                          >

                            <Actions item={item} deleteOrderData={deleteOrderData} />

                          </td>
                        </tr>
                      })}

                    </tbody>
                    <div style={{ fontSize: "medium", display: "flex", justifyContent: "center" }}>Total Net Amount : ZK {allTotal}</div>
                  </table>
                }

                <div className="aiz-pagination"></div>
              </div>
            </form>
          </div>
        </div>
        <div className="bg-white text-center py-3 px-15px px-lg-25px mt-auto">
          {/*p className="mb-0">&copy;  v6.3.3</p*/}
        </div>
      </div>
    </>
  );
}
export default AllOrders;
