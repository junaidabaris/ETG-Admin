import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import { useAddDCustomerMutation, useAddStaffMutation, useGetCurrencyQuery, useGetCustomerRoleQuery, useGetLanguagesQuery, useGetRolesQuery, useGetTimeFormatQuery } from "../all-products/allproductsApi/allProductsApi";
// import { useAddStaffMutation, useGetRolesQuery } from "../../all-products/allproductsApi/allProductsApi";

function AddCustomer() {

    const [inputVal, setInputVal] = useState({
        firstname: '',
        lastname: '',
        email: '',
        mobile: '',
        approve: null,
        // profilePhoto: '',
        language: '',
        currency: "",
        time_format: "",
        password: '',
        approve: null,
        // informations: [],
        role_id: '',
    });
    const params = useParams();

    const onChangeHandler = (e) => {
        const inpName = e.target.name;
        const inpVal = e.target.value;
        const clonedObj = { ...inputVal };
        clonedObj[inpName] = inpVal;
        setInputVal(clonedObj)
    };


    const { data } = useGetRolesQuery(params.id);


    const { data: customerRoleData } = useGetCustomerRoleQuery()

    const { data: language } = useGetLanguagesQuery()

    const { data: currency } = useGetCurrencyQuery()

    const { data: timeformat } = useGetTimeFormatQuery()
    console.log('timeformat', timeformat);


    const [addCustomerD, response] = useAddDCustomerMutation();


    const submitStaffData = (e) => {
        e.preventDefault();
        const clone = { ...inputVal }
        addCustomerD(clone)
        document.getElementById("create-course-form").reset();
    };


    const toastSuccessMessage = () => {
        toast.success("Customer added Successfully", {
            position: "top-center"
        })
    };

    const toastErrorMessage = () => {
        toast.error("Customer not added", {
            position: "top-center"
        })
    };

    useEffect(() => {
        if (response.isSuccess === true) {
            toastSuccessMessage()
        };
    }, [response]);

    useEffect(() => {
        if (response.isError === true) {
            toastErrorMessage()
        };
    }, [response]);


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
                                                <input type="text" placeholder="First Name" name="firstname" className="form-control" required onChange={onChangeHandler} />
                                            </div>
                                        </div>

                                        <div className="form-group row">
                                            <label className="col-sm-3 col-from-label" htmlFor="last name">Last Name</label>
                                            <div className="col-sm-9">
                                                <input type="text" placeholder="Last Name" name="lastname" className="form-control" required onChange={onChangeHandler} />
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
                                            <label className="col-sm-3 col-from-label" htmlFor="name">Language</label>
                                            <div className="col-sm-9">
                                                <div >
                                                    <select className="form-select" name="language" aria-label="Default select example" onChange={onChangeHandler}>
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
                                                        {currency && currency.map((item, i) => {
                                                            return <option value={item._id} key={item._id}>{item.name}</option>
                                                        })}
                                                    </select>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="form-group row">
                                            <label className="col-sm-3 col-from-label" htmlFor="name">Time Format</label>
                                            <div className="col-sm-9">
                                                <div >
                                                    <select className="form-select" name="time_format" aria-label="Default select example" onChange={onChangeHandler}>
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
                                                <input type="password" placeholder="Password" name="password" className="form-control" required onChange={onChangeHandler} />
                                            </div>
                                        </div>

                                        <div className="form-group row">
                                            <label className="col-sm-3 col-from-label" htmlFor="name">Approve</label>
                                            <div className="col-sm-9">
                                                <div >
                                                    <select className="form-select" name="approve" aria-label="Default select example" onChange={onChangeHandler}>
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