import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
function Vmodal(props) {
    const valsSend = (str) => {
        props.sendData(str)
        props.onHide()
    }
    return <>
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                {/* <Modal.Title id="contained-modal-title-vcenter">
                    Modal heading
                </Modal.Title> */}
            </Modal.Header>
            <Modal.Body>
                <h6 style={{ cursor: "pointer" }} onClick={() => { valsSend('Ace Ecloctronics') }}>Ace Ecloctronics</h6>
                <h6 style={{ cursor: "pointer" }} onClick={() => { valsSend('A-one Ecloctronics') }}>A-one Ecloctronics</h6>
                <h6 style={{ cursor: "pointer" }} onClick={() => { valsSend('Assembly Charges') }}>Assembly Charges</h6>
                <h6 style={{ cursor: "pointer" }} onClick={() => { valsSend('Banck Charges') }}>Banck Charges</h6>
                <h6 style={{ cursor: "pointer" }} onClick={() => { valsSend('CGST') }}>CGST</h6>
                <h6 style={{ cursor: "pointer" }} onClick={() => { valsSend('Rent') }}>Rent</h6>
                <h6 style={{ cursor: "pointer" }} onClick={() => { valsSend('Sales') }}>Sales</h6>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    </>

}
export default Vmodal