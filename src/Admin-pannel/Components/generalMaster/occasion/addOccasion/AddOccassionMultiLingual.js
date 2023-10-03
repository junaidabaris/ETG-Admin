import React from 'react'

function AddOccassionMultiLingual({ data, item, i, params, sendData, onChangeHandler, setValue }) {
    return (
        <>
            <div className="aiz-main-content">
                <div className="px-15px px-lg-25px">
                    <div className="aiz-titlebar text-left mt-2 mb-3">
                        <div className="row align-items-center">
                            <div className="col-md-6">
                                <h1 className="h3">{params?.uid ? 'Update' : 'Add'} Occassion</h1>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header">
                            <h5 className="mb-0 h6">{params?.uid ? 'Update' : 'Add'} Occassion({item.lable})</h5>
                        </div>
                        <div className="card-body">

                            <section className="form-section">
                                <div className="row">
                                    {/* <form action=""> */}
                                    <div className="col-lg-4">
                                        <div>
                                            <input type="text" name="name" value={item.name} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Name*" onChange={(e) => { onChangeHandler(e, item.language_id) }} />
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div>
                                            <input type="text" name="code" value={item.code} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Code*" onChange={(e) => { onChangeHandler(e, item.language_id) }} />
                                        </div>
                                    </div>

                                    <div className="col-lg-12 mt-3">
                                        <textarea id="w3review" name="description" value={item.description} placeholder='Description' rows={4} cols={100} onChange={(e) => { onChangeHandler(e, item.language_id) }} />
                                    </div>

                                    <div className="col-lg-4 mt-3">
                                        <div>
                                            <select className="form-select" name='isActive' value={item?.isActive} aria-label="Default select example" onChange={(e) => { onChangeHandler(e, item.language_id) }}>
                                                <option selected>Is Active</option>
                                                <option value={true}>Yes</option>
                                                <option value={false}>No</option>
                                            </select>
                                        </div>
                                    </div>

                                    {/* <div className="col-lg-3 mt-3">
                                        <label className="form-check-label" htmlFor="flexRadioDefault1">
                                            Status
                                        </label>
                                        <div className="d-flex">
                                            <div className="form-check mr-4">
                                                <input className="form-check-input" type="radio" name="isActive" value={true} id="flexRadioDefault1" />
                                                <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                    Active
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="isActive" value={false} id="flexRadioDefault2" />
                                                <label className="form-check-label" htmlFor="flexRadioDefault2">
                                                    In Active
                                                </label>
                                            </div>
                                        </div>
                                    </div> */}

                                    <div className="col-lg-3 mt-3">
                                        {data.length == i + 1 ? <div className="form-group mb-3 text-right">
                                            <button type="button" className="btn btn-primary" fdprocessedid="uzw7ye" onClick={sendData}>Save</button>
                                            <button className="btn btn-danger ms-2">Cancel</button>
                                        </div>
                                            :
                                            <div className="form-group mb-3 text-right">
                                                {i !== 0 && <button type="submit" className="btn btn-primary" fdprocessedid="uzw7ye" onClick={() => { setValue(i - 1) }}>Prev</button>}
                                                <button type="submit" className="btn btn-primary" fdprocessedid="uzw7ye" onClick={() => { setValue(i + 1) }}>Next</button>
                                            </div>
                                        }

                                    </div>
                                    {/* </form> */}
                                </div>
                            </section>
                            <div className="aiz-pagination">
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-white text-center py-3 px-15px px-lg-25px mt-auto">
                </div>
            </div>
        </>
    )
}

export default AddOccassionMultiLingual