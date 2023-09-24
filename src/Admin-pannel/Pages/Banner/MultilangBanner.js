

function MultilangBanner({ params, addNewAttributeData, imgHandle, onChangeHandler, item, data, setValue, i }) {
    return <div className="card">
        <div className="card-header">
            {params.id ? <h1 className="mb-0 h6">Edit Banner {item.lable}</h1> : <h1 className="mb-0 h6">Add New Banner {item.lable}</h1>}
        </div>
        <div className="card-body">

            <form className="form-horizontal" id='create-course-form'>
                <input type="hidden" name="_token" defaultValue="MfWj9eEof7fNq0mKB42pyG49sPDPkHAVyVSS7UBT" />


                <div className="form-group row">
                    <label className="col-sm-3 col-from-label">Choose Slider Image :</label>
                    <div className="col-sm-9">
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <div className="input-group-text bg-soft-secondary">Browse</div>
                            </div>
                            <div className="form-control file-amount">
                                <input type="file" name="image" className="selected-files" onChange={(e) => { onChangeHandler(e, item.language_id, 'img') }} />
                            </div>
                        </div>
                        <div className="file-preview box sm" />
                    </div>
                </div>




                <div className="form-group row">
                    <label className="col-sm-3 col-from-label">URL</label>
                    <div className="col-sm-9">
                        <input type="text" name="url" value={item.url} className="form-control" fdprocessedid="ihieoq" onChange={(e) => { onChangeHandler(e, item.language_id) }} />
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-3 col-from-label">Slider Top Heading :</label>
                    <div className="col-sm-9">
                        <input type="text" name="SliderTopHeading" value={item.SliderTopHeading} className="form-control" fdprocessedid="ihieoq" onChange={(e) => { onChangeHandler(e, item.language_id) }} />
                    </div>
                </div>


                <div className="form-group row">
                    <label className="col-sm-3 col-from-label">Button Text :</label>
                    <div className="col-sm-9">
                        <input type="text" name="bottomText" value={item.bottomText} className="form-control" fdprocessedid="ihieoq" onChange={(e) => { onChangeHandler(e, item.language_id) }} />
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

export default MultilangBanner