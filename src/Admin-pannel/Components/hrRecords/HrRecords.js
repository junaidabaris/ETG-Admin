import React from 'react'
import { useState } from 'react'
import Select from 'react-select'
import { FiRefreshCcw } from 'react-icons/fi'
import { AiOutlineSearch } from 'react-icons/ai'
import img from '../../../assets/img/user-placeholder.jpg'
import { Link } from 'react-router-dom'


function HrRecords() {
    const [value, setValue] = useState('')
    const options = [
        { value: 1, label: "" }
    ]
    return (
        <>
            <div className='container'>
                <div className=' bg-white col-md-12 '>
                    <div className='row '>

                        <div className='col-md-12 mt-3'>
                            <Link to="/admin/new-staff-members">
                                <button className='btn btn-primary mr-2'>NEW STAFF MEMBER</button>
                            </Link>
                            <Link to='/admin/import-from-excel'>
                                <button className='btn btn-primary mr-2' >IMPORT FROM EXCEL</button>
                            </Link>
                            <button className='btn  mr-2' style={{ background: 'rgb(255, 26, 26)' }}>EXPORT STAFFS</button>
                            <button className='btn btn-primary'>CHART</button>

                        </div>
                        <div className='row mt-3'>
                            <div className='col-md-3'></div>
                            <div className='col-md-3'>
                                <Select options={options} defaultValue={value} placeholder=""></Select>
                            </div>
                            <div className='col-md-3'>
                                <Select options={options} defaultValue={value} placeholder=""></Select>
                            </div>
                            <div className='col-md-3'>
                                <Select options={options} defaultValue={value} placeholder=""></Select>
                            </div>

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

                                        <th >Full <br /> Name</th>
                                        <th >Staff <br /> Code</th>
                                        <th >Email </th>
                                        <th >Gender</th>
                                        <th >Job Position</th>
                                        <th >Role</th>
                                        <th >Active</th>
                                        <th >Status</th>

                                    </tr>
                                    <tr>
                                        <td>
                                            <img src={img} alt='user-placeholder' style={{ width: 40, height: 40, borderRadius: 30 }} />
                                            <br /><Link to='/admin/view-hr-records'>View</Link>  |Edit <br />Delete
                                        </td>
                                        <td>EC0002</td>
                                        <td>a@g.com</td>
                                        <td></td>
                                        <td>MAle</td>
                                        <td></td>
                                        <td>Employee</td>
                                        <td>  </td>
                                        <td>Employee</td>
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

export default HrRecords
