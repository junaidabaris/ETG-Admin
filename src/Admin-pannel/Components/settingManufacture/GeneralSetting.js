import React from "react";
import { HiMenu } from "react-icons/hi"
import { BsQuestionLg } from "react-icons/bs"
function GeneralSettings(){
    return(
        <>
       <div className="container">
        <div className="card p-3">
            <div className="row">
                <label className="form-label">
                    <h5><HiMenu/> General setting</h5>
                </label>
            </div>
            <hr className="border-secondary opacity-3" />
            <div className="row">
                <h5>  BOM code</h5>
            </div>
            <hr className="border-secondary opacity-3" />
            <div className="row">
                <div className="">
                    <label className="form-label">
                    Bills of material code prefix
                    </label>
                    <input className="form-control" type="text"/>
                </div>
            </div>
            <div className="row mt-3">
                <div className="">
                    <label className="form-label">
                    Next bills of material number <BsQuestionLg/>
                    </label>
                    <input className="form-control" type="Number"/>
                </div>
            </div>
            <div className="row mt-2">
               <h5>Routing code</h5>
            </div>
            <hr className="border-secondary opacity-3" />
            <div className="row">
                <div className="">
                    <label className="form-label">
                    Routing code prefix
                    </label>
                    <input className="form-control" type="text"/>
                </div>
            </div>
            <div className="row mt-3">
                <div className="">
                    <label className="form-label">
                    Next routing number <BsQuestionLg/>
                    </label>
                    <input className="form-control" type="Number"/>
                </div>
            </div>
            <div className="row mt-2">
                
               <h5> Manufacturing order code</h5>
                
            </div>
            <hr className="border-secondary opacity-3" style={{border:"1px solid red"}}/>
            
            <div className="row">
                <div className="">
                    <label className="form-label">
                    Manufacturing order code prefix
                    </label>
                    <input className="form-control" type="text"/>
                </div>
            </div>
            <div className="row mt-3">
                <div className="">
                    <label className="form-label">
                    Next to the manufacturing order number <BsQuestionLg/>
                    </label>
                    <input className="form-control" type="Number"/>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-6">
                    
                </div>
                <div className="col-6 text-end">
                    <button className="btn btn-info">
                        Save
                    </button>
                </div>
            </div>
        </div>
       </div>
        </>
    )
}
export default GeneralSettings