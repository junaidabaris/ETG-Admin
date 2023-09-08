import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { FaTasks } from 'react-icons/fa'
import Modal from 'react-bootstrap/Modal'
import InputColor from 'react-input-color'


function ToDoCategory() {
    const [show, setShow] = useState(false)
    const handleShow = () => setShow(true)
    const handleClose = () => setShow(false)
    const [color, setColor] = React.useState({});

    return (

        <>
            <div className='container'>
                <Card>
                    <Card.Body>
                        <div className='row mt-2'>
                            <div className='col-md-6 mt-3'>
                                <h5>To Do Category</h5>
                            </div>
                            <div className='col-md-6 d-flex justify-content-end'>
                                <Button variant="primary" className='mr-2' onClick={handleShow}>Add To Do Category</Button>
                                <Modal className='popup' show={show} onHide={handleClose} style={{ width: 800 }}>
                                    <Modal.Header >
                                        <Modal.Title>
                                            Add To do Category
                                        </Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <div className='col-md-12'>
                                            <label for="" className='form-label'><strong className='fs-4 text-danger '>*</strong>Category Name</label>
                                            <input type="text" className='form-control' />
                                        </div>
                                        <div className='col-md-12 mt-3 mb-3'>
                                            <label for="" className=''>Color</label>
                                            <div>
                                                <InputColor

                                                    initialValue="#5e72e4"
                                                    onChange={setColor}
                                                    placement="right"


                                                />
                                            </div>
                                        </div>

                                    </Modal.Body>
                                    <Modal.Footer>
                                        <Button variant="secondary" onClick={handleClose}>
                                            Close
                                        </Button>
                                        <Button variant="primary" onClick={handleShow}>
                                            Save
                                        </Button>
                                    </Modal.Footer>
                                </Modal>
                                <Button variant="outline-light">Back</Button>
                            </div>
                        </div>

                    </Card.Body>
                    <hr className='border-1 border-secondary' />
                    <Card.Body>
                        <div className='col-md-12 border  p-2'>
                            <h6 className='fs-6'> <FaTasks className='mr-2' />To Do Category</h6>
                            <div>
                                Model Selection

                            </div>


                        </div>

                    </Card.Body>
                    <div className='col-md-12 border border-secondary'>

                    </div>
                </Card>
            </div>

        </>
    )
}

export default ToDoCategory
