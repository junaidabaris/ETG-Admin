

import Multiselect from "multiselect-react-dropdown"
import { useGetSellersQuery, useGetTimeSloteQuery } from "../../Components/all-products/allproductsApi/allProductsApi"
import { token } from "../../common/TokenArea"
import { useState } from "react"

function MultiLangGroup({ data, item, i, addNewAttributeData, onChangeHandler, setTabs, setFinalCatD }) {
    const { data: val } = useGetTimeSloteQuery(token)
    const { data: sellerD } = useGetSellersQuery(token)
    // const [finalCatD, setFinalCatD] = useState();
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
                    <label htmlFor="name">Display Name</label>
                    <input type="text" placeholder="displayName" id="displayName" name="displayName" value={item.displayName} className="form-control" required fdprocessedid="8s3s9v" onChange={(e) => { onChangeHandler(e, item.language_id) }} />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="name">Start Time</label>
                    <input type="time" placeholder="time" id="time" name="start_time" value={item.start_time} className="form-control" required fdprocessedid="8s3s9v" onChange={(e) => { onChangeHandler(e, item.language_id) }} />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="name">End Time</label>
                    <input type="time" placeholder="time" id="time" name="end_time" value={item.end_time} className="form-control" required fdprocessedid="8s3s9v" onChange={(e) => { onChangeHandler(e, item.language_id) }} />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="name">Time Slote</label>
                    <Multiselect
                        isObject={true}
                        displayValue="name"

                        options={val}
                        showCheckbox
                        selectedValues={item?.value}
                        onRemove={(selectedCat) => {
                            const selectedIds = selectedCat.map((cat) => {
                                return cat
                            })
                            setFinalCatD(selectedIds)
                        }}
                        onSelect={(selectedCat) => {
                            const selectedIds = selectedCat.map((cat) => {
                                return cat
                            })
                            setFinalCatD(selectedIds)
                        }}
                    />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="name">Seller</label>

                    <select className="form-select" aria-label="Default select example" name="seller_id" value={item.seller_id} onChange={(e) => { onChangeHandler(e, item.language_id) }} >
                        <option selected>Open this select menu</option>
                        {sellerD && sellerD.map((item) => {
                            return <option value={item._id}>{item.firstname + " " + item.lastname}</option>
                        })}

                    </select>
                </div>

                {/* {data.length == i + 1 ? <div className="form-group mb-3 text-right">
                    <button type="submit" className="btn btn-primary" fdprocessedid="uzw7ye" onClick={addNewAttributeData}>Save</button>
                </div>
                    :
                    <div className="form-group mb-3 text-right">
                        {i !== 0 && <button type="submit" className="btn btn-primary" fdprocessedid="uzw7ye" onClick={() => { setValue(i - 1) }}>Prev</button>}
                        <button type="submit" className="btn btn-primary" fdprocessedid="uzw7ye" onClick={() => { setValue(i + 1) }}>Next</button>
                    </div>
                } */}
                {data.length == i + 1 ? <div className="form-group mb-3 text-right">
                    <button type="button" className="btn btn-primary" fdprocessedid="uzw7ye" onClick={() => { setTabs(i, 'pre', item.language_id) }}>Prev</button>
                    <button type="button" className="btn btn-primary" fdprocessedid="uzw7ye" onClick={(e) => { addNewAttributeData(e, item.language_id) }}>Save</button>
                </div>
                    :
                    <div className="form-group mb-3 text-right">
                        {i !== 0 && <button type="button" className="btn btn-primary" fdprocessedid="uzw7ye" onClick={() => { setTabs(i, 'pre', item.language_id) }}>Prev</button>}
                        <button type="button" className="btn btn-primary" fdprocessedid="uzw7ye" onClick={() => { setTabs(i, 'nex', item.language_id) }}>Next</button>
                    </div>

                }
            </form>
        </div>
    </div>
}
export default MultiLangGroup