import { useState } from "react";
import Vmodal from "./Vmodal";
import SecModal from "./SecModal";
import { Button } from "react-bootstrap";

function AddVochers() {

    const [modalShow, setModalShow] = useState(false);
    const [modalShow2, setModalShow2] = useState(false);
    const [data, sendData] = useState(null);

    const openNewModal = (e) => {
        if (e.key === 'Enter') {
            setModalShow2(true)
        }
    }
    return <>
        <h3 style={{ margin: "15px" }}>Add Vochers</h3>
        <div className="container">
            <div className="card">
                <div className="card-body">
                    <div className="row">
                        <div className="col-8">
                            <div className="row d-block">
                                <div className="col-md-12">
                                    <label className="form-label" for="groups-name">
                                        Account Name<span className="text-danger">*</span>
                                    </label>
                                    <input className="form-control" type="text"></input>
                                </div>
                                <div className="col-md-12">
                                    <label className="form-label" for="groups-name">
                                        Account Data<span className="text-danger">*</span>
                                    </label>
                                    <input className="form-control" type="date"></input>
                                </div>
                                <div className="col-md-12">
                                    <label className="form-label" for="groups-name">
                                        Current Balance<span className="text-danger">*</span>
                                    </label>
                                    <select class="form-select" aria-label="Default select example" onChange={() => { setModalShow(true) }}>
                                        <option>Select Balance</option>
                                        <option value="1">Cash</option>
                                        <option value="2">ICICI Bank</option>
                                    </select>
                                    <Vmodal sendData={sendData} show={modalShow}
                                        onHide={() => setModalShow(false)} />
                                </div>
                                {data && <div className="col-md-6">
                                    <label className="form-label" for="groups-name">
                                        {data}<span className="text-danger">*</span>
                                    </label>
                                    <input className="form-control" onKeyDown={openNewModal} type="text"></input>
                                </div>}
                                {modalShow2 && <SecModal show={modalShow2}
                                    onHide={() => setModalShow2(false)} />}

                                {/* */}
                                <Button style={{margin:"20px 0",width:"200px"} } variant="warning">Save</Button>
                            </div>
                        </div>
                        <div className="col-4">
                            {/* list */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}
export default AddVochers