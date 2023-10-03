import { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {
    useAddOrderStatusMutation,
    useAddPurchaseCartMutation,
    useAddPurchaseListMutation,
    useDeleteCartRowMutation,
    useGetOrderDetailQuery,
    useGetOrderStartByIdQuery,
    useGetPickupPointQuery,
    useGetProductSearchQuery,
    useGetPurchaseListsQuery,
    useGetSellersQuery,
    useUpdateListProductsMutation,
} from "../all-products/allproductsApi/allProductsApi";
import { RxCross1 } from "react-icons/rx";
import GenerateTr from "./GenerateTr";
import { Spinner } from "react-bootstrap";
import OptionSelect from "./OptionSelect";
import axios from "axios";
import Multiselect from "multiselect-react-dropdown";
import { token } from "../../common/TokenArea";
function AddPurchaseList() {

    const [searchs, setSearch] = useState('')
    const { data: searchPro } = useGetProductSearchQuery({ token: token, paylode: searchs })
    const { data: sellers } = useGetSellersQuery()

    const [show, setShow] = useState(true)
    // const { data: orderStatusD } = useGetOrderStartByIdQuery();
    const [finalCatD, setFinalCatD] = useState();
    const { data: pickUp } = useGetPickupPointQuery();

    const [setCart, { isLoading, data: cartData, isError: isCartsError }] = useAddPurchaseCartMutation()

    const [showData, setShowData] = useState()

    useEffect(() => {
        setShowData(cartData)
    }, [isLoading])
    useEffect(() => {
        if (isCartsError) {
            alert('Server Error Select Pickup Point and Try Again !')
        }
        
    }, [isCartsError])

    const [storeValue, setStoreValue] = useState({
        date: "",
        referenceNo: "",
        pickupPoints: "6412fbd218fa66a37ed430d1",
        seller_id: "64269f0df127906d53878d3d",
        shipping: "",
        staff: window.localStorage.getItem('adminId')
    })

    const changeHandelVal = (e) => {
        const clone = { ...storeValue }
        clone[e.target.name] = e.target.value
        setStoreValue(clone)
    }

    const [addPurchaseList, { isLoading: addPurchaseListLoading, isError, isSuccess }] = useAddPurchaseListMutation()

    const [letestCart, setletestCart] = useState(cartData)

    useEffect(() => {
        setletestCart(cartData)
    }, [isLoading])

    const sendData = () => {
        const obj = { ...storeValue, products: showData, supplier: storeValue.seller_id }
        addPurchaseList(obj);
    }

    const handelChange = (e) => {
        if (e.key === 'Enter') {
            const clone = e.target.value
            setSearch(clone);
            setShow(true)
        }
    }


    const setTableItem = async (item) => {
        const obj = { purchase: showData, pickupPoints: finalCatD }

        setCart({ id: item._id, data: obj })
        setShow(false)
    }

    useEffect(() => {
        if (isSuccess === true) {
            alert('Product Added')
        };
    }, [isSuccess]);

    useEffect(() => {
        if (isError === true) {
            alert('Product Not Added')
        };
    }, [isError])



    const setPick = (name) => {
        window.localStorage.setItem('pickupName', name)
    }

    const [deleteRow, { isLoading: deleteRows, data: resData }] = useDeleteCartRowMutation()
    useEffect(() => {
        setShowData(resData)
    }, [deleteRows])

    const DeleteRow = (index) => {
        deleteRow({ index: index, data: { purchase: showData } })
    }


    return (
        <>
            <div className="aiz-main-content">
                <div className="px-15px px-lg-25px">
                    <div className="card" style={{ padding: "10px" }}>

                        {deleteRows && <div className="preloaderCount">
                            <div className="spinner-border" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </div>}
                        {isLoading && <div className="preloaderCount">
                            <div className="spinner-border" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </div>}
                        {addPurchaseListLoading && <div className="preloaderCount">
                            <div className="spinner-border" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </div>}

                        <div className="container">
                            <div className="row devTols" >
                                <div className="col-4 d-block">
                                    <div>
                                        <label>Date *</label>
                                        <input value={storeValue.date} onChange={changeHandelVal} name="date" className="form-control" type="date" />
                                    </div>
                                </div>

                                <div className="col-4">
                                    <div>
                                        <label>Reference No</label>
                                        <input name="referenceNo" value={storeValue.referenceNo} onChange={changeHandelVal} className="form-control" type="text" />
                                    </div>
                                </div>


                                <div className="col-4">
                                    <div>
                                        <label>Pickup Point*</label>
                                        <Multiselect
                                            isObject={true}
                                            displayValue="pickupPoint_name"
                                            options={pickUp}
                                            showCheckbox
                                            selectedValues={[]}
                                            onRemove={(selectedCat) => {
                                                const selectedIds = selectedCat.map((cat) => {
                                                    return cat._id
                                                })
                                                setFinalCatD(selectedIds)
                                            }}
                                            onSelect={(selectedCat) => {
                                                const selectedIds = selectedCat.map((cat) => {
                                                    return cat._id
                                                })
                                                setFinalCatD(selectedIds)
                                            }}
                                        />
                                    </div>
                                </div>



                                <div className="col-4">
                                    <div>
                                        <label>attachments</label>
                                        <input className="form-control" name="attachments" value={storeValue.attachments} onChange={changeHandelVal} type="file" />
                                    </div>
                                </div>

                                <div className="col-4">
                                    <label>Supplier</label>
                                    <select className="form-select" aria-label="Default select example" onChange={changeHandelVal} name="seller_id">
                                        {/* <option value={'64269f0df127906d53878d3d'}>ETG Seller</option> */}
                                        {sellers && sellers.map((item) => {
                                            return <option key={item._id} value={item._id}>{item.firstname + " " + item.lastname}</option>
                                        })}

                                    </select>
                                </div>

                            </div>
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
                                                        {/* <td><label className="control-label">MRP</label></td>
                                                        <td><label className="control-label">Purchase Rate</label></td>
                                                        <td><label className="control-label">Tax %</label></td>
                                                        <td><label className="control-label">Tax Type</label></td>
                                                        <td><label className="control-label">Sale Rate</label></td>
                                                        <td><label className="control-label">Discount</label></td> */}
                                                        <td><label className="control-label">Variant</label></td>
                                                        <td><label className="control-label">SKU</label></td>
                                                        <td><label className="control-label">Pickup Point</label></td>
                                                        <td><label className="control-label">Quantity</label></td>
                                                    </tr>

                                                </thead>

                                                <tbody>

                                                    {showData && showData.map((item, i) => {
                                                        return <GenerateTr showData={showData} setShowData={setShowData} DeleteRow={DeleteRow} key={i} item={item} index={i} pickUp={pickUp} />
                                                    })}



                                                </tbody>

                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="container">
                            <div className="row devTols" >

                                {/* <div className="col-4">
                                    <label>Order Tax</label>
                                    <select className="form-select" onChange={changeHandelVal} aria-label="Default select example" name="orderTax">
                                        <option value="No Tax">No Tax</option>
                                        <option value="Vat">Vat</option>
                                        <option value="Gst">Gst</option>
                                    </select>
                                </div>

                                <div className="col-4">
                                    <label>Discount (5/5%)</label>
                                    <input className="form-control" type="text" name="discount" onChange={changeHandelVal} value={storeValue.discount} />
                                </div> */}

                                {/* <div className="col-4">
                                    <label>Shipping</label>
                                    <input className="form-control" type="text" name="shipping" onChange={changeHandelVal} value={storeValue.shipping} />
                                </div> */}

                                {/* <div className="col-4">
                                    <label>Payment Term</label>
                                    <input className="form-control" type="text" name="payment" onChange={changeHandelVal} value={storeValue.payment} />
                                </div> */}



                                <div className="col-4">
                                    <label>Comment</label>
                                    <input className="form-control" type="text" name="shipping" />
                                </div>

                            </div>
                        </div>

                        {/* <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextareaDisabled"></textarea> */}


                        <div style={{ paddingLeft: "15px", display: "flex" }}>

                            <button type="button" style={{ display: "flex", alignContent: "center" }} className="btn btn-success" onClick={sendData}>Sumbit {addPurchaseListLoading && <Spinner style={{ marginLeft: "10px" }} animation="border" role="status">
                                <span className="visually-hidden" >Loading...</span>
                            </Spinner>}</button>
                            <button type="button" className="btn btn-danger" style={{ marginLeft: "10px" }}>Reset</button>
                        </div>
                    </div>

                </div>
                <div className="bg-white text-center py-3 px-15px px-lg-25px mt-auto"></div>
            </div>
            <ToastContainer />
        </>
    );
}
export default AddPurchaseList;
