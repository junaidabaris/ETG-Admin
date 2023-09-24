import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useGetCurrencyQuery, useGetLanguagesQuery, useGetSellerDetailQuery, useUpdateSellerMutation } from "../../Components/all-products/allproductsApi/allProductsApi";
import { token } from "../../common/TokenArea";


function Profile() {
    const isSellerId = window.localStorage.getItem('adminId')
    const adminId = window.localStorage.getItem('adminId')

    const { data: detailSeller } = useGetSellerDetailQuery(token)
    const [update, { isLoading }] = useUpdateSellerMutation()

    const [show, setShow] = useState(false)
    const { data: language } = useGetLanguagesQuery(token)
    const { data: currency } = useGetCurrencyQuery(token)

    const [state, setState] = useState({
        firstname: "",
        lastname: "",
        email: "",
        mobile: "",
        currency_id: "",
        language_id: "",
        addressLine1: "",
        addressLine2: "",
        landmark: "",
        province: "",
        company: "",
        country: "",
        state: "",
        city: ""
    })

    const onchengeHandle = (e) => {
        const clone = { ...state }
        clone[e.target.name] = e.target.value
        if (e.target.name === 'language_id' || e.target.name === 'currency_id') {
            clone[e.target.id] = e.target.value
        }
        setState(clone)
    }

    useEffect(() => {
        if (detailSeller) {
            const obj = {
                firstname: detailSeller?.firstname,
                lastname: detailSeller?.lastname,
                email: detailSeller?.email,
                mobile: detailSeller?.mobile,
                currency_id: "",
                language_id: "",
                addressLine1: detailSeller?.addressLine1,
                addressLine2: detailSeller?.addressLine2,
                landmark: detailSeller?.landmark,
                province: detailSeller?.province,
                company: detailSeller?.company,
                country: detailSeller?.country,
                state: detailSeller?.state,
                city: detailSeller?.city,
                sellerid: window.localStorage.getItem('isSellerId'),
            }
            setState(obj)
        }
    }, [detailSeller])

    const sendData = () => {
        update({ data: state, token: token })
        console.log(state);
        setShow(true)
        setTimeout(() => {
            setShow(false)
        }, 1000);
    }

    return (
        <>
            <div className="profilePage p-30">
                <div className="container">
                    <div className="pageTitle">
                        <h1 className="fs-3">Manage Profile</h1>
                    </div>
                    <div className="row">

                        {isLoading && <div className="preloaderCount">
                            <div className="spinner-border" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </div>}

                        <div className="col-lg-9">
                            <form>

                                <div className="card">
                                    <div className="card-header">
                                        <h5 className="mb-0 h6">Basic Info</h5>
                                    </div>
                                    <div className="card-body">
                                        <div className="form-group row mb-3">
                                            <label className="col-md-2 col-form-label">
                                                First Name
                                            </label>
                                            <div className="col-md-10">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    name="firstname"
                                                    autoComplete="off"
                                                    value={state.firstname}
                                                    onChange={onchengeHandle}
                                                />
                                            </div>
                                        </div>
                                        <div className="form-group row mb-3">
                                            <label className="col-md-2 col-form-label">
                                                Last Name
                                            </label>
                                            <div className="col-md-10">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    name="lastname"
                                                    autoComplete="off"
                                                    value={state.lastname}
                                                    onChange={onchengeHandle}
                                                />
                                            </div>
                                        </div>

                                        <div className="form-group row mb-3">
                                            <label className="col-md-2 col-form-label">
                                                Email
                                            </label>
                                            <div className="col-md-10">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    name="email"
                                                    value={state.email}
                                                    onChange={onchengeHandle}
                                                    autoComplete="off"
                                                />
                                            </div>
                                        </div>



                                        <div className="form-group row mb-3">
                                            <label className="col-md-2 col-form-label">
                                                Your Phone
                                            </label>
                                            <div className="col-md-10">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    name="mobile"
                                                    onChange={onchengeHandle}
                                                    value={state.mobile}
                                                />
                                            </div>
                                        </div>


                                        <div className="form-group row mb-3">
                                            <label className="col-md-2 col-form-label">
                                                AddressLine 1
                                            </label>
                                            <div className="col-md-10">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    name="addressLine1"
                                                    onChange={onchengeHandle}
                                                    value={state.addressLine1}
                                                />
                                            </div>
                                        </div>
                                        <div className="form-group row mb-3">
                                            <label className="col-md-2 col-form-label">
                                                AddressLine 2
                                            </label>
                                            <div className="col-md-10">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    name="addressLine2"
                                                    onChange={onchengeHandle}
                                                    value={state.addressLine2}
                                                />
                                            </div>
                                        </div>
                                        <div className="form-group row mb-3">
                                            <label className="col-md-2 col-form-label">
                                                Landmark
                                            </label>
                                            <div className="col-md-10">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    name="landmark"
                                                    onChange={onchengeHandle}
                                                    value={state.landmark}
                                                />
                                            </div>
                                        </div>
                                        <div className="form-group row mb-3">
                                            <label className="col-md-2 col-form-label">
                                                Province
                                            </label>
                                            <div className="col-md-10">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    name="province"
                                                    onChange={onchengeHandle}
                                                    value={state.province}
                                                />
                                            </div>
                                        </div>
                                        <div className="form-group row mb-3">
                                            <label className="col-md-2 col-form-label">
                                                Company
                                            </label>
                                            <div className="col-md-10">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    name="company"
                                                    onChange={onchengeHandle}
                                                    value={state.company}
                                                />
                                            </div>
                                        </div>

                                        <div className="form-group row mb-3">
                                            <label className="col-md-2 col-form-label">
                                                Country
                                            </label>
                                            <div className="col-md-10">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    name="country"
                                                    onChange={onchengeHandle}
                                                    value={state.country}
                                                />
                                            </div>
                                        </div>
                                        <div className="form-group row mb-3">
                                            <label className="col-md-2 col-form-label">
                                                State
                                            </label>
                                            <div className="col-md-10">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    name="state"
                                                    onChange={onchengeHandle}
                                                    value={state.state}
                                                />
                                            </div>
                                        </div>

                                        <div className="form-group row mb-3">
                                            <label className="col-md-2 col-form-label">
                                                City
                                            </label>
                                            <div className="col-md-10">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    name="city"
                                                    onChange={onchengeHandle}
                                                    value={state.city}
                                                />
                                            </div>
                                        </div>









                                        <div className="form-group row mb-3">
                                            <label className="col-md-2 col-form-label">
                                                Your Language
                                            </label>
                                            <div className="col-md-10">
                                                <select className="form-select" name="language_id" id="languId" onChange={onchengeHandle} aria-label="Default select example">
                                                    <option selected>{state?.language ? state.language : 'Select Language'}</option>
                                                    {language && language.map((item) => {
                                                        return <option key={item._id} value={item._id}>{item.name}</option>
                                                    })}
                                                </select>
                                            </div>


                                        </div>
                                        <div className="form-group row mb-3">
                                            <label className="col-md-2 col-form-label">
                                                Your Currency
                                            </label>
                                            <div className="col-md-10">
                                                <select className="form-select" name="currency_id" id="currId" onChange={onchengeHandle} aria-label="Default select example">
                                                    <option selected>{state?.currency ? state.currency : 'Select Currency'}</option>
                                                    {currency && currency.map((item) => {
                                                        return <option key={item._id} value={item._id}>{item.name}</option>
                                                    })}
                                                </select>
                                            </div>
                                        </div>


                                    </div>
                                </div>
                                <div className="form-group mt-3 text-right">
                                    {show && (<div className="alert alert-success" role="alert">
                                        <h4 style={{ display: "flex", justifyContent: "center" }}>Profile Update Successfully!</h4>
                                    </div>)}
                                    <button style={{ display: "flex", alignItems: "center" }} type="button" onClick={sendData} className="btn btn-primary">
                                        Update Profile
                                        {show && <div className="spinner-border" role="status">
                                            <span className="visually-hidden">Loading...</span>
                                        </div>}
                                    </button>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Profile;
