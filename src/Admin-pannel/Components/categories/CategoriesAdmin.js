import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useCatagaryActiveMutation, useDeleteCategoryMutation, useGetCategoriesQuery } from "../all-products/allproductsApi/allProductsApi";
import { ToastContainer, toast } from "react-toastify";
function CategoriesAdmin() {
  const [inputVal, setInputVal] = useState({ search: '' });
  const [blankArr, setBlankArr] = useState([]);

  const token = window.localStorage.getItem('token')
  const { isLoading, data ,refetch } = useGetCategoriesQuery(token);

  const onChangeHandler = (e) => {
    const inpVal = e.target.value;
    setInputVal(inpVal)
  };

  const searchData = () => {
    const filteredData = data && data.filter((item) => {
      if (!item.name) {
        return
      }
      if (item.name.includes(inputVal)) {
        return item
      }
    });
    setBlankArr(filteredData)
  };

  useEffect(() => {
    setBlankArr(data)
  }, [data])

  const [deleteCategory, res] = useDeleteCategoryMutation();

  function deleteCategoryData(id) {
    deleteCategory({id,token})
  };

  useEffect(() => {
    if (res.isSuccess == true) {
      alert('Category deleted successfully')
      refetch()
    }
  }, [res.isSuccess])


  const [updateCat, { isSuccess, isError }] = useCatagaryActiveMutation()
  const changeStatus = (item) => {
    const obj = { id: item._id, data: { approve: !item.approve } }
    updateCat(obj)
  }


  const toastSuccessMessage = () => {
    toast.success("Categorie Updated Successfully", {
      position: "top-center"
    })
  };

  const toastErrorMessage = () => {
    toast.error("Categorie Update Faild..", {
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
            <div className="row align-items-center">
              <div className="col-md-6">
                <h1 className="h3">All categories</h1>
              </div>
              <div className="col-md-6 text-md-right">
                <Link to="create" className="btn btn-primary">
                  <span>Add New category</span>
                </Link>
              </div>

            </div>
          </div>
          <div className="card">
            <ToastContainer />
            <div className="card-header d-block d-md-flex">
              <h5 className="mb-0 h6">Categories</h5>
              <button className="btn btn-primary">Fetch AI Content</button>
              <form >
                <div className="box-inline pad-rgt pull-left">
                  <div style={{ minWidth: 200 }} className="d-flex">
                    <input type="text" className="form-control" id="search" name="search" placeholder="Type" fdprocessedid="rlhs3j" onChange={onChangeHandler} />
                    <button type="button" onClick={searchData} className="btn btn-primary" style={{ padding: "0 10px" }}>Search</button>
                  </div>
                </div>
              </form>
            </div>
            <div className="card-body">

              {isLoading ? <h2>Loading...</h2>
                : <table className="table aiz-table mb-0 footable footable-1 breakpoint-xl" style={{}}>
                  <thead>
                    <tr className="footable-header">
                      <th data-breakpoints="lg" className="footable-first-visible" style={{ display: 'table-cell' }}>#</th>
                      <th style={{ display: 'table-cell' }}>Ctegory Name</th>
                      <th data-breakpoints="lg" style={{ display: 'table-cell' }}>Parent Category</th>
                      <th data-breakpoints="lg" style={{ display: 'table-cell' }}>Order Level</th>
                      <th data-breakpoints="lg" style={{ display: 'table-cell' }}>Level</th>
                      <th data-breakpoints="lg" style={{ display: 'table-cell' }}>Block</th>
                      <th data-breakpoints="lg" style={{ display: 'table-cell' }}>Banner</th>
                      <th data-breakpoints="lg" style={{ display: 'table-cell' }}>Icon</th>
                      <th data-breakpoints="lg" style={{ display: 'table-cell' }}>Featured</th>
                      <th data-breakpoints="lg" style={{ display: 'table-cell' }}>Commission</th>
                      <th width="10%" className="text-right footable-last-visible" style={{ display: 'table-cell' }}>Options</th>
                    </tr>
                  </thead>
                  <tbody>

                    {blankArr && blankArr.map((item, i) => {
                      return <tr key={item._id}>
                        <td className="footable-first-visible" style={{ display: 'table-cell' }}>{i + 1}</td>
                        <td style={{ display: 'table-cell' }}>{item.name}</td>
                        <td style={{ display: 'table-cell' }}>{item.parent_id && (item.parent_id.name)}</td>
                        <td style={{ display: 'table-cell' }}>{item.order_level}</td>
                        <td style={{ display: 'table-cell' }}>{item.level}</td>

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

                        <td style={{ display: 'table-cell' }}>
                          <img src="https://mmslfashions.in/public/uploads/all/0fszFBvsXqbAUVAsKTXrOAVHBnuvUvHsVeWjuqji.png" alt="Banner" className="h-50px" />
                        </td>
                        <td style={{ display: 'table-cell' }}>
                          <span className="avatar avatar-square avatar-xs">
                            <img src="https://mmslfashions.in/public/uploads/all/qWtVvdVrkexRR41VVaNV6W7yzjMGUVrD3HqfnYNA.png" alt="Icon" />
                          </span>
                        </td>
                        <td style={{ display: 'table-cell' }}>
                          <label className="aiz-switch aiz-switch-success mb-0">
                            <input type="checkbox" defaultValue={1} defaultChecked />
                            <span />
                          </label>
                        </td>
                        <td style={{ display: 'table-cell' }}>{item.commision_rate}</td>

                        <td className="text-right footable-last-visible" style={{ display: 'table-cell' }}>
                          <Link to={`edit/${item.uid}`} className="btn btn-soft-primary btn-icon btn-circle btn-sm" title="Edit">
                            <i className="las la-edit" />
                          </Link>
                          <button type="button" onClick={() => { deleteCategoryData(item?.uid) }} className="btn btn-soft-danger btn-icon btn-circle btn-sm ms-1">
                            <i className="las la-trash" />
                          </button>
                        </td>

                      </tr>
                    })}
                  </tbody>
                </table>
              }

              <div className="aiz-pagination">
                <nav>
                  <ul className="pagination">
                    <li className="page-item disabled" aria-label="« Previous">
                      <span className="page-link" >‹</span>
                    </li>
                    <li className="page-item active" aria-current="page"><span className="page-link">1</span></li>
                    <li className="page-item"><Link className="page-link" to="#">2</Link></li>
                    <li className="page-item">
                      <Link className="page-link" to="#" rel="next" aria-label="Next »">›</Link>
                    </li>
                  </ul>
                </nav>
              </div>

            </div>
          </div>
        </div>
        <div className="bg-white text-center py-3 px-15px px-lg-25px mt-auto">
          {/*p class="mb-0">&copy;  v6.3.3</p*/}
        </div>
      </div>

    </>
  )
}
export default CategoriesAdmin;