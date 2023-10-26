import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Carousel from 'react-bootstrap/Carousel';
import Select from 'react-select';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button'
import { BsPlus } from 'react-icons/bs'
import { AiOutlineQuestionCircle } from 'react-icons/ai'
import { LuFileSignature } from 'react-icons/lu'
import { useEditCustomerMutation, useGetCurrencyQuery, useGetCustomerByIdQuery, useGetCustomerRoleQuery, useGetCustomerSelectedBillingAddressByIdQuery, useGetCustomerSelectedShippingAddressByIdQuery, useGetLanguagesQuery, useGetTimeFormatQuery } from '../../all-products/allproductsApi/allProductsApi';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import AddressSec from './AddressSec';
import BasicDetail from './BasicDetail';
import AddContact from './AddContact';
import ExtraCurcumtion from './ExtraCurcumtion';
import Educations from './Educations';
import BillingAddress from '../../../Pages/billingAdd/BillingAddress';
import PhysicalElegibility from './PhysicalElegibility';
import OtherDetail from './OtherDetail';
import ShiipingAd from './ShiipingAd';
import { token } from '../../../common/TokenArea';
function NewCustomers() {

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

    const { data: customerRoleData } = useGetCustomerRoleQuery()

    const { data: language } = useGetLanguagesQuery(token)

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



    const { data } = useGetCustomerByIdQuery({id:params.id , token:token});
    const [editCustomer, response] = useEditCustomerMutation();



    useEffect(() => {
        const obj = { ...data }
        setInputval(obj)
    }, [data]);


    const onChangeHandler = (e) => {
        const inpName = e.target.name;
        const inpval = e.target.value;
        const clonedObj = { ...inputval };
        clonedObj[inpName] = inpval;
        setInputval(clonedObj)
    };
    const submitEditCustomerData = (e) => {
        e.preventDefault();
        editCustomer({ id: params.id, data: inputval,token:token })
        // document.getElementById("create-course-form").reset();
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
                                            <Tab label="Customer Details" value="1" />
                                            <Tab label="Basic Details " value="2" />
                                            <Tab label="Other Documents " value="5" />
                                            <Tab label='Billing' value='11' />
                                            <Tab label='Shipping' value='14' />
                                            <Tab label='Extra Carriculam' value='6' />
                                            <Tab label='Physical Elligibility' value='7' />
                                            <Tab label="Education  " value="4" />
                                            <Tab label="Address & Contact " value="3" />
                                            
                                            <Tab label='Other Detail' value='8' />
                                            <Tab label='Document Uploading' value='9' />
                                            <Tab label='Custom Fields' value='10' />
                                        </TabList>
                                    </Box>
                                    <TabPanel value="1">
                                        <div className='row'>
                                            <div className='col-md-12 mb-3'>
                                                <label htmlFor="" className='form-label'><span>*</span>Company</label>
                                                <input type="text" className='form-control' name='company' value={inputval?.company} onChange={onChangeHandler} />
                                            </div>
                                            <div className='col-md-12 mb-3'>
                                                <label htmlFor="" className='form-label'>VAT Number</label>
                                                <input type="text" className="form-control" name='vat_number' value={inputval?.vat_number} onChange={onChangeHandler} />
                                            </div>
                                            <div className='col-md-12 mb-3'>
                                                <label htmlFor="" className='form-label'>Phone Number</label>
                                                <input type="text" className="form-control" name='mobile' value={inputval?.mobile} onChange={onChangeHandler} />
                                            </div>
                                            <div className='col-md-12 mb-3'>
                                                <label htmlFor="" className='form-label'>Website</label>
                                                <input type="text" className="form-control" name='website' value={inputval?.website} onChange={onChangeHandler} />
                                            </div>
                                            <div className='col-md-12 mb-3'>
                                                <label htmlFor="" className='form-label'><span><AiOutlineQuestionCircle /></span>Currency</label>
                                                <Select options={options1} defaultValue={val} ></Select>
                                            </div>
                                            <div className='col-md-12 mb-3'>
                                                <label htmlFor="" className='form-label'>Address</label>
                                                <textarea id="" cols="30" rows="5" className='form-control' name='address' value={inputval?.address} onChange={onChangeHandler} ></textarea>
                                            </div>
                                            <div className='col-md-12 mb-3'>
                                                <label htmlFor="" className='form-label'>City</label>
                                                <input type="text" className="form-control" name='city' value={inputval?.city} onChange={onChangeHandler} />
                                            </div>
                                            <div className='col-md-12 mb-3'>
                                                <label htmlFor="" className='form-label'>State</label>
                                                <input type="text" className="form-control" name='state' value={inputval?.state} onChange={onChangeHandler} />
                                            </div>
                                            <div className='col-md-12 mb-3'>
                                                <label htmlFor="" className='form-label'>Zipcode</label>
                                                <input type="number" className="form-control" name='zip' value={inputval?.zip} onChange={onChangeHandler} />
                                            </div>
                                            {/* <div className='col-md-12 mb-3'>
                                                <label htmlFor="" className='form-label'>Country</label>
                                                <Select options={options2} defaultValue={val} onChange={setVal}></Select>
                                            </div> */}
                                            <div className='col-md-12 d-flex justify-content-end'>
                                                <button type='button' className='btn btn-primary' onClick={submitEditCustomerData}>Save</button>
                                            </div>


                                        </div>

                                    </TabPanel>

                                    <TabPanel value="11">
                                        <AddressSec />
                                        {/* <BillingAddress/> */}
                                    </TabPanel>
                                    <TabPanel value="14">
                                        <ShiipingAd />
                                    </TabPanel>

                                    <TabPanel value="2">
                                        <BasicDetail />
                                    </TabPanel>

                                    <TabPanel value="3">
                                        <AddContact />
                                    </TabPanel>

                                    <TabPanel value="4">
                                        <Educations />
                                    </TabPanel>

                                    <TabPanel value="5">
                                        <div className='border' style={{ width: 700, height: 2600 }}>
                                            <div className='col-md-12 mt-3 mb-3'>
                                                <strong>Category Certiflcate</strong>
                                            </div>
                                            <div className='col-md-12 mb-3'>
                                                <label htmlFor="" className='form-label'>Certiflcate Issuing Authority</label>
                                                <input type="text" className='form-control' />
                                            </div>
                                            <div className='col-md-12 mb-3'>
                                                <label htmlFor="" className='form-label'>Date of Issue of Certiflcate</label>
                                                <input type="date" className='form-control' />
                                            </div>
                                            <div className='col-md-12 mb-3'>
                                                <label htmlFor="" className='form-label'>Application No.</label>
                                                <input type="number" className='form-control' />
                                            </div>
                                            <div className='col-md-12 mb-3'>
                                                <label htmlFor="" className='form-label'>Certificate No</label>
                                                <input type="number" className='form-control' />
                                            </div>


                                            <div className='col-md-12 mt-3 mb-3'>
                                                <strong>Domicile Certiflcate</strong>
                                            </div>
                                            <div className='col-md-12 mb-3'>
                                                <label htmlFor="" className='form-label'>Certiflcate Issuing Authority</label>
                                                <input type="text" className='form-control' />
                                            </div>
                                            <div className='col-md-12 mb-3'>
                                                <label htmlFor="" className='form-label'>Date of Issue of Certiflcate</label>
                                                <input type="date" className='form-control' />
                                            </div>
                                            <div className='col-md-12 mb-3'>
                                                <label htmlFor="" className='form-label'>Application No.</label>
                                                <input type="number" className='form-control' />
                                            </div>
                                            <div className='col-md-12 mb-3'>
                                                <label htmlFor="" className='form-label'>Certificate No</label>
                                                <input type="number" className='form-control' />
                                            </div>


                                            <div className='col-md-12 mt-3 mb-3'>
                                                <strong>Income Certiflcate</strong>
                                            </div>
                                            <div className='col-md-12 mb-3'>
                                                <label htmlFor="" className='form-label'>Certiflcate Issuing Authority</label>
                                                <input type="text" className='form-control' />
                                            </div>
                                            <div className='col-md-12 mb-3'>
                                                <label htmlFor="" className='form-label'>Date of Issue of Certiflcate</label>
                                                <input type="date" className='form-control' />
                                            </div>
                                            <div className='col-md-12 mb-3'>
                                                <label htmlFor="" className='form-label'>Application No.</label>
                                                <input type="number" className='form-control' />
                                            </div>
                                            <div className='col-md-12 mb-3'>
                                                <label htmlFor="" className='form-label'>Certificate No</label>
                                                <input type="number" className='form-control' />
                                            </div>

                                            <div className='col-md-12 mt-3 mb-3'>
                                                <strong>Birth  Certiflcate</strong>
                                            </div>
                                            <div className='col-md-12 mb-3'>
                                                <label htmlFor="" className='form-label'>Certiflcate Issuing Authority</label>
                                                <input type="text" className='form-control' />
                                            </div>
                                            <div className='col-md-12 mb-3'>
                                                <label htmlFor="" className='form-label'>Date of Issue of Certiflcate</label>
                                                <input type="date" className='form-control' />
                                            </div>
                                            <div className='col-md-12 mb-3'>
                                                <label htmlFor="" className='form-label'>Application No.</label>
                                                <input type="number" className='form-control' />
                                            </div>
                                            <div className='col-md-12 mb-3'>
                                                <label htmlFor="" className='form-label'>Certificate No</label>
                                                <input type="number" className='form-control' />
                                            </div>
                                            <div className='col-md-12 mt-3 mb-3'>
                                                <strong>Disability Certiflcate</strong>
                                            </div>
                                            <div className='col-md-12 mb-3'>
                                                <label htmlFor="" className='form-label'>Certiflcate Issuing Authority</label>
                                                <input type="text" className='form-control' />
                                            </div>
                                            <div className='col-md-12 mb-3'>
                                                <label htmlFor="" className='form-label'>Date of Issue of Certiflcate</label>
                                                <input type="date" className='form-control' />
                                            </div>
                                            <div className='col-md-12 mb-3'>
                                                <label htmlFor="" className='form-label'>Application No.</label>
                                                <input type="number" className='form-control' />
                                            </div>
                                            <div className='col-md-12 mb-3'>
                                                <label htmlFor="" className='form-label'>Certificate No</label>
                                                <input type="number" className='form-control' />
                                            </div>
                                            <div className='col-md-12 mb-3'>
                                                <label htmlFor="" className='form-label'>Total Family Annual Income</label>
                                                <input type="number" className='form-control' />
                                            </div>
                                            <div className='col-md-12 mb-3'>
                                                <label htmlFor="" className='form-label'>Type of photo ID</label>
                                                <select name="" id="" className='form-select'>
                                                    <option value="Pan Card">Pan Card</option>
                                                    <option value="Driving Licence"> Driving Licence</option>
                                                    <option value="Pass Port"> Pass Port</option>
                                                    <option value="Votar Card"> Votar Card</option>
                                                    <option value="Ration Card"> Ration Card</option>
                                                </select>

                                            </div>
                                            <div className='col-md-12 mb-3'>
                                                <label htmlFor="" className='form-label'>Photo ID number</label>
                                                <input type="text" className='form-control' />
                                            </div>
                                            <div className='col-md-12 mb-3'>
                                                <label htmlFor="" className='form-label'>Aadhaar Card Status</label>
                                                <select name="" id="" className='form-select'>
                                                    <option value="Yes"> Yes   </option>
                                                    <option value="No"> No   </option>
                                                </select>

                                            </div>
                                            <div className='col-md-12 mb-3'>
                                                <label htmlFor="" className='form-label'>Aadhaar Card number</label>
                                                <input type="text" className='form-control' />
                                            </div>
                                            <div className='col-md-12 mb-3'>
                                                <label htmlFor="" className='form-label'>Aadhar Virtual id</label>
                                                <input type="text" className='form-control' />
                                            </div>

                                        </div>
                                        <div className='col-md-12 d-flex justify-content-end mt-3'>
                                            <button className='btn btn-outline-secondary mr-2'>Save And Create Contact</button>
                                            <button type='button' className='btn btn-primary'>Save</button>
                                        </div>

                                    </TabPanel>

                                    <TabPanel value="6">
                                        <ExtraCurcumtion />
                                    </TabPanel>

                                    <TabPanel value="7">
                                      <PhysicalElegibility/>
                                    </TabPanel>


                                    <TabPanel value="8">
                                       <OtherDetail/>
                                    </TabPanel>

                                    <TabPanel value="9">
                                        <div className='border' style={{ width: 700, height: 1400 }}>
                                            <div className='col-md-12 mt-3 mb-3' >
                                                <label htmlFor="" className='form-label'>Highschool</label>
                                                <input type="file" className='form-control' />
                                            </div>
                                            <div className='col-md-12 mb-3' >
                                                <label htmlFor="" className='form-label'>Intermediate</label>
                                                <input type="file" className='form-control' />
                                            </div>
                                            <div className='col-md-12 mb-3' >
                                                <label htmlFor="" className='form-label'>Graduation</label>
                                                <input type="file" className='form-control' />
                                            </div>
                                            <div className='col-md-12 mb-3' >
                                                <label htmlFor="" className='form-label'>Post Graduation</label>
                                                <input type="file" className='form-control' />
                                            </div>
                                            <div className='col-md-12 mb-3' >
                                                <label htmlFor="" className='form-label'>Other Qualification</label>
                                                <input type="file" className='form-control' />
                                            </div>
                                            <div className='col-md-12 mb-3' >
                                                <label htmlFor="" className='form-label'>Photo</label>
                                                <input type="file" className='form-control' />
                                            </div>
                                            <div className='col-md-12 mb-3' >
                                                <label htmlFor="" className='form-label'>Sig</label>
                                                <input type="file" className='form-control' />
                                            </div>
                                            <div className='col-md-12 mb-3' >
                                                <label htmlFor="" className='form-label'>Left Thamp</label>
                                                <input type="file" className='form-control' />
                                            </div>
                                            <div className='col-md-12 mb-3' >
                                                <label htmlFor="" className='form-label'>Right Thamp</label>
                                                <input type="file" className='form-control' />
                                            </div>
                                            <div className='col-md-12 mb-3' >
                                                <label htmlFor="" className='form-label'>Jati</label>
                                                <input type="file" className='form-control' />
                                            </div>
                                            <div className='col-md-12 mb-3' >
                                                <label htmlFor="" className='form-label'>Mulnivas</label>
                                                <input type="file" className='form-control' />
                                            </div>
                                            <div className='col-md-12 mb-3' >
                                                <label htmlFor="" className='form-label'>Aay</label>
                                                <input type="file" className='form-control' />
                                            </div>
                                            <div className='col-md-12 mb-3' >
                                                <label htmlFor="" className='form-label'>Birth</label>
                                                <input type="file" className='form-control' />
                                            </div>
                                            <div className='col-md-12 mb-3' >
                                                <label htmlFor="" className='form-label'>Disability</label>
                                                <input type="file" className='form-control' />
                                            </div>
                                            <div className='col-md-12 mb-3' >
                                                <label htmlFor="" className='form-label'>Photo ID</label>
                                                <input type="file" className='form-control' />
                                            </div>

                                        </div>
                                        <div className='col-md-12 d-flex justify-content-end mt-3'>
                                            <button className='btn btn-outline-secondary mr-2'>Save And Create Contact</button>
                                            <button type='button' className='btn btn-primary'>Save</button>
                                        </div>
                                    </TabPanel>
                                    <TabPanel value="10">
                                        <div className='col-md-12'>
                                            <label htmlFor="" className='form-label'><span><LuFileSignature /></span> Father's Name</label>
                                            <input type="text" name="" id="" className='form-control' />
                                        </div>
                                        <div className='col-md-12 d-flex justify-content-end mt-3'>
                                            <button className='btn btn-outline-secondary mr-2'>Save And Create Contact</button>
                                            <button type='button' className='btn btn-primary'>Save</button>
                                        </div>
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
export default NewCustomers