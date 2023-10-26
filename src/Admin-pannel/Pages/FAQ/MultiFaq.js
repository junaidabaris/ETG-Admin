


import { useState } from "react"
import { Form } from "react-router-dom"
import { useGetCategoriesQuery } from '../../Components/all-products/allproductsApi/allProductsApi';

function MultiFaq({ data, item, i, addNewAttributeData, onChangeHandler, setValue, allList }) {
    const token = window.localStorage.getItem('token')
    const { data: valDAta } = useGetCategoriesQuery(token);
    return <div className="card">
        <div className="card-header">
            <h5 className="mb-0 h6">FAQ Information ({item?.lable})</h5>
        </div>
        <div className="card-body">

            <form className="form-horizontal" id="create-course-form">
                <input type="hidden" name="_token" defaultValue="JX7Efxc0fWnjgSTDtnGEP5Yd23Vk7icCfLqqxizf" />

                <div className="form-group row">
                    <label className="col-md-3 col-form-label">Question</label>
                    <div className="col-md-9">
                        <input type="text" placeholder="Question" name="question" value={item?.question} className="form-control" onChange={(e) => { onChangeHandler(e, item.language_id) }} required />
                    </div>
                </div>



                <div className="form-group row">
                    <label className="col-md-3 col-form-label">Answer</label>
                    <div className="col-md-9 input-group">
                        <textarea class="form-control" placeholder="Leave a Answer here" name='answer' value={item?.answer} id="floatingTextarea" onChange={(e) => { onChangeHandler(e, item.language_id) }}></textarea>
                    </div>

                </div>

                <div className="form-group row">
                    <label className="col-md-3 col-form-label">Category</label>

                    <div className="col-md-9">
                        <select className="form-select" name='category_id' value={item?.category_id} onChange={(e) => { onChangeHandler(e, item.language_id) }} required>
                            <option>Select Parent Catagary</option>
                            {allList && allList.map((item, i) => {
                                return <option key={item._id} value={item._id}>{item.title}</option>
                            })}
                        </select>
                    </div>
                </div>

                {data.length == i + 1 ? <div className="form-group mb-3 text-right">
                    <button type="button" className="btn btn-primary" fdprocessedid="uzw7ye" onClick={() => { setValue(i - 1) }}>Prev</button>
                    <button type="button" className="btn btn-primary" fdprocessedid="uzw7ye" onClick={addNewAttributeData}>Save</button>
                </div>
                    :
                    <div className="form-group mb-3 text-right">
                        {i !== 0 && <button type="button" className="btn btn-primary" fdprocessedid="uzw7ye" onClick={() => { setValue(i - 1) }}>Prev</button>}
                        <button type="button" className="btn btn-primary" fdprocessedid="uzw7ye" onClick={() => { setValue(i + 1) }}>Next</button>
                    </div>
                }
            </form>
        </div>
    </div>
}
export default MultiFaq