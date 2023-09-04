import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
function AddCompany() {
    const [state, setState] = useState({
        name: "",
        alias: "",
        nature: "",
        parent_id: "",
        group_behave: false,
        balance_for_reporting: false,
        used_for_calculation: false,
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
        toast.success("Group Update Successfully", {
            position: "top-center"
        })
    };

    const toastErrorMessage1 = () => {
        toast.error("Group Not Updated ", {
            position: "top-center"
        })
    };
    const toastSuccessMessage2 = () => {
        toast.success("Group Create Successfully", {
            position: "top-center"
        })
    };

    const toastErrorMessage2 = () => {
        toast.error("Group Not Create ", {
            position: "top-center"
        })
    };

    const sendData = async () => {
        if (params?.id) {
            try {
                const res = await axios.put(`https://onlineparttimejobs.in/api/accountGroup/update_groupMaster/${params.id}`, state, {
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
                const res = await axios.post(`https://onlineparttimejobs.in/api/accountgroup/add_GroupMaster`, state, {
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
        const res = await axios.get(`https://onlineparttimejobs.in/api/accountGroup/${params.id}`, {
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
                    <h5>{params?.id ? 'Update' : 'Create'} Group</h5>
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
                                        <label className="form-label">Under</label>
                                    </div>
                                    <div className="col-md-6 mt-3">
                                        <select class="form-select" aria-label="Default select example" value={state.parent_id} name="parent_id" onChange={onchangeHandle}>
                                            <option selected>Select Option</option>
                                            {underSelect && underSelect.map((item) => {
                                                return <option value={item._id} >{item?.name}</option>
                                            })}
                                        </select>
                                    </div>
                                    <div className="col-md-6 mt-3">
                                        <label className="form-label">Nature</label>
                                    </div>
                                    <div className="col-md-6 mt-3">
                                        <select class="form-select" aria-label="Default select example" value={state.nature} name="nature" onChange={onchangeHandle}>
                                            <option selected>Select Option</option>
                                            <option value='Assets'>Assets</option>
                                            <option value='Expenses'>Expenses</option>
                                            <option value='Income'>Income</option>
                                            <option value='Liabilities'>Liabilities</option>

                                        </select>
                                    </div>


                                </div>
                                <hr className="border-secondary mt-3" />

                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-8">
                                <div className="row">
                                    <div className="col-md-6 mt-3">
                                        <label className="form-label">Group Behave like a sub-ledger</label>
                                    </div>
                                    <div className="col-md-6 mt-3">
                                        <select class="form-select" aria-label="Default select example" value={state.group_behave} name="group_behave" onChange={onchangeHandle}>
                                            <option value={false}>No</option>
                                            <option value={true}>Yes</option>
                                        </select>
                                    </div>
                                    <div className="col-md-6 mt-3">
                                        <label className="form-label">Net Debit/Credit Balance for Reporting</label>
                                    </div>
                                    <div className="col-md-6 mt-3">
                                        <select class="form-select" aria-label="Default select example" value={state.balance_for_reporting} name="balance_for_reporting" onChange={onchangeHandle}>
                                            <option value={false}>No</option>
                                            <option value={true}>Yes</option>
                                        </select>
                                    </div>
                                    <div className="col-md-6 mt-3">
                                        <label className="form-label">Used For Calculation</label>
                                    </div>
                                    <div className="col-md-6 mt-3">
                                        <select class="form-select" aria-label="Default select example" value={state.used_for_calculation} name="used_for_calculation" onChange={onchangeHandle}>
                                            <option value={false}>No</option>
                                            <option value={true}>Yes</option>
                                        </select>
                                    </div>
                                    {/* <div className="col-md-6 mt-3">
                                        <label className="form-label">Method to Allocate When Used in Purchase invoice</label>
                                    </div>
                                    <div className="col-md-6 mt-3">
                                        <select class="form-select" aria-label="Default select example" value={state.} name="used_for_calculation" onChange={onchangeHandle}>
                                            <option selected>No</option>
                                            <option value="1">Yes</option>
                                            <option value="2">No</option>
                                        </select>
                                    </div> */}
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
export default AddCompany