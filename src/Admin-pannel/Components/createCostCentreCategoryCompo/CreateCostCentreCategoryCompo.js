import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
function CreateCostCentreCategoryCompo() {
    const [state, setState] = useState({
        name: "",
        alias: "",
        allocateRevenue: false,
        allocateNonRevenue: false,
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
        toast.success("Cost Centre Category Update", {
            position: "top-center"
        })
    };

    const toastErrorMessage1 = () => {
        toast.error("Cost Centre Category Not Updated ", {
            position: "top-center"
        })
    };
    const toastSuccessMessage2 = () => {
        toast.success("Cost Centre Category Created", {
            position: "top-center"
        })
    };

    const toastErrorMessage2 = () => {
        toast.error("Cost Centre Category Not Created", {
            position: "top-center"
        })
    };

    const sendData = async () => {
        if (params?.id) {
            try {
                const res = await axios.put(`https://onlineparttimejobs.in/api/accountCostCenterType/update_CostCenter/${params.id}`, state, {
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
                const res = await axios.post(`https://onlineparttimejobs.in/api/accountCostCenterType/add_CostCenter`, state, {
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
        const res = await axios.get(`https://onlineparttimejobs.in/api/accountCostCenterType/${params.id}`, {
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
                    <h5>{params?.id ? 'Update' : 'Create'} Cost Centre Category</h5>
                    {/* <h5>Create Cost Centre Category</h5> */}
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

                                </div>
                                <hr className="border-secondary mt-3" />

                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-8">
                                <div className="row">
                                    <div className="col-md-6 mt-3">
                                        <label className="form-label">Allocate Revenue items</label>
                                    </div>
                                    <div className="col-md-6 mt-3">
                                        <select class="form-select" aria-label="Default select example" value={state.allocateRevenue} name="allocateRevenue" onChange={onchangeHandle}>
                                            <option value={false}>No</option>
                                            <option value={true}>Yes</option>
                                        </select>
                                    </div>
                                    <div className="col-md-6 mt-3">
                                        <label className="form-label">Allocate Non-revenue items</label>
                                    </div>
                                    <div className="col-md-6 mt-3">
                                        <select class="form-select" aria-label="Default select example" value={state.allocateNonRevenue} name="allocateNonRevenue" onChange={onchangeHandle}>
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
export default CreateCostCentreCategoryCompo