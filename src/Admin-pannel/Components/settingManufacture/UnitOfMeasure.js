import React from "react";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { FaList } from "react-icons/fa"
import { AiFillEdit } from "react-icons/ai"
import { AiOutlineCloseCircle } from "react-icons/ai"
import TableHead from "../tableHeader/TableHead";
import { Select } from "@mui/material";

function UnitOfMeasure(){
    const options = [
        { value: "All WareHouse", label: "All WareHouse" },
        { value: "System WareHouse", label: "System WareHouse" },
        { value: "Warehouse2", label: "Warehouse2" },
      ];
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [show1, setShow1] = useState(false);
    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);
    const [value, setValue] = useState(null);
    return(
        <>
            <div className="container">
                <div className="card p-3">
                    <div className="row">
                        <label className="form-label">
                            <h5> <FaList/> Unit of measure</h5>
                        </label>
                    </div>
                    <hr className="border-secondary opacity-3" />
                    <div className="row">
                        <div className="col-6 mb-2">
                        <Button variant="primary" onClick={handleShow1}>
       Add
      </Button>

      <Modal className="updateUnitModel" show={show1} onHide={handleClose1}>
        <Modal.Header closeButton>
          <Modal.Title>Add unit of measure</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
           <div className="row">
            <div className="col-6">
                <div className="">
                    <label className="form-label">
                    Unit of measure
                    </label>
                    <input className="form-control" type=" text"/>
                </div>
            </div>
            <div className="col-6">
                <div className="">
                    <label className="form-label">
                    Category
                    </label>
                    <select className="form-select">
                        <option>
                            None Selected
                        </option>
                        <option>
                            None Selected
                        </option>
                        <option>
                            None Selected
                        </option>
                    </select>
                </div>
            </div>
           </div>
           <div className="row mt-3">
           <div className="col-6">
                <div className="">
                    <label className="form-label">
                    Type
                    </label>
                    <select className="form-select">
                        <option>
                        Reference Unit of Measure for this category
                        </option>
                        <option>
                        Bigger than the reference Unit of Measure
                        </option>
                        <option>
                        Smaller than the reference Unit of Measure
                        </option>
                    </select>
                    {/* <Select
                                  options={options}
                                  defaultValue={value}
                                  className="form-select"
                                  style={{height:"10"}}
                                /> */}
                </div>
            </div>
           <div className="col-6">
                <div className="">
                    <label className="form-label">
                    Rounding Precision
                    </label>
                    <input className="form-control" type="number"/>
                </div>
            </div>
           </div>
           <div className="row mt-3">
            <div className="col-6">
            <Form>
      {['checkbox'].map((type) => (
        <div key={`default-${type}`} className="mb-3">
          <Form.Check // prettier-ignore
            type={type}
            id={`default-${type}`}
            label={`Active`}
          />
        </div>
      ))}
    </Form>
            </div>
           </div>
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
                    <div className="row">
                        <table className="table">
                            <thead className="table-secondary">
                                <tr>
                                    <th>
                                        Unit Of Measure
                                    </th>
                                    <th>Category</th>
                                    <th>type</th>
                                    <th>Options</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                               <td> Peice</td>
                               <td> </td>
                               <td> Reference Unit of Measure for this category</td>
                               <td>
                                    <Button variant="" onClick={handleShow}>
       <AiFillEdit/>
      </Button>

      <Modal className="updateUnitModel" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update unit of measure</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
           <div className="row">
            <div className="col-6">
                <div className="">
                    <label className="form-label">
                    Unit of measure
                    </label>
                    <input className="form-control" type=" text"/>
                </div>
            </div>
            <div className="col-6">
                <div className="">
                    <label className="form-label">
                    Category
                    </label>
                    <select className="form-select">
                        <option>
                            None Selected
                        </option>
                        <option>
                            None Selected
                        </option>
                        <option>
                            None Selected
                        </option>
                    </select>
                </div>
            </div>
           </div>
           <div className="row mt-3">
           <div className="col-6">
                <div className="">
                    <label className="form-label">
                    Type
                    </label>
                    <select className="form-select">
                        <option>
                        Reference Unit of Measure for this category
                        </option>
                        <option>
                        Bigger than the reference Unit of Measure
                        </option>
                        <option>
                        Smaller than the reference Unit of Measure
                        </option>
                    </select>
                    {/* <Select
                                  options={options}
                                  defaultValue={value}
                                  className="form-select"
                                  style={{height:"10"}}
                                /> */}
                </div>
            </div>
           <div className="col-6">
                <div className="">
                    <label className="form-label">
                    Rounding Precision
                    </label>
                    <input className="form-control" type="number"/>
                </div>
            </div>
           </div>
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
                </div>
            </div>
        </>
    )
}export default UnitOfMeasure