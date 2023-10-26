import { useState } from "react"

function FormsMultiLang({ data, item, i, addNewAttributeData, onChangeHandler, setValue, handleFile }) {
    return <div className="card">
        <div className="card-header">
            <h5 className="mb-0 h6">Add New Brand ({item.lable})</h5>
        </div>
        <div className="card-body">
            <form id="create-course-form" >
                <div className="form-group mb-3">
                    <label htmlFor="name">Name</label>
                    <input type="text" placeholder="Name" name="name" value={item.name} onChange={(e) => { onChangeHandler(e, item.language_id) }} className="form-control" required />
                </div>

                <div className="form-group mb-3">
                    <label htmlFor="name">Logo <small>(120x80)</small></label>
                    <div className="input-group" data-type="image" >
                        <div className="input-group-prepend">
                            <div className="input-group-text bg-soft-secondary font-weight-medium">Browse</div>
                        </div>
                        <div className="form-control file-amount">
                            <input type="file" className="selected-files" name='image' onChange={(e) => { onChangeHandler(e, item.language_id, 'img') }} required />
                        </div>
                    </div>
                    <div className="file-preview box sm">
                    </div>
                </div>

                <div className="form-group mb-3">
                    <label htmlFor="name">Meta Title</label>
                    <input type="text" name='meta_title' value={item.meta_title} className="form-control" placeholder="Meta Title" onChange={(e) => { onChangeHandler(e, item.language_id) }} required />
                </div>
                {i == 0 && <div className="form-group mb-3">
                    <label htmlFor="name">Slug</label>
                    <input type="text" name='slug' value={item.slug} className="form-control" placeholder="Slug" onChange={(e) => { onChangeHandler(e, item.language_id) }} required />
                </div>}
                <div className="form-group mb-3">
                    <label htmlFor="name">Meta description</label>
                    <textarea name="meta_description" rows={5} value={item.meta_description} className="form-control" onChange={(e) => { onChangeHandler(e, item.language_id) }} required />
                </div>
                <div className="form-group mb-3 text-right">
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
                </div>
            </form>
        </div>
    </div>
}
export default FormsMultiLang