import React from "react";
import { useState } from "react";
import { BsTagFill } from 'react-icons/bs'
import { BiWindows } from 'react-icons/bi'
import TableHead from "../tableHeader/TableHead";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
function Milestone(){
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
                  +  Milestone
                </Button>
                <button className="btn text-only ml-2"><BiWindows/></button>

                <Modal className="cusModal" show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>
                      <h4>Milestone</h4>
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="">
                                <label className="form-label">
                                Name
                                </label>
                                <input className="form-control" type="text"/>
                                </div>

                                <div className="">
                                <label className="form-label">
                                Start Date
                                </label>
                                <input className="form-control" type="date"/>
                                </div>
                                <div className="">
                                <label className="form-label">
                                Due Date
                                </label>
                                <input className="form-control" type="date"/>
                                </div>
                                <div className="">
                                <label className="form-label">
                                Description
                                </label>
                                <textarea className="form-control" type="date"/>
                                </div>
                                <div className="mt-3">
                                <div className="form-check">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
  <label className="form-check-label" for="flexCheckDefault">
  Show description to customer
  </label>
</div>
                                </div>
                                <div className="mt-3">
                                <div className="form-check">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
  <label className="form-check-label" for="flexCheckDefault">
  Hide from customer
  </label>
</div>
                                </div>
                                <div className="mt-3">
                                <label className="form-label">
                                Order
                                </label>
                                <input className="form-control" type="number"/>
                                </div>
                                
                            </div>
                            <hr className="border-1 border-secondary mt-3"/>
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
                                        Name
                                    </th>
                                    
                                    <th>Start Date</th>
                                    <th>Due Date </th>
                                    <th>Description</th>
                                   
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
export default Milestone