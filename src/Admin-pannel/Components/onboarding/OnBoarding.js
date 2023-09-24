import React from 'react'
import { FiRefreshCcw } from 'react-icons/fi'
import { AiOutlineSearch } from 'react-icons/ai'
import { BsFillInfoCircleFill } from 'react-icons/bs'
import { AiFillPlusSquare } from 'react-icons/ai'
import { AiFillMinusSquare } from 'react-icons/ai'
import { AiTwotoneStar } from 'react-icons/ai'
import { FaGraduationCap } from 'react-icons/fa'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { useState } from 'react'
import Select from 'react-select'

function OnBoarding() {
    const [show, setShow] = useState(false)
    const handleShow = () => setShow(true)
    const handleClose = () => setShow(false)

    const [value, setValue] = useState('')
    const options = [
        { value: 1, label: "ahamad Mohammad " },
        { value: 1, label: "Boon  " },
        { value: 1, label: "Basit aalam" },
        { value: 1, label: "ahamad Mohammad " },
        { value: 1, label: "ahamad Mohammad " },
    ]

    return (
        <>
            <div className='container'>
                <div className=' bg-white col-md-12 '>
                    <div className='row '>
                        <div className='col-md-12 mt-3'>
                            <button className='btn btn-primary' onClick={handleShow}>ADD CHECKLIST</button>
                            <Modal className='popup' show={show} onHide={handleClose} style={{ width: 800 }}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Add checklist</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>

                                    <label htmlFor="" className='form-label'>Select Staff</label>
                                    <Select options={options} defaultValue={value} placeholder="None Selected"></Select>
                                    <div className='mt-4' >
                                        <h5 className='text-primary'><BsFillInfoCircleFill /> Information management reception</h5>
                                    </div>
                                    <hr className='border border-secondary' />
                                    <div className='d-flex mt-3'>
                                        <input type="text" className='form-control' placeholder='Title' />
                                        <AiFillPlusSquare className='fs-1 text-info ml-3' />

                                    </div>
                                    <div className='d-flex mt-3'>
                                        <input type="text" className='form-control' placeholder='Sub Title' />
                                        <AiFillPlusSquare className='fs-1 text-info ml-3' />

                                    </div>
                                    <div className='d-flex mt-3'>
                                        <input type="text" className='form-control' placeholder='Sub Title' />
                                        <AiFillMinusSquare className='fs-1 text-danger ml-3' />

                                    </div>
                                    <div className='d-flex mt-3'>
                                        <input type="text" className='form-control' placeholder='Sub Title' />
                                        <AiFillMinusSquare className='fs-1 text-danger ml-3' />

                                    </div>
                                    <div className='d-flex mt-3'>
                                        <input type="text" className='form-control' placeholder=' Title' />
                                        <AiFillMinusSquare className='fs-1 text-danger ml-3' />

                                    </div>
                                    <div className='d-flex mt-3'>
                                        <input type="text" className='form-control' placeholder='Sub Title' />
                                        <AiFillMinusSquare className='fs-1 text-info ml-3' />

                                    </div>
                                    <div className='d-flex mt-3'>
                                        <input type="text" className='form-control' placeholder='title' />
                                        <AiFillMinusSquare className='fs-1 text-danger ml-3' />

                                    </div>
                                    <div className='d-flex mt-3'>
                                        <input type="text" className='form-control' placeholder='Sub Title' />
                                        <AiFillMinusSquare className='fs-1 text-danger ml-3' />

                                    </div>
                                    <div className='d-flex mt-3'>
                                        <input type="text" className='form-control' placeholder='Sub Title' />
                                        <AiFillMinusSquare className='fs-1 text-info ml-3' />

                                    </div>
                                    <div className='mt-4' >
                                        <h5 className='text-primary'><AiTwotoneStar /> Asset allocation</h5>
                                    </div>
                                    <hr className='border border-secondary' />
                                    <div className='d-flex mt-3'>
                                        <input type="text" className='form-control' placeholder='Enter Asset Name' />
                                        <AiFillMinusSquare className='fs-1 text-info ml-3' />

                                    </div>
                                    <div className='d-flex mt-3'>
                                        <input type="text" className='form-control' placeholder='Enter Asset Name' />
                                        <AiFillMinusSquare className='fs-1 text-danger ml-3' />

                                    </div>
                                    <div className='mt-4' >
                                        <h5 className='text-primary'><FaGraduationCap />Training</h5>
                                    </div>
                                    <hr className='border border-secondary' />
                                    <div className='mt-3'>
                                        <label htmlFor="">Type Of Training</label>
                                        <select name="" id="" className='form-select'>
                                            <option value="" />
                                            <option value={19}>Đào tạo thuê ngoài</option>
                                            <option value={18}>Đào tạo chuyên môn</option>
                                            <option value={17}>Đạo tạo nội bộ</option>
                                            <option value={16} selected="">
                                                Đào tạo văn hóa
                                            </option>
                                        </select>
                                    </div>
                                    <div className='mt-3'>
                                        <label htmlFor="">Training Of Program</label>
                                        <select name="" id="" className='form-select'>
                                            <option value="" />

                                        </select>
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
                        </div>
                        <div className="row mt-4">
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
                                <thead>

                                    <tr className="table table-primary">
                                        <th ><input type="checkbox" name="" id="" /></th>

                                        <th >Full Name</th>
                                        <th >Staff Code</th>
                                        <th >Birthday </th>
                                        <th >Finished</th>

                                    </tr>
                                    <tr>
                                        <td colSpan={5}>No entries found</td>
                                    </tr>

                                </thead>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OnBoarding
