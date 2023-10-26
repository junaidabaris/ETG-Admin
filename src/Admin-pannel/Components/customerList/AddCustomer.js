import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import { useAddDCustomerMutation, useAddStaffMutation, useEditCustomerMutation, useGetCurrencyQuery, useGetCustomerByIdQuery, useGetCustomerRoleQuery, useGetLanguagesQuery, useGetRolesQuery, useGetTimeFormatQuery } from "../all-products/allproductsApi/allProductsApi";
import { Form } from "react-bootstrap";
import axios from "axios";
// import { useAddStaffMutation, useGetRolesQuery } from "../../all-products/allproductsApi/allProductsApi";

function AddCustomer() {
    const token = window.localStorage.getItem('adminToken')
    const [inputVal, setInputVal] = useState({
        firstname: '',
        lastname: '',
        email: '',
        mobile: '',
        approve: null,
        // profilePhoto: '',
        language: '',
        currency: '',
        adhaar_card: '',
        pan_card: '',
        time_format: "",
        password: '',
        approve: null,
        // informations: [],
        role_id: '',
        OpeningBalance: '',
        asonDate: '',
        amount_type: 'Debit',
    });
    const params = useParams();
    const { data: cusData, isSuccess } = useGetCustomerByIdQuery({ id: params.id, token: token });
    const onChangeHandler = (e) => {
        const inpName = e.target.name;
        const inpVal = e.target.value;
        const clonedObj = { ...inputVal };
        clonedObj[inpName] = inpVal;
        setInputVal(clonedObj)
    };

    useEffect(() => {
        if (params.id) {
            setInputVal({
                firstname: cusData?.firstname,
                lastname: cusData?.lastname,
                email: cusData?.email,
                mobile: cusData?.mobile,
                approve: cusData?.approve,
                language: cusData?.language,
                currency: cusData?.currency,
                time_format: cusData?.time_format,
                password: cusData?.approve,
                adhaar_card: cusData?.adhaar_card,
                pan_card: cusData?.pan_card,
                role_id: '',
                // OpeningBalance: cusData?.approve,
                // asonDate: cusData?.approve,
                amount_type: 'Debit',
            })
        }
    }, [params, isSuccess])


    const { data } = useGetRolesQuery(params.id);


    const { data: customerRoleData } = useGetCustomerRoleQuery()

    const { data: language } = useGetLanguagesQuery(token)

    const { data: currency } = useGetCurrencyQuery(token)

    const { data: timeformat } = useGetTimeFormatQuery()

    const [addCustomerD, response] = useAddDCustomerMutation();
    const [updatCustomer, { isError: uperr, isSuccess: upsuc }] = useEditCustomerMutation();


    const submitStaffData = (e) => {
        e.preventDefault();
        const clone = { ...inputVal }
        if (params.id) {
            updatCustomer({ data: clone, token: token, id: params.id })
        } else {
            addCustomerD({ data: clone, token: token })
        }
        console.log(clone);

        document.getElementById("create-course-form").reset();
    };


    const toastSuccessMessage = (str) => {
        toast.success(`Customer ${str} Successfully`, {
            position: "top-center"
        })
    };

    const toastErrorMessage = (str) => {
        toast.error(`Customer not ${str}`, {
            position: "top-center"
        })
    };

    useEffect(() => {
        if (response.isSuccess === true) {
            toastSuccessMessage('Add')
        };
    }, [response]);

    useEffect(() => {
        if (response.isError === true) {
            toastErrorMessage('Add')
        };
    }, [response]);

    useEffect(() => {
        if (upsuc) {
            toastSuccessMessage('Update')
        };
    }, [upsuc]);

    useEffect(() => {
        if (uperr) {
            toastErrorMessage('Update')
        };
    }, [uperr]);

    const [unders, setUneders] = useState(null)
    const getAllData = async () => {
        const res1 = await axios.get(`https://onlineparttimejobs.in/api/accountGroup`, {
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                Authorization: `Bearer ${token}`,
            },
        })
        setUneders(res1.data)
    }
    useEffect(() => {
        getAllData()
    }, [])
    return (
        <>
            <div className="aiz-main-content">
                <div className="px-15px px-lg-25px">
                    <div className="row">
                        <div className="col-lg-6 mx-auto">
                            <div className="card">
                                <div className="card-header">
                                    <h5 className="mb-0 h6">Customer Information</h5>
                                </div>
                                <form className="form-horizontal" id="create-course-form" onSubmit={submitStaffData}>
                                    <input type="hidden" name="_token" defaultValue="S0f7vDDtqJ5NbxPupX86gbiFGZumqx0Q8PyryILc" />
                                    <div className="card-body">

                                        <div className="form-group row">
                                            <label className="col-sm-3 col-from-label" htmlFor="first name">First Name</label>
                                            <div className="col-sm-9">
                                                <input type="text" placeholder="First Name" value={inputVal?.firstname} name="firstname" className="form-control" required onChange={onChangeHandler} />
                                            </div>
                                        </div>

                                        <div className="form-group row">
                                            <label className="col-sm-3 col-from-label" htmlFor="last name">Last Name</label>
                                            <div className="col-sm-9">
                                                <input type="text" placeholder="Last Name" name="lastname" value={inputVal?.lastname} className="form-control" required onChange={onChangeHandler} />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label className="col-sm-3 col-from-label" htmlFor="last name">Under Group</label>
                                            <div className="col-sm-9">
                                                <Form.Select aria-label="Default select example" value={inputVal?.AccLedgerGroupId} name="AccLedgerGroupId" onChange={onChangeHandler}>
                                                    <option>Open this select menu</option>
                                                    {unders && unders.map((item) => {
                                                        return <option value={item._id}>{item.name}</option>
                                                    })}
                                                </Form.Select>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label className="col-sm-3 col-from-label" htmlFor="last name">Amount Type</label>
                                            <div className="col-sm-9">
                                                <Form.Select aria-label="Default select example" value={inputVal?.amount_type} name="amount_type" onChange={onChangeHandler}>
                                                    <option>Open this select menu</option>
                                                    <option selected value='Debit'>Debit</option>
                                                    <option value='Credit'>Credit</option>
                                                </Form.Select>
                                            </div>
                                        </div>

                                        <div className="form-group row">
                                            <label className="col-sm-3 col-from-label" htmlFor="email">Email</label>
                                            <div className="col-sm-9">
                                                <input type="email" placeholder="abc@gmail.com" autoComplete="off" value={inputVal?.email} name="email" className="form-control" required onChange={onChangeHandler} />
                                            </div>
                                        </div>

                                        <div className="form-group row">
                                            <label className="col-sm-3 col-from-label" htmlFor="mobile">Phone</label>
                                            <div className="col-sm-9">
                                                <input type="text" placeholder="Phone" name="mobile" value={inputVal?.mobile} className="form-control" required onChange={onChangeHandler} />
                                            </div>
                                        </div>


                                        <div className="form-group row">
                                            <label className="col-sm-3 col-from-label" htmlFor="name">Language</label>
                                            <div className="col-sm-9">
                                                <div >
                                                    <select className="form-select" name="language" value={inputVal?.language} aria-label="Default select example" onChange={onChangeHandler}>
                                                        <option>Open this select menu</option>
                                                        {language && language.map((item, i) => {
                                                            return <option value={item._id} key={item._id}>{item.name}</option>
                                                        })}
                                                    </select>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="form-group row">
                                            <label className="col-sm-3 col-from-label" htmlFor="name">Currency</label>
                                            <div className="col-sm-9">
                                                <div >
                                                    <select className="form-select" name="currency" aria-label="Default select example" onChange={onChangeHandler}>
                                                        <option>Open this select menu</option>
                                                        {currency && currency.map((item, i) => {
                                                            return <option value={item._id} key={item._id}>{item.name}</option>
                                                        })}
                                                    </select>
                                                </div>
                                            </div>
                                        </div>




                                        <div className="form-group row">
                                            <label className="col-sm-3 col-from-label" htmlFor="mobile">Opening Balance Amount</label>
                                            <div className="col-sm-9">
                                                <input type="text" placeholder="Opening Balance" name="OpeningBalance" className="form-control" onChange={onChangeHandler} />
                                            </div>
                                        </div>

                                        <div className="form-group row">
                                            <label className="col-sm-3 col-from-label" htmlFor="mobile">As On Date</label>
                                            <div className="col-sm-9">
                                                <input type="date" placeholder="As On Date" name="asonDate" className="form-control" onChange={onChangeHandler} />
                                            </div>
                                        </div>



                                        <div className="form-group row">
                                            <label className="col-sm-3 col-from-label" htmlFor="name">Time Format</label>
                                            <div className="col-sm-9">
                                                <div >
                                                    <select className="form-select" name="time_format" aria-label="Default select example" onChange={onChangeHandler}>
                                                        <option>Open this select menu</option>
                                                        {timeformat && timeformat.map((item, i) => {
                                                            return <option value={item._id} key={item._id}>{item.title}</option>
                                                        })}
                                                    </select>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="form-group row">
                                            <label className="col-sm-3 col-from-label" htmlFor="name">Role</label>
                                            <div className="col-sm-9">
                                                <div >
                                                    <select className="form-select" name="role_id" aria-label="Default select example" onChange={onChangeHandler}>
                                                        <option>Open this select menu</option>
                                                        {customerRoleData && customerRoleData.map((item, i) => {
                                                            return <option value={item._id} key={item._id}>{item.customerRole_name}</option>
                                                        })}
                                                    </select>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="form-group row">
                                            <label className="col-sm-3 col-from-label" htmlFor="mobile">Password</label>
                                            <div className="col-sm-9">
                                                <input type="password" placeholder="Password" name="password" className="form-control" onChange={onChangeHandler} />
                                            </div>
                                        </div>

                                        <div className="form-group row">
                                            <label className="col-sm-3 col-from-label" htmlFor="name">Approve</label>
                                            <div className="col-sm-9">
                                                <div >
                                                    <select className="form-select" name="approve" aria-label="Default select example" onChange={onChangeHandler}>
                                                        <option>Open this select menu</option>
                                                        <option value={true}>Yes</option>
                                                        <option value={false}>No</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="form-group mb-0 text-right">
                                            <button type="submit" className="btn btn-sm btn-primary">Save</button>
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
export default AddCustomer;