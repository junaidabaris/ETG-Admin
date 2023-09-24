import React from "react";

function AddWorkingHours(){
    return(
        <>
        <div className="container">
            <div className="card p-3">
                <div className="row">
                    <div className="">
                        <label className="form-label">
                        Add working hour
                        </label>
                    </div>
                </div>
                <hr className="border-secondary opacity-3" />
                <div className="row">
                    <div className="col-6">
                        <div className="">
                            <label className="form-label">
                            Name
                            </label>
                            <input className="form-control" type="text"/>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="">
                            <label className="form-label">
                            Hours per day
                            </label>
                            <input className="form-control" type="text"/>
                        </div>
                    </div>
                </div>
                <div className="row p-3">
                    <label className="form-label">
                        Working hours
                    </label>
                </div>
                <hr className="border-secondary opacity-3" />
                <div className="handson table" style={{width:200 , height:200}}>
                    
                </div>
                <div className="row p-3">
                    <label className="form-label">
                    Global time off
                    </label>
                </div>
                <hr className="border-secondary opacity-3" />
                <div className="handson table" style={{width:200 , height:200}}>
                    
                    </div>
                    <div className="row">
                        <div className="col-6">
                            
                        </div>
                        <div className="col-6 text-right">
                            <div className="">
                                <button className="btn btn-border">
                                    Close
                                </button>
                                <button className="btn btn-primary ml-3">
                                    Save
                                </button>
                            </div>
                            </div>
                    </div>
            </div>
        </div>
        </>
    )
}
export default AddWorkingHours