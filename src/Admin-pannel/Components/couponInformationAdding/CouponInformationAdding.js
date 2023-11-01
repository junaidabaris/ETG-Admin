import { useEffect, useState } from "react";
import { toast, ToastContainer } from 'react-toastify';
import { useAddNewCouponMutation, useEditCouponMutation, useGetCouponByIdQuery, useGetCouponsQuery } from "../all-products/allproductsApi/allProductsApi";
import { useParams } from "react-router-dom";
import axios from "axios";



function CouponInformationAdding() {
    const [inputval, setInputVal] = useState({ type: 'For Products', code: '', start_date: '', end_date: '', discount: '', discount_type: 'Amount', description: '' });
    const [addNewCoupon, response] = useAddNewCouponMutation();
    const params = useParams()
    const token = window.localStorage.getItem('token')
    const onChangeHandler = async (e) => {
        if (e.target.name == 'icon') {
            const images = new FormData();
            const inpName = e.target.name;
            const clonedObj = { ...inputval };
            images.append('image', e.target.files[0])
            const res2 = await axios.post(`https://onlineparttimejobs.in/api/cloudinaryImage/addImage`, images)
            
            clonedObj[inpName] = {...res2.data};
            setInputVal(clonedObj)
        } else {
            const inpName = e.target.name;
            const inpVal = e.target.value;
            const clonedObj = { ...inputval };
            clonedObj[inpName] = inpVal;
            setInputVal(clonedObj)
        }

    };
    const [editCoup, response2] = useEditCouponMutation();
    const addCouponsData = (e) => {
        e.preventDefault();
        if (params?.id) {
            editCoup({ id: params.id, data: inputval, token: token })
        } else {
            addNewCoupon({ data: inputval, token: token })
        }
    };

    const toastSuccessMessage = () => {
        toast.success("Coupon added Successfully", {
            position: "top-center"
        })
    };
    const toastSuccessMessage2 = () => {
        toast.success("Coupon Edit Successfully", {
            position: "top-center"
        })
    };
    const { data, isSuccess } = useGetCouponByIdQuery({ id: params.id, token: token });
    useEffect(() => {
        if (params?.id) {
            setInputVal(data)
        }
    }, [isSuccess])

    useEffect(() => {
        if (response.isSuccess === true) {
            toastSuccessMessage()
        };
        if (response.isError === true) {
            alert('!Coupon not added')
        };
    }, [response])
    useEffect(() => {
        if (response2.isSuccess === true) {
            toastSuccessMessage2()
        };
        if (response2.isError === true) {
            alert('!Coupon not Edit')
        };
    }, [response2])


    return (
        <>
            <div className="aiz-main-content">
                <div className="px-15px px-lg-25px">
                    <div className="col-lg-8 mx-auto">
                        <div className="card">
                            <div className="card-header">
                                <h5 className="mb-0 h6">Coupon Information Adding</h5>
                            </div>
                            <div className="card-body">
                                <form className="form-horizontal" id="create-course-form" onSubmit={addCouponsData}>
                                    <input type="hidden" name="_token" defaultValue="iBYZn0yUYtaUjAFRti5rGbbxBIt6hBfgN5hhrs59" />
                                    <div className="form-group row">
                                        <label className="col-lg-3 col-from-label" htmlFor="name">Coupon Category</label>
                                        <div className="col-lg-9">

                                            <select className="form-control" value={inputval?.type} name="type" onChange={onChangeHandler}>
                                                {/* {data && data.map((item) => {
                                                    return <option value={item._id} key={item._id}>{item.type}</option>
                                                })} */}
                                                <option value={'For Products'}>For Products</option>
                                                <option value={'For Orders'}>For Orders</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <label className="col-lg-3 col-from-label" htmlFor="code">Code</label>
                                        <div className="col-lg-9">
                                            <input className="form-control" placeholder="code" value={inputval?.code} type="text" name="code" onChange={onChangeHandler} />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-lg-3 col-from-label" htmlFor="code">Image</label>
                                        <div className="col-lg-9">
                                            <input className="form-control" type="file" name="icon" onChange={onChangeHandler} />
                                            {inputval?.icon?.url && <img src={inputval?.icon?.url} style={{width:"100px",height:"100px"}}/>}
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <label className="col-lg-3 col-from-label" htmlFor="discount">Discount</label>
                                        <div className="col-lg-9">
                                            <input className="form-control" placeholder="discount" value={inputval?.discount} type="text" name="discount" onChange={onChangeHandler} />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-lg-3 col-from-label" htmlFor="discount">Description</label>
                                        <div className="col-lg-9">
                                            <input className="form-control" placeholder="Short Description" value={inputval?.description} type="text" name="description" onChange={onChangeHandler} />
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <label className="col-lg-3 col-from-label" htmlFor="discount type">Discount Type</label>
                                        <div className="col-lg-9">
                                            {/* <input className="form-control" placeholder="discount type" type="text" name="discount_type" onChange={onChangeHandler} /> */}
                                            <select className="form-select" name="discount_type" value={inputval?.discount_type} aria-label="Default select example" onChange={onChangeHandler} >
                                                <option value={"Amount"}>Amount</option>
                                                <option value={"Percent"}>Percent</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <label className="col-lg-3 col-from-label" htmlFor="start date">Start date</label>
                                        <div className="col-lg-9">
                                            <input className="form-control" placeholder="start date" type="date" value={inputval?.start_date} name="start_date" onChange={onChangeHandler} />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-lg-3 col-from-label" htmlFor="end date">End date</label>
                                        <div className="col-lg-9">
                                            <input className="form-control" placeholder="end date" type="date" name="end_date" value={inputval?.end_date} onChange={onChangeHandler} />
                                        </div>
                                    </div>

                                    {/* <div id="coupon_form">
                                    </div> */}
                                    <div className="form-group mb-0 text-right">
                                        <button type="submit" className="btn btn-primary" >{params?.id ? 'Update' : 'Save'}</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-white text-center py-3 px-15px px-lg-25px mt-auto">
                    {/*p class="mb-0">&copy;  v6.3.3</p*/}
                </div>
                <ToastContainer />
            </div>
        </>
    )
}
export default CouponInformationAdding;