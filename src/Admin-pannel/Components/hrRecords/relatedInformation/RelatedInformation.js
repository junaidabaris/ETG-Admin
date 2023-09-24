import React from 'react'
import { FaFacebookF } from 'react-icons/fa'
import { BiLogoLinkedin } from 'react-icons/bi'
import { AiFillSkype } from 'react-icons/ai'

function RelatedInformation() {
    return (
        <>

            <div className='row'>
                <div className='col-md-6 mt-3'>
                    <label htmlFor="" className=''>Domicile</label>
                    <input type="text" name="" id="" className='form-control' />
                </div>
                <div className='col-md-6 mt-3'>
                    <label htmlFor="" >Marital status</label>
                    <select name="" id="" className='form-select'>
                        <option value="">Single</option>
                        <option value="">Married</option>
                    </select>
                </div>
                <div className='col-md-6 mt-3'>
                    <label htmlFor="" className=''>Current address</label>
                    <input type="text" name="" id="" className='form-control' />
                </div>
                <div className='col-md-6 mt-3'>
                    <label htmlFor="" className=''>Nation </label>
                    <input type="text" name="" id="" className='form-control' />
                </div>
                <div className='col-md-6 mt-3'>
                    <label htmlFor="" className=''>
                        Nation
                        Place of birth</label>
                    <input type="text" name="" id="" className='form-control' />
                </div>
                <div className='col-md-6 mt-3'>
                    <label htmlFor="" className=''>Religion</label>
                    <input type="text" name="" id="" className='form-control' />
                </div>
                <div className='col-md-6 mt-3'>
                    <label htmlFor="" className=''> Citizen identification  </label>
                    <input type="text" name="" id="" className='form-control' />
                </div>
                <div className='col-md-6 mt-3'>
                    <label htmlFor="" className=''>
                        Date of issue  </label>
                    <input type="date" name="" id="" className='form-control' />
                </div>
                <div className='col-md-6 mt-3'>
                    <label htmlFor="" className=''> Place of issue  </label>
                    <input type="text" name="" id="" className='form-control' />
                </div>
                <div className='col-md-6 mt-3'>
                    <label htmlFor="" className=''> Resident  </label>
                    <input type="text" name="" id="" className='form-control' />
                </div>
                <div className='col-md-6 mt-3'>
                    <label htmlFor="" className=''> Bank account number  </label>
                    <input type="text" name="" id="" className='form-control' />
                </div>
                <div className='col-md-6 mt-3'>
                    <label htmlFor="" className=''> Bank account name  </label>
                    <input type="text" name="" id="" className='form-control' />
                </div>
                <div className='col-md-6 mt-3'>
                    <label htmlFor="" className=''>   Bank name</label>
                    <input type="text" name="" id="" className='form-control' />
                </div>
                <div className='col-md-6 mt-3'>
                    <label htmlFor="" className=''> Personal tax code  </label>
                    <input type="text" name="" id="" className='form-control' />
                </div>
                <div className='col-md-6 mt-3'>
                    <label htmlFor="" className=''><FaFacebookF /> Facebook</label>
                    <input type="text" name="" id="" className='form-control' />
                </div>
                <div className='col-md-6 mt-3'>
                    <label htmlFor="" className=''><BiLogoLinkedin /> LinkedIn</label>
                    <input type="text" name="" id="" className='form-control' />
                </div>
                <div className='col-md-6 mt-3'>
                    <label htmlFor="" className=''><AiFillSkype /> Skype</label>
                    <input type="text" name="" id="" className='form-control' />
                </div>


            </div>
            <hr className='border border-secondary mt-3' />
            <div className='col-md-12 mt-3 d-flex justify-content-end'>
                <button className='btn btn-secondary mr-2'>CLOSE</button>
                <button className='btn btn-primary'>SAVE</button>
            </div>
        </>
    )
}

export default RelatedInformation
