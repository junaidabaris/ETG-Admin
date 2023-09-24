import React from 'react'
import { useState } from 'react'
import Button from 'react-bootstrap/Button'

function ViewJob() {

    return (
        <>
            <div className='container'>
                <div className=' bg-white col-md-12 '>
                    <div className='row'>
                        <div className='col-md-12 mt-3'>
                            <h5>Detailed Job</h5>
                        </div>
                    </div>
                    <div className='table table-responsive no-padding mt-3'>
                        <table className='table table-bordered table-hover table-striped'>
                            <tbody>
                                <tr>
                                    <td className='text-bold fs-6' > Job Code</td>
                                    <td>#JOB00175</td>

                                </tr>
                                <tr>
                                    <td className='text-bold fs-6' >Name</td>
                                    <td>#JOB00175</td>

                                </tr>
                                <tr>
                                    <td className='text-bold fs-6' >Job Group</td>
                                    <td>#JOB00175</td>

                                </tr>
                                <tr>
                                    <td className='text-bold fs-6' >Department</td>
                                    <td></td>

                                </tr>
                                <tr>
                                    <td className='text-bold fs-6' >Tag</td>
                                    <td>|Tag</td>

                                </tr>

                            </tbody>
                        </table>
                    </div>
                    <div className='row'>
                        <div className='col-md-12'>
                            <h5 className='text-danger'>Description</h5>
                            <hr className=' border-1 border-danger' />
                        </div>

                    </div>


                    <div className='mt-5'>
                        <footer >
                            <hr className=' border-1 border-secondary ' />
                            <div className='d-flex justify-content-end'>
                                <Button variant="secondary" >
                                    Close
                                </Button>
                            </div>

                        </footer>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ViewJob