
function MultiForm({ data, item, i, addNewAttributeData, onChangeHandler, setValue }) {
    return <div className="card">
        <div className="card-header">
            <h5 className="mb-0 h6">Blog Information ({item?.lable})</h5>
        </div>
        <div className="card-body">

            <form id="create-course-form" className="form-horizontal">
                <div className="form-group row">
                    <label className="col-md-3 col-form-label">
                        Blog Title
                        <span className="text-danger">*</span>
                    </label>
                    <div className="col-md-9">
                        <input type="text" placeholder="Blog Title" id="title" name="title" value={item?.title} className="form-control" required onChange={(e) => { onChangeHandler(e, item.language_id) }} />
                    </div>
                </div>

                <div className="form-group row">
                    <label className="col-md-3 col-form-label">Slug
                        <span className="text-danger">*</span></label>
                    <div className="col-md-9">
                        <input type="text" placeholder="Slug" name="slug" value={item?.slug} id="slug" className="form-control" required onChange={(e) => { onChangeHandler(e, item.language_id) }} />
                    </div>
                </div>

                <div className="form-group row">
                    <label className="col-md-3 col-form-label" htmlFor="signinSrEmail">
                        Banner
                        {/* <small>(1300x650)</small> */}
                    </label>
                    <div className="col-md-9">
                        <div className="input-group" data-type="image">
                            <div className="input-group-prepend">
                                <div className="input-group-text bg-soft-secondary font-weight-medium">
                                    Browse
                                </div>
                            </div>
                            <div className="form-control file-amount">
                                <input type="file" name="banner" className="selected-files" onChange={(e) => { onChangeHandler(e, item.language_id,'banner') }} />
                            </div>
                        </div>
                        <div className="file-preview box sm">
                        </div>
                    </div>
                </div>

                <div className="form-group row">
                    <label className="col-md-3 col-form-label">
                        Short Description
                        <span className="text-danger">*</span>
                    </label>
                    <div className="col-md-9">
                        <textarea name="short_description" rows={5} className="form-control" value={item?.short_description} required onChange={(e) => { onChangeHandler(e, item.language_id) }} />
                    </div>
                </div>

                <div className="form-group row">
                    <label className="col-md-3 col-form-label">Meta Title</label>
                    <div className="col-md-9">
                        <input type="text" className="form-control" name="meta_title" value={item?.meta_title} placeholder="Meta Title" onChange={(e) => { onChangeHandler(e, item.language_id) }} />
                    </div>
                </div>

                <div className="form-group row">
                    <label className="col-md-3 col-form-label" htmlFor="signinSrEmail">
                        Meta Image
                    </label>
                    <div className="col-md-9">
                        <div className="input-group" data-toggle="aizuploader" data-type="image">
                            <div className="input-group-prepend">
                                <div className="input-group-text bg-soft-secondary font-weight-medium">
                                    Browse
                                </div>
                            </div>
                            <div className="form-control file-amount">
                                <input type="file" name="meta_img" className="selected-files" onChange={(e) => { onChangeHandler(e, item.language_id,'meta') }} />
                            </div>
                        </div>
                        <div className="file-preview box sm">
                        </div>
                    </div>
                </div>

                <div className="form-group row">
                    <label className="col-md-3 col-form-label">Meta description</label>
                    <div className="col-md-9">
                        <textarea name="description" value={item?.description} rows={8} className="form-control" onChange={(e) => { onChangeHandler(e, item.language_id) }} />
                    </div>
                </div>

                <div className="form-group row">
                    <label className="col-md-3 col-form-label">
                        Meta Keywords
                    </label>
                    <div className="col-md-9">
                        <input type="text" className="form-control" id="meta_keywords" name="meta_keywords" value={item?.meta_keywords} placeholder="Meta Keywords" onChange={(e) => { onChangeHandler(e, item.language_id) }} />
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
export default MultiForm