import { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useCustomerActiveMutation, useDeleteCustomerMutation, useGetCustomersQuery } from "../all-products/allproductsApi/allProductsApi";
import { ToastContainer, toast } from "react-toastify";
import { token } from "../../common/TokenArea";
function CustomerList() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { isLoading, data } = useGetCustomersQuery(token);

  const [deleteCustomer, response] = useDeleteCustomerMutation();

  const deleteCustomerData = (id) => {
    deleteCustomer({ id: id, token: token })
  };

  useEffect(() => {
    if (response.isSuccess === true) {
      alert('customer successfully deleted')
    }
  }, [response.isSuccess])


  const [updateCustomer, { isSuccess, isError }] = useCustomerActiveMutation()
  const changeStatus = (item) => {
    const obj = { id: item._id, data: { approve: !item.approve } }
    updateCustomer(obj)
  }


  const toastSuccessMessage = () => {
    toast.success("Customer Updated Successfully", {
      position: "top-center"
    })
  };

  const toastErrorMessage = () => {
    toast.error("Customer Update Faild..", {
      position: "top-center"
    })
  };

  useEffect(() => {
    if (isSuccess === true) {
      toastSuccessMessage()
    };
  }, [isSuccess]);

  useEffect(() => {
    if (isError === true) {
      toastErrorMessage()
    };
  }, [isError])


  return (
    <>
      <div className="aiz-main-content">
        <div className="px-15px px-lg-25px">
          <div className="aiz-titlebar text-left mt-2 mb-3">
            <div className="align-items-center">
              <h1 className="h3">All Customers</h1>
            </div>
          </div>
          <div className="card">
            <ToastContainer />
            <form>
              <div className="card-header row gutters-5">
                <div className="col">
                  <h5 className="mb-0 h6">Customers</h5>
                </div>
                <div className="dropdown col-lg-2 mb-2 mb-md-0">
                  <select
                    className="form-select"
                    aria-label="Default select example"
                  >
                    <option>Bulk Action</option>
                    <option value="1">Delete Selection</option>
                  </select>
                  {/* <button className="btn border dropdown-toggle" type="button" data-toggle="dropdown" fdprocessedid="qpcfyk" aria-expanded="false">
              Bulk Action
            </button>
            <div className="dropdown-menu dropdown-menu-right" style={{}}>
              <a className="dropdown-item" href="#" onclick="bulk_delete()">Delete selection</a>
            </div> */}
                </div>
                <div className="col-md-3">
                  <div className="form-group mb-0">
                    <input type="text" className="form-control" id="search" name="search" placeholder="Search" fdprocessedid="vzj9y" />
                  </div>
                </div>
              </div>
              <div className="card-body">

                {isLoading ? <h2>Loading...</h2>

                  : <table className="table aiz-table mb-0 footable footable-1 breakpoint-xl" style={{}}>
                    <thead>
                      <tr className="footable-header">
                        <th style={{ display: 'table-cell' }}>#</th>
                        <th style={{ display: 'table-cell' }}>First Name</th>
                        <th style={{ display: 'table-cell' }}>Last Name</th>
                        <th data-breakpoints="lg" style={{ display: 'table-cell' }}>Email Address</th>
                        <th data-breakpoints="lg" style={{ display: 'table-cell' }}>Phone</th>
                        <th data-breakpoints="lg" style={{ display: 'table-cell' }}>Block</th>
                        <th data-breakpoints="lg" style={{ display: 'table-cell' }}>Package</th>
                        <th data-breakpoints="lg" style={{ display: 'table-cell' }}>Wallet Balance</th>
                        <th className="text-right footable-last-visible" style={{ display: 'table-cell' }}>Options</th>
                      </tr>
                    </thead>
                    <tbody>

                      {data && data.map((item, i) => {
                        return <tr key={item._id}>
                          <td style={{ display: 'table-cell' }}>{i + 1}</td>
                          <td style={{ display: 'table-cell' }}>{item.firstname}</td>
                          <td style={{ display: 'table-cell' }}>{item.lastname}</td>
                          <td style={{ display: 'table-cell' }}>{item.email}</td>
                          <td style={{ display: 'table-cell' }} >{item.mobile}</td>

                          <td style={{ display: "table-cell" }}>
                            <label className="aiz-switch aiz-switch-success mb-0">
                              <input
                                onChange={() => { changeStatus(item) }}
                                type="checkbox"
                                checked={item.approve}
                              />
                              <span className="slider round" />
                            </label>
                          </td>

                          <td style={{ display: 'table-cell' }}>-</td>
                          <td style={{ display: 'table-cell' }}>-</td>
                          <td className="text-right footable-last-visible" style={{ display: 'table-cell' }}>
                            <Link to={`edit/${item._id}`} className="btn btn-soft-primary btn-icon btn-circle btn-sm" title="Log in as this Customer">
                              <i className="las la-edit" />
                            </Link>
                            <Link to="#" className="btn btn-soft-danger btn-icon btn-circle btn-sm" title="Ban this Customer">
                              <i className="las la-user-slash" />
                            </Link>
                            <button type="button" onClick={() => deleteCustomerData(item._id)} className="btn btn-soft-danger btn-icon btn-circle btn-sm">
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
            </form>
          </div>
          <div className="modal fade" id="confirm-ban" style={{ zIndex: 1040, display: 'none' }} >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title h6">Confirmation</h5>
                  <button type="button" className="close" data-dismiss="modal" />
                </div>
                <div className="modal-body">
                  <p>Do you really want to ban this Customer?</p>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-light" data-dismiss="modal">Cancel</button>
                  <a type="button" id="confirmation" className="btn btn-primary" href="#">Proceed!</a>
                </div>
              </div>
            </div>
          </div>
          <div className="modal fade" id="confirm-unban">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title h6">Confirmation</h5>
                  <button type="button" className="close" data-dismiss="modal" />
                </div>
                <div className="modal-body">
                  <p>Do you really want to unban this Customer?</p>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-light" data-dismiss="modal">Cancel</button>
                  <a type="button" id="confirmationunban" className="btn btn-primary">Proceed!</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white text-center py-3 px-15px px-lg-25px mt-auto">
          {/*p class="mb-0">&copy;  v6.3.3</p*/}
        </div>
        <Modal dialogClassName="moddle-customer" show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Confirmation</Modal.Title>
          </Modal.Header>
          <Modal.Body>Do you really want to ban this Customer?</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="success" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>

    </>
  )
}
export default CustomerList