import { AiOutlineQuestionCircle } from "react-icons/ai";
import { useGetCustomerSelectedBillingAddressByIdQuery, useGetCustomerSelectedShippingAddressByIdQuery } from "../../all-products/allproductsApi/allProductsApi";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

function AddressSec() {
    const params = useParams();
    const [billings, setBillings] = useState({
        type: "billing",
        country: "",
        email: "",
        phone: "",
        state: "",
        city: "",
        zip: "",
        addressLine1: "",
        addressLine2: "",
        landmark: "",
        province: "",
        company: "",
       
    })

    const [updates,setUpdates] = useState(false)
    const [UpdateId ,setUpdateId] = useState()

    const [selectedBilliingAddress , setselectedBilliingAddress] = useState()
    const getDatas = async () => {
        const res = await axios.get(`https://onlineparttimejobs.in/api/user/billAddress/${params.id}`,{
            
        })
        setselectedBilliingAddress(res.data)
    }
    useEffect(() => {
        getDatas()
    },[])

    const changeBilling = (e) => {
        const clone = { ...billings }
        clone[e.target.name] = e.target.value
        setBillings(clone)
    }
    const token = window.localStorage.getItem('token')

    const toastSuccessMessage = () => {
        toast.success("Customer Billing Address Successfull", {
            position: "top-center"
        })
    };
    const toastErrorMessage = () => {
        toast.error("Customer Billing Address Not Add", {
            position: "top-center"
        })
    } 
   
    const senData = async () => {
        const obj = {...billings , userid : params.id}
      if (updates) {
        try {
            const res = await axios.put(`https://onlineparttimejobs.in/api/shippingAddress/update_shippingAddresss/${UpdateId}`, obj)
            alert('Address Upated Successfull')
           setTimeout(() => {
            getDatas()
            setBillings({
                type: "billing",
                country: "",
                email: "",
                phone: "",
                state: "",
                city: "",
                zip: "",
                addressLine1: "",
                addressLine2: "",
                landmark: "",
                province: "",
                company: "",
               
            })
           }, 2000);
        } catch (error) {
           alert('Address Update Fail !!')
        }
      } else {
        try {
            const res = await axios.post(`https://onlineparttimejobs.in/api/shippingAddress/add_shippingAddresss`, obj)
            toastSuccessMessage()
           setTimeout(() => {
            getDatas()
            setBillings({
                type: "billing",
                country: "",
                email: "",
                phone: "",
                state: "",
                city: "",
                zip: "",
                addressLine1: "",
                addressLine2: "",
                landmark: "",
                province: "",
                company: "",
               
            })
           }, 2000);
        } catch (error) {
            toastErrorMessage()
        }
      }
      setUpdates(false)
      setUpdateId(null)
    }

    const sendDatas =(item)=>{
        setUpdates(true)
        setUpdateId(item?._id)
        setBillings(item)
    }
    const deleteData = async (id)=>{
        try {
            const res = await axios.delete(`https://onlineparttimejobs.in/api/shippingAddress/delete_shippingAddresss/${id}`,{
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                    'Authorization': 'Bearer ' + token
                },
            })
            getDatas()
            alert('Address Deleted')
        } catch (error) {
            alert('Address Not Deleted')
        }
    }
    return <>
        <div className='col-md-12 mt-3 mb-3'>
            <div className='row'>
                <div className='col-md-12 ' >
                    <div className="row">
                        <h6 className='mr-3'>Billing Address</h6>

                        <div className="col-4">
                            <div className="">
                                <label htmlFor="exampleInputEmail1" className="form-label">Country</label>
                                <input type="text" className="form-control" name="country" value={billings.country} onChange={changeBilling} aria-describedby="emailHelp" />
                            </div>
                        </div>

                        <div className="col-4">
                            <div className="">
                                <label htmlFor="exampleInputEmail1" className="form-label">State</label>
                                <input type="text" className="form-control" name="state" value={billings.state} onChange={changeBilling} aria-describedby="emailHelp" />
                            </div>
                        </div>

                        <div className="col-4">
                            <div className="">
                                <label htmlFor="exampleInputEmail1" className="form-label">City</label>
                                <input type="text" className="form-control" name="city" value={billings.city} onChange={changeBilling} aria-describedby="emailHelp" />
                            </div>
                        </div>

                        <div className="col-4">
                            <div className="">
                                <label htmlFor="exampleInputEmail1" className="form-label">ZIP</label>
                                <input type="text" className="form-control" name="zip" value={billings.zip} onChange={changeBilling} aria-describedby="emailHelp" />
                            </div>
                        </div>


                        <div className="col-4">
                            <div className="">
                                <label htmlFor="exampleInputEmail1" className="form-label">Province</label>
                                <input type="text" className="form-control" name="province" value={billings.province} onChange={changeBilling} aria-describedby="emailHelp" />
                            </div>
                        </div>

                        <div className="col-4">
                            <div className="">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                                <input type="email" className="form-control" name="email" value={billings.email} onChange={changeBilling} aria-describedby="emailHelp" />
                            </div>
                        </div>

                        <div className="col-4">
                            <div className="">
                                <label htmlFor="exampleInputEmail1" className="form-label">Phone</label>
                                <input type="number" className="form-control" name="phone" value={billings.phone} onChange={changeBilling} aria-describedby="emailHelp" />
                            </div>
                        </div>


                        <div className="col-4">
                            <div className="">
                                <label htmlFor="exampleInputEmail1" className="form-label">Address Line1</label>
                                <input type="text" className="form-control" name="addressLine1" value={billings.addressLine1} onChange={changeBilling} aria-describedby="emailHelp" />
                            </div>
                        </div>

                        <div className="col-4">
                            <div className="">
                                <label htmlFor="exampleInputEmail1" className="form-label">Address Line2</label>
                                <input type="text" className="form-control" name="addressLine2" value={billings.addressLine2} onChange={changeBilling} aria-describedby="emailHelp" />
                            </div>
                        </div>

                        <div className="col-4">
                            <div className="">
                                <label htmlFor="exampleInputEmail1" className="form-label">Landmark</label>
                                <input type="text" className="form-control" name="landmark" value={billings.landmark} onChange={changeBilling} aria-describedby="emailHelp" />
                            </div>
                        </div>

                        <div className="col-4">
                            <div className="">
                                <label htmlFor="exampleInputEmail1" className="form-label">Company</label>
                                <input type="text" className="form-control" name="company" value={billings.company} onChange={changeBilling} aria-describedby="emailHelp" />
                            </div>
                        </div>

                    </div>

                </div>

                {/* <div className='col-md-6 ' >
                    <h6 className='mr-3'> <AiOutlineQuestionCircle /> Shipping Address
                        <small> <a href="#" className='ml-3'>Copy Billing Adress</a></small></h6>
                    <div className="">
                        <label htmlFor="exampleInputEmail1" className="form-label">Country</label>
                        <input type="text" className="form-control" name="country" value={shipping.country} onChange={changeShipping} aria-describedby="emailHelp" />
                    </div>

                    <div className="">
                        <label htmlFor="exampleInputEmail1" className="form-label">State</label>
                        <input type="text" className="form-control" name="state" value={shipping.state} onChange={changeShipping} aria-describedby="emailHelp" />
                    </div>
                    <div className="">
                        <label htmlFor="exampleInputEmail1" className="form-label">City</label>
                        <input type="text" className="form-control" name="city" value={shipping.city} onChange={changeShipping} aria-describedby="emailHelp" />
                    </div>
                    <div className="">
                        <label htmlFor="exampleInputEmail1" className="form-label">ZIP</label>
                        <input type="text" className="form-control" name="zip" value={shipping.zip} onChange={changeShipping} aria-describedby="emailHelp" />
                    </div>
                    <div className="">
                        <label htmlFor="exampleInputEmail1" className="form-label">Province</label>
                        <input type="text" className="form-control" name="province" value={shipping.province} onChange={changeShipping} aria-describedby="emailHelp" />
                    </div>
                    <div className="">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                        <input type="email" className="form-control" name="email" value={shipping.email} onChange={changeShipping} aria-describedby="emailHelp" />
                    </div>
                    <div className="">
                        <label htmlFor="exampleInputEmail1" className="form-label">Phone</label>
                        <input type="number" className="form-control" name="phone" value={shipping.phone} onChange={changeShipping} aria-describedby="emailHelp" />
                    </div>
                    <div className="">
                        <label htmlFor="exampleInputEmail1" className="form-label">Address Line1</label>
                        <input type="text" className="form-control" name="addressLine1" value={shipping.addressLine1} onChange={changeShipping} aria-describedby="emailHelp" />
                    </div>
                    <div className="">
                        <label htmlFor="exampleInputEmail1" className="form-label">Address Line2</label>
                        <input type="text" className="form-control" name="addressLine2" value={shipping.addressLine2} onChange={changeShipping} aria-describedby="emailHelp" />
                    </div>
                    <div className="">
                        <label htmlFor="exampleInputEmail1" className="form-label">Landmark</label>
                        <input type="text" className="form-control" name="landmark" value={shipping.landmark} onChange={changeShipping} aria-describedby="emailHelp" />
                    </div>
                    <div className="">
                        <label htmlFor="exampleInputEmail1" className="form-label">Company</label>
                        <input type="text" className="form-control" name="company" value={shipping.company} onChange={changeShipping} aria-describedby="emailHelp" />
                    </div>

                </div> */}

            </div>

            <div className='col-md-12 d-flex justify-content-end mt-3'>
                <button type='button' className='btn btn-primary' onClick={senData}>{updates ? 'Update' : 'Save'}</button>
            </div>
            <div className="row" style={{ margin: "20px 0" }}>
                <h5>Adddress List</h5>
                <hr />
                <div>
                    {selectedBilliingAddress?.address.map((item) => {
                        return <div className="innerAddr" style={{ margin: "10px 0" }}>
                            <div className="editoresec">
                                <a className="btn btn-soft-primary btn-icon btn-circle btn-sm" title="Edit" onClick={()=>{sendDatas(item)}} ><i class="las la-edit"></i></a>
                                <button type="button" className="btn btn-soft-danger btn-icon btn-circle btn-sm" onClick={()=>{deleteData(item._id)}}><i class="las la-trash"></i></button>
                            </div>
                            <div>
                                <h6>Address Line : {item?.addressLine1} {item?.addressLine2}</h6>
                                <h6>Province : {item?.province}</h6>
                                <h6>Landmark : {item?.landmark}</h6>
                                <h6>City : {item?.city}</h6>
                                <h6>State : {item?.state}</h6>
                                <h6>Country : {item?.country}</h6>
                            </div>
                        </div>
                    })}
                </div>

            </div>
        </div>

    </>
}
export default AddressSec