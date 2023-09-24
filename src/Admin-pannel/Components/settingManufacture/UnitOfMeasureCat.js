import React from "react";
import { BsSunFill } from 'react-icons/bs'
import { AiFillEdit } from 'react-icons/ai'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import TableHead from "../tableHeader/TableHead";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
function UnitOfMeasureCat(){
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    const [show1, setShow1] = useState(false);

  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);

    return(
        <>
        <div className="container">
            <div className="card p-3">
                <div className="row"> 
                    <label className="form-label">
                        <h5> <BsSunFill/> Units of measure categories</h5>
                    </label>
                </div>
                <hr className="border-secondary opacity-3" />
                <div className="row">
                    <div className="col-6">
                    <Button variant="primary" onClick={handleShow1}>
      Add
      </Button>

      <Modal className="editModel" show1={show1} onHide={handleClose1}>
        <Modal.Header closeButton>
          <Modal.Title>Add category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Category name 1</Form.Label>
              <Form.Control
                type="text"
                autoFocus
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose1}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose1}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

                    </div>
                    <TableHead/>
                </div>
                <div className="row p-3">
                    <table className="table">
                        <thead className="table-secondary">
                            <tr>
                                <th>Category name</th>
                                <th>Option</th>
                            </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Weight</td>
                                    <td>
                                    <Button variant="" onClick={handleShow}>
       <AiFillEdit/>
      </Button>

      <Modal className="editModel" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Category name</Form.Label>
              <Form.Control
                type="text"
                autoFocus
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      <button className="btn ">
        <AiOutlineCloseCircle/>
      </button>
                                    </td>
                                </tr>
                            </tbody>
                    </table>
                </div>
                <div className="row mt-3">
            <div className="col-md-7">
              <div className="">
                <lable className="form-lable">
                  Showing 1 to 1 of 1 entries
                </lable>
              </div>
            </div>
            <div className="col-md-5 text-end">
              <button
                className="btn-outline-secondary"
                style={{ width: 80, height: 40 }}
              >
                Previous
              </button>
              <button
                className="btn btn-primary"
                style={{ width: 40, height: 40 }}
              >
                1
              </button>
              <button
                className="btn-outline-secondary"
                style={{ width: 80, height: 40 }}
              >
                Next
              </button>
            </div>
          </div>
            </div>
        </div>
        </>
    )
}
export default UnitOfMeasureCat