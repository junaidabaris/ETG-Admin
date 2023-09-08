import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
function CreateCostCentreComp() {
    const [state, setState] = useState({
        name: "",
        alias: "",
        under: "",
        // parent_id: "",
    })
    const token = window.localStorage.getItem('adminToken')
    const [underSelect, SetUnder] = useState(null)
    const getData = async () => {
        const res = await axios.get(`https://onlineparttimejobs.in/api/accountCostCenterType`, {
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                Authorization: `Bearer ${token}`,
            },
        })
        SetUnder(res.data)
    }
    console.log('SetUnder---', underSelect)

    const toastSuccessMessage1 = () => {
        toast.success("Cost Centre Update", {
            position: "top-center"
        })
    };

    const toastErrorMessage1 = () => {
        toast.error("Cost Centre Not Updated ", {
            position: "top-center"
        })
    };
    const toastSuccessMessage2 = () => {
        toast.success("Cost Centre Created", {
            position: "top-center"
        })
    };

    const toastErrorMessage2 = () => {
        toast.error("Cost Centre Not Created", {
            position: "top-center"
        })
    };

    const sendData = async () => {
        console.log('state--', state);
        if (params?.id) {
            try {
                const res = await axios.put(`https://onlineparttimejobs.in/api/accountCostCenter/update_CostCenter/${params.id}`, state, {
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
                const res = await axios.post(`https://onlineparttimejobs.in/api/accountCostCenter/add_CostCenter`, state, {
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
        const res = await axios.get(`https://onlineparttimejobs.in/api/accountCostCenter/${params.id}`, {
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
                    <h5>{params?.id ? 'Update' : 'Create'} Cost Centre</h5>
                    {/* <h5>Create Cost Centre</h5> */}
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
                                        <select class="form-select" aria-label="Default select example" value={state.under} name="under" onChange={onchangeHandle}>
                                            <option selected>Select Option</option>
                                            {underSelect && underSelect.map((item, i) => {
                                                return <option value={item._id} key={i}>{item?.name}</option>
                                            })}
                                        </select>
                                    </div>
                                </div>
                                <hr className="border-secondary mt-3" />

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
export default CreateCostCentreComp