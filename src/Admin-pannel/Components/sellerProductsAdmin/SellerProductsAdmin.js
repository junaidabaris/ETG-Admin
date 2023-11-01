import { useEffect, useState } from "react";
import { useDeleteSellerProductMutation, useGetSellerProductQuery, useGetSellersQuery } from "../all-products/allproductsApi/allProductsApi"
import ToggleStatus from "../toggleStatus/ToggleStatus";

const EtgId = "64269f0df127906d53878d3d";
function SellerProductsAdmin() {
    const sellerid = window.localStorage.getItem('isSellerId')
    const sellerName = window.localStorage.getItem('isSellerName')
    const isSuperAdminLogin = window.localStorage.getItem('showMainadmin')



    const [idProduct, setIdProduct] = useState({ id: sellerid != 'null' ? sellerid : EtgId });

    // if (sellerid === null) {
    //     setIdProduct(EtgId)
    // } else {
    //     setIdProduct(sellerid)
    // }
    const [inputval, setInputVal] = useState({
        todays_deal: false,
        featured: false,
        published: false,
        approved: false
    });


    const changeStatus = (isStatus, key) => {
        const clonedInputVal = { ...inputval }
        clonedInputVal[key] = isStatus;
        setInputVal(clonedInputVal)
    };
    const [showDrop, setShowDrop] = useState(false)

    const { isLoading, data, isFetching } = useGetSellerProductQuery(idProduct.id || idProduct.sellerid);
    const { data: sellerData } = useGetSellersQuery(window.localStorage.getItem('token'))

    const [deleteSellerPro] = useDeleteSellerProductMutation()
    const deletePro = (id) => {
        deleteSellerPro(id)
    }

    const onchangeClick = (item) => {
        setIdProduct({ id: item._id, name: item.firstname + " " + item.lastname })
        setShowDrop(false)
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
                        </div>
                    </div>
                    <br />
                    {isFetching && <div className="preloaderCount">
                        <div className="spinner-border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>}
                    {isLoading && <div className="preloaderCount">
                        <div className="spinner-border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>}
                    <div className="card">
                        <form className id="sort_products" action method="GET">
                            <div className="card-header row gutters-5">
                                <div className="col">
                                    <h5 className="mb-md-0 h6">All Product</h5>
                                </div>
                                <div className="dropdown mb-2 mb-md-0">
                                    <button className="btn border dropdown-toggle" type="button" data-toggle="dropdown" fdprocessedid="r22pm">
                                        Bulk Action
                                    </button>
                                    <div className="dropdown-menu dropdown-menu-right">
                                        <a className="dropdown-item" href="#" onClick="bulk_delete()"> Delete selection</a>
                                    </div>
                                </div>
                                <div className="col-md-2 ml-auto">
                                    <div className="dropdown bootstrap-select form-control form-control-sm aiz- mb-2 mb-md-0">
                                        <select className="form-control form-control-sm aiz-selectpicker mb-2 mb-md-0" id="user_id" name="user_id" tabIndex={-98}>
                                            <option value>All Sellers</option>
                                            <option value={3}>
                                                Abaris Products (Abaris Seller)
                                            </option>
                                        </select>

                                        <button type="button" className="btn dropdown-toggle btn-light" onClick={() => { setShowDrop(!showDrop) }} data-toggle="dropdown" role="combobox" aria-owns="bs-select-1" aria-haspopup="listbox" aria-expanded="false" data-id="user_id" title="All Sellers" fdprocessedid="zskgyv">
                                            <div className="filter-option">
                                                <div className="filter-option-inner">
                                                    <div className="filter-option-inner-inner">{idProduct.name}</div>
                                                </div>
                                            </div>
                                        </button>

                                        <div className={`dropdown-menu ${showDrop && 'show'}`}>
                                            <div className="inner show" role="listbox" id="bs-select-1" tabIndex={-1} aria-activedescendant="bs-select-1-0" style={{ overflowY: 'auto' }}>
                                                <ul className="dropdown-menu inner show" role="presentation" style={{ marginTop: 0, marginBottom: 0 }}>
                                                    {sellerData?.length && sellerData?.map((item) => {
                                                        return <li key={item._id} className="selected" onClick={() => onchangeClick(item)}>
                                                            <a role="option" className="dropdown-item" id="bs-select-1-0" tabIndex={0} aria-setsize={2} aria-posinset={1} aria-selected="true">
                                                                <span className="text">{item?.firstname} {item.lastname}</span>
                                                            </a>
                                                        </li>
                                                    })}


                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-2 ml-auto">
                                    <div className="dropdown bootstrap-select form-control form-control-sm aiz- mb-2 mb-md-0"><select className="form-control form-control-sm aiz-selectpicker mb-2 mb-md-0" name="type" id="type" tabIndex={-98}>
                                        <option value>Sort by</option>
                                        <option value="rating,desc">Rating (High &gt; Low)</option>
                                        <option value="rating,asc">Rating (Low &gt; High)</option>
                                        <option value="num_of_sale,desc">Num of Sale (High &gt; Low)</option>
                                        <option value="num_of_sale,asc">Num of Sale (Low &gt; High)</option>
                                        <option value="unit_price,desc">Base Price (High &gt; Low)</option>
                                        <option value="unit_price,asc">Base Price (Low &gt; High)</option>
                                    </select><button type="button" className="btn dropdown-toggle btn-light" data-toggle="dropdown" role="combobox" aria-owns="bs-select-2" aria-haspopup="listbox" aria-expanded="false" data-id="type" title="Sort by" fdprocessedid="x2hoj4"><div className="filter-option"><div className="filter-option-inner"><div className="filter-option-inner-inner">Sort by</div></div> </div></button><div className="dropdown-menu " style={{ maxHeight: 196, overflow: 'hidden' }}><div className="inner show" role="listbox" id="bs-select-2" tabIndex={-1} aria-activedescendant="bs-select-2-0" style={{ maxHeight: 180, overflowY: 'auto' }}><ul className="dropdown-menu inner show" role="presentation" style={{ marginTop: 0, marginBottom: 0 }}><li className="selected active"><a role="option" className="dropdown-item active selected" id="bs-select-2-0" tabIndex={0} aria-setsize={7} aria-posinset={1} aria-selected="true"><span className="text">Sort by</span></a></li><li><a role="option" className="dropdown-item" id="bs-select-2-1" tabIndex={0}><span className="text">Rating (High &gt; Low)</span></a></li><li><a role="option" className="dropdown-item" id="bs-select-2-2" tabIndex={0}><span className="text">Rating (Low &gt; High)</span></a></li><li><a role="option" className="dropdown-item" id="bs-select-2-3" tabIndex={0}><span className="text">Num of Sale (High &gt; Low)</span></a></li><li><a role="option" className="dropdown-item" id="bs-select-2-4" tabIndex={0}><span className="text">Num of Sale (Low &gt; High)</span></a></li><li><a role="option" className="dropdown-item" id="bs-select-2-5" tabIndex={0}><span className="text">Base Price (High &gt; Low)</span></a></li><li><a role="option" className="dropdown-item" id="bs-select-2-6" tabIndex={0}><span className="text">Base Price (Low &gt; High)</span></a></li></ul></div></div></div>
                                </div>
                                <div className="col-md-2">
                                    <div className="form-group mb-0">
                                        <input type="text" className="form-control form-control-sm" id="search" name="search" placeholder="Search" fdprocessedid="rzjgwf" />
                                    </div>
                                </div>
                            </div>
                            <div className="card-body">

                                {isLoading ? <h2>Loading...</h2>
                                    : <table className="table aiz-table mb-0 footable footable-1 breakpoint-xl" style={{}}>
                                        <thead>
                                            <tr className="footable-header">
                                                <th className="footable-first-visible" style={{ display: 'table-cell' }}>
                                                    <div className="form-group">
                                                        <div className="aiz-checkbox-inline">
                                                            <label className="aiz-checkbox">
                                                                <input type="checkbox" className="check-all" />
                                                                <span className="aiz-square-check" />
                                                            </label>
                                                        </div>
                                                    </div>
                                                </th>
                                                <th style={{ display: 'table-cell' }}>Name</th>
                                                <th data-breakpoints="md" style={{ display: 'table-cell' }}>Added By</th>
                                                <th data-breakpoints="sm" style={{ display: 'table-cell' }}>Info</th>
                                                <th data-breakpoints="md" style={{ display: 'table-cell' }}>Total Stock</th>
                                                <th data-breakpoints="lg" style={{ display: 'table-cell' }}>Todays Deal</th>
                                                <th data-breakpoints="lg" style={{ display: 'table-cell' }}>Published</th>
                                                <th data-breakpoints="lg" style={{ display: 'table-cell' }}>Approved</th>
                                                <th data-breakpoints="lg" style={{ display: 'table-cell' }}>Featured</th>
                                                <th data-breakpoints="sm" className="text-right footable-last-visible" style={{ display: 'table-cell' }}>Options</th>
                                            </tr>
                                        </thead>
                                        <tbody>


                                            {data && data?.getallProduct?.map((item, i) => {
                                                console.log('sellernameitem--', item)
                                                return <tr key={i}>
                                                    <td className="footable-first-visible" style={{ display: 'table-cell' }}>
                                                        <div className="form-group d-inline-block">
                                                            <label className="aiz-checkbox">
                                                                <input type="checkbox" className="check-one" name="id[]" defaultValue={75} />
                                                                <span className="aiz-square-check" />
                                                            </label>
                                                        </div>
                                                    </td>
                                                    <td style={{ display: 'table-cell' }}>
                                                        <div className="row gutters-5 w-200px w-md-300px mw-100">
                                                            <div className="col-auto">
                                                                <img src="https://mmslfashions.in/public/uploads/all/Wiv7vhbeLmejHSA4L7NNWgfAqundcpdd76tW7OiY.jpg" alt="Image" className="size-50px img-fit" />
                                                            </div>
                                                            <div className="col">
                                                                <span className="text-muted text-truncate-2"><strong>{item?.name}</strong></span>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td style={{ display: 'table-cell' }}>{item.seller_id?.firstname + " " +item.seller_id?.lastname}</td>

                                                    <td style={{ display: 'table-cell' }}>
                                                        <strong>Num of Sale:</strong>sdsds<br />
                                                        <strong>Base Price:</strong>-------<br />
                                                        <strong>Rating:</strong>------<br />
                                                    </td>
                                                    <td style={{ display: 'table-cell' }}>
                                                        {/* {item.variations.current_qty} */}99
                                                    </td>
                                                    <td style={{ display: 'table-cell' }}>
                                                        <ToggleStatus name="todays_deal" isStatus={item.todays_deal} changeStatus={changeStatus} />
                                                    </td>
                                                    <td style={{ display: 'table-cell' }}>
                                                        <ToggleStatus name="published" isStatus={inputval.published} changeStatus={changeStatus} />
                                                    </td>
                                                    <td style={{ display: 'table-cell' }}>
                                                        <ToggleStatus name="approved" isStatus={inputval.approved} changeStatus={changeStatus} />
                                                    </td>
                                                    <td style={{ display: 'table-cell' }}>
                                                        <ToggleStatus name="featured" isStatus={inputval.featured} changeStatus={changeStatus} />
                                                    </td>
                                                    <td className="text-right footable-last-visible" style={{ display: 'table-cell' }}>
                                                        <a className="btn btn-soft-success btn-icon btn-circle btn-sm" href="#" target="_blank" title="View">
                                                            <i className="las la-eye" />
                                                        </a>
                                                        <a className="btn btn-soft-primary btn-icon btn-circle btn-sm" href="#" title="Edit">
                                                            <i className="las la-edit" />
                                                        </a>
                                                        <button type="button" onClick={() => { deletePro(item._id) }} className="btn btn-soft-danger btn-icon btn-circle btn-sm">
                                                            <i className="las la-trash"></i>
                                                        </button>

                                                    </td>
                                                </tr>
                                            })}

                                        </tbody>
                                        {data?.length === 0 && <h3>No Product</h3>}
                                    </table>
                                }

                                <div className="aiz-pagination">
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="bg-white text-center py-3 px-15px px-lg-25px mt-auto">
                </div>
            </div>

        </>
    )
}
export default SellerProductsAdmin;