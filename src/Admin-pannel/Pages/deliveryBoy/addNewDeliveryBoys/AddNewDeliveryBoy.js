import React, { useEffect } from 'react';
import { useState } from "react";
import { useParams } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import { useAddStaffMutation, useGetCurrencyQuery, useGetLanguagesQuery, useGetRolesQuery } from '../../../Components/all-products/allproductsApi/allProductsApi';
import axios from 'axios';

function AddNewDeliveryBoy() {

    const [inputVal, setInputVal] = useState({
        firstname: '',
        lastname: '',
        email: '',
        mobile: '',
        password: '',
        country: '',
        state: '',
        city: '',
        province: '',
        language_id: '',
        currency_id: '',
        pin: '',
    });
    const token = window.localStorage.getItem('token')
    const isPickupManagerLogin = window.localStorage.getItem('isPickupManagerLogin')
    const isPickupManagerId = window.localStorage.getItem('isPickupManagerId')
    const { data: currency } = useGetCurrencyQuery(token)
    const { data: language } = useGetLanguagesQuery(token)

    const [pickups, setPickups] = useState(null)

    const getPickupPoint = async () => {
        try {
            const res = await axios.get(`https://onlineparttimejobs.in/api/pickupPoints`, {
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                    'Authorization': 'Bearer ' + token
                },
            })
            setPickups(res.data)
        } catch (error) {
            alert('Server Error Fail to load pickup Points')
        }
    }

    useEffect(() => {
        getPickupPoint()
    }, [])


    // let pickupId = '6412fbd218fa66a37ed430d1';
    const [pickupId, setpickupId] = useState()
    const handelChange = (e) => {
        setpickupId(e.target.value)
    }


    const [file, setfile] = useState(null)

    const onChangeHandler = (e) => {
        const inpName = e.target.name;
        const inpVal = e.target.value;
        const clonedObj = { ...inputVal };
        clonedObj[inpName] = inpVal;
        setInputVal(clonedObj)
    };

    const onchangephoto = (e) => {
        setfile(e.target.files[0])
    }


    const toastSuccessMessage = () => {
        toast.success("Delevery Boy Added Successfully", {
            position: "top-center"
        })
    };

    const toastErrorMessage = () => {
        toast.error("Delevery Boy  not added", {
            position: "top-center"
        })
    };

    const submitStaffData = async (e) => {
        const formData = new FormData();
        if (isPickupManagerLogin === 'true') {
            formData.append('firstname', inputVal.firstname);
            formData.append('lastname', inputVal.lastname);
            formData.append('email', inputVal.email);
            formData.append('mobile', inputVal.mobile);
            formData.append('state', inputVal.state);
            formData.append('country', inputVal.country);
            formData.append('city', inputVal.city);
            formData.append('pickupPoint', isPickupManagerId);
            formData.append('province', inputVal.province);
            formData.append('pin', inputVal.pin);
            formData.append('province', inputVal.province);
            formData.append('pin', inputVal.pin);
            formData.append('password', inputVal.password);
            formData.append('password', inputVal.language_id);
            formData.append('password', inputVal.currency_id);
            formData.append('image', file);
        } else {
            formData.append('firstname', inputVal.firstname);
            formData.append('lastname', inputVal.lastname);
            formData.append('email', inputVal.email);
            formData.append('mobile', inputVal.mobile);
            formData.append('state', inputVal.state);
            formData.append('country', inputVal.country);
            formData.append('city', inputVal.city);
            formData.append('pickupPoint', pickupId);
            formData.append('province', inputVal.province);
            formData.append('pin', inputVal.pin);
            formData.append('password', inputVal.language_id);
            formData.append('password', inputVal.currency_id);
            formData.append('password', inputVal.password);
            formData.append('image', file);
        }

        try {
            const res = await axios.post(`https://onlineparttimejobs.in/api/deliveryBoy/add_deliveryBoy`, formData, {
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                    'Authorization': 'Bearer ' + token
                },
            })
            toastSuccessMessage()

        } catch (error) {
            toastErrorMessage()
        }
    };



    return (
        <>
            <div className="aiz-main-content">
                <div className="px-15px px-lg-25px">
                    <div className="row">
                        <div className="col-lg-6 mx-auto">
                            <div className="card">
                                <div className="card-header">
                                    <h5 className="mb-0 h6">Delivery Boy Information</h5>
                                </div>
                                <form className="form-horizontal" id="create-course-form">
                                    <input type="hidden" name="_token" defaultValue="S0f7vDDtqJ5NbxPupX86gbiFGZumqx0Q8PyryILc" />
                                    <div className="card-body">

                                        <div className="form-group row">
                                            <label className="col-sm-3 col-from-label" htmlFor="first name">First Name</label>
                                            <div className="col-sm-9">
                                                <input type="text" placeholder="First Name" name="firstname" className="form-control" required onChange={onChangeHandler} />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label className="col-sm-3 col-from-label" htmlFor="first name">Last Name</label>
                                            <div className="col-sm-9">
                                                <input type="text" placeholder="last Name" name="lastname" className="form-control" required onChange={onChangeHandler} />
                                            </div>
                                        </div>

                                        <div className="form-group row">
                                            <label className="col-sm-3 col-from-label" htmlFor="email">Email</label>
                                            <div className="col-sm-9">
                                                <input type="email" placeholder="abc@gmail.com" autoComplete="off" name="email" className="form-control" required onChange={onChangeHandler} />
                                            </div>
                                        </div>

                                        <div className="form-group row">
                                            <label className="col-sm-3 col-from-label" htmlFor="mobile">Phone</label>
                                            <div className="col-sm-9">
                                                <input type="text" placeholder="Phone" name="mobile" className="form-control" required onChange={onChangeHandler} />
                                            </div>
                                        </div>

                                        <div className="form-group row">
                                            <label className="col-sm-3 col-from-label" htmlFor="password">Password</label>
                                            <div className="col-sm-9">
                                                <input type="password" placeholder="Password" name="password" className="form-control" required onChange={onChangeHandler} />
                                            </div>
                                        </div>

                                        {isPickupManagerLogin === 'false' && <div className="form-group row">
                                            <label className="col-sm-3 col-from-label" htmlFor="update_delivery_status">
                                                PickUp Manager
                                            </label>
                                            <div className="col-sm-9">
                                                <select
                                                    onChange={handelChange}
                                                    style={{ height: 38 + "px", fontSize: 13 + "px", width: "540px" }}>
                                                    <option>Select Manager</option>
                                                    {pickups && pickups.map((item) => {
                                                        return <option key={item._id} id={item._id} value={item._id}>
                                                            {item.pickupPoint_name}
                                                        </option>
                                                    })}

                                                </select>
                                            </div>

                                        </div>}


                                        <div className="form-group row">
                                            <label className="col-sm-3 col-from-label" htmlFor="password">Country</label>
                                            <div className="col-sm-9">
                                                <input type="text" placeholder="country" name="country" className="form-control" required onChange={onChangeHandler} />
                                            </div>
                                            {/* <div className="col-sm-9">
                                                <select className="form-select" aria-label="Default select example" name='country' onChange={onChangeHandler}>
                                                    <option value="1">Zambia</option>
                                                    <option value="2">Africa</option>
                                                    <option value="3">India</option>
                                                </select>
                                            </div> */}
                                        </div>

                                        <div className="form-group row">
                                            <label className="col-sm-3 col-from-label" htmlFor="password">State</label>
                                            <div className="col-sm-9">
                                                <input type="text" placeholder="state" name="state" className="form-control" required onChange={onChangeHandler} />
                                            </div>
                                            {/* <div className="col-sm-9">
                                                <select className="form-select" aria-label="Default select example" name='state' onChange={onChangeHandler}>
                                                    <option value="1">One</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                </select>
                                            </div> */}
                                        </div>

                                        <div className="form-group row">
                                            <label className="col-sm-3 col-from-label" htmlFor="password">City</label>
                                            <div className="col-sm-9">
                                                <input type="text" placeholder="city" name="city" className="form-control" required onChange={onChangeHandler} />
                                            </div>

                                        </div>

                                        <div className="form-group row">
                                            <label className="col-sm-3 col-from-label" htmlFor="password">Province</label>
                                            <div className="col-sm-9">
                                                <input type="text" placeholder="Province" name="province" className="form-control" required onChange={onChangeHandler} />
                                            </div>

                                        </div>
                                        <div className="form-group row">
                                            <label className="col-sm-3 col-from-label" htmlFor="password">Pin</label>
                                            <div className="col-sm-9">
                                                <input type="text" placeholder="Pin" name="pin" className="form-control" required onChange={onChangeHandler} />
                                            </div>

                                        </div>
                                        {/* <div className="form-group row">
                                            <label className="col-sm-3 col-from-label" htmlFor="password">Language</label>

                                            <div className="col-sm-9">
                                                <select className="form-select" aria-label="Default select example" name='language_id' onChange={onChangeHandler}>
                                                    <option>Select Language</option>
                                                    {language && language?.map((item) => {
                                                        return <option key={item._id} value={item._id}>{item.name}</option>
                                                    })}
                                                </select>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label className="col-sm-3 col-from-label" htmlFor="password">Your Currency</label>
                                            <div className="col-sm-9">
                                                <select className="form-select" name="currency_id" id="currId" onChange={onChangeHandler} aria-label="Default select example">
                                                    <option selected>Select Currency</option>
                                                    {currency && currency.map((item) => {
                                                        return <option key={item._id} value={item._id}>{item.name}</option>
                                                    })}
                                                </select>
                                            </div>
                                        </div> */}
                                        <div className="form-group row">
                                            <label className="col-md-3 col-form-label" htmlFor="signinSrEmail">
                                                Image
                                            </label>
                                            <div className="col-md-9">
                                                <div className="input-group" data-type="image">
                                                    <div className="input-group-prepend">
                                                        <div className="input-group-text bg-soft-secondary font-weight-medium">
                                                            Browse
                                                        </div>
                                                    </div>
                                                    <div className="form-control file-amount">
                                                        <input type="file" name="banner" className="selected-files" onChange={onchangephoto} />
                                                    </div>
                                                </div>
                                                <div className="file-preview box sm">
                                                </div>
                                            </div>
                                        </div>


                                        {/* <div className="form-group row">
                                            <label className="col-sm-3 col-from-label" htmlFor="password">Adress</label>
                                            <div className="col-sm-9">
                                                <textarea placeholder="Adress" name="city" className="form-control" required onChange={onChangeHandler} rows="3" cols="50">
                                                </textarea>
                                            </div>
                                        </div> */}

                                        <div className="form-group mb-0 text-right">
                                            <button type="button" onClick={submitStaffData} className="btn btn-sm btn-primary">Save</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-white text-center py-3 px-15px px-lg-25px mt-auto"></div>
                <ToastContainer />
            </div>
        </>
    )
}

export default AddNewDeliveryBoy