
import axios from 'axios';
import Multiselect from 'multiselect-react-dropdown';
import { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';

function AddProductAttributes({ getDatas }) {
    const [finalCatD, setFinalCatD] = useState();
    const [categ, setCateg] = useState([]);

    const [state, setState] = useState({
        name: ""
    })

    const changeHandle = (e) => {
        const clone = { ...state }
        clone[e.target.name] = e.target.value
        setState(clone)
    }

    const getData = async () => {
        const res = await axios.get(`https://onlineparttimejobs.in/api/attributes`)
        setCateg(res.data)
    }
    const toastSuccessMessage = () => {
        toast.success("Attribute Set  added Successfully", {
            position: "top-center"
        })
    };
    const token = window.localStorage.getItem('token')
    const sendData = async () => {
        const obj = { name: state.name, values: finalCatD }
        try {
            const res = await axios.post(`https://onlineparttimejobs.in/api/attributeSetMaster/add_attributeSetMasters`, obj,{
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                    Authorization: `Bearer ${token}`,
                },
            })
            toastSuccessMessage()
            setState({ name: '' })
            
            getDatas()
        } catch (error) {
            alert('!Error Attribute Set not added')
        }

    }


    useEffect(() => {
        getData()
    }, [])


    return (
        <>
            <div className="col-md-5">
                <div className="card" style={{ height: "600px" }}>
                    <div className="card-header">
                        <h5 className="mb-0 h6">Add New Product Attribute</h5>
                    </div>
                    <div className="card-body">
                        <form id="create-course-form" >
                            <div className="form-group mb-3">
                                <label htmlFor="name">Attribute Name</label>
                                <input type="text" placeholder="Name" id="name" value={state.name} onChange={changeHandle} name="name" className="form-control" required fdprocessedid="8s3s9v" />
                            </div>

                            <div className="form-group mb-3">
                                <label htmlFor="name">Attribute Child Name</label>
                                <Multiselect
                                    isObject={true}
                                    displayValue="name"
                                    options={categ}
                                    showCheckbox
                                    selectedValues={[]}
                                    onRemove={(selectedCat) => {
                                        const selectedIds = selectedCat.map((cat) => {
                                            return cat._id
                                        })
                                        setFinalCatD(selectedIds)
                                    }}
                                    onSelect={(selectedCat) => {
                                        const selectedIds = selectedCat.map((cat) => {
                                            return cat._id
                                        })
                                        setFinalCatD(selectedIds)
                                    }}
                                />
                            </div>

                            <div className="form-group mb-3 text-right">
                                <button type="button" onClick={sendData} className="btn btn-primary" fdprocessedid="uzw7ye">Submit</button>
                            </div>

                        </form>
                    </div>
                </div>
                <ToastContainer />
            </div>
        </>
    )
}
export default AddProductAttributes;