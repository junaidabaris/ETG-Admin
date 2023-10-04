import React from "react";
import phg from "../../../assets/img/MitchellAdmin122.png"
function Settings(){
    return(
        <>
        <div className="container">
            <div className="row">
                <div className="col-6">
                    <h3>EMAIL CONTENT</h3>
                    <hr className="border-sold 1-px border-secondary"/>
                    <div className="row">
                        <div className="col-4">
                            <label className="form-label">
                            Preview Text

                            </label>
                            
                        </div>
                        <div className="col-8 purch">
                          <input className="form-control purch" type="text" placeholder="Shaaz" style={{border:'none',}}/>
                            
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-4">
                            <label className="form-label">
                            Send From

                            </label>
                            
                        </div>
                        <div className="col-8 purch">
                          <input className="form-control purch" type="text" placeholder="Mitchell Admin" style={{border:'none',}}/>
                            
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-4">
                            <label className="form-label">
                            Reply To

                            </label>
                            
                        </div>
                        <div className="col-8 purch">
                          <input className="form-control purch" type="text" placeholder="Sales" style={{border:'none',}}/>
                            
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-4">
                            <label className="form-label">
                            Attach a file

                            </label>
                            
                        </div>
                        <div className="col-8 purch">
                          <input className="form-control purch" type="file"  style={{border:'none',}}/>
                            
                        </div>
                    </div>
                </div>
                <div className="col-6">
                    <h3>TRACKING</h3>
                    <hr className="border-sold 1-px border-secondary"/>
                    <div className="row">
                        <div className="col-4">
                            <label className="form-label">
                            Responsible

                            </label>
                            
                        </div>
                        <div className="col-8 purch">
                         
                            <select className="form-select purch" style={{border:'none',}}>
                                <option><img src={phg} alt="MitchellAdmin122"style={{width:25, height:25}} className="mr-1"/>Mitchell Admin</option>
                            </select>
                        </div>
                    </div>
                   
                </div>
            </div>
        </div>
        </>
    )
}
export default Settings