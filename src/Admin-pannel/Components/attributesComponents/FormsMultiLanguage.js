import { useState } from "react"

function FormsMultiLanguage({ data, item, i, addNewAttributeData, onChangeHandler, setValue }) {

    return <div className="card">
        <div className="card-header">
            <h5 className="mb-0 h6">Add New Attribute ({item.lable})</h5>
        </div>
        <div className="card-body">
            <form id="create-course-form">
                <div className="form-group mb-3">
                    <label htmlFor="name">Name</label>
                    <input type="text" placeholder="Name" id="name" name="name" value={item.name} className="form-control" required fdprocessedid="8s3s9v" onChange={(e) => { onChangeHandler(e, item.language_id) }} />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="name">Approve</label>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" name="approve" value={item.approve} onChange={(e) => { onChangeHandler(e, item.language_id, item.approve) }} id="defaultCheck1" />
                        <label class="form-check-label" for="defaultCheck1">
                            Approve This Language
                        </label>
                    </div>
                </div>


                {data.length == i + 1 ? <div className="form-group mb-3 text-right">
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
export default FormsMultiLanguage