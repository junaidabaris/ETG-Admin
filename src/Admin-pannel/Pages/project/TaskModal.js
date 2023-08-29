
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { BsTagFill } from 'react-icons/bs';
import Select from "react-select";

import { useState } from "react";

function TaskModal(props) {
    const options4 = [
        { value: "Azhruddin Shammim", label: "Azhruddin Shammim" },
        { value: "Staff1 Sec", label: "Staff1 Sec" },
      ];
      const options5 = [
        { value: "Azhruddin Shammim", label: "Azhruddin Shammim" },
        { value: "Staff1 Sec", label: "Staff1 Sec" },
      ];
      const [show, setShow] = useState(false);
    const [value,setValue] = useState(null);
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <div className="container">
                    <div className="card">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="form">
                                        <label className="form-label">
                                        Attachment
                                        </label>
                                        <input className="form-control" type="file"/>
                                    </div>
                                    <div className="form">
                                        <label className="form-label">
                                        Subject
                                        </label>
                                        <input className="form-control" type="text"/>
                                    </div>
                                    <div className="form">
                                        <label className="form-label">
                                        Hourly Rate
                                        </label>
                                        <input className="form-control" type="number"/>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form">
                                        <label className="form-label">Start Date</label>
                                        <input className="form-control" type="date"/>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form">
                                        <label className="form-label">Due Date</label>
                                        <input className="form-control" type="date"/>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form">
                                        <label className="form-label">Related To</label>\
                                        <select className="form-select">
                                            <option>

                                            </option>
                                            <option>Project</option>
                                            <option>Invoice</option>
                                            <option>Customer </option>
                                            <option>Estimate</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-md-6">

                                </div>
                                <div className="col-md-6">
                                  <div className="form">
                                    <label className="form-label">
                                    Assignees
                                    </label>
                                    <Select options={options4} defaultValue={value}/>
                                  </div>

                                </div>
                                <div className="col-md-6">
                                  <div className="form">
                                    <label className="form-label">
                                    Followers
                                    </label>
                                    <Select options={options5} defaultValue={value} />
                                  </div>
                                  
                                </div>
                                <div className="col-md-6">
                                  <div className="form">
                                    <label className="form-label">
                                    <BsTagFill/>Tags
                                    </label>
                                    
                                  </div>
                                  <div className="col-md-6">
                                    
                                  </div>
                                  
                                </div>
                                <div className="col-md-6">

                                </div>
                                <div className="col-md-12">
                                  <div className="form">
                                    <label className="form-label">Estimate Hours</label>
                                    <input className="form-control" type="number"/>
                                  </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                      <div className="card-body">
                        <div className="row">
                          <div className="col-md-12">
                            <div className="form">
                              <label className=" form-label">
                                Task Description
                              </label>
                              <textarea className="form-control" type="text"/>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                   </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
export default TaskModal