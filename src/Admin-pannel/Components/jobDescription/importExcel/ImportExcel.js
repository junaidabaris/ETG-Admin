import React from 'react'

function ImportExcel() {
    return (
        <>
            <div className='container'>
                <div className='col-md-12 bg-white '>
                    <div className='row '>
                        <div className='col-md-12 d-flex mt-3'>
                            <button className='btn btn-primary'>DOWNLOAD SAMPLE FILE</button>
                            <button className='btn btn-outline-secondary ml-2'>BACK</button>
                        </div>
                    </div>
                    <hr className='border-1 border-secondary' />
                    <div className='row'>
                        <div className='col-md-12 mt-2'>
                            <ol type='number'>
                                <li>The Excel data file (.xlsx) must have column header and format like the table below. Some columns refer to the values ​​below.</li>
                                <li className='text-danger'>Columns with the symbol "*" are required.</li>
                                <li>Job position code: if not entered, it will automatically generate</li>
                                <li>Enter multiple group, group ID are separated by "," for example (1,2,3)</li>
                                <li>Enter multiple department, department ID are separated by "," for example (1,2,3)</li>
                                <li>Enter multiple tags, tags are separated by "," for example (tag name 1, tag name 2, tag name 3)</li>
                            </ol>
                        </div>
                        <div className='table table-responsive no-padding mt-3'>
                            <table className='table table-bordered table-hover'>
                                <tbody>

                                    <tr>
                                        <td>Job Code</td>
                                        <td>* Name</td>
                                        <td>Job Group</td>
                                        <td>Job descriptions</td>
                                        <td>Department id</td>
                                        <td>Tags</td>
                                    </tr>
                                    <tr>
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
                        <hr />
                    </div>
                    <hr className='border-1 border-secondary' />
                    <div className='row mt-3'>
                        <div className='col-md-4'>
                            <label htmlFor=""><strong className='text-danger'>*</strong> Choose excel file</label>
                            <input type="file" className='form-control' />
                        </div>
                    </div>
                    <div className='row mt-3 pb-5 '>
                        <div className='col-md-12'>
                            <button type="button" className='btn btn-primary'>IMPORT</button>
                        </div>
                    </div>
                </div>



            </div>
        </>
    )
}
export default ImportExcel