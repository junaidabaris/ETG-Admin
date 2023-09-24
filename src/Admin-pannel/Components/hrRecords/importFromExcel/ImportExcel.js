import React from 'react'

function ImportFromExcel() {
    return (
        <>
            <div className='container'>
                <div className=' bg-white col-md-12 '>
                    <div className='row '>
                        <div className='col-md-12 mt-3'>
                            <button className='btn btn-warning mr-2'>CREATE SAMPLE FILE</button>
                            <button className='btn btn-secondary'>BACK</button>
                            <hr className="border border-secondary mt-3" />
                        </div>

                        <div className="col-md-12 mt-3">
                            <ol>
                                <li className='text-danger'> It can only be updated if the column is blue or orange. The orange column is required, do not update the Red column value</li>
                                <li> Gender column can be filled: male or female; Birthday column entered with the format yyyy-mm-dd: e.g., 2020-12-30; Status column can be filled: working or maternity_leave or inactivity;</li>
                                <li className='text-info'>The workplace column can be filled with workplace names get from the settings/Workplace menu</li>
                                <li className='text-info'> The job position column can be filled with a Job code get from the Job descriptions menu</li>
                                <li className='text-info'> The direct manager column can be filled with Staff code get from the HR records menu</li>
                                <li className='text-info'>Role column can be filled Role name get from Setup/Roles menu</li>
                                <li>The academic level column can be fill primary_level or intermediate_level or college_level or masters or doctor or bachelor or engineer or university or intermediate_vocational or college_vocational or in-service or high_school or intermediate_level_pro</li>
                                <li className='text-info'>Member departments column can be filled Name get from Org chart menu. If an employee belongs to more than one unit, each unit will be separated by ;</li>
                                <li>The marital status column can be fill single or married</li>
                                <li>Date of issue column enter with the format yyyy-mm-dd: e.g., 2020-12-30</li>
                                <li>if you do not enter a password, it will automatically generate 123456</li>
                            </ol>
                        </div>
                        <div className='table table-responsive no-padding mt-3'>
                            <table className='table table-bordered table-hover' style={{ width: 2000 }}>
                                <tbody>

                                    <tr className="table table-secondary">
                                        <td >Id</td>


                                        <td >Staff <br />code</td>
                                        <td >*<br /> First <br /> name</td>
                                        <td >*<br /> Last <br /> name</td>
                                        <td >Gender</td>
                                        <td>* <br /> Email</td>
                                        <td>Phone</td>
                                        <td>Workplace</td>
                                        <td>* <br />Status</td>
                                        <td>* <br /> Job <br /> position</td>
                                        <td>Direct <br /> manager	</td>
                                        <td>Role</td>
                                        <td>Academic <br /> level</td>
                                        <td>Hourly <br /> Rate</td>
                                        <td>Member <br /> departments</td>
                                        <td>Password</td>
                                        <td>Domicile</td>
                                        <td>Marital <br /> status</td>
                                        <td>Current <br />address	</td>
                                        <td>Nation</td>
                                        <td>Place <br /> of <br /> birth</td>
                                        <td>Religion	</td>
                                        <td>Citizen <br /> identification</td>
                                        <td>Date <br /> of <br /> issue</td>
                                        <td>Place <br /> of <br /> issue</td>
                                        <td>Resident</td>
                                        <td>Bank <br />account <br /> number</td>
                                        <td>Bank <br />account <br /> name</td>
                                        <td>Bank <br /> name</td>
                                        <td>Personal <br /> tax code</td>
                                        <td>Facebook</td>
                                        <td>LinkedIn</td>
                                        <td>Skype</td>


                                    </tr>
                                    <tr>
                                        <td>-</td>

                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>--</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>

                                    </tr>
                                </tbody>
                            </table>

                        </div>
                        <div className='col-md-12'>
                            <hr className='border border-secondary mt-3' />
                        </div>

                        <div className='col-md-4 mt-3'>

                            <label for="" ><span className='text-danger'>*</span> Choose excel file</label>
                            <input type="file" className='form-control' />
                        </div>
                        <div className='mt-3 mb-3'>
                            <button className='btn btn-primary'>IMPORT</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ImportFromExcel