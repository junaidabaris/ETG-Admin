
import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import { toast, ToastContainer } from 'react-toastify';

function Custom_fields_add() {


    const toastSuccessMessage = () => {
        toast.success("Category added Successfully", {
            position: "top-center"
        })
    };



    return (
        <>
            <div className="aiz-main-content">
                <div className="px-15px px-lg-25px">
                    <div className="row">
                        <div className="col-lg-8 mx-auto">
                            <div className="card">
                                <div className="card-header">
                                    <h5 className="mb-0 h6">Add new custom field</h5>
                                </div>
                                <div className="card-body">

                                    <form className="form-horizontal" id="create-course-form" >
                                        <input type="hidden" name="_token" defaultValue="JX7Efxc0fWnjgSTDtnGEP5Yd23Vk7icCfLqqxizf" />

                                        <div className="form-group row">
                                            <label className="col-md-3 col-form-label">* Field Belongs to</label>
                                            <div className="col-md-9">
                                                <input type="text" placeholder="Name" name="name" className="form-control" required />
                                            </div>
                                        </div>


                                        <div className="form-group row">
                                            <label className="col-md-3 col-form-label">
                                                * Field Name
                                            </label>
                                            <div className="col-md-9">
                                                <input type="number" name="order_level" className="form-control" placeholder="Order Level" required />
                                            </div>
                                        </div>

                                        <div className="form-group row">
                                            <label className="col-md-3 col-form-label">* Type</label>
                                            <div className="col-md-9">
                                                <div>
                                                    <select className="form-select form-control aiz-selectpicker mb-2 mb-md-0" aria-label="Default select example" name='type' required>
                                                        <option value={0}>Customer</option>
                                                        <option value={1}>Education</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label className="col-md-3 col-form-label">
                                                Value
                                            </label>
                                            <div className="col-md-9">
                                                <input type="number" name="order_level" className="form-control" placeholder=" Value" required />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label className="col-md-3 col-form-label">
                                                Default Value
                                            </label>
                                            <div className="col-md-9">
                                                <input type="number" name="order_level" className="form-control" placeholder="Default Value" required />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label className="col-md-3 col-form-label">
                                                Order
                                            </label>
                                            <div className="col-md-9">
                                                <input type="number" name="order_level" className="form-control" placeholder="Order" required />
                                            </div>
                                        </div>
                                        <div className="form-group row extraMrHide">

                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                <label class="form-check-label" for="flexCheckDefault">
                                                    Disabled
                                                </label>
                                            </div>
                                        </div>
                                        <div className="form-group row extraMrHide">
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                <label class="form-check-label" for="flexCheckDefault">
                                                    Restrict visibility for administrators only
                                                </label>
                                            </div>
                                        </div>
                                        <div className="form-group row extraMrHide">
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                <label class="form-check-label" for="flexCheckDefault">
                                                    Required
                                                </label>
                                            </div>
                                        </div>
                                        <div className="form-group row extraMrHide">
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                <label class="form-check-label" for="flexCheckDefault">
                                                    Show on table
                                                </label>
                                            </div>
                                        </div>

                                        <div className="form-group mb-0 text-right">
                                            <button type="submit" className="btn btn-primary">Save</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-white text-center py-3 px-15px px-lg-25px mt-auto">
                    {/*p class="mb-0">&copy;  v6.3.3</p*/}
                </div>
            </div>
            <ToastContainer />

        </>
    )
}
export default Custom_fields_add