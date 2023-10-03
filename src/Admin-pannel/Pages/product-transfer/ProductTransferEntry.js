import { useState } from "react";
import { Table } from "react-bootstrap";
import { useGetProductSearchQuery } from "../../Components/all-products/allproductsApi/allProductsApi";
import { RxCross1 } from "react-icons/rx";
import ProductModal from "./ProductModal";
import { token } from "../../common/TokenArea";

function ProductTransferEntry() {
    const [state, setState] = useState({
        FrompickupPoints: "6412fbd218fa66a37ed430d1",
        TopickupPoints: "6412fbf218fa66a37ed430d3",
        products: [{
            // "product_id": "643ae056f4003ea059516bc9",
            // "variant_id": "643adf7f58f7e576427fb101",
            // "sku": "1001",
            // "qty": 20
        }
        ],
        staff: "642177b99fd9c29aab59d245",
    })
    const [searchs, setSearch] = useState('')
    const { data: searchPro } = useGetProductSearchQuery({ token: token, paylode: searchs })

    const [show, setShow] = useState(true)
    const [modalShow, setModalShow] = useState(false);

    const handelChange = (e) => {
        if (e.key === 'Enter') {
            const clone = e.target.value
            setSearch(clone);
            setShow(true)
        }
    }

    const  [cartData,setcartData] = useState([])
    const setTableItem = (item) => {
        const arr = [...cartData]
        arr.push({...item})
        setcartData(arr)
        setModalShow(true)
        setShow(false)
    }

    const SaveData = (val)=>{
        console.log(val)
    }


    return <>
        {modalShow && <ProductModal
            show={modalShow}
            onHide={() => setModalShow(false)}
            SaveData={SaveData}
            cartData={cartData}
        />}


        <div className="aiz-main-content">
            <div className="px-15px px-lg-25px">
                <div className="container-flued">
                    <div className="row">
                        <div className="col-8">
                            <div className="card" style={{ padding: "10px" }}>
                                <h5>Transfer & product information</h5>

                                <div className="row">
                                    <div className="col-6">
                                        <div className="mb-3">
                                            <label htmlFor="basic-url" className="form-label">From PickupPoints</label>
                                            <select className="form-select" name="FrompickupPoints" aria-label="Default select example">
                                                <option selected>Customer One</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="mb-3">
                                            <label htmlFor="basic-url" className="form-label">Choose a Product</label>
                                            <input className="form-control" onKeyDown={handelChange} placeholder="Please add products to order list" />
                                            {show && searchPro?.getSearchedProduct?.length > 0 && <div className="showList">
                                                <div style={{ fontSize: "19px" }} onClick={() => { setShow(false) }}><RxCross1 /></div>
                                                {searchPro?.getSearchedProduct.map((item) => {
                                                    return <h6 key={item._id} style={{ cursor: "pointer" }} onClick={() => setTableItem(item)}>{item.name}</h6>
                                                })}
                                            </div>}
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="mb-3">
                                            <label htmlFor="basic-url" className="form-label">To PickupPoints</label>
                                            <select className="form-select" name="TopickupPoints" aria-label="Default select example">
                                                <option selected>Customer One</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                        </div>
                                    </div>
                                    {/* <div className="col-3">
                                    <label htmlFor="basic-url" className="form-label">Quantity</label>
                                    <input type="number" className="form-control" />
                                </div>
                                <div className="col-3">
                                    <label htmlFor="basic-url" className="form-label">Total</label>
                                    <input type="number" className="form-control" disabled value={'0.00'} />
                                </div> */}
                                    {/* <div className="col-3" style={{ margin: "10px 0" }}>
                                    <label htmlFor="basic-url" className="form-label">Stock Avalable</label>
                                    <input type="number" className="form-control" disabled value={'0.00'} />
                                    <button type="button" class="btn btn-success" style={{ margin: "12px 0", width: "200px" }}>Add To Cart</button>
                                </div> */}
                                </div>

                                <Table striped bordered>
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>SL Entry Date-Time</th>
                                            <th>Damage Code</th>
                                            <th>Product Code</th>
                                            <th>Product Name</th>
                                            <th>Damage Rate</th>
                                            <th>Damage Quantity</th>
                                            <th>Damage Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        <tr>
                                            <td>1</td>
                                            <td>12/3/2022</td>
                                            <td>OPKN</td>
                                            <td>
                                                UJKI
                                            </td>
                                            <td>Acita</td>
                                            <td>300</td>
                                            <td>2</td>
                                            <td>600</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="card" style={{ padding: "10px" }}>
                                <div className="row">
                                    <div className="col-8">
                                        <label htmlFor="basic-url" className="form-label">Transfer date </label>
                                        <input type="date" className="form-control" />
                                    </div>
                                    <div className="col-8" style={{ margin: "10px 0" }}>
                                        <div class="form-floating">
                                            <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: '100px' }}></textarea>
                                            <label for="floatingTextarea2">Transfer Note...</label>
                                        </div>
                                        <button type="button" class="btn btn-warning" style={{ margin: "10px 0 ", width: "200px" }}>Transfer</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    </>
}
export default ProductTransferEntry