import { useEffect, useRef, useState } from "react";
import { Spinner } from "react-bootstrap";
import { useGetCustomersQuery, useGetPickupPointQuery, useGetProductSearchQuery, usePostQuotationMutation } from "../../Components/all-products/allproductsApi/allProductsApi";
import { RxCross1 } from "react-icons/rx";
import { AiFillDelete } from "react-icons/ai";
import ModalCombo from "../addComboProduct/ModalCombo";
import axios from "axios";
import { token } from "../../common/TokenArea";

function Add_quotation() {

    const [show, setShow] = useState(true)
    const [modalShow, setModalShow] = useState(false);
    const [billingAddress, setBillingAddress] = useState();
    const [shippingAddress, setShippingAddress] = useState();
    const [customerId, setCustomerId] = useState();
    const [searchs, setSearch] = useState('')
    const [cartData, setcartData] = useState(null)
    const [values, setValues] = useState(
        {
            date: "",
            referenceNo: "",
            biller: "",
            order_tax: "",
            discount: "",
            // status: "",
            shipping: "",
            // supplier: "",

        }
    )

    const { data: searchPro } = useGetProductSearchQuery({ token: token, paylode: searchs })

    const [showCombo, setShowCombo] = useState([])
    const [comboRate, setComboRate] = useState(0)

    const [addQuotation, { isError, isSuccess, isLoading: addCOmbLoad }] = usePostQuotationMutation()

    const [storeValue, setStoreValue] = useState({
        date: "",
        referenceNo: "",
        shipping: "",
    })

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



    const SaveData = (val) => {
        setModalShow(false)
        const arr = [...showCombo, ...val]
        setShowCombo(arr)
    };



    const sendComboData = () => {
        const getData = showCombo.map((item) => {
            return { product_id: item.productId, variant_id: item._id, price: item?.mrp }
        })
        const obj = {
            ...values,
            products: getData,
            isActive: true,
        }

        addQuotation(obj)
    }

    useEffect(() => {
        if (isSuccess) {
            alert('Quotation Added')
        }
    }, [isSuccess]);

    useEffect(() => {
        if (isError) {
            alert('Quotation Not Added')
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


    return <div>

        {modalShow && <ModalCombo
            show={modalShow}
            onHide={() => setModalShow(false)}
            cartData={cartData}
            SaveData={SaveData}
            showCombo={showCombo}
        />}

        <>
            <div className="aiz-main-content">
                <div className="px-15px px-lg-25px">
                    <h3>Add Quotation</h3>
                    <div className="card" style={{ padding: "10px" }}>

                        {addCOmbLoad && <div className="preloaderCount">
                            <div className="spinner-border" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </div>}

                        <div className="container-fluid">
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
                                        <label>Biller *</label>
                                        <select name="biller" className="form-select" aria-label="Default select example" onChange={changeHandelVal} >
                                            <option selected>Open this select menu</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>
                                    </div>
                                </div>



                                <div className="col-4 d-block">
                                    <div>
                                        <label>Order Tax *</label>
                                        <select name="order_tax" className="form-select" aria-label="Default select example" onChange={changeHandelVal} >
                                            <option selected>Open this select menu</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-4 d-block">
                                    <div>
                                        <label>Supplier</label>
                                        <select name="supplier" className="form-select" aria-label="Default select example" onChange={changeHandelVal} >
                                            <option selected>Open this select menu</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>
                                    </div>
                                </div>

                                {/* <div className="col-4 d-block">
                                    <div>
                                        <label>Status</label>
                                        <select name="status" className="form-select" aria-label="Default select example" onChange={changeHandelVal} >
                                            <option selected value="active">Active</option>
                                            <option value="in_active">In Active</option>
                                        </select>
                                    </div>
                                </div> */}

                                <div className="col-4 d-block">
                                    <div>
                                        <label>Discount</label>
                                        <input value={values.discount} onChange={changeHandelVal} name="discount" className="form-control" type="number" />
                                    </div>
                                </div>

                                <div className="col-4 d-block">
                                    <div>
                                        <label>Shipping</label>
                                        <input value={values.shipping} onChange={changeHandelVal} name="shipping" className="form-control" type="number" />
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


                        <div className="container-fluid">
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
                                                        <td><label className="control-label">Actual Rate</label></td>
                                                    </tr>

                                                </thead>

                                                <tbody>

                                                    {showCombo && showCombo.map((item, i) => {
                                                        return <tr key={i}>
                                                            <td>
                                                                <AiFillDelete onClick={() => { deleteItem(i) }} />
                                                            </td>
                                                            <td>
                                                                <label name="productName" className="control-label">{item?.productName}</label>
                                                            </td>
                                                            <td>
                                                                <input type="text" disabled value={item?.sku} name="sku" className="form-control" />
                                                            </td>
                                                            <td>
                                                                <input type="text" disabled value={item?.weight} name="rate" className="form-control" />
                                                            </td>
                                                            <td>
                                                                <input type="text" disabled value={item?.mrp} name="actual_rate" className="form-control" />
                                                            </td>

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
export default Add_quotation