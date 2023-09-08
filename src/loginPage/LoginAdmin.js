import { useEffect, useState } from "react"
import login from "../assets/img/login.png";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineGoogle } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { useLoginStaffsMutation, useSellerLoginMutation } from "../Admin-pannel/Components/all-products/allproductsApi/allProductsApi";
import { Spinner } from "react-bootstrap";
import img2 from "../assets/img/login.png"
import axios from "axios";

function LoginSection({ setshow }) {

    const navigate = useNavigate()
    const [getLogin, { data, isError, isSuccess, isLoading }] = useLoginStaffsMutation()

    const getLoginAdmin = window.localStorage.getItem('showMainadmin')
    const getLoginStaf = window.localStorage.getItem('adminIslogin')

    // const abc = window.localStorage.setItem('role_id',)
    const [showSeller, setHowSeller] = useState(false)

    useEffect(() => {
        // if (getLoginAdmin === 'true' || getLoginStaf === 'true') {
        //     navigate('/admin')
        // }
    }, [])

    const [loginForm, setLoginForm] = useState({
        email: "",
        password: "",
    });

    const handleChangeLogin = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        const cloneData = { ...loginForm };
        cloneData[name] = value;
        setLoginForm(cloneData);
    };


    const handleLoginSubmit = async (e) => {
        e.preventDefault();
        getLogin(loginForm)
    };

    useEffect(() => {
        setshow(false)
    }, [])
    const [sellerLog, { data: sellerData, isLoading: sellerLoading, isError: isSellerErr, isSuccess: isSellerSucc }] = useSellerLoginMutation()

    const setAllData = (data) => {
        // window.localStorage.setItem('adminId', data.findStaff._id)
        window.localStorage.setItem('adminToken', data.token)
        window.localStorage.setItem('adminIslogin', false)
        window.localStorage.setItem('showMainadmin', false)
        window.localStorage.setItem('isSellerLogin', false)
        window.localStorage.setItem('isSellerName', null)
        window.localStorage.setItem('isPickupManagerLogin', false)
        window.localStorage.setItem('isPickupManagerId', null)
        window.localStorage.setItem('isPickupManagerName', null)
        window.localStorage.setItem('adminId', '')
        window.localStorage.setItem('isSellerId', null)
        window.localStorage.setItem('isDeleveryBoy', false)
        window.localStorage.setItem('DeleveryBoyId', null)
        window.localStorage.setItem('DeleveryBoyName', null)

        if (data?.finddeliveryBoy?.role_id.role_name === 'delevery boy') {
            window.localStorage.setItem('isDeleveryBoy', true)
            window.localStorage.setItem('DeleveryBoyId', data?.finddeliveryBoy?._id)
            window.localStorage.setItem('DeleveryBoyName', data?.finddeliveryBoy?.firstname + " " + data?.finddeliveryBoy?.lastname)

        }

        else if (data?.findStaff?.role_id?.role_name === 'Pickup Point Manager') {
            
            window.localStorage.setItem('isPickupManagerLogin', true)
            window.localStorage.setItem('isPickupManagerId', data?.findStaff?._id)

            window.localStorage.setItem('pickIds', data?.pickIds[0])
            window.localStorage.setItem('isPickupManagerName', data?.findStaff?.firstname + " " + data?.findStaff?.lastname)

        }
        else if (data?.findStaff?.role_id.name === 'Super Admin') {
            window.localStorage.setItem('showMainadmin', true)
            window.localStorage.setItem('adminToken', data?.token)
            window.localStorage.setItem('token', data?.token)
            window.localStorage.setItem('adminId', data?.findStaff?._id)
            window.localStorage.setItem('superAdminName', data?.findStaff?.firstname + " " + data?.findStaff?.lastname)
        }
        else if (data?.findStaff?.role_id.role_name === 'Super Admin') {
            window.localStorage.setItem('showMainadmin', true)
            window.localStorage.setItem('adminToken', data?.token)
            window.localStorage.setItem('token', data?.token)
            window.localStorage.setItem('adminId', data?.findStaff?._id)
            window.localStorage.setItem('superAdminName', data?.findStaff?.firstname + " " + data?.findStaff?.lastname)
        }

        else {
            window.localStorage.setItem('isSellerLogin', true)
            window.localStorage.setItem('isSellerId', data?.findSeller?._id)
            window.localStorage.setItem('isSellerName', data?.findSeller?.firstname + " " + data?.findSeller?.lastname)
        }
        setTimeout(() => {
            navigate('/admin')
        }, 1000);
    }

    useEffect(() => {
        if (data) {
            setAllData(data)
        }
    }, [isSuccess, data])

    useEffect(() => {
        if (sellerData) {
            setAllData(sellerData)
        }
    }, [sellerData, sellerLoading])

    const ShowSellerLogin = () => {
        setHowSeller(!showSeller)
    }



    const SendSellerInfo = () => {
        sellerLog(loginForm)
    }

    const [delevery, setDelevry] = useState(true)
    const showDelvery = () => {
        setDelevry(!delevery)
    }

    const sendDelevery = async () => {
        try {
            const res = await axios.post('https://onlineparttimejobs.in/api/deliveryBoy/login', loginForm)
            setAllData(res.data)
        } catch (error) {
            alert('Login Fail')
        }
    }


    return <div className="registrationDetail">
        <div className="container">
            <div className="registrationInfo">
                <div className="registerContent">
                    <div className="contentHeader">
                        <h3>Stay Updated on your professional world</h3>
                        <p>Sign in with your mobile number to get started</p>
                    </div>
                    <div className="contentFooter">
                        <img src={login} alt="Login" className="img-fluid" />
                    </div>
                </div>
                <div className="registerForm">
                    <h4 className="mb-4">Login to your account.</h4>
                    <form className="registerFormField">
                        <div className="mb-3">
                            <input
                                type="email"
                                placeholder="email"
                                className="form-control"
                                autoComplete="off"
                                name="email"
                                onChange={handleChangeLogin}
                            />
                        </div>
                        <div className="mb-3">
                            <input
                                type="password"
                                placeholder="Password"
                                className="form-control"
                                autoComplete="off"
                                name="password"
                                onChange={handleChangeLogin}
                            />
                        </div>
                        <div className="form-check mb-3 forgotInfo">
                            <div className="rememberText">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    defaultValue
                                    id="flexCheckDefault"
                                />
                                <label
                                    className="form-check-label agreeCheck"
                                    htmlFor="flexCheckDefault"
                                >
                                    Remember Me
                                </label>
                            </div>
                            <div className="forgotText">
                                <Link to="#">Forgot password?</Link>
                            </div>
                        </div>
                        {isError && <h4 style={{ color: "red" }}>login Fail ! </h4>}
                        {isSuccess && <h4>login Successfully !</h4>}
                        {isSellerErr && <h4 style={{ color: "red" }}>login Fail ! </h4>}
                        {isSellerSucc && <h4>login Successfully !</h4>}
                        {!delevery ? <button className="btn btn-primary createAccount" type="button" onClick={sendDelevery} style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                            login Delivery Boy
                        </button> : showSeller ? <button className="btn btn-primary createAccount" type="button" onClick={SendSellerInfo} style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                            login Seller
                            {sellerLoading && <Spinner style={{ marginLeft: "7px" }} animation="border" />}
                        </button> : <button className="btn btn-primary createAccount" type="button" onClick={handleLoginSubmit} style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                            login
                            {isLoading && <Spinner style={{ marginLeft: "7px" }} animation="border" />}
                        </button>}

                    </form>
                    {!showSeller ? <div className="forgotText" style={{ marginTop: "10px", display: "flex", justifyContent: "center" }}>
                        <Link to="#" onClick={ShowSellerLogin}>Login Seller</Link>

                    </div> : <div className="forgotText" style={{ marginTop: "10px", display: "flex", justifyContent: "center" }}>
                        <Link to="#" onClick={ShowSellerLogin}>Login Admin</Link>
                    </div>}

                    {!delevery ? <Link to="#" onClick={showDelvery}>Login Admin</Link> : <Link to="#" onClick={showDelvery}>Login As Delevery Boy</Link>}
                    <div className="joinWith">
                        <span>or login with</span>
                    </div>
                    <div className="connectWith">
                        <ul>
                            <li>
                                <a href="https://mmslfashions.in/" className="facebook">
                                    <FaFacebookF />
                                </a>
                            </li>

                            <li>
                                <a href="https://mmslfashions.in/" className="twitter">
                                    <BsTwitter />
                                </a>
                            </li>

                            <li>
                                <a href="https://mmslfashions.in/" className="google">
                                    <AiOutlineGoogle />
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    </div >

    // return <div className="aiz-main-wrapper d-flex">
    //     <div className="flex-grow-1">
    //         <div className="h-100 bg-cover bg-center py-5 d-flex align-items-center" style={{background:}}>

    //         </div>
    //     </div>
    // </div>
}
export default LoginSection