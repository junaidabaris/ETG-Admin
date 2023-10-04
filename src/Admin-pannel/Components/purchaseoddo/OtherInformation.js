import React from "react";
import { Link } from "react-router-dom";
function OtherInformation(){
    return(
        <>
        <div className="container">
            <div className="row">
                <div className="col-6">
                <div className="row">
                        <div className="col-4">
                            <label className="form-label">
                            Buyer
                            </label>
                            
                        </div>
                        <div className="col-8 purch">
                          <input className="form-control purch" type="text" style={{border:'none',}} placeholder="Mitchell Admin"/>
                            
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-4">
                            <label className="form-label">
                            Company 
                            </label>
                            
                        </div>
                        <div className="col-8 ">
                          {/* <input className="form-control purch" type="text" style={{border:'none',}}/> */}
                          <Link to={".../.../.../"} >Demo Company</Link>
                            
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-4">
                            <label className="form-label">
                            Source Document
                            </label>
                            
                        </div>
                        <div className="col-8 purch">
                          <input className="form-control purch" type="text" style={{border:'none',}}/>
                            
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-4">
                            <label className="form-label">
                            Incoterm
                            </label>
                            
                        </div>
                        <div className="col-8 purch">
                          <input className="form-control purch" type="text" style={{border:'none',}}/>
                            
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-4">
                            <label className="form-label">
                            Incoterm Location
                            </label>
                            
                        </div>
                        <div className="col-8 purch">
                          <input className="form-control purch" type="text" style={{border:'none',}}/>
                            
                        </div>
                    </div>
                </div>
                <div className="col-6">
                <div className="row">
                        <div className="col-4">
                            <label className="form-label">
                            Receipt Status
                            </label>
                            
                        </div>
                        <div className="col-8 purch">
                          {/* <input className="form-control purch" type="text" style={{border:'none',}} placeholder="Mitchell Admin"/> */}
                            Not received
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-4">
                            <label className="form-label">
                            Billing Status 
                            </label>
                            
                        </div>
                        <div className="col-8 ">
                          {/* <input className="form-control purch" type="text" style={{border:'none',}}/> */}
                         Nothing To Billed
                            
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-4">
                            <label className="form-label">
                            Payment Terms

                            </label>
                            
                        </div>
                        <div className="col-8 purch">
                          <input className="form-control purch" type="text" style={{border:'none',}}/>
                            
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-4">
                            <label className="form-label">
                            Incoterm
                            </label>
                            
                        </div>
                        <div className="col-8 purch">
                          <input className="form-control purch" type="text" style={{border:'none',}}/>
                            
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-4">
                            <label className="form-label">
                            Fiscal Position
                            </label>
                            
                        </div>
                        <div className="col-8 purch">
                          <input className="form-control purch" type="text" style={{border:'none',}}/>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default OtherInformation