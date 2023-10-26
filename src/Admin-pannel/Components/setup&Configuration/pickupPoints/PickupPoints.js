import { Link } from "react-router-dom"
import john from "../../../../assets/img/blog-details/1.jpg"
import { useDeletePickupPointMutation, useGetPickupPointQuery } from "../../all-products/allproductsApi/allProductsApi";


function PickupPoints() {

  const { isLoading, data } = useGetPickupPointQuery(window.localStorage.getItem('token'));

  const [deletePickupPoint, res] = useDeletePickupPointMutation();

  function deletePickUpPointData(id) {
    deletePickupPoint(id)
  };

  if (res.isSuccess === true) {
    alert("PickupPoint deleted Successfully")
  };


  return (
    <>
      <div className="aiz-main-content">
        <div className="px-15px px-lg-25px">
          <div className="aiz-titlebar text-left mt-2 mb-3">
            <div className="row align-items-center">
              <div className="col-md-6">
                <h1 className="h3">All Pick-up Points</h1>
              </div>
              <div className="col-md-6 text-md-right">
                <Link to="/admin/pick_up_points/create" className="btn btn-circle btn-info">
                  <span>Add New Pick-up Point</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header row gutters-5">
              <div className="col text-center text-md-left">
                <h5 className="mb-md-0 h6">Pickup Points</h5>
              </div>
              <div className="col-md-4">
                <form className="sort_pickup_points" >
                  <div className="input-group input-group-sm">
                    <input type="text" className="form-control" id="search" name="search" placeholder="Type name & Enter" />
                  </div>
                </form>
              </div>
            </div>
            <div className="card-body">

              {isLoading ? <h2>Loading...</h2>
                : <table className="table table-responsive aiz-table mb-0 footable footable-1 breakpoint breakpoint-lg" style={{}}>
                  <thead>
                    <tr className="footable-header">
                      <th width="10%" style={{ display: 'table-cell' }}>ID</th>
                      {/* <th width="20%" style={{ display: 'table-cell' }}>Avatar</th> */}
                      <th width="20%" style={{ display: 'table-cell' }}>Name</th>
                      <th style={{ display: 'table-cell' }}>Address</th>
                      <th style={{ display: 'table-cell' }}>Longitude</th>
                      <th style={{ display: 'table-cell' }}>Latitude</th>
                      <th style={{ display: 'table-cell' }}>Province</th>
                      <th style={{ display: 'table-cell' }}>Phone</th>
                      <th style={{ display: 'table-cell' }}>Email</th>
                      {/* <th style={{ display: 'table-cell' }}>Status</th> */}
                      <th width="20%" style={{ display: 'table-cell' }}>Pick Up Points Manager</th>
                      <th width="30%" style={{ display: 'table-cell' }}>Options</th>
                    </tr>
                  </thead>

                  <tbody>

                    {data && data.map((item, i) => {
                      return <tr className="footable-empty footableIcon " key={item._id}>
                        <td >{i + 1}</td>
                        {/* <td >
                          <img src={john} className="ferti" />
                        </td> */}
                        <td >{item.pickupPoint_name}</td>
                        <td >{item.address}</td>
                        <td >{item.location.long}</td>
                        <td >{item.location.lat}</td>
                        <td >{item.province}</td>
                        <td >{item.phone}</td>
                        <td >{item.email}</td>
                        {/* <td >{item.pickUpPointStatus}</td> */}
                        <td >{item.pickUpManagerSchema?.firstname} {item.pickUpManagerSchema?.lastname}</td>
                        <td >
                          <Link to={`edit/${item._id}`} className="btn btn-soft-primary btn-icon btn-circle btn-sm" title="Edit">
                            <i className="las la-edit" />
                          </Link>

                          <button type="button" onClick={() => { deletePickUpPointData(item._id) }} className="btn btn-soft-danger btn-icon btn-circle btn-sm">
                            <i className="las la-trash" />
                          </button>

                        </td>
                      </tr>
                    })}

                  </tbody>

                </table>
              }
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
export default PickupPoints