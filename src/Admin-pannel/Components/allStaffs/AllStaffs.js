import { Link } from "react-router-dom";
import { useDeleteStaffMutation, useGetAllStaffsQuery } from "../all-products/allproductsApi/allProductsApi";

function AllStaffs() {
  const token = window.localStorage.getItem('token')

  const { isLoading, data } = useGetAllStaffsQuery(token);

  const [deleteStaffD, response] = useDeleteStaffMutation();

  const deleteStaffData = (id) => {
    deleteStaffD(id)
  };

  if (response.isSuccess === true) {
    alert('Staff deleted Successfully')
  }

  return (
    <>
      <div className="aiz-main-content">
        <div className="px-15px px-lg-25px">
          <div className="aiz-titlebar text-left mt-2 mb-3">
            <div className="row align-items-center">
              <div className="col-md-6">
                <h1 className="h3">All Staffs</h1>
              </div>
              <div className="col-md-6 text-md-right">
                <Link to="/admin/staffs/create" className="btn btn-circle btn-info">
                  <span>Add New Staff</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header">
              <h5 className="mb-0 h6">Staffs</h5>
            </div>
            <div className="card-body">
              {isLoading ? <h2>Loading...</h2>
                : <table className="table aiz-table footable footable-1 breakpoint-lg" style={{}}>
                  <thead>
                    <tr className="footable-header">
                      <th width="10%" style={{ display: 'table-cell' }}>ID</th>
                      {/* <th width="30%" style={{ display: 'table-cell' }}>Firs tName</th> */}
                      <th style={{ display: 'table-cell' }}>First Name</th>
                      <th style={{ display: 'table-cell' }}>Last Name</th>
                      <th style={{ display: 'table-cell' }}>Email</th>
                      <th style={{ display: 'table-cell' }}>Phone</th>
                      <th style={{ display: 'table-cell' }}>Role</th>
                      <th width="10%" style={{ display: 'table-cell' }}>Options</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data && data.map((item, i) => {
                      return <tr className="footable-empty footableIcon" key={item._id}>
                        <td >{item._id}</td>
                        {/* <td >
                          <img src={fertilizer} className="ferti" />
                        </td> */}
                        <td >{item.firstname}</td>
                        <td >{item.lastname}</td>
                        <td >{item.email}</td>
                        <td >{item.mobile}</td>
                        <td >{item.role_id?.role_name}</td>

                        <td className="text-right footable-last-visible" style={{ display: 'table-cell' }}>

                          <Link to={`edit/${item._id}`} className="btn btn-soft-primary btn-icon btn-circle btn-sm" title="Edit">
                            <i className="las la-edit" />
                          </Link>

                          <button type="button" onClick={() => deleteStaffData(item._id)} className="btn btn-soft-danger btn-icon btn-circle btn-sm">
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
export default AllStaffs;