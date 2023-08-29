// import { SlideshowLightbox } from "lightbox.js-react";
import { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate, useParams } from "react-router-dom";

import { useDeleteProductMutation, useGetAllProductsQuery, useGetCategoriesQuery, useProductActiveMutation } from "./allproductsApi/allProductsApi";
import { ToastContainer, toast } from "react-toastify";
import { BsFillPrinterFill } from 'react-icons/bs';
import axios from 'axios';



function AllProducts() {
  const [inputVal, setInputVal] = useState('');
  const { data, isLoading } = useGetAllProductsQuery()
  const [bArr, setBArr] = useState([]);
  const params = useParams()


  useEffect(() => {
    setBArr(data)
  }, [data])

  const onChangeHandler = (e) => {
    const inpVal = e.target.value
    setInputVal(inpVal)
  }
  const searchData = () => {
    const filteredData = data?.filter((item) => {
      if (!item.name) {
        return
      }
      if (item.name.includes(inputVal)) {
        return item
      }
    })
    setBArr(filteredData)
  }
  const [deleteData, response] = useDeleteProductMutation();

  function deleteProductData(id) {
    deleteData(id)
  };

  useEffect(() => {
    if (response.isSuccess === true) {
      alert("Product deleted Successfully")
    };
  }, [response.isSuccess])


  const [updatePro, { isSuccess, isError }] = useProductActiveMutation()
  const changeStatus = (item) => {
    const obj = { id: item._id, data: { approve: !item.approve } }
    updatePro(obj)
  }

  const toastSuccessMessage = () => {
    toast.success("Product Updated Successfully", {
      position: "top-center"
    })
  };

  const toastErrorMessage = () => {
    toast.error("Product Update Faild..", {
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

  const navigate = useNavigate()
  const changeRouting = (id) => {
    navigate(`print_barcodes/${id}`)
  }


  return (
    <>
      <div className="aiz-main-content">
        <div className="px-15px px-lg-25px">
          <div className="aiz-titlebar text-left mt-2 mb-3">
            <div className="row align-items-center">
              <div className="col-auto">
                <h1 className="h3">All products</h1>
              </div>
              <ToastContainer />
              <div className="col text-right">
                <Link to="/admin/products/all/products/create" className="btn btn-circle btn-info">
                  <span>Add New Product</span>
                </Link>
              </div>
            </div>
          </div>
          <br />

          {isLoading ? <h2>Loading...</h2>
            : <div className="card">
              <form id="sort_products">
                <div className="card-header row gutters-5">
                  <div className="col-md-4">
                    <h5 className="mb-md-0 h6">All Product</h5>
                  </div>
                  <div className="col-md-2 dropdown mb-2 mb-md-0">
                    <button className="btn border dropdown-toggle " id="btn-drop" type="button" data-toggle="dropdown">
                      Bulk Action
                    </button>
                    <div className="dropdown-menu dropdown-menu-right">
                      <a className="dropdown-item" href="#" > Delete selection</a>
                    </div>
                  </div>
                  <div className="col-md-2 ml-auto">
                    <div>
                      <Form.Select aria-label="Default select example" className="form-control form-control-sm aiz-selectpicker mb-2 mb-md-0" >
                        <option>All Sellers</option>
                        <option >Abaris Seller</option>
                        <option >superadmin</option>
                      </Form.Select>
                    </div>
                  </div>
                  <div className="col-md-2">
                    <div className="form-group mb-0 d-flex">
                      <input type="text" className="form-control form-control-sm" id="search" name="search" placeholder="Type" onChange={onChangeHandler} />
                      <button type='button' className='btn btn-primary ms-1' style={{ padding: '0 10px' }} onClick={searchData}>Search</button>
                    </div>
                  </div>
                </div>
                <div className="card-body" style={{ overflowX: "auto" }}>

                  <table className="table aiz-table mb-0 footable footable-1 breakpoint breakpoint-lg">
                    <thead>
                      <tr className="footable-header">
                        <th className="footable-first-visible" style={{ display: 'table-cell' }}># </th>
                        <th style={{ display: 'table-cell' }}>Product</th>
                        <th style={{ display: 'table-cell' }}>Category</th>
                        <th style={{ display: 'table-cell' }}>Brand</th>
                        <th style={{ display: 'table-cell' }}>Seller</th>
                        <th style={{ display: 'table-cell' }}>Block</th>
                        <th data-breakpoints="lg" style={{ display: 'none' }}>Added By</th>
                        <th data-breakpoints="sm" style={{ display: 'table-cell' }}>Info</th>
                        {/* <th data-breakpoints="md" style={{ display: 'none' }}>Total Stock</th> */}
                        <th data-breakpoints="lg" style={{ display: 'none' }}>Todays Deal</th>
                        <th data-breakpoints="lg" style={{ display: 'none' }}>Published</th>
                        <th data-breakpoints="lg" style={{ display: 'none' }}>Featured</th>
                        <th data-breakpoints="sm" className="text-right footable-last-visible" style={{ display: 'table-cell' }}>Options</th>
                      </tr>
                    </thead>
                    <tbody>

                      {bArr?.map((item, i) => {
                        return <tr key={i}>
                          <td className="footable-first-visible" style={{ display: 'table-cell' }}>
                            {i + 1}
                          </td>
                          <td style={{ display: 'table-cell' }}>
                            <div className="row gutters-5 w-200px w-md-300px mw-100">
                              <div className="col-auto w-50 ">
                                {item?.variations[0]?.mainImage_url?.url ? <img src={item?.variations[0]?.mainImage_url?.url} alt="Image" className="img-fluid" /> : <img src="https://reactfront.mmslfashions.in/uploads/products/main/images/chlor.jpg" alt="Image" className="img-fluid" />}
                              </div>
                              <div className="col">
                                <span className="text-muted text-truncate-2" style={{fontSize:"18px",marginBottom:"10px"}}>{item.name}</span>
                                <div>
                                 <span>Mrp : Rs {item?.variations[0]?.mrp}</span>,<br/>
                                 <span>Sale : Rate Rs  {item?.variations[0]?.sale_rate}</span>,<br/>
                                 <span>Discount : Rs {item?.variations[0]?.discount}</span>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td style={{ display: 'table-cell' }}>
                            {item.category_id && item.category_id?.map((catItem, i) => {
                             return <span>{catItem.meta_title}</span>
                            })}
                          </td>

                          <td style={{ display: 'table-cell' }}>
                            {item.brand_id && item.brand_id.name}

                          </td>
                          <td style={{ display: 'table-cell' }}>
                            {item.seller_id && item.seller_id?.firstname + " " + item.seller_id && item.seller_id?.lastname}

                          </td>

                          <td style={{ display: "table-cell" }}>
                            <label className="aiz-switch aiz-switch-success mb-0">
                              <input
                                onChange={() => { changeStatus(item) }}
                                type="checkbox"
                                checked={item?.approve}
                              />
                              <span className="slider round" />
                            </label>
                          </td>


                          <td style={{ display: 'table-cell' }}>
                            <strong>Num of Sale:</strong> 0 Times <br />
                            <strong>Base Price:</strong>{item.unit_price}<br />
                            <strong>Rating:</strong> 0 <br />
                          </td>
                          {/* <td style={{ display: 'table-cell' }}>10</td> */}
                          <td style={{ display: 'none' }}>
                            <label className="aiz-switch aiz-switch-success mb-0">
                              <input defaultValue={73} type="checkbox" />
                              <span className="slider round" />
                            </label>
                          </td>
                          <td style={{ display: 'none' }}>
                            <label className="aiz-switch aiz-switch-success mb-0">
                              <input defaultValue={73} type="checkbox" defaultChecked />
                              <span className="slider round" />
                            </label>
                          </td>
                          <td style={{ display: 'none' }}>
                            <label className="aiz-switch aiz-switch-success mb-0">
                              <input defaultValue={73} type="checkbox" />
                              <span className="slider round" />
                            </label>
                          </td>
                          <td className="text-right footable-last-visible" style={{ display: 'table-cell', whiteSpace: 'nowrap' }}>
                            <Link to="#" className="btn btn-soft-success btn-icon btn-circle btn-sm" title="View">
                              <i className="las la-eye" />
                            </Link>
                            <Link to={`edit/${item._id}`} className="btn btn-soft-primary btn-icon btn-circle btn-sm" title="Edit">
                              <i className="las la-edit" />
                            </Link>
                            {/* <a className="btn btn-soft-warning btn-icon btn-circle btn-sm" href="https://mmslfashions.in/admin/products/duplicate/73?type=All" title="Duplicate">
                              <i className="las la-copy" />
                            </a> */}

                            <button type="button" onClick={() => { deleteProductData(item._id) }} className="btn btn-soft-danger btn-icon btn-circle btn-sm">
                              <i className="las la-trash" />
                            </button>

                            <BsFillPrinterFill onClick={() => { changeRouting(item._id) }} className="btn btn-soft-primary btn-icon btn-circle btn-sm" />

                          </td>
                        </tr>
                      })}
                    </tbody>
                  </table>

                  {/* <div className="aiz-pagination">
                    <nav>
                      <ul className="pagination">
                        <li className="page-item disabled" aria-label="« Previous">
                          <span className="page-link" >‹</span>
                        </li>
                        <li className="page-item active" aria-current="page">
                          <span className="page-link">1</span>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="https://mmslfashions.in/admin/products/all?page=2">2</a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="https://mmslfashions.in/admin/products/all?page=3">3</a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="https://mmslfashions.in/admin/products/all?page=4">4</a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="https://mmslfashions.in/admin/products/all?page=5">5</a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="https://mmslfashions.in/admin/products/all?page=2" rel="next" aria-label="Next »">›</a>
                        </li>
                      </ul>
                    </nav>
                  </div> */}

                </div>
              </form>
            </div>
          }

          {/* {error && <h2>Error</h2>} */}

        </div>
        <div className="bg-white text-center py-3 px-15px px-lg-25px mt-auto"></div>
      </div>
    </>
  )
}
export default AllProducts;