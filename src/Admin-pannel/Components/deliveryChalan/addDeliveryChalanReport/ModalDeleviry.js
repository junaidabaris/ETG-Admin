import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

function ModalDeleviry(props) {
    let selectedVariants = []
    const [values, setValues] = useState(props?.cartData)
    const sendData = (data, i) => {
        let flag = false
        let index;
        if (selectedVariants?.length === 0) {
            selectedVariants.push({ data })
        } else {
            for (let i = 0; i < selectedVariants.length; i++) {
                if (selectedVariants[i]._id === data._id) {
                    flag = true
                    index = i
                }
            }
            if (index) {
                selectedVariants.splice(index, 1)
            }
            if (!flag) {
                selectedVariants.push({ data })
            }
        }

    }

    const setQty = (e,v) => {
        const maped = values.map((item,i) => {
            if (i == v) {
                const obj = { ...item, qty: e.target.value }
                return obj
            }else{
                return item
            }
        })
        setValues(maped)
    }

    return <Modal
        {...props}
        size="lg"
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
                        <td><label className="control-label">Max Stock</label></td>
                        <td><label className="control-label">Quantity <span style={{color:"red"}}>(Qty must be less then equal to max stock)</span></label></td>
                    </tr>

                </thead>

                <tbody>

                    {values && values?.map((item, i) => {
                        return <tr>
                            <td>
                                <Form>
                                    <Form.Check
                                        onClick={() => sendData(item, i)}
                                        inline
                                        name="group1"
                                        type='checkbox'
                                        id={`inline-checkbox-1`}
                                    />
                                </Form>
                            </td>
                            <td>
                                <label name="productName" className="control-label">{item.productId?.name}</label>
                            </td>
                            <td>
                                <input type="text" disabled value={item?.sku} name="sku" className="form-control" />
                            </td>
                            <td>
                                <input type="text" disabled value={item?.variantId.weight} name="rate" className="form-control" />
                            </td>
                            <td>
                                <input type="text" disabled value={item?.serialNo?.length} name="actual_rate" className="form-control" />
                            </td>
                            <td>
                            <input type="text" value={item?.qty} name="qty" id={item?._id} onChange={(e)=>{setQty(e,i)}} className="form-control"/>
                            </td>

                        </tr>
                    })}

                </tbody>

            </table>
        </Modal.Body>
        <Modal.Footer>
            <Button onClick={() => props.SaveData(selectedVariants)}>Send</Button>
        </Modal.Footer>
    </Modal>

}

export default ModalDeleviry