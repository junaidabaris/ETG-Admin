
import { useState } from "react"

function MultiLangMas({ data, item, i, addNewAttributeData, onChangeHandler, setValue }) {

    return <div className="card">
        <div className="card-header">
            <h5 className="mb-0 h6">Add New Faq Master ({item.lable})</h5>
        </div>
        <div className="card-body">
            <form id="create-course-form">
                <div className="form-group mb-3">
                    <label htmlFor="name">Title</label>
                    <input type="text" placeholder="title" id="title" name="title" value={item.name} className="form-control" required fdprocessedid="8s3s9v" onChange={(e) => { onChangeHandler(e, item.language_id) }} />
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
export default MultiLangMas