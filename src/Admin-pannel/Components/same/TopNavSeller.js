import { useRef, useState } from "react"
import { useGetstaffDetailQuery } from "../all-products/allproductsApi/allProductsApi"
import { Link, useNavigate } from "react-router-dom"

function TopNavSeller({ showSidebar }) {
    const stafId = window.localStorage.getItem('adminId')
    const DeleveryBoyName = window.localStorage.getItem('DeleveryBoyName')
    const sellerName = window.localStorage.getItem('isSellerName')
    const showMainadmin = window.localStorage.getItem('showMainadmin')
    const superAdminName = window.localStorage.getItem('superAdminName')

    const [show, setShow] = useState(false)
    const navigate = useNavigate()
    const [showToster, setShowToster] = useState(false)
    const isLoginPickup = window.localStorage.getItem('isPickupManagerLogin')
    const isPickupManagerName = window.localStorage.getItem('isPickupManagerName')
    const isDelevery = window.localStorage.getItem('isDeleveryBoy')

    const logOutAdmin = () => {
        setShow(false)
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
        setShowToster(true)
        setTimeout(() => {
            setShowToster(false)
            navigate('/loginPage')
        }, 1000);
    }

    // const { data } = useGetstaffDetailQuery(stafId)

    const refVal = useRef()
    const getData = () => {
        navigate(`tracking-order/${refVal.current.value}`)
    }

    const setValues = () => {
        const setWindoOPCl = window.localStorage.getItem('setWindoOPCl')
        if (setWindoOPCl === 'true') {
            window.localStorage.setItem('setWindoOPCl', false)
        }else{
            window.localStorage.setItem('setWindoOPCl', true)
        }

    }

    return <div className="aiz-topbar px-15px px-lg-25px d-flex align-items-stretch justify-content-between">
        <div className="d-flex">
            <div className="aiz-topbar-nav-toggler d-flex align-items-center justify-content-start mr-2 mr-md-3 ml-0"
                data-toggle="aiz-mobile-nav">
                <button className="aiz-mobile-toggler" onClick={setValues}>
                    <span></span>
                </button>
            </div>
        </div>
        {showToster && <div className="preloaderCount">
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>}
        <div className="d-flex justify-content-between align-items-stretch flex-grow-xl-1">
            <div className="d-flex justify-content-around align-items-center align-items-stretch">
                <div className="d-flex justify-content-around align-items-center align-items-stretch">
                    <div className="aiz-topbar-item">
                        <div className="d-flex align-items-center">
                            <a className="btn btn-icon btn-circle btn-light" href="#"
                                target="_blank" title="Browse Website">
                                <i className="las la-globe"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-around align-items-center align-items-stretch ml-3">
                    <div className="aiz-topbar-item">
                        <div className="d-flex align-items-center">
                            <a className="btn btn-icon btn-circle btn-light"
                                href="#" target="_blank" title="POS">
                                <i className="las la-print"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div style={{ margin: "10px 0" }} className="mb-3 col-lg-6 d-flex align-center">
                <label htmlFor="number" className="form-label">Track Order</label>
                <input type="text" name="courier_reference_no" aria-describedby="number" ref={refVal} placeholder="Courie Reference No / Order Id / Awb Number" className="form-control" id="number1" />
                <button type="button" style={{ margin: "0 6px" }} class="btn btn-info" onClick={getData}>Search</button>
            </div>

            <div className="d-flex justify-content-around align-items-center align-items-stretch">

                <div className="aiz-topbar-item ml-2">
                    <div className="align-items-stretch d-flex dropdown">
                        <a className="dropdown-toggle no-arrow" data-toggle="dropdown" href="#"
                            role="button" aria-haspopup="false" aria-expanded="false">
                            <span className="btn btn-icon p-0 d-flex justify-content-center align-items-center">
                                <span className="d-flex align-items-center position-relative">
                                    <i className="las la-bell fs-24"></i>
                                    <span
                                        className="badge badge-sm badge-dot badge-circle badge-primary position-absolute absolute-top-right"></span>
                                </span>
                            </span>
                        </a>
                        <div
                            className="dropdown-menu dropdown-menu-right dropdown-menu-animated dropdown-menu-lg py-0">
                            <div className="p-3 bg-light border-bottom">
                                <h6 className="mb-0">Notifications</h6>
                            </div>
                            <div className="px-3 c-scrollbar-light overflow-auto " >
                                <ul className="list-group list-group-flush">
                                    <li
                                        className="list-group-item d-flex justify-content-between align-items- py-3">
                                        <div className="media text-inherit">
                                            <div className="media-body">
                                                <p className="mb-1 text-truncate-2">
                                                    <a
                                                        href="#">
                                                        Order code: 20221103-09563323 has been Placed
                                                    </a>
                                                </p>
                                                <small className="text-muted">
                                                    November 3 2022, 9:56 am
                                                </small>
                                            </div>
                                        </div>
                                    </li>
                                    <li
                                        className="list-group-item d-flex justify-content-between align-items- py-3">
                                        <div className="media text-inherit">
                                            <div className="media-body">
                                                <p className="mb-1 text-truncate-2">
                                                    <a
                                                        href="#">
                                                        Order code: 20221006-19574683 has been Placed
                                                    </a>
                                                </p>
                                                <small className="text-muted">
                                                    October 6 2022, 7:57 pm
                                                </small>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="text-center border-top">
                                <a href="#"
                                    className="text-reset d-block py-2">
                                    View All Notifications
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="aiz-topbar-item ml-2">



                    <div className="align-items-stretch d-flex dropdown " id="lang-change">
                        <a className="dropdown-toggle no-arrow" data-toggle="dropdown" href="#"
                            role="button" aria-haspopup="false" aria-expanded="false">
                            <span className="btn btn-icon">
                                <img src="https://mmslfashions.in/public/assets/img/flags/en.png" height="11" />
                            </span>
                        </a>
                        <ul className="dropdown-menu dropdown-menu-right dropdown-menu-animated dropdown-menu-xs">
                            <li>
                                <a href="#" data-flag="en" className="dropdown-item  active ">
                                    <img src="https://mmslfashions.in/public/assets/img/flags/en.png"
                                        className="mr-2" />
                                    <span className="language">English</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" data-flag="bd" className="dropdown-item ">
                                    <img src="https://mmslfashions.in/public/assets/img/flags/bd.png"
                                        className="mr-2" />
                                    <span className="language">Bangla</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" data-flag="sa" className="dropdown-item ">
                                    <img src="https://mmslfashions.in/public/assets/img/flags/sa.png"
                                        className="mr-2" />
                                    <span className="language">Arabic</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="aiz-topbar-item ml-2">

                    <div className="align-items-stretch d-flex dropdown">
                        <a className="dropdown-toggle no-arrow text-dark" data-toggle="dropdown" onClick={() => { setShow(!show) }}
                            href="#" role="button" aria-haspopup="false"
                            aria-expanded="false">
                            <span className="d-flex align-items-center">
                                <span className="avatar avatar-sm mr-md-2">
                                    <img src="https://mmslfashions.in/public/uploads/all/J3IHQMPrIal220S890WP4kxP1shTCJytvopboZrL.png"
                                    />
                                </span>
                                <span className="d-none d-md-block">

                                    {isLoginPickup === 'true' && <>
                                        <span className="d-block fw-500">{isPickupManagerName}</span>
                                        <span className="d-block small opacity-60">Pickup Point Manage</span>
                                    </>}
                                    {showMainadmin === 'true' && <>
                                        <span className="d-block fw-500">{superAdminName}</span>
                                        <span className="d-block small opacity-60">Super Admin</span>
                                    </>}
                                    {isDelevery === 'true' && <>
                                        <span className="d-block fw-500">{DeleveryBoyName}</span>
                                        <span className="d-block small opacity-60">Delevery Boy</span>
                                    </>}


                                    {/* {stafId ? <>
                                        <span className="d-block fw-500">{sellerName}</span>
                                        <span className="d-block small opacity-60">Seller</span>
                                    </> : <>
                                        <span className="d-block fw-500">{data?.firstname} {data?.lastname}</span>
                                        <span className="d-block small opacity-60">{data?.role_id?.role_name}</span>
                                    </>} */}

                                </span>
                            </span>
                        </a>
                        <div className={`dropdown-menu dropdown-menu-right dropdown-menu-animated dropdown-menu-md ${show && 'show'}`}>
                            {isLoginPickup ? <Link to="profile" className="dropdown-item" onClick={() => setShow(!show)}>
                                <i className="las la-user-circle"></i>
                                <span>Profile</span>
                            </Link> : <Link to="profile" className="dropdown-item">
                                <i className="las la-user-circle"></i>
                                <span>Profile</span>
                            </Link>}
                            <button onClick={logOutAdmin} className="dropdown-item">
                                <i className="las la-sign-out-alt"></i>
                                <span>Logout</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}
export default TopNavSeller