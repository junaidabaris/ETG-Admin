import React from 'react'
import { useState } from 'react'
import Select from 'react-select'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

import { FiRefreshCcw } from 'react-icons/fi'
import { AiOutlineSearch } from 'react-icons/ai'
import { PiNotePencilBold } from 'react-icons/pi'
import { CiSquareRemove } from 'react-icons/ci'
import { AiFillQuestionCircle } from 'react-icons/ai'
function OrgChart() {
    const [value, setValue] = useState('')


    const options = [
        { value: 1, label: "None Selected" },
        { value: 1, label: "Ecommerce" },
        { value: 1, label: "Purchase" },
        { value: 1, label: " sadsa" },
        { value: 1, label: "sdaj" },
    ]
    const options1 = [
        { value: 1, label: "None Selected" },
        { value: 1, label: "sdfsd" },
        { value: 1, label: "Basit alam" },
        { value: 1, label: " sadsa" },
        { value: 1, label: "sdaj" },
    ]

    const [show, setShow] = useState(false)
    const handleShow = () => {
        setShow(true)
    }
    const handleClose = () => {
        setShow(false)
    }

    return (
        <>
            <div className='container'>
                <div className=' bg-white col-md-12 '>
                    <div className='row '>
                        <div className='col-md-6 mt-3 '>
                            <button className='btn btn-primary mr-2' onClick={handleShow}>ADD NEW UNIT</button>
                            <Modal className='popup' show={show} onHide={handleClose} style={{ width: 900, height: 1000 }} >
                                <Modal.Header closeButton>
                                    <Modal.Title>
                                        Add new unit
                                    </Modal.Title>
                                </Modal.Header>
                                <Modal.Body>

                                    <div className=''>
                                        <label htmlFor=""><strong className='text-danger'>*</strong>Name</label>
                                        <input type="text" className='form-control' />
                                    </div>
                                    <div className=' form-check mt-3 ml-3'>
                                        <input type="checkbox" className='form-check-input fs-5' />
                                        <label htmlFor=" " className='form-check-label'>Hide from client?</label>
                                    </div>
                                    <hr className='border border-secondary' />
                                    <div className='mt-3'>
                                        <label htmlFor="" className='form-label'>Unit manager</label>
                                        <Select options={options1} defaultValue={value} placeholder=""></Select>
                                    </div>
                                    <div className='mt-3'>
                                        <label htmlFor="" className='form-label'>Unit manager</label>
                                        <input type="text" className='form-control' />
                                    </div>
                                    <div className='mt-3'>
                                        <AiFillQuestionCircle

                                        />
                                    </div>
                                    <div className="mt-3">
                                        <label htmlFor="" className='form-label'>IMAP Username</label>
                                        <input type="text" className='form-control' />
                                    </div>
                                    <div className="mt-3">
                                        <label htmlFor="" className='form-label'>IMAP Host</label>
                                        <input type="text" className='form-control' />
                                    </div>
                                    <div className="mt-3">
                                        <label htmlFor="" className='form-label'>Password</label>
                                        <input type="password" className='form-control' />
                                    </div>

                                    <div className='mt-3 d-flex'>
                                        <div className="form-check mr-3 ">
                                            <input
                                                className="form-check-input "
                                                type="radio"
                                                name="flexRadioDefault"
                                                id="flexRadioDefault1"
                                            />
                                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                TLS
                                            </label>
                                        </div>
                                        <div className="form-check mr-3">
                                            <input
                                                className="form-check-input "
                                                type="radio"
                                                name="flexRadioDefault"
                                                id="flexRadioDefault2"
                                                defaultChecked=""
                                            />
                                            <label className="form-check-label" htmlFor="flexRadioDefault2">
                                                SSL
                                            </label>
                                        </div>
                                        <div className="form-check mr-3 ">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="flexRadioDefault"
                                                id="flexRadioDefault2"
                                                defaultChecked=""
                                            />
                                            <label className="form-check-label" htmlFor="flexRadioDefault2">
                                                No Encription
                                            </label>
                                        </div>
                                    </div>
                                    <div className='form-check mt-3 ml-3'>
                                        <input type="checkbox" className='form-check-input ' />
                                        <label htmlFor=" " className='form-check-label'>Delete mail after import?
                                        </label>
                                    </div>
                                    <div className="mt-3">
                                        <button className='btn btn-light border'>TEST IMAPCONNECTION</button>
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
                            <button className='btn btn-light border'>VIEW CHART</button>
                        </div>
                        <div className='col-md-3 '></div>
                        <div className='col-md-3 mt-3'>
                            <Select options={options} defaultValue={value} placeholder="Filter Vlaue"></Select>

                        </div>
                    </div>
                    <hr className='border border-secondary' />
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
                                    <th >Id</th>

                                    <th >Name</th>
                                    <th >Parent Unit</th>
                                    <th >Unit Manager </th>
                                    <th >Unit email</th>
                                    <th >Google Calender ID</th>
                                    <th>Options</th>

                                </tr>
                                <tr>
                                    <td>12</td>

                                    <td>iHn</td>
                                    <td>osm</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td><PiNotePencilBold className='fs-4 ' /><CiSquareRemove className='fs-4 text-danger' /></td>
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
                                Next
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default OrgChart
