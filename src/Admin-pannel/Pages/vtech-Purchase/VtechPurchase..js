

import { useEffect, useRef, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {
    useAddOrderStatusMutation,
    useAddPurchaseCartMutation,
    useAddPurchaseListMutation,
    useAddpurchaseVcartMutation,
    useDeleteCartRowMutation,
    useGetOrderDetailQuery,
    useGetOrderStartByIdQuery,
    useGetPickupPointQuery,
    useGetProductSearchQuery,
    useGetPurchaseListsQuery,
    useGetSellersQuery,
    usePostpurchaseVcartMutation,
    useUpdateListProductsMutation,
} from "../../Components/all-products/allproductsApi/allProductsApi";
import { RxCross1 } from "react-icons/rx";
import { Spinner } from "react-bootstrap";
import PurchaseVtechModal from "./PurchaseVtechModal";
import VtechTr from "./VtechTr";
import { token } from "../../common/TokenArea";
function VtechPurchase() {
    const [modalShow, setModalShow] = useState(false);
    const [showCombo, setShowCombo] = useState([])
    const [searchs, setSearch] = useState('')
    const { data: searchPro } = useGetProductSearchQuery({ token: token, paylode: searchs })

    const { data: sellers } = useGetSellersQuery(token)

    const [show, setShow] = useState(true)
    const [finalCatD, setFinalCatD] = useState();
    const { data: pickUp } = useGetPickupPointQuery(token);

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
        seller_id: "",
        shipping: "",
        staff: window.localStorage.getItem('adminId')
    })

    const changeHandelVal = (e) => {
        const clone = { ...storeValue }
        clone[e.target.name] = e.target.value
        setStoreValue(clone)
    }

    const [addPurchaseList, { isLoading: addPurchaseListLoading, isError, isSuccess }] = usePostpurchaseVcartMutation()

    const [letestCart, setletestCart] = useState(cartData)

    useEffect(() => {
        setletestCart(cartData)
    }, [isLoading])

    const sendData = () => {
        const mapedData = showCombo.map((item) => {
            console.log(item);
            return { serialNo: item.serialNo, sku: item.sku, variantId: item.variantId._id, productId: item.productId.uid, pickupPoints: item.pickupPoints }
        })
        const obj = { ...storeValue, products: mapedData, supplier: storeValue.seller_id, token: window.localStorage.getItem('adminToken') }
        addPurchaseList(obj);
    }

    const handelChange = (e) => {
        if (e.key === 'Enter') {
            const clone = e.target.value
            setSearch(clone);
            setShow(true)
        }
    }
    const [cartData1, setcartData1] = useState(null)
    const setTableItem = (item) => {
        setcartData1(item);
        setModalShow(true)
        setShow(false)
    }
    const toastSuccessMessage2 = () => {
        toast.success("Purchase Added Successfully", {
            position: "top-center"
        })
    };

    const toastErrorMessage2 = () => {
        toast.error("Purchase Not Added", {
            position: "top-center"
        })
    };


    useEffect(() => {
        if (isSuccess === true) {
            toastSuccessMessage2()
        };
    }, [isSuccess]);

    useEffect(() => {
        if (isError === true) {
            toastErrorMessage2()
        };
    }, [isError])

    const [deleteRow, { isLoading: deleteRows, data: resData }] = useDeleteCartRowMutation()
    useEffect(() => {
        setShowData(resData)
    }, [deleteRows])

    const DeleteRow = (index) => {
        deleteRow({ index: index, data: { purchase: showData } })
    }

    const [cartPurchase, { data, isSuccess: cartSussuss }] = useAddpurchaseVcartMutation()

    const SaveData = (val) => {
        setModalShow(false)
        const arr = [...showCombo, ...val]
        const sendArr = arr.map((item) => {
            return { productId: item.productId, variantId: item.variant, sku: item.sku, qty: item.qty, purchase_rate: item?.purchase_Price, pickupPoints: item?.pickupPoint }
        })
        cartPurchase({ products: sendArr, productList: showCombo });
    };

    useEffect(() => {
        if (cartSussuss) {
            setShowCombo(data);
        }
    }, [cartSussuss])

    return (
        <>

            {modalShow && <PurchaseVtechModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                cartData={cartData1}
                SaveData={SaveData}
                showCombo={showCombo}
                pickUp={pickUp}
            />}
            <div className="aiz-main-content">
                <div className="px-15px px-lg-25px">
                    <div className="card" style={{ padding: "10px" }}>
                        <ToastContainer />
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
                                        <label>attachments</label>
                                        <input className="form-control" name="attachments" value={storeValue.attachments} onChange={changeHandelVal} type="file" />
                                    </div>
                                </div>

                                <div className="col-4">
                                    <label>Supplier</label>
                                    <select className="form-select" aria-label="Default select example" onChange={changeHandelVal} name="seller_id">
                                        <option>Select Selelr</option>
                                        {sellers && sellers.map((item) => {
                                            <option>Select Seller</option>
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
                                                        <td><label className="control-label">Variant</label></td>
                                                        <td><label className="control-label">Purchas Rate</label></td>
                                                        <td><label className="control-label">Pickup Point</label></td>
                                                        <td><label className="control-label">Serial/Service Tag No</label></td>
                                                    </tr>

                                                </thead>

                                                <tbody>

                                                    {showCombo && showCombo.map((item, i) => {
                                                        return <VtechTr showCombo={showCombo} setShowCombo={setShowCombo} DeleteRow={DeleteRow} key={i} item={item} index={i} pickUp={pickUp} />
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
        </>
    );
}
export default VtechPurchase;
