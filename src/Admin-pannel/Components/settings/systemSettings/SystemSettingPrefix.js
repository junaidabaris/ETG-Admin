import React, { useEffect, useState } from 'react'
import { useGetSystemSettingPrefixQuery, useUpdateMoneyFormatMutation, useUpdateSystemSettingPrefixMutation } from '../../all-products/allproductsApi/allProductsApi'
import { ToastContainer, toast } from 'react-toastify';

function SystemSettingPrefix() {

    const [inputVal, setInputval] = useState({
        SalesReferencePrefix: '', ReturnSalePrefix: '', PaymentReferencePrefix: '', PurchasePaymentPrefix: '', DeliveryReferencePrefix: '', QuotationReferencePrefix: '', PurchaseReferencePrefix: '', ReturnPurchasePrefix: '', TransferReferencePrefix: '', ExpensePrefix: '', QuantityAdjustmentPrefix: ''
    });
    const token = window.localStorage.getItem('token')

    const { data } = useGetSystemSettingPrefixQuery(token);

    useEffect(() => {
        const clon = { ...data }
        if (data) {
            setInputval(clon);
        }
    }, [data]);

    const onChangeHandler = (e) => {
        const inpName = e.target.name;
        const inpval = e.target.value;
        const clonedObj = { ...inputVal };
        clonedObj[inpName] = inpval;
        setInputval(clonedObj)
    };

    const [updateSystemPrefixD, response] = useUpdateSystemSettingPrefixMutation();


    const submitUpdateSystemPrefixD = () => {
        const abc = {
            SalesReferencePrefix: inputVal.SalesReferencePrefix, ReturnSalePrefix: inputVal.ReturnSalePrefix, PaymentReferencePrefix: inputVal.PaymentReferencePrefix, PurchasePaymentPrefix: inputVal.PurchasePaymentPrefix, DeliveryReferencePrefix: inputVal.DeliveryReferencePrefix, QuotationReferencePrefix: inputVal.QuotationReferencePrefix, PurchaseReferencePrefix: inputVal.PurchaseReferencePrefix, ReturnPurchasePrefix: inputVal.ReturnPurchasePrefix, TransferReferencePrefix: inputVal.TransferReferencePrefix, ExpensePrefix: inputVal.ExpensePrefix, QuantityAdjustmentPrefix: inputVal.QuantityAdjustmentPrefix
        }
        console.log(abc);
        updateSystemPrefixD({ data: abc, token: token })
        document.getElementById("create-course-form").reset();
    };


    const toastSuccessMessage = () => {
        toast.success("SystemPrefix Updated Successfully", {
            position: "top-center"
        })
    };

    const toastErrorMessage = (msg) => {
        toast.error(msg, {
            position: "top-center"
        })
    }

    useEffect(() => {
        if (response.isSuccess === true) {
            toastSuccessMessage()
        };
    }, [response]);

    useEffect(() => {
        if (response.isError === true) {
            toastErrorMessage(response.error.data.message)
        };
    }, [response]);



    return (
        <>
            <div className="scheduler-border">
                <legend className="scheduler-border">Prefix</legend>
                <div className="row">
                    <div className="col-lg-4">
                        <label htmlFor="site_name">Sales Reference Prefix</label>
                        <input type="text" name='SalesReferencePrefix' value={inputVal?.SalesReferencePrefix} className="form-control tip" onChange={onChangeHandler} />
                    </div>
                    <div className="col-lg-4">
                        <label htmlFor="site_name">Return Sale Prefix</label>
                        <input type="text" name='ReturnSalePrefix' value={inputVal?.ReturnSalePrefix} className="form-control tip" onChange={onChangeHandler} />
                    </div>
                    <div className="col-lg-4">
                        <label htmlFor="site_name">Payment Reference Prefix</label>
                        <input type="text" name='PaymentReferencePrefix' value={inputVal?.PaymentReferencePrefix} className="form-control tip" onChange={onChangeHandler} />
                    </div>
                    <div className="col-lg-4">
                        <label htmlFor="site_name">Purchase Payment Prefix</label>
                        <input type="text" name='PurchasePaymentPrefix' value={inputVal?.PurchasePaymentPrefix} className="form-control tip" onChange={onChangeHandler} />
                    </div>
                    <div className="col-lg-4">
                        <label htmlFor="site_name">Delivery Reference Prefix</label>
                        <input type="text" name='DeliveryReferencePrefix' value={inputVal?.DeliveryReferencePrefix} className="form-control tip" onChange={onChangeHandler} />
                    </div>
                    <div className="col-lg-4">
                        <label htmlFor="site_name">Quotation Reference Prefix</label>
                        <input type="text" name='QuotationReferencePrefix' value={inputVal?.QuotationReferencePrefix} className="form-control tip" onChange={onChangeHandler} />
                    </div>
                    <div className="col-lg-4">
                        <label htmlFor="site_name">Purchase Reference Prefix</label>
                        <input type="text" name='PurchaseReferencePrefix' value={inputVal?.PurchaseReferencePrefix} className="form-control tip" onChange={onChangeHandler} />
                    </div>
                    <div className="col-lg-4">
                        <label htmlFor="site_name">Return Purchase Prefix</label>
                        <input type="text" name='ReturnPurchasePrefix' value={inputVal?.ReturnPurchasePrefix} className="form-control tip" onChange={onChangeHandler} />
                    </div>
                    <div className="col-lg-4">
                        <label htmlFor="site_name">Transfer Reference Prefix</label>
                        <input type="text" name='TransferReferencePrefix' value={inputVal?.TransferReferencePrefix} className="form-control tip" onChange={onChangeHandler} />
                    </div>
                    <div className="col-lg-4">
                        <label htmlFor="site_name">Expense Prefix</label>
                        <input type="text" name='ExpensePrefix' value={inputVal?.ExpensePrefix} className="form-control tip" onChange={onChangeHandler} />
                    </div>
                    <div className="col-lg-4">
                        <label htmlFor="site_name">Quantity Adjustment Prefix</label>
                        <input type="text" name='QuantityAdjustmentPrefix' value={inputVal?.QuantityAdjustmentPrefix} className="form-control tip" onChange={onChangeHandler} />
                    </div>
                </div>
                <button className="btn btn-primary m-3 pe-5" type='button' onClick={submitUpdateSystemPrefixD} style={{ width: '60px', textAlign: 'end' }}>Save</button>
                <ToastContainer />
            </div>
        </>
    )
}

export default SystemSettingPrefix