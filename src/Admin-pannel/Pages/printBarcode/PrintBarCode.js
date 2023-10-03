import { AiFillDelete, AiOutlinePrinter } from "react-icons/ai"
import { FaBarcode } from "react-icons/fa"
import { useAddPurchaseCartMutation, useGetProductSearchQuery } from "../../Components/all-products/allproductsApi/allProductsApi"
import { useEffect, useState } from "react"
import { RxCross1 } from "react-icons/rx"
import { useParams } from "react-router-dom"
import Barcode from "react-barcode"
import SallowRow from "./SallowRow"
import { token } from "../../common/TokenArea"

function PrintBarCode() {
    const [searchs, setSearch] = useState('')
    const { data: searchPro } = useGetProductSearchQuery({ token: token, paylode: searchs })

    const [show, setShow] = useState(true)
    const [showData, setShowData] = useState()
    const params = useParams()
    const [showPrint, setShowPrint] = useState(false)

    const [setCart, { isLoading, data: cartData, isError: isCartsError }] = useAddPurchaseCartMutation()
    const getMainData = async () => {
        const obj = { purchase: [], pickupPoints: ['6412fbf218fa66a37ed430d3'] }

        setCart({ id: params.id, data: obj })
        setShow(false)
    }

    useEffect(() => {
        getMainData()
    }, [params])


    const handelChange = (e) => {
        if (e.key === 'Enter') {
            const clone = e.target.value
            setSearch(clone);
            setShow(true)
        }
    }



    const setTableItem = async (item) => {
        const obj = { purchase: showData, pickupPoints: ['6412fbf218fa66a37ed430d3'] }

        setCart({ id: item._id, data: obj })
        setShow(false)
    }
    useEffect(() => {
        setShowData(cartData)
    }, [isLoading])

    return <div className="aiz-main-content" style={{ width: "1400px", margin: "auto" }}>
        <div className="px-15px px-lg-25px">
            <div className="row">
                <div className="col-lg-8 mx-auto"></div>

                <div className="card">
                    <div className="card-header d-block">
                        <h5 className="fw-600 mb-0"><AiOutlinePrinter /> <FaBarcode /> Print Barcode/Label</h5>

                    </div>
                </div>
                <div className="card" style={{ padding: "20px 0" }}>
                    <div className="container">
                        <div className="row">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col">
                                        <div>
                                            <h5>Add Product *</h5>
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
                        </div>

                        <div className="container-fluid">
                            <div className="card-header" style={{ padding: "0", marginTop: "10px" }}>
                                <h4 className="mb-0">Variants</h4>
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
                                                        return <SallowRow item={item} i={i} key={i} setShowData={setShowData} showData={showData} />
                                                    })}



                                                </tbody>

                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button type="button" class="btn btn-success" style={{ margin: "0 10px" }} onClick={() => setShowPrint(true)}>Update</button>
                            <button type="button" class="btn btn-danger" onClick={() => setShowData([])}>Reset</button>
                        </div>

                    </div>

                </div>
                {showPrint && <div className="card" style={{ padding: "20px 0" }}>
                    <div style={{ width: "1200px", margin: "auto", border: "1px solid black", padding: "10px", display: "flex" }} className="barcodePrinter">
                        {showData && showData.map((item, i) => {
                            if (item?.qty > 1) {
                                for (let i = 1; i < item.qty; i++) {
                                    return <div key={i} style={{ width: "240px", padding: "10px", border: "1px solid black" }}>
                                    <h6>Name : {item?.product?.name}</h6>
                                    <h6>Variant : {item?.variant?.weight}</h6>
                                    <h6>Price : {item?.variant?.sale_rate}</h6>
                                    <Barcode value={item?.sku} />
                                </div>
                                }
                            } else {
                                return <div key={i} style={{ width: "240px", padding: "10px", border: "1px solid black" }}>
                                    <h6>Name : {item?.product?.name}</h6>
                                    <h6>Variant : {item?.variant?.weight}</h6>
                                    <h6>Price : {item?.variant?.sale_rate}</h6>
                                    <Barcode value={item?.sku} />
                                </div>
                            }

                        })}

                    </div>
                </div>}

            </div>
        </div>
    </div>
}
export default PrintBarCode