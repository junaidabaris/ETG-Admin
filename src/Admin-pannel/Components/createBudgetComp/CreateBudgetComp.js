import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
function CreateBudgetComp() {
    const [state, setState] = useState({
        name: "",
        from: "",
        to: "",
        groups: false,
        ledgers: false,
        costCenter: false,
        group_id: '123123xxxxxs'
    })
    const token = window.localStorage.getItem('adminToken')
    const [underSelect, SetUnder] = useState(null);

    const getData = async () => {
        const res = await axios.get(`https://onlineparttimejobs.in/api/accountBudgetType`, {
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                Authorization: `Bearer ${token}`,
            },
        })
        SetUnder(res.data)
    }


    const toastSuccessMessage1 = () => {
        toast.success("Budget Updated", {
            position: "top-center"
        })
    };

    const toastErrorMessage1 = () => {
        toast.error("Budget Not Updated ", {
            position: "top-center"
        })
    };
    const toastSuccessMessage2 = () => {
        toast.success("Budget Created", {
            position: "top-center"
        })
    };

    const toastErrorMessage2 = () => {
        toast.error("Budget Not Created", {
            position: "top-center"
        })
    };

    const sendData = async () => {
        if (params?.id) {
            try {
                const res = await axios.put(`https://onlineparttimejobs.in/api/accountBudget/update_Budget/${params.id}`, state, {
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
                const res = await axios.post(`https://onlineparttimejobs.in/api/accountBudget/add_Budget`, state, {
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
        const res = await axios.get(`https://onlineparttimejobs.in/api/accountBudget/${params.id}`, {
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
                    <h5>{params?.id ? 'Update' : 'Create'} Budget</h5>
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
                                        <label className="form-label">Under</label>
                                    </div>
                                    <div className="col-md-6 mt-3">
                                        <select class="form-select" aria-label="Default select example" value={state.parent_id} name="parent_id" onChange={onchangeHandle}>
                                            <option selected>Select Option</option>
                                            {underSelect && underSelect.map((item, i) => {
                                                return <option value={item._id} key={i}>{item?.name}</option>
                                            })}
                                        </select>
                                    </div>

                                    <div className="col-md-6 mt-3">
                                        <label className="form-label">From</label>
                                    </div>
                                    <div className="col-md-6 mt-3">
                                        <input name="from" className="form-control" type="date" onChange={onchangeHandle} />
                                    </div>

                                    <div className="col-md-6 mt-3">
                                        <label className="form-label">To</label>
                                    </div>
                                    <div className="col-md-6 mt-3">
                                        <input name="to" className="form-control" type="date" onChange={onchangeHandle} />
                                    </div>

                                </div>

                                <hr className="border-secondary mt-3" />

                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-8">
                                <div className="row">

                                    <div className="col-md-6 mt-3">
                                        <label className="form-label">Cost Centre</label>
                                    </div>
                                    <div className="col-md-6 mt-3">
                                        <select class="form-select" aria-label="Default select example" value={state.costCenter} name="costCenter" onChange={onchangeHandle}>
                                            <option value={false}>No</option>
                                            <option value={true}>Yes</option>
                                        </select>
                                    </div>

                                    <div className="col-md-6 mt-3">
                                        <label className="form-label">Type of Budget</label>
                                    </div>
                                    <div className="col-md-6 mt-3">
                                        <select class="form-select" aria-label="Default select example" value={state.group_behave} name="group_behave" onChange={onchangeHandle}>
                                            <option value={false}>No</option>
                                            <option value={true}>Yes</option>
                                        </select>
                                    </div>

                                    <div className="col-md-6 mt-3">
                                        <label className="form-label">Groups</label>
                                    </div>
                                    <div className="col-md-6 mt-3">
                                        <select class="form-select" aria-label="Default select example" value={state.groups} name="groups" onChange={onchangeHandle}>
                                            <option value={false}>No</option>
                                            <option value={true}>Yes</option>
                                        </select>
                                    </div>
                                    <div className="col-md-6 mt-3">
                                        <label className="form-label">Ledgers</label>
                                    </div>
                                    <div className="col-md-6 mt-3">
                                        <select class="form-select" aria-label="Default select example" value={state.ledgers} name="ledgers" onChange={onchangeHandle}>
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
export default CreateBudgetComp