import React from "react";
import { useState } from "react";
import { BsTagFill } from 'react-icons/bs'
import TableHead from "../tableHeader/TableHead";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
function Timesheets(){
    const [show, setShow] = useState(false);
    const [value,setValue] = useState(null);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [modalShow, setModalShow] = useState(false);
    return(
        <>
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                <Button
                  variant="primary"
                  onClick={handleShow}
                  style={{ width: 150 }}
                >
                  Timesheet
                </Button>

                <Modal className="cusModal" show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>
                      <h4>Timesheet</h4>
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                        <div className="row">
                            <div className="col-md-12">
                                <BsTagFill/>
                                <label className="form-label">
                                Tags
                                </label>
                            </div>
                            <hr className="border-1 border-secondary mt-3"/>
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                                <div className="">
                                    <label className="form-label mt-2">
                                    Start Time
                                    </label>
                                </div>
                                <div className="mt-2">
                                    <label className="form-label mt-2">
                                    End Time
                                    </label>
                                </div>
                                <div className="mt-2">
                                    <label className="form-label mt-2">
                                    Task
                                    </label>
                                </div>
                                <div className="mt-2">
                                    <label className="form-label mt-2">
                                    Member
                                    </label>
                                </div>
                                <div className="mt-2">
                                    <label className="form-label mt-2">
                                    Note
                                    </label>
                                </div>
                            </div>
                            <div className="col-md-8">
                            <div className="">
                                    <input className="form-control" type="datetime-local"/>
                                </div>
                                <div className="mt-2">
                                    <input className="form-control" type="datetime-local"/>
                                </div>
                                <div className="mt-2">
                                    <select className="form-select">
                                        <option></option>
                                        <option></option>
                                    </select>
                                </div>
                                <div className="mt-2">
                                    <select className="form-select">
                                        <option></option>
                                        <option></option>
                                    </select>
                                </div>
                                <div className="mt-2">
                                    <textarea className="form-control" type="text"/>
                                </div>
                            </div>
                        </div>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                      Save 
                    </Button>
                  </Modal.Footer>
                </Modal>
                </div>
            </div>
            <div className="card mt-3">
                <div className="card-body">
                    <div className="">
                        <TableHead/>
                    </div>
                    <div className="row">
                        <table className="table-secondary">
                            <thead>
                                <tr>
                                    <th>
                                        Members
                                    </th>
                                    <th>Task</th>
                                    <th>Timesheet Tags</th>
                                    <th>Start Time</th>
                                    <th>End Time </th>
                                    <th>Note</th>
                                    <th>Time(h)</th>
                                    <th>Time(decimal)</th>
                                    <th>Options</th>
                                </tr>

                            </thead>
                            <tbody>
                            No entries found
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Timesheets