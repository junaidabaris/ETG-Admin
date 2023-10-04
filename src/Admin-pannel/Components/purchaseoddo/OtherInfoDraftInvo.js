import React from "react";
function OtherInfoDraftInvo(){
    return(
        <>
        <div className="container">
            <div className="row">
                <div className="col-6">
                    <h3>INVOICE</h3>
                    <hr className="border-sold 1-px border-secondary"/>
                    <div className="row">
                        <div className="col-4">
                            <label className="form-label">
                            Customer Reference

                            </label>
                            
                        </div>
                        <div className="col-8 purch">
                          <input className="form-control purch" type="text" placeholder="Shaaz" style={{border:'none',}}/>
                            
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-4">
                            <label className="form-label">
                            Salesperson

                            </label>
                            
                        </div>
                        <div className="col-8 purch">
                          <input className="form-control purch" type="text" placeholder="Mitchell Admin" style={{border:'none',}}/>
                            
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-4">
                            <label className="form-label">
                            Sales Team

                            </label>
                            
                        </div>
                        <div className="col-8 purch">
                          <input className="form-control purch" type="text" placeholder="Sales" style={{border:'none',}}/>
                            
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-4">
                            <label className="form-label">
                            Recipient Bank

                            </label>
                            
                        </div>
                        <div className="col-8 purch">
                          <input className="form-control purch" type="text"  style={{border:'none',}}/>
                            
                        </div>
                    </div>
                </div>
                <div className="col-6">
                    <h3>ACCOUNTING</h3>
                    <hr className="border-sold 1-px border-secondary"/>
                    <div className="row">
                        <div className="col-4">
                            <label className="form-label">
                            Company

                            </label>
                            
                        </div>
                        <div className="col-8 purch">
                          <input className="form-control purch" type="text" placeholder="Shaaz" style={{border:'none',}}/>
                            
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-4">
                            <label className="form-label">
                            Incoterm

                            </label>
                            
                        </div>
                        <div className="col-8 purch">
                          <input className="form-control purch" type="text" placeholder="" style={{border:'none',}}/>
                            
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-4">
                            <label className="form-label">
                            Fiscal Position

                            </label>
                            
                        </div>
                        <div className="col-8 purch">
                          <input className="form-control purch" type="text"  style={{border:'none',}}/>
                            
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-4">
                            <label className="form-label">
                            Auto-post

                            </label>
                            
                        </div>
                        <div className="col-8 purch">
                          <input className="form-control purch" type="text" placeholder="No"  style={{border:'none',}}/>
                            
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-4">
                            <label className="form-label">
                            To Check

                            </label>
                            
                        </div>
                        <div className="col-8 purch">
                          
                          <div className="form-check">
  <input
    className="form-check-input"
    type="checkbox"
    defaultValue=""
    id="flexCheckDefault"
   
  />
  
</div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default OtherInfoDraftInvo