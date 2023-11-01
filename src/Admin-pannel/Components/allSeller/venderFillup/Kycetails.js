import { useState } from "react";

function Kycetails() {
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
    
    const onChangeHandler = (e) => {
        const inpName = e.target.name;
        const inpval = e.target.value;
        const clonedObj = { ...inputval };
        clonedObj[inpName] = inpval;
        setInputval(clonedObj)
    };
    return <div className='row'>
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
            <button type='button' className='btn btn-primary' >Save</button>
        </div>


    </div>
}
export default Kycetails