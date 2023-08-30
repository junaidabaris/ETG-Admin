
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
function SecModal(props) {
    const valsSend = (str) => {

    }
    return <>
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Bank Allocation for : ICICI Bank\
                    For : 10020
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h5>Transaction Type   :  Amount</h5>
                <Form.Select aria-label="Default select example">
                    <option>Select option</option>
                    <option value="1">Cheque</option>
                    <option value="2">UPI</option>
                    <option value="3">Net Banking</option>
                </Form.Select>
                <input className='form-control' placeholder='Enter-Upi / Cheque' style={{margin:"10px 0"}}/>
                <div>
                    <div>Inst Date</div>
                    <input className='form-control' type="date" style={{margin:"10px 0"}}/>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
                <Button onClick={props.onHide}>Save</Button>
            </Modal.Footer>
        </Modal>
    </>

}
export default SecModal