import { useEffect, useState } from "react";
import Vmodal from "./Vmodal";
import SecModal from "./SecModal";
import { Button, Form, } from "react-bootstrap";
import axios from "axios";
import { GrAdd } from "react-icons/gr";
import { AiFillDelete } from "react-icons/ai";
import { toast, ToastContainer } from "react-toastify";
import { useParams } from "react-router-dom";

function AddVochers() {

    const [state, setState] = useState({
        voucherDate: "",
        voucherNo: "",
        voucherType: "",


        AccAddLine1: "",
        AccAddLine2: "",
        city: "",
        state: "",
        country: "",
        mobile: "",
        Email: "",
        Narration: "",
    })
    const changeHandle = (e) => {
        const clone = { ...state }
        clone[e.target.name] = e.target.value
        setState(clone)
    }


    const token = window.localStorage.getItem('adminToken')
    const [underSelect, SetUnder] = useState(null)
    const [voucherType, setVocherType] = useState(null)
    const getData = async () => {
        const res = await axios.get(`https://onlineparttimejobs.in/api/accountLedger`, {
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                Authorization: `Bearer ${token}`,
            },
        })
        SetUnder(res.data)
        const res2 = await axios.get(`https://onlineparttimejobs.in/api/voucherType`, {
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                Authorization: `Bearer ${token}`,
            },
        })
        setVocherType(res2.data)
    }
    useEffect(() => {
        getData()
    }, [])


    const [companys, setCompanys] = useState([
        { id: Math.random(), drAmt: "", crAmt: "", Narration: "" },
        { id: Math.random(), drAmt: "", crAmt: "", Narration: "" },
        { id: Math.random(), drAmt: "", crAmt: "", Narration: "" },
        { id: Math.random(), drAmt: "", crAmt: "", Narration: "" },
        { id: Math.random(), drAmt: "", crAmt: "", Narration: "" },
        { id: Math.random(), drAmt: "", crAmt: "", Narration: "" },
        { id: Math.random(), drAmt: "", crAmt: "", Narration: "" },
        { id: Math.random(), drAmt: "", crAmt: "", Narration: "" },
        { id: Math.random(), drAmt: "", crAmt: "", Narration: "" },
        { id: Math.random(), drAmt: "", crAmt: "", Narration: "" },
        { id: Math.random(), drAmt: "", crAmt: "", Narration: "" },
        { id: Math.random(), drAmt: "", crAmt: "", Narration: "" },
        { id: Math.random(), drAmt: "", crAmt: "", Narration: "" },
        { id: Math.random(), drAmt: "", crAmt: "", Narration: "" },
        { id: Math.random(), drAmt: "", crAmt: "", Narration: "" },
    ])

    const newChangHandle = (e, ind) => {
        const val = e.target.value
        const named = e.target.id
        const maped = underSelect.find((item) => {
            return item._id == val
        })
        const clone = [...companys]
        const obj = clone[ind]
        const newClone = { ...obj, AccLedgerGroupId: maped._id, AccLedgerName: maped.AccLedgerName, AccLedgreAliasName: maped.AccLedgreAliasName, AccLedgerEntryDateTime: maped.AccLedgerEntryDateTime, }
        clone.splice(ind, 1, newClone)
        setCompanys(clone)
    }


    const changeHandleCompany = (e, id) => {
        const val = e.target.value
        const nam = e.target.name
        const maped = companys.map((item) => {
            if (item.id == id) {
                const obj = { ...item, [nam]: val }
                return obj
            } else {
                return item
            }
        })
        setCompanys(maped)
    }
    const AddRows = () => {
        const clone = [...companys]
        const obj = { id: Math.random(), drAmt: "", crAmt: "", Narration: "" }
        clone.push(obj)
        setCompanys(clone)

    }
    const deleteData = (id) => {
        const filterd = companys.filter((item) => {
            return item.id !== id
        })
        setCompanys(filterd)
    }


    const toastSuccessMessage1 = (str) => {
        toast.success(`${str} Vochers Successfully`, {
            position: "top-center"
        })
    };

    const toastErrorMessage1 = (str) => {
        toast.error(`Vochers Not ${str}`, {
            position: "top-center"
        })
    };
    const param = useParams()
    const sendData = async () => {
        const clone = { ...state, vouchers: companys }
       
        let crTotal  =0;
        let dbTotal = 0 ;
        for (let i = 0; i < companys.length; i++) {
            const element = companys[i];
            dbTotal = +element.drAmt + dbTotal
            crTotal = +element.crAmt + crTotal
        }
        if (crTotal !== dbTotal) {
            alert('Please balance debits and credits.')
            return
        }
        if (param?.id) {
            try {
                const res = await axios.put(`https://onlineparttimejobs.in/api/accountCompany/update_company/${param.id}`, clone, {
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
                const res = await axios.post(`https://onlineparttimejobs.in/api/accountVoucher/add_Voucher`, clone, {
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
    const [str, setStr] = useState('Paymentcolor')

    const ChnageColor = (val) => {
        setStr(val)
    }

    return <>
        <h3 style={{ margin: "15px" }}>Add Vochers</h3>
        <ToastContainer />
        <div className="container">
            <div className={`card ${str}`} >
                <div className="card-body">
                    <div className="row">
                        <div className="col-10">
                            <div className="row d-block">

                                <div className="col-md-12 btnMain">
                                    {/* <label className="form-label" for="groups-name">
                                        Voucher Type<span className="text-danger">*</span>
                                    </label> */}
                                    {/* <input className="form-control" type="text" value={state.voucherType} name="voucherType" onChange={changeHandle}></input> */}
                                    <button type="button" className="btn btn-primary Paymentcolorbtn" onClick={() => { ChnageColor('Paymentcolor') }}>Payment</button>
                                    <button type="button" className="btn btn-secondary Receiptcolorbtn" onClick={() => { ChnageColor('Receiptcolor') }}>Receipt</button>
                                    <button type="button" className="btn btn-light" onClick={() => { ChnageColor('Contracolor') }}>Contra</button>
                                    <button type="button" className="btn btn-danger Journalcolorbtn" onClick={() => { ChnageColor('Journalcolor') }}>Journal</button>
                                    <button type="button" className="btn btn-warning Debitcolorbtn" onClick={() => { ChnageColor('Debitcolor') }}>Debit Note</button>
                                    <button type="button" className="btn btn-info Creditcolorbtn" onClick={() => { ChnageColor('Creditcolor') }}>Credit Note</button>

                                </div>
                                <div className="col-12">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <label className="form-label" for="groups-name">
                                                Voucher Type<span className="text-danger">*</span>
                                            </label>
                                            <Form.Select aria-label="Default select example" name="voucherType" onChange={changeHandle}>
                                                <option>Select Voucher Type</option>
                                                {voucherType && voucherType.map((item) => {
                                                    return <option value={item?._id}>{item?.name}</option>
                                                })}
                                            </Form.Select>
                                        </div>
                                        <div className="col-md-4">
                                            <label className="form-label" for="groups-name">
                                                Voucher No<span className="text-danger">*</span>
                                            </label>
                                            <input className="form-control" type="text" value={state.voucherNo} name="voucherNo" onChange={changeHandle}></input>
                                        </div>
                                        <div className="col-md-4">
                                            <label className="form-label" for="groups-name">
                                                Voucher Data<span className="text-danger">*</span>
                                            </label>
                                            <input className="form-control" type="date" value={state.voucherDate} name="voucherDate" onChange={changeHandle}></input>
                                        </div>
                                    </div>
                                </div>
                                <table class="table" style={{ margin: "20px 10px" }}>
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Account</th>
                                            <th scope="col">Debit</th>
                                            <th scope="col">Credit</th>
                                            <th scope="col">Narration</th>
                                            {/* <th scope="col">Action</th> */}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {companys && companys.map((item, i) => {
                                            return <tr key={i}>
                                                <th>{1 + i}</th>
                                                <td>
                                                    <select class="form-select" aria-label="Default select example" value={item.AccLedgerGroupId?._id} name="AccLedgerGroupId" onChange={(e) => { newChangHandle(e, i) }} >
                                                        <option>Select Ledgers</option>
                                                        {underSelect && underSelect.map((item) => {
                                                            return <option key={item._id} id={item.id} value={item._id}>{item.AccLedgerName}</option>
                                                        })}
                                                    </select>
                                                </td>
                                                <td><input name="drAmt" type="number" onChange={(e) => { changeHandleCompany(e, item.id) }} value={item.drAmt} className="form-control" /></td>
                                                <td><input name="crAmt"  type="number" onChange={(e) => { changeHandleCompany(e, item.id) }} value={item.crAmt} className="form-control" /></td>
                                                <td><input name="Narration" onChange={(e) => { changeHandleCompany(e, item.id) }} value={item.Narration} className="form-control" /></td>
                                                {/* <td> <button style={{ margin: "0 10px" }} type="button" class="btn btn-danger" onClick={() => deleteData(item.id)}><AiFillDelete /></button></td> */}
                                            </tr>
                                        })}

                                    </tbody>
                                </table>

                                <button style={{ margin: "20px 10px", width: "100px" }} type="button" class="btn btn-info" onClick={AddRows}><GrAdd /></button>
                            </div>
                        </div>

                    </div>

                    {/* <div className="row" >
                        <div className="col-4">
                            <div className="col-md-12 mt-3">
                                <label className="form-label">AddressLine1</label>
                            </div>
                            <div className="col-md-12 mt-3">
                                <input className="form-control" type="text" value={state.AccAddLine1} name="AccAddLine1" onChange={changeHandle} />
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="col-md-12 mt-3">
                                <label className="form-label">AddressLine2</label>
                            </div>
                            <div className="col-md-12 mt-3">
                                <input className="form-control" type="text" value={state.AccAddLine2} name="AccAddLine2" onChange={changeHandle} />
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="col-md-12 mt-3">
                                <label className="form-label">CIty</label>
                            </div>
                            <div className="col-md-12 mt-3">
                                <input className="form-control" type="text" value={state.city} name="city" onChange={changeHandle} />
                            </div>
                        </div>

                        <div className="col-4">
                            <div className="col-md-12 mt-3">
                                <label className="form-label">State</label>
                            </div>
                            <div className="col-md-12 mt-3">
                                <input className="form-control" type="text" value={state.state} name="state" onChange={changeHandle} />
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="col-md-12 mt-3">
                                <label className="form-label">Country</label>
                            </div>
                            <div className="col-md-12 mt-3">
                                <input className="form-control" type="text" value={state.country} name="country" onChange={changeHandle} />
                            </div>
                        </div>

                        <div className="col-4">
                            <div className="col-md-12 mt-3">
                                <label className="form-label">Phone no</label>
                            </div>
                            <div className="col-md-12 mt-3">
                                <input className="form-control" type="text" value={state.mobile} name="mobile" onChange={changeHandle} />
                            </div>
                        </div>
                        <div>
                            <div className="col-md-12 mt-3">
                                <label className="form-label">E-mail</label>
                            </div>
                            <div className="col-md-4 mt-3">
                                <input className="form-control" type="text" value={state.Email} name="Email" onChange={changeHandle} />
                            </div>
                        </div>

                    </div> */}
                    <Button style={{ margin: "20px 0", width: "200px" }} onClick={sendData} variant="warning">Save</Button>
                </div>
            </div>
        </div>
    </>
}
export default AddVochers