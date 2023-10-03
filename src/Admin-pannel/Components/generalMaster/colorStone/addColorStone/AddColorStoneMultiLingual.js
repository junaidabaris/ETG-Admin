import axios from 'axios';
import React, { useEffect, useState } from 'react'

function AddColorStoneMultiLingual({ data, item, i, params, sendData, onChangeHandler, setValue }) {
    const [selectShapeData, setSelectShapeData] = useState(null);
    const [selectCountryData, setSelectCountryShapeData] = useState(null);

    const token = window.localStorage.getItem('adminToken');

    const getCountrySelectData = async () => {
        const res = await axios.get(`https://onlineparttimejobs.in/api/country/admin`, {
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                Authorization: `Bearer ${token}`,
            },
        })
        setSelectCountryShapeData(res.data)
    };
    const getShapeSelectData = async () => {
        const res = await axios.get(`https://onlineparttimejobs.in/api/shape`, {
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                Authorization: `Bearer ${token}`,
            },
        })
        setSelectShapeData(res.data)
    };

    useEffect(() => {
        getCountrySelectData();
        getShapeSelectData();
    }, []);

    return (
        <>
            <div className="aiz-main-content">
                <div className="px-15px px-lg-25px">
                    <div className="aiz-titlebar text-left mt-2 mb-3">
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '3px' }}>
                            <div className="">
                                <h1 className="h3">{params?.uid ? 'Update' : "Add"} Color Stone</h1>
                            </div>
                            <div className=''>
                                <a href="https://onlineparttimejobs.in/api/bulkimport/productFormat" download>
                                    <button className="btn btn-info">Download Sample</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header">
                            <h5>{params?.uid ? 'Update' : 'Add'} Color Stone ({item?.lable})</h5>
                        </div>
                        <div className="card-body">

                            <section className="form-section">
                                <div className="row">

                                    <div className="col-lg-6">
                                        <div>
                                            <input type="text" name="name" value={item?.name} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Tittle*" onChange={(e) => { onChangeHandler(e, item.language_id) }} />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <select className="form-control form-select" name="country__id" value={item?.country__id} aria-label="Default select example" onChange={(e) => { onChangeHandler(e, item.language_id) }}>
                                            <option selected>Select Country</option>
                                            {selectCountryData && selectCountryData.map((item, i) => {
                                                return <option value={item?._id} key={i}>{item?.name}</option>
                                            })}
                                        </select>
                                    </div>
                                    <div className="col-lg-6 mt-4">
                                        <select className="form-control form-select" name="shape_id" value={item?.shape_id} aria-label="Default select example" onChange={(e) => { onChangeHandler(e, item.language_id) }}>
                                            <option selected>Select Shape</option>
                                            {selectShapeData && selectShapeData.map((item, i) => {
                                                return <option value={item?._id} key={i}>{item?.name}</option>
                                            })}
                                        </select>
                                    </div>
                                    <div className="col-lg-12 mt-4">
                                        <div>
                                            <textarea type="text" name="description" value={item?.description} className="form-control" rows={5} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Description*" onChange={(e) => { onChangeHandler(e, item.language_id) }} >
                                            </textarea>
                                        </div>
                                    </div>

                                    <div className="col-lg-12 mt-4">
                                        <label className='ms-3' style={{ fontSize: '14px' }}>Upload Excel<span style={{ color: 'red' }}>*</span></label>
                                        <input type="file" name="image" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => { onChangeHandler(e, item.language_id) }} />
                                    </div>


                                    <div className="col-lg-6 mt-4">
                                        <label className='ms-3' style={{ fontSize: '14px' }}>Status</label>
                                        <select className="form-select form-control" name="isActive" value={item?.isActive} aria-label="Default select example" onChange={(e) => { onChangeHandler(e, item.language_id) }}>
                                            <option selected>IS Active</option>
                                            <option value={true}>Yes</option>
                                            <option value={false}>No</option>
                                        </select>
                                    </div>
                                    <div className="col-lg-6 mt-4">
                                        <label className='ms-3' style={{ fontSize: '14px' }}>Default</label>
                                        <select className="form-select form-control" name="default" value={item?.default} aria-label="Default select example" onChange={(e) => { onChangeHandler(e, item.language_id) }}>
                                            <option selected>IS Default</option>
                                            <option value={true}>Yes</option>
                                            <option value={false}>No</option>
                                        </select>
                                    </div>

                                    <div className="col-lg-3 mt-3">
                                        {data.length == i + 1 ? <div className="form-group text-right mt-4">
                                            <button type="button" className="btn btn-primary" fdprocessedid="uzw7ye" onClick={sendData}>Save</button>
                                            <button className="btn btn-danger ms-2">Cancel</button>
                                        </div>
                                            :
                                            <div className="form-group text-right mt-4">
                                                {i !== 0 && <button type="submit" className="btn btn-primary" fdprocessedid="uzw7ye" onClick={() => { setValue(i - 1) }}>Prev</button>}
                                                <button type="submit" className="btn btn-primary" fdprocessedid="uzw7ye" onClick={() => { setValue(i + 1) }}>Next</button>
                                            </div>
                                        }
                                    </div>

                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddColorStoneMultiLingual