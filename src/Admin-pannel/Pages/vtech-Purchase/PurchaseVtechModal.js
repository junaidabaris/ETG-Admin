
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

function PurchaseVtechModal(props) {
    const [selectedVariants , setselectedVariants] = useState([])
    const [values, setValues] = useState(props?.cartData?.variations)
    const [dis, setDis] = useState(true)
    const [chnageses, setchnageses] = useState(false)

    const sendData = (data, i) => {
        setDis(false)
        const clone = [...selectedVariants]
        let flag = false
        let index;
        if (clone?.length === 0) {
            console.log(props?.cartData);
            clone.push({ productName: props?.cartData?.name, ...data, productId: props?.cartData?._id, variant: props?.cartData?.variations[i]._id, })
        } else {
            for (let i = 0; i < clone.length; i++) {
                if (clone[i]._id === data._id) {
                    flag = true
                    index = i
                }
            }
            if (index) {
                clone.splice(index, 1)
            }
            if (!flag) {
                clone.push({ productName: props?.cartData?.name, ...data, productId: props?.cartData?._id, variant: props?.cartData?.variations[i]._id })
            }
        }
        setselectedVariants(clone);
    }

    const setQty = (i) => {
        setchnageses(false)
        const maped = values.map((item) => {
            if (item._id === i.target.id) {
                const obj = { ...item, qty: +i.target.value }
                return obj
            } else {
                return item
            }
        })
        setValues(maped)
    }
    const setpurchase_Price = (e) => {
        setchnageses(false)
        const maped = values.map((item) => {
            if (item._id === e.target.id) {
                const obj = { ...item, purchase_Price: +e.target.value }
                return obj
            } else {
                return item
            }
        })
        setValues(maped)
    }
    const getPickups = (e, id) => {
        setchnageses(false)
        const maped = values.map((item) => {
            if (item._id === id) {
                const obj = { ...item, pickupPoint: e.target.value }
                return obj
            } else {
                return item
            }
        })
        setValues(maped)
    }
    const somthingchange = (item, i) => {
        setchnageses(!chnageses)
        sendData(item, i)
    }
    return <Modal
        {...props}
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
    >
        <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
                Select Variant
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <table className="table table-bordered physical_product_show">
                <thead>

                    <tr>
                        <td><label className="control-label">#</label></td>
                        <td><label className="control-label">Product Name</label></td>
                        <td><label className="control-label">SKU</label></td>
                        <td><label className="control-label">Variant</label></td>
                        <td><label className="control-label">PickUp Point</label></td>
                        {/* <td><label className="control-label">Actual Rate</label></td> */}
                        <td><label className="control-label">Purchas Rate</label></td>
                        <td><label className="control-label">Quantity</label></td>
                    </tr>

                </thead>

                <tbody>

                    {values && values.map((item, i) => {
                        return <tr>
                            <td>
                                <CompoCHeack chnageses={chnageses} somthingchange={somthingchange} i={i} item={item}/>
                            </td>
                            <td>
                                <label name="productName" className="control-label">{props?.cartData?.name}</label>
                            </td>
                            <td>
                                <input type="text" disabled value={item?.sku} name="sku" className="form-control" />
                            </td>
                            <td>
                                <input type="text" disabled value={item?.weight} name="rate" className="form-control" />
                            </td>
                            <td style={{ width: "200px" }}>
                                <select className="js-example-basic-multiple js-states js-example-responsive demo-select2 w-100 select2-hidden-accessible selectOptions" name="pickupPoints" data-select2-id={20} tabIndex={-1} aria-hidden="true" value={item?.pickupPoint} onChange={(e) => { getPickups(e, item?._id) }}>
                                    <option>Select Pickup Point</option>
                                    {props.pickUp && props.pickUp.map((itemPickup, i) => {
                                        return <option value={itemPickup._id} key={itemPickup._id} id={item?._id}>{itemPickup.pickupPoint_name}</option>
                                    })}
                                </select>
                            </td>
                            {/* <td>
                                <input type="text" disabled value={item?.actual_rate} name="actual_rate" className="form-control" />
                            </td> */}
                            <td>
                                <input type="text" value={item?.purchase_Price} name="purchase_Price" id={item?._id} onChange={setpurchase_Price} className="form-control" />
                            </td>
                            <td>
                                <input type="text" value={item?.qty} name="qty" id={item?._id} onChange={setQty} className="form-control" />
                            </td>

                        </tr>
                    })}

                </tbody>

            </table>
        </Modal.Body>
        <Modal.Footer>
            {/* <div>Note</div> */}
            <Button onClick={() => props.SaveData(selectedVariants)} disabled={dis}>Send</Button>
        </Modal.Footer>
    </Modal>

}

export default PurchaseVtechModal

function CompoCHeack({somthingchange,chnageses,i ,item}) {
    return <Form>
        <Form.Check
            onClick={() => somthingchange(item, i)}
            inline
            name="group1"
            type='checkbox'
            id={`inline-checkbox-1`}
            // checked={chnageses}
        />
    </Form>
}