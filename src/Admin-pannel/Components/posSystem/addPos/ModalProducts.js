
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

function ModalProducts(props) {
    let selectedVariants = []
    const [values, setValues] = useState(props?.cartData?.variations)
    const sendData = (data, i) => {
        console.log(data);
        let flag = false
        let index;
        if (selectedVariants?.length === 0) {
            selectedVariants.push({ productName: props?.cartData?.name, ...data, productId: props?.cartData?.uid, variantId: data?.uid })
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
                selectedVariants.push({ productName: props?.cartData?.name, ...data, productId: props?.cartData?.uid, variantId: data?.uid })
            }
        }
    }

    const setQty = (i) => {
        const maped = values.map((item) => {
            if (item._id === i.target.id) {
                const obj = { ...item, qty: +i.target.value }
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
                        {/* <td><label className="control-label">SKU</label></td> */}
                        <td><label className="control-label">Variant</label></td>
                        <td><label className="control-label">Actual Rate</label></td>
                        <td><label className="control-label">Quantity</label></td>
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
                                <label name="productName" className="control-label">{props?.cartData?.name}</label>
                            </td>
                            {/* <td>
                                <input type="text" disabled value={item?.sku} name="sku" className="form-control" />
                            </td> */}
                            <td>
                                <input type="text" disabled value={item?.weight} name="rate" className="form-control" />
                            </td>
                            <td>
                                <input type="text" disabled value={item?.mrp} name="actual_rate" className="form-control" />
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
            <Button onClick={() => props.SaveData(selectedVariants)}>Send</Button>
        </Modal.Footer>
    </Modal>

}

export default ModalProducts