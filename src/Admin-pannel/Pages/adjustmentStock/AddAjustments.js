import React, { useEffect, useState } from 'react'
import { RxCross1 } from 'react-icons/rx'
import { useAddPurchaseCartMutation, useDeleteCartRowMutation, useGetPickupPointQuery, useGetProductSearchQuery } from '../../Components/all-products/allproductsApi/allProductsApi'
import GenerateStock from '../transfersStock/GenerateStock'
import { token } from '../../common/TokenArea'

function AddAdjustments() {
    const [show, setShow] = useState(false)
    const [searchs, setSearch] = useState('')
    const { data: searchPro } = useGetProductSearchQuery({ token: token , paylode: searchs })

    const { data: pickUp } = useGetPickupPointQuery();

    const [details, setDetails] = useState() // for test object
    const handleInputChange = (e) => {
        const inpVal = e.target.value
        const inpName = e.target.name
        const clone = { ...details }
        clone[inpName] = inpVal
        setDetails(clone)
    }

    const [setCart, { isLoading, data: cartData, isError: isCartsError, isSuccess: isCartssuss }] = useAddPurchaseCartMutation()

    const [showData, setShowData] = useState([])
    useEffect(() => {
        if (isCartssuss) {
            setShowData(cartData)
        }
    }, [isCartssuss])
    const [finalCatD, setFinalCatD] = useState(['6412fbf218fa66a37ed430d3']);
    const setTableItem = async (item) => {
        const obj = { purchase: showData, pickupPoints: finalCatD }
        setCart({ id: item._id, data: obj })
        setShow(false)
    }
    const [deleteRow, { isSuccess: deleteRows, data: resData }] = useDeleteCartRowMutation()

    useEffect(() => {
        if (deleteRows) {
            setShowData(resData)
        }
    }, [deleteRows])

    const DeleteRow = (index) => {
        deleteRow({ index: index, data: { purchase: showData } })
    }
    const handleInputSearch = (e) => {
        if (e.key === 'Enter') {
            const clone = e.target.value
            setSearch(clone);
            setShow(true)
        }
    }
    const sendData = () => {
        showData.map((value) => {
            console.log(value);
            console.log(value.product_id);
            console.log(value.qty);
            console.log(value.variant_id);
        })
    }
    return <div className="aiz-main-content" style={{ width: "1400px", margin: "auto" }}>
        <div className="px-15px px-lg-25px">
            <div className="row">

                <div className="card">
                    <div className="card-header d-block">
                        <h5 className="fw-600 mb-0">Add Adjustment</h5>
                        <div style={{ margin: "10px 0" }} className="fw-600 mb-0">Please fill in the information below. The field labels marked with * are required input fields.</div>
                    </div>
                </div>

                <div className="card">
                    <div className="container">
                        <div className="row mainaddStc">
                            <div className="col-4">
                                <label for="basic-url" class="form-label">Date</label>
                                <input type="date" name="date" onChange={handleInputChange} className="form-control" />
                            </div>
                            <div className="col-4">
                                <label for="basic-url" class="form-label">Reference No</label>
                                <input type="text" name="referenceNo" onChange={handleInputChange} className="form-control" />
                            </div>

                            <div className="col-4">
                                <label for="basic-url" class="form-label">Warehouse*</label>
                                <select className="form-select" name="TopickupPoints" onChange={handleInputChange} aria-label="Default select example">
                                    <option selected>Open</option>
                                    {pickUp && pickUp.map((item) => {
                                        return <option value={item._id}>{item?.pickupPoint_name}</option>
                                    })}
                                </select>
                            </div>
                            <div className="col-4">
                                <label for="basic-url" class="form-label">Attach Document</label>
                                <input type="file" name="filePath" onChange={handleInputChange} className="form-control" />
                            </div>
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col">
                                        <div>
                                            <label>Products *</label>
                                            <input className="form-control" onKeyDown={handleInputSearch} placeholder="Please add products to order list" />
                                            {show && searchPro?.getSearchedProduct?.length > 0 && <div className="showList">
                                                <div style={{ fontSize: "19px" }} onClick={() => { setShow(false) }}><RxCross1 /></div>
                                                {searchPro?.getSearchedProduct.map((item) => {
                                                    return <h6 key={item._id} style={{ cursor: "pointer" }} onClick={() => setTableItem(item)}>{item.name}</h6>
                                                })}
                                            </div>}
                                        </div>
                                    </div>
                                </div>

                            </div>


                            <div className="container-fluid">
                                <div className="card-header" style={{ padding: "0", marginTop: "10px" }}>
                                    <h4 className="mb-0">Variant SKU Wise Add Quantity</h4>
                                </div>
                                <div className="card mt-2 rest-part col-lg-12">
                                    <div className="card-body">
                                        <div className="row align-items-end">
                                            <div className="col-12 sku_combination table-responsive form-group" id="sku_combination">
                                                <table className="table table-bordered physical_product_show">
                                                    <thead>
                                                        <tr>
                                                            <td><label className="control-label">#</label></td>
                                                            <td><label className="control-label">Product Name</label></td>
                                                            <td><label className="control-label">Variant</label></td>
                                                            <td><label className="control-label">SKU</label></td>
                                                            <td><label className="control-label">Quantity</label></td>
                                                        </tr>

                                                    </thead>

                                                    <tbody>
                                                        {showData && showData.map((item, i) => {
                                                            return <GenerateStock item={item} i={i} showData={showData} setShowData={setShowData} DeleteRow={DeleteRow} />
                                                        })}
                                                    </tbody>

                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <button style={{ margin: "10px 0" }} onClick={sendData} type="button" class="btn btn-success">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default AddAdjustments
