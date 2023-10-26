import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Button, Popconfirm } from 'antd';
import { DatabaseFilled, QuestionCircleOutlined } from '@ant-design/icons';
import { AiTwotoneDelete } from "react-icons/ai";
function PriceMoalParams(props) {
    const [val, setVal] = useState(props?.data?.prices)
    const changeHanle = (e, id) => {
        const clone = [...val]
        const maped = clone.map((item) => {
            if (item?.country_id?._id == id) {
                return { ...item, [e.target.name]: e.target.value }
            } else {
                return item
            }
        })
        setVal(maped);
    }

    const sendData = (i) => {
        let cloend = { ...props.data, prices: val }
        props.setData(cloend, i)
        props.onHide()
    }
    const [shwo, setShow] = useState(null)
    const sendObj = (ite) => {
        const maped = val.map((item) => {
            if (item?._id == ite._id) {
                return { ...item, isSelected: true }
            } else {
                return { ...item, isSelected: false }
            }
        })
        setVal(maped);
    }
    const coped = () => {
        const clone = [...val]
        let obj = {}
        for (let i = 0; i < clone.length; i++) {
            const element = clone[i];
            if (element?.isSelected == true) {
                setShow(element)
                obj = element
            }
        }
        const maped = val.map((item) => {
            return { ...obj, country_id: item?.country_id, isSelected: item.isSelected }
        })

        setVal(maped);
    }
    useEffect(() => {
        const clone = [...val]
        const maped = clone.map((item, i) => {
            if (i == 0) {
                return { ...item, country_id: item?.country_id, isSelected: true }
            } else {
                return { ...item, country_id: item?.country_id, isSelected: false }
            }

        })

        setVal(maped);
    }, [])

    const deleteRow = (id) => {
        for (let i = 0; i < val.length; i++) {
            const element = val[i];
            if (element.isSelected == true) {
                if (id == element._id) {
                    alert('You Can Not Delete Selected Country')
                    return
                }
            }

        }
        const filterdData = val.filter((item) => {
            return item._id !== id
        })
        setVal(filterdData);
    }

    return (
        <Modal
            {...props}
            size="xxl"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            className='maedwide'
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Pricing Detail ({props?.data?.weight})
                </Modal.Title>
            </Modal.Header>
            <Modal.Body style={{ overflow: "auto" }}>
                <table className="table table-bordered physical_product_show maiTa" width={"2000px"}>
                    <thead>

                        <tr>
                            <td><label className="control-label">#</label></td>
                            <td><label className="control-label">#</label></td>
                            <td><label className="control-label">Country</label></td>
                            <td><label className="control-label">MRP</label></td>
                            <td><label className="control-label">Purchase Rate</label></td>
                            <td><label className="control-label">Landing Cost</label></td>
                            <td><label className="control-label">Tax %</label></td>
                            <td><label className="control-label">Tax Type</label></td>
                            {/* <td><label className="control-label">Seller</label></td> */}
                            <td><label className="control-label">Sale Rate</label></td>
                            <td><label className="control-label">Wholesale Price</label></td>
                            <td><label className="control-label">Retail Price</label></td>
                            <td><label className="control-label">Showroom Mall Price</label></td>
                            <td><label className="control-label">Discount</label></td>
                            <td><label className="control-label">Discount Type</label></td>
                            <td><label className="control-label">SKU</label></td>
                            <td><label className="control-label">HSN Code</label></td>
                            <td><label className="control-label">Sale Reward Point</label></td>
                            <td><label className="control-label">Share Reward Point</label></td>

                        </tr>

                    </thead>
                    <tbody>
                        {val && val?.map((item) => {
                            return <tr>
                                <td>
                                    <Popconfirm
                                        title="Delete the task"
                                        description="Are you sure to delete this Prices?"
                                        icon={
                                            <QuestionCircleOutlined
                                                style={{
                                                    color: 'red',
                                                }}
                                            />

                                        }
                                        onConfirm={() => { deleteRow(item._id) }}
                                    >
                                        <Button danger><AiTwotoneDelete /></Button>
                                    </Popconfirm>
                                </td>
                                <td>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" checked={item?.isSelected} onClick={() => { sendObj(item) }} name="flexRadioDefault" id="flexRadioDefault1" />

                                    </div>
                                </td>
                                <td>
                                    <input type="text" name="mrp" disabled className="form-control" required value={item?.country_id?.name} readOnly />
                                </td>
                                <td>
                                    <input type="number" name="mrp" className="form-control" required value={item?.mrp} onChange={(e) => { changeHanle(e, item?.country_id._id) }} />
                                </td>

                                <td>
                                    <input type="number" name="purchase_rate" className="form-control" defaultValue={""} value={item?.purchase_rate} onChange={(e) => { changeHanle(e, item?.country_id._id) }} />
                                </td>
                                <td>
                                    <input type="number" name="landing_rate" className="form-control" defaultValue={""} value={item?.landing_rate} onChange={(e) => { changeHanle(e, item?.country_id._id) }} />
                                </td>

                                <td>
                                    <input type="number" name="tax" className="form-control" required value={item?.tax} onChange={(e) => { changeHanle(e, item?.country_id._id) }} />
                                </td>

                                <td>
                                    <select className="selectOptions" name="tax_type" aria-label="Default select example" value={item?.tax_type} onChange={(e) => { changeHanle(e, item?.country_id._id) }}>
                                        <option value='Inclusive' >Inclusive</option>
                                        <option value='Exclusive'>Exclusive</option>
                                    </select>
                                </td>
                                {/* <td>
                                    <select className="form-select" aria-label="Default select example" value={item?.seller_id} name="seller_id" onChange={(e) => { changeHanle(e, item?.country_id._id) }}  >
                                        <option>Select Seller</option>
                                        {props?.sellerD && props?.sellerD.map((item) => {
                                            return <option value={item._id} key={item._id}>{item.firstname + " " + item.lastname}</option>
                                        })}
                                    </select>
                                </td> */}

                                <td>
                                    <input type="number" name="sale_rate" className="form-control" required value={item?.sale_rate} onChange={(e) => { changeHanle(e, item?.country_id._id) }} />
                                </td>
                                <td>
                                    <input type="number" name="wholeSale_rate" className="form-control" required value={item?.wholeSale_rate} onChange={(e) => { changeHanle(e, item?.country_id._id) }} />
                                </td>
                                <td>
                                    <input type="number" name="retail_price" className="form-control" required value={item?.retail_price} onChange={(e) => { changeHanle(e, item?.country_id._id) }} />
                                </td>
                                <td>
                                    <input type="number" name="showRoom_rate" className="form-control" required value={item?.showRoom_rate} onChange={(e) => { changeHanle(e, item?.country_id._id) }} />
                                </td>

                                <td>
                                    <input type="number" name="discount" className="form-control" required value={item?.discount} onChange={(e) => { changeHanle(e, item?.country_id._id) }} />
                                </td>

                                <td>
                                    <select className="selectOptions" name="discount_type" aria-label="Default select example" value={item?.discount_type} onChange={(e) => { changeHanle(e, item?.country_id._id) }}>
                                        <option value='Amount' >Amount</option>
                                        <option value='Percent'>Percent</option>
                                    </select>
                                </td>
                                <td>
                                    <input type="text" name="sku" className="form-control" value={item?.sku} onChange={(e) => { changeHanle(e, item?.country_id._id) }} />
                                </td>

                                <td>
                                    <input type="text" name="hsn_code" className="form-control" value={item?.hsn_code} onChange={(e) => { changeHanle(e, item?.country_id._id) }} />
                                </td>
                                <td>
                                    <input type="number" name="sale_rp" className="form-control" value={item?.sale_rp} onChange={(e) => { changeHanle(e, item?.country_id._id) }} />
                                </td>
                                <td>
                                    <input type="number" name="share_rp" className="form-control" value={item?.share_rp} onChange={(e) => { changeHanle(e, item?.country_id._id) }} />
                                </td>
                            </tr>

                        })}
                    </tbody>
                    <tbody>
                        <tr>
                            <td colSpan={4}><button type="button" className="btn btn-success" onClick={coped}>Copy Price To All</button></td>
                        </tr>
                    </tbody>
                </table>
            </Modal.Body>
            <Modal.Footer>
                <button type="button" className="btn btn-success" onClick={() => { sendData(props.index) }}>Save</button>
            </Modal.Footer>
        </Modal>
    );
}

export default PriceMoalParams