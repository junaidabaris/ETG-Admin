import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function DashboardAdminComp() {
  const [users, setusers] = useState(null)
  const [orders, setOrders] = useState(null)
  const [category, setCategory] = useState(null)
  const [product, setProduct] = useState(null)
  const [sellerList, setSellerList] = useState(null)
  const [pickuppoints, setPickuppoints] = useState(null)
  const [delivered, setDelivered] = useState(null)
  const [Rejected, setRejected] = useState(null)
  const [Pending, setPending] = useState(null)
  const [Cancel, setCancel] = useState(null)
  const [activeCoupen, setactiveCoupen] = useState(null)
  const [coupens, setcoupens] = useState(null)
  const [customer, setCus] = useState(null);
  const [allDashboardData, setAllDashboardData] = useState(null);


  const isLoginPickup = window.localStorage.getItem('isPickupManagerLogin')
  const isSellerLogin = window.localStorage.getItem('isSellerLogin')
  const isSellerId = window.localStorage.getItem('isSellerId')
  const isDelevery = window.localStorage.getItem('isDeleveryBoy')
  const DeleveryBoyId = window.localStorage.getItem('DeleveryBoyId')

  const getAllDeta = async () => {

    const user = await axios.get(`https://onlineparttimejobs.in/api/user/count`)
    setusers(user.data)

    const order = await axios.get(`https://onlineparttimejobs.in/api/order/count`)
    setOrders(order.data)

    const catagary = await axios.get(`https://onlineparttimejobs.in/api/category/count`)
    setCategory(catagary.data)

    const product = await axios.get(`https://onlineparttimejobs.in/api/product/count`)
    setProduct(product.data)

    const sellers = await axios.get(`https://onlineparttimejobs.in/api/sellerList/count`)
    setSellerList(sellers.data)

    const pickups = await axios.get(`https://onlineparttimejobs.in/api/pickuppoints/count`)
    setPickuppoints(pickups.data)

    const delever = await axios.get(`https://onlineparttimejobs.in/api/order/delivered/count`)
    setDelivered(delever.data)

    const Rejected = await axios.get(`https://onlineparttimejobs.in/api/order/rejected/count`)
    setRejected(Rejected.data)

    const Pending = await axios.get(`https://onlineparttimejobs.in/api/order/pending/count`)
    setPending(Pending.data)

    const Cancel = await axios.get(`https://onlineparttimejobs.in/api/order/cancel/count`)
    setCancel(Cancel.data)

    const activeCoupen = await axios.get(`https://onlineparttimejobs.in/api/coupons/active/count`)
    setactiveCoupen(activeCoupen.data)

    const coupens = await axios.get(`https://onlineparttimejobs.in/api/coupons/active/count`)
    setcoupens(coupens.data)

    const dashboardData = await axios.get('https://onlineparttimejobs.in/api/report/dashboard')
    setAllDashboardData(dashboardData.data)


  }


  const getAllisSellerData = async () => {

    const user = await axios.get(`https://onlineparttimejobs.in/api/user/count`)
    setusers(user.data)

    // const order = await axios.get(`https://onlineparttimejobs.in/api/order/pickup/count/${isSellerId}`)
    // setOrders(order.data)

    // const delever = await axios.get(`https://onlineparttimejobs.in/api/order/pickupPoint/delivered/count/${isSellerId}`)
    // setDelivered(delever.data)

    // const Rejected = await axios.get(`https://onlineparttimejobs.in/api/order/pickupPoint/rejected/count/${isSellerId}`)
    // setRejected(Rejected.data)

    // const Pending = await axios.get(`https://onlineparttimejobs.in/api/order/pickupPoint/pending/count/${isSellerId}`)
    // setPending(Pending.data)

    // const Cancel = await axios.get(`https://onlineparttimejobs.in/api/order/pickupPoint/cancel/count/${isSellerId}`)
    // setCancel(Cancel.data)

    const dashboardData = await axios.get(`https://onlineparttimejobs.in/api/report/dashboard/seller/${isSellerId}`)
    setAllDashboardData(dashboardData.data)

  }
  const getAllDetapickup = async () => {

    const pickupId = window.localStorage.getItem('pickIds')

    const user = await axios.get(`https://onlineparttimejobs.in/api/user/count`)
    setusers(user.data)

    const order = await axios.get(`https://onlineparttimejobs.in/api/order/pickup/count/${pickupId}`)
    setOrders(order.data)

    const cus = await axios.get(`https://onlineparttimejobs.in/api/pickupCustomer/count`)
    setCus(cus.data)

    const pickups = await axios.get(`https://onlineparttimejobs.in/api/pickuppoints/count`)
    setPickuppoints(pickups.data)

    const delever = await axios.get(`https://onlineparttimejobs.in/api/order/pickupPoint/delivered/count/${pickupId}`)
    setDelivered(delever.data)

    const Rejected = await axios.get(`https://onlineparttimejobs.in/api/order/pickupPoint/rejected/count/${pickupId}`)
    setRejected(Rejected.data)

    const Pending = await axios.get(`https://onlineparttimejobs.in/api/order/pickupPoint/pending/count/${pickupId}`)
    setPending(Pending.data)

    const Cancel = await axios.get(`https://onlineparttimejobs.in/api/order/pickupPoint/cancel/count/${pickupId}`)
    setCancel(Cancel.data)

    const dashboardData = await axios.get(`https://onlineparttimejobs.in/api/api/report/dashboard/pick/${pickupId}`)
    setAllDashboardData(dashboardData.data)

  }

  const [delevryData, setDeleveryData] = useState()

  const getPickupstData = async () => {
    const res1 = await axios.get(`https://onlineparttimejobs.in/api/deliveryBoy/dashboard/${DeleveryBoyId}`)
    setDeleveryData(res1.data)
  }


  useEffect(() => {
    if (isDelevery === 'true') {
      getPickupstData()
    }
    else if (isLoginPickup === 'true') {
      getAllDetapickup()
    }
    else if (isSellerLogin === 'true') {
      getAllisSellerData()
    }
    else {
      getAllDeta()
    }
  }, [])


  const navigate = useNavigate()

  const changeRoute = (str) => {

    if (str === 'customer-list') {
      navigate('customer-list')
    }
    if (str === 'all_orders') {
      if (isLoginPickup === 'true') {
        window.localStorage.setItem('orderName', 'All PickupOrders')
        navigate('orders_by_pickup_point')
      } else {
        navigate('all_orders')
      }

    }
    if (str === 'categories') {
      navigate('categories')
    }
    if (str === 'products/all') {
      navigate('products/all')
    }
    if (str === 'seller') {
      navigate('seller')
    }
    if (str === 'pick_up_points') {
      navigate('pick_up_points')
    }
  }



  // if (condition) {
  //   return (
  //     <>
  //       <div className="aiz-main-content">
  //         <div className="px-15px px-lg-25px">

  //           <div className="row gutters-10">
  //             <div className="col-lg-12">
  //               <div className="row gutters-10">
  //                 <div className="col-4">
  //                   <div style={{ width: "100%", cursor: "pointer" }} onClick={() => changeRoute('all_orders')} className="bg-grad-3 text-white rounded-lg mb-4 overflow-hidden">
  //                     <div className="px-3 pt-3">
  //                       <div className="opacity-50">
  //                         <span className="fs-12 d-block">Total</span>
  //                         Order
  //                       </div>
  //                       <div className="h3 fw-700 mb-3">{orders?.count}</div>
  //                     </div>
  //                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  //                       <path fill="rgba(255,255,255,0.3)" fillOpacity={1} d="M0,128L34.3,112C68.6,96,137,64,206,96C274.3,128,343,224,411,250.7C480,277,549,235,617,213.3C685.7,192,754,192,823,181.3C891.4,171,960,149,1029,117.3C1097.1,85,1166,43,1234,58.7C1302.9,75,1371,149,1406,186.7L1440,224L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z" />
  //                     </svg>
  //                   </div>
  //                 </div>
  //                 <div className="col-4">
  //                   <div style={{ width: "100%", cursor: "pointer" }} onClick={() => changeRoute('customer-list')} className="bg-grad-2 text-white rounded-lg mb-4 overflow-hidden">
  //                     <div className="px-3 pt-3">
  //                       <div className="opacity-50">
  //                         <span className="fs-12 d-block">Total</span>
  //                         Customer
  //                       </div>
  //                       <div className="h3 fw-700 mb-3">
  //                         {users?.count}
  //                       </div>
  //                     </div>
  //                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  //                       <path fill="rgba(255,255,255,0.3)" fillOpacity={1} d="M0,128L34.3,112C68.6,96,137,64,206,96C274.3,128,343,224,411,250.7C480,277,549,235,617,213.3C685.7,192,754,192,823,181.3C891.4,171,960,149,1029,117.3C1097.1,85,1166,43,1234,58.7C1302.9,75,1371,149,1406,186.7L1440,224L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z" />
  //                     </svg>
  //                   </div>
  //                 </div>

  //                 <div className="col-4">
  //                   <div style={{ width: "100%", cursor: "pointer" }} className="bg-grad-2 text-white rounded-lg mb-4 overflow-hidden">
  //                     <div className="px-3 pt-3">
  //                       <div className="opacity-50">
  //                         <span className="fs-12 d-block">Total</span>
  //                         Revenue
  //                       </div>
  //                       <div className="h3 fw-700 mb-3">
  //                         {allDashboardData?.revenue}
  //                       </div>
  //                     </div>
  //                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  //                       <path fill="rgba(255,255,255,0.3)" fillOpacity={1} d="M0,128L34.3,112C68.6,96,137,64,206,96C274.3,128,343,224,411,250.7C480,277,549,235,617,213.3C685.7,192,754,192,823,181.3C891.4,171,960,149,1029,117.3C1097.1,85,1166,43,1234,58.7C1302.9,75,1371,149,1406,186.7L1440,224L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z" />
  //                     </svg>
  //                   </div>
  //                 </div>

  //                 <div className="col-4">
  //                   <div style={{ width: "100%", cursor: "pointer" }} onClick={() => changeRoute('seller')} className="bg-grad-2 text-white rounded-lg mb-4 overflow-hidden">
  //                     <div className="px-3 pt-3">
  //                       <div className="opacity-50">
  //                         <span className="fs-12 d-block">Total</span>
  //                         Sellers
  //                       </div>
  //                       <div className="h3 fw-700 mb-3">
  //                         {sellerList?.count}
  //                       </div>
  //                     </div>
  //                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  //                       <path fill="rgba(255,255,255,0.3)" fillOpacity={1} d="M0,128L34.3,112C68.6,96,137,64,206,96C274.3,128,343,224,411,250.7C480,277,549,235,617,213.3C685.7,192,754,192,823,181.3C891.4,171,960,149,1029,117.3C1097.1,85,1166,43,1234,58.7C1302.9,75,1371,149,1406,186.7L1440,224L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z" />
  //                     </svg>
  //                   </div>
  //                 </div>

  //                 <div className="col-4">
  //                   <div style={{ width: "100%", cursor: "pointer" }} onClick={() => changeRoute('categories')} className="bg-grad-1 text-white rounded-lg mb-4 overflow-hidden">
  //                     <div className="px-3 pt-3">
  //                       <div className="opacity-50">
  //                         <span className="fs-12 d-block">Total</span>
  //                         Product category
  //                       </div>
  //                       <div className="h3 fw-700 mb-3">{category?.count}</div>
  //                     </div>
  //                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  //                       <path fill="rgba(255,255,255,0.3)" fillOpacity={1} d="M0,128L34.3,112C68.6,96,137,64,206,96C274.3,128,343,224,411,250.7C480,277,549,235,617,213.3C685.7,192,754,192,823,181.3C891.4,171,960,149,1029,117.3C1097.1,85,1166,43,1234,58.7C1302.9,75,1371,149,1406,186.7L1440,224L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z" />
  //                     </svg>
  //                   </div>
  //                 </div>

  //                 {isLoginPickup === 'false' && <div className="col-4">
  //                   <div style={{ width: "100%", cursor: "pointer" }} onClick={() => changeRoute('products/all')} className="bg-grad-4 text-white rounded-lg mb-4 overflow-hidden">
  //                     <div className="px-3 pt-3">
  //                       <div className="opacity-50">
  //                         <span className="fs-12 d-block">Total</span>
  //                         Product
  //                       </div>
  //                       <div className="h3 fw-700 mb-3">{product?.count}</div>
  //                     </div>
  //                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  //                       <path fill="rgba(255,255,255,0.3)" fillOpacity={1} d="M0,128L34.3,112C68.6,96,137,64,206,96C274.3,128,343,224,411,250.7C480,277,549,235,617,213.3C685.7,192,754,192,823,181.3C891.4,171,960,149,1029,117.3C1097.1,85,1166,43,1234,58.7C1302.9,75,1371,149,1406,186.7L1440,224L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z" />
  //                     </svg>
  //                   </div>
  //                 </div>}




  //                 {isLoginPickup === 'false' && <div className="col-4">
  //                   <div className="bg-grad-1 text-white rounded-lg mb-4 overflow-hidden">
  //                     <div className="px-3 pt-3">
  //                       <div className="opacity-50">
  //                         <span className="fs-12 d-block">Total</span>
  //                         Coupons
  //                       </div>
  //                       <div className="h3 fw-700 mb-3">{coupens?.count}</div>
  //                     </div>
  //                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  //                       <path fill="rgba(255,255,255,0.3)" fillOpacity={1} d="M0,128L34.3,112C68.6,96,137,64,206,96C274.3,128,343,224,411,250.7C480,277,549,235,617,213.3C685.7,192,754,192,823,181.3C891.4,171,960,149,1029,117.3C1097.1,85,1166,43,1234,58.7C1302.9,75,1371,149,1406,186.7L1440,224L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z" />
  //                     </svg>
  //                   </div>
  //                 </div>}


  //                 {isLoginPickup === 'false' && <div className="col-4">
  //                   <div className="bg-grad-1 text-white rounded-lg mb-4 overflow-hidden">
  //                     <div className="px-3 pt-3">
  //                       <div className="opacity-50">
  //                         <span className="fs-12 d-block">Total Active</span>
  //                         Coupons
  //                       </div>
  //                       <div className="h3 fw-700 mb-3">{activeCoupen?.count}</div>
  //                     </div>
  //                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  //                       <path fill="rgba(255,255,255,0.3)" fillOpacity={1} d="M0,128L34.3,112C68.6,96,137,64,206,96C274.3,128,343,224,411,250.7C480,277,549,235,617,213.3C685.7,192,754,192,823,181.3C891.4,171,960,149,1029,117.3C1097.1,85,1166,43,1234,58.7C1302.9,75,1371,149,1406,186.7L1440,224L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z" />
  //                     </svg>
  //                   </div>
  //                 </div>}

  //                 <div className="col-4">
  //                   <div className="bg-grad-1 text-white rounded-lg mb-4 overflow-hidden">
  //                     <div className="px-3 pt-3">
  //                       <div className="opacity-50">
  //                         <span className="fs-12 d-block">Total</span>
  //                         Rejected Order
  //                       </div>
  //                       <div className="h3 fw-700 mb-3">{Rejected?.count ? Rejected?.count : 0}</div>
  //                     </div>
  //                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  //                       <path fill="rgba(255,255,255,0.3)" fillOpacity={1} d="M0,128L34.3,112C68.6,96,137,64,206,96C274.3,128,343,224,411,250.7C480,277,549,235,617,213.3C685.7,192,754,192,823,181.3C891.4,171,960,149,1029,117.3C1097.1,85,1166,43,1234,58.7C1302.9,75,1371,149,1406,186.7L1440,224L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z" />
  //                     </svg>
  //                   </div>
  //                 </div>




  //               </div>
  //             </div>


  //             <div className="col-lg-12">
  //               <div className="row gutters-10">

  //                 <div className="col-4">
  //                   <div style={{ width: "100%", cursor: "pointer" }} onClick={() => changeRoute('pick_up_points')} className="bg-grad-3 text-white rounded-lg mb-4 overflow-hidden">
  //                     <div className="px-3 pt-3">
  //                       <div className="opacity-50">
  //                         <span className="fs-12 d-block">Total</span>
  //                         pickuppoints
  //                       </div>
  //                       <div className="h3 fw-700 mb-3">{pickuppoints?.count}</div>
  //                     </div>
  //                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  //                       <path fill="rgba(255,255,255,0.3)" fillOpacity={1} d="M0,128L34.3,112C68.6,96,137,64,206,96C274.3,128,343,224,411,250.7C480,277,549,235,617,213.3C685.7,192,754,192,823,181.3C891.4,171,960,149,1029,117.3C1097.1,85,1166,43,1234,58.7C1302.9,75,1371,149,1406,186.7L1440,224L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z" />
  //                     </svg>
  //                   </div>
  //                 </div>



  //                 <div className="col-4">
  //                   <div className="bg-grad-1 text-white rounded-lg mb-4 overflow-hidden">
  //                     <div className="px-3 pt-3">
  //                       <div className="opacity-50">
  //                         <span className="fs-12 d-block">Total</span>
  //                         Cancelled Order
  //                       </div>
  //                       <div className="h3 fw-700 mb-3">{Cancel?.count}</div>
  //                     </div>
  //                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  //                       <path fill="rgba(255,255,255,0.3)" fillOpacity={1} d="M0,128L34.3,112C68.6,96,137,64,206,96C274.3,128,343,224,411,250.7C480,277,549,235,617,213.3C685.7,192,754,192,823,181.3C891.4,171,960,149,1029,117.3C1097.1,85,1166,43,1234,58.7C1302.9,75,1371,149,1406,186.7L1440,224L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z" />
  //                     </svg>
  //                   </div>
  //                 </div>

  //                 <div className="col-4">
  //                   <div className="bg-grad-1 text-white rounded-lg mb-4 overflow-hidden">
  //                     <div className="px-3 pt-3">
  //                       <div className="opacity-50">
  //                         <span className="fs-12 d-block">Total</span>
  //                         Pending Order
  //                       </div>
  //                       <div className="h3 fw-700 mb-3">{Pending?.count}</div>
  //                     </div>
  //                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  //                       <path fill="rgba(255,255,255,0.3)" fillOpacity={1} d="M0,128L34.3,112C68.6,96,137,64,206,96C274.3,128,343,224,411,250.7C480,277,549,235,617,213.3C685.7,192,754,192,823,181.3C891.4,171,960,149,1029,117.3C1097.1,85,1166,43,1234,58.7C1302.9,75,1371,149,1406,186.7L1440,224L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z" />
  //                     </svg>
  //                   </div>
  //                 </div>


  //                 {/* <div className="col-4">
  //                   <div className="bg-grad-1 text-white rounded-lg mb-4 overflow-hidden">
  //                     <div className="px-3 pt-3">
  //                       <div className="opacity-50">
  //                         <span className="fs-12 d-block">Total</span>
  //                         Shipped Order
  //                       </div>
  //                       <div className="h3 fw-700 mb-3"></div>
  //                     </div>
  //                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  //                       <path fill="rgba(255,255,255,0.3)" fillOpacity={1} d="M0,128L34.3,112C68.6,96,137,64,206,96C274.3,128,343,224,411,250.7C480,277,549,235,617,213.3C685.7,192,754,192,823,181.3C891.4,171,960,149,1029,117.3C1097.1,85,1166,43,1234,58.7C1302.9,75,1371,149,1406,186.7L1440,224L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z" />
  //                     </svg>
  //                   </div>
  //                 </div> */}

  //                 <div className="col-4">
  //                   <div className="bg-grad-1 text-white rounded-lg mb-4 overflow-hidden">
  //                     <div className="px-3 pt-3">
  //                       <div className="opacity-50">
  //                         <span className="fs-12 d-block">Total</span>
  //                         Delivered Order
  //                       </div>
  //                       <div className="h3 fw-700 mb-3">{delivered?.count}</div>
  //                     </div>
  //                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  //                       <path fill="rgba(255,255,255,0.3)" fillOpacity={1} d="M0,128L34.3,112C68.6,96,137,64,206,96C274.3,128,343,224,411,250.7C480,277,549,235,617,213.3C685.7,192,754,192,823,181.3C891.4,171,960,149,1029,117.3C1097.1,85,1166,43,1234,58.7C1302.9,75,1371,149,1406,186.7L1440,224L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z" />
  //                     </svg>
  //                   </div>
  //                 </div>


  //                 {/* <div className="col-4">
  //                   <div className="bg-grad-4 text-white rounded-lg mb-4 overflow-hidden">
  //                     <div className="px-3 pt-3">
  //                       <div className="opacity-50">
  //                         <span className="fs-12 d-block">Total</span>
  //                         Product
  //                       </div>
  //                       <div className="h3 fw-700 mb-3">{product?.count}</div>
  //                     </div>
  //                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  //                       <path fill="rgba(255,255,255,0.3)" fillOpacity={1} d="M0,128L34.3,112C68.6,96,137,64,206,96C274.3,128,343,224,411,250.7C480,277,549,235,617,213.3C685.7,192,754,192,823,181.3C891.4,171,960,149,1029,117.3C1097.1,85,1166,43,1234,58.7C1302.9,75,1371,149,1406,186.7L1440,224L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z" />
  //                     </svg>
  //                   </div>
  //                 </div> */}


  //               </div>
  //             </div>

  //           </div>
  //           {/* <div className="row gutters-10">
  //             <div className="col-md-3">
  //               <div className="card">
  //                 <div className="card-header">
  //                   <h6 className="mb-0 fs-14">Top Product</h6>
  //                 </div>
  //                 <div className="card-body">
  //                   <div className="chartjs-size-monitor">
  //                     <div className="chartjs-size-monitor-expand">

  //                     </div>
  //                     <div className="chartjs-size-monitor-shrink">

  //                     </div>
  //                   </div>
  //                   <canvas id="graph-1" className="w-100 chartjs-render-monitor" height={625} width={676} style={{ display: 'block', height: 500, width: 541 }} />
  //                 </div>
  //               </div>
  //             </div>
  //             <div className="col-md-3">
  //               <div className="card">
  //                 <div className="card-header">
  //                   <h6 className="mb-0 fs-14">Top Seller</h6>
  //                 </div>
  //                 <div className="card-body">
  //                   <div className="chartjs-size-monitor">
  //                     <div className="chartjs-size-monitor-expand">

  //                     </div>
  //                     <div className="chartjs-size-monitor-shrink">

  //                     </div>
  //                   </div>
  //                   <canvas id="graph-2" className="w-100 chartjs-render-monitor" height={625} width={676} style={{ display: 'block', height: 500, width: 541 }} />
  //                 </div>
  //               </div>
  //             </div>
  //             <div className="col-md-3">
  //               <div className="card">
  //                 <div className="card-header">
  //                   <h6 className="mb-0 fs-14">Top Categories</h6>
  //                 </div>
  //                 <div className="card-body">
  //                   <div className="chartjs-size-monitor">
  //                     <div className="chartjs-size-monitor-expand">

  //                     </div>
  //                     <div className="chartjs-size-monitor-shrink">

  //                     </div>
  //                   </div>
  //                   <canvas id="graph-2" className="w-100 chartjs-render-monitor" height={625} width={676} style={{ display: 'block', height: 500, width: 541 }} />
  //                 </div>
  //               </div>
  //             </div>
  //             <div className="col-md-3">
  //               <div className="card">
  //                 <div className="card-header">
  //                   <h6 className="mb-0 fs-14">Top Pickup Point sell</h6>
  //                 </div>
  //                 <div className="card-body">
  //                   <div className="chartjs-size-monitor">
  //                     <div className="chartjs-size-monitor-expand">

  //                     </div>
  //                     <div className="chartjs-size-monitor-shrink">

  //                     </div>
  //                   </div>
  //                   <canvas id="graph-2" className="w-100 chartjs-render-monitor" height={625} width={676} style={{ display: 'block', height: 500, width: 541 }} />
  //                 </div>
  //               </div>
  //             </div>
  //           </div> */}

  //           <div className="card">
  //             <div className="card-header">
  //               <h6 className="mb-0">Top Products</h6>
  //             </div>
  //             <div className="card-body">
  //               <div className="aiz-carousel gutters-10 half-outside-arrow slick-initialized slick-slider" data-items={6} data-xl-items={5} data-lg-items={4} data-md-items={3} data-sm-items={2} data-arrows="true">
  //                 <div className="slick-list draggable"><div className="slick-track" style={{ opacity: 1, width: 2352, transform: 'translate3d(0px, 0px, 0px)' }}>
  //                   {allDashboardData && allDashboardData?.latestProducts.map((item) => {
  //                     return <div className="slick-slide slick-current slick-active" data-slick-index={0} aria-hidden="false" style={{ width: 196 }}>
  //                       <div>
  //                         <div className="carousel-box" style={{ width: '100%', display: 'inline-block' }}>
  //                           <div className="aiz-card-box border border-light rounded shadow-sm hov-shadow-md mb-2 has-transition bg-white">
  //                             <div className="position-relative">
  //                               <a href="https://mmslfashions.in/product/aceta" className="d-block" tabIndex={0}>
  //                                 <img className="img-fit mx-auto h-210px lazyloaded" src={item?.mainimage_url?.url} data-src="https://mmslfashions.in/public/uploads/all/DgCjfbcutqaF1glvntiF2FqbUNOXKGozoEflL3Qg.png" alt="ACETA" />
  //                               </a>
  //                             </div>
  //                             <div className="p-md-3 p-2 text-left">
  //                               <div className="fs-15">
  //                                 <span className="fw-700 text-primary">ZK {item?.variations[0].mrp}</span>
  //                               </div>

  //                               <h3 className="fw-600 fs-13 text-truncate-2 lh-1-4 mb-0">
  //                                 <a href="https://mmslfashions.in/product/aceta" className="d-block text-reset" tabIndex={0}>{item?.name}</a>
  //                               </h3>
  //                             </div>
  //                           </div>
  //                         </div>
  //                       </div>
  //                     </div>
  //                   })}


  //                 </div>
  //                 </div>
  //               </div>
  //             </div>
  //           </div>


  //           <div className="card">
  //             <div className="card-header">
  //               <h6 className="mb-0">Top Categories</h6>
  //             </div>
  //             <div className="card-body">
  //               <div className="aiz-carousel gutters-10 half-outside-arrow slick-initialized slick-slider" data-items={6} data-xl-items={5} data-lg-items={4} data-md-items={3} data-sm-items={2} data-arrows="true">
  //                 <div className="slick-list draggable"><div className="slick-track" style={{ opacity: 1, width: 2352, transform: 'translate3d(0px, 0px, 0px)' }}>
  //                   {allDashboardData && allDashboardData?.topCategories.map((item) => {
  //                     return <div className="slick-slide slick-current slick-active" data-slick-index={0} aria-hidden="false" style={{ width: 196 }}>
  //                       <div>
  //                         <div className="carousel-box" style={{ width: '100%', display: 'inline-block' }}>
  //                           <div className="aiz-card-box border border-light rounded shadow-sm hov-shadow-md mb-2 has-transition bg-white">
  //                             <div className="position-relative">
  //                               <a href="https://mmslfashions.in/product/aceta" className="d-block" tabIndex={0}>
  //                                 <img className="img-fit mx-auto h-210px lazyloaded" src={item?.category?.icon?.url} data-src="https://mmslfashions.in/public/uploads/all/DgCjfbcutqaF1glvntiF2FqbUNOXKGozoEflL3Qg.png" alt="ACETA" />
  //                               </a>
  //                             </div>
  //                             <div className="p-md-3 p-2 text-left">

  //                               <h3 className="fw-600 fs-13 text-truncate-2 lh-1-4 mb-0">
  //                                 <a href="https://mmslfashions.in/product/aceta" className="d-block text-reset" tabIndex={0}>{item?.category.name}</a>
  //                               </h3>
  //                               <div className="fs-15">
  //                                 <span className="fw-700 text-primary">revenue : {item?.revenue}</span>
  //                               </div>


  //                             </div>
  //                           </div>
  //                         </div>
  //                       </div>
  //                     </div>
  //                   })}


  //                 </div>
  //                 </div>
  //               </div>
  //             </div>
  //           </div>


  //           <div className="card">
  //             <div className="card-header">
  //               <h6 className="mb-0">Top Pickup</h6>
  //             </div>
  //             <div className="card-body">
  //               <div className="aiz-carousel gutters-10 half-outside-arrow slick-initialized slick-slider" data-items={6} data-xl-items={5} data-lg-items={4} data-md-items={3} data-sm-items={2} data-arrows="true">
  //                 <div className="slick-list draggable"><div className="slick-track" style={{ opacity: 1, width: 2352, transform: 'translate3d(0px, 0px, 0px)' }}>
  //                   {allDashboardData && allDashboardData?.topPickup.map((item) => {
  //                     return <div className="slick-slide slick-current slick-active" data-slick-index={0} aria-hidden="false" style={{ width: 196 }}>
  //                       <div>
  //                         <div className="carousel-box" style={{ width: '100%', display: 'inline-block' }}>
  //                           <div className="aiz-card-box border border-light rounded shadow-sm hov-shadow-md mb-2 has-transition bg-white">
  //                             {/* <div className="position-relative">
  //                               <a href="https://mmslfashions.in/product/aceta" className="d-block" tabIndex={0}>
  //                                 <img className="img-fit mx-auto h-210px lazyloaded" src={item?.category?.icon?.url} data-src="https://mmslfashions.in/public/uploads/all/DgCjfbcutqaF1glvntiF2FqbUNOXKGozoEflL3Qg.png" alt="ACETA" />
  //                               </a>
  //                             </div> */}
  //                             <div className="p-md-3 p-2 text-left">
  //                               <div className="fs-15">
  //                                 <span className="fw-700 text-primary">Revenue : {item?.revenue}</span>
  //                               </div>

  //                               <h3 className="fw-600 fs-13 text-truncate-2 lh-1-4 mb-0">
  //                                 <a className="d-block text-reset" tabIndex={0}>Name : {item?.pickupPoint.pickupPoint_name}</a>
  //                                 <a className="d-block text-reset" tabIndex={0}>Phone : {item?.pickupPoint.phone}</a>

  //                               </h3>
  //                               <h3 className="fw-600 fs-13 text-truncate-2 lh-1-4 mb-0 d-block">
  //                                 <div className="d-block text-reset" tabIndex={0}>Email : {item?.pickupPoint.email}</div>
  //                                 <div className="d-block text-reset" tabIndex={0}>Address : {item?.pickupPoint.address}</div>
  //                               </h3>
  //                             </div>
  //                           </div>
  //                         </div>
  //                       </div>
  //                     </div>
  //                   })}


  //                 </div>
  //                 </div>
  //               </div>
  //             </div>
  //           </div>


  //           <div className="card">
  //             <div className="card-header">
  //               <h6 className="mb-0">Top Sellers</h6>
  //             </div>
  //             <div className="card-body">
  //               <div className="aiz-carousel gutters-10 half-outside-arrow slick-initialized slick-slider" data-items={6} data-xl-items={5} data-lg-items={4} data-md-items={3} data-sm-items={2} data-arrows="true">
  //                 <div className="slick-list draggable"><div className="slick-track" style={{ opacity: 1, width: 2352, transform: 'translate3d(0px, 0px, 0px)' }}>
  //                   {allDashboardData && allDashboardData?.topSellers.map((item) => {
  //                     return <div className="slick-slide slick-current slick-active" data-slick-index={0} aria-hidden="false" style={{ width: 196 }}>
  //                       <div>
  //                         <div className="carousel-box" style={{ width: '100%', display: 'inline-block' }}>
  //                           <div className="aiz-card-box border border-light rounded shadow-sm hov-shadow-md mb-2 has-transition bg-white">
  //                             {/* <div className="position-relative">
  //                               <a href="https://mmslfashions.in/product/aceta" className="d-block" tabIndex={0}>
  //                                 <img className="img-fit mx-auto h-210px lazyloaded" src={item?.category?.icon?.url} data-src="https://mmslfashions.in/public/uploads/all/DgCjfbcutqaF1glvntiF2FqbUNOXKGozoEflL3Qg.png" alt="ACETA" />
  //                               </a>
  //                             </div> */}
  //                             <div className="p-md-3 p-2 text-left">
  //                               <div className="fs-15">
  //                                 <span className="fw-700 text-primary">Revenue : {item?.revenue}</span>
  //                               </div>

  //                               <h3 className="fw-600 fs-13 text-truncate-2 lh-1-4 mb-0">
  //                                 <a className="d-block text-reset" tabIndex={0}>Name : {item?.firstname ? item?.firstname + " " + item?.lastname : '---'}</a>

  //                               </h3>

  //                             </div>
  //                           </div>
  //                         </div>
  //                       </div>
  //                     </div>
  //                   })}


  //                 </div>
  //                 </div>
  //               </div>
  //             </div>
  //           </div>

  //         </div>
  //         <div className="bg-white text-center py-3 px-15px px-lg-25px mt-auto">
  //           {/*p class="mb-0">&copy;  v6.3.3</p*/}
  //         </div>
  //       </div>

  //     </>
  //   )
  // }

  if (isDelevery === 'true') {
    return <>
      <div className="aiz-main-content">
        <div className="px-15px px-lg-25px">

          <div className="row gutters-10">
            <div className="col-lg-12">
              <div className="row gutters-10">
                <div className="col-3">
                  <div style={{ width: "100%", cursor: "pointer" }} className="bg-grad-3 text-white rounded-lg mb-4 overflow-hidden">
                    <div className="px-3 pt-3">
                      <div className="opacity-50">
                        <span className="fs-12 d-block">Completed</span>
                        Deleverys
                      </div>
                      <div className="h3 fw-700 mb-3">{delevryData?.deliveredOrder}</div>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                      <path fill="rgba(255,255,255,0.3)" fillOpacity={1} d="M0,128L34.3,112C68.6,96,137,64,206,96C274.3,128,343,224,411,250.7C480,277,549,235,617,213.3C685.7,192,754,192,823,181.3C891.4,171,960,149,1029,117.3C1097.1,85,1166,43,1234,58.7C1302.9,75,1371,149,1406,186.7L1440,224L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z" />
                    </svg>
                  </div>
                </div>
                <div className="col-3">
                  <div style={{ width: "100%", cursor: "pointer" }} className="bg-grad-2 text-white rounded-lg mb-4 overflow-hidden">
                    <div className="px-3 pt-3">
                      <div className="opacity-50">
                        <span className="fs-12 d-block">Pending</span>
                        Deleverys
                      </div>
                      <div className="h3 fw-700 mb-3">
                        {delevryData?.PendingOrderCount}
                      </div>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                      <path fill="rgba(255,255,255,0.3)" fillOpacity={1} d="M0,128L34.3,112C68.6,96,137,64,206,96C274.3,128,343,224,411,250.7C480,277,549,235,617,213.3C685.7,192,754,192,823,181.3C891.4,171,960,149,1029,117.3C1097.1,85,1166,43,1234,58.7C1302.9,75,1371,149,1406,186.7L1440,224L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z" />
                    </svg>
                  </div>
                </div>
                <div className="col-3">
                  <div style={{ width: "100%", cursor: "pointer" }} className="bg-grad-2 text-white rounded-lg mb-4 overflow-hidden">
                    <div className="px-3 pt-3">
                      <div className="opacity-50">
                        <span className="fs-12 d-block">Canceled</span>
                        Deleverys
                      </div>
                      <div className="h3 fw-700 mb-3">
                        {delevryData?.CancelledOrderCount}
                      </div>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                      <path fill="rgba(255,255,255,0.3)" fillOpacity={1} d="M0,128L34.3,112C68.6,96,137,64,206,96C274.3,128,343,224,411,250.7C480,277,549,235,617,213.3C685.7,192,754,192,823,181.3C891.4,171,960,149,1029,117.3C1097.1,85,1166,43,1234,58.7C1302.9,75,1371,149,1406,186.7L1440,224L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z" />
                    </svg>
                  </div>
                </div>

                <div className="col-3">
                  <div style={{ width: "100%", cursor: "pointer" }} className="bg-grad-2 text-white rounded-lg mb-4 overflow-hidden">
                    <div className="px-3 pt-3">
                      <div className="opacity-50">
                        <span className="fs-12 d-block">Total</span>
                        Collection
                      </div>
                      <div className="h3 fw-700 mb-3">
                        012
                      </div>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                      <path fill="rgba(255,255,255,0.3)" fillOpacity={1} d="M0,128L34.3,112C68.6,96,137,64,206,96C274.3,128,343,224,411,250.7C480,277,549,235,617,213.3C685.7,192,754,192,823,181.3C891.4,171,960,149,1029,117.3C1097.1,85,1166,43,1234,58.7C1302.9,75,1371,149,1406,186.7L1440,224L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z" />
                    </svg>
                  </div>
                </div>
                <div className="col-3">
                  <div style={{ width: "100%", cursor: "pointer" }} className="bg-grad-2 text-white rounded-lg mb-4 overflow-hidden">
                    <div className="px-3 pt-3">
                      <div className="opacity-50">
                        <span className="fs-12 d-block">Total</span>
                        Earning
                      </div>
                      <div className="h3 fw-700 mb-3">
                        012
                      </div>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                      <path fill="rgba(255,255,255,0.3)" fillOpacity={1} d="M0,128L34.3,112C68.6,96,137,64,206,96C274.3,128,343,224,411,250.7C480,277,549,235,617,213.3C685.7,192,754,192,823,181.3C891.4,171,960,149,1029,117.3C1097.1,85,1166,43,1234,58.7C1302.9,75,1371,149,1406,186.7L1440,224L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z" />
                    </svg>
                  </div>
                </div>


              </div>
            </div>
          </div>

          <div className="row gutters-10">
            <div className="col-md-3">
              <div className="card">
                <div className="card-header">
                  <h6 className="mb-0 fs-14">Top Product</h6>
                </div>
                <div className="card-body">
                  <div className="chartjs-size-monitor">
                    <div className="chartjs-size-monitor-expand">

                    </div>
                    <div className="chartjs-size-monitor-shrink">

                    </div>
                  </div>
                  <canvas id="graph-1" className="w-100 chartjs-render-monitor" height={625} width={676} style={{ display: 'block', height: 500, width: 541 }} />
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <div className="card-header">
                  <h6 className="mb-0 fs-14">Top Seller</h6>
                </div>
                <div className="card-body">
                  <div className="chartjs-size-monitor">
                    <div className="chartjs-size-monitor-expand">

                    </div>
                    <div className="chartjs-size-monitor-shrink">

                    </div>
                  </div>
                  <canvas id="graph-2" className="w-100 chartjs-render-monitor" height={625} width={676} style={{ display: 'block', height: 500, width: 541 }} />
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <div className="card-header">
                  <h6 className="mb-0 fs-14">Top Categories</h6>
                </div>
                <div className="card-body">
                  <div className="chartjs-size-monitor">
                    <div className="chartjs-size-monitor-expand">
                      {/* <div className /> */}
                    </div>
                    <div className="chartjs-size-monitor-shrink">
                      {/* <div className /> */}
                    </div>
                  </div>
                  <canvas id="graph-2" className="w-100 chartjs-render-monitor" height={625} width={676} style={{ display: 'block', height: 500, width: 541 }} />
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <div className="card-header">
                  <h6 className="mb-0 fs-14">Top Pickup Point sell</h6>
                </div>
                <div className="card-body">
                  <div className="chartjs-size-monitor">
                    <div className="chartjs-size-monitor-expand">

                    </div>
                    <div className="chartjs-size-monitor-shrink">

                    </div>
                  </div>
                  <canvas id="graph-2" className="w-100 chartjs-render-monitor" height={625} width={676} style={{ display: 'block', height: 500, width: 541 }} />
                </div>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-header">
              <h6 className="mb-0">Top 12 Products</h6>
            </div>
            <div className="card-body">
              <div className="aiz-carousel gutters-10 half-outside-arrow slick-initialized slick-slider" data-items={6} data-xl-items={5} data-lg-items={4} data-md-items={3} data-sm-items={2} data-arrows="true"><button type="button" className="slick-prev slick-arrow slick-disabled" aria-disabled="true" style={{}} fdprocessedid="typzw"><i className="las la-angle-left" /></button><div className="slick-list draggable"><div className="slick-track" style={{ opacity: 1, width: 2352, transform: 'translate3d(0px, 0px, 0px)' }}><div className="slick-slide slick-current slick-active" data-slick-index={0} aria-hidden="false" style={{ width: 196 }}><div><div className="carousel-box" style={{ width: '100%', display: 'inline-block' }}>
                <div className="aiz-card-box border border-light rounded shadow-sm hov-shadow-md mb-2 has-transition bg-white">
                  <div className="position-relative">
                    <a href="https://mmslfashions.in/product/aceta" className="d-block" tabIndex={0}>
                      <img className="img-fit mx-auto h-210px lazyloaded" src="https://mmslfashions.in/public/uploads/all/DgCjfbcutqaF1glvntiF2FqbUNOXKGozoEflL3Qg.png" data-src="https://mmslfashions.in/public/uploads/all/DgCjfbcutqaF1glvntiF2FqbUNOXKGozoEflL3Qg.png" alt="ACETA" />
                    </a>
                  </div>
                  <div className="p-md-3 p-2 text-left">
                    <div className="fs-15">
                      <span className="fw-700 text-primary">ZK250.00</span>
                    </div>
                    <div className="rating rating-sm mt-1">
                      <i className="las la-star" /><i className="las la-star" /><i className="las la-star" /><i className="las la-star" /><i className="las la-star" />
                    </div>
                    <h3 className="fw-600 fs-13 text-truncate-2 lh-1-4 mb-0">
                      <a href="https://mmslfashions.in/product/aceta" className="d-block text-reset" tabIndex={0}>ACETA</a>
                    </h3>
                  </div>
                </div>
              </div></div></div><div className="slick-slide slick-active" data-slick-index={1} aria-hidden="false" style={{ width: 196 }}><div><div className="carousel-box" style={{ width: '100%', display: 'inline-block' }}>
                <div className="aiz-card-box border border-light rounded shadow-sm hov-shadow-md mb-2 has-transition bg-white">
                  <div className="position-relative">
                    <a href="https://mmslfashions.in/product/ntrat-alamonyom" className="d-block" tabIndex={0}>
                      <img className="img-fit mx-auto h-210px lazyloaded" src="https://mmslfashions.in/public/uploads/all/g7ZiaWNvwkLwNhl67jtfbUaIcwSzVarNuc7T8dLP.jpg" data-src="https://mmslfashions.in/public/uploads/all/g7ZiaWNvwkLwNhl67jtfbUaIcwSzVarNuc7T8dLP.jpg" alt="Ammonium Nitrate" />
                    </a>
                  </div>
                  <div className="p-md-3 p-2 text-left">
                    <div className="fs-15">
                      <span className="fw-700 text-primary">ZK350.00</span>
                    </div>
                    <div className="rating rating-sm mt-1">
                      <i className="las la-star" />
                      <i className="las la-star" />
                      <i className="las la-star" />
                      <i className="las la-star" />
                      <i className="las la-star" />
                    </div>
                    <h3 className="fw-600 fs-13 text-truncate-2 lh-1-4 mb-0">
                      <a href="https://mmslfashions.in/product/ntrat-alamonyom" className="d-block text-reset" tabIndex={0}>Ammonium Nitrate</a>
                    </h3>
                  </div>
                </div>
              </div></div></div><div className="slick-slide slick-active" data-slick-index={2} aria-hidden="false" style={{ width: 196 }}><div><div className="carousel-box" style={{ width: '100%', display: 'inline-block' }}>
                <div className="aiz-card-box border border-light rounded shadow-sm hov-shadow-md mb-2 has-transition bg-white">
                  <div className="position-relative">
                    <a href="https://mmslfashions.in/product/map-granular-in-50kg-bag-mIbGj" className="d-block" tabIndex={0}>
                      <img className="img-fit mx-auto h-210px lazyloaded" src="https://mmslfashions.in/public/uploads/all/Wiv7vhbeLmejHSA4L7NNWgfAqundcpdd76tW7OiY.jpg" data-src="https://mmslfashions.in/public/uploads/all/Wiv7vhbeLmejHSA4L7NNWgfAqundcpdd76tW7OiY.jpg" alt="MAP GRANULAR IN 50KG BAG" />
                    </a>
                  </div>
                  <div className="p-md-3 p-2 text-left">
                    <div className="fs-15">
                      <span className="fw-700 text-primary">ZK55.00</span>
                    </div>
                    <div className="rating rating-sm mt-1">
                      <i className="las la-star" />
                      <i className="las la-star" />
                      <i className="las la-star" />
                      <i className="las la-star" />
                      <i className="las la-star" />
                    </div>
                    <h3 className="fw-600 fs-13 text-truncate-2 lh-1-4 mb-0">
                      <a href="https://mmslfashions.in/product/map-granular-in-50kg-bag-mIbGj" className="d-block text-reset" tabIndex={0}>MAP GRANULAR IN 50KG BAG</a>
                    </h3>
                  </div>
                </div>
              </div></div></div><div className="slick-slide slick-active" data-slick-index={3} aria-hidden="false" style={{ width: 196 }}><div><div className="carousel-box" style={{ width: '100%', display: 'inline-block' }}>
                <div className="aiz-card-box border border-light rounded shadow-sm hov-shadow-md mb-2 has-transition bg-white">
                  <div className="position-relative">
                    <a href="https://mmslfashions.in/product/ammonium-sulphate-3" className="d-block" tabIndex={0}>
                      <img className="img-fit mx-auto h-210px lazyloaded" src="https://mmslfashions.in/public/uploads/all/yVOr0O2yV6y4EcW47YAkrl2w77aQG5yXYGYLcZFD.png" data-src="https://mmslfashions.in/public/uploads/all/yVOr0O2yV6y4EcW47YAkrl2w77aQG5yXYGYLcZFD.png" alt="Ammonium Sulphate" />
                    </a>
                  </div>
                  <div className="p-md-3 p-2 text-left">
                    <div className="fs-15">
                      <span className="fw-700 text-primary">ZK220.00</span>
                    </div>
                    <div className="rating rating-sm mt-1">
                      <i className="las la-star" /><i className="las la-star" /><i className="las la-star" /><i className="las la-star" /><i className="las la-star" />
                    </div>
                    <h3 className="fw-600 fs-13 text-truncate-2 lh-1-4 mb-0">
                      <a href="https://mmslfashions.in/product/ammonium-sulphate-3" className="d-block text-reset" tabIndex={0}>Ammonium Sulphate</a>
                    </h3>
                  </div>
                </div>
              </div></div></div><div className="slick-slide slick-active" data-slick-index={4} aria-hidden="false" style={{ width: 196 }}><div><div className="carousel-box" style={{ width: '100%', display: 'inline-block' }}>
                <div className="aiz-card-box border border-light rounded shadow-sm hov-shadow-md mb-2 has-transition bg-white">
                  <div className="position-relative">
                    <a href="https://mmslfashions.in/product/171717" className="d-block" tabIndex={0}>
                      <img className="img-fit mx-auto h-210px lazyloaded" src="https://mmslfashions.in/public/uploads/all/v01lSDffgSnZK0HXzyIvBNgzdjnlIuolRvWXoCMA.jpg" data-src="https://mmslfashions.in/public/uploads/all/v01lSDffgSnZK0HXzyIvBNgzdjnlIuolRvWXoCMA.jpg" alt="17:17:17" />
                    </a>
                  </div>
                  <div className="p-md-3 p-2 text-left">
                    <div className="fs-15">
                      <span className="fw-700 text-primary">ZK300.00</span>
                    </div>
                    <div className="rating rating-sm mt-1">
                      <i className="las la-star" />
                      <i className="las la-star" />
                      <i className="las la-star" />
                      <i className="las la-star" />
                      <i className="las la-star" />
                    </div>
                    <h3 className="fw-600 fs-13 text-truncate-2 lh-1-4 mb-0">
                      <a href="https://mmslfashions.in/product/171717" className="d-block text-reset" tabIndex={0}>17:17:17</a>
                    </h3>
                  </div>
                </div>
              </div></div></div><div className="slick-slide slick-active" data-slick-index={5} aria-hidden="false" style={{ width: 196 }}><div><div className="carousel-box" style={{ width: '100%', display: 'inline-block' }}>
                <div className="aiz-card-box border border-light rounded shadow-sm hov-shadow-md mb-2 has-transition bg-white">
                  <div className="position-relative">
                    <a href="https://mmslfashions.in/product/ammonium-sulphate-xlnf4" className="d-block" tabIndex={0}>
                      <img className="img-fit mx-auto h-210px lazyloaded" src="https://mmslfashions.in/public/uploads/all/Wiv7vhbeLmejHSA4L7NNWgfAqundcpdd76tW7OiY.jpg" data-src="https://mmslfashions.in/public/uploads/all/Wiv7vhbeLmejHSA4L7NNWgfAqundcpdd76tW7OiY.jpg" alt="Ammonium Sulphate" />
                    </a>
                  </div>
                  <div className="p-md-3 p-2 text-left">
                    <div className="fs-15">
                      <span className="fw-700 text-primary">ZK220.00</span>
                    </div>
                    <div className="rating rating-sm mt-1">
                      <i className="las la-star" />
                      <i className="las la-star" />
                      <i className="las la-star" />
                      <i className="las la-star" />
                      <i className="las la-star" />
                    </div>
                    <h3 className="fw-600 fs-13 text-truncate-2 lh-1-4 mb-0">
                      <a href="https://mmslfashions.in/product/ammonium-sulphate-xlnf4" className="d-block text-reset" tabIndex={0}>Ammonium Sulphate</a>
                    </h3>
                  </div>
                </div>
              </div></div></div><div className="slick-slide" data-slick-index={6} aria-hidden="true" style={{ width: 196 }} tabIndex={-1}><div><div className="carousel-box" style={{ width: '100%', display: 'inline-block' }}>
                <div className="aiz-card-box border border-light rounded shadow-sm hov-shadow-md mb-2 has-transition bg-white">
                  <div className="position-relative">
                    <a href="https://mmslfashions.in/product/ammonium-nitrate-10-kg-bag-8FauO" className="d-block" tabIndex={-1}>
                      <img className="img-fit mx-auto h-210px lazyloaded" src="https://mmslfashions.in/public/uploads/all/Wiv7vhbeLmejHSA4L7NNWgfAqundcpdd76tW7OiY.jpg" data-src="https://mmslfashions.in/public/uploads/all/Wiv7vhbeLmejHSA4L7NNWgfAqundcpdd76tW7OiY.jpg" alt="AMMONIUM NITRATE 10 KG BAG" />
                    </a>
                  </div>
                  <div className="p-md-3 p-2 text-left">
                    <div className="fs-15">
                      <span className="fw-700 text-primary">ZK55.00</span>
                    </div>
                    <div className="rating rating-sm mt-1">
                      <i className="las la-star" />
                      <i className="las la-star" />
                      <i className="las la-star" />
                      <i className="las la-star" />
                      <i className="las la-star" />
                    </div>
                    <h3 className="fw-600 fs-13 text-truncate-2 lh-1-4 mb-0">
                      <a href="https://mmslfashions.in/product/ammonium-nitrate-10-kg-bag-8FauO" className="d-block text-reset" tabIndex={-1}>AMMONIUM NITRATE 10 KG BAG</a>
                    </h3>
                  </div>
                </div>
              </div></div></div><div className="slick-slide" data-slick-index={7} aria-hidden="true" style={{ width: 196 }} tabIndex={-1}><div><div className="carousel-box" style={{ width: '100%', display: 'inline-block' }}>
                <div className="aiz-card-box border border-light rounded shadow-sm hov-shadow-md mb-2 has-transition bg-white">
                  <div className="position-relative">
                    <a href="https://mmslfashions.in/product/ammonium-sulphate-xlnf4-9XMAu" className="d-block" tabIndex={-1}>
                      <img className="img-fit mx-auto h-210px lazyloaded" src="https://mmslfashions.in/public/uploads/all/Wiv7vhbeLmejHSA4L7NNWgfAqundcpdd76tW7OiY.jpg" data-src="https://mmslfashions.in/public/uploads/all/Wiv7vhbeLmejHSA4L7NNWgfAqundcpdd76tW7OiY.jpg" alt="Ammonium Sulphate" />
                    </a>
                  </div>
                  <div className="p-md-3 p-2 text-left">
                    <div className="fs-15">
                      <span className="fw-700 text-primary">ZK220.00</span>
                    </div>
                    <div className="rating rating-sm mt-1">
                      <i className="las la-star" /><i className="las la-star" /><i className="las la-star" /><i className="las la-star" /><i className="las la-star" />
                    </div>
                    <h3 className="fw-600 fs-13 text-truncate-2 lh-1-4 mb-0">
                      <a href="https://mmslfashions.in/product/ammonium-sulphate-xlnf4-9XMAu" className="d-block text-reset" tabIndex={-1}>Ammonium Sulphate</a>
                    </h3>
                  </div>
                </div>
              </div></div></div><div className="slick-slide" data-slick-index={8} aria-hidden="true" style={{ width: 196 }} tabIndex={-1}><div><div className="carousel-box" style={{ width: '100%', display: 'inline-block' }}>
                <div className="aiz-card-box border border-light rounded shadow-sm hov-shadow-md mb-2 has-transition bg-white">
                  <div className="position-relative">
                    <a href="https://mmslfashions.in/product/17-17-17-50-kg-bag-mNH9f" className="d-block" tabIndex={-1}>
                      <img className="img-fit mx-auto h-210px lazyloaded" src="https://mmslfashions.in/public/uploads/all/Wiv7vhbeLmejHSA4L7NNWgfAqundcpdd76tW7OiY.jpg" data-src="https://mmslfashions.in/public/uploads/all/Wiv7vhbeLmejHSA4L7NNWgfAqundcpdd76tW7OiY.jpg" alt="17:17:17  50 KG BAG" />
                    </a>
                  </div>
                  <div className="p-md-3 p-2 text-left">
                    <div className="fs-15">
                      <span className="fw-700 text-primary">ZK55.00</span>
                    </div>
                    <div className="rating rating-sm mt-1">
                      <i className="las la-star" /><i className="las la-star" /><i className="las la-star" /><i className="las la-star" /><i className="las la-star" />
                    </div>
                    <h3 className="fw-600 fs-13 text-truncate-2 lh-1-4 mb-0">
                      <a href="https://mmslfashions.in/product/17-17-17-50-kg-bag-mNH9f" className="d-block text-reset" tabIndex={-1}>17:17:17  50 KG BAG</a>
                    </h3>
                  </div>
                </div>
              </div></div></div><div className="slick-slide" data-slick-index={9} aria-hidden="true" style={{ width: 196 }} tabIndex={-1}><div><div className="carousel-box" style={{ width: '100%', display: 'inline-block' }}>
                <div className="aiz-card-box border border-light rounded shadow-sm hov-shadow-md mb-2 has-transition bg-white">
                  <div className="position-relative">
                    <a href="https://mmslfashions.in/product/ammonium-nitrate-25-kg-bag-PJCsc" className="d-block" tabIndex={-1}>
                      <img className="img-fit mx-auto h-210px ls-is-cached lazyloaded" src="https://mmslfashions.in/public/uploads/all/Wiv7vhbeLmejHSA4L7NNWgfAqundcpdd76tW7OiY.jpg" data-src="https://mmslfashions.in/public/uploads/all/Wiv7vhbeLmejHSA4L7NNWgfAqundcpdd76tW7OiY.jpg" alt="AMMONIUM NITRATE 25 KG BAG" />
                    </a>
                  </div>
                  <div className="p-md-3 p-2 text-left">
                    <div className="fs-15">
                      <span className="fw-700 text-primary">ZK55.00</span>
                    </div>
                    <div className="rating rating-sm mt-1">
                      <i className="las la-star" /><i className="las la-star" /><i className="las la-star" /><i className="las la-star" /><i className="las la-star" />
                    </div>
                    <h3 className="fw-600 fs-13 text-truncate-2 lh-1-4 mb-0">
                      <a href="https://mmslfashions.in/product/ammonium-nitrate-25-kg-bag-PJCsc" className="d-block text-reset" tabIndex={-1}>AMMONIUM NITRATE 25 KG BAG</a>
                    </h3>
                  </div>
                </div>
              </div></div></div><div className="slick-slide" data-slick-index={10} aria-hidden="true" style={{ width: 196 }} tabIndex={-1}><div><div className="carousel-box" style={{ width: '100%', display: 'inline-block' }}>
                <div className="aiz-card-box border border-light rounded shadow-sm hov-shadow-md mb-2 has-transition bg-white">
                  <div className="position-relative">
                    <a href="https://mmslfashions.in/product/ammonium-nitrate-5-kg-bag-oq9VC" className="d-block" tabIndex={-1}>
                      <img className="img-fit lazyload mx-auto h-210px" src="https://mmslfashions.in/public/assets/img/placeholder.jpg" data-src="https://mmslfashions.in/public/uploads/all/Wiv7vhbeLmejHSA4L7NNWgfAqundcpdd76tW7OiY.jpg" alt="AMMONIUM NITRATE 5 KG BAG" />
                    </a>
                  </div>
                  <div className="p-md-3 p-2 text-left">
                    <div className="fs-15">
                      <span className="fw-700 text-primary">ZK55.00</span>
                    </div>
                    <div className="rating rating-sm mt-1">
                      <i className="las la-star" /><i className="las la-star" /><i className="las la-star" /><i className="las la-star" /><i className="las la-star" />
                    </div>
                    <h3 className="fw-600 fs-13 text-truncate-2 lh-1-4 mb-0">
                      <a href="https://mmslfashions.in/product/ammonium-nitrate-5-kg-bag-oq9VC" className="d-block text-reset" tabIndex={-1}>AMMONIUM NITRATE 5 KG BAG</a>
                    </h3>
                  </div>
                </div>
              </div></div></div><div className="slick-slide" data-slick-index={11} aria-hidden="true" style={{ width: 196 }} tabIndex={-1}><div><div className="carousel-box" style={{ width: '100%', display: 'inline-block' }}>
                <div className="aiz-card-box border border-light rounded shadow-sm hov-shadow-md mb-2 has-transition bg-white">
                  <div className="position-relative">
                    <a href="https://mmslfashions.in/product/ammonium-nitrate-in-50-kg-bag-ieimd" className="d-block" tabIndex={-1}>
                      <img className="img-fit lazyload mx-auto h-210px" src="https://mmslfashions.in/public/assets/img/placeholder.jpg" data-src="https://mmslfashions.in/public/uploads/all/Wiv7vhbeLmejHSA4L7NNWgfAqundcpdd76tW7OiY.jpg" alt="AMMONIUM NITRATE IN 50 KG BAG" />
                    </a>
                  </div>
                  <div className="p-md-3 p-2 text-left">
                    <div className="fs-15">
                      <span className="fw-700 text-primary">ZK55.00</span>
                    </div>
                    <div className="rating rating-sm mt-1">
                      <i className="las la-star" /><i className="las la-star" /><i className="las la-star" /><i className="las la-star" /><i className="las la-star" />
                    </div>
                    <h3 className="fw-600 fs-13 text-truncate-2 lh-1-4 mb-0">
                      <a href="https://mmslfashions.in/product/ammonium-nitrate-in-50-kg-bag-ieimd" className="d-block text-reset" tabIndex={-1}>AMMONIUM NITRATE IN 50 KG BAG</a>
                    </h3>
                  </div>
                </div>
              </div></div></div></div></div><button type="button" className="slick-next slick-arrow" style={{}} aria-disabled="false" fdprocessedid="gl4lo8"><i className="las la-angle-right" /></button></div>
            </div>
          </div>

        </div>
        <div className="bg-white text-center py-3 px-15px px-lg-25px mt-auto">

        </div>
      </div>

    </>
  } else {
    return (
      <>
        <div className="aiz-main-content">
          <div className="px-15px px-lg-25px">

            <div className="row gutters-10">
              <div className="col-lg-12">
                <div className="row gutters-10">

                  <div className="col-4">
                    <div style={{ width: "100%", cursor: "pointer" }} onClick={() => changeRoute('all_orders')} className="bg-grad-3 text-white rounded-lg mb-4 overflow-hidden">
                      <div className="px-3 pt-3">
                        <div className="opacity-50">
                          <span className="fs-12 d-block">Total</span>
                          Order
                        </div>
                        <div className="h3 fw-700 mb-3">{orders?.count}</div>
                      </div>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                        <path fill="rgba(255,255,255,0.3)" fillOpacity={1} d="M0,128L34.3,112C68.6,96,137,64,206,96C274.3,128,343,224,411,250.7C480,277,549,235,617,213.3C685.7,192,754,192,823,181.3C891.4,171,960,149,1029,117.3C1097.1,85,1166,43,1234,58.7C1302.9,75,1371,149,1406,186.7L1440,224L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z" />
                      </svg>
                    </div>
                  </div>

                  <div className="col-4">
                    <div style={{ width: "100%", cursor: "pointer" }} onClick={() => changeRoute('customer-list')} className="bg-grad-2 text-white rounded-lg mb-4 overflow-hidden">
                      <div className="px-3 pt-3">
                        <div className="opacity-50">
                          <span className="fs-12 d-block">Total</span>
                          Customer
                        </div>
                        <div className="h3 fw-700 mb-3">
                          {users?.count}
                        </div>
                      </div>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                        <path fill="rgba(255,255,255,0.3)" fillOpacity={1} d="M0,128L34.3,112C68.6,96,137,64,206,96C274.3,128,343,224,411,250.7C480,277,549,235,617,213.3C685.7,192,754,192,823,181.3C891.4,171,960,149,1029,117.3C1097.1,85,1166,43,1234,58.7C1302.9,75,1371,149,1406,186.7L1440,224L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z" />
                      </svg>
                    </div>
                  </div>

                  <div className="col-4">
                    <div style={{ width: "100%", cursor: "pointer" }} className="bg-grad-2 text-white rounded-lg mb-4 overflow-hidden">
                      <div className="px-3 pt-3">
                        <div className="opacity-50">
                          <span className="fs-12 d-block">Total</span>
                          Revenue
                        </div>
                        <div className="h3 fw-700 mb-3">
                          {allDashboardData?.revenue}
                        </div>
                      </div>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                        <path fill="rgba(255,255,255,0.3)" fillOpacity={1} d="M0,128L34.3,112C68.6,96,137,64,206,96C274.3,128,343,224,411,250.7C480,277,549,235,617,213.3C685.7,192,754,192,823,181.3C891.4,171,960,149,1029,117.3C1097.1,85,1166,43,1234,58.7C1302.9,75,1371,149,1406,186.7L1440,224L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z" />
                      </svg>
                    </div>
                  </div>

                  <div className="col-4">
                    <div style={{ width: "100%", cursor: "pointer" }} onClick={() => changeRoute('seller')} className="bg-grad-2 text-white rounded-lg mb-4 overflow-hidden">
                      <div className="px-3 pt-3">
                        <div className="opacity-50">
                          <span className="fs-12 d-block">Total</span>
                          Sellers
                        </div>
                        <div className="h3 fw-700 mb-3">
                          {sellerList?.count}
                        </div>
                      </div>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                        <path fill="rgba(255,255,255,0.3)" fillOpacity={1} d="M0,128L34.3,112C68.6,96,137,64,206,96C274.3,128,343,224,411,250.7C480,277,549,235,617,213.3C685.7,192,754,192,823,181.3C891.4,171,960,149,1029,117.3C1097.1,85,1166,43,1234,58.7C1302.9,75,1371,149,1406,186.7L1440,224L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z" />
                      </svg>
                    </div>
                  </div>

                  <div className="col-4">
                    <div style={{ width: "100%", cursor: "pointer" }} onClick={() => changeRoute('categories')} className="bg-grad-1 text-white rounded-lg mb-4 overflow-hidden">
                      <div className="px-3 pt-3">
                        <div className="opacity-50">
                          <span className="fs-12 d-block">Total</span>
                          Product category
                        </div>
                        <div className="h3 fw-700 mb-3">{category?.count}</div>
                      </div>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                        <path fill="rgba(255,255,255,0.3)" fillOpacity={1} d="M0,128L34.3,112C68.6,96,137,64,206,96C274.3,128,343,224,411,250.7C480,277,549,235,617,213.3C685.7,192,754,192,823,181.3C891.4,171,960,149,1029,117.3C1097.1,85,1166,43,1234,58.7C1302.9,75,1371,149,1406,186.7L1440,224L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z" />
                      </svg>
                    </div>
                  </div>

                  {isLoginPickup === 'false' && <div className="col-4">
                    <div style={{ width: "100%", cursor: "pointer" }} onClick={() => changeRoute('products/all')} className="bg-grad-4 text-white rounded-lg mb-4 overflow-hidden">
                      <div className="px-3 pt-3">
                        <div className="opacity-50">
                          <span className="fs-12 d-block">Total</span>
                          Product
                        </div>
                        <div className="h3 fw-700 mb-3">{product?.count}</div>
                      </div>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                        <path fill="rgba(255,255,255,0.3)" fillOpacity={1} d="M0,128L34.3,112C68.6,96,137,64,206,96C274.3,128,343,224,411,250.7C480,277,549,235,617,213.3C685.7,192,754,192,823,181.3C891.4,171,960,149,1029,117.3C1097.1,85,1166,43,1234,58.7C1302.9,75,1371,149,1406,186.7L1440,224L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z" />
                      </svg>
                    </div>
                  </div>}

                  {isLoginPickup === 'false' && <div className="col-4">
                    <div className="bg-grad-1 text-white rounded-lg mb-4 overflow-hidden">
                      <div className="px-3 pt-3">
                        <div className="opacity-50">
                          <span className="fs-12 d-block">Total</span>
                          Coupons
                        </div>
                        <div className="h3 fw-700 mb-3">{coupens?.count}</div>
                      </div>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                        <path fill="rgba(255,255,255,0.3)" fillOpacity={1} d="M0,128L34.3,112C68.6,96,137,64,206,96C274.3,128,343,224,411,250.7C480,277,549,235,617,213.3C685.7,192,754,192,823,181.3C891.4,171,960,149,1029,117.3C1097.1,85,1166,43,1234,58.7C1302.9,75,1371,149,1406,186.7L1440,224L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z" />
                      </svg>
                    </div>
                  </div>}


                  {isLoginPickup === 'false' && <div className="col-4">
                    <div className="bg-grad-1 text-white rounded-lg mb-4 overflow-hidden">
                      <div className="px-3 pt-3">
                        <div className="opacity-50">
                          <span className="fs-12 d-block">Total Active</span>
                          Coupons
                        </div>
                        <div className="h3 fw-700 mb-3">{activeCoupen?.count}</div>
                      </div>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                        <path fill="rgba(255,255,255,0.3)" fillOpacity={1} d="M0,128L34.3,112C68.6,96,137,64,206,96C274.3,128,343,224,411,250.7C480,277,549,235,617,213.3C685.7,192,754,192,823,181.3C891.4,171,960,149,1029,117.3C1097.1,85,1166,43,1234,58.7C1302.9,75,1371,149,1406,186.7L1440,224L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z" />
                      </svg>
                    </div>
                  </div>}

                  <div className="col-4">
                    <div className="bg-grad-1 text-white rounded-lg mb-4 overflow-hidden">
                      <div className="px-3 pt-3">
                        <div className="opacity-50">
                          <span className="fs-12 d-block">Total</span>
                          Rejected Order
                        </div>
                        <div className="h3 fw-700 mb-3">{Rejected?.count ? Rejected?.count : 0}</div>
                      </div>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                        <path fill="rgba(255,255,255,0.3)" fillOpacity={1} d="M0,128L34.3,112C68.6,96,137,64,206,96C274.3,128,343,224,411,250.7C480,277,549,235,617,213.3C685.7,192,754,192,823,181.3C891.4,171,960,149,1029,117.3C1097.1,85,1166,43,1234,58.7C1302.9,75,1371,149,1406,186.7L1440,224L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z" />
                      </svg>
                    </div>
                  </div>

                </div>
              </div>


              <div className="col-lg-12">
                <div className="row gutters-10">

                  <div className="col-4">
                    <div style={{ width: "100%", cursor: "pointer" }} onClick={() => changeRoute('pick_up_points')} className="bg-grad-3 text-white rounded-lg mb-4 overflow-hidden">
                      <div className="px-3 pt-3">
                        <div className="opacity-50">
                          <span className="fs-12 d-block">Total</span>
                          pickuppoints
                        </div>
                        <div className="h3 fw-700 mb-3">{pickuppoints?.count}</div>
                      </div>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                        <path fill="rgba(255,255,255,0.3)" fillOpacity={1} d="M0,128L34.3,112C68.6,96,137,64,206,96C274.3,128,343,224,411,250.7C480,277,549,235,617,213.3C685.7,192,754,192,823,181.3C891.4,171,960,149,1029,117.3C1097.1,85,1166,43,1234,58.7C1302.9,75,1371,149,1406,186.7L1440,224L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z" />
                      </svg>
                    </div>
                  </div>

                  <div className="col-4">
                    <div className="bg-grad-1 text-white rounded-lg mb-4 overflow-hidden">
                      <div className="px-3 pt-3">
                        <div className="opacity-50">
                          <span className="fs-12 d-block">Total</span>
                          Cancelled Order
                        </div>
                        <div className="h3 fw-700 mb-3">{Cancel?.count}</div>
                      </div>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                        <path fill="rgba(255,255,255,0.3)" fillOpacity={1} d="M0,128L34.3,112C68.6,96,137,64,206,96C274.3,128,343,224,411,250.7C480,277,549,235,617,213.3C685.7,192,754,192,823,181.3C891.4,171,960,149,1029,117.3C1097.1,85,1166,43,1234,58.7C1302.9,75,1371,149,1406,186.7L1440,224L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z" />
                      </svg>
                    </div>
                  </div>

                  <div className="col-4">
                    <div className="bg-grad-1 text-white rounded-lg mb-4 overflow-hidden">
                      <div className="px-3 pt-3">
                        <div className="opacity-50">
                          <span className="fs-12 d-block">Total</span>
                          Pending Order
                        </div>
                        <div className="h3 fw-700 mb-3">{Pending?.count}</div>
                      </div>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                        <path fill="rgba(255,255,255,0.3)" fillOpacity={1} d="M0,128L34.3,112C68.6,96,137,64,206,96C274.3,128,343,224,411,250.7C480,277,549,235,617,213.3C685.7,192,754,192,823,181.3C891.4,171,960,149,1029,117.3C1097.1,85,1166,43,1234,58.7C1302.9,75,1371,149,1406,186.7L1440,224L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z" />
                      </svg>
                    </div>
                  </div>

                  {/* <div className="col-4">
                    <div className="bg-grad-1 text-white rounded-lg mb-4 overflow-hidden">
                      <div className="px-3 pt-3">
                        <div className="opacity-50">
                          <span className="fs-12 d-block">Total</span>
                          Shipped Order
                        </div>
                        <div className="h3 fw-700 mb-3"></div>
                      </div>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                        <path fill="rgba(255,255,255,0.3)" fillOpacity={1} d="M0,128L34.3,112C68.6,96,137,64,206,96C274.3,128,343,224,411,250.7C480,277,549,235,617,213.3C685.7,192,754,192,823,181.3C891.4,171,960,149,1029,117.3C1097.1,85,1166,43,1234,58.7C1302.9,75,1371,149,1406,186.7L1440,224L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z" />
                      </svg>
                    </div>
                  </div> */}

                  <div className="col-4">
                    <div className="bg-grad-1 text-white rounded-lg mb-4 overflow-hidden">
                      <div className="px-3 pt-3">
                        <div className="opacity-50">
                          <span className="fs-12 d-block">Total</span>
                          Delivered Order
                        </div>
                        <div className="h3 fw-700 mb-3">{delivered?.count}</div>
                      </div>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                        <path fill="rgba(255,255,255,0.3)" fillOpacity={1} d="M0,128L34.3,112C68.6,96,137,64,206,96C274.3,128,343,224,411,250.7C480,277,549,235,617,213.3C685.7,192,754,192,823,181.3C891.4,171,960,149,1029,117.3C1097.1,85,1166,43,1234,58.7C1302.9,75,1371,149,1406,186.7L1440,224L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z" />
                      </svg>
                    </div>
                  </div>

                </div>
              </div>

            </div>

            {/* <div className="row gutters-10">
              <div className="col-md-3">
                <div className="card">
                  <div className="card-header">
                    <h6 className="mb-0 fs-14">Top Product</h6>
                  </div>
                  <div className="card-body">
                    <div className="chartjs-size-monitor">
                      <div className="chartjs-size-monitor-expand">

                      </div>
                      <div className="chartjs-size-monitor-shrink">

                      </div>
                    </div>
                    <canvas id="graph-1" className="w-100 chartjs-render-monitor" height={625} width={676} style={{ display: 'block', height: 500, width: 541 }} />
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card">
                  <div className="card-header">
                    <h6 className="mb-0 fs-14">Top Seller</h6>
                  </div>
                  <div className="card-body">
                    <div className="chartjs-size-monitor">
                      <div className="chartjs-size-monitor-expand">

                      </div>
                      <div className="chartjs-size-monitor-shrink">

                      </div>
                    </div>
                    <canvas id="graph-2" className="w-100 chartjs-render-monitor" height={625} width={676} style={{ display: 'block', height: 500, width: 541 }} />
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card">
                  <div className="card-header">
                    <h6 className="mb-0 fs-14">Top Categories</h6>
                  </div>
                  <div className="card-body">
                    <div className="chartjs-size-monitor">
                      <div className="chartjs-size-monitor-expand">

                      </div>
                      <div className="chartjs-size-monitor-shrink">

                      </div>
                    </div>
                    <canvas id="graph-2" className="w-100 chartjs-render-monitor" height={625} width={676} style={{ display: 'block', height: 500, width: 541 }} />
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card">
                  <div className="card-header">
                    <h6 className="mb-0 fs-14">Top Pickup Point sell</h6>
                  </div>
                  <div className="card-body">
                    <div className="chartjs-size-monitor">
                      <div className="chartjs-size-monitor-expand">

                      </div>
                      <div className="chartjs-size-monitor-shrink">

                      </div>
                    </div>
                    <canvas id="graph-2" className="w-100 chartjs-render-monitor" height={625} width={676} style={{ display: 'block', height: 500, width: 541 }} />
                  </div>
                </div>
              </div>
            </div> */}

            <div className="card">
              <div className="card-header">
                <h6 className="mb-0">Top Products</h6>
              </div>
              <div className="card-body">
                <div className="aiz-carousel gutters-10 half-outside-arrow slick-initialized slick-slider" data-items={6} data-xl-items={5} data-lg-items={4} data-md-items={3} data-sm-items={2} data-arrows="true">
                  <div className="slick-list draggable"><div className="slick-track" style={{ opacity: 1, width: 2352, transform: 'translate3d(0px, 0px, 0px)' }}>
                    {allDashboardData && allDashboardData?.latestProducts?.map((item) => {
                      return <div className="slick-slide slick-current slick-active" data-slick-index={0} aria-hidden="false" style={{ width: 196 }}>
                        <div>
                          <div className="carousel-box" style={{ width: '100%', display: 'inline-block' }}>
                            <div className="aiz-card-box border border-light rounded shadow-sm hov-shadow-md mb-2 has-transition bg-white">
                              <div className="position-relative">
                                <a href="#" className="d-block" tabIndex={0}>
                                  <img className="img-fit mx-auto h-210px lazyloaded" src={item?.mainimage_url?.url} data-src="#" alt="ACETA" />
                                </a>
                              </div>
                              <div className="p-md-3 p-2 text-left">
                                <div className="fs-15">
                                 {item.variations?.length &&  <span className="fw-700 text-primary">ZK {item?.variations[0]?.mrp}</span>}
                                </div>

                                <h3 className="fw-600 fs-13 text-truncate-2 lh-1-4 mb-0">
                                  <a href="#" className="d-block text-reset" tabIndex={0}>{item?.name}</a>
                                </h3>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    })}
                  </div>
                  </div>
                </div>
              </div>
            </div>


            <div className="card">
              <div className="card-header">
                <h6 className="mb-0">Top Categories</h6>
              </div>
              <div className="card-body">
                <div className="aiz-carousel gutters-10 half-outside-arrow slick-initialized slick-slider" data-items={6} data-xl-items={5} data-lg-items={4} data-md-items={3} data-sm-items={2} data-arrows="true">
                  <div className="slick-list draggable"><div className="slick-track" style={{ opacity: 1, width: 2352, transform: 'translate3d(0px, 0px, 0px)' }}>
                    {allDashboardData && allDashboardData?.topCategories.map((item) => {
                      return <div className="slick-slide slick-current slick-active" data-slick-index={0} aria-hidden="false" style={{ width: 196 }}>
                        <div>
                          <div className="carousel-box" style={{ width: '100%', display: 'inline-block' }}>
                            <div className="aiz-card-box border border-light rounded shadow-sm hov-shadow-md mb-2 has-transition bg-white">
                              <div className="position-relative">
                                <a href="#" className="d-block" tabIndex={0}>
                                  <img className="img-fit mx-auto h-210px lazyloaded" src={item?.category?.icon?.url} data-src="#" alt="ACETA" />
                                </a>
                              </div>
                              <div className="p-md-3 p-2 text-left">
                                <h3 className="fw-600 fs-13 text-truncate-2 lh-1-4 mb-0">
                                  <a href="#" className="d-block text-reset" tabIndex={0}>{item?.category.name}</a>
                                </h3>
                                <div className="fs-15">
                                  <span className="fw-700 text-primary">revenue : {item?.revenue}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    })}
                  </div>
                  </div>
                </div>
              </div>
            </div>


            <div className="card">
              <div className="card-header">
                <h6 className="mb-0">Top Pickup</h6>
              </div>
              <div className="card-body">
                <div className="aiz-carousel gutters-10 half-outside-arrow slick-initialized slick-slider" data-items={6} data-xl-items={5} data-lg-items={4} data-md-items={3} data-sm-items={2} data-arrows="true">
                  <div className="slick-list draggable"><div className="slick-track" style={{ opacity: 1, width: 2352, transform: 'translate3d(0px, 0px, 0px)' }}>
                    {allDashboardData && allDashboardData?.topPickup.map((item) => {
                      return <div className="slick-slide slick-current slick-active" data-slick-index={0} aria-hidden="false" style={{ width: 196 }}>
                        <div>
                          <div className="carousel-box" style={{ width: '100%', display: 'inline-block' }}>
                            <div className="aiz-card-box border border-light rounded shadow-sm hov-shadow-md mb-2 has-transition bg-white">
                              {/* <div className="position-relative">
                                <a href="https://mmslfashions.in/product/aceta" className="d-block" tabIndex={0}>
                                  <img className="img-fit mx-auto h-210px lazyloaded" src={item?.category?.icon?.url} data-src="https://mmslfashions.in/public/uploads/all/DgCjfbcutqaF1glvntiF2FqbUNOXKGozoEflL3Qg.png" alt="ACETA" />
                                </a>
                              </div> */}
                              <div className="p-md-3 p-2 text-left">
                                <div className="fs-15">
                                  <span className="fw-700 text-primary">Revenue : {item?.revenue}</span>
                                </div>

                                <h3 className="fw-600 fs-13 text-truncate-2 lh-1-4 mb-0">
                                  <a className="d-block text-reset" tabIndex={0}>Name : {item?.pickupPoint.pickupPoint_name}</a>
                                  <a className="d-block text-reset" tabIndex={0}>Phone : {item?.pickupPoint.phone}</a>

                                </h3>
                                <h3 className="fw-600 fs-13 text-truncate-2 lh-1-4 mb-0 d-block">
                                  <div className="d-block text-reset" tabIndex={0}>Email : {item?.pickupPoint.email}</div>
                                  <div className="d-block text-reset" tabIndex={0}>Address : {item?.pickupPoint.address}</div>
                                </h3>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    })}
                  </div>
                  </div>
                </div>
              </div>
            </div>


            <div className="card">
              <div className="card-header">
                <h6 className="mb-0">Top Sellers</h6>
              </div>
              <div className="card-body">
                <div className="aiz-carousel gutters-10 half-outside-arrow slick-initialized slick-slider" data-items={6} data-xl-items={5} data-lg-items={4} data-md-items={3} data-sm-items={2} data-arrows="true">
                  <div className="slick-list draggable"><div className="slick-track" style={{ opacity: 1, width: 2352, transform: 'translate3d(0px, 0px, 0px)' }}>
                    {allDashboardData && allDashboardData?.topSellers.map((item) => {
                      return <div className="slick-slide slick-current slick-active" data-slick-index={0} aria-hidden="false" style={{ width: 196 }}>
                        <div>
                          <div className="carousel-box" style={{ width: '100%', display: 'inline-block' }}>
                            <div className="aiz-card-box border border-light rounded shadow-sm hov-shadow-md mb-2 has-transition bg-white">
                              {/* <div className="position-relative">
                                <a href="https://mmslfashions.in/product/aceta" className="d-block" tabIndex={0}>
                                  <img className="img-fit mx-auto h-210px lazyloaded" src={item?.category?.icon?.url} data-src="https://mmslfashions.in/public/uploads/all/DgCjfbcutqaF1glvntiF2FqbUNOXKGozoEflL3Qg.png" alt="ACETA" />
                                </a>
                              </div> */}
                              <div className="p-md-3 p-2 text-left">
                                <div className="fs-15">
                                  <span className="fw-700 text-primary">Revenue : {item?.revenue}</span>
                                </div>

                                <h3 className="fw-600 fs-13 text-truncate-2 lh-1-4 mb-0">
                                  <a className="d-block text-reset" tabIndex={0}>Name : {item?.firstname ? item?.firstname + " " + item?.lastname : '---'}</a>
                                </h3>

                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    })}
                  </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
          <div className="bg-white text-center py-3 px-15px px-lg-25px mt-auto">
            {/*p class="mb-0">&copy;  v6.3.3</p*/}
          </div>
        </div>

      </>
    )
  }
}
export default DashboardAdminComp;