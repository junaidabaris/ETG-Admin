import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
function CreateVoucherTypeComp() {
    const [state, setState] = useState({
        name: "",
        alias: "",
        abbreviation: "",
        methodOfNumber: "",
        advanceConfig: false,
        useEffectiveDateForVoucher: false,
        isOptional: false,
        commonNaration: false,
        narationForEntry: false,
        selected: false,
    })
    const token = window.localStorage.getItem('adminToken')
    const [underSelect, SetUnder] = useState(null)
    const getData = async () => {
        const res = await axios.get(`https://onlineparttimejobs.in/api/accountGroup`, {
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                Authorization: `Bearer ${token}`,
            },
        })
        SetUnder(res.data)
    }


    const toastSuccessMessage1 = () => {
        toast.success("Voucher Type Updated", {
            position: "top-center"
        })
    };

    const toastErrorMessage1 = () => {
        toast.error("Voucher Type Not Updated ", {
            position: "top-center"
        })
    };
    const toastSuccessMessage2 = () => {
        toast.success("Voucher Type Created", {
            position: "top-center"
        })
    };

    const toastErrorMessage2 = () => {
        toast.error("Voucher Type Not Created", {
            position: "top-center"
        })
    };

    const sendData = async () => {
        if (params?.id) {
            try {
                const res = await axios.put(`https://onlineparttimejobs.in/api/voucherType/update_voucherType/${params.id}`, state, {
                    headers: {
                        "Content-type": "application/json; charset=UTF-8",
                        Authorization: `Bearer ${token}`,
                    },
                })
                toastSuccessMessage1()
            } catch (error) {
                toastErrorMessage1()
            }

        } else {
            try {
                const res = await axios.post(`https://onlineparttimejobs.in/api/voucherType/add_voucherType`, state, {
                    headers: {
                        "Content-type": "application/json; charset=UTF-8",
                        Authorization: `Bearer ${token}`,
                    },
                })
                toastSuccessMessage2()
            } catch (error) {
                toastErrorMessage2()
            }

        }
    }


    const params = useParams()
    const getDatas = async () => {
        const res = await axios.get(`https://onlineparttimejobs.in/api/voucherType/${params.id}`, {
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                Authorization: `Bearer ${token}`,
            },
        })
        setState({ ...res.data, under: res?.data?.under?._id })
    }
    useEffect(() => {
        getData()
        if (params?.id) {
            getDatas()
        }
    }, [params])

    const onchangeHandle = (e) => {
        const clone = { ...state }
        clone[e.target.name] = e.target.value
        setState(clone)
    }
    return (
        <>
            <ToastContainer />
            <div className="container">
                <div className="row ml-3">
                    <h5>{params?.id ? 'Update' : 'Create'} Voucher Type</h5>
                </div>
                <div className="card">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-8">
                                <div className="row">
                                    <div className="col-md-6 mt-3">
                                        <label className="form-label">Name</label>
                                    </div>
                                    <div className="col-md-6 mt-3">
                                        <input className="form-control" type="text" value={state.name} name="name" onChange={onchangeHandle} />
                                    </div>
                                    <div className="col-md-6 mt-3">
                                        <label className="form-label">(alias)</label>
                                    </div>
                                    <div className="col-md-6 mt-3">
                                        <input className="form-control" type="text" value={state.alias} name="alias" onChange={onchangeHandle} />
                                    </div>

                                    <div className="col-md-6 mt-3">
                                        <label className="form-label">Type Of Voucher</label>
                                    </div>
                                    <div className="col-md-6 mt-3">
                                        <input className="form-control" type="text" value={state.vocherTpe} name="vocherTpe" onChange={onchangeHandle} />
                                    </div>

                                    <div className="col-md-6 mt-3">
                                        <label className="form-label">Abbreviation</label>
                                    </div>
                                    <div className="col-md-6 mt-3">
                                        <input className="form-control" type="text" value={state.abbreviation} name="abbreviation" onChange={onchangeHandle} />
                                    </div>

                                    {/* <div className="col-md-6 mt-3">
                                        <label className="form-label">Under</label>
                                    </div>
                                    <div className="col-md-6 mt-3">
                                        <select class="form-select" aria-label="Default select example" value={state.parent_id} name="parent_id" onChange={onchangeHandle}>
                                            <option selected>Select Option</option>
                                            {underSelect && underSelect.map((item, i) => {
                                                return <option value={item._id} key={i}>{item?.name}</option>
                                            })}
                                        </select>
                                    </div> */}

                                </div>

                                <hr className="border-secondary mt-3" />

                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-8">
                                <div className="row">
                                    <div className="col-md-6 mt-3">
                                        <label className="form-label">Method of Voucher Numbering</label>
                                    </div>
                                    <div className="col-md-6 mt-3">
                                        <select class="form-select" aria-label="Default select example" value={state.methodOfNumber} name="methodOfNumber" onChange={onchangeHandle}>
                                            <option value={'Automatic'}>Automatic</option>
                                            <option value={'Manual'}>Manual</option>
                                            <option value={'None'}>None</option>
                                        </select>
                                    </div>

                                    <div className="col-md-6 mt-3">
                                        <label className="form-label">Use Advance Configuration</label>
                                    </div>
                                    <div className="col-md-6 mt-3">
                                        <select class="form-select" aria-label="Default select example" value={state.advanceConfig} name="advanceConfig" onChange={onchangeHandle}>
                                            <option value={false}>No</option>
                                            <option value={true}>Yes</option>
                                        </select>
                                    </div>

                                    <div className="col-md-6 mt-3">
                                        <label className="form-label">Use Effective Dates for Vouchers</label>
                                    </div>
                                    <div className="col-md-6 mt-3">
                                        <select class="form-select" aria-label="Default select example" value={state.useEffectiveDateForVoucher} name="useEffectiveDateForVoucher" onChange={onchangeHandle}>
                                            <option value={false}>No</option>
                                            <option value={true}>Yes</option>
                                        </select>
                                    </div>

                                    <div className="col-md-6 mt-3">
                                        <label className="form-label">Make 'Optional' as default</label>
                                    </div>
                                    <div className="col-md-6 mt-3">
                                        <select class="form-select" aria-label="Default select example" value={state.isOptional} name="isOptional" onChange={onchangeHandle}>
                                            <option value={false}>No</option>
                                            <option value={true}>Yes</option>
                                        </select>
                                    </div>

                                    <div className="col-md-6 mt-3">
                                        <label className="form-label">Use Common Narration</label>
                                    </div>
                                    <div className="col-md-6 mt-3">
                                        <select class="form-select" aria-label="Default select example" value={state.commonNaration} name="commonNaration" onChange={onchangeHandle}>
                                            <option value={false}>No</option>
                                            <option value={true}>Yes</option>
                                        </select>
                                    </div>

                                    <div className="col-md-6 mt-3">
                                        <label className="form-label">Narrations for Each Entry</label>
                                    </div>
                                    <div className="col-md-6 mt-3">
                                        <select class="form-select" aria-label="Default select example" value={state.narationForEntry} name="narationForEntry" onChange={onchangeHandle}>
                                            <option value={false}>No</option>
                                            <option value={true}>Yes</option>
                                        </select>
                                    </div>

                                    <div className="col-md-6 mt-3">
                                        <label className="form-label">Display Button on Voucher</label>
                                    </div>
                                    <div className="col-md-6 mt-3">
                                        <select class="form-select" aria-label="Default select example" value={state.selected} name="selected" onChange={onchangeHandle}>
                                            <option value={false}>No</option>
                                            <option value={true}>Yes</option>
                                        </select>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-8"></div>
                            <div className="col-md-4 text-right">
                                <button className="btn btn-primary" onClick={sendData}>{params?.id ? 'Update' : 'Save'}</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default CreateVoucherTypeComp
