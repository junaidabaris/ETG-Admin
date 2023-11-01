import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

function KycFormVender() {
    const params = useParams();
    const [kycetail, setKycetail] = useState({
        document_type: "",
        category_certiflcate_issuing_authority: "",
        category_date_of_issue: "",
        category_application_no: "",
        category_certificate_no: "",
        disability_certiflcate_issuing_authority: "",
        disability_date_of_issue: "",
        disability_application_no: "",
        disability_certificate_no: "",
        domicile_certiflcate_issuing_authority: "",
        domicile_date_of_issue: "",
        domicile_application_no: "",
        domicile_certificate_no: "",
        income_certiflcate_issuing_authority: "",
        income_date_of_issue: "",
        income_application_no: "",
        income_certificate_no: "",
        birth_certiflcate_issuing_authority: "",
        birth_date_of_issue: "",
        birth_application_no: "",
        birth_certificate_no: "",
        family_annual_income: "",
        type_of_photo_id: "",
        photo_id_number: "",
        aadhaar_card_status: "",
        aadhaar_card_number: "",
        aadhar_virtual_id: "",
        
    })

    const [updates, setUpdates] = useState(false)
    const [UpdateId, setUpdateId] = useState()
    const token = window.localStorage.getItem('token')
    const getDatas = async () => {
        const res = await axios.get(`https://onlineparttimejobs.in/api/kycSeller/${params.id}`, {
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
                Authorization: `Bearer ${token}`,
            },
        })
        setKycetail(res.data)
    }
    useEffect(() => {
        getDatas()
    }, [])

    const changeKycDetail = (e) => {
        const clone = { ...kycetail }
        clone[e.target.name] = e.target.value
        setKycetail(clone)
    }


    const toastSuccessMessage = () => {
        toast.success("Vendor KYC Successfull", {
            position: "top-center"
        })
    };
    const toastErrorMessage = () => {
        toast.error("Vendor KYC Not Add", {
            position: "top-center"
        })
    }

    const senData = async () => {
        const obj = { ...kycetail,seller_id: params.id}
        try {
            const res = await axios.post(`https://onlineparttimejobs.in/api/kycSeller/add_KYCSeller`, obj,{
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                    Authorization: `Bearer ${token}`,
                },
            })
            toastSuccessMessage()
            setTimeout(() => {
                getDatas()
               
            }, 2000);
        } catch (error) {
            toastErrorMessage()
        }
        setUpdates(false)
        setUpdateId(null)
    }

    return <>
        <div className='border' style={{ width: 700, height: 2600 }}>
            <div className='col-md-12 mt-3 mb-3'>
                <strong>Category Certiflcate</strong>
            </div>
            <div className='col-md-12 mb-3'>
                <label htmlFor="" className='form-label'>Certiflcate Issuing Authority</label>
                <input type="text" className='form-control' name="category_certiflcate_issuing_authority" value={kycetail?.category_certiflcate_issuing_authority} onChange={changeKycDetail} />
            </div>
            <div className='col-md-12 mb-3'>
                <label htmlFor="" className='form-label'>Date of Issue of Certiflcate</label>
                <input type="date" className='form-control' name="category_date_of_issue" value={kycetail?.category_date_of_issue} onChange={changeKycDetail} />
            </div>
            <div className='col-md-12 mb-3'>
                <label htmlFor="" className='form-label'>Application No.</label>
                <input type="number" className='form-control' name="category_application_no" value={kycetail?.category_application_no} onChange={changeKycDetail} />
            </div>
            <div className='col-md-12 mb-3'>
                <label htmlFor="" className='form-label'>Certificate No</label>
                <input type="number" className='form-control' name="category_certificate_no" value={kycetail?.category_certificate_no} onChange={changeKycDetail} />
            </div>


            <div className='col-md-12 mt-3 mb-3'>
                <strong>Domicile Certiflcate</strong>
            </div>
            <div className='col-md-12 mb-3'>
                <label htmlFor="" className='form-label'>Certiflcate Issuing Authority</label>
                <input type="text" className='form-control' name="domicile_certiflcate_issuing_authority" value={kycetail?.domicile_certiflcate_issuing_authority} onChange={changeKycDetail} />
            </div>
            <div className='col-md-12 mb-3'>
                <label htmlFor="" className='form-label'>Date of Issue of Certiflcate</label>
                <input type="date" className='form-control' name="domicile_date_of_issue" value={kycetail?.domicile_date_of_issue} onChange={changeKycDetail} />
            </div>
            <div className='col-md-12 mb-3'>
                <label htmlFor="" className='form-label'>Application No.</label>
                <input type="number" className='form-control' name="domicile_application_no" value={kycetail?.domicile_application_no} onChange={changeKycDetail} />
            </div>
            <div className='col-md-12 mb-3'>
                <label htmlFor="" className='form-label'>Certificate No</label>
                <input type="number" className='form-control' name="domicile_certificate_no" value={kycetail?.domicile_certificate_no} onChange={changeKycDetail} />
            </div>


            <div className='col-md-12 mt-3 mb-3'>
                <strong>Income Certiflcate</strong>
            </div>
            <div className='col-md-12 mb-3'>
                <label htmlFor="" className='form-label'>Certiflcate Issuing Authority</label>
                <input type="text" className='form-control' name="income_certiflcate_issuing_authority" value={kycetail?.income_certiflcate_issuing_authority} onChange={changeKycDetail} />
            </div>
            <div className='col-md-12 mb-3'>
                <label htmlFor="" className='form-label'>Date of Issue of Certiflcate</label>
                <input type="date" className='form-control' name="income_date_of_issue" value={kycetail?.income_date_of_issue} onChange={changeKycDetail} />
            </div>
            <div className='col-md-12 mb-3'>
                <label htmlFor="" className='form-label'>Application No.</label>
                <input type="number" className='form-control' name="income_application_no" value={kycetail?.income_application_no} onChange={changeKycDetail} />
            </div>
            <div className='col-md-12 mb-3'>
                <label htmlFor="" className='form-label'>Certificate No</label>
                <input type="number" className='form-control' name="income_certificate_no" value={kycetail?.income_certificate_no} onChange={changeKycDetail} />
            </div>

            <div className='col-md-12 mt-3 mb-3'>
                <strong>Birth  Certiflcate</strong>
            </div>
            <div className='col-md-12 mb-3'>
                <label htmlFor="" className='form-label'>Certiflcate Issuing Authority</label>
                <input type="text" className='form-control' name="birth_certiflcate_issuing_authority" value={kycetail?.birth_certiflcate_issuing_authority} onChange={changeKycDetail} />
            </div>
            <div className='col-md-12 mb-3'>
                <label htmlFor="" className='form-label'>Date of Issue of Certiflcate</label>
                <input type="date" className='form-control' name="birth_date_of_issue" value={kycetail?.birth_date_of_issue} onChange={changeKycDetail} />
            </div>
            <div className='col-md-12 mb-3'>
                <label htmlFor="" className='form-label'>Application No.</label>
                <input type="number" className='form-control' name="birth_application_no" value={kycetail?.birth_application_no} onChange={changeKycDetail} />
            </div>
            <div className='col-md-12 mb-3'>
                <label htmlFor="" className='form-label'>Certificate No</label>
                <input type="number" className='form-control' name="birth_certificate_no" value={kycetail?.birth_certificate_no} onChange={changeKycDetail} />
            </div>
            <div className='col-md-12 mt-3 mb-3'>
                <strong>Disability Certiflcate</strong>
            </div>
            <div className='col-md-12 mb-3'>
                <label htmlFor="" className='form-label'>Certiflcate Issuing Authority</label>
                <input type="text" className='form-control' name="disability_certiflcate_issuing_authority" value={kycetail?.disability_certiflcate_issuing_authority} onChange={changeKycDetail} />
            </div>
            <div className='col-md-12 mb-3'>
                <label htmlFor="" className='form-label'>Date of Issue of Certiflcate</label>
                <input type="date" className='form-control' name="disability_date_of_issue" value={kycetail?.disability_date_of_issue} onChange={changeKycDetail} />
            </div>
            <div className='col-md-12 mb-3'>
                <label htmlFor="" className='form-label'>Application No.</label>
                <input type="number" className='form-control' name="disability_application_no" value={kycetail?.disability_application_no} onChange={changeKycDetail} />
            </div>
            <div className='col-md-12 mb-3'>
                <label htmlFor="" className='form-label'>Certificate No</label>
                <input type="number" className='form-control' name="disability_certificate_no" value={kycetail?.disability_certificate_no} onChange={changeKycDetail} />
            </div>
            <div className='col-md-12 mb-3'>
                <label htmlFor="" className='form-label'>Total Family Annual Income</label>
                <input type="number" className='form-control' name="family_annual_income" value={kycetail?.family_annual_income} onChange={changeKycDetail} />
            </div>
            <div className='col-md-12 mb-3'>
                <label htmlFor="" className='form-label'>Type of ID</label>
                <select className='form-select' name="type_of_photo_id" value={kycetail?.type_of_photo_id} onChange={changeKycDetail}>
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
                <select id="" className='form-select' name="aadhaar_card_status" value={kycetail?.aadhaar_card_status} onChange={changeKycDetail}>
                    <option value="Yes"> Yes   </option>
                    <option value="No"> No   </option>
                </select>

            </div>
            <div className='col-md-12 mb-3'>
                <label htmlFor="" className='form-label'>Aadhaar Card number</label>
                <input type="text" className='form-control' name="aadhaar_card_number" value={kycetail?.aadhaar_card_number} onChange={changeKycDetail} />
            </div>
            <div className='col-md-12 mb-3'>
                <label htmlFor="" className='form-label'>Aadhar Virtual id</label>
                <input type="text" className='form-control' name="aadhar_virtual_id" value={kycetail?.aadhar_virtual_id} onChange={changeKycDetail} />
            </div>

        </div>
        <div className='col-md-12 d-flex justify-content-end mt-3'>
            <button type='button' className='btn btn-primary' onClick={senData}>Save</button>
        </div>
    </>
}
export default KycFormVender