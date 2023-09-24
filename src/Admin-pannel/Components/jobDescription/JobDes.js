import React, { useState, useRef } from 'react'
import Select from 'react-select'
import { FiRefreshCcw } from 'react-icons/fi'
import { AiOutlineSearch } from 'react-icons/ai'
import { BsFillTagFill } from 'react-icons/bs'
import { AiOutlinePlus } from 'react-icons/ai'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import JoditEditor from 'jodit-react'
import { Link } from 'react-router-dom'


import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';


function JobDes() {
    const [value, setValue] = useState('')

    const [show, setShow] = useState(false)
    const handleShow = () => {
        setShow(true)
    }
    const handleClose = () => {
        setShow(false)
    }


    const [show1, setShow1] = useState(false)
    const handleShow1 = () => {
        setShow1(true)
    }
    const handleClose1 = () => {
        setShow1(false)
    }


    const options = [
        { value: 1, label: "" }
    ]


    const editor = useRef(null)
    const [content, setContent] = useState(" ")
    return (
        <>
            <div className='container'>
                <div className=' bg-white col-md-12 '>
                    <div className='row '>
                        <div className='col-md-12 mt-3 d-flex'>
                            <button type='button' className='btn btn-primary' onClick={handleShow}>NEW JOB POSITION</button>
                            <Modal className='popup' show={show} onHide={handleClose} style={{ width: 800, }}>
                                <Modal.Header closeButton>
                                    <Modal.Title>
                                        New job
                                    </Modal.Title>

                                </Modal.Header>
                                <Modal.Body>
                                    <div className='row mt-3'>
                                        <div className="col-md-6 ">
                                            <label htmlFor="" className='form-label'><strong className='text-danger'>*</strong> Job Code</label>
                                            <input type="text" className='form-control' />
                                        </div>
                                        <div className="col-md-6 ">
                                            <label htmlFor="" className='form-label'><strong className='text-danger'>*</strong> Name</label>
                                            <input type="text" className='form-control' />
                                        </div>
                                    </div>
                                    <div className='row mt-3'>
                                        <div className="col-md-6 ">
                                            <label htmlFor="" className='form-label'> Job Group</label>
                                            <Select options={options} defaultValue={value} placeholder="None Selected" onChange={setValue} isMulti></Select>
                                        </div>
                                        <div className="col-md-6 ">
                                            <label htmlFor="" className='form-label'> Departments</label>
                                            <Select options={options} defaultValue={value} placeholder="None Selected" onChange={setValue} isMulti></Select>
                                        </div>
                                    </div>
                                    <div className='row mt-3'>
                                        <div className='col-md-3'>
                                            <label htmlFor=""><BsFillTagFill />Tags</label>
                                        </div>
                                    </div>
                                    <div className='row mt-3'>
                                        <div className='col-md-12'>
                                            <label htmlFor="" className='form-label'>Job Descriptions</label>
                                            <JoditEditor
                                                ref={editor}
                                                value={content}
                                                onChange={newContent => setContent(newContent)}
                                            />
                                        </div>
                                    </div>
                                    <div className='row mt-3'>
                                        <div className='col-md-6  '>
                                            <label htmlFor="" className='form-label'>Attachment</label>
                                            <div className='d-flex'>
                                                <input type="file" className='form-control' />
                                                <button className=' btn-success' style={{ width: 40, height: 40, }}><AiOutlinePlus className="fs-5 " /></button>
                                            </div>
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
                            <DropdownButton id="dropdown-basic-button" className='ml-2' title="GROUP">
                                <Dropdown.Item onClick={handleShow1} eventKey="1" >New Group</Dropdown.Item>
                                <Modal className='popup' show={show1} onHide={handleClose1} style={{ width: 700, }}>
                                    <Modal.Header closeButton>
                                        <Modal.Title>New position group</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <div className='row  mt-3'>
                                            <div className='col-md-12'>
                                                <label htmlFor=""><strong className='text-danger form-label' >*</strong>Name</label>
                                                <input type="text" className='form-control' />
                                            </div>
                                            <div className='col-md-12  mt-3'>
                                                <label htmlFor="">Description</label>
                                                <JoditEditor
                                                    ref={editor}
                                                    value={content}
                                                    onChange={newContent => setContent(newContent)}
                                                />
                                            </div>
                                        </div>
                                        <Modal.Footer>
                                            <Button variant="secondary" onClick={handleClose1}>
                                                Close
                                            </Button>
                                            <Button variant="primary" onClick={handleShow1}>
                                                Save
                                            </Button>
                                        </Modal.Footer>

                                    </Modal.Body>
                                </Modal>
                                <Link to='/admin/group-management' >
                                    <Dropdown.Item eventKey="2">Group management </Dropdown.Item>
                                </Link>

                            </DropdownButton>
                            {/* <button type='button' className='btn btn-primary ml-2 dropdown-toggle'>GROUP</button> */}
                            <Link to='/admin/import-excel'>
                                <button type='button' className='btn btn-outline-secondary ml-2'>IMPORT EXCEL</button>
                            </Link>
                        </div>

                        <div className='col-md-6'></div>
                        <div className='d-flex justify-content-end mt-2'>
                            <div className='col-md-3'>
                                <Select options={options} defaultValue={value} placeholder="Department" onChange={setValue} isMulti ></Select>
                            </div>
                            <div className='col-md-3'>
                                <Select options={options} defaultValue={value} placeholder="Department" onChange={setValue} isMulti ></Select>
                            </div>
                        </div>

                    </div>
                    <div className="row p-3">
                        <div className="col-md-6">
                            <div className="select d-flex">
                                <select className="form-select mr-3" style={{ width: 120 }}>
                                    <option>25</option>
                                    <option>50</option>
                                    <option>100</option>
                                </select>
                                <div className='btn-group'>
                                    <button className="btn btn-outline-secondary  ">
                                        EXPORT
                                    </button>
                                    <button className="btn btn-outline-secondary  ">
                                        BULK ACTIONS
                                    </button>
                                    <button className="btn btn-outline-secondary ">
                                        <FiRefreshCcw />
                                    </button>
                                </div>

                            </div>
                        </div>
                        <div className="col-md-6 d-flex justify-content-end">
                            <div
                                className="input-group flex-nowrap text-end"
                                style={{ width: 140 }}
                            >
                                <span className="input-group-text" id="addon-wrapping">
                                    <AiOutlineSearch />
                                </span>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Search"
                                    aria-label="Search"
                                    aria-describedby="addon-wrapping"
                                />
                            </div>
                        </div>
                    </div>
                    <div className='table table-responsive no-padding mt-3'>
                        <table className='table table-bordered table-hover'>
                            <tbody>

                                <tr className="table table-primary">
                                    <th ><input type="checkbox" /></th>

                                    <th >Job Code</th>
                                    <th >Name</th>
                                    <th >Job Descriptions</th>
                                    <th >Department Name</th>
                                    <th >Job Group</th>

                                </tr>
                                <tr>
                                    <td><input type="checkbox" /></td>
                                    <td>#JOB00175 <br /><Link to='/admin/view-job'> View</Link> | Edit | <br />Delete</td>
                                    <td>scssc</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className=' d-flex justify-content-end pb-3'>
                        <div className="btn-group " role="group" aria-label="Default button group">
                            <button type="button" className="btn btn-outline-primary">
                                Previous
                            </button>
                            <button type="button" className="btn btn-outline-primary">
                                1
                            </button>
                            <button type="button" className="btn btn-outline-primary">
                                2
                            </button>
                            <button type="button" className="btn btn-outline-primary">
                                3
                            </button>
                            <button type="button" className="btn btn-outline-primary">
                                4
                            </button>
                            <button type="button" className="btn btn-outline-primary">
                                5
                            </button>
                            <button type="button" className="btn btn-outline-primary">
                                Next
                            </button>
                        </div>
                        <div>
                            <select name="" id=" " className='form-select ml-3 border border-primary'>
                                <option value="">1</option>
                                <option value="">2</option>
                                <option value="">3</option>
                                <option value="">4</option>
                                <option value="">5</option>
                                <option value="">6</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default JobDes
