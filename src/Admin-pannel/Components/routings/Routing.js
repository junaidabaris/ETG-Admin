import React from "react";
import { FaShirtsinbulk } from "react-icons/fa";
import TableHead from "../tableHeader/TableHead";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import JoditEditor from "jodit-react";
import { useRef } from "react";
import { Link } from "react-router-dom";



function  Routing(){
    
    const [show, setShow] = useState(false);
  const [value, setValue] = useState(null);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const editor = useRef(null);
  const [content, setContent] = useState("");
    return(
        <>
        <div className="container">
            <div className="card p-3">
                <div className="row">
                        <div className="col-6">
                         <label className="form-label">
                            <h5> <FaShirtsinbulk/> Routings</h5>
                         </label>
                        </div>
                </div>
                <hr className="border-secondary opacity-3" />
                <div className="row mt-3">
                    <div className="col-4">
                    <Button
                variant="primary"
                onClick={handleShow}
                style={{ width: 150 }}
              >
                Add Route
              </Button>

              <Modal className="pop" show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Add routing</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="row">
                        <div className="col-4">
                            <div className="">
                                <label className="form-label">
                                Routing code
                                </label>
                                <input className="form-control" type="text"/>
                            </div>
                        </div>
                        <div className="col-8">
                            <div className="">
                                <label className="form-label">
                                Routing name
                                </label>
                                <input className="form-control" type="text"/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <label className="form-label">
                            Notes
                            </label>
                            <JoditEditor
                      ref={editor}
                      value={content}
                      onChange={(newContent) => setContent(newContent)}
                    />
                        </div>
                    </div>
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
                    </div>
                </div>
                <div className="row ">
                    <TableHead/>
                </div>
                <div className="row p-3">
                    <table className="">
                        <thead className="table table-secondary">
                            <tr>
                                <th>
                                    Routing Code  
                                </th>
                                <th>Routing Name</th>
                                <th>Notes</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr className="Trshow">
                                    <td>
                                    ENR00003
                                    <br/>
                  <Link to="/admin/view-routing" className="eidtbtn1">  View</Link>
                      
                                    </td>
                                    <td>
                                    Kiểm TRA
                                    </td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>ENR00002</td>
                                    <td>New Test</td>
                                    <td>sdfsdf</td>
                                </tr>
                                <tr>
                                    <td>
                                    ENR00001
                                    </td>
                                    <td>aaaaaaaaaa</td>
                                    <td></td>
                                </tr>
                            </tbody>
                    </table>
                </div>
                <div className="row">
                            <div className="col-md-6">
                                <label className="form-label">Showing 1 to 1 of 1 entries</label>
                            </div>
                            <div className="col-md-6 text-end">
                                <button className="btn outline-secondary"> Previous</button>
                                <button className="btn btn-primary text-enter" style={{width:20,height:35}}>1</button>
                                <button className="btn outline-secondary"> Next</button>
                            </div>
                        </div>
            </div>
        </div>
        </>
    )
}
export default Routing