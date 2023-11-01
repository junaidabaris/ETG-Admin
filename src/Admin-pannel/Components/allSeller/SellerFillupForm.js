
import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Select from 'react-select';
import { AiOutlineQuestionCircle } from 'react-icons/ai'
import { useEditCustomerMutation, useGetCurrencyQuery, useGetCustomerByIdQuery, useGetCustomerRoleQuery } from '../all-products/allproductsApi/allProductsApi';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import KycFormVender from './KycFormVender';
import ShippingAddress from './venderFillup/ShippingAddress';
import BillingAddFill from './venderFillup/BillingAddFill';
import Kycetails from './venderFillup/Kycetails';
function SellerFillupForm() {
    const token = window.localStorage.getItem('token')

    const [value, setValue] = React.useState('1');
    const [val, setVal] = useState(null)
    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)
    const options = [
        { value: "", label: "" },

    ]

    const options2 = [
        { value: 'India', label: 'India' },
        { value: 'Iraq', label: 'Iraq' },
        { value: 'Englend', label: 'Englend' },
        { value: 'Australia', label: 'Austrlia' },
    ]

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    const [inputval, setInputval] = useState({
        firstname: '',
        lastname: '',
        email: '',
        mobile: '',
        approve: null,
        language: '',
        currency: "",
        time_format: "",
        password: '',
        approve: null,
        selectedBillingAddress: '',
        selectedShippingAddress: '',
        role_id: '',
    });

    const params = useParams();

    const { data: currency, isSuccess } = useGetCurrencyQuery(token)
    const [options1, setOption1] = useState()
    useEffect(() => {
        if (currency) {
            const maps = currency.map((item) => {
                return { ...item, value: item.name }
            })
            setOption1(maps)
        }
    }, [isSuccess])



    // const { data } = useGetCustomerByIdQuery({ id: params.id, token: token });
    const [editCustomer, response] = useEditCustomerMutation();



    // useEffect(() => {
    //     const obj = { ...data }
    //     setInputval(obj)
    // }, [data]);


    const onChangeHandler = (e) => {
        const inpName = e.target.name;
        const inpval = e.target.value;
        const clonedObj = { ...inputval };
        clonedObj[inpName] = inpval;
        setInputval(clonedObj)
    };
    const submitEditCustomerData = (e) => {
        e.preventDefault();
        // editCustomer({ id: params.id, data: inputval,token:token })
    };

    const toastSuccessMessage = () => {
        toast.success("Customer Edited Successfully", {
            position: "top-center"
        })
    };


    useEffect(() => {
        if (response.isSuccess === true) {
            toastSuccessMessage()
        };
        if (response.isError === true) {
            alert('!Customer not edited')
        };
    }, [response])

    return (
        <>
            <ToastContainer />
            <div className="container-fluid">
                <div className="row size-column">
                    <div className="card m-auto" style={{ width: 950 }}>
                        <div className="card-body">
                            <Box sx={{ width: '100%', typography: 'body1' }}>
                                <TabContext value={value}>
                                    {/* <Carousel> */}
                                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                        <TabList onChange={handleChange} aria-label="lab API tabs example">
                                            <Tab label="Vendor KYC" value="1" />
                                            <Tab label='Shipping' value='2' />
                                            <Tab label='Billing' value='3' />
                                            <Tab label="Vendor Details" value="4" />
                                        </TabList>
                                    </Box>
                                    <TabPanel value="4">
                                       <Kycetails/>

                                    </TabPanel>

                                    <TabPanel value="1">
                                        <KycFormVender />
                                    </TabPanel>
                                    <TabPanel value="3">
                                        <BillingAddFill />
                                    </TabPanel>
                                    <TabPanel value="2">
                                        <ShippingAddress />
                                    </TabPanel>

                                </TabContext>
                            </Box>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default SellerFillupForm