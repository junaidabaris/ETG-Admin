import axios from "axios";
import Multiselect from "multiselect-react-dropdown"
import { useEffect, useState } from "react";
import { MultiselectOption } from "../../common/MultiSelectOption";


function MutiformLang({ data, item, i, addNewAttributeData, onChangeHandler, setValue, changeData }) {
    const [finalCatD, setFinalCatD] = useState(item.values);
    const token = window.localStorage.getItem('token')
    const [categ, setCateg] = useState([]);
    const getData = async () => {
        const res = await axios.get(`https://onlineparttimejobs.in/api/attributes/admin`, {
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
                'Authorization': 'Bearer ' + token
            }
        })
        setCateg(res.data)
    }
    useEffect(() => {
        getData()
    }, [])

    const setLangData = (event) => {
        let abc = [...data]
        let obj = { ...abc[i] }
        // const clone = abc.map((val) => {
        //     if (val.language_id == item.language_id) {
        //         return { ...item, list: event }
        //     } else {
        //         return item
        //     }
        // })
        obj.values = event
        abc.splice(i, 1, obj)
        changeData(abc)
    }
    return <div className="card" >
        <div className="card-header">
            <h5 className="mb-0 h6">Add New Product Attribute {item?.lable}</h5>
        </div>
        <div className="card-body">
            <form id="create-course-form" >
                <div className="form-group mb-3">
                    <label htmlFor="name">Attribute Name</label>
                    <input type="text" placeholder="Name" id="name" value={item.name} onChange={(e) => { onChangeHandler(e, item.language_id) }} name="name" className="form-control" required fdprocessedid="8s3s9v" />
                </div>

                <div className="form-group mb-3">
                    <label htmlFor="name">Attribute Child Name</label>
                    <Multiselect
                        isObject={true}
                        displayValue="name"
                        options={categ}
                        showCheckbox
                        selectedValues={finalCatD}
                        onRemove={(selectedCat) => {
                            const selectedIds = selectedCat.map((cat) => {
                                return cat
                            })
                            setFinalCatD(selectedIds)
                            setLangData(selectedIds)
                        }}
                        onSelect={(selectedCat) => {
                            const selectedIds = selectedCat.map((cat) => {
                                return cat
                            })
                            setFinalCatD(selectedIds)
                            setLangData(selectedIds)
                        }}
                    />

                    {/* <MultiselectOption allAttributes={allAttributes} data={attributesData} showCheckbox={true} getSelectedOptions={getAttributes}>
                        <label>Attributes:</label>
                    </MultiselectOption> */}
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

export default MutiformLang