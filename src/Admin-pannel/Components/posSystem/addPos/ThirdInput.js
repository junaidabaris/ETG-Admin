import React from 'react';
import { AiFillPlusSquare } from 'react-icons/ai';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useAddPurchaseCartMutation, useGetProductSearchQuery } from '../../all-products/allproductsApi/allProductsApi';
import { RxCross1 } from "react-icons/rx"
import { token } from '../../../common/TokenArea';



function ThirdInput({ setCart, setcartData, setModalShow }) {

    // const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const [showData, setShowData] = useState([])


    const [show, setShow] = useState(false)
    const [searchs, setSearch] = useState('')
    const { data: searchPro } = useGetProductSearchQuery({ token: token, paylode: searchs })


    const handelChange = (e) => {
        if (e.key === 'Enter') {
            const clone = e.target.value
            setSearch(clone);
            setShow(true)
        }
    }

    const setTableItem = async (item) => {
        setcartData(item);
        setModalShow(true)
        setShow(false)
    }



    return (
        <>

            <div className="container">
                <div className="row">
                    <div className="col ps-0">
                        <div className='orderListSec mb-2'>
                            <input className="form-control" onKeyDown={handelChange} placeholder="Please add products to order list" />
                            {show && searchPro?.getSearchedProduct?.length > 0 && <div className="showList">
                                <div style={{ fontSize: "19px" }} onClick={() => { setShow(false) }}><RxCross1 /></div>
                                {searchPro?.getSearchedProduct.map((item) => {
                                    return <h6 key={item._id} style={{ cursor: "pointer" }} onClick={() => setTableItem(item)}>{item.name}</h6>
                                })}
                            </div>}
                            {/* <button type='button' className='third-inp-btn' onClick={handleShow} style={{borderColor: "gray"}}>
                            <AiFillPlusSquare />
                        </button> */}
                        </div>

                    </div>
                    {/* <span className='bg-gray'>
                        

                        <Modal show={show} onHide={handleClose} animation={false} dialogClassName='productManualModal'>
                            <Modal.Header closeButton>
                                <Modal.Title>ADD PRODUCT MANUALLY</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <div className="col-lg-12">
                                    <div className="card">
                                        <form className="form-horizontal" id="create-course-form">
                                            <div className="card-body">

                                                <div className="form-group row">
                                                    <label className="col-sm-3 col-from-label" htmlFor="first name">Product Code *</label>
                                                    <div className="col-sm-9">
                                                        <input type="text" placeholder="Product Code *" name="" className="form-control" required />
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <label className="col-sm-3 col-from-label" htmlFor="first name">Product Name *</label>
                                                    <div className="col-sm-9">
                                                        <input type="text" placeholder="Product Name *" name="" className="form-control" required />
                                                    </div>
                                                </div>

                                                <div className="form-group row">
                                                    <label className="col-sm-3 col-from-label" htmlFor="email">Product Tax *</label>
                                                    <div className="col-sm-9">
                                                        <select className="form-select" aria-label="Default select example">
                                                            <option value={1}>VAT @10%</option>
                                                            <option value={2}>GST @6%</option>
                                                            <option value={3}>VAT @20%</option>
                                                        </select>

                                                    </div>
                                                </div>

                                                <div className="form-group row">
                                                    <label className="col-sm-3 col-from-label" htmlFor="mobile">Quantity *</label>
                                                    <div className="col-sm-9">
                                                        <input type="text" placeholder="Quantity *" name="" className="form-control" required />
                                                    </div>
                                                </div>

                                                <div className="form-group row">
                                                    <label className="col-sm-3 col-from-label" htmlFor="password">Product Discount</label>
                                                    <div className="col-sm-9">
                                                        <input type="text" placeholder="Product Discount *" name="" className="form-control" required />
                                                    </div>
                                                </div>


                                                <div className="form-group row">
                                                    <label className="col-sm-3 col-from-label" htmlFor="password">Unit Price *</label>
                                                    <div className="col-sm-9">
                                                        <input type="text" placeholder="Unit Price *" name="" className="form-control" required />
                                                    </div>
                                                </div>
                                            </div>

                                        </form>

                                    </div>
                                    <table style={{ width: '100%' }}>
                                        <tbody>
                                            <tr>
                                                <th>Net Unit Price:</th>
                                                <td>0.00</td>
                                                <th>Product Tax:</th>
                                                <td>0.00</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </Modal.Body>
                            <Modal.Footer>

                                <Button variant="primary" onClick={handleClose}>
                                    Submit
                                </Button>
                            </Modal.Footer>
                        </Modal>


                    </span> */}
                </div>



            </div>
        </>
    )
}

export default ThirdInput