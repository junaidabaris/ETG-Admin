import React from 'react'
import Card from 'react-bootstrap/Card'
function MyToDoSettings() {
    return (
        <>
            <div className='container'>
                <Card>
                    <Card.Body>
                        <h5>My To Do Settings</h5>
                    </Card.Body>
                    <hr className='border border-secondary' />
                    <Card.Body>
                        <div className='row'>
                            <div className='col-md-4'>
                                <label htmlFor="">Dashboard Latest Unfinished Show Limit</label>
                                <input type="number" className='form-control' />
                            </div>
                            <div className='col-md-4'>
                                <label htmlFor="">Dashboard Latest Finished Show Limit</label>
                                <input type="number" className='form-control' />
                            </div>
                            <div className='col-md-4'>
                                <label htmlFor="">To do Loading Page Show Limit</label>
                                <input type="number" className='form-control' />
                            </div>
                        </div>
                    </Card.Body>
                </Card>

            </div>
            <div className='col-md-12 bg-white text-right ' >

                <button type='submit' className='btn btn-primary'>Save</button>

            </div>
        </>
    )
}

export default MyToDoSettings
