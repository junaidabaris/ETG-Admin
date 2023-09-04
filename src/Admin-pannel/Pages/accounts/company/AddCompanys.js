import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { ToastContainer, toast } from "react-toastify"

function AddCompanys() {
    const [state, setState] = useState({
        name: "",
        // alias: "",
        directory: "",

        primaryMailingName: "",
        addressLine1: "",
        addressLine2: "",
        state: "",
        city: "",
        country: "",

        mobile: "",
        email: "",
        faxNo: "",
        website: "",

        financialYear: "",
        bookBeginning: "",

        password: "",
        useSecurityCtrl: false,

        baseCurrencyInfo: "",
        formatName: "",
        suffixSymbol: false,
        addSpaceBet: false,
        amountInMil: false,
        numberOfDecimal: "",
    })

    const changeHandle = (e) => {
        const clone = { ...state }
        clone[e.target.name] = e.target.value
        setState(clone)
    }


    const toastSuccessMessage1 = (str) => {
        toast.success(`${str} Company Successfully`, {
            position: "top-center"
        })
    };

    const toastErrorMessage1 = (str) => {
        toast.error(`Company Not ${str}`, {
            position: "top-center"
        })
    };

    const token = window.localStorage.getItem('adminToken')
    const sendData = async () => {
       if (param?.id) {
        try {
            const res = await axios.put(`https://onlineparttimejobs.in/api/accountCompany/update_company/${param.id}`, state, {
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                    Authorization: `Bearer ${token}`,
                },
            })
            toastSuccessMessage1('Update')

        } catch (error) {
            toastErrorMessage1('Update')
        }
       } else {
        try {
            const res = await axios.post(`https://onlineparttimejobs.in/api/accountCompany/add_Company`, state, {
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                    Authorization: `Bearer ${token}`,
                },
            })
            toastSuccessMessage1('Create')

        } catch (error) {
            toastErrorMessage1('Created')
        }
       }
    }

    const param = useParams()

    const getDatas = async () => {
        const res = await axios.get(`https://onlineparttimejobs.in/api/accountCompany/${param.id}`, {
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                Authorization: `Bearer ${token}`,
            },
        })
        setState(res.data)
    }
    useEffect(() => {
        if (param?.id) {
            getDatas()
        }
    }, [param])
    return <div className="p-4">
        <ToastContainer />
        <div className="card">
            <div className="card-body">
                <h4>{param?.id ? 'Update' : 'Create'} Company</h4>
                <hr />
                <div className="container">
                    <div className="row">
                        <div className="col-4">
                            <label for="exampleInputEmail1" className="form-label">Directory</label>
                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={state.directory} name="directory" onChange={changeHandle} />
                        </div>
                        <div className="col-4">
                            <label for="exampleInputEmail1" className="form-label">Name</label>
                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={state.name} name="name" onChange={changeHandle} />
                        </div>
                    </div>
                    <div className="row">
                        <h6>Primary Mailing Details</h6>
                        <div className="col-4">
                            <label for="exampleInputEmail1" className="form-label">Mailing Name</label>
                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={state.primaryMailingName} name="primaryMailingName" onChange={changeHandle} />
                        </div>
                        <div className="col-4">
                            <label for="exampleInputEmail1" className="form-label">AddressLine1</label>
                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={state.addressLine1} name="addressLine1" onChange={changeHandle} />
                        </div>
                        <div className="col-4">
                            <label for="exampleInputEmail1" className="form-label">AddressLine2</label>
                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={state.addressLine2} name="addressLine2" onChange={changeHandle} />
                        </div>
                        <div className="col-4">
                            <label for="exampleInputEmail1" className="form-label">Countrie</label>
                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={state.country} name="country" onChange={changeHandle} />
                        </div>
                        <div className="col-4">
                            <label for="exampleInputEmail1" className="form-label">State</label>
                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={state.state} name="state" onChange={changeHandle} />
                        </div>
                        <div className="col-4">
                            <label for="exampleInputEmail1" className="form-label">City</label>
                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={state.city} name="city" onChange={changeHandle} />
                        </div>
                    </div>

                    <div className="row">
                        <h6>Contact Details</h6>
                        {/* <div className="col-4">
                            <label for="exampleInputEmail1" className="form-label">Telephone no</label>
                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={state.mobile} name="mobile" onChange={changeHandle}  />
                        </div> */}
                        <div className="col-4">
                            <label for="exampleInputEmail1" className="form-label">Email</label>
                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={state.email} name="email" onChange={changeHandle} />
                        </div>
                        <div className="col-4">
                            <label for="exampleInputEmail1" className="form-label">Mobile no</label>
                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={state.mobile} name="mobile" onChange={changeHandle} />
                        </div>
                        <div className="col-4">
                            <label for="exampleInputEmail1" className="form-label">Fax no</label>
                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={state.faxNo} name="faxNo" onChange={changeHandle} />
                        </div>
                        <div className="col-4">
                            <label for="exampleInputEmail1" className="form-label">Website</label>
                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={state.website} name="website" onChange={changeHandle} />
                        </div>
                    </div>

                    <div className="row">
                        <h6>Books and Financial Year</h6>
                        <div className="col-4">
                            <label for="exampleInputEmail1" className="form-label">Financial Year from</label>
                            <input type="date" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={state.financialYear} name="financialYear" onChange={changeHandle} />
                        </div>
                        <div className="col-4">
                            <label for="exampleInputEmail1" className="form-label">Books Beginning from</label>
                            <input type="date" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={state.bookBeginning} name="bookBeginning" onChange={changeHandle} />
                        </div>

                    </div>

                    <div className="row">
                        <h6>Security Control</h6>
                        <div className="col-4">
                            <label for="exampleInputEmail1" className="form-label">Password</label>
                            <input type="password" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={state.password} name="password" onChange={changeHandle} />
                        </div>
                        <div className="col-4">
                            <label for="exampleInputEmail1" className="form-label">use Security control</label>
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" style={{ padding: "10px", marginTop: "30px" }} />
                        </div>
                    </div>


                    <h6 style={{ margin: "20px 0" }}>Base Currency Imformation</h6>
                    <div className="row">
                        <div className="col-4">
                            <label for="exampleInputEmail1" className="form-label">Base Currency Imformation</label>
                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={state.baseCurrencyInfo} name="baseCurrencyInfo" onChange={changeHandle} />
                        </div>
                        <div className="col-4">
                            <label for="exampleInputEmail1" className="form-label">Formal Name</label>
                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={state.formatName} name="formatName" onChange={changeHandle} />
                        </div>
                        <div className="col-4">
                            <label for="exampleInputEmail1" className="form-label">Suffix Symbol to amount</label>
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" style={{ padding: "10px", marginTop: "30px" }} />
                        </div>
                        <div className="col-4">
                            <label for="exampleInputEmail1" className="form-label">Add space b/w amount and symbol</label>
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" style={{ padding: "10px", marginTop: "30px" }} />
                        </div>
                        <div className="col-4">
                            <label for="exampleInputEmail1" className="form-label">Show amount in millian</label>
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" style={{ padding: "10px", marginTop: "30px" }} />
                        </div>
                        <div className="col-4">
                            <label for="exampleInputEmail1" className="form-label">Number of decimal place</label>
                            <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={state.numberOfDecimal} name="numberOfDecimal" onChange={changeHandle} />
                        </div>
                        <button type="button" style={{ width: "200px" }} onClick={sendData} className="btn btn-primary">{param?.id ? 'Update' : 'Save'}</button>
                    </div>
                </div>
            </div>
        </div>

        <div className="card">
            <div className="card-body">


            </div>
        </div>
    </div>
}
export default AddCompanys