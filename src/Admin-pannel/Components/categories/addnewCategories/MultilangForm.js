

import { useState } from "react"
import { Form } from "react-router-dom"
import { token } from "../../../common/TokenArea";
import { useGetCategoriesQuery } from "../../all-products/allproductsApi/allProductsApi";

function MultilangForm({ data, item, i, addNewAttributeData, onChangeHandler, setValue }) {
    const { data:valDAta } = useGetCategoriesQuery(token);
    return <div className="card">
        <div className="card-header">
            <h5 className="mb-0 h6">Category Information ({item?.lable})</h5>
        </div>
        <div className="card-body">

            <form className="form-horizontal" id="create-course-form">
                <input type="hidden" name="_token" defaultValue="JX7Efxc0fWnjgSTDtnGEP5Yd23Vk7icCfLqqxizf" />

                <div className="form-group row">
                    <label className="col-md-3 col-form-label">Name</label>
                    <div className="col-md-9">
                        <input type="text" placeholder="Name" name="name" value={item?.name} className="form-control" onChange={(e) => { onChangeHandler(e, item.language_id) }} required />
                    </div>
                </div>

                <div className="form-group row">
                    <label className="col-md-3 col-form-label">Parent Category</label>

                    <div className="col-md-9">
                        <select className="form-select" name='parent_id'  value={item?.parent_id} onChange={(e) => { onChangeHandler(e, item.language_id) }} required>
                            <option>Select Parent Catagary</option>
                            <option value='null'>Null</option>
                            {valDAta && valDAta.map((item, i) => {
                                return <option key={item._id} value={item._id}>{item.name}</option>
                            })}
                        </select>
                    </div>
                </div>

                <div className="form-group row">
                    <label className="col-md-3 col-form-label">
                        Ordering Number
                    </label>
                    <div className="col-md-9">
                        <input type="number" name="order_level" value={item?.order_level} className="form-control" placeholder="Order Level" onChange={(e) => { onChangeHandler(e, item.language_id) }} required />
                        <small>Higher number has high priority</small>
                    </div>
                </div>

                <div className="form-group row">
                    <label className="col-md-3 col-form-label">Type</label>
                    <div className="col-md-9">
                        <div>
                            <select className="form-select form-control aiz-selectpicker mb-2 mb-md-0" value={item?.type} aria-label="Default select example" name='type' onChange={(e) => { onChangeHandler(e, item.language_id) }} required>
                                <option value={0}>Physical</option>
                                <option value={1}>Digital</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-md-3 col-form-label">Icon <small>(32x32)</small></label>
                    <div className="col-md-9">
                        <div className="input-group" data-type="image">
                            <div className="input-group-prepend">
                                <div className="input-group-text bg-soft-secondary font-weight-medium">Browse</div>
                            </div>
                            <div className="form-control file-amount">
                                <input type="file" name="image" className="selected-files" onChange={(e) => { onChangeHandler(e, item.language_id, 'img') }} />
                            </div>
                        </div>
                        <div className="file-preview box sm">
                        </div>
                    </div>
                </div>

                <div className="form-group row">
                    <label className="col-md-3 col-form-label">Meta Title</label>
                    <div className="col-md-9">
                        <input type="text" className="form-control" name="meta_title"  value={item?.meta_title} placeholder="Meta Title" onChange={(e) => { onChangeHandler(e, item.language_id) }} required />
                    </div>
                </div>

                <div className="form-group row">
                    <label className="col-md-3 col-form-label">Meta description</label>
                    <div className="col-md-9">
                        <textarea name="meta_description" rows={5} className="form-control"  value={item?.meta_description} onChange={(e) => { onChangeHandler(e, item.language_id) }} required />
                    </div>
                </div>

                <div className="form-group row">
                    <label className="col-md-3 col-form-label">Commission Rate</label>
                    <div className="col-md-9 input-group">
                        <input type="number" lang="en" min={0} step="0.01" placeholder="Commission Rate"  value={item?.commision_rate} id="commision_rate" name="commision_rate" className="form-control" onChange={(e) => { onChangeHandler(e, item.language_id) }} required />
                        <div className="input-group-append">
                            <span className="input-group-text">%</span>
                        </div>
                    </div>
                </div>

                {/* <div className="form-group row">
                    <label className="col-md-3 col-form-label">Filtering Attributes</label>
                    <div className="col-md-9">
                        <Form.Select aria-label="Default select example" name='filtering_attributes' className='form-control' onChange={(e) => { onChangeHandler(e, item.language_id) }} required>
                            <option>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                    </div>
                </div> */}

                <div className="form-group row">
                    <label className="col-md-3 col-form-label">Level</label>
                    <div className="col-md-9">
                        <input type="number" className="form-control" name="level" placeholder="level" value={item?.level} onChange={(e) => { onChangeHandler(e, item.language_id) }} required />
                    </div>
                </div>

                <div className="form-group row">
                    <label className="col-md-3 col-form-label">Top</label>
                    <div className="col-md-9">
                        <input type="text" className="form-control" name="top"  value={item?.top} placeholder="top" onChange={(e) => { onChangeHandler(e, item.language_id) }} required />
                    </div>
                </div>

                <div className="form-group row">
                    <label className="col-md-3 col-form-label">Featured</label>
                    <div className="col-md-9">
                        <input type="text" className="form-control" name="featured"  value={item?.featured} placeholder="featured" onChange={(e) => { onChangeHandler(e, item.language_id) }} required />
                    </div>
                </div>

                {data.length == i + 1 ? <div className="form-group mb-3 text-right">
                <button type="submit" className="btn btn-primary" fdprocessedid="uzw7ye" onClick={() => { setValue(i - 1) }}>Prev</button>
                    <button type="submit" className="btn btn-primary" fdprocessedid="uzw7ye" onClick={addNewAttributeData}>Save</button>
                </div>
                    :
                    <div className="form-group mb-3 text-right">
                        {i !== 0 && <button type="submit" className="btn btn-primary" fdprocessedid="uzw7ye" onClick={() => { setValue(i - 1) }}>Prev</button>}
                        <button type="submit" className="btn btn-primary" fdprocessedid="uzw7ye" onClick={() => { setValue(i + 1) }}>Next</button>
                    </div>
                }
            </form>
        </div>
    </div>
}
export default MultilangForm