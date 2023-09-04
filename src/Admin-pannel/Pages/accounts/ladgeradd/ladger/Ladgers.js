import axios from "axios";
import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
function Ladgers() {

  const [state, setState] = useState({
    AC_name: '',
    AC_no: "",
    IFSC_code: "",
    branch_name: "",
    BSR_code: "",
    bank_id: "",
    GSTIN: "",
    AccLedgerGroupId: "",
    AccLedgerName: " ",
    AccLedgreAliasName: "",
    AccLedgerEntryDateTime: "",
    AccComID: "",
    AccAddLine1: "",
    AccAddLine2: "",
    city: "",
    state: "",
    country: "",
    mobile: "",
    Email: "",
    AccBalType: "",
    voucherDate: "",
    voucherNo: "",
    voucherId: Math.random(),
    Amount: 0
  })
  const token = window.localStorage.getItem('adminToken')

  const onchangeHandle = async (e) => {
    // if (e.target.name == 'bank_id') {
    //   const res1 = await axios.get(`https://onlineparttimejobs.in/api/accountBank/${e.target.value}`, {
    //     headers: {
    //       "Content-type": "application/json; charset=UTF-8",
    //       Authorization: `Bearer ${token}`,
    //     },
    //   })
    // }
    const clone = { ...state }
    clone[e.target.name] = e.target.value
    setState(clone)

  }

  const [unders, setUneders] = useState(null)
  const [banks, setBanks] = useState(null)
  const [company, setCompany] = useState(null)

  const getAllData = async () => {
    const res1 = await axios.get(`https://onlineparttimejobs.in/api/accountGroup`, {
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        Authorization: `Bearer ${token}`,
      },
    })
    setUneders(res1.data)
    const res2 = await axios.get(`https://onlineparttimejobs.in/api/accountBank`, {
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        Authorization: `Bearer ${token}`,
      },
    })
    setBanks(res2.data)
    const res3 = await axios.get(`https://onlineparttimejobs.in/api/accountCompany`, {
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        Authorization: `Bearer ${token}`,
      },
    })
    setCompany(res3.data)
  }


  const getValues = async () => {
    const res1 = await axios.get(`https://onlineparttimejobs.in/api/accountLedger/${params.id}`, {
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        Authorization: `Bearer ${token}`,
      },
    })
    setState(res1.data)
  }
  useEffect(() => {
    getAllData()
    if (params?.id) {
      getValues()
    }
  }, [])

  const toastSuccessMessage1 = (str) => {
    toast.success(`Ledgers ${str} Successfully`, {
      position: "top-center"
    })
  };

  const toastErrorMessage1 = (str) => {
    toast.error(`Ledgers Not ${str}`, {
      position: "top-center"
    })
  };

  const params = useParams()
  const sendData = async () => {
    if (params?.id) {
      try {
        const res = await axios.put(`https://onlineparttimejobs.in/api/accountLedger/update_Ledger/${params.id}`, state, {
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
        const res = await axios.post(`https://onlineparttimejobs.in/api/accountLedger/add_Ledger`, state, {
          headers: {
            "Content-type": "application/json; charset=UTF-8",
            Authorization: `Bearer ${token}`,
          },
        })
        toastSuccessMessage1('Create')
      } catch (error) {
        toastErrorMessage1('Create')
      }

    }
  }
  return (
    <>

      <ToastContainer />
      <div className="conatiner">
        <div className="row ml-3">
          <h4>{params?.id ? 'Update' : 'Add'} Ledgers</h4>
        </div>
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-md-6">
                <div className="row">
                  <div className="col-md-6 mt-3">
                    <label className="form-label">Name</label>
                  </div>
                  <div className="col-md-6 mt-3">
                    <input className="form-control" type="text" value={state.AccLedgerName} name="AccLedgerName" onChange={onchangeHandle} />
                  </div>
                  <div className="col-md-6 mt-3">
                    <label className="form-label">(alias)</label>
                  </div>
                  <div className="col-md-6 mt-3">
                    <input className="form-control" type="text" value={state.AccLedgreAliasName} name="AccLedgreAliasName" onChange={onchangeHandle} />
                  </div>
                  <div className="col-md-6 mt-3">
                    <label className="form-label">Amount</label>
                  </div>
                  <div className="col-md-6 mt-3">
                    <input className="form-control" type="text" value={state.Amount} name="Amount" onChange={onchangeHandle} />
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="row">
                  <div className="col-md-6 mt-3">
                    <label className="form-label">BSR Code</label>
                  </div>
                  <div className="col-md-6 mt-3">
                    <input className="form-control" type="text" value={state.BSR_code} name="BSR_code" onChange={onchangeHandle} />
                  </div>
                  <div className="col-md-6 mt-3">
                    <label className="form-label">Voucher Date</label>
                  </div>
                  <div className="col-md-6 mt-3">
                    <input className="form-control" type="date" value={state.voucherDate} name="voucherDate" onChange={onchangeHandle} />
                  </div>
                  <div className="col-md-6 mt-3">
                    <label className="form-label">Voucher No</label>
                  </div>
                  <div className="col-md-6 mt-3">
                    <input className="form-control" type="text" value={state.voucherNo} name="voucherNo" onChange={onchangeHandle} />
                  </div>
                </div>
              </div>
            </div>
            <hr className="border-secondary" />
            <div className="row mt-3">
              <div className="col-md-6 mt-3" style={{ borderRight: "1px solid black" }}>
                <div className="row">
                  <label className="form-label"></label>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <label className="form-label">Under Group</label>
                  </div>
                  <div className="col-md-6">
                    <Form.Select aria-label="Default select example" value={state.AccLedgerGroupId} name="AccLedgerGroupId" onChange={onchangeHandle}>
                      <option>Open this select menu</option>
                      {unders && unders.map((item) => {
                        return <option value={item._id}>{item.name}</option>
                      })}
                    </Form.Select>
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Acc Balance Type</label>
                  </div>
                  <div className="col-md-6" style={{ margin: "10px 0" }}>
                    <Form.Select aria-label="Default select example" value={state.AccBalType} name="AccBalType" onChange={onchangeHandle}>
                      <option selected>Open this select menu</option>
                      <option value='debit'>Debit</option>
                      <option value='credit'>Credit</option>

                    </Form.Select>
                  </div>
                  {/* <div className="col-md-6">
                    <div className="row">
                      <div className="col-md-9 mt-3">
                        <label className="form-label">Set OD Limit <br />Bank Account Details</label>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 mt-3">
                    <input className="form-control" type="text" />
                  </div> */}
                  <div className="col-md-6 mt-3">
                    <label className="form-label">Select Bank</label>
                  </div>
                  <div className="col-md-6">
                    <Form.Select aria-label="Default select example" value={state.bank_id} name="bank_id" onChange={onchangeHandle}>
                      <option>Open this select menu</option>
                      {banks && banks.map((item) => {
                        return <option value={item._id}>{item.name}</option>
                      })}
                    </Form.Select>
                  </div>
                  <div className="col-md-6 mt-3">
                    <label className="form-label">A/C Holders Name</label>
                  </div>
                  <div className="col-md-6 mt-3">
                    <input className="form-control" type="text" value={state.AC_name} name="AC_name" onChange={onchangeHandle} />
                  </div>
                  <div className="col-md-6 mt-3">
                    <label className="form-label">A/C no.</label>
                  </div>
                  <div className="col-md-6 mt-3">
                    <input className="form-control" type="text" value={state.AC_no} name="AC_no" onChange={onchangeHandle} />
                  </div>
                  <div className="col-md-6 mt-3">
                    <label className="form-label">IFSC Code</label>
                  </div>
                  <div className="col-md-6 mt-3">
                    <input className="form-control" type="text" value={state.IFSC_code} name="IFSC_code" onChange={onchangeHandle} />
                  </div>
                  <div className="col-md-6 mt-3">
                    <label className="form-label">Bank Name</label>
                  </div>
                  <div className="col-md-6 mt-3">
                    <input className="form-control" type="text" value={state.branch_name} name="branch_name" onChange={onchangeHandle} />
                  </div>
                  {/* <div className="col-md-6 mt-3">
                    <label className="form-label">Branch</label>
                  </div>
                  <div className="col-md-6 mt-3">
                    <input className="form-control" type="text" value={state.b} name="branch_name" onChange={onchangeHandle}/>
                  </div> */}

                </div>
                <div className="row">
                  <div className="col-md-6 mt-3">
                    Bank Configration
                  </div>
                  <div className="col-md-6 mt-3">
                    <input className="form-control" type="text" />
                  </div>
                  <div className="col-md-6 mt-3">
                    <label className="form-label">
                      Set Cheque Books
                    </label>
                  </div>
                  <div className="col-md-6 mt-3">
                    <input className="form-control" type="text" />
                  </div>
                  <div className="col-md-6 mt-3">
                    <label className="form-label">
                      Set Cheque Printing Configuration
                    </label>
                  </div>
                  <div className="col-md-6 mt-3">
                    <input className="form-control" type="text" />
                  </div>
                  <div className="col-md-6 mt-3">
                    <label className="form-label">
                      Seelct Company
                    </label>
                  </div>
                  <div className="col-md-6 mt-3">
                    <Form.Select aria-label="Default select example" value={state.AccComID} name="AccComID" onChange={onchangeHandle}>
                      <option>Open this select menu</option>
                      {company && company.map((item) => {
                        return <option value={item._id}>{item.name}</option>
                      })}
                    </Form.Select>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="row text-center">
                  <label className="form-label">
                    Mailing Details
                  </label>
                </div>
                <div className="row">
                  {/* <div className="col-md-6 mt-3">
                    <label className="form-label">Name</label>
                  </div>
                  <div className="col-md-6 mt-3">
                    <input className="form-control" type="text" />
                  </div> */}
                  <div className="col-md-6 mt-3">
                    <label className="form-label">AddressLine1</label>
                  </div>
                  <div className="col-md-6 mt-3">
                    <input className="form-control" type="text" value={state.AccAddLine1} name="AccAddLine1" onChange={onchangeHandle} />
                  </div>
                  <div className="col-md-6 mt-3">
                    <label className="form-label">AddressLine2</label>
                  </div>
                  <div className="col-md-6 mt-3">
                    <input className="form-control" type="text" value={state.AccAddLine2} name="AccAddLine2" onChange={onchangeHandle} />
                  </div>
                  <div className="col-md-6 mt-3">
                    <label className="form-label">CIty</label>
                  </div>
                  <div className="col-md-6 mt-3">
                    <input className="form-control" type="text" value={state.city} name="city" onChange={onchangeHandle} />
                  </div>
                  <div className="col-md-6 mt-3">
                    <label className="form-label">State</label>
                  </div>
                  <div className="col-md-6 mt-3">
                    <input className="form-control" type="text" value={state.state} name="state" onChange={onchangeHandle} />
                  </div>
                  <div className="col-md-6 mt-3">
                    <label className="form-label">Country</label>
                  </div>
                  <div className="col-md-6 mt-3">
                    <input className="form-control" type="text" value={state.country} name="country" onChange={onchangeHandle} />
                  </div>

                  {/* <div className="col-md-6 mt-3">
                    <label className="form-label">Pin Code</label>
                  </div>
                  <div className="col-md-6 mt-3">
                    <input className="form-control" type="text" value={state.} name="state" onChange={onchangeHandle}/>
                  </div> */}
                  {/* <div className="col-md-6 mt-3">
                    <label className="form-label">Contact Person</label>
                  </div>
                  <div className="col-md-6 mt-3">
                    <input className="form-control" type="text"value={state.} name="state" onChange={onchangeHandle} />
                  </div> */}
                  <div className="col-md-6 mt-3">
                    <label className="form-label">Phone no</label>
                  </div>
                  <div className="col-md-6 mt-3">
                    <input className="form-control" type="text" value={state.mobile} name="mobile" onChange={onchangeHandle} />
                  </div>
                  {/* <div className="col-md-6 mt-3">
                    <label className="form-label">Mobile no</label>
                  </div>
                  <div className="col-md-6 mt-3">
                    <input className="form-control" type="text" />
                  </div> */}
                  {/* <div className="col-md-6 mt-3">
                    <label className="form-label">Fax No</label>
                  </div>
                  <div className="col-md-6 mt-3">
                    <input className="form-control" type="text" value={state.} name="mobile" onChange={onchangeHandle}/>
                  </div> */}
                  <div className="col-md-6 mt-3">
                    <label className="form-label">E-mail</label>
                  </div>
                  <div className="col-md-6 mt-3">
                    <input className="form-control" type="text" value={state.Email} name="Email" onChange={onchangeHandle} />
                  </div>
                  {/* <div className="col-md-6 mt-3">
                    <label className="form-label">CC to (if any website)</label>
                  </div>
                  <div className="col-md-6 mt-3">
                    <input className="form-control" type="text" />
                  </div> */}
                  <div className="col-md-6 mt-3">
                    <label className="form-label">GSTIN/UN</label>
                  </div>
                  <div className="col-md-6 mt-3">
                    <input className="form-control" type="text" value={state.GSTIN} name="GSTIN" onChange={onchangeHandle} />
                  </div>
                </div>
                <div className="row text-center p-3">
                  <label className="form-label">
                    Tax Registration Details
                  </label>

                </div>
                <div className="row">
                  <div className="col-md-6 mt-3">
                    <label className="form-label">Acc Ledger Entry DateTime</label>
                  </div>
                  <div className="col-md-6 mt-3">
                    <input className="form-control" type="datetime-local" value={state.AccLedgerEntryDateTime} name="AccLedgerEntryDateTime" onChange={onchangeHandle} />
                  </div>
                </div>



              </div>

              <hr className="border-secondary mt-3" />
              {/* <div className="row text-center">
                <label className="form-label">
                  Opening Balance ( on 1-April-2018) : 2,00,000.00 Dr
                </label>
              </div> */}
              <hr className="border-secondary" />
              <div className="row mt-3">
                <div className="col-md-8"></div>
                <div className="col-md-4 text-right">
                  <button className="btn btn-primary" onClick={sendData}>{params?.id ? 'Update' : 'Save'} </button>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
export default Ladgers