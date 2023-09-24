import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';

function PriceModal(props) {
    const [val, setVal] = useState(props?.prices)
    const changeHanle = (e, id) => {
        const clone = [...val]
        const maped = clone.map((item) => {
            if (item?.country_id._id == id) {
                return { ...item, [e.target.name]: e.target.value }
            } else {
                return item
            }
        })
        setVal(maped);
    }

    const sendData = (i) => {
        props.setData(val,i)
        props.onHide()
    }
    return (
        <Modal
            {...props}
            size="xxl"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Pricing Detail
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <table className="table table-bordered physical_product_show">
                    <thead>

                        <tr>
                            <td><label className="control-label">Country</label></td>
                            <td><label className="control-label">MRP</label></td>
                            <td><label className="control-label">Purchase Rate</label></td>
                            <td><label className="control-label">Tax %</label></td>
                            <td><label className="control-label">Tax Type</label></td>
                            <td><label className="control-label">Sale Rate</label></td>
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
                                    <input type="text" name="mrp" disabled className="form-control" required value={item?.country_id?.name} readOnly />
                                </td>
                                <td>
                                    <input type="number" name="mrp" className="form-control" required value={item?.mrp} onChange={(e) => { changeHanle(e, item?.country_id._id) }}/>
                                </td>

                                <td>
                                    <input type="text" name="purchase_rate" className="form-control" defaultValue={""} value={item?.purchase_rate} onChange={(e) => { changeHanle(e, item?.country_id._id) }} />
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


                                <td>
                                    <input type="number" name="sale_rate" className="form-control" required value={item?.sale_rate} onChange={(e) => { changeHanle(e, item?.country_id._id) }} />
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
                                    <input type="text" name="sale_rp" className="form-control" value={item?.sale_rp} onChange={(e) => { changeHanle(e, item?.country_id._id) }} />
                                </td>
                                <td>
                                    <input type="text" name="share_rp" className="form-control" value={item?.share_rp} onChange={(e) => { changeHanle(e, item?.country_id._id) }} />
                                </td>
                            </tr>

                        })}
                    </tbody>
                </table>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={() => { sendData(props.index) }}>Save</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default PriceModal