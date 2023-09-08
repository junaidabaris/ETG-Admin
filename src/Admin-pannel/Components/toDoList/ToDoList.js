
import React, { useState } from 'react';
import { GrAlert } from 'react-icons/gr'
import { AiOutlineCheck } from 'react-icons/ai'
import Modal from "react-bootstrap/Modal"
import Button from 'react-bootstrap/Button';
import Select from 'react-select'
import { AiOutlinePlus } from 'react-icons/ai'
import InputColor from 'react-input-color'
import { Link } from 'react-router-dom';
function TodoList() {
    const [show, setShow] = useState(false)
    const [show1, setShow1] = useState(false)


    const handleShow = () => setShow(true)
    const handleClose = () => setShow(false)

    const handleShow1 = () => setShow1(true)
    const handleClose1 = () => setShow1(false)

    const [value, setValue] = useState(null)

    const [color, setColor] = React.useState({});
    const options = [
        { value: 1, label: "Model Selection" }
    ]



    return (
        <>
            <div className="container">
                <div className="card">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-6">
                                <h5>My To Do List</h5>
                            </div>
                            <div className="col-md-6 d-flex justify-content-end">
                                <button className="btn btn-primary mr-2" onClick={handleShow} >New To Do</button>
                                <Modal className="popup" show={show} onHide={handleClose} style={{ width: 800 }}>
                                    <Modal.Header closeButton>
                                        <Modal.Title> Add New Todo</Modal.Title>

                                    </Modal.Header>
                                    <Modal.Body>
                                        <div className='col-md-12'>
                                            <label for="" className='form-label'><strong className='fs-4 text-danger '>*</strong>Description</label>
                                            <textarea name="" id="" cols="30" rows="5" className='form-control'></textarea>
                                        </div>
                                        <div className='row mt-3'>
                                            <label for="" className='form-label'><strong className='fs-4 text-danger '>*</strong>To Do Category</label>
                                            <div className='col-md-11'>
                                                <Select options={options} defaultValue={value} placeholder="Nothing Selected"></Select>
                                            </div>
                                            <div className=' col-md-1 '>
                                                <strong className='  btn text-info ' onClick={handleShow1}><AiOutlinePlus /></strong>
                                                <Modal className='popup' show={show1} onHide={handleClose1} style={{ width: 800 }}>
                                                    <Modal.Header closeButton   >
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
                                                        <Button variant="secondary" onClick={handleClose1}>
                                                            Close
                                                        </Button>
                                                        <Button variant="primary" onClick={handleShow1}>
                                                            Save
                                                        </Button>
                                                    </Modal.Footer>
                                                </Modal>
                                            </div>
                                        </div>
                                        <div className='col-md-12 mt-3'>
                                            <label className='form-label' htmlFor="">Priority</label>
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input fs-6"
                                                    type="radio"
                                                    name="flexRadioDefault"
                                                    id="flexRadioDefault1"
                                                />
                                                <label className="form-check-label fs-6" htmlFor="flexRadioDefault1">
                                                    Low
                                                </label>
                                            </div>
                                            <div className="form-check fs-6">
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    name="flexRadioDefault"
                                                    id="flexRadioDefault2"
                                                    defaultChecked=""
                                                />
                                                <label className="form-check-label fs-6 text-info" htmlFor="flexRadioDefault2">
                                                    Medium
                                                </label>

                                            </div>
                                            <div className="form-check fs-6">
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    name="flexRadioDefault"
                                                    id="flexRadioDefault1"
                                                />
                                                <label className="form-check-label fs-6 text-fd7e14" htmlFor="flexRadioDefault1">
                                                    High
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input fs-6"
                                                    type="radio"
                                                    name="flexRadioDefault"
                                                    id="flexRadioDefault2"
                                                    defaultChecked=""
                                                />
                                                <label className="form-check-label fs-6 text-danger" htmlFor="flexRadioDefault2">
                                                    Urgent
                                                </label>
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
                                <Link to='/admin/to-do-category'>
                                    <button className="btn btn-primary">To Do Category</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <div className='col-md-12'>
                            <button className=' btn-outline-info mr-3' style={{ borderRadius: 30, height: 30, width: 45 }}>All</button>
                            <button className=' btn-outline-secondary p-1' style={{ borderRadius: 30, height: 30, width: 120 }}>Model Selection</button>

                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">

                        <div className='row' >
                            <div className='col-md-6'>
                                <div className='border border-light'>
                                    <h6 className='ml-3 mt-2 fw-bolder'><GrAlert /> Unfinished to do's</h6>
                                    <hr className='border border-secondary' />
                                    <span >
                                        No result Found
                                    </span>

                                </div>
                                <div className='text-center mt-5'>
                                    <button className='btn btn-outline-secondary text-center'>Load More</button>
                                </div>

                            </div>
                            <div className='col-md-6'>
                                <div className='border border-light'>
                                    <h6 className='ml-3 mt-2 fw-bolder'><AiOutlineCheck />  Latest finished to do's</h6>
                                    <hr className='border border-secondary' />
                                    <span >
                                        No result Found
                                    </span>
                                </div>
                                <div className='text-center mt-5'>
                                    <button className='btn btn-outline-secondary '>Load More</button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default TodoList