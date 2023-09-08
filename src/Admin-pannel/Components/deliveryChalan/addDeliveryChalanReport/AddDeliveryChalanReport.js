
import ModalCombo from "../../../Pages/addComboProduct/ModalCombo"
import { useEffect, useState } from "react";
import { useAddDeleveryChallanMutation, useAddQuatationVMutation, useAddpurchaseVcartMutation, useGetCustomersQuery, useGetPickupPointQuery, useGetProductSearchQuery } from "../../all-products/allproductsApi/allProductsApi";
import axios from "axios";
import { RxCross1 } from "react-icons/rx";
import { AiFillDelete } from "react-icons/ai";
import { Spinner } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";

function AddDeliveryChalanReport() {

    const [show, setShow] = useState(true)
    const [modalShow, setModalShow] = useState(false);
    const [billingAddress, setBillingAddress] = useState();
    const [shippingAddress, setShippingAddress] = useState();
    const [customerId, setCustomerId] = useState();
    const [searchs, setSearch] = useState('')
    const [cartData, setcartData] = useState(null)
    const [inputVal, setInputVal] = useState({})

    const [values, setValues] = useState(
        {
            date: "",
            referenceNo: "",
            quotation_No: '',
            quotation_Date: '',
            shipping_cost: "",
            shippingAddress: '',
            billingAddress: '',
        }
    )

    const { data: pickupPoints } = useGetPickupPointQuery();
    const { data: customers } = useGetCustomersQuery();
    const { data: searchPro } = useGetProductSearchQuery(searchs)
    const [showCombo, setShowCombo] = useState([])

    const [addDeleveryChallan, { isError, isSuccess, isLoading: addCOmbLoad }] = useAddDeleveryChallanMutation()

    const setTableItem = (item) => {
        setcartData(item);
        setModalShow(true)
        setShow(false)
    }

    const handelChange = (e) => {
        if (e.key === 'Enter') {
            const clone = e.target.value
            setSearch(clone);
            setShow(true)
        }
    }

    const changeHandelVal = (e) => {
        const clone = { ...values }
        clone[e.target.name] = e.target.value
        setValues(clone)
    }

    const handleInputItem = async (e) => {
        const clonnn = { ...inputVal }
        clonnn[e.target.name] = e.target.value
        const clone2 = { ...clonnn, index: e.target.id }
        setInputVal(clone2)
        const abc = showCombo.map((item, i) => {
            if (i == e.target.id) {
                return { ...item, productId: item.productId, serial: clone2.serial, variant: item.variant, unitPrice: clone2.unitPrice, tax: clone2.tax, tax_type: clone2.tax_type, qty: clone2.qty }
            } else {
                return item
            }
        })
        setShowCombo(abc)
        // const sendInpData = await axios.post('https://onlineparttimejobs.in/api/serviceQuotation/cart', { products: abc })
        // setShowCombo(sendInpData.data.products)
    }

    const changeHandelAddress = async (e) => {
        const shippingRes = await axios.get(`https://onlineparttimejobs.in/api/shippingAddress/customer/shipping/${e.target.value}`);
        setShippingAddress(shippingRes.data)

        const billingRes = await axios.get(`https://onlineparttimejobs.in/api/user/billAddress/${e.target.value}`);
        setBillingAddress(billingRes.data);
        setCustomerId(e.target.value)
    }
    const [cartPurchase, { data, isSuccess: cartSussuss }] = useAddpurchaseVcartMutation()
    const SaveData = (val) => {
        setModalShow(false)
        const arr = [...showCombo, ...val]
        const sendArr = arr.map((item) => {
            console.log(item);
            return { productId: item.productId, variantId: item.variant, sku: item.sku, qty: item.qty }
        })
        cartPurchase({ products: sendArr });

    };
    useEffect(() => {
        if (data) {
            setShowCombo(data)
        }
    }, [cartSussuss])


    const token = window.localStorage.getItem('token')
    const sendComboData = () => {
        const getData = showCombo.map((item) => {
            console.log(item);
            return { productId: item.productId._id, variantId: item.variantId._id, sku: item.sku, unitPrice: item.variantId.unitPrice,  discount: item.variantId.discount, tax: item.variantId.tax, subtotal: item.variantId.subTotal, serial: item.serial, total: item.variantId.total }
        })
        const obj = {
            ...values,
            products: getData,
            userid: customerId,
            isActive: true,
            // shippingAddress: shippingAddress?.address[0]?._id,
            // billingAddress: billingAddress?.address[0]?._id
        }

        addDeleveryChallan({data:obj , tokenn:token})
    }

    const toastSuccessMessage = () => {
        toast.success("Delivery Challan Added Successfully", {
            position: "top-center"
        })
    };

    const toastErrorMessage = () => {
        toast.error("Delivery Challan Not Added ....", {
            position: "top-center"
        })
    };


    useEffect(() => {
        if (isSuccess) {
            toastSuccessMessage()
        }
    }, [isSuccess]);

    useEffect(() => {
        if (isError) {
            toastErrorMessage()
        };
    }, [isError])



    const deleteItem = (index) => {
        const filterd = showCombo.filter((item, i) => {
            if (i !== index) {
                return item
            }

        })
        setShowCombo(filterd);
    }


    const onchangeModal = (e, id) => {
        const vals = e.target.value
        const clone = { ...cartData }
        const maped = clone?.variations?.map((val) => {
            if (val._id == IdleDeadline) {
                const obj = { ...val, qty: vals }
                return obj
            } else {
                return val
            }
        })
        clone.variations = maped
        setcartData(clone)
    }


    return <div>

        {modalShow && <ModalCombo
            show={modalShow}
            onHide={() => setModalShow(false)}
            cartData={cartData}
            SaveData={SaveData}
            showCombo={showCombo}
            onchangeModal={onchangeModal}
        />}

        <>
            <div className="aiz-main-content">
                <div className="px-15px px-lg-25px">
                    <h3>Add Delivery challan</h3>
                    <div className="card" style={{ padding: "10px" }}>

                        {addCOmbLoad && <div className="preloaderCount">
                            <div className="spinner-border" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </div>}
                        <ToastContainer />
                        <div className="container">
                            <div className="row devTols" >
                                <div className="col-4 d-block">
                                    <div>
                                        <label>Date *</label>
                                        <input value={values.date} onChange={changeHandelVal} name="date" className="form-control" type="date" />
                                    </div>
                                </div>

                                <div className="col-4 d-block">
                                    <div>
                                        <label>Reference No *</label>
                                        <input value={values.referenceNo} onChange={changeHandelVal} name="referenceNo" className="form-control" type="text" />
                                    </div>
                                </div>

                                <div className="col-4 d-block">
                                    <div>
                                        <label>Quotation No</label>
                                        <input value={values.quotation_No} onChange={changeHandelVal} name="quotation_No" className="form-control" type="text" />
                                    </div>
                                </div>

                                <div className="col-4 d-block">
                                    <div>
                                        <label>Quotation Date</label>
                                        <input value={values.quotation_date} onChange={changeHandelVal} name="quotation_Date" className="form-control" type="date" />
                                    </div>
                                </div>

                                <div className="col-4 d-block">
                                    <div>
                                        <label>PickupPint</label>
                                        <select name="pickupPoint" className="form-select" aria-label="Default select example" onChange={changeHandelVal} >
                                            {pickupPoints && pickupPoints.map((item, i) => {
                                                return <option value={item._id} key={i}>{item?.pickupPoint_name}</option>
                                            })}
                                        </select>
                                    </div>
                                </div>

                                <div className="col-4 d-block">
                                    <div>
                                        <label>Customer</label>
                                        <select name="customer" className="form-select" aria-label="Default select example" onChange={changeHandelAddress} >
                                            {customers && customers.map((item, i) => {
                                                return <option value={item._id} key={i}>{item?.firstname + " " + item?.lastname}</option>
                                            })}
                                        </select>
                                    </div>
                                </div>

                                <div className="col-4 d-block">
                                    <div>
                                        <label>Billing Adress</label>
                                        <select name="billingAddress" className="form-select" aria-label="Default select example" onChange={changeHandelVal} >
                                            {billingAddress && billingAddress.address?.map((item, i) => {
                                                return <option selected value={item._id} key={i}>{item?.addressLine1 + ',' + item?.addressLine2 + ' ,' + item?.landmark + ' ,' + item?.zip + ', ' + item?.city + ' ,' + item?.state + ' ,' + item?.country}</option>
                                            })}
                                        </select>
                                    </div>
                                </div>

                                <div className="col-4 d-block">
                                    <div>
                                        <label>Shipping Adress</label>
                                        <select name="shippingAddress" className="form-select" aria-label="Default select example" onChange={changeHandelVal} >
                                            {shippingAddress && shippingAddress.address?.map((item, i) => {
                                                return <option selected value={item._id} key={i}>{item?.addressLine1 + ', ' + item?.addressLine2 + ' ,' + item?.landmark + ',' + item?.zip + ',' + item?.city + ',' + item?.state + ',' + item?.country}</option>
                                            })}
                                        </select>
                                    </div>
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
                                <h4 className="mb-0">Add Product</h4>
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
                                                        <td><label className="control-label">SKU</label></td>
                                                        <td><label className="control-label">Variant</label></td>
                                                        <td><label className="control-label">Serial </label></td>
                                                        {/* <td><label className="control-label">Unit Price</label></td>
                                                        <td><label className="control-label">Quantity</label></td>
                                                        <td><label className="control-label">Sub Total</label></td>
                                                        <td><label className="control-label">Tax</label></td>
                                                        <td><label className="control-label">Tax Type</label></td>
                                                        <td><label className="control-label">Total</label></td> */}
                                                    </tr>

                                                </thead>

                                                <tbody>

                                                    {showCombo && showCombo.map((item, i) => {
                                                        return <tr key={i}>
                                                            <td>
                                                                <AiFillDelete onClick={() => { deleteItem(i) }} />
                                                            </td>
                                                            <td>
                                                                <label name="productName" className="control-label">{item?.productName ? item?.productName : item?.productId?.name}</label>
                                                            </td>
                                                            <td>
                                                                <input type="text" disabled value={item?.sku} name="sku" className="form-control" />
                                                            </td>
                                                            <td>
                                                                <input type="text" disabled value={item?.variantId?.weight} name="rate" className="form-control" />
                                                            </td>
                                                            <td>
                                                                <input type="text" value={item?.serial} id={i} name="serial" onChange={handleInputItem} className="form-control" />
                                                            </td>

                                                            {/* <td>
                                                                <input type="text" id={i} name="unitPrice" className="form-control" onChange={handleInputItem} />
                                                            </td>

                                                            <td>
                                                                <input type="text" id={i} name="qty" className="form-control" onChange={handleInputItem} />
                                                            </td>
                                                            <td>
                                                                <input type="text" disabled name="sub_total" value={item?.subTotal} className="form-control" />
                                                            </td>
                                                            <td>
                                                                <input type="text" id={i} name="tax" className="form-control" onChange={handleInputItem} />
                                                            </td>
                                                            <td>

                                                                <select name="tax_type" id={i} className="form-select" aria-label="Default select example" onChange={handleInputItem} >
                                                                    <option selected value="Inclusive">Inclusive</option>
                                                                    <option value="Exclusive">Exclusive</option>
                                                                </select>
                                                            </td>
                                                            <td>
                                                                <input type="text" disabled name="total" value={item?.total} className="form-control" />
                                                            </td> */}

                                                        </tr>
                                                    })}



                                                </tbody>

                                            </table>
                                            {/* <div style={{ textAlign: "end" }}><h5>Total : {total}</h5></div> */}
                                        </div>
                                    </div>

                                </div>

                            </div>

                        </div>


                        <div style={{ paddingLeft: "15px", display: "flex" }}>

                            <button type="button" style={{ display: "flex", alignContent: "center", alignItems: 'center' }} className="btn btn-success" onClick={sendComboData}>Sumbit {addCOmbLoad && <Spinner style={{ marginLeft: "10px" }} animation="border" role="status">
                                <span className="visually-hidden" >Loading...</span>
                            </Spinner>}</button>

                        </div>
                    </div>

                </div>
                <div className="bg-white text-center py-3 px-15px px-lg-25px mt-auto"></div>
            </div>
        </>
    </div>
}
export default AddDeliveryChalanReport