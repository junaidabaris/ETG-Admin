import React from 'react'
import { useState } from 'react'
import { AiFillQuestionCircle } from 'react-icons/ai'
import { ImEye } from 'react-icons/im'
import { TfiReload } from 'react-icons/tfi'
import Select from 'react-select'

import img1 from '../../../../assets/img/nizam.jpg'

function Profile() {
    const [value, setValue] = useState('')
    const options = [
        { value: 1, label: "" }
    ]
    return (
        <>
            <div className='row'>
                <div className='col-md-12'>
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            defaultValue=""
                            id="defaultCheck1"
                            style={{ width: 25, height: 25 }}
                        />
                        <label className="form-check-label mt-1 ml-2" htmlFor="defaultCheck1">
                            <AiFillQuestionCircle />Enable Email Two Factor Authentication
                        </label>
                        <div className='profileImg'>
                            <img src={img1} alt="nizam" width={100 + "%"} />
                            <input type='file' className='profile' />
                        </div>


                    </div>

                </div>
                <div className='col-md-12 mt-3'>
                    <label htmlFor="" className='form-label'><span className='text-danger'>*</span> Staff code</label>
                    <input type="text" className='form-control' />
                </div>
                <div className='col-md-6 mt-3'>
                    <label htmlFor="" className='form-label'><span className='text-danger'>*</span> Fist Name</label>
                    <input type="text" className='form-control' />
                </div>
                <div className='col-md-6 mt-3'>
                    <label htmlFor="" className='form-label'><span className='text-danger'>*</span> Last Name</label>
                    <input type="text" className='form-control' />
                </div>
                <div className='col-md-6 mt-3'>
                    <label htmlFor="" className='form-label'>Gender</label>
                    <select name="" id="" placeholder='None Selected' className='form-select'>
                        <option value="">Male</option>
                        <option value="">Female</option>
                    </select>
                </div>
                <div className='col-md-6 mt-3'>
                    <label htmlFor="" className='form-label'>Birthday</label>
                    <input type="date" className='form-control' />
                </div>
                <div className='col-md-6 mt-3'>
                    <label htmlFor="" className='form-label'> <span className='text-danger'>*</span> Email</label>
                    <input type="text" className='form-control' />
                </div>
                <div className='col-md-6 mt-3'>
                    <label htmlFor="" className='form-label'>Phone</label>
                    <input type="date" className='form-control' />
                </div>
                <div className='col-md-6 mt-3'>
                    <label htmlFor="" className='form-label'>Workplace</label>
                    <select name="" id="" placeholder='None Selected' className='form-select'>
                        <option value=""></option>
                        <option value="1">Building 1, Second Floor</option>
                        <option value="2">Ruská Nova VEs</option>
                        <option value="3">Bee HQ</option>
                        <option value="4">A40</option>
                        <option value="5">B22</option>
                    </select>
                </div>
                <div className='col-md-6 mt-3'>
                    <label htmlFor="" className='form-label'> <span className='text-danger'>*</span> Status</label>
                    <select name="" id="" placeholder='None Selected' className='form-select'>
                        <option value="working">Working</option>
                        <option value="maternity_leave">Maternity leave</option>
                        <option value="inactivity">Inactivity</option>
                    </select>
                </div>
                <div className='col-md-6 mt-3'>
                    <label htmlFor="" className='form-label'> <span className='text-danger'>*</span> Job Position</label>
                    <Select options={options} defaultValue={value} placeholder="None Selected" onChange={setValue}></Select>
                </div>
                <div className='col-md-6 mt-3'>
                    <label htmlFor="" className='form-label'>Direct Manager</label>
                    <Select options={options} defaultValue={value} placeholder="None  Selected" onChange={setValue}></Select>
                </div>
                <div className='col-md-12 mt-3'>
                    <label htmlFor="" className='form-label'>Role</label>
                    <Select options={options} defaultValue={value} placeholder="None  Selected" onChange={setValue}></Select>
                </div>
                <div className='col-md-6 mt-3'>
                    <label htmlFor="" className='form-label'>Academic level</label>
                    <Select options={options} defaultValue={value} placeholder="None  Selected" onChange={setValue}></Select>
                </div>
                <div className='col-md-6 mt-3'>
                    <label htmlFor="" className='form-label'>Hourly Rate</label>
                    <div className='input-group'>
                        <input type="text" className='form-control' />
                        <span className="input-group-text" id="basic-addon1">
                            @
                        </span>
                    </div>
                </div>
                <div className='col-md-6 mt-3'>
                    <label className="form-check-label mt-1 ml-2" htmlFor="defaultCheck1">
                        <AiFillQuestionCircle />Email Signature
                    </label>
                    <Select options={options} defaultValue={value} placeholder="None  Selected" onChange={setValue}></Select>
                </div>
                <div className='col-md-6 mt-3'>
                    <label className="form-check-label mt-1 ml-2" htmlFor="defaultCheck1">
                        Direction
                    </label>
                    <Select options={options} defaultValue={value} placeholder="None  Selected" ></Select>
                </div>
                <div className='col-md-6 mt-3'>
                    <label className="form-check-label mt-1 ml-2" htmlFor="defaultCheck1">
                        <AiFillQuestionCircle /> Email Signature
                    </label>
                    <textarea name="" id="" cols="30" rows="3" className='form-control'></textarea>
                </div>
                <div className='col-md-6 mt-3'>
                    <label className="form-check-label mt-1 ml-2" htmlFor="defaultCheck1">
                        Other information
                    </label>
                    <textarea name="" id="" cols="30" rows="3" className='form-control'></textarea>
                </div>
                <div className='mt-5 mb-3'>
                    <label htmlFor="" className='form-label'>Member departments</label>
                    <div className="form-check">
                        <input
                            className="form-check-input "
                            type="checkbox"
                            style={{ width: 25, height: 25 }}
                        />
                        <label className="form-check-label ml-2 mt-1" htmlFor="flexCheckDefault">
                            SALES
                        </label>
                    </div>
                    <div className="form-check">
                        <input
                            className="form-check-input "
                            type="checkbox"
                            style={{ width: 25, height: 25 }}
                        />
                        <label className="form-check-label ml-2 mt-1" htmlFor="flexCheckDefault">
                            Management
                        </label>
                    </div>
                    <div className="form-check">
                        <input

                            className="form-check-input "
                            type="checkbox"
                            style={{ width: 25, height: 25 }}
                        />
                        <label className="form-check-label ml-2 mt-1" htmlFor="flexCheckDefault">
                            Professional Services
                        </label>
                    </div>
                    <div className="form-check">
                        <input
                            className="form-check-input "
                            type="checkbox"
                            style={{ width: 25, height: 25 }}
                        />
                        <label className="form-check-label ml-2 mt-1" htmlFor="flexCheckDefault">
                            okan
                        </label>
                    </div>
                    <div className="form-check">
                        <input
                            className="form-check-input "
                            type="checkbox"
                            style={{ width: 25, height: 25 }}
                        />
                        <label className="form-check-label ml-2 mt-1" htmlFor="flexCheckDefault">
                            sale
                        </label>
                    </div>
                    <div className="form-check">
                        <input
                            className="form-check-input "
                            type="checkbox"
                            style={{ width: 25, height: 25 }}
                        />
                        <label className="form-check-label ml-2 mt-1" htmlFor="flexCheckDefault">
                            Ecommerce
                        </label>
                    </div>
                    <div className="form-check">
                        <input
                            className="form-check-input "
                            type="checkbox"
                            style={{ width: 25, height: 25 }}
                        />
                        <label className="form-check-label ml-2 mt-1" htmlFor="flexCheckDefault">
                            Purchase
                        </label>
                    </div>
                    <div className="form-check">
                        <input
                            className="form-check-input "
                            type="checkbox"
                            style={{ width: 25, height: 25 }}
                        />
                        <label className="form-check-label ml-2 mt-1" htmlFor="flexCheckDefault">
                            Senior Team Leader
                        </label>
                    </div>
                    <div className="form-check">
                        <input
                            className="form-check-input "
                            type="checkbox"
                            style={{ width: 25, height: 25 }}
                        />
                        <label className="form-check-label ml-2 mt-1" htmlFor="flexCheckDefault">
                            Pepe
                        </label>
                    </div>
                    <div className="form-check">
                        <input
                            className="form-check-input "
                            type="checkbox"
                            style={{ width: 25, height: 25 }}
                        />
                        <label className="form-check-label ml-2 mt-1" htmlFor="flexCheckDefault">
                            Lucy
                        </label>
                    </div>
                    <div className="form-check">
                        <input
                            className="form-check-input "
                            type="checkbox"
                            style={{ width: 25, height: 25 }}
                        />
                        <label className="form-check-label ml-2 mt-1" htmlFor="flexCheckDefault">
                            Test Unit WZ
                        </label>
                    </div>
                    <div className="form-check">
                        <input
                            className="form-check-input "
                            type="checkbox"
                            style={{ width: 25, height: 25 }}
                        />
                        <label className="form-check-label ml-2 mt-1" htmlFor="flexCheckDefault">
                            sdasdas
                        </label>
                    </div>
                    <div className="form-check">
                        <input
                            className="form-check-input "
                            type="checkbox"
                            style={{ width: 25, height: 25 }}
                        />
                        <label className="form-check-label ml-2 mt-1" htmlFor="flexCheckDefault">
                            MANUTEST
                        </label>
                    </div>
                    <div className="form-check">
                        <input
                            className="form-check-input "
                            type="checkbox"
                            style={{ width: 25, height: 25 }}
                        />
                        <label className="form-check-label ml-2 mt-1" htmlFor="flexCheckDefault">
                            test 1
                        </label>
                    </div>
                    <div className="form-check">
                        <input
                            className="form-check-input "
                            type="checkbox"
                            style={{ width: 25, height: 25 }}
                        />
                        <label className="form-check-label ml-2 mt-1" htmlFor="flexCheckDefault">
                            Marketing
                        </label>
                    </div>
                    <div className="form-check">
                        <input
                            className="form-check-input "
                            type="checkbox"
                            style={{ width: 25, height: 25 }}
                        />
                        <label className="form-check-label ml-2 mt-1" htmlFor="flexCheckDefault">
                            Sơ đồ tổ chức cả công ty
                        </label>
                    </div>
                    <div className="form-check">
                        <input
                            className="form-check-input "
                            type="checkbox"
                            style={{ width: 25, height: 25 }}
                        />
                        <label className="form-check-label ml-2 mt-1" htmlFor="flexCheckDefault">
                            NGS
                        </label>
                    </div>
                    <div className="form-check">
                        <input
                            className="form-check-input "
                            type="checkbox"
                            style={{ width: 25, height: 25 }}
                        />
                        <label className="form-check-label ml-2 mt-1" htmlFor="flexCheckDefault">
                            OSM
                        </label>
                    </div>
                    <div className="form-check">
                        <input
                            className="form-check-input "
                            type="checkbox"
                            style={{ width: 25, height: 25 }}
                        />
                        <label className="form-check-label ml-2 mt-1" htmlFor="flexCheckDefault">
                            OPI
                        </label>
                    </div>
                    <div className="form-check">
                        <input
                            className="form-check-input "
                            type="checkbox"
                            style={{ width: 25, height: 25 }}
                        />
                        <label className="form-check-label ml-2 mt-1" htmlFor="flexCheckDefault">
                            IHN
                        </label>
                    </div>
                    <div className="form-check">
                        <input
                            className="form-check-input "
                            type="checkbox"
                            style={{ width: 25, height: 25 }}
                        />
                        <label className="form-check-label ml-2 mt-1" htmlFor="flexCheckDefault">
                            HJU
                        </label>
                    </div>
                </div>

            </div>
            <hr className='border-secondary' />
            <div className='col-md-12'>
                <label htmlFor="" className='form-label'><span className='text-danger'>*</span>Password</label>
                <div className="input-group">
                    <input
                        type="text"
                        className="form-control"
                    />
                    <button className="btn btn-outline-secondary" type="button">
                        <ImEye className='fs-5 text-info' />
                    </button>
                    <button className="btn btn-outline-secondary" type="button">
                        <TfiReload className='fs-5 text-info' />
                    </button>
                </div>

            </div>
            <div className='col-md-12 mt-3 justify-content-end d-flex'>
                <button className='btn btn-secondary mr-2'>CLOSE</button>
                <button className='btn btn-primary'>SAVE</button>
            </div>
        </>
    )
}

export default Profile
