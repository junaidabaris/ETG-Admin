import { useEffect, useRef, useState } from "react"
import { useAddPurchaseCartMutation, useDeleteCartRowMutation, useGetPickupPointQuery, useGetProductSearchQuery, useGetSellersQuery, useUpdateListProductsMutation } from "../../Components/all-products/allproductsApi/allProductsApi"
import { RxCross1 } from "react-icons/rx"
import GenerateTr from "../../Components/addPurchaseList/GenerateTr"
import { AiFillDelete } from "react-icons/ai"
import axios from "axios"
import GenerateStock from "./GenerateStock"
import { token } from "../../common/TokenArea"

function AddStock() {
    const [show, setShow] = useState(false)
    const [searchs, setSearch] = useState('')
    const { data: searchPro } = useGetProductSearchQuery({ token: token, paylode: searchs })

    const { data: pickUp } = useGetPickupPointQuery();
    const { data: sellerD } = useGetSellersQuery(token)

    const showMainadmin = window.localStorage.getItem('showMainadmin')
    const isSellerLogin = window.localStorage.getItem('isSellerLogin')

    let ids;

    if (showMainadmin === 'true') {
        ids = window.localStorage.getItem('adminId')
    }
    if (isSellerLogin === 'true') {
        ids = window.localStorage.getItem('isSellerId')
    }

    const [state, setState] = useState({
        FrompickupPoints: "",
        TopickupPoints: "",
        supplier: "",
        shippingCost: "",
        staff_id: ids,
        date: "",
        referenceNo: "",
        products: []
    })

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


    const handelChange = (e) => {
        if (e.key === 'Enter') {
            const clone = e.target.value
            setSearch(clone);
            setShow(true)
        }
    }
    const onchangeHandle = (e) => {
        const clone = { ...state }
        clone[e.target.name] = e.target.value
        setState(clone)
    }


    const [status, setStatus] = useState()
    const getData = async () => {
        try {
            const res = await axios.get(`https://onlineparttimejobs.in/api/transferStockStatus`)
            setStatus(res.data)
        } catch (error) {

        }
    }
    useEffect(() => {
        getData()
    }, [])

    const sendData = async () => {
        const mapesData = showData.map((item) => {
            return { product_id: item?.product_id, variant_id: item?.variant_id, sku: item?.sku, qty: item?.qty }
        })
        const finalObj = { ...state, products: mapesData }

        try {
            const res = await axios.post(`https://onlineparttimejobs.in/api/transferStock/add_TransferStock`, finalObj)
            alert('Stock Added Successfully')
        } catch (error) {
            alert('Server Error Stock Not added')
        }
    }



    return <div className="aiz-main-content" style={{ width: "1020px", margin: "auto" }}>
        <div className="px-15px px-lg-25px">
            <div className="row">
                <div className="col-lg-8 mx-auto"></div>

                <div className="card">
                    <div className="card-header d-block">
                        <h5 className="fw-600 mb-0">Add Stock Transfer</h5>
                        <div style={{ margin: "10px 0" }} className="fw-600 mb-0">lease fill in the information below. The field labels marked with * are required input fields.</div>
                    </div>
                </div>

                <div className="card">
                    <div className="container">
                        <div className="row mainaddStc">
                            <div className="col-4">
                                <label for="basic-url" class="form-label">Date</label>
                                <input type="date" name="date" onChange={onchangeHandle} className="form-control" />
                            </div>
                            <div className="col-4">
                                <label for="basic-url" class="form-label">Reference</label>
                                <input type="text" name="referenceNo" onChange={onchangeHandle} className="form-control" />
                            </div>

                            <div className="col-4">
                                <label for="basic-url" class="form-label">To Pickup Point *</label>
                                <select className="form-select" name="TopickupPoints" onChange={onchangeHandle} aria-label="Default select example">
                                    <option selected>Open this select menu</option>
                                    {pickUp && pickUp.map((item) => {
                                        return <option value={item._id} key={item._id}>{item?.pickupPoint_name}</option>
                                    })}

                                </select>
                            </div>
                            <div className="col-4">
                                <label for="basic-url" class="form-label">Status *</label>
                                <select className="form-select" name="statusId" onChange={onchangeHandle} aria-label="Default select example">
                                    <option selected>Open this select menu</option>
                                    {status && status.map((item, i) => {
                                        return <option value={item?._id} key={i}>{item?.name}</option>
                                    })}

                                </select>
                            </div>

                            <div className="col-4">
                                <label for="basic-url" class="form-label">Shipping</label>
                                <input type="text" name="shippingCost" onChange={onchangeHandle} className="form-control" />
                            </div>
                            <div className="col-4">
                                <label for="basic-url" class="form-label">Supplier</label>
                                <select className="form-select" name="supplier" onChange={onchangeHandle} aria-label="Default select example">
                                    <option selected>Open this select menu</option>
                                    {sellerD && sellerD?.map((item) => {
                                        return <option value={item._id} key={item._id}>{item.firstname + " " + item.lastname}</option>
                                    })}
                                </select>
                            </div>
                            <div className="col-4">
                                <label for="basic-url" class="form-label">From Pickup Point *</label>
                                <select className="form-select" name="FrompickupPoints" onChange={onchangeHandle} aria-label="Default select example">
                                    <option selected>Open this select menu</option>
                                    {pickUp && pickUp.map((item) => {
                                        return <option value={item._id}>{item?.pickupPoint_name}</option>
                                    })}

                                </select>
                            </div>
                            <div className="container">
                                <div className="row">
                                    <div className="col">
                                        <div>
                                            <label>Products *</label>
                                            <input className="form-control" onKeyDown={handelChange} placeholder="Please add products to order list" />
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


                            <div className="container">
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
                            </div>





                        </div>
                        <button style={{ margin: "10px 0" }} onClick={sendData} type="button" class="btn btn-success">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
}
export default AddStock 