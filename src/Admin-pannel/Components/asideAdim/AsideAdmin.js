import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useGetAllStatusOrdersQuery, useGetPickupPointQuery } from "../all-products/allproductsApi/allProductsApi";
import './AsideAdmin.css';
import { AiOutlineBarChart } from "react-icons/ai";

function AsideAdmin() {
  const [Sales2, setSales2] = useState(false)
  const [state, setState] = useState(false)
  const [agreement, setAgreement] = useState(false)
  const [billingBook, setBillingBook] = useState(false);
  const [products, setProducts] = useState(false)
  const [wholeSale, setWholsale] = useState(false)
  const [rentVtech, setrentVtech] = useState(false)
  // const [sales, setSales] = useState(false)
  const [website2, setWebsite2] = useState(false)
  const [refunds, setRefunds] = useState(false)
  const [customers, setCustomers] = useState(false)
  const [sellers, setSellers] = useState(false)
  // const [customers, setCustomers] = useState(false)
  const [blogSystem, setBlogSystem] = useState(false)
  const [rewardPoints, setRewardPoints] = useState(false)
  const [support, setSupport] = useState(false)
  const [marketing, setMarketing] = useState(false)
  const [report, setReport] = useState(false)
  const [affliated, setAffliated] = useState(false)
  const [offlineWalletRecharge, setOfflineWalletRecharge] = useState(false)
  const [otpSystem, setOtpSystem] = useState(false)
  const [clubPointsystem, setClubPointsystem] = useState(false);
  const [africanPayment, setAfricanPayment] = useState(false);
  const [website, setWebsite] = useState(false);
  const [setupConfiguration, setSetupConfiguration] = useState(false)
  const [allStaffs, setAllStaffs] = useState(false);
  const [allStaff, setAllStaff] = useState(false);
  const [vstock, setvstock] = useState(false);
  const [update, setUpdate] = useState(false);
  const [facebook, setFacebook] = useState(false);
  const [google, setGoogle] = useState(false);
  const [shipping, setShipping] = useState(false);
  const [purchase, setPurchase] = useState(false);
  const [reports, setReports] = useState(false);
  const [saleMod, setSaleMod] = useState(false);
  const [productsManagement, setProductsManagement] = useState(false);
  const [front, setFront] = useState(false);
  const [quotations, setQuotations] = useState(false);
  const [booking, setBooking] = useState(false);
  const [affiliate, setAffiliate] = useState(false);
  const [member, setMember] = useState(false);
  const [deliveryBoy, setDeliveryBoy] = useState(false);
  const [socialMediaSystem, setSocialMediaSystem] = useState(false);
  const [posSystem, setPosSystem] = useState(false);
  const [challan, setChallan] = useState(false);
  const [assetModule, setAssetModule] = useState(false);
  const [reportMaster, setReportMaster] = useState(false);
  const [assetDashboard, setAssetDashboard] = useState(false);
  const [complaint, setComplaint] = useState(false);
  const [etsySettings, setEtsySettings] = useState(false)
  const [etsyAccountList, setEtsyAccountList] = useState(false)
  const [amazon, setAmazon] = useState(false);
  const [supports, setSupports] = useState(false);
  const [deliveryTimeSettings, setDeliveryTimeSetting] = useState(false)
  const [dropship, setDropship] = useState(false)
  const [quotation, setQuotation] = useState(false);
  const [vpurchase, setvpurchase] = useState(false);
  const [calls, setCalls] = useState(false)
  // shoaib code 
  const [assetMaster, setAssetMaster] = useState(false);
  const [departmentMaster, setdepartmentMaster] = useState(false)

  const { data, isLoading } = useGetAllStatusOrdersQuery()
  const { data: pickup, isLoading: isLoadingPick } = useGetPickupPointQuery()

  const isSuperAdminLogin = window.localStorage.getItem('showMainadmin')
  const isSellerLogin = window.localStorage.getItem('isSellerLogin')
  const isDelevery = window.localStorage.getItem('isDeleveryBoy');
  const [leadFilters, setLeadFiters] = useState(false)
  const [recruter, setRecruter] = useState(false)
  const [Accounts, setAccounts] = useState(false)
  const [manufacturing, setManufacturing] = useState(false)
  const [salesgstreport, setSalesgstreport] = useState(false)
  const [myToDo, setMyToDo] = useState(false)
  const [hrRecords, setHrRecord] = useState(false)
  const [training, setTraining] = useState(false);
  const [timeslote, settimeslote] = useState(false);
  const [Sales, setSales] = useState(false)
  const [leads, setLeads] = useState(false)
  const [finanace, setFinanace] = useState(false)
  const [logistic, setLogistic] = useState(false)
  const [projectDash, setProjectDash] = useState(false);
  const [dashbord, setDashbord] = useState(false);
  const [crm, setCrm] = useState(false);
  const [saless, setSaless] = useState(false);
  const [finince, setFinance] = useState(false);
  const [jwell, setJwell] = useState(false);
  const [genral, setgenral] = useState(false);
  const [dimand, setdimand] = useState(false);
  const [metal, setMetal] = useState(false);
  const [alltasks, setAllTasks] = useState(false)
  const idShow = window.localStorage.getItem('adminId')
  const adminIslogin = window.localStorage.getItem('adminIslogin')
  if (isDelevery === 'true') {
    return <div className="aiz-sidebar left c-scrollbar c-scrollbar-2" style={{ backgroundColor: "#e1e1db" }}>
      <div className="aiz-side-nav-logo-wrap">
        <a href="https://mmslfashions.in/admin" className="d-block text-left">
          {/* <img className="mw-100" src={"https://mmslfashions.in/public/assets/img/logo.png"} alt /> */}
        </a>
      </div>
      <div className="aiz-side-nav-wrap">
        <div className="px-20px mb-3">
          <input className="form-control bg-soft-secondary border-0 form-control-sm text-white" type="text" placeholder="Search in menu" id="menu-search" fdprocessedid="axe2ae" />
        </div>
        <ul className="aiz-side-nav-list" id="search-menu">
        </ul>
        <ul className="aiz-side-nav-list metismenu" id="main-menu" data-toggle="aiz-side-menu">



          <li className="aiz-side-nav-item">
            <Link to="" className="aiz-side-nav-link ">
              <span className="aiz-side-nav-text">Dashboard</span>
            </Link>
          </li>

          <li className="aiz-side-nav-item">
            <Link to="assign_order" className="aiz-side-nav-link ">
              <span className="aiz-side-nav-text">Assign Orders List</span>
            </Link>
          </li>


          {data && data.map((item) => {
            if (item.orderStatusName === 'Pending' || item.orderStatusName === 'Delivered' || item.orderStatusName === 'Cancelled' || item.orderStatusName === 'Rejected') {
              return <li key={item._id} className="aiz-side-nav-item" onClick={() => window.localStorage.setItem('orderName', item.orderStatusName)}>
                <Link to={`assign_orders/status/${item._id}`} className="aiz-side-nav-link">
                  <span className="aiz-side-nav-text">Assign {item.orderStatusName}</span>
                </Link>
              </li>
            }
          })}




          {isLoading && <div className="preloaderCount">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>}



          {/* <li className="aiz-side-nav-item">
                <Link to="inhouse-orders" className="aiz-side-nav-link ">
                  <span className="aiz-side-nav-text">Inhouse orders</span>
                </Link>
              </li> */}

          {/* <li className="aiz-side-nav-item">
                <Link to="seller-orders" className="aiz-side-nav-link ">
                  <span className="aiz-side-nav-text">Seller Orders</span>
                </Link>
              </li> */}


          {/* <li className="aiz-side-nav-item" onClick={() => window.localStorage.setItem('orderName', 'All Pick-up Point Order')}>
            <Link to="orders_by_pickup_point" className="aiz-side-nav-link ">
              <span className="aiz-side-nav-text" style={{ fontSize: "15px", color: "indigo" }}>All Pick-up Point Order</span>
            </Link>
          </li>


          {data && data.map((item) => {
            if (item.orderStatusName === 'Pending' || item.orderStatusName === 'Delivered' || item.orderStatusName === 'Cancelled' || item.orderStatusName === 'Rejected') {
              return <li key={item._id} className="aiz-side-nav-item" onClick={() => window.localStorage.setItem('orderName', item.orderStatusName)}>
                <Link to={`orders/status/${item._id}`} className="aiz-side-nav-link">
                  <span className="aiz-side-nav-text">{item.orderStatusName}</span>
                </Link>
              </li>
            }
          })} */}


          {/* 
              {data && data.map((item) => {
                if (item.orderStatusName === 'Pending' || item.orderStatusName === 'Delivered' || item.orderStatusName === 'Canceled' || item.orderStatusName === 'Rejected') {
                  return <li key={item._id} className="aiz-side-nav-item" onClick={() => window.localStorage.setItem('orderName', item.orderStatusName)}>
                    <Link to={`orders/PickupPints/${item._id}`} className="aiz-side-nav-link">
                      <span className="aiz-side-nav-text">{item.orderStatusName}</span>
                    </Link>
                  </li>
                }

              })} */}

          {/* {isLoadingPick && <div className="preloaderCount">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>} */}

          {/* Staffs */}

          {/* <li className="aiz-side-nav-item">
                <Link to="#" className="aiz-side-nav-link" onClick={() => { setAllStaffs(!allStaffs) }}>
                  <i className="las la-user-tie aiz-side-nav-icon" />
                  <span className="aiz-side-nav-text">Staffs</span>
                  <span className="aiz-side-nav-arrow" />
                </Link>
                <ul className={`aiz-side-nav-list level-2 mm-collapse ${allStaffs ? "mm-show" : "extra"}`}>
                  <li className="aiz-side-nav-item">
                    <Link to="staffs" className="aiz-side-nav-link ">
                      <span className="aiz-side-nav-text">All staffs</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link to="roles" className="aiz-side-nav-link ">
                      <span className="aiz-side-nav-text">Staff permissions</span>
                    </Link>
                  </li>
                </ul>
              </li> */}


        </ul>{/* .aiz-side-nav */}
      </div>{/* .aiz-side-nav-wrap */}
    </div>
  }

  if (isSellerLogin === 'true') {
    return (
      <>
        <div className="aiz-sidebar left c-scrollbar c-scrollbar-2" style={{ backgroundColor: "#e1e1db" }}>
          <div className="aiz-side-nav-logo-wrap">
            <a href="https://mmslfashions.in/admin" className="d-block text-left">
              {/* <img className="mw-100" src={"https://mmslfashions.in/public/assets/img/logo.png"} alt /> */}
            </a>
          </div>
          <div className="aiz-side-nav-wrap">
            <div className="px-20px mb-3">
              <input className="form-control bg-soft-secondary border-0 form-control-sm text-white" type="text" placeholder="Search in menu" id="menu-search" fdprocessedid="axe2ae" />
            </div>
            <ul className="aiz-side-nav-list" id="search-menu">
            </ul>
            <ul className="aiz-side-nav-list metismenu" id="main-menu" data-toggle="aiz-side-menu">
              <li className="aiz-side-nav-item">
                <Link to="products/seller" className="aiz-side-nav-link ">
                  <span className="aiz-side-nav-text">Seller Products</span>
                </Link>
              </li>

              <li className="aiz-side-nav-item">
                <Link to="add-seller-product" className="aiz-side-nav-link ">
                  <span className="aiz-side-nav-text">Add Seller Product</span>
                </Link>
              </li>

              <li className="aiz-side-nav-item">
                <Link to="seller/all_orders" className="aiz-side-nav-link ">
                  <span className="aiz-side-nav-text">Seller Orders</span>
                </Link>
              </li>
              <li className="aiz-side-nav-item">
                <Link
                  className="aiz-side-nav-link"
                  to="#"
                  onClick={() => {
                    setAccounts(!Accounts);
                  }}
                >
                  {/* <i className="las la-user-tie aiz-side-nav-icon" /> */}
                  <span className="aiz-side-nav-text">Accounts</span>
                  <span className="aiz-side-nav-arrow" />
                </Link>
                <ul
                  className={`aiz-side-nav-list level-2 mm-collapse ${Accounts ? "mm-show" : "extra"
                    }`}
                >
                  <li className="aiz-side-nav-item">
                    <Link className="aiz-side-nav-link " to="account-dashbord">
                      <span className="aiz-side-nav-text">
                        Accounts Dashboard
                      </span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link className="aiz-side-nav-link " to="accounts">
                      <span className="aiz-side-nav-text">
                        Chart Of Accounts
                      </span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link className="aiz-side-nav-link " to="accounts-group">
                      <span className="aiz-side-nav-text">
                        Chart Of Accounts group
                      </span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link className="aiz-side-nav-link " to="groups">
                      <span className="aiz-side-nav-text">
                        Accounts groups
                      </span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link className="aiz-side-nav-link " to="add-ledgers">
                      <span className="aiz-side-nav-text">
                        Add Ledgers
                      </span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link className="aiz-side-nav-link " to="list-ledgers">
                      <span className="aiz-side-nav-text">
                        List Ledgers
                      </span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link className="aiz-side-nav-link " to="reports-ledgers">
                      <span className="aiz-side-nav-text">
                        Ledgers Reports
                      </span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link className="aiz-side-nav-link " to="add-group">
                      <span className="aiz-side-nav-text">
                        Add Group
                      </span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link className="aiz-side-nav-link " to="list-group">
                      <span className="aiz-side-nav-text list-voucher">
                        List Group
                      </span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link className="aiz-side-nav-link " to="reports-group">
                      <span className="aiz-side-nav-text list-voucher">
                        Group Reports
                      </span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link className="aiz-side-nav-link " to="add-voucher">
                      <span className="aiz-side-nav-text">
                        Add Voucher
                      </span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link className="aiz-side-nav-link " to="list-voucher">
                      <span className="aiz-side-nav-text">
                        List Voucher
                      </span>
                    </Link>
                  </li>


                  <li className="aiz-side-nav-item">
                    <Link className="aiz-side-nav-link " to="day_book">
                      <span className="aiz-side-nav-text">
                        Day Book
                      </span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link className="aiz-side-nav-link " to="cash_book">
                      <span className="aiz-side-nav-text">
                        Cash Book

                      </span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link className="aiz-side-nav-link " to="bank_book">
                      <span className="aiz-side-nav-text">
                        Bank Book

                      </span>
                    </Link>
                  </li>







                  {idShow == '642177b99fd9c29aab59d245' && <>
                    <li className="aiz-side-nav-item">
                      <Link className="aiz-side-nav-link " to="add-company">
                        <span className="aiz-side-nav-text list-voucher">
                          Add Company
                        </span>
                      </Link>
                    </li>
                    <li className="aiz-side-nav-item">
                      <Link className="aiz-side-nav-link " to="list-company">
                        <span className="aiz-side-nav-text list-voucher">
                          List Company
                        </span>
                      </Link>
                    </li>
                  </>}


                  <li className="aiz-side-nav-item">
                    <Link className="aiz-side-nav-link " to="coast-centre-create">
                      <span className="aiz-side-nav-text">Create Cost Centre</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link className="aiz-side-nav-link " to="cost-centre">
                      <span className="aiz-side-nav-text">List Cost Centre</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link className="aiz-side-nav-link " to="coast-centre-category-create">
                      <span className="aiz-side-nav-text">Create Cost Centre category</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link className="aiz-side-nav-link " to="coast-centre-category">
                      <span className="aiz-side-nav-text">List Cost Centre category</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link className="aiz-side-nav-link " to="budget-create">
                      <span className="aiz-side-nav-text">Create Budget</span>
                    </Link>
                  </li>
                  {/* <li className="aiz-side-nav-item">
                    <Link className="aiz-side-nav-link " to="budgets">
                      <span className="aiz-side-nav-text">Budgets List</span>
                    </Link>
                  </li> */}
                  <li className="aiz-side-nav-item">
                    <Link className="aiz-side-nav-link " to="vouchertype/create">
                      <span className="aiz-side-nav-text">create Voucher Type</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link className="aiz-side-nav-link " to="vouchertypes">
                      <span className="aiz-side-nav-text">Voucher Type List</span>
                    </Link>
                  </li>
                  {/* <li className="aiz-side-nav-item">
                    <Link className="aiz-side-nav-link " to="#">
                      <span className="aiz-side-nav-text list-voucher">
                       List Voucher 
                      </span>
                    </Link>
                  </li> */}
                  <li className="aiz-side-nav-item">
                    <Link className="aiz-side-nav-link " to="report">
                      <span className="aiz-side-nav-text list-voucher">
                        Report
                      </span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link className="aiz-side-nav-link " to="setting">
                      <span className="aiz-side-nav-text list-voucher">
                        Setting
                      </span>
                    </Link>
                  </li>
                </ul>
              </li>


              <li className="aiz-side-nav-item">
                <Link to="sellerBrand_List" className="aiz-side-nav-link">
                  <span className="aiz-side-nav-text">Seller Brand List</span>
                </Link>
              </li>

              <li className="aiz-side-nav-item">
                <Link to="add_Seller_brand" className="aiz-side-nav-link">
                  <span className="aiz-side-nav-text">Add Seller Brnads</span>
                </Link>
              </li>




              {/* {data && data.map((item) => {
                if (item.orderStatusName === 'Pending' || item.orderStatusName === 'Delivered' || item.orderStatusName === 'Canceled' || item.orderStatusName === 'Rejected') {
                  return <li key={item._id} className="aiz-side-nav-item" onClick={() => window.localStorage.setItem('orderName', item.orderStatusName)}>
                    <Link to={`orders/status/${item._id}`} className="aiz-side-nav-link">
                      <span className="aiz-side-nav-text">{item.orderStatusName}</span>
                    </Link>
                  </li>
                }
              })} */}

              <li className="aiz-side-nav-item">
                <Link to="inhouse-orders" className="aiz-side-nav-link ">
                  <span className="aiz-side-nav-text">Inhouse orders</span>
                </Link>
              </li>



              <li className="aiz-side-nav-item" onClick={() => window.localStorage.setItem('orderName', 'All Pick-up Point Order')}>
                <Link to="orders_by_pickup_point" className="aiz-side-nav-link ">
                  <span className="aiz-side-nav-text" style={{ fontSize: "15px", color: "indigo" }}>All Pick-up Point Order</span>
                </Link>
              </li>



              {/* {data && data.map((item) => {
                if (item.orderStatusName === 'Pending' || item.orderStatusName === 'Delivered' || item.orderStatusName === 'Canceled' || item.orderStatusName === 'Rejected') {
                  return <li key={item._id} className="aiz-side-nav-item" onClick={() => window.localStorage.setItem('orderName', item.orderStatusName)}>
                    <Link to={`orders/PickupPints/${item._id}`} className="aiz-side-nav-link">
                      <span className="aiz-side-nav-text">{item.orderStatusName}</span>
                    </Link>
                  </li>
                }

              })} */}










              <li className="aiz-side-nav-item">
                <Link to="withdraw_requests_all" className="aiz-side-nav-link">
                  <span className="aiz-side-nav-text">Payout Requests</span>
                </Link>
              </li>

              <li className="aiz-side-nav-item">
                <Link to="seller_packages" className="aiz-side-nav-link ">
                  <span className="aiz-side-nav-text">Seller Packages</span>
                </Link>
              </li>
              <li className="aiz-side-nav-item">
                <Link to="seller_packages_list" className="aiz-side-nav-link ">
                  <span className="aiz-side-nav-text">Seller Packages List</span>
                </Link>
              </li>

              <li className="aiz-side-nav-item">
                <Link to="seller-banners" className="aiz-side-nav-link">
                  <span className="aiz-side-nav-text">Add Seller Banners</span>
                </Link>
              </li>
              <li className="aiz-side-nav-item">
                <Link to="seller-banners" className="aiz-side-nav-link">
                  <span className="aiz-side-nav-text">Seller Banners</span>
                </Link>
              </li>
              <li className="aiz-side-nav-item">
                <Link to="profile" className="aiz-side-nav-link">
                  <span className="aiz-side-nav-text">Profile Setting</span>
                </Link>
              </li>

              <li className="aiz-side-nav-item">
                <Link to="#" className="aiz-side-nav-link" onClick={() => { setSupport(!support) }}>
                  <i className="las la-link aiz-side-nav-icon" />
                  <span className="aiz-side-nav-text">Support</span>
                  <span className="aiz-side-nav-arrow" />
                </Link>
                <ul className={`aiz-side-nav-list level-2 mm-collapse ${support ? "mm-show" : "extra"}`}>
                  <li className="aiz-side-nav-item">
                    <Link to="support_ticket" className="aiz-side-nav-link ">
                      <span className="aiz-side-nav-text">Ticket</span>
                      <span className="badge badge-info">2</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link to="add-ticket" className="aiz-side-nav-link ">
                      <span className="aiz-side-nav-text">Add Ticket</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link to="staff-ticket-list" className="aiz-side-nav-link ">
                      <span className="aiz-side-nav-text">Staff Ticket List</span>
                    </Link>
                  </li>

                </ul>
              </li>

              <li className="aiz-side-nav-item">
                <Link to="#" className="aiz-side-nav-link" onClick={() => { setAssetMaster(!assetMaster) }}>
                  <i className="las la-user-tie aiz-side-nav-icon" />
                  <span className="aiz-side-nav-text">Assets Management</span>
                  <span className="aiz-side-nav-arrow" />
                </Link>
                <ul className={`aiz-side-nav-list level-2 mm-collapse ${assetMaster ? "mm-show" : "extra"}`}>
                  <li className="aiz-side-nav-item">
                    <Link to="my-assets" className="aiz-side-nav-link ">
                      <span className="labour-charge-type">My Assets </span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link to="add-assets-request" className="aiz-side-nav-link ">
                      <span className="labour-charge-type">Add Assets Request</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link to="my-assets-request-list" className="aiz-side-nav-link ">
                      <span className="labour-charge-type">My Assets Request List</span>
                    </Link>
                  </li>
                  {/* <li className="aiz-side-nav-item">
                    <Link to="/admin/assets-dashboard/newasset-category" className="aiz-side-nav-link ">
                      <span className="labour-charge-type">Add New Asset </span>
                    </Link>
                  </li> */}

                  {/* <li className="aiz-side-nav-item">
                    <Link to="asset-category" className="aiz-side-nav-link ">
                      <span className="aiz-side-nav-text"> Asset Categories List </span>
                    </Link>
                  </li> */}
                  {/* <li className="aiz-side-nav-item">
                    <Link to="asset-sub-category" className="aiz-side-nav-link ">
                      <span className="aiz-side-nav-text"> Asset Sub Categories  </span>
                    </Link>
                  </li> */}
                  {/* <li className="aiz-side-nav-item">
                    <Link to="asset-comments" className="aiz-side-nav-link ">
                      <span className="aiz-side-nav-text">Asset Comments  </span>
                    </Link>
                  </li> */}
                  {/* <li className="aiz-side-nav-item">
                    <Link to="asset-status" className="aiz-side-nav-link ">
                      <span className="aiz-side-nav-text">Asset Status  </span>
                    </Link>
                  </li> */}
                  {/* <li className="aiz-side-nav-item">
                    <Link to="#" className="aiz-side-nav-link ">
                      <span className="aiz-side-nav-text">Store Bin</span>
                    </Link>
                  </li> */}
                </ul>
              </li>









            </ul>{/* .aiz-side-nav */}
          </div>{/* .aiz-side-nav-wrap */}
        </div>

      </>
    )
  }

  if (isSuperAdminLogin === 'true') {
    return (
      <>
        <div className="aiz-sidebar left c-scrollbar c-scrollbar-2" style={{ backgroundColor: "#e1e1db" }}>
          <div className="aiz-side-nav-logo-wrap">
            <a href="https://mmslfashions.in/admin" className="d-block text-left">
              {/* <img className="mw-100" src={"https://mmslfashions.in/public/assets/img/logo.png"} alt /> */}
            </a>
          </div>

          <div className="aiz-side-nav-wrap list">
            <div className="px-20px mb-3">
              <input className="form-control bg-soft-secondary border-0 form-control-sm text-white" type="text" placeholder="Search in menu" id="menu-search" fdprocessedid="axe2ae" />
            </div>

            <ul className="aiz-side-nav-list" id="search-menu">
            </ul>

            <ul className="aiz-side-nav-list metismenu" id="main-menu" data-toggle="aiz-side-menu">

              <li className="aiz-side-nav-item" >
                <Link to="#" className="aiz-side-nav-link" onClick={() => { setDashbord(!dashbord) }}>
                  <i className="las la-shopping-cart aiz-side-nav-icon" />
                  <span className="aiz-side-nav-text">Dashboard's</span>
                  <span className="aiz-side-nav-arrow" />
                </Link>

                {/*Submenu*/}
                <ul className={`aiz-side-nav-list level-2 mm-collapse ${dashbord ? "mm-show" : "extra"}`} id="product">
                  <li className="aiz-side-nav-item">
                    <Link to="" className="aiz-side-nav-link ">
                      <span className="labour-charge-type">Main Dashboard</span>
                    </Link>
                  </li>

                  <li className="aiz-side-nav-item">
                    <Link className="aiz-side-nav-link" to="new-dashboard">
                      <i className="las la-user-tie aiz-side-nav-icon" />
                      <span className="aiz-side-nav-text">New Dashborad</span>
                      <span className="aiz-side-nav-arrow" />

                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link to="#" className="aiz-side-nav-link" onClick={() => { setCrm(!crm) }}>
                      <span className="aiz-side-nav-text">CRM</span>
                      <span className="aiz-side-nav-arrow" />
                    </Link>
                    <ul style={{ marginLeft: "15px" }} className={`aiz-side-nav-list level-2 mm-collapse ${crm ? "mm-show" : "extra"}`} id="product">
                      <li className="aiz-side-nav-item">
                        <Link to="dashboard-crm" className="aiz-side-nav-link ">
                          <span className="labour-charge-type">crm</span>
                        </Link>
                      </li>
                      <li className="aiz-side-nav-item">
                        <Link className="aiz-side-nav-link" to="pipeline">
                          <span className="aiz-side-nav-text"> Pipeline</span>
                        </Link>
                      </li>
                      <li className="aiz-side-nav-item">
                        <Link className="aiz-side-nav-link" to="leads">
                          <span className="aiz-side-nav-text">Leads</span>

                        </Link>
                      </li>
                    </ul>
                  </li>


                  <li className="aiz-side-nav-item">
                    <Link to="#" className="aiz-side-nav-link" onClick={() => { setSaless(!saless) }}>
                      <span className="aiz-side-nav-text">Sales</span>
                      <span className="aiz-side-nav-arrow" />
                    </Link>
                    <ul style={{ marginLeft: "15px" }} className={`aiz-side-nav-list level-2 mm-collapse ${saless ? "mm-show" : "extra"}`} id="product">
                      <li className="aiz-side-nav-item">
                        <Link className="aiz-side-nav-link" to="sales">
                          <span className="aiz-side-nav-text"> Sales</span>
                        </Link>
                      </li>
                      <li className="aiz-side-nav-item">
                        <Link className="aiz-side-nav-link" to="product">
                          <span className="aiz-side-nav-text"> Product</span>
                        </Link>
                      </li>
                      <li className="aiz-side-nav-item">
                        <Link className="aiz-side-nav-link" to="point-of-sale">
                          <span className="aiz-side-nav-text"> Point Of Sale</span>
                        </Link>
                      </li>
                      <li className="aiz-side-nav-item">
                        <Link className="aiz-side-nav-link" to="rental">
                          <span className="aiz-side-nav-text"> Rental</span>
                        </Link>
                      </li>
                      <li className="aiz-side-nav-item">
                        <Link className="aiz-side-nav-link" to="subscrip">
                          <span className="aiz-side-nav-text"> Subscriptons</span>
                        </Link>
                      </li>
                      <li className="aiz-side-nav-item">
                        <Link className="aiz-side-nav-link" to="salesperson">
                          <span className="aiz-side-nav-text"> Sales Person</span>
                        </Link>
                      </li>
                    </ul>
                  </li>



                  <li className="aiz-side-nav-item">
                    <Link to="#" className="aiz-side-nav-link" onClick={() => { setFinance(!finince) }}>
                      <span className="aiz-side-nav-text">FINANCE</span>
                      <span className="aiz-side-nav-arrow" />
                    </Link>
                    <ul style={{ marginLeft: "15px" }} className={`aiz-side-nav-list level-2 mm-collapse ${finince ? "mm-show" : "extra"}`} id="product">
                      <li className="aiz-side-nav-item">
                        <Link className="aiz-side-nav-link" to="accounting">
                          <span className="aiz-side-nav-text">Accounting</span>
                        </Link>
                      </li>
                      <li className="aiz-side-nav-item">
                        <Link className="aiz-side-nav-link" to="invoicing">
                          <span className="aiz-side-nav-text">Invoicing</span>
                        </Link>
                      </li>
                      <li className="aiz-side-nav-item">
                        <Link className="aiz-side-nav-link" to="benchmark">
                          <span className="aiz-side-nav-text">Benchmark</span>
                        </Link>
                      </li>
                      <li className="aiz-side-nav-item">
                        <Link className="aiz-side-nav-link" to="expenses">
                          <span className="aiz-side-nav-text">Expenses</span>
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="aiz-side-nav-item">
                    <Link className="aiz-side-nav-link" to='#' onClick={() => { setLogistic(!logistic) }}>

                      <span className="aiz-side-nav-text">Logistics</span>
                      <span className="aiz-side-nav-arrow" />
                    </Link>
                    <ul style={{ marginLeft: "15px" }} className={`aiz-side-nav-list level-2 mm-collapse ${logistic ? "mm-show" : "extra"}`}>
                      <li className="aiz-side-nav-item">
                        <Link className="aiz-side-nav-link" to="purchase ">
                          <span className="aiz-side-nav-text">Purchase</span>
                        </Link>
                      </li>
                      <li className="aiz-side-nav-item">
                        <Link className="aiz-side-nav-link" to="venders ">
                          <span className="aiz-side-nav-text">Vendors</span>
                        </Link>
                      </li>
                      <li className="aiz-side-nav-item">
                        <Link className="aiz-side-nav-link" to="inventory ">
                          <span className="aiz-side-nav-text">Inventory On Hand</span>
                        </Link>
                      </li>
                      <li className="aiz-side-nav-item">
                        <Link className="aiz-side-nav-link" to="inventory-flow ">
                          <span className="aiz-side-nav-text">Inventory Flow</span>
                        </Link>
                      </li>
                      <li className="aiz-side-nav-item">
                        <Link
                          className="aiz-side-nav-link "
                          to="event-marketing"
                        >
                          <span className="aiz-side-nav-text">Event (Marketing)</span>
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="aiz-side-nav-item">
                    <Link className="aiz-side-nav-link" to='#' onClick={() => { setWebsite2(!website2) }}>
                      <span className="aiz-side-nav-text">Website</span>
                      <span className="aiz-side-nav-arrow" />
                    </Link>
                    <ul style={{ marginLeft: "15px" }} className={`aiz-side-nav-list level-2 mm-collapse ${website2 ? "mm-show" : "extra"}`}>
                      <li className="aiz-side-nav-item">
                        <Link className="aiz-side-nav-link" to="ecommerse ">
                          <span className="aiz-side-nav-text">eCommerse</span>
                        </Link>
                      </li>

                    </ul>
                  </li>



                  <li className="aiz-side-nav-item">
                    <Link to="assets-dashboard" className="aiz-side-nav-link ">
                      <span className="labour-charge-type">Assets</span>
                    </Link>
                  </li>
                  {/* <li className="aiz-side-nav-item">
                    <Link to="dashboard-crm" className="aiz-side-nav-link">
                      <span className="aiz-side-nav-text">Crm</span>
                    </Link>
                  </li> */}
                  <li className="aiz-side-nav-item">
                    <Link to="employees-complaints-dashboard" className="aiz-side-nav-link ">
                      <span className="labour-charge-type">Employee's Complaints </span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link
                      className="aiz-side-nav-link "
                      to="task-project-dash"
                    >
                      <span className="aiz-side-nav-text">Task</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link
                      className="aiz-side-nav-link "
                      to="time-sheets"
                    >
                      <span className="aiz-side-nav-text">TimeSheets</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link
                      className="aiz-side-nav-link "
                      to="help-desk"
                    >
                      <span className="aiz-side-nav-text">Help Desk</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link
                      className="aiz-side-nav-link "
                      to="hr-resources"
                    >
                      <span className="aiz-side-nav-text">Employee (Human Resources)</span>
                    </Link>
                  </li>

                </ul>
              </li>

              {/* <li className="aiz-side-nav-item" id="dropdownList">
                <Link to="#" className="aiz-side-nav-link" onClick={() => { setRecruter(!recruter) }}>

                  <i className="las la-shopping-cart aiz-side-nav-icon" />
                  <span className="aiz-side-nav-text">Recruitment</span>
                  <span className="aiz-side-nav-arrow" />
                </Link>

                <div className="dropdownMenu">
                  <ul className={`aiz-side-nav-list dropdownMenu level-2 mm-collapse ${recruter ? "mm-show" : "extra"}`} id="product">

                    <li className="aiz-side-nav-item">
                      <Link to="dashboard-crm" className="aiz-side-nav-link">
                        <span className="aiz-side-nav-text">Crm-Dashbord</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </li> */}




              <li className="aiz-side-nav-item" id="dropdownList">
                {/* onMouseOut={() => { setProducts(false) }}
                onMouseOver={() => setProducts(true)} */}

                <Link to="#" className="aiz-side-nav-link" onClick={() => { setProducts(!products) }}>

                  <i className="las la-shopping-cart aiz-side-nav-icon" />
                  <span className="aiz-side-nav-text">Products</span>
                  <span className="aiz-side-nav-arrow" />
                </Link>
                {/*Submenu*/}

                <div className="dropdownMenu">
                  <ul className={`aiz-side-nav-list dropdownMenu level-2 mm-collapse ${products ? "mm-show" : "extra"}`} id="product">

                    <li className="aiz-side-nav-item">
                      <Link to="products/all/products/create" className="aiz-side-nav-link">
                        <span className="aiz-side-nav-text">Add New Product</span>
                      </Link>
                    </li>
                    <li className="aiz-side-nav-item">
                      <Link to="products/all" className="aiz-side-nav-link">
                        <span className="aiz-side-nav-text">All products</span>
                      </Link>
                    </li>
                    <li className="aiz-side-nav-item">
                      <Link to="all/reviews" className="aiz-side-nav-link">
                        <span className="aiz-side-nav-text">All products Reviews</span>
                      </Link>
                    </li>
                    <li className="aiz-side-nav-item">
                      <Link to="products/all/products/create/comboProduct" className="aiz-side-nav-link">
                        <span className="aiz-side-nav-text">Add Combo Product</span>
                      </Link>
                    </li>

                    <li className="aiz-side-nav-item">
                      <Link to="products/all/comboProduct" className="aiz-side-nav-link">
                        <span className="aiz-side-nav-text">All Combo products</span>
                      </Link>
                    </li>
                    <li className="aiz-side-nav-item">
                      <Link to="products/seller" className="aiz-side-nav-link ">
                        <span className="aiz-side-nav-text">Seller Products</span>
                      </Link>
                    </li>


                    <li className="aiz-side-nav-item">
                      <Link to="add-stock-transfer" className="aiz-side-nav-link ">
                        <span className="aiz-side-nav-text">Add Stock Transfer</span>
                      </Link>
                    </li>

                    <li className="aiz-side-nav-item">
                      <Link to="list-stock-transfer" className="aiz-side-nav-link ">
                        <span className="aiz-side-nav-text">List Stock Transfer</span>
                      </Link>
                    </li>

                    <li className="aiz-side-nav-item">
                      <Link to="add-stock-adjustment" className="aiz-side-nav-link ">
                        <span className="aiz-side-nav-text">Add Stock Adjustment</span>
                      </Link>
                    </li>

                    <li className="aiz-side-nav-item">
                      <Link to="list-stock-adjustment" className="aiz-side-nav-link ">
                        <span className="aiz-side-nav-text">List Stock Adjustment</span>
                      </Link>
                    </li>



                    <li className="aiz-side-nav-item">
                      <Link to="product-bulk-upload/index" className="aiz-side-nav-link">
                        <span className="aiz-side-nav-text">Bulk Import</span>
                      </Link>
                    </li>
                    <li className="aiz-side-nav-item">
                      <Link to="bulk_import_inventory" className="aiz-side-nav-link">
                        <span className="aiz-side-nav-text">Bulk Import Inventory</span>
                      </Link>
                    </li>
                    <li className="aiz-side-nav-item">
                      <Link to="unit" className="aiz-side-nav-link ">
                        <span className="aiz-side-nav-text">Unit</span>
                      </Link>
                    </li>
                    <li className="aiz-side-nav-item">
                      <Link to="categories" className="aiz-side-nav-link ">
                        <span className="aiz-side-nav-text">Category</span>
                      </Link>
                    </li>
                    <li className="aiz-side-nav-item">
                      <Link to="brands" className="aiz-side-nav-link ">
                        <span className="aiz-side-nav-text">Brands</span>
                      </Link>
                    </li>

                    <li className="aiz-side-nav-item">
                      <Link to="brands_requested" className="aiz-side-nav-link ">
                        <span className="aiz-side-nav-text">Requested Brands</span>
                      </Link>
                    </li>

                    <li className="aiz-side-nav-item">
                      <Link to="attributes" className="aiz-side-nav-link ">
                        <span className="aiz-side-nav-text">Attribute</span>
                      </Link>
                    </li>
                    <li className="aiz-side-nav-item">
                      <Link to="colors" className="aiz-side-nav-link ">
                        <span className="aiz-side-nav-text">Colors</span>
                      </Link>
                    </li>

                    <li className="aiz-side-nav-item">
                      <Link to="size" className="aiz-side-nav-link ">
                        <span className="aiz-side-nav-text">Size</span>
                      </Link>
                    </li>

                    <li className="aiz-side-nav-item">
                      <Link to="product_attributes" className="aiz-side-nav-link ">
                        <span className="aiz-side-nav-text">Product Attribute</span>
                      </Link>
                    </li>


                  </ul>
                </div>
              </li>

              {idShow == '642177b99fd9c29aab59d245' && <>
                <li className="aiz-side-nav-item" >
                  <Link to="#" className="aiz-side-nav-link" onClick={() => { setJwell(!jwell) }}>
                    <i className="las la-backward aiz-side-nav-icon" />
                    <span className="aiz-side-nav-text">Jewellery</span>
                    <span className="aiz-side-nav-arrow" />
                  </Link>
                  <ul className={`aiz-side-nav-list level-2 mm-collapse ${jwell ? "mm-show" : "extra"}`} id="product">

                    <li className="aiz-side-nav-item">
                      <Link to="#" className="aiz-side-nav-link " onClick={() => { setdimand(!dimand) }}>
                        <span className="aiz-side-nav-text">Diamond Masters</span>
                        <span className="aiz-side-nav-arrow" />
                      </Link>
                      <ul style={{ marginLeft: "15px" }} className={`aiz-side-nav-list level-2 mm-collapse ${dimand ? "mm-show" : "extra"}`} id="product">
                        <li className="aiz-side-nav-item">
                          <Link to="add-diamond-color" className="aiz-side-nav-link ">
                            <span className="aiz-side-nav-text">Add Diamond Color</span>
                          </Link>
                        </li>
                        <li className="aiz-side-nav-item">
                          <Link to="add-diamond-clarity" className="aiz-side-nav-link">
                            <span className="aiz-side-nav-text">Add Diamond Clarity</span>
                          </Link>
                        </li>
                        <li className="aiz-side-nav-item">
                          <Link to="list-diamond-clarity" className="aiz-side-nav-link">
                            <span className="aiz-side-nav-text">List Diamond Clarity</span>
                          </Link>
                        </li>
                        <li className="aiz-side-nav-item">
                          <Link to="add-diamond-Quality" className="aiz-side-nav-link">
                            <span className="aiz-side-nav-text">Add Diamond Quality</span>
                          </Link>
                        </li>
                        <li className="aiz-side-nav-item">
                          <Link to="list-diamond-Quality" className="aiz-side-nav-link">
                            <span className="aiz-side-nav-text">List Diamond Quality</span>
                          </Link>
                        </li>
                        <li className="aiz-side-nav-item">
                          <Link to="add-diamond-shape" className="aiz-side-nav-link">
                            <span className="aiz-side-nav-text">Add Diamond Shape</span>
                          </Link>
                        </li>
                        <li className="aiz-side-nav-item">
                          <Link to="list-diamond-shape" className="aiz-side-nav-link">
                            <span className="aiz-side-nav-text">List Diamond Shape</span>
                          </Link>
                        </li>
                        <li className="aiz-side-nav-item">
                          <Link to="add-diamond-sieves" className="aiz-side-nav-link">
                            <span className="aiz-side-nav-text">Add Diamond Sieves</span>
                          </Link>
                        </li>
                        <li className="aiz-side-nav-item">
                          <Link to="list-diamond-sieves" className="aiz-side-nav-link">
                            <span className="aiz-side-nav-text">List Diamond Sieves</span>
                          </Link>
                        </li>
                      </ul>
                    </li>

                    <li className="aiz-side-nav-item">
                      <Link to="#" className="aiz-side-nav-link " onClick={() => { setgenral(!genral) }}>
                        <span className="aiz-side-nav-text">General Masters</span>
                        <span className="aiz-side-nav-arrow" />
                      </Link>
                      <ul style={{ marginLeft: "15px" }} className={`aiz-side-nav-list level-2 mm-collapse ${genral ? "mm-show" : "extra"}`} id="product">
                        <li className="aiz-side-nav-item">
                          <Link to="color-stone" className="aiz-side-nav-link ">
                            <span className="aiz-side-nav-text">Color Stone</span>
                          </Link>
                        </li>
                        <li className="aiz-side-nav-item">
                          <Link to="labour-charge-type" className="aiz-side-nav-link ">
                            <span className="labour-charge-type">Labour Charge Type</span>
                          </Link>
                        </li>
                        <li className="aiz-side-nav-item">
                          <Link to="labour-charge" className="aiz-side-nav-link ">
                            <span className="labour-charge">Labour Charge</span>
                          </Link>
                        </li>
                        <li className="aiz-side-nav-item">
                          <Link to="price" className="aiz-side-nav-link ">
                            <span className="labour-charge">Price</span>
                          </Link>
                        </li>
                        <li className="aiz-side-nav-item">
                          <Link to="shop-for-modules" className="aiz-side-nav-link ">
                            <span className="labour-charge">Shop For Module</span>
                          </Link>
                        </li>
                        <li className="aiz-side-nav-item">
                          <Link to="occasion" className="aiz-side-nav-link ">
                            <span className="labour-charge">Occasion</span>
                          </Link>
                        </li>
                        <li className="aiz-side-nav-item">
                          <Link to="ring-size" className="aiz-side-nav-link ">
                            <span className="labour-charge">Ring Size</span>
                          </Link>
                        </li>
                        <li className="aiz-side-nav-item">
                          <Link to="jwellery/categoryType" className="aiz-side-nav-link">
                            <span className="labour-charge">Category Type</span>
                          </Link>
                        </li>
                        <li className="aiz-side-nav-item">
                          <Link to="add-category-sequence" className="aiz-side-nav-link">
                            <span className="labour-charge">Add Category Sequence</span>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="aiz-side-nav-item">
                      <Link to="#" className="aiz-side-nav-link " onClick={() => { setMetal(!metal) }}>
                        <span className="aiz-side-nav-text">Metel Masters</span>
                        <span className="aiz-side-nav-arrow" />
                      </Link>
                      <ul style={{ marginLeft: "15px" }} className={`aiz-side-nav-list level-2 mm-collapse ${metal ? "mm-show" : "extra"}`} id="product">
                        <li className="aiz-side-nav-item">
                          <li className="aiz-side-nav-item">
                            <Link to="metal-type" className="aiz-side-nav-link ">
                              <span className="aiz-side-nav-text">Metal Type</span>
                            </Link>
                          </li>
                          <Link to="metal-purity" className="aiz-side-nav-link ">
                            <span className="aiz-side-nav-text">Metal Purity</span>
                          </Link>
                        </li>
                        <li className="aiz-side-nav-item">
                          <Link to="metal-weight" className="aiz-side-nav-link ">
                            <span className="aiz-side-nav-text">MetalWeight</span>
                          </Link>
                        </li>
                      </ul>
                    </li>

                  </ul>
                </li>
              </>}



              <li className="aiz-side-nav-item">
                {/* onMouseOut={() => { setWholsale(false) }}
                onMouseOver={() => setWholsale(true)} */}

                <Link to="#" className="aiz-side-nav-link" onClick={() => { setWholsale(!wholeSale) }}>
                  <i className="las la-shopping-cart aiz-side-nav-icon" />
                  <span className="aiz-side-nav-text">Wholesale Products</span>
                  <span className="aiz-side-nav-arrow" />
                </Link>
                {/*Submenu*/}
                <ul className={`aiz-side-nav-list level-2 mm-collapse ${wholeSale ? "mm-show" : "extra"}`} id="product">
                  <li className="aiz-side-nav-item">
                    <Link to="wholesale-product/create" className="aiz-side-nav-link ">
                      <span className="aiz-side-nav-text">Add New Wholesale Products</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link to="wholesale/all-products" className="aiz-side-nav-link ">
                      <span className="aiz-side-nav-text">All Wholesale Products</span>
                    </Link>
                  </li>
                  {/* <li className="aiz-side-nav-item">
                    <Link to="sizechart" className="aiz-side-nav-link ">
                      <span className="aiz-side-nav-text">Size Chart</span>
                    </Link>
                  </li> */}


                </ul>
              </li>

              {/* Delevery Boy start */}

              <li className="aiz-side-nav-item list">
                {/* onMouseOut={() => { setDeliveryBoy(false) }}
                onMouseOver={() => setDeliveryBoy(true)} */}

                <Link to="#" className="aiz-side-nav-link" onClick={() => { setDeliveryBoy(!deliveryBoy) }}>
                  <i className="las la-shopping-cart aiz-side-nav-icon" />
                  <span className="aiz-side-nav-text">Delivery Boy</span>
                  <span className="aiz-side-nav-arrow" />
                </Link>
                <ul className={`aiz-side-nav-list level-2 mm-collapse ${deliveryBoy ? "mm-show" : "extra"}`} id="product">
                  <li className="aiz-side-nav-item">
                    <Link to="delivery-boys" className="aiz-side-nav-link ">
                      <span className="aiz-side-nav-text">Delivery Boys</span>
                    </Link>
                  </li>

                  <li className="aiz-side-nav-item">
                    <Link to="/admin/delivery-boys/create" className="aiz-side-nav-link ">
                      <span className="aiz-side-nav-text">Add New Delivery Boys</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link to="payment-history" className="aiz-side-nav-link ">
                      <span className="aiz-side-nav-text">Delivery Boys Payment History</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link to="delivery-collection-list" className="aiz-side-nav-link ">
                      <span className="aiz-side-nav-text">Delivery Boys Collection List</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link to="delivery-cancel-request" className="aiz-side-nav-link ">
                      <span className="aiz-side-nav-text">Delivery Boys Cancel List</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link to="delivery-payment-configuration" className="aiz-side-nav-link ">
                      <span className="aiz-side-nav-text">Delivery Boy Configuration</span>
                    </Link>
                  </li>

                  <li className="aiz-side-nav-item">
                    <Link to="delivery-boy-status" className="aiz-side-nav-link ">
                      <span className="aiz-side-nav-text">Delivery Boys Status</span>
                    </Link>
                  </li>

                </ul>
              </li>
              {/* Delivery Boy end */}



              <li className="aiz-side-nav-item" onClick={() => { setProductsManagement(!productsManagement) }}>
                <Link to="#" className="aiz-side-nav-link" >
                  <i className="las la-shopping-cart aiz-side-nav-icon" />
                  <span className="aiz-side-nav-text">Products Management</span>
                  <span className="aiz-side-nav-arrow" />
                </Link>
                {/*Submenu*/}
                <ul className={`aiz-side-nav-list level-2 mm-collapse ${productsManagement ? "mm-show" : "extra"}`} id="product">
                  <li className="aiz-side-nav-item">
                    <Link to="requested-brands" className="aiz-side-nav-link ">
                      <span className="aiz-side-nav-text">Requested Brands</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link to="all_reviews_ratings" className="aiz-side-nav-link ">
                      <span className="aiz-side-nav-text">All reviews & ratings</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link to="sizechart" className="aiz-side-nav-link ">
                      <span className="aiz-side-nav-text">Size Chart</span>
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="aiz-side-nav-item">
                <Link to="tracking-order" className="aiz-side-nav-link">
                  <i className="las la-shopping-cart aiz-side-nav-icon"></i>
                  <span className="aiz-side-nav-text">Tracking Order</span>
                </Link>
              </li>







              <li className="aiz-side-nav-item" onClick={() => { setPurchase(!purchase) }}>
                <Link to="#" className="aiz-side-nav-link">
                  <i className="las la-backward aiz-side-nav-icon" />
                  <span className="aiz-side-nav-text">Purchase</span>
                  <span className="aiz-side-nav-arrow" />
                </Link>
                <ul className={`aiz-side-nav-list level-2 mm-collapse ${purchase ? "mm-show" : "extra"}`} id="product">
                  <li className="aiz-side-nav-item">
                    <Link to="list-purchase" className="aiz-side-nav-link ">
                      <span className="aiz-side-nav-text">List Purchase</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link to="add-purchase-list" className="aiz-side-nav-link">
                      <span className="aiz-side-nav-text">Add Purchase</span>
                    </Link>
                  </li>
                </ul>
              </li>


              <li className="aiz-side-nav-item" >
                <Link to="#" className="aiz-side-nav-link" onClick={() => { setQuotations(!quotations) }} >
                  <i className="las la-user-tie aiz-side-nav-icon" />
                  <span className="aiz-side-nav-text">Quotations </span>
                  <span className="aiz-side-nav-arrow" />
                </Link>
                <ul className={`aiz-side-nav-list level-2 mm-collapse ${quotations ? "mm-show" : "extra"}`}>
                  <li className="aiz-side-nav-item">
                    <Link to="list_quotation" className="aiz-side-nav-link ">
                      <span className="aiz-side-nav-text">List Quotation</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link to="add_quotation" className="aiz-side-nav-link ">
                      <span className="aiz-side-nav-text">Add Quotation</span>
                    </Link>
                  </li>
                </ul>
              </li>




              {/* <li className="aiz-side-nav-item" onClick={() => { setSaleMod(!saleMod) }}>
                <Link to="#" className="aiz-side-nav-link">
                  <i className="las la-backward aiz-side-nav-icon" />
                  <span className="aiz-side-nav-text">Sales Module</span>
                  <span className="aiz-side-nav-arrow" />
                </Link>
                <ul className={`aiz-side-nav-list level-2 mm-collapse ${saleMod ? "mm-show" : "extra"}`} id="product">
                  <li className="aiz-side-nav-item">
                    <Link to="sales_entry" className="aiz-side-nav-link ">
                      <span className="aiz-side-nav-text">Sales Enty</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link to="sales_return_entry" className="aiz-side-nav-link">
                      <span className="aiz-side-nav-text">Sales Return Enty</span>
                    </Link>
                  </li>
                </ul>
              </li> */}









              <li className="aiz-side-nav-item">
                <Link to="all_orders" className="aiz-side-nav-link ">
                  <i className="las la-shopping-cart aiz-side-nav-icon" />
                  <span className="aiz-side-nav-text">All Orders</span>
                </Link>
              </li>

              {data && data.map((item) => {
                if (item.orderStatusName === 'Pending' || item.orderStatusName === 'Delivered' || item.orderStatusName === 'Canceled' || item.orderStatusName === 'Rejected') {
                  return <li key={item._id} className="aiz-side-nav-item" onClick={() => window.localStorage.setItem('orderName', item.orderStatusName)}>
                    <Link to={`orders/status/${item._id}`} className="aiz-side-nav-link">
                      <i className="las la-shopping-cart aiz-side-nav-icon" />
                      <span className="aiz-side-nav-text">{item.orderStatusName}</span>
                    </Link>
                  </li>
                }
              })}



              <li className="aiz-side-nav-item">
                <Link to="inhouse-orders" className="aiz-side-nav-link ">
                  <i className="las la-shopping-cart aiz-side-nav-icon" />
                  <span className="aiz-side-nav-text">Inhouse orders</span>
                </Link>
              </li>

              <li className="aiz-side-nav-item">
                <Link to="seller-orders" className="aiz-side-nav-link ">
                  <i className="las la-shopping-cart aiz-side-nav-icon" />
                  <span className="aiz-side-nav-text">Seller Orders</span>
                </Link>
              </li>


              <li className="aiz-side-nav-item" onClick={() => window.localStorage.setItem('orderName', 'All Pick-up Point Order')}>
                <Link to="orders_by_pickup_point" className="aiz-side-nav-link ">
                  <i className="las la-shopping-cart aiz-side-nav-icon" />
                  <span className="aiz-side-nav-text" style={{ fontSize: "15px", color: "indigo" }}>All Pick-up Point Order</span>
                </Link>
              </li>



              {data && data.map((item) => {
                if (item.orderStatusName === 'Pending' || item.orderStatusName === 'Delivered' || item.orderStatusName === 'Canceled' || item.orderStatusName === 'Rejected') {
                  return <li key={item._id} className="aiz-side-nav-item" onClick={() => window.localStorage.setItem('orderName', item.orderStatusName)}>
                    <Link to={`orders/PickupPints/${item._id}`} className="aiz-side-nav-link">
                      <i className="las la-shopping-cart aiz-side-nav-icon" />
                      <span className="aiz-side-nav-text">{item.orderStatusName}</span>
                    </Link>
                  </li>
                }

              })}


              {/* Banner Setting */}


              <li className="aiz-side-nav-item">
                <Link to="all_cancel_orders" className="aiz-side-nav-link ">
                  <i className="las la-shopping-cart aiz-side-nav-icon" />
                  <span className="aiz-side-nav-text" style={{ fontSize: "15px", color: "indigo" }}>All Cancelled Orders </span>
                </Link>
              </li>





              <li className="aiz-side-nav-item" onClick={() => { setFront(!front) }}>
                <Link to="#" className="aiz-side-nav-link" >
                  <i className="las la-shopping-cart aiz-side-nav-icon" />
                  <span className="aiz-side-nav-text">Front Setting</span>
                  <span className="aiz-side-nav-arrow" />
                </Link>
                {/*Submenu*/}
                <ul className={`aiz-side-nav-list level-2 mm-collapse ${front ? "mm-show" : "extra"}`} id="product">
                  <li className="aiz-side-nav-item">
                    <Link to="add_banner" className="aiz-side-nav-link ">
                      <span className="aiz-side-nav-text">Add Banner</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link to="list_banner" className="aiz-side-nav-link ">
                      <span className="aiz-side-nav-text">List Banner</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link to="add_popup" className="aiz-side-nav-link ">
                      <span className="aiz-side-nav-text">Add Popup</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link to="list_popup" className="aiz-side-nav-link ">
                      <span className="aiz-side-nav-text">List Popup</span>
                    </Link>
                  </li>

                </ul>
              </li>


              <li className="aiz-side-nav-item" >
                <Link to="#" className="aiz-side-nav-link" onClick={() => { setMember(!member) }}>
                  <i className="las la-shopping-cart aiz-side-nav-icon" />
                  <span className="aiz-side-nav-text">Team Members</span>
                  <span className="aiz-side-nav-arrow" />
                </Link>
                <ul className={`aiz-side-nav-list level-2 mm-collapse ${member ? "mm-show" : "extra"}`} id="product">
                  <li className="aiz-side-nav-item">
                    <Link to="add_member" className="aiz-side-nav-link ">
                      <span className="aiz-side-nav-text">Add Member</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link to="list_members" className="aiz-side-nav-link ">
                      <span className="aiz-side-nav-text">List Members</span>
                    </Link>
                  </li>

                </ul>
              </li>







              <li className="aiz-side-nav-item">
                <Link to="#" className="aiz-side-nav-link" onClick={() => { setWholsale(!wholeSale) }}>
                  <i className="las la-shopping-cart aiz-side-nav-icon" />
                  <span className="aiz-side-nav-text">Web Setting</span>
                  <span className="aiz-side-nav-arrow" />
                </Link>
                {/*Submenu*/}
                <ul className={`aiz-side-nav-list level-2 mm-collapse ${wholeSale ? "mm-show" : "extra"}`} id="product">
                  <li className="aiz-side-nav-item">
                    <Link to="website-pages" className="aiz-side-nav-link ">
                      <span className="aiz-side-nav-text">website-pages</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link to="website-pages/custom-pages/create" className="aiz-side-nav-link ">
                      <span className="aiz-side-nav-text">Add New Page</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link to="website/appearance" className="aiz-side-nav-link ">
                      <span className="aiz-side-nav-text">Website Setting</span>
                    </Link>
                  </li>
                  {/* <li className="aiz-side-nav-item">
                    <Link to="website-footer" className="aiz-side-nav-link ">
                      <span className="aiz-side-nav-text">Website-footer</span>
                    </Link>
                  </li> */}
                  {/* <li className="aiz-side-nav-item">
                    <Link to="sizechart" className="aiz-side-nav-link ">
                      <span className="aiz-side-nav-text">Size Chart</span>
                    </Link>
                  </li> */}


                </ul>
              </li>







              <li className="aiz-side-nav-item">
                <Link to="#" className="aiz-side-nav-link" onClick={() => { setReports(!reports) }}>
                  <i className="las la-backward aiz-side-nav-icon" />
                  <span className="aiz-side-nav-text">Report's</span>
                  <span className="aiz-side-nav-arrow" />
                </Link>
                <ul className={`aiz-side-nav-list level-2 mm-collapse ${reports ? "mm-show" : "extra"}`} id="product">
                  <li className="aiz-side-nav-item">
                    <Link to="input_purchase_tax_report" className="aiz-side-nav-link ">
                      <span className="aiz-side-nav-text">Input Purchase Tax Report</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link to="output_sale_tax_report" className="aiz-side-nav-link ">
                      <span className="aiz-side-nav-text">Output Sale Tax Report:</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link to="stock_report" className="aiz-side-nav-link ">
                      <span className="aiz-side-nav-text">Stock Report</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link to="sales_report" className="aiz-side-nav-link">
                      <span className="aiz-side-nav-text">Sales Report</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link to="register_report" className="aiz-side-nav-link">
                      <span className="aiz-side-nav-text">Register Report</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link to="products_quantity_alerts" className="aiz-side-nav-link">
                      <span className="aiz-side-nav-text">Product Quantity Alerts</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link to="products_report" className="aiz-side-nav-link">
                      <span className="aiz-side-nav-text">Products Report</span>
                    </Link>
                  </li>


                  <li className="aiz-side-nav-item">
                    <Link to="product-transfer-entry" className="aiz-side-nav-link">
                      <span className="aiz-side-nav-text">Product Transfer Entry</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link to="product-transfer-list" className="aiz-side-nav-link">
                      <span className="aiz-side-nav-text">Product Transfer's List</span>
                    </Link>
                  </li>





                  <li className="aiz-side-nav-item">
                    <Link to="damage-product-entry" className="aiz-side-nav-link">
                      <span className="aiz-side-nav-text">Products Damage Entry</span>
                    </Link>
                  </li>

                  <li className="aiz-side-nav-item">
                    <Link to="product-damage-list" className="aiz-side-nav-link">
                      <span className="aiz-side-nav-text">Products Damage List</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link to="material-re-order-list" className="aiz-side-nav-link">
                      <span className="aiz-side-nav-text">Material Re-Order List</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link to="adjustments_report" className="aiz-side-nav-link">
                      <span className="aiz-side-nav-text">Adjustments Report</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link to="categories_report" className="aiz-side-nav-link">
                      <span className="aiz-side-nav-text">Categories Report</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link to="brands_report" className="aiz-side-nav-link">
                      <span className="aiz-side-nav-text">Brands Report</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link to="daily_sales" className="aiz-side-nav-link">
                      <span className="aiz-side-nav-text">Daily Sales</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link to="monthly_sales" className="aiz-side-nav-link">
                      <span className="aiz-side-nav-text">Monthly Sales</span>
                    </Link>
                  </li>

                  {/* <li className="aiz-side-nav-item">
                    <Link to="sales_report" className="aiz-side-nav-link">
                      <span className="aiz-side-nav-text">Sales Report</span>
                    </Link>
                  </li> */}

                  <li className="aiz-side-nav-item">
                    <Link to="payments_report" className="aiz-side-nav-link">
                      <span className="aiz-side-nav-text">Payments Report</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link to="tax_report" className="aiz-side-nav-link">
                      <span className="aiz-side-nav-text">Tax Report</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link to="profit_loss" className="aiz-side-nav-link">
                      <span className="aiz-side-nav-text">Profit and/or Loss</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link to="daily_purchase" className="aiz-side-nav-link">
                      <span className="aiz-side-nav-text">Daily Purchases</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link to="monthly_purchase" className="aiz-side-nav-link">
                      <span className="aiz-side-nav-text">Monthly Purchases</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link to="purchases_report" className="aiz-side-nav-link">
                      <span className="aiz-side-nav-text">Purchases Report</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link to="expenses_report" className="aiz-side-nav-link">
                      <span className="aiz-side-nav-text">Expenses Report</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link to="customer_report" className="aiz-side-nav-link">
                      <span className="aiz-side-nav-text">Customers Report</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link to="suppliers_report" className="aiz-side-nav-link">
                      <span className="aiz-side-nav-text">Suppliers Report</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link to="staffs_report" className="aiz-side-nav-link">
                      <span className="aiz-side-nav-text">Staff Report</span>
                    </Link>
                  </li>
                </ul>
              </li>








              <li className="aiz-side-nav-item" onClick={() => { setRefunds(!refunds) }}>
                <Link to="#" className="aiz-side-nav-link" >
                  <i className="las la-backward aiz-side-nav-icon" />
                  <span className="aiz-side-nav-text">Refunds</span>
                  <span className="aiz-side-nav-arrow" />
                </Link>
                <ul className={`aiz-side-nav-list level-2 mm-collapse ${refunds ? "mm-show" : "extra"}`} id="product">
                  <li className="aiz-side-nav-item">
                    <Link to="refund-request-all" className="aiz-side-nav-link ">
                      <span className="aiz-side-nav-text">Refund Requests</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link to="paid-refund" className="aiz-side-nav-link">
                      <span className="aiz-side-nav-text">Approved Refunds</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link to="rejected-refund" className="aiz-side-nav-link">
                      <span className="aiz-side-nav-text">rejected Refunds</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link to="refund-request-config" className="aiz-side-nav-link">
                      <span className="aiz-side-nav-text">Refund Configuration</span>
                    </Link>
                  </li>
                </ul>
              </li>











              {/* Sellers */}
              <li className="aiz-side-nav-item" onClick={() => { setSellers(!sellers) }}>
                <Link to="#" className="aiz-side-nav-link" >
                  <i className="las la-user aiz-side-nav-icon" />
                  <span className="aiz-side-nav-text">Sellers</span>
                  <span className="aiz-side-nav-arrow" />
                </Link>
                <ul className={`aiz-side-nav-list level-2 mm-collapse ${sellers ? "mm-show" : "extra"}`}>
                  <li className="aiz-side-nav-item">
                    <Link to="seller" className="aiz-side-nav-link ">
                      <span className="aiz-side-nav-text">All Seller</span>
                    </Link>
                  </li>

                  <li className="aiz-side-nav-item">
                    <Link to="products/seller" className="aiz-side-nav-link ">
                      <span className="aiz-side-nav-text">Seller Products</span>
                    </Link>
                  </li>

                  <li className="aiz-side-nav-item">
                    <Link to="add-seller-product" className="aiz-side-nav-link ">
                      <span className="aiz-side-nav-text">Add Seller Product</span>
                    </Link>
                  </li>

                  {/* <li className="aiz-side-nav-item">
                    <Link to="Paymets" className="aiz-side-nav-link">
                      <span className="aiz-side-nav-text">Payouts</span>
                    </Link>
                  </li> */}
                  <li className="aiz-side-nav-item">
                    <Link to="withdraw_requests_all" className="aiz-side-nav-link">
                      <span className="aiz-side-nav-text">Payout Requests</span>
                    </Link>
                  </li>
                  {/* <li className="aiz-side-nav-item">
                    <Link to="vendor_commission" className="aiz-side-nav-link">
                      <span className="aiz-side-nav-text">Seller Commission</span>
                    </Link>
                  </li> */}
                  <li className="aiz-side-nav-item">
                    <Link to="seller_packages" className="aiz-side-nav-link ">
                      <span className="aiz-side-nav-text">Seller Packages</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link to="seller_packages_purchase_list" className="aiz-side-nav-link ">
                      <span className="aiz-side-nav-text">Seller Packages Purchase List</span>
                    </Link>
                  </li>
                  {/* <li className="aiz-side-nav-item">
                    <Link to="verification/form" className="aiz-side-nav-link">
                      <span className="aiz-side-nav-text">Seller Verification Form</span>
                    </Link>
                  </li> */}
                  <li className="aiz-side-nav-item">
                    <Link to="seller-banners" className="aiz-side-nav-link">
                      <span className="aiz-side-nav-text">Seller Banners</span>
                    </Link>
                  </li>
                </ul>
              </li>



              <li className="aiz-side-nav-item" onClick={() => { setCustomers(!customers) }}>
                <Link to="#" className="aiz-side-nav-link" >
                  <i className="las la-user aiz-side-nav-icon" />
                  <span className="aiz-side-nav-text">Customers</span>
                  <span className="aiz-side-nav-arrow" />
                </Link>
                <ul className={`aiz-side-nav-list level-2 mm-collapse ${customers ? "mm-show" : "extra"}`}>
                  <li className="aiz-side-nav-item">
                    <Link to="customer-list" className="aiz-side-nav-link ">
                      <span className="aiz-side-nav-text">All Customers</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link to="customer-create" className="aiz-side-nav-link ">
                      <span className="aiz-side-nav-text">Add Customers</span>
                    </Link>
                  </li>
                </ul>
              </li>


              <li className="aiz-side-nav-item" onClick={() => { setBlogSystem(!blogSystem) }}>
                <Link to="#" className="aiz-side-nav-link" >
                  <i className="las la-bullhorn aiz-side-nav-icon" />
                  <span className="aiz-side-nav-text">Blog System</span>
                  <span className="aiz-side-nav-arrow" />
                </Link>
                <ul className={`aiz-side-nav-list level-2 mm-collapse ${blogSystem ? "mm-show" : "extra"}`}>
                  <li className="aiz-side-nav-item">
                    <Link to="blog" className="aiz-side-nav-link ">
                      <span className="aiz-side-nav-text">All Posts</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link to="blog-category" className="aiz-side-nav-link ">
                      <span className="aiz-side-nav-text">Categories</span>
                    </Link>
                  </li>
                </ul>
              </li>
              {/* marketing */}
              <li className="aiz-side-nav-item" onClick={() => { setMarketing(!marketing) }}>
                <Link to="#" className="aiz-side-nav-link" >
                  <i className="las la-bullhorn aiz-side-nav-icon" />
                  <span className="aiz-side-nav-text">Marketing</span>
                  <span className="aiz-side-nav-arrow" />
                </Link>
                <ul className={`aiz-side-nav-list level-2 mm-collapse ${marketing ? "mm-show" : "extra"}`}>
                  <li className="aiz-side-nav-item">
                    <Link to="flash_deals" className="aiz-side-nav-link ">
                      <span className="aiz-side-nav-text">Flash deals</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link to="newsletter" className="aiz-side-nav-link">
                      <span className="aiz-side-nav-text">Newsletters</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link to="sms" className="aiz-side-nav-link">
                      <span className="aiz-side-nav-text">Bulk SMS</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link to="subscribers" className="aiz-side-nav-link">
                      <span className="aiz-side-nav-text">Subscribers</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link to="coupon" className="aiz-side-nav-link ">
                      <span className="aiz-side-nav-text">Coupon</span>
                    </Link>
                  </li>
                </ul>
              </li>
              {/* Support */}
              <li className="aiz-side-nav-item">
                <Link to="#" className="aiz-side-nav-link" onClick={() => { setSupport(!support) }}>
                  <i className="las la-link aiz-side-nav-icon" />
                  <span className="aiz-side-nav-text">Support</span>
                  <span className="aiz-side-nav-arrow" />
                </Link>
                <ul className={`aiz-side-nav-list level-2 mm-collapse ${support ? "mm-show" : "extra"}`}>
                  <li className="aiz-side-nav-item">
                    <Link to="support_ticket" className="aiz-side-nav-link ">
                      <span className="aiz-side-nav-text">Ticket</span>
                      <span className="badge badge-info">2</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link to="add-ticket" className="aiz-side-nav-link ">
                      <span className="aiz-side-nav-text">Add Ticket</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link to="staff-ticket-list" className="aiz-side-nav-link ">
                      <span className="aiz-side-nav-text">Staff Ticket List</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link to="conversations" className="aiz-side-nav-link ">
                      <span className="aiz-side-nav-text">Product Conversations</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link to="product-queries" className="aiz-side-nav-link ">
                      <span className="aiz-side-nav-text">Product Queries</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link to="complaint-type" className="aiz-side-nav-link ">
                      <span className="aiz-side-nav-text">Complaint Type</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link to="complaint-nature" className="aiz-side-nav-link ">
                      <span className="aiz-side-nav-text">Complaint Nature</span>
                    </Link>
                  </li>

                </ul>
              </li>

              {/* affilliate */}

              <li className="aiz-side-nav-item">
                <Link to="#" className="aiz-side-nav-link" onClick={() => { setAffiliate(!affiliate) }}>
                  <i className="las la-link aiz-side-nav-icon" />
                  <span className="aiz-side-nav-text">Affiliate System</span>
                  <span className="aiz-side-nav-arrow" />
                </Link>
                <ul className={`aiz-side-nav-list level-2 mm-collapse ${affiliate ? "mm-show" : "extra"}`}>
                  <li className="aiz-side-nav-item">
                    <Link to="affiliate" className="aiz-side-nav-link ">
                      <span className="aiz-side-nav-text">Affiliate Registration Form</span>
                    </Link>
                  </li>

                  <li className="aiz-side-nav-item">
                    <Link to="affiliate-cofiguration" className="aiz-side-nav-link ">
                      <span className="aiz-side-nav-text">Affiliate Configuration</span>
                    </Link>
                  </li>

                  <li className="aiz-side-nav-item">
                    <Link to="affiliate-users" className="aiz-side-nav-link ">
                      <span className="aiz-side-nav-text">Affiliate Users</span>
                    </Link>
                  </li>

                  <li className="aiz-side-nav-item">
                    <Link to="refferal/users" className="aiz-side-nav-link ">
                      <span className="aiz-side-nav-text">Referral Users</span>
                    </Link>
                  </li>

                  <li className="aiz-side-nav-item">
                    <Link to="affiliate/withdraw_requests" className="aiz-side-nav-link ">
                      <span className="aiz-side-nav-text">Affiliate Withdraw Requests</span>
                    </Link>
                  </li>

                  <li className="aiz-side-nav-item">
                    <Link to="affiliate/logs" className="aiz-side-nav-link ">
                      <span className="aiz-side-nav-text">Affiliate Logs</span>
                    </Link>
                  </li>

                </ul>
              </li>


              <li className="aiz-side-nav-item">
                <Link to="#" className="aiz-side-nav-link" onClick={() => { setClubPointsystem(!clubPointsystem) }}>
                  <i className="lab la-btc aiz-side-nav-icon" />
                  <span className="aiz-side-nav-text">Club Point System</span>
                  <span className="aiz-side-nav-arrow" />
                </Link>
                <ul className={`aiz-side-nav-list level-2 mm-collapse ${clubPointsystem ? "mm-show" : "extra"}`}>
                  <li className="aiz-side-nav-item">
                    <Link to="club-points/configuration" className="aiz-side-nav-link">
                      <span className="aiz-side-nav-text">Club Point Configurations</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link to="set-club-points" className="aiz-side-nav-link ">
                      <span className="aiz-side-nav-text">Set Product Point</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link to="club-points/index" className="aiz-side-nav-link ">
                      <span className="aiz-side-nav-text">User Points</span>
                    </Link>
                  </li>
                </ul>
              </li>

              {/* reward Point Addon*/}
              <li className="aiz-side-nav-item">
                <Link to="#" className="aiz-side-nav-link" onClick={() => { setRewardPoints(!rewardPoints) }}>
                  <i className="lab la-btc aiz-side-nav-icon" />
                  <span className="aiz-side-nav-text">Reward Point System</span>
                  <span className="aiz-side-nav-arrow" />
                </Link>
                <ul className={`aiz-side-nav-list level-2 mm-collapse ${rewardPoints ? "mm-show" : "extra"}`} id="product">
                  <li className="aiz-side-nav-item">
                    <Link to="set-share-reward-points" className="aiz-side-nav-link ">
                      <span className="aiz-side-nav-text">Social Share Reward Points</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link to="set-like-reward-points" className="aiz-side-nav-link ">
                      <span className="aiz-side-nav-text">Social Media Like Reward Points</span>
                    </Link>
                  </li>
                </ul>
              </li>

              {/*OTP addon */}

              <li className="aiz-side-nav-item">
                <Link to="#" className="aiz-side-nav-link" onClick={() => { setOtpSystem(!otpSystem) }}>
                  <i className="las la-phone aiz-side-nav-icon" />
                  <span className="aiz-side-nav-text">OTP System</span>
                  <span className="aiz-side-nav-arrow" />
                </Link>
                <ul className={`aiz-side-nav-list level-2 mm-collapse ${otpSystem ? "mm-show" : "extra"}`}>
                  <li className="aiz-side-nav-item">
                    <Link to="otp-configuration" className="aiz-side-nav-link">
                      <span className="aiz-side-nav-text">OTP Configurations</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link to="sms-templates" className="aiz-side-nav-link">
                      <span className="aiz-side-nav-text">SMS Templates</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link to="otp-credentials-configuration" className="aiz-side-nav-link">
                      <span className="aiz-side-nav-text">Set OTP Credentials</span>
                    </Link>
                  </li>
                </ul>
              </li>



              {/* Pos-system start */}
              <li className="aiz-side-nav-item">
                <Link to="#" className="aiz-side-nav-link" onClick={() => { setPosSystem(!posSystem) }}>
                  <i className="las la-phone aiz-side-nav-icon" />
                  <span className="aiz-side-nav-text">POS System</span>
                  <span className="aiz-side-nav-arrow" />
                </Link>
                <ul className={`aiz-side-nav-list level-2 mm-collapse ${posSystem ? "mm-show" : "extra"}`}>
                  <li className="aiz-side-nav-item">
                    <Link to="add-pos" className="aiz-side-nav-link">
                      <span className="aiz-side-nav-text">Add Pos</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link to="#" className="aiz-side-nav-link">
                      <span className="aiz-side-nav-text">List Pos</span>
                    </Link>
                  </li>
                </ul>
              </li>
              {/* pos-system-end */}


              {/* socialmedia Susytem start */}
              <li className="aiz-side-nav-item">
                <Link to="#" className="aiz-side-nav-link" onClick={() => { setSocialMediaSystem(!socialMediaSystem) }}>
                  <i className="las la-phone aiz-side-nav-icon" />
                  <span className="aiz-side-nav-text">SocialMedia System</span>
                  <span className="aiz-side-nav-arrow" />
                </Link>
                <ul className={`aiz-side-nav-list level-2 mm-collapse ${socialMediaSystem ? "mm-show" : "extra"}`}>
                  <li className="aiz-side-nav-item">
                    <Link to="socialMedia-credential" className="aiz-side-nav-link">
                      <span className="aiz-side-nav-text">SocialMedia Credentials</span>
                    </Link>
                  </li>
                  {/* <li className="aiz-side-nav-item">
                    <Link to="#" className="aiz-side-nav-link">
                      <span className="aiz-side-nav-text">SMS Templates</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link to="#" className="aiz-side-nav-link">
                      <span className="aiz-side-nav-text">Set OTP Credentials</span>
                    </Link>
                  </li> */}
                </ul>
              </li>

              {/* SocialMedia system end */}

              {/* {african payment gateway} */}

              <li className="aiz-side-nav-item" onClick={() => { setAfricanPayment(!africanPayment) }}>
                <Link to="#" className="aiz-side-nav-link" >
                  <i className="las la-phone aiz-side-nav-icon" />
                  <span className="aiz-side-nav-text">African Payment Gateway Addon</span>
                  <span className="aiz-side-nav-arrow" />
                </Link>
                <ul className={`aiz-side-nav-list level-2 mm-collapse ${africanPayment ? "mm-show" : "extra"}`}>
                  <li className="aiz-side-nav-item">
                    <Link to="african/configuration" className="aiz-side-nav-link">
                      <span className="aiz-side-nav-text">African PG Configurations</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link to="credentials_index" className="aiz-side-nav-link">
                      <span className="aiz-side-nav-text">Set African PG Credentials</span>
                    </Link>
                  </li>
                </ul>
              </li>
              {/* Setup & Configurations */}
              <li className="aiz-side-nav-item" >
                <Link to="#" className="aiz-side-nav-link" onClick={() => setSetupConfiguration(!setupConfiguration)}>
                  <i className="las la-dharmachakra aiz-side-nav-icon" />
                  <span className="aiz-side-nav-text">Setup &amp; Configurations</span>
                  <span className="aiz-side-nav-arrow" />
                </Link>
                <ul className={`aiz-side-nav-list level-2 mm-collapse ${setupConfiguration ? "mm-show" : "extra"}`}>
                  <li className="aiz-side-nav-item">
                    <Link to="general-setting" className="aiz-side-nav-link">
                      <span className="aiz-side-nav-text">General Settings</span>
                    </Link>
                  </li>

                  {/* <li className="aiz-side-nav-item">
                    <Link to="activation" className="aiz-side-nav-link">
                      <span className="aiz-side-nav-text">Features activation</span>
                    </Link>
                  </li> */}

                  <li className="aiz-side-nav-item">
                    <Link to="languages" className="aiz-side-nav-link ">
                      <span className="aiz-side-nav-text">Languages</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link to="country" className="aiz-side-nav-link">
                      <span className="aiz-side-nav-text">Country</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link to="currency" className="aiz-side-nav-link">
                      <span className="aiz-side-nav-text">Currency</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <a href="https://mmslfashions.in/admin/tax" className="aiz-side-nav-link ">
                      <span className="aiz-side-nav-text">Vat &amp; TAX</span>
                    </a>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link to="pick_up_points" className="aiz-side-nav-link ">
                      <span className="aiz-side-nav-text">Pickup point</span>
                    </Link>
                  </li>
                  {/* 
                  <li className="aiz-side-nav-item">
                    <Link to="smtp-settings" className="aiz-side-nav-link">
                      <span className="aiz-side-nav-text">SMTP Settings</span>
                    </Link>
                  </li> */}

                  {/* <li className="aiz-side-nav-item">
                    <Link to="payment-method" className="aiz-side-nav-link">
                      <span className="aiz-side-nav-text">Payment Methods</span>
                    </Link>
                  </li> */}

                  <li className="aiz-side-nav-item">
                    <Link to="order-configuration" className="aiz-side-nav-link">
                      <span className="aiz-side-nav-text">Order Configuration</span>
                    </Link>
                  </li>


                </ul>
              </li>

              {/* Staffs */}

              <li className="aiz-side-nav-item" onClick={() => { setAllStaffs(!allStaffs) }}>
                <Link to="#" className="aiz-side-nav-link" >
                  <i className="las la-user-tie aiz-side-nav-icon" />
                  <span className="aiz-side-nav-text">Staffs</span>
                  <span className="aiz-side-nav-arrow" />
                </Link>
                <ul className={`aiz-side-nav-list level-2 mm-collapse ${allStaffs ? "mm-show" : "extra"}`}>
                  <li className="aiz-side-nav-item">
                    <Link to="staffs" className="aiz-side-nav-link ">
                      <span className="aiz-side-nav-text">All staffs</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link to="roles" className="aiz-side-nav-link ">
                      <span className="aiz-side-nav-text">Staff permissions</span>
                    </Link>
                  </li>
                </ul>
              </li>


              {/* <li className="aiz-side-nav-item">
                <Link to="tracking-order" className="aiz-side-nav-link">
                  <i className="las la-shopping-cart aiz-side-nav-icon"></i>
                  <span className="aiz-side-nav-text">Tracking Order</span>
                </Link>
              </li> */}

              <li className="aiz-side-nav-item">
                <Link to="#" className="aiz-side-nav-link" onClick={() => { setAllStaff(!allStaff) }}>
                  <i className="las la-user-tie aiz-side-nav-icon" />
                  <span className="aiz-side-nav-text">Settings</span>
                  <span className="aiz-side-nav-arrow" />
                </Link>
                <ul className={`aiz-side-nav-list level-2 mm-collapse ${allStaff ? "mm-show" : "extra"}`}>
                  <li className="aiz-side-nav-item">
                    <Link to="system_settings" className="aiz-side-nav-link ">
                      <span className="aiz-side-nav-text">System Settings</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link to="offical-sell" className="aiz-side-nav-link ">
                      <span className="aiz-side-nav-text">offical-sell</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link to="custom_fields" className="aiz-side-nav-link ">
                      <span className="aiz-side-nav-text">Custom Fields</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link to="add_printer" className="aiz-side-nav-link ">
                      <span className="aiz-side-nav-text">Add Printer</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link to="list_pop" className="aiz-side-nav-link ">
                      <span className="aiz-side-nav-text">List Pop Ups</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link to="sms-templates" className="aiz-side-nav-link ">
                      <span className="aiz-side-nav-text">sms-templates</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link to="email_templates" className="aiz-side-nav-link ">
                      <span className="aiz-side-nav-text">email_templates</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link to="offical-sell" className="aiz-side-nav-link ">
                      <span className="aiz-side-nav-text">offical-sell</span>
                    </Link>
                  </li>


                  <li className="aiz-side-nav-item">
                    <Link className="aiz-side-nav-link" to="delivery-time-settings">
                      <span className="aiz-side-nav-text">Delivery Time Configuration</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item" >
                    <Link className="aiz-side-nav-link" to="marketplace-pre-order ">
                      <span className="aiz-side-nav-text"> Marketplace Preorder</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item" >
                    <Link className="aiz-side-nav-link" to="marketplace-event-ticket">
                      <span className="aiz-side-nav-text"> Marketplace Event Ticket System</span>
                    </Link>
                  </li>

                  <li className="aiz-side-nav-item" >
                    <Link className="aiz-side-nav-link" to="marketplace-validator">
                      <span className="aiz-side-nav-text"> Marketplace Zipcode Vaildator </span>
                    </Link>
                  </li>

                </ul>
              </li>

              {/* <li className="aiz-side-nav-item">
                <Link className="aiz-side-nav-link" to="" onClick={() => { setDeliveryTimeSetting(!deliveryTimeSettings) }}>
                  <i className="las la-user-tie aiz-side-nav-icon" />
                  <span className="aiz-side-nav-text">MarketPlace</span>
                  <span className="aiz-side-nav-arrow" />
                </Link>
                <ul className={`aiz-side-nav-list level-2 mm-collapse ${deliveryTimeSettings ? "mm-show" : "extra"}`}>
                  <li className="aiz-side-nav-item">
                    <Link className="aiz-side-nav-link" to="delivery-time-settings">
                      <span className="aiz-side-nav-text">Delivery Time Configuration</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item" >
                    <Link className="aiz-side-nav-link" to="marketplace-pre-order ">
                      <span className="aiz-side-nav-text"> Marketplace Preorder</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item" >
                    <Link className="aiz-side-nav-link" to="marketplace-event-ticket">
                      <span className="aiz-side-nav-text"> Marketplace Event Ticket System</span>
                    </Link>
                  </li>
                </ul>
              </li> */}


              <li className="aiz-side-nav-item">
                <Link to="#" className="aiz-side-nav-link" onClick={() => { setBooking(!booking) }}>
                  <i className="las la-user-tie aiz-side-nav-icon" />
                  <span className="aiz-side-nav-text">Logistics Operations</span>
                  <span className="aiz-side-nav-arrow" />
                </Link>
                <ul className={`aiz-side-nav-list level-2 mm-collapse ${booking ? "mm-show" : "extra"}`}>
                  <li className="aiz-side-nav-item">
                    <Link to="booking-list" className="aiz-side-nav-link ">
                      <span className="aiz-side-nav-text">Booking List</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link to="booking-entry" className="aiz-side-nav-link ">
                      <span className="aiz-side-nav-text">Booking Entry</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link to="menifest-list" className="aiz-side-nav-link ">
                      <span className="aiz-side-nav-text">Menifest List</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link to="menifest-entry" className="aiz-side-nav-link ">
                      <span className="aiz-side-nav-text">Menifest entry</span>
                    </Link>
                  </li>


                  <li className="aiz-side-nav-item">
                    <Link to="delivery-run-list" className="aiz-side-nav-link ">
                      <span className="aiz-side-nav-text">Parcel in Scan List</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link to="delivery-run-sheet" className="aiz-side-nav-link ">
                      <span className="aiz-side-nav-text">Parcel in Scan Entry</span>
                    </Link>
                  </li>


                  <li className="aiz-side-nav-item">
                    <Link to="delivery-run-list" className="aiz-side-nav-link ">
                      <span className="aiz-side-nav-text">Delivery Run Sheet List</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link to="delivery-run-sheet" className="aiz-side-nav-link ">
                      <span className="aiz-side-nav-text">Delivery Run Sheet Entry</span>
                    </Link>
                  </li>

                  <li className="aiz-side-nav-item">
                    <Link to="pod-list" className="aiz-side-nav-link ">
                      <span className="aiz-side-nav-text">POD List</span>
                    </Link>
                  </li>

                </ul>
              </li>

              <li className="aiz-side-nav-item">
                <Link to="#" className="aiz-side-nav-link" onClick={() => { setAssetModule(!assetModule) }}>
                  <i className="las la-user-tie aiz-side-nav-icon" />
                  <span className="aiz-side-nav-text">Request Module</span>
                  <span className="aiz-side-nav-arrow" />
                </Link>
                <ul className={`aiz-side-nav-list level-2 mm-collapse ${assetModule ? "mm-show" : "extra"}`}>
                  <li className="aiz-side-nav-item">
                    <Link to="asset-request" className="aiz-side-nav-link ">
                      <span className="aiz-side-nav-text">Asset Request</span>
                    </Link>
                  </li>
                  {/* <li className="aiz-side-nav-item">
                    <Link to="asset-issue" className="aiz-side-nav-link ">
                      <span className="labour-charge-type">Asset Issue</span>
                    </Link>
                  </li> */}

                </ul>
              </li>

              {/* {assests Dashboard start} */}

              <li className="aiz-side-nav-item">
                <Link to="#" className="aiz-side-nav-link" onClick={() => { setAssetDashboard(!assetDashboard) }}>
                  <i className="las la-user-tie aiz-side-nav-icon" />
                  <span className="aiz-side-nav-text">Assets Dashboard</span>
                  <span className="aiz-side-nav-arrow" />
                </Link>
                <ul className={`aiz-side-nav-list level-2 mm-collapse ${assetDashboard ? "mm-show" : "extra"}`}>
                  <li className="aiz-side-nav-item">
                    <Link to="assets-dashboard" className="aiz-side-nav-link ">
                      <span className="labour-charge-type">Assets Dashboard</span>
                    </Link>
                  </li>
                </ul>
              </li>

              {/* {assests Dashboard end} */}

              <li className="aiz-side-nav-item">
                <Link to="#" className="aiz-side-nav-link" onClick={() => { setAssetMaster(!assetMaster) }}>
                  <i className="las la-user-tie aiz-side-nav-icon" />
                  <span className="aiz-side-nav-text">Assets Management</span>
                  <span className="aiz-side-nav-arrow" />
                </Link>
                <ul className={`aiz-side-nav-list level-2 mm-collapse ${assetMaster ? "mm-show" : "extra"}`}>
                  <li className="aiz-side-nav-item">
                    <Link to="/admin/assets-dashboard/newasset-category" className="aiz-side-nav-link ">
                      <span className="labour-charge-type">Add New Asset </span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link to="asset-category" className="aiz-side-nav-link ">
                      <span className="aiz-side-nav-text"> Asset Categories List </span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link to="asset-sub-category" className="aiz-side-nav-link ">
                      <span className="aiz-side-nav-text"> Asset Sub Categories  </span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link to="asset-comments" className="aiz-side-nav-link ">
                      <span className="aiz-side-nav-text">Asset Comments  </span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link to="asset-status" className="aiz-side-nav-link ">
                      <span className="aiz-side-nav-text">Asset Status  </span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link to="assets-request-list" className="aiz-side-nav-link ">
                      <span className="aiz-side-nav-text">Assets Request List</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link to="#" className="aiz-side-nav-link ">
                      <span className="aiz-side-nav-text">Store Bin</span>
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="aiz-side-nav-item">
                <Link to="#" className="aiz-side-nav-link" onClick={() => { setComplaint(!complaint) }}>
                  <i className="las la-home aiz-side-nav-icon" />
                  <span className="aiz-side-nav-text">Complaint Dashboard</span>
                  <span className="aiz-side-nav-arrow" />
                </Link>
                <ul className={`aiz-side-nav-list level-2 mm-collapse ${complaint ? "mm-show" : "extra"}`}>
                  <li className="aiz-side-nav-item">
                    <Link to="employees-complaints-dashboard" className="aiz-side-nav-link ">
                      <span className="labour-charge-type">Employee's Complaints </span>
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="aiz-side-nav-item">
                <Link to="#" className="aiz-side-nav-link" onClick={() => { setdepartmentMaster(!departmentMaster) }}>
                  <i className="las la-user-tie aiz-side-nav-icon" />
                  <span className="aiz-side-nav-text">Manage Employee</span>
                  <span className="aiz-side-nav-arrow" />
                </Link>
                <ul className={`aiz-side-nav-list level-2 mm-collapse ${departmentMaster ? "mm-show" : "extra"}`}>
                  <li className="aiz-side-nav-item">
                    <Link to="department" className="aiz-side-nav-link ">
                      <span className="labour-charge-type">Department</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link to="sub-department" className="aiz-side-nav-link ">
                      <span className="aiz-side-nav-text"> Sub Department </span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link to="designation" className="aiz-side-nav-link ">
                      <span className="aiz-side-nav-text"> Designation </span>
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="aiz-side-nav-item">
                <Link className="aiz-side-nav-link" to="#" onClick={() => { setEtsySettings(!etsySettings) }}>
                  <i className="las la-user-tie aiz-side-nav-icon" />
                  <span className="aiz-side-nav-text">Etsy Managements</span>
                  <span className="aiz-side-nav-arrow" />
                </Link>
                <ul className={`aiz-side-nav-list level-2 mm-collapse ${etsySettings ? "mm-show" : "extra"}`}>
                  <li className="aiz-side-nav-item">
                    <Link className="aiz-side-nav-link" to="etsy-general-settings">
                      <span className="aiz-side-nav-text">Etsy General Settings</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link className="aiz-side-nav-link" to="etsy-account-list">
                      <span className="aiz-side-nav-text">Etsy Account List</span>
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="aiz-side-nav-item">
                <Link
                  className="aiz-side-nav-link"
                  to="#"
                  onClick={() => {
                    setAmazon(!amazon);
                  }}
                >
                  <i className="las la-user-tie aiz-side-nav-icon" />
                  <span className="aiz-side-nav-text">Amazon Connect</span>
                  <span className="aiz-side-nav-arrow" />
                </Link>
                <ul
                  className={`aiz-side-nav-list level-2 mm-collapse ${amazon ? "mm-show" : "extra"
                    }`}
                >
                  <li className="aiz-side-nav-item">
                    <Link className="aiz-side-nav-link " to="amazon-account-info">
                      <span className="aiz-side-nav-text">Amazon Store List</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link className="aiz-side-nav-link " to="new-amazon-account">
                      <span className="aiz-side-nav-text">
                        New Amazon Account
                      </span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link className="aiz-side-nav-link " to="pricing-rules">
                      <span className="aiz-side-nav-text">Pricing Rules</span>
                    </Link>
                  </li>

                  <li className="aiz-side-nav-item">
                    {/* <Link className="aiz-side-nav-link " to="attribute-map">
                      <span className="aiz-side-nav-text">Attribute Map</span>
                    </Link> */}
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link className="aiz-side-nav-link " to="category-map-export">
                      <span className="aiz-side-nav-text">
                        Category Map For Export
                      </span>
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="aiz-side-nav-item">
                <Link className="aiz-side-nav-link" to="#" onClick={() => { setDropship(!dropship) }}>
                  <i className="las la-user-tie aiz-side-nav-icon" />
                  <span className="aiz-side-nav-text">DropShip</span>
                  <span className="aiz-side-nav-arrow" />
                </Link>
                <ul className={`aiz-side-nav-list level-2 mm-collapse ${dropship ? "mm-show" : "extra"}`}>

                  <li className="aiz-side-nav-item">
                    <Link className="aiz-side-nav-link " to="drop-ship">
                      <span className="aiz-side-nav-text">Dropship Warehouse</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link className="aiz-side-nav-link " to="dropship-order">
                      <span className="aiz-side-nav-text">Dropship Order</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link className="aiz-side-nav-link " to="manage-shopping-rules">
                      <span className="aiz-side-nav-text">Manage Shopping Rule</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link className="aiz-side-nav-link " to="manage-dropship-product-upload">
                      <span className="aiz-side-nav-text">Manage Dropship Product Upload</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link className="aiz-side-nav-link " to="run-dropship-product-profile">
                      <span className="aiz-side-nav-text">Run Dropship Product Profile</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link className="aiz-side-nav-link " to="dropship-dataflow-profile">
                      <span className="aiz-side-nav-text"> Dropship Data flow Profile</span>
                    </Link>
                  </li>
                  {/* <li className="aiz-side-nav-item">
                    <Link className="aiz-side-nav-link " to="category-mapping">
                      <span className="aiz-side-nav-text"> Category Mapping</span>
                    </Link>
                  </li> */}
                </ul>
              </li>

              <li className="aiz-side-nav-item">
                <Link to="#" className="aiz-side-nav-link" onClick={() => { setChallan(!challan) }}>
                  <i className="las la-user-tie aiz-side-nav-icon" />
                  <span className="aiz-side-nav-text">Delivery Challan</span>
                  <span className="aiz-side-nav-arrow" />
                </Link>
                <ul className={`aiz-side-nav-list level-2 mm-collapse ${challan ? "mm-show" : "extra"}`}>
                  <li className="aiz-side-nav-item">
                    <Link to="add-delivery-challan" className="aiz-side-nav-link ">
                      <span className="labour-charge-type">Add Delivery Challan</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link to="list-delivery-challan" className="aiz-side-nav-link ">
                      <span className="aiz-side-nav-text"> List Delivery Challan </span>
                    </Link>
                  </li>

                </ul>
              </li>
              <li className="aiz-side-nav-item">
                <Link to="#" className="aiz-side-nav-link" onClick={() => { setAgreement(!agreement) }}>
                  <i className="las la-user-tie aiz-side-nav-icon" />
                  <span className="aiz-side-nav-text">Agreement</span>
                  <span className="aiz-side-nav-arrow" />
                </Link>
                <ul className={`aiz-side-nav-list level-2 mm-collapse ${agreement ? "mm-show" : "extra"}`}>
                  <li className="aiz-side-nav-item">
                    <Link to="AddAgreement" className="aiz-side-nav-link ">
                      <span className="labour-charge-type">Add Agreement</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link to="#" className="aiz-side-nav-link ">
                      <span className="aiz-side-nav-text">Agreement List</span>
                    </Link>
                  </li>

                </ul>
              </li>

              <li className="aiz-side-nav-item" >
                <Link to="#" className="aiz-side-nav-link" onClick={() => { setQuotation(!quotation) }} >
                  <i className="las la-user-tie aiz-side-nav-icon" />
                  <span className="aiz-side-nav-text">Serial wise Quotation</span>
                  <span className="aiz-side-nav-arrow" />
                </Link>
                <ul className={`aiz-side-nav-list level-2 mm-collapse ${quotation ? "mm-show" : "extra"}`}>
                  <li className="aiz-side-nav-item">
                    <Link to="list-vtech-quotation" className="aiz-side-nav-link ">
                      <span className="aiz-side-nav-text">List Serial wise Quotation</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link to="add-vtech-quotation" className="aiz-side-nav-link ">
                      <span className="aiz-side-nav-text">Add Serial wise Quotation</span>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="aiz-side-nav-item" >
                <Link to="#" className="aiz-side-nav-link" onClick={() => { setvpurchase(!vpurchase) }} >
                  <i className="las la-user-tie aiz-side-nav-icon" />
                  <span className="aiz-side-nav-text">Serial wise Purchase</span>
                  <span className="aiz-side-nav-arrow" />
                </Link>
                <ul className={`aiz-side-nav-list level-2 mm-collapse ${vpurchase ? "mm-show" : "extra"}`}>
                  <li className="aiz-side-nav-item">
                    <Link to="list-v-tech-purchase" className="aiz-side-nav-link ">
                      <span className="aiz-side-nav-text">List Serial wise Purchase</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link to="add-v-tech-purchase" className="aiz-side-nav-link ">
                      <span className="aiz-side-nav-text">Add Serial wise Purchase</span>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="aiz-side-nav-item" >
                <Link to="#" className="aiz-side-nav-link" onClick={() => { setvstock(!vstock) }} >
                  <i className="las la-user-tie aiz-side-nav-icon" />
                  <span className="aiz-side-nav-text">Serial wise Transfer stock</span>
                  <span className="aiz-side-nav-arrow" />
                </Link>
                <ul className={`aiz-side-nav-list level-2 mm-collapse ${vstock ? "mm-show" : "extra"}`}>
                  <li className="aiz-side-nav-item">
                    <Link to="list-v-tech-Transfer-stock" className="aiz-side-nav-link ">
                      <span className="aiz-side-nav-text">List Serial wise Transfer stock</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link to="add-v-tech-Transfer-stock" className="aiz-side-nav-link ">
                      <span className="aiz-side-nav-text">Add Serial wise Transfer stock</span>
                    </Link>
                  </li>
                </ul>
              </li>


              {/* nazim work */}
              <li className="aiz-side-nav-item">
                <Link className="aiz-side-nav-link" to='#' onClick={() => { setLeadFiters(!leadFilters) }}>
                  <i className="las la-user-tie aiz-side-nav-icon" />
                  <span className="aiz-side-nav-text">SI Lead Filters</span>
                  <span className="aiz-side-nav-arrow" />
                </Link>
                <ul className={`aiz-side-nav-list level-2 mm-collapse ${leadFilters ? "mm-show" : "extra"}`}>
                  <li className="aiz-side-nav-item">
                    <Link className="aiz-side-nav-link" to="lead-filters">
                      <span className="aiz-side-nav-text">Lead Filters</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link className="aiz-side-nav-link" to="lead-filters-template">
                      <span className="aiz-side-nav-text">Lead Filters Templates</span>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="aiz-side-nav-item">
                <Link className="aiz-side-nav-link" to="leads">
                  <i className="las la-user-tie aiz-side-nav-icon" />
                  <span className="aiz-side-nav-text">Leads</span>

                </Link>
              </li>
              <li className="aiz-side-nav-item">
                <Link className="aiz-side-nav-link" to="customer">
                  <i className="las la-user-tie aiz-side-nav-icon" />
                  <span className="aiz-side-nav-text">Customer</span>

                </Link>
              </li>

              <li className="aiz-side-nav-item">
                <Link className="aiz-side-nav-link " to="knowledge-base-crm">
                  <i className="las la-user-tie aiz-side-nav-icon" />
                  <span className="aiz-side-nav-text">Knowledge Base</span>
                </Link>
              </li>

              <li className="aiz-side-nav-item">
                <Link className="aiz-side-nav-link " to="add-prices">
                  <i className="las la-user-tie aiz-side-nav-icon" />
                  <span className="aiz-side-nav-text">Add Price</span>
                </Link>
              </li>

              <li className="aiz-side-nav-item">
                <Link className="aiz-side-nav-link " to="import-leads">
                  <i className="las la-user-tie aiz-side-nav-icon" />
                  <span className="aiz-side-nav-text">Import Leads</span>
                </Link>
              </li>
              <li className="aiz-side-nav-item">
                <Link className="aiz-side-nav-link " to="reminder-crm">
                  <i className="las la-user-tie aiz-side-nav-icon" />
                  <span className="aiz-side-nav-text">Reminder</span>
                </Link>
              </li>






              <li className="aiz-side-nav-item">
                <Link className="aiz-side-nav-link" to="#" onClick={() => { setSales2(!Sales2) }}>
                  <i className="las la-user-tie aiz-side-nav-icon" />
                  <span className="aiz-side-nav-text">Sales</span>
                  <span className="aiz-side-nav-arrow" />
                </Link>
                <ul className={`aiz-side-nav-list level-2 mm-collapse ${Sales2 ? "mm-show" : "extra"}`}>
                  <li className="aiz-side-nav-item">
                    <Link className="aiz-side-nav-link " to="proposal-sales">
                      <span className="aiz-side-nav-text">Proposal</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link className="aiz-side-nav-link " to="estimate-sales">
                      <span className="aiz-side-nav-text">Estimate</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link className="aiz-side-nav-link " to="task-crm">
                      <span className="aiz-side-nav-text">Task</span>
                    </Link>
                  </li>
                </ul>
              </li>



              <li className="aiz-side-nav-item" >
                <Link to="#" className="aiz-side-nav-link" onClick={() => { setrentVtech(!rentVtech) }} >
                  <i className="las la-user-tie aiz-side-nav-icon" />
                  <span className="aiz-side-nav-text">Vtech Rent Product</span>
                  <span className="aiz-side-nav-arrow" />
                </Link>
                <ul className={`aiz-side-nav-list level-2 mm-collapse ${rentVtech ? "mm-show" : "extra"}`}>
                  <li className="aiz-side-nav-item">
                    <Link to="v-tech-rent-product" className="aiz-side-nav-link ">
                      <span className="aiz-side-nav-text">Add Rent Product</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link to="rentProductList" className="aiz-side-nav-link ">
                      <span className="aiz-side-nav-text">Rent Product List</span>
                    </Link>
                  </li>
                </ul>
              </li>


              <li className="aiz-side-nav-item">
                <Link to="#" className="aiz-side-nav-link" onClick={() => { setReportMaster(!reportMaster) }}>
                  <i className="las la-user-tie aiz-side-nav-icon" />
                  <span className="aiz-side-nav-text">Report Master</span>
                  <span className="aiz-side-nav-arrow" />
                </Link>
                <ul className={`aiz-side-nav-list level-2 mm-collapse ${reportMaster ? "mm-show" : "extra"}`}>
                  <li className="aiz-side-nav-item">
                    <Link to="reports-status" className="aiz-side-nav-link ">
                      <span className="labour-charge-type">Report Status </span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link to="reports-allocations" className="aiz-side-nav-link ">
                      <span className="aiz-side-nav-text"> Asset Allocation </span>
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="aiz-side-nav-item">
                <Link className="aiz-side-nav-link" to="" onClick={() => { setCalls(!calls) }}>
                  <i className="las la-user-tie aiz-side-nav-icon" />
                  <span className="aiz-side-nav-text">Call Centre</span>
                  <span className="aiz-side-nav-arrow" />
                </Link>
                <ul className={`aiz-side-nav-list level-2 mm-collapse ${calls ? "mm-show" : "extra"}`}>

                  <li className="aiz-side-nav-item">
                    <Link className="aiz-side-nav-link" to="call-centre-dashboard">
                      <span className="aiz-side-nav-text">Call Centre Dashboard</span>
                    </Link>
                  </li>

                  <li className="aiz-side-nav-item">
                    <Link className="aiz-side-nav-link" to="add-new-calls">
                      <span className="aiz-side-nav-text">Add New Calls</span>
                    </Link>
                  </li>
                </ul>
              </li>

              {/* <li className="aiz-side-nav-item">
              <Link
                className="aiz-side-nav-link"
                to="#"
                onClick={() => {
                  setBillingBook(!billingBook);
                }}
              >
                <i className="las la-user-tie aiz-side-nav-icon" />
                <span className="aiz-side-nav-text">Billing Book</span>
                <span className="aiz-side-nav-arrow" />
              </Link>
              <ul
                className={`aiz-side-nav-list level-2 mm-collapse ${
                  billingBook ? "mm-show" : "extra"
                }`}
              >
                <li className="aiz-side-nav-item">
                  <Link
                    className="aiz-side-nav-link "
                    to="sales-tax-report"
                  >
                    <span className="aiz-side-nav-text">Sales Tax Report</span>
                  </Link>
                </li>
                <li className="aiz-side-nav-item">
                  <Link className="aiz-side-nav-link " to="purchase-tax-report">
                    <span className="aiz-side-nav-text">
                      Purchase Tax Report
                    </span>
                  </Link>
                </li>
                <li className="aiz-side-nav-item">
                  <Link
                    className="aiz-side-nav-link "
                    to="supplier-items-report"
                  >
                    <span className="aiz-side-nav-text">
                    Supplier Items Report
                    </span>
                  </Link>
                </li>
                <li className="aiz-side-nav-item">
                  <Link
                    className="aiz-side-nav-link "
                    to="sales-report"
                  >
                    <span className="aiz-side-nav-text">
                      {" "}
                      Sales Report
                    </span>
                  </Link>
                </li>
                <li className="aiz-side-nav-item">
                  <Link className="aiz-side-nav-link " to="sales-return-report">
                    <span className="aiz-side-nav-text"> Sales Return Report</span>
                  </Link>
                </li>
                <li className="aiz-side-nav-item">
                  <Link className="aiz-side-nav-link " to="seller-point-return">
                    <span className="aiz-side-nav-text"> Seller Points Return</span>
                  </Link>
                </li>
                <li className="aiz-side-nav-item">
                  <Link className="aiz-side-nav-link " to="purchase-report">
                    <span className="aiz-side-nav-text"> Purchase Report </span>
                  </Link>
                </li>
                <li className="aiz-side-nav-item">
                  <Link className="aiz-side-nav-link " to="purchase-return-report">
                    <span className="aiz-side-nav-text"> Purchase Return Report </span>
                  </Link>
                </li>
                <li className="aiz-side-nav-item">
                  <Link className="aiz-side-nav-link " to="expense-report">
                    <span className="aiz-side-nav-text"> Expense Report </span>
                  </Link>
                </li>
                <li className="aiz-side-nav-item">
                  <Link className="aiz-side-nav-link " to="stock-report">
                    <span className="aiz-side-nav-text"> Stock Report  </span>
                  </Link>
                </li>
                <li className="aiz-side-nav-item">
                  <Link className="aiz-side-nav-link " to="sales-item-report">
                    <span className="aiz-side-nav-text"> Sales Item report </span>
                  </Link>
                </li>
                <li className="aiz-side-nav-item">
                  <Link className="aiz-side-nav-link " to="return-item-report">
                    <span className="aiz-side-nav-text"> Return Items Report  </span>
                  </Link>
                </li>
              </ul>
            </li> */}

              <li className="aiz-side-nav-item">
                <Link className="aiz-side-nav-link" to='' onClick={() => { setMyToDo(!myToDo) }}>

                  <i className="las la-user-tie aiz-side-nav-icon" />
                  <span className="aiz-side-nav-text">My To Do</span>
                  <span className="aiz-side-nav-arrow" />
                </Link>
                <ul className={`aiz-side-nav-list level-2 mm-collapse ${myToDo ? "mm-show" : "extra"}`}>
                  <li className="aiz-side-nav-item">
                    <Link className="aiz-side-nav-link" to="to-do-list">
                      <span className="aiz-side-nav-text"> To Do List</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link className="aiz-side-nav-link" to="to-do-setting">
                      <span className="aiz-side-nav-text"> Settings</span>
                    </Link>
                  </li>


                </ul>
              </li>
              {/* <li className="aiz-side-nav-item">
                <Link className="aiz-side-nav-link" to="subscriptions">
                  <span className="aiz-side-nav-text"> Subscriptions </span>
                </Link>
              </li>
              <li className="aiz-side-nav-item">
                <Link className="aiz-side-nav-link" to='' onClick={() => { setReport(!report) }}>
                <i className="las la-user-tie aiz-side-nav-icon" />
                  <span className="aiz-side-nav-text">Report</span>
                  <span className="aiz-side-nav-arrow" />
                </Link>
                <ul className={`aiz-side-nav-list level-2 mm-collapse ${report ? "mm-show" : "extra"}`}>
                  <li className="aiz-side-nav-item">
                    <Link className="aiz-side-nav-link" to="profit-and-loss-report">
                      <span className="aiz-side-nav-text">Profit & Loss Report</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link className="aiz-side-nav-link" to="sales-and-payment-report">
                      <span className="aiz-side-nav-text">Sales & Payment Report</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link className="aiz-side-nav-link" to="customer-orders">
                      <span className="aiz-side-nav-text">Customer Orders</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link className="aiz-side-nav-link" to="gstr1-report">
                      <span className="aiz-side-nav-text">GSTR-1 Report</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link className="aiz-side-nav-link" to="gstr2-report">
                      <span className="aiz-side-nav-text">GSTR-2 Report</span>
                    </Link>
                  </li>
                </ul>
              </li> */}

              <li className="aiz-side-nav-item">
                <Link
                  className="aiz-side-nav-link"
                  to="#"
                  onClick={() => {
                    setSalesgstreport(!salesgstreport);
                  }}
                >
                  <i className="las la-user-tie aiz-side-nav-icon" />
                  <span className="aiz-side-nav-text">Reports</span>
                  <span className="aiz-side-nav-arrow" />
                </Link>
                <ul
                  className={`aiz-side-nav-list level-2 mm-collapse ${salesgstreport ? "mm-show" : "extra"
                    }`}
                >
                  <li className="aiz-side-nav-item">
                    <Link className="aiz-side-nav-link" to="serial-code-tracking">
                      <span className="aiz-side-nav-text">Serial Code tracking</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link className="aiz-side-nav-link" to="serial-wise-stock-report">
                      <span className="aiz-side-nav-text">Serial  wise stock report</span>
                    </Link>
                  </li>

                  <li className="aiz-side-nav-item">
                    <Link className="aiz-side-nav-link" to="sales-gst-report">
                      <span className="aiz-side-nav-text">Sales GST Report </span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link className="aiz-side-nav-link" to="purchase-gst-report">
                      <span className="aiz-side-nav-text">
                        Purchase GST Report{" "}
                      </span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link className="aiz-side-nav-link" to="sales-summary-report">
                      <span className="aiz-side-nav-text">
                        Sales Summary Report{" "}
                      </span>
                    </Link>
                  </li>{" "}
                  <li className="aiz-side-nav-item">
                    <Link
                      className="aiz-side-nav-link"
                      to="stock-transfer-report"
                    >
                      <span className="aiz-side-nav-text">
                        Stock Transfer Report{" "}
                      </span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link
                      className="aiz-side-nav-link"
                      to="sales-return-payments-report"
                    >
                      <span className="aiz-side-nav-text">
                        Sales Return Payments Report{" "}
                      </span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link
                      className="aiz-side-nav-link"
                      to="sales-payments-report"
                    >
                      <span className="aiz-side-nav-text">
                        Sales Payments Report{" "}
                      </span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link
                      className="aiz-side-nav-link"
                      to="purchase-payments-report"
                    >
                      <span className="aiz-side-nav-text">
                        Purchase Payments Report{" "}
                      </span>
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="aiz-side-nav-item">
                <Link
                  className="aiz-side-nav-link"
                  to="#"
                  onClick={() => {
                    setManufacturing(!manufacturing);
                  }}
                >
                  <i className="las la-user-tie aiz-side-nav-icon" />
                  <span className="aiz-side-nav-text">Manufacturing</span>
                  <span className="aiz-side-nav-arrow" />
                </Link>
                <ul
                  className={`aiz-side-nav-list level-2 mm-collapse ${manufacturing ? "mm-show" : "extra"
                    }`}
                >
                  <li className="aiz-side-nav-item">
                    <Link
                      className="aiz-side-nav-link "
                      to="bills-of-material"
                    >
                      <span className="aiz-side-nav-text">Bills of Materials</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link className="aiz-side-nav-link " to="routings">
                      <span className="aiz-side-nav-text">
                        Routings
                      </span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link
                      className="aiz-side-nav-link "
                      to="work-center"
                    >
                      <span className="aiz-side-nav-text">
                        Work Center
                      </span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link
                      className="aiz-side-nav-link "
                      to="manufacturing-order"
                    >
                      <span className="aiz-side-nav-text">
                        Manufacturing Order
                      </span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link className="aiz-side-nav-link " to="work-order">
                      <span className="aiz-side-nav-text"> Work Order</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link className="aiz-side-nav-link " to="settingmanufacture">
                      <span className="aiz-side-nav-text"> Setting</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link className="aiz-side-nav-link " to="purchase-report">
                      <span className="aiz-side-nav-text"> Purchase Report </span>
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="aiz-side-nav-item">
                <Link className="aiz-side-nav-link" to='' onClick={() => { setHrRecord(!hrRecords) }}>

                  <i className="las la-user-tie aiz-side-nav-icon" />
                  <span className="aiz-side-nav-text">HR RECORDS</span>
                  <span className="aiz-side-nav-arrow" />
                </Link>
                <ul className={`aiz-side-nav-list level-2 mm-collapse ${hrRecords ? "mm-show" : "extra"}`}>
                  <li className="aiz-side-nav-item">
                    <Link className="aiz-side-nav-link" to="job-descriptions">
                      <span className="aiz-side-nav-text"> Job Descriptions</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link className="aiz-side-nav-link" to="org-chart">
                      <span className="aiz-side-nav-text"> Org Chart</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link className="aiz-side-nav-link" to="onboarding">
                      <span className="aiz-side-nav-text"> Onboarding</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link className="aiz-side-nav-link" to="hr-records">
                      <span className="aiz-side-nav-text">Hr Records</span>
                    </Link>
                  </li>
                </ul>
              </li>




              <li className="aiz-side-nav-item">
                <Link
                  className="aiz-side-nav-link"
                  to="#"
                  onClick={() => {
                    setBillingBook(!billingBook);
                  }}
                >
                  <i className="las la-user-tie aiz-side-nav-icon" />
                  <span className="aiz-side-nav-text">Billing Book</span>
                  <span className="aiz-side-nav-arrow" />
                </Link>
                <ul
                  className={`aiz-side-nav-list level-2 mm-collapse ${billingBook ? "mm-show" : "extra"
                    }`}
                >
                  <li className="aiz-side-nav-item">
                    <Link
                      className="aiz-side-nav-link "
                      to="sales-tax-report"
                    >
                      <span className="aiz-side-nav-text">Sales Tax Report</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link className="aiz-side-nav-link " to="purchase-tax-report">
                      <span className="aiz-side-nav-text">
                        Purchase Tax Report
                      </span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link
                      className="aiz-side-nav-link "
                      to="supplier-items-report"
                    >
                      <span className="aiz-side-nav-text">
                        Supplier Items Report
                      </span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link
                      className="aiz-side-nav-link "
                      to="sales-report"
                    >
                      <span className="aiz-side-nav-text">
                        {" "}
                        Sales Report
                      </span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link className="aiz-side-nav-link " to="sales-return-report">
                      <span className="aiz-side-nav-text"> Sales Return Report</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link className="aiz-side-nav-link " to="seller-point-return">
                      <span className="aiz-side-nav-text"> Seller Points Return</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link className="aiz-side-nav-link " to="purchase-report">
                      <span className="aiz-side-nav-text"> Purchase Report </span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link className="aiz-side-nav-link " to="purchase-return-report">
                      <span className="aiz-side-nav-text"> Purchase Return Report </span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link className="aiz-side-nav-link " to="expense-report">
                      <span className="aiz-side-nav-text"> Expense Report </span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link className="aiz-side-nav-link " to="stock-report">
                      <span className="aiz-side-nav-text"> Stock Report  </span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link className="aiz-side-nav-link " to="sales-item-report">
                      <span className="aiz-side-nav-text"> Sales Item report </span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link className="aiz-side-nav-link " to="return-item-report">
                      <span className="aiz-side-nav-text"> Return Items Report  </span>
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="aiz-side-nav-item">
                <Link
                  className="aiz-side-nav-link"
                  to="#"
                  onClick={() => {
                    setAccounts(!Accounts);
                  }}
                >
                  <i className="las la-user-tie aiz-side-nav-icon" />
                  <span className="aiz-side-nav-text">Accounts</span>
                  <span className="aiz-side-nav-arrow" />
                </Link>
                <ul
                  className={`aiz-side-nav-list level-2 mm-collapse ${Accounts ? "mm-show" : "extra"
                    }`}
                >
                  <li className="aiz-side-nav-item">
                    <Link className="aiz-side-nav-link " to="account-dashbord">
                      <span className="aiz-side-nav-text">
                        Accounts Dashboard
                      </span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link className="aiz-side-nav-link " to="accounts">
                      <span className="aiz-side-nav-text">
                        Chart Of Accounts
                      </span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link className="aiz-side-nav-link " to="accounts-group">
                      <span className="aiz-side-nav-text">
                        Chart Of Accounts group
                      </span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link className="aiz-side-nav-link " to="groups">
                      <span className="aiz-side-nav-text">
                        Accounts groups
                      </span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link className="aiz-side-nav-link " to="add-ledgers">
                      <span className="aiz-side-nav-text">
                        Add Ledgers
                      </span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link className="aiz-side-nav-link " to="list-ledgers">
                      <span className="aiz-side-nav-text">
                        List Ledgers
                      </span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link className="aiz-side-nav-link " to="reports-ledgers">
                      <span className="aiz-side-nav-text">
                        Ledgers Reports
                      </span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link className="aiz-side-nav-link " to="add-group">
                      <span className="aiz-side-nav-text">
                        Add Group
                      </span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link className="aiz-side-nav-link " to="list-group">
                      <span className="aiz-side-nav-text list-voucher">
                        List Group
                      </span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link className="aiz-side-nav-link " to="reports-group">
                      <span className="aiz-side-nav-text list-voucher">
                        Group Reports
                      </span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link className="aiz-side-nav-link " to="add-voucher">
                      <span className="aiz-side-nav-text">
                        Add Voucher
                      </span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link className="aiz-side-nav-link " to="list-voucher">
                      <span className="aiz-side-nav-text">
                        List Voucher
                      </span>
                    </Link>
                  </li>




                  <li className="aiz-side-nav-item">
                    <Link className="aiz-side-nav-link " to="day_book">
                      <span className="aiz-side-nav-text">
                        Day Book
                      </span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link className="aiz-side-nav-link " to="cash_book">
                      <span className="aiz-side-nav-text">
                        Cash Book

                      </span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link className="aiz-side-nav-link " to="bank_book">
                      <span className="aiz-side-nav-text">
                        Bank Book

                      </span>
                    </Link>
                  </li>











                  {idShow == '642177b99fd9c29aab59d245' && <>
                    <li className="aiz-side-nav-item">
                      <Link className="aiz-side-nav-link " to="add-company">
                        <span className="aiz-side-nav-text list-voucher">
                          Add Company
                        </span>
                      </Link>
                    </li>
                    <li className="aiz-side-nav-item">
                      <Link className="aiz-side-nav-link " to="list-company">
                        <span className="aiz-side-nav-text list-voucher">
                          List Company
                        </span>
                      </Link>
                    </li>
                  </>}
                  <li className="aiz-side-nav-item">
                    <Link className="aiz-side-nav-link " to="coast-centre-create">
                      <span className="aiz-side-nav-text">Create Cost Centre</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link className="aiz-side-nav-link " to="cost-centre">
                      <span className="aiz-side-nav-text">List Cost Centre</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link className="aiz-side-nav-link " to="coast-centre-category-create">
                      <span className="aiz-side-nav-text">Create Cost Centre category</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link className="aiz-side-nav-link " to="coast-centre-category">
                      <span className="aiz-side-nav-text">List Cost Centre category</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link className="aiz-side-nav-link " to="budget-create">
                      <span className="aiz-side-nav-text">Create Budget</span>
                    </Link>
                  </li>
                  {/* <li className="aiz-side-nav-item">
                    <Link className="aiz-side-nav-link " to="budgets">
                      <span className="aiz-side-nav-text">Budgets List</span>
                    </Link>
                  </li> */}
                  <li className="aiz-side-nav-item">
                    <Link className="aiz-side-nav-link " to="vouchertype/create">
                      <span className="aiz-side-nav-text">create Voucher Type</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link className="aiz-side-nav-link " to="vouchertypes">
                      <span className="aiz-side-nav-text">Voucher Type List</span>
                    </Link>
                  </li>
                  {/* <li className="aiz-side-nav-item">
                    <Link className="aiz-side-nav-link " to="#">
                      <span className="aiz-side-nav-text list-voucher">
                       List Voucher 
                      </span>
                    </Link>
                  </li> */}
                  <li className="aiz-side-nav-item">
                    <Link className="aiz-side-nav-link " to="report">
                      <span className="aiz-side-nav-text list-voucher">
                        Report
                      </span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link className="aiz-side-nav-link " to="setting">
                      <span className="aiz-side-nav-text list-voucher">
                        Setting
                      </span>
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="aiz-side-nav-item">
                <Link
                  className="aiz-side-nav-link"
                  to="#"
                  onClick={() => {
                    settimeslote(!timeslote);
                  }}
                >

                  <i className="las la-user-tie aiz-side-nav-icon" />
                  <span className="aiz-side-nav-text">Time Slot</span>
                  <span className="aiz-side-nav-arrow" />
                </Link>
                <ul
                  className={`aiz-side-nav-list level-2 mm-collapse ${timeslote ? "mm-show" : "extra"
                    }`}
                >
                  <li className="aiz-side-nav-item">
                    <Link className="aiz-side-nav-link" to="time-slote">
                      <span className="aiz-side-nav-text">Time Slote</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link className="aiz-side-nav-link" to="time-group">
                      <span className="aiz-side-nav-text">Time Group</span>
                    </Link>
                  </li>

                </ul>
              </li>
              <li className="aiz-side-nav-item">
                <Link
                  className="aiz-side-nav-link"
                  to="#"
                  onClick={() => {
                    setAllTasks(!alltasks);
                  }}
                >
                  <span className="aiz-side-nav-text">Field Service</span>
                </Link>
                <ul
                  className={`aiz-side-nav-list level-2 mm-collapse ${alltasks ? "mm-show" : "extra"
                    }`}
                >
                  <li className="aiz-side-nav-item">
                    <Link className="aiz-side-nav-link" to="all-tasks">
                      <span className="aiz-side-nav-text">All Tasks</span>
                    </Link>
                  </li>{" "}
                  <li className="aiz-side-nav-item">
                    <Link className="aiz-side-nav-link" to="to-schedule">
                      <span className="aiz-side-nav-text">To Schedule</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link className="aiz-side-nav-link" to="to-invoice">
                      <span className="aiz-side-nav-text">To Invoice</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link className="aiz-side-nav-link" to="my-tasks">
                      <span className="aiz-side-nav-text">My Tasks</span>
                    </Link>
                  </li>{" "}
                  <li className="aiz-side-nav-item">
                    <Link className="aiz-side-nav-link" to="by-user">
                      <span className="aiz-side-nav-text">By User</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link className="aiz-side-nav-link" to="tasks-analysis">
                      <span className="aiz-side-nav-text">Tasks Analysis</span>
                    </Link>
                  </li>
                </ul>
              </li>




              <li className="aiz-side-nav-item">
                <Link
                  className="aiz-side-nav-link"
                  to="#"
                  onClick={() => {
                    setTraining(!training);
                  }}
                >

                  <i className="las la-user-tie aiz-side-nav-icon" />
                  <span className="aiz-side-nav-text">HR Records</span>
                  <span className="aiz-side-nav-arrow" />
                </Link>
                <ul
                  className={`aiz-side-nav-list level-2 mm-collapse ${training ? "mm-show" : "extra"
                    }`}
                >
                  <li className="aiz-side-nav-item">
                    <Link className="aiz-side-nav-link" to="training">
                      <span className="aiz-side-nav-text">Training</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link className="aiz-side-nav-link" to="contract">
                      <span className="aiz-side-nav-text">Contracts</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link className="aiz-side-nav-link" to="dependant">
                      <span className="aiz-side-nav-text">Dependant</span>
                    </Link>
                  </li>

                </ul>
              </li>







              <li className="aiz-side-nav-item">
                <Link className="aiz-side-nav-link" to='' onClick={() => { setSales(!Sales) }}>
                  <i className="las la-user-tie aiz-side-nav-icon" />
                  <span className="aiz-side-nav-text">Sales</span>
                  <span className="aiz-side-nav-arrow" />

                </Link>
                <ul className={`aiz-side-nav-list level-2 mm-collapse ${Sales ? "mm-show" : "extra"}`}>
                  <li className="aiz-side-nav-item">
                    <Link className="aiz-side-nav-link" to="sales">
                      <span className="aiz-side-nav-text"> Sales</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link className="aiz-side-nav-link" to="product">
                      <span className="aiz-side-nav-text"> Product</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link className="aiz-side-nav-link" to="point-of-sale">
                      <span className="aiz-side-nav-text"> Point Of Sale</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link className="aiz-side-nav-link" to="rental">
                      <span className="aiz-side-nav-text"> Rental</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link className="aiz-side-nav-link" to="subscrip">
                      <span className="aiz-side-nav-text"> Subscriptons</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link className="aiz-side-nav-link" to="salesperson">
                      <span className="aiz-side-nav-text"> Sales Person</span>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="aiz-side-nav-item">
                <Link className="aiz-side-nav-link" to='' onClick={() => { setLeads(!leads) }}>

                  <i className="las la-user-tie aiz-side-nav-icon" />
                  <span className="aiz-side-nav-text">CRM</span>
                  <span className="aiz-side-nav-arrow" />
                </Link>
                <ul className={`aiz-side-nav-list level-2 mm-collapse ${leads ? "mm-show" : "extra"}`}>
                  <li className="aiz-side-nav-item">
                    <Link className="aiz-side-nav-link" to="lead-crm">
                      <span className="aiz-side-nav-text"> Leads</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link className="aiz-side-nav-link" to="pipeline">
                      <span className="aiz-side-nav-text"> Pipeline</span>
                    </Link>
                  </li>

                </ul>
              </li>
              <li className="aiz-side-nav-item">
                <Link className="aiz-side-nav-link" to='' onClick={() => { setFinanace(!finanace) }}>


                  <i className="las la-user-tie aiz-side-nav-icon" />
                  <span className="aiz-side-nav-text">FINANCE</span>
                  <span className="aiz-side-nav-arrow" />
                </Link>
                <ul className={`aiz-side-nav-list level-2 mm-collapse ${finanace ? "mm-show" : "extra"}`}>
                  <li className="aiz-side-nav-item">
                    <Link className="aiz-side-nav-link" to="accounting">
                      <span className="aiz-side-nav-text">Accounting</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link className="aiz-side-nav-link" to="invoicing">
                      <span className="aiz-side-nav-text">Invoicing</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link className="aiz-side-nav-link" to="benchmark">
                      <span className="aiz-side-nav-text">Benchmark</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link className="aiz-side-nav-link" to="expenses">
                      <span className="aiz-side-nav-text">Expenses</span>
                    </Link>
                  </li>


                </ul>
              </li>
              <li className="aiz-side-nav-item">
                <Link className="aiz-side-nav-link" to='' onClick={() => { setLogistic(!logistic) }}>

                  <i className="las la-user-tie aiz-side-nav-icon" />
                  <span className="aiz-side-nav-text">Logistics</span>
                  <span className="aiz-side-nav-arrow" />
                </Link>
                <ul className={`aiz-side-nav-list level-2 mm-collapse ${logistic ? "mm-show" : "extra"}`}>
                  <li className="aiz-side-nav-item">
                    <Link className="aiz-side-nav-link" to="purchase ">
                      <span className="aiz-side-nav-text">Purchase</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link className="aiz-side-nav-link" to="venders ">
                      <span className="aiz-side-nav-text">Vendors</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link className="aiz-side-nav-link" to="inventory ">
                      <span className="aiz-side-nav-text">Inventory On Hand</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link className="aiz-side-nav-link" to="inventory-flow ">
                      <span className="aiz-side-nav-text">Inventory Flow</span>
                    </Link>
                  </li>

                </ul>
              </li>




              <li className="aiz-side-nav-item">
                <Link
                  className="aiz-side-nav-link"
                  to="#"
                  onClick={() => {
                    setProjectDash(!projectDash);
                  }}
                >
                  <i className="las la-user-tie aiz-side-nav-icon" />
                  <span className="aiz-side-nav-text">Project Dashboard</span>
                  <span className="aiz-side-nav-arrow" />
                </Link>
                <ul
                  className={`aiz-side-nav-list level-2 mm-collapse ${projectDash ? "mm-show" : "extra"
                    }`}
                >
                  <li className="aiz-side-nav-item">
                    <Link
                      className="aiz-side-nav-link "
                      to="task-project-dash"
                    >
                      <span className="aiz-side-nav-text">Task</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link className="aiz-side-nav-link " to="report-exl">
                      <span className="aiz-side-nav-text">
                        Report Exl
                      </span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link className="aiz-side-nav-link " to="report-exl2s">
                      <span className="aiz-side-nav-text">
                        Report Exl2
                      </span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link className="aiz-side-nav-link " to="fareenas">
                      <span className="aiz-side-nav-text">
                        Fareenas
                      </span>
                    </Link>
                  </li>

                </ul>
              </li>





              <li className="aiz-side-nav-item">
                <Link to="#" className="aiz-side-nav-link" onClick={() => { setReportMaster(!reportMaster) }}>
                  <i className="las la-user-tie aiz-side-nav-icon" />
                  <span className="aiz-side-nav-text">CRM</span>
                  <span className="aiz-side-nav-arrow" />
                </Link>
                <ul className={`aiz-side-nav-list level-2 mm-collapse ${reportMaster ? "mm-show" : "extra"}`}>
                  <li className="aiz-side-nav-item">
                    <Link to="staffs-new" className="aiz-side-nav-link ">
                      <span className="labour-charge-type">staffs-new</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link to="dashboard-crm" className="aiz-side-nav-link ">
                      <span className="labour-charge-type">CRM Dashboard</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link to="reminder-dash" className="aiz-side-nav-link ">
                      <span className="labour-charge-type">Recruitment Dashboard</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link to="project" className="aiz-side-nav-link ">
                      <span className="aiz-side-nav-text">Project</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link to="task-crm" className="aiz-side-nav-link ">
                      <span className="aiz-side-nav-text">Tasks </span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link to="#" className="aiz-side-nav-link ">
                      <span className="aiz-side-nav-text">Shift</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link to="#" className="aiz-side-nav-link ">
                      <span className="aiz-side-nav-text"> Contact </span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link to="#" className="aiz-side-nav-link ">
                      <span className="aiz-side-nav-text"> Company </span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link to="#" className="aiz-side-nav-link ">
                      <span className="aiz-side-nav-text">Opportunity </span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link to="#" className="aiz-side-nav-link ">
                      <span className="aiz-side-nav-text">Quotes </span>
                    </Link>
                  </li>

                  <li className="aiz-side-nav-item">
                    <Link to="#" className="aiz-side-nav-link ">
                      <span className="aiz-side-nav-text"> CRM Others</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link to="#" className="aiz-side-nav-link ">
                      <span className="aiz-side-nav-text"> Setup</span>
                    </Link>
                  </li>
                </ul>
              </li>


            </ul>{/* .aiz-side-nav */}

          </div>{/* .aiz-side-nav-wrap */}
        </div>

      </>
    )
  }
  else {
    return (
      <>
        <div className="aiz-sidebar left c-scrollbar c-scrollbar-2" style={{ backgroundColor: "#e1e1db" }}>
          <div className="aiz-side-nav-logo-wrap">
            <a href="https://mmslfashions.in/admin" className="d-block text-left">
              {/* <img className="mw-100" src={"https://mmslfashions.in/public/assets/img/logo.png"} alt /> */}
            </a>
          </div>
          <div className="aiz-side-nav-wrap">
            <div className="px-20px mb-3">
              <input className="form-control bg-soft-secondary border-0 form-control-sm text-white" type="text" placeholder="Search in menu" id="menu-search" fdprocessedid="axe2ae" />
            </div>
            <ul className="aiz-side-nav-list" id="search-menu">
            </ul>
            <ul className="aiz-side-nav-list metismenu" id="main-menu" data-toggle="aiz-side-menu">



              <li className="aiz-side-nav-item">
                <Link to="" className="aiz-side-nav-link ">
                  <span className="aiz-side-nav-text">Dashboard</span>
                </Link>
              </li>

              <li className="aiz-side-nav-item">
                <Link to="assign_order" className="aiz-side-nav-link ">
                  <span className="aiz-side-nav-text">Assign Orders List</span>
                </Link>
              </li>


              {data && data.map((item) => {
                if (item.orderStatusName === 'Pending' || item.orderStatusName === 'Delivered' || item.orderStatusName === 'Cancelled' || item.orderStatusName === 'Rejected') {
                  return <li key={item._id} className="aiz-side-nav-item" onClick={() => window.localStorage.setItem('orderName', item.orderStatusName)}>
                    <Link to={`assign_orders/status/${item._id}`} className="aiz-side-nav-link">
                      <span className="aiz-side-nav-text">Assign {item.orderStatusName}</span>
                    </Link>
                  </li>
                }
              })}




              {isLoading && <div className="preloaderCount">
                <div className="spinner-border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>}



              {/* <li className="aiz-side-nav-item">
                <Link to="inhouse-orders" className="aiz-side-nav-link ">
                  <span className="aiz-side-nav-text">Inhouse orders</span>
                </Link>
              </li> */}

              {/* <li className="aiz-side-nav-item">
                <Link to="seller-orders" className="aiz-side-nav-link ">
                  <span className="aiz-side-nav-text">Seller Orders</span>
                </Link>
              </li> */}


              <li className="aiz-side-nav-item" onClick={() => window.localStorage.setItem('orderName', 'All Pick-up Point Order')}>
                <Link to="orders_by_pickup_point" className="aiz-side-nav-link ">
                  <span className="aiz-side-nav-text" style={{ fontSize: "15px", color: "indigo" }}>All Pick-up Point Order</span>
                </Link>
              </li>


              {data && data.map((item) => {
                if (item.orderStatusName === 'Pending' || item.orderStatusName === 'Delivered' || item.orderStatusName === 'Cancelled' || item.orderStatusName === 'Rejected') {
                  return <li key={item._id} className="aiz-side-nav-item" onClick={() => window.localStorage.setItem('orderName', item.orderStatusName)}>
                    <Link to={`orders/status/${item._id}`} className="aiz-side-nav-link">
                      <span className="aiz-side-nav-text">{item.orderStatusName}</span>
                    </Link>
                  </li>
                }
              })}


              <li className="aiz-side-nav-item">
                <Link to="#" className="aiz-side-nav-link" onClick={() => { setDeliveryBoy(!deliveryBoy) }}>
                  <i className="las la-shopping-cart aiz-side-nav-icon" />
                  <span className="aiz-side-nav-text">Delivery Boy</span>
                  <span className="aiz-side-nav-arrow" />
                </Link>
                <ul className={`aiz-side-nav-list level-2 mm-collapse ${deliveryBoy ? "mm-show" : "extra"}`} id="product">
                  <li className="aiz-side-nav-item">
                    <Link to="delivery-boys" className="aiz-side-nav-link ">
                      <span className="aiz-side-nav-text">Delivery Boys</span>
                    </Link>
                  </li>

                  <li className="aiz-side-nav-item">
                    <Link to="/admin/delivery-boys/create" className="aiz-side-nav-link ">
                      <span className="aiz-side-nav-text">Add New Delivery Boys</span>
                    </Link>
                  </li>

                </ul>
              </li>

              <li className="aiz-side-nav-item">
                <Link to="#" className="aiz-side-nav-link" onClick={() => { setSupports(!supports) }}>
                  <i className="las la-shopping-cart aiz-side-nav-icon" />
                  <span className="aiz-side-nav-text">Supports</span>
                  <span className="aiz-side-nav-arrow" />
                </Link>
                <ul className={`aiz-side-nav-list level-2 mm-collapse ${supports ? "mm-show" : "extra"}`} id="product">
                  <li className="aiz-side-nav-item">
                    <Link to="add-ticket" className="aiz-side-nav-link ">
                      <span className="aiz-side-nav-text">Add Ticket</span>
                    </Link>
                  </li>

                  <li className="aiz-side-nav-item">
                    <Link to="staff-ticket-list" className="aiz-side-nav-link ">
                      <span className="aiz-side-nav-text">Staff Ticket List</span>
                    </Link>
                  </li>

                </ul>
              </li>


              <li className="aiz-side-nav-item">
                <Link to="#" className="aiz-side-nav-link" onClick={() => { setAssetMaster(!assetMaster) }}>
                  <i className="las la-user-tie aiz-side-nav-icon" />
                  <span className="aiz-side-nav-text">Assets Management</span>
                  <span className="aiz-side-nav-arrow" />
                </Link>
                <ul className={`aiz-side-nav-list level-2 mm-collapse ${assetMaster ? "mm-show" : "extra"}`}>
                  <li className="aiz-side-nav-item">
                    <Link to="my-assets" className="aiz-side-nav-link ">
                      <span className="labour-charge-type">My Assets </span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link to="add-assets-request" className="aiz-side-nav-link ">
                      <span className="labour-charge-type">Add Assets Request</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link to="my-assets-request-list" className="aiz-side-nav-link ">
                      <span className="labour-charge-type">My Assets Request List</span>
                    </Link>
                  </li>
                  {/* <li className="aiz-side-nav-item">
                    <Link to="/admin/assets-dashboard/newasset-category" className="aiz-side-nav-link ">
                      <span className="labour-charge-type">Add New Asset </span>
                    </Link>
                  </li> */}

                  {/* <li className="aiz-side-nav-item">
                    <Link to="asset-category" className="aiz-side-nav-link ">
                      <span className="aiz-side-nav-text"> Asset Categories List </span>
                    </Link>
                  </li> */}
                  {/* <li className="aiz-side-nav-item">
                    <Link to="asset-sub-category" className="aiz-side-nav-link ">
                      <span className="aiz-side-nav-text"> Asset Sub Categories  </span>
                    </Link>
                  </li> */}
                  {/* <li className="aiz-side-nav-item">
                    <Link to="asset-comments" className="aiz-side-nav-link ">
                      <span className="aiz-side-nav-text">Asset Comments  </span>
                    </Link>
                  </li> */}
                  {/* <li className="aiz-side-nav-item">
                    <Link to="asset-status" className="aiz-side-nav-link ">
                      <span className="aiz-side-nav-text">Asset Status  </span>
                    </Link>
                  </li> */}
                  {/* <li className="aiz-side-nav-item">
                    <Link to="#" className="aiz-side-nav-link ">
                      <span className="aiz-side-nav-text">Store Bin</span>
                    </Link>
                  </li> */}
                </ul>
              </li>


              {/* 
              {data && data.map((item) => {
                if (item.orderStatusName === 'Pending' || item.orderStatusName === 'Delivered' || item.orderStatusName === 'Canceled' || item.orderStatusName === 'Rejected') {
                  return <li key={item._id} className="aiz-side-nav-item" onClick={() => window.localStorage.setItem('orderName', item.orderStatusName)}>
                    <Link to={`orders/PickupPints/${item._id}`} className="aiz-side-nav-link">
                      <span className="aiz-side-nav-text">{item.orderStatusName}</span>
                    </Link>
                  </li>
                }

              })} */}

              {isLoadingPick && <div className="preloaderCount">
                <div className="spinner-border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>}

              {/* Staffs */}

              {/* <li className="aiz-side-nav-item">
                <Link to="#" className="aiz-side-nav-link" onClick={() => { setAllStaffs(!allStaffs) }}>
                  <i className="las la-user-tie aiz-side-nav-icon" />
                  <span className="aiz-side-nav-text">Staffs</span>
                  <span className="aiz-side-nav-arrow" />
                </Link>
                <ul className={`aiz-side-nav-list level-2 mm-collapse ${allStaffs ? "mm-show" : "extra"}`}>
                  <li className="aiz-side-nav-item">
                    <Link to="staffs" className="aiz-side-nav-link ">
                      <span className="aiz-side-nav-text">All staffs</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link to="roles" className="aiz-side-nav-link ">
                      <span className="aiz-side-nav-text">Staff permissions</span>
                    </Link>
                  </li>
                </ul>
              </li> */}



              {/* {shoaib code} */}




            </ul>{/* .aiz-side-nav */}
          </div>{/* .aiz-side-nav-wrap */}
        </div>

      </>
    )
  }



}
export default AsideAdmin