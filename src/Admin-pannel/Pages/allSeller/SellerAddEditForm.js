import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useParams } from 'react-router';
import { useAddSellerListMutation, useEditSellerListMutation, useGetSellerDetailQuery } from '../../Components/all-products/allproductsApi/allProductsApi';

function SellerAddEditForm() {
    const params = useParams()
    const [validated, setValidated] = useState(false);
    const [sendDataItem] = useAddSellerListMutation()
    const { data, isSuccess } = useGetSellerDetailQuery(params.id)
    const [status, setSatatus] = useState({ verification_status: false, cash_on_delivery_status: false, bank_payment_status: false })

    const [state, setState] = useState({
        firstname: "",
        lastname: "",
        long: "",
        lat: "",
        addressLine1: "",
        addressLine2: "",
        country: "",
        state: "",
        city: "",
        landmark: "",
        province: "",
        remaining_uploads: "",
        email: "",
        mobile: "",
        remaining_digital_uploads: "",
        invalid_at: "",
        remaining_auction_uploads: "",
        rating: "",
        num_of_reviews: "",
        num_of_sale: "",
        verification_status: false,
        cash_on_delivery_status: false,
        admin_to_pay: "",
        bank_name: "",
        tax_number: "",
        bank_acc_no: "",
        bank_payment_status: false
    }
    )

    const [update] = useEditSellerListMutation()

    const onChangeHandle = (e) => {
        const clone = { ...state }
        clone[e.target.name] = e.target.value
        setState(clone)
    }

    const ChengeStatus = (str) => {
        const clone = { ...status }
        for (const key in status) {
            if (str === key) {
                if (status[key].value) {
                    clone[key] = false
                } else {
                    clone[key] = true
                }
            }
        }
        setSatatus(clone);
    }

    const sendData = (event) => {
        event.preventDefault()
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
        const mergData = { ...state, ...status }
        if (params.id) {
            update({ data: mergData, id: params.id, location: { long: state.long, lat: state.lat } })
        } else {
            sendDataItem(mergData, { location: { long: state.long, lat: state.lat } });
        }
    }

    useEffect(() => {
        if (params.id) {
            const obj = {
                seller_name: data?.firstname,
                remaining_uploads: "",
                remaining_digital_uploads: "",
                invalid_at: "",
                remaining_auction_uploads: "",
                rating: "",
                num_of_reviews: "",
                num_of_sale: "",
                verification_status: data?.approve,
                cash_on_delivery_status: false,
                admin_to_pay: "",
                bank_name: "",
                email: data?.email,
                mobile: data?.mobile,
                bank_acc_no: "",
                bank_payment_status: false
            }
            setState(obj)
        }
    }, [params, isSuccess])



    return <div className='container'>
        {params.id ? <h2>Update Seller</h2> : <h2>Add Seller</h2>}
        <Form noValidate validated={validated} onSubmit={sendData}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" name='firstname' onChange={onChangeHandle} value={state?.firstname} style={{ width: "50%" }} placeholder="First Name" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" name='lastname' onChange={onChangeHandle} value={state?.lastname} style={{ width: "50%" }} placeholder="Last Name" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Longitutde</Form.Label>
                <Form.Control type="text" name='long' onChange={onChangeHandle} value={state?.long} style={{ width: "50%" }} placeholder="Longitude" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Latitutde</Form.Label>
                <Form.Control type="text" name='lat' onChange={onChangeHandle} value={state?.lat} style={{ width: "50%" }} placeholder="Latitutde" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Address Lane 1</Form.Label>
                <Form.Control type="text" name='addressLine1' onChange={onChangeHandle} value={state?.addressLine1} style={{ width: "50%" }} placeholder="Address Lane 1" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Address Lane 2</Form.Label>
                <Form.Control type="text" name='addressLine2' onChange={onChangeHandle} value={state?.addressLine2} style={{ width: "50%" }} placeholder="Address Lane 2" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Country</Form.Label>
                <Form.Control type="text" name='country' onChange={onChangeHandle} value={state?.country} style={{ width: "50%" }} placeholder="Country" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>State</Form.Label>
                <Form.Control type="text" name='state' onChange={onChangeHandle} value={state?.state} style={{ width: "50%" }} placeholder="State" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>City</Form.Label>
                <Form.Control type="text" name='city' onChange={onChangeHandle} value={state?.city} style={{ width: "50%" }} placeholder="City" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>LandMark</Form.Label>
                <Form.Control type="text" name='landmark' onChange={onChangeHandle} value={state?.landmark} style={{ width: "50%" }} placeholder="LandMark" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Province</Form.Label>
                <Form.Control type="text" name='province' onChange={onChangeHandle} value={state?.province} style={{ width: "50%" }} placeholder="Province" required />
            </Form.Group>

            {/* <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" name='seller_name' onChange={onChangeHandle} value={state?.seller_name} style={{ width: "50%" }} placeholder="Seller Name" required />
            </Form.Group> */}

            {/* <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Rating</Form.Label>
                <Form.Control type="number" name='rating' onChange={onChangeHandle} value={state?.rating} style={{ width: "50%" }} placeholder="Rating In Number" required />
            </Form.Group> */}
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" name='email' onChange={onChangeHandle} value={state?.email} style={{ width: "50%" }} placeholder="Email" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Mobile Number</Form.Label>
                <Form.Control type="number" name='mobile' onChange={onChangeHandle} value={state?.mobile} style={{ width: "50%" }} placeholder="Mobile Number" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Tax Number </Form.Label>
                <Form.Control type="text" name='bank_name' onChange={onChangeHandle} value={state?.tax_number} style={{ width: "50%" }} placeholder="tax_number" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Bank Name</Form.Label>
                <Form.Control type="text" name='bank_name' onChange={onChangeHandle} value={state?.bank_name} style={{ width: "50%" }} placeholder="Bank Name" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Bank Acount Number</Form.Label>
                <Form.Control name='bank_acc_no' type="text" onChange={onChangeHandle} value={state?.bank_acc_no} style={{ width: "50%" }} placeholder="Bank Acount Number" required />
            </Form.Group>

            <Form.Group className="mb-3 d-flex" controlId="formBasicPassword">
                <Form.Label>Bank Payment Status</Form.Label>
                <label className="aiz-switch aiz-switch-success mb-0 d-flex"><input name="status" onClick={() => { ChengeStatus("bank_payment_status") }} type="checkbox" value="1" checked={status.bank_payment_status} />
                    <span className="slider round" style={{ marginLeft: "20px" }}></span>
                </label>
            </Form.Group>

            <Form.Group className="mb-3 d-flex" controlId="formBasicPassword">
                <Form.Label>Verification Status</Form.Label>
                <label className="aiz-switch aiz-switch-success mb-0 d-flex"><input onClick={() => { ChengeStatus("verification_status") }} name="status" type="checkbox" value="1" checked={status.verification_status} />
                    <span className="slider round" style={{ marginLeft: "20px" }}></span>
                </label>
            </Form.Group>

            <Form.Group className="mb-3 d-flex" controlId="formBasicPassword">
                <Form.Label>Cash on Delivery Status</Form.Label>
                <label className="aiz-switch aiz-switch-success mb-0 d-flex"><input onClick={() => { ChengeStatus("cash_on_delivery_status") }} name="status" type="checkbox" value="1" checked={status.cash_on_delivery_status} />
                    <span className="slider round" style={{ marginLeft: "20px" }}></span>
                </label>
            </Form.Group>

            <Button variant="primary" type="submit" >
                Submit
            </Button>
        </Form>
    </div >
}
export default SellerAddEditForm