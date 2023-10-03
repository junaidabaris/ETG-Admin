
import { useGetAreaQuery } from "../../Components/all-products/allproductsApi/allProductsApi"
import { token } from "../../common/TokenArea"

function MultiLangTime({ data, item, i, addNewAttributeData, onChangeHandler, setValue }) {
    // const { data: val } = useGetAreaQuery(token)

    return <div className="card">
        <div className="card-header">
            <h5 className="mb-0 h6">Add Time Slote ({item.lable})</h5>
        </div>
        <div className="card-body">
            <form id="create-course-form">
                <div className="form-group mb-3">
                    <label htmlFor="name">Name</label>
                    <input type="text" placeholder="Name" id="name" name="name" value={item.name} className="form-control" required fdprocessedid="8s3s9v" onChange={(e) => { onChangeHandler(e, item.language_id) }} />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="name">Time</label>
                    <input type="time" placeholder="time" id="time" name="time" value={item.itme} className="form-control" required fdprocessedid="8s3s9v" onChange={(e) => { onChangeHandler(e, item.language_id) }} />
                </div>
                {/* <div className="form-group mb-3">
                    <label htmlFor="name">Area</label>

                    <select className="form-select" aria-label="Default select example" name="area_id" value={item.area_id} onChange={(e) => { onChangeHandler(e, item.language_id) }} >
                        <option selected>Open this select menu</option>
                        {val && val.map((item) => {
                            return <option value={item._id}>{item.name}</option>
                        })}

                    </select>
                </div> */}
                <div className="form-group mb-3">
                    <label htmlFor="name">Approve</label>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" name="approve" checked={item.approve} onChange={(e) => { onChangeHandler(e, item.language_id, true) }} id="defaultCheck1" />
                        <label className="form-check-label" for="defaultCheck1">
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
export default MultiLangTime