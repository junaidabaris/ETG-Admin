import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useEffect, useState } from "react";
import Multiselect from 'multiselect-react-dropdown';
import Select from 'react-select';
import { GrAdd, GrFormAdd } from 'react-icons/gr';
import { TiTick } from 'react-icons/ti';
import { BsFillTagFill } from "react-icons/bs";
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import { ToastContainer, toast } from 'react-toastify';
function ModalLead(props) {
    const [value, setValue] = useState(null)
    const arr3 = [
        { value: 'Azharruddin', label: 'Azharruddin' },
        { value: 'Staff1', label: 'Staff1' },
        { value: 'Staff1', label: 'Staff11' },
        { value: 'Staff1', label: 'Staff12' },
        { value: 'Staff1', label: 'Staff13' },
        { value: 'Staff1', label: 'Staff14' }
    ]
    const arr2 = [
        { value: " Facebook", label: "Facebook" },
        { value: " Google", label: "Google" },
        { value: " IndiaMart", label: "IndiaMart" },
        { value: " Facebook", label: "Facebook" }
    ]
    const [finalCatD, setFinalCatD] = useState();
    const [show1, setShow1] = useState(true)

    const [show2, setShow2] = useState(true)
    const [sourseVal, setsourseVal] = useState(null)
    const sendVal2 = async () => {
        if (show2 === false) {
            if (!sourseVal) {
                setShow2(!show2)
                return
            }
            await axios.post(`https://onlineparttimejobs.in/api/leadsource/add_source`, { name: sourseVal }, {
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                    Authorization: `Bearer ${token}`,
                },
            })
        }
        setShow2(!show2)
    }

    const [state, setState] = useState({
        name: "",
        position: "",
        address: "",
        city: "",
        state: "",
        country: "",
        website: "",
        email: "",
        phone: "",
        leadValue: "",
        company: "",
        description: "",
        source: '',
        status: "",
        assignTo: '',
        zip: "",
        date: "",
    })
    const [status, setStatus] = useState(null)
    const [soures, setSoures] = useState(null)
    const [staff, setStaf] = useState(null)
    const [countrys, setCountry] = useState(null)

    const token = window.localStorage.getItem('adminToken')
    const getDatas = async () => {
        const res1 = await axios.get('https://onlineparttimejobs.in/api/leadstatusmaster', {
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                Authorization: `Bearer ${token}`,
            },
        })
        const res2 = await axios.get('https://onlineparttimejobs.in/api/leadsource', {
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                Authorization: `Bearer ${token}`,
            },
        })
        const res3 = await axios.get('https://onlineparttimejobs.in/api/staff', {
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                Authorization: `Bearer ${token}`,
            },
        })
        const res4 = await axios.get('https://onlineparttimejobs.in/api/country', {
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                Authorization: `Bearer ${token}`,
            },
        })
        setStatus(res1.data)
        setSoures(res2.data)
        setStaf(res3.data)
        setCountry(res4.data)
    }
    useEffect(() => {
        getDatas()
    }, [])

    const [statusVal, setStatusVal] = useState(null)
    const sendVal = async () => {

        if (show1 === false) {
            if (!statusVal) {
                setShow1(!show1)
                return
            }
            await axios.post(`https://onlineparttimejobs.in/api/leadstatusmaster/add_Status`, { name: statusVal }, {
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                    Authorization: `Bearer ${token}`,
                },
            })
        }
        getDatas()
        setShow1(!show1)
    }


    const [tags, setTags] = useState([]);
    function handleTagKeyDown(e) {
        if (e.key !== 'Enter') return
        const value = e.target.value
        if (!value.trim()) return
        setTags([...tags, value])
        e.target.value = ''
    };
    const removetagTag = (index) => [
        setTags(tags.filter((el, i) => i !== index))
    ];


    const setValues = (e) => {
        const clone = { ...state }
        clone[e.target.name] = e.target.value
        setState(clone)
    }

    const toastSuccessMessage = () => {
        toast.success("Lead added Successfully", {
            position: "top-center"
        })
    };

    const toastErrorMessage = () => {
        toast.error("Lead not added", {
            position: "top-center"
        })
    };


    const sendValues = async () => {
        try {
            const res = await axios.post(`https://onlineparttimejobs.in/api/lead/add_Lead`, state, {
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                    Authorization: `Bearer ${token}`,
                },
            })
            toastSuccessMessage()
            props.getData()
            setTimeout(() => {
                props.onHide()
            }, 1000);

        } catch (error) {
            toastErrorMessage()
        }
        // console.log(state);
    }

    return <>
        <Modal
            {...props}
            size="xl"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <ToastContainer />
            <Modal.Header closeButton>
                <Modal.Title>Add New Lead</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className='row'>
                    <div className='col-md-4 '>
                        <label for=""><small>*</small>Status</label>
                        <div className='showHides' style={{ display: "flex", justifyContent: "space-between" }}>
                            {show1 ?
                                <Form.Select onChange={setValues} name='status' aria-label="Default select example">
                                    <option>Open this select menu</option>
                                    {status && status.map((item) => {
                                        return <option value={item._id}>{item.name ? item.name : '--'}</option>
                                    })}
                                </Form.Select>
                                :
                                <input type="text" className='form-control' value={statusVal} onChange={(e) => { setStatusVal(e.target.value) }} />
                            }

                            <button className={`${show1 ? 'btnAdds' : 'btnAdds1'}`} onClick={sendVal} type='button'>{show1 ? <GrFormAdd /> : <TiTick />}</button>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <label for=""><small>*</small>Source</label>
                        <div className='showHides' style={{ display: "flex", justifyContent: "space-between" }}>
                            {show2 ?
                                <Form.Select name='source' onChange={setValues} aria-label="Default select example">
                                    <option>Open this select menu</option>
                                    {soures && soures.map((item) => {
                                        return <option value={item._id}>{item.name ? item.name : '--'}</option>
                                    })}
                                </Form.Select>
                                :
                                <input type="text" onChange={(e) => { setsourseVal(e.target.value) }} value={sourseVal} className='form-control' />
                            }
                            <button className={`${show2 ? 'btnAdds' : 'btnAdds1'}`} onClick={sendVal2} type='button'>{show2 ? <GrFormAdd /> : <TiTick />}</button>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <label htmlFor="">Assigned</label>
                        <Form.Select name='assignTo' onChange={setValues} aria-label="Default select example">
                            <option>Open this select menu</option>
                            {staff && staff.map((item) => {
                                return <option value={item._id}>{item.firstname ? item.firstname + " " + item.lastname : '--'}</option>
                            })}
                        </Form.Select>

                    </div>
                </div>
                <hr className='border border-1 border-secondry opacity-50' />
                <div className="form-group">
                    <label className="col-md-3 col-from-label">Tags <span className="text-danger">*</span>
                    </label>
                    <div className="col-md-8">
                        <div className="tags_inp_wrapper">
                            <div className='tags-input-container'>
                                {tags.map((tag, index) => {
                                    return <div className='tag-item' key={index}>
                                        <span className='text'>{tag}</span>
                                        <span className='close' onClick={() => removetagTag(index)}>&times;</span>
                                    </div>
                                })}
                                <input type="text" onKeyDown={handleTagKeyDown} placeholder='type some text' className='tags-input' name="attributes" />
                            </div>
                        </div>
                    </div>
                </div>
                <hr className='border border-1 border-secondary opacity-50' />
                <div className='row'>
                    <div className='col-md-6 mb-3 '>
                        <label htmlFor=""><span style={{ color: "red" }}>*</span>Name</label>
                        <input type="text" className='form-control' value={state.name} name='name' onChange={setValues} />
                    </div>
                    <div className='col-md-6 mb-3'>
                        <label htmlFor="">Address</label>
                        <textarea id="" cols="" rows="" value={state.address} name='address' onChange={setValues} className='form-control' style={{ height: 40 }}></textarea>
                    </div>
                    <div className='col-md-6 mb-3'>
                        <label htmlFor="">Position</label>
                        <input type="text" className='form-control' value={state.position} name='position' onChange={setValues} />
                    </div>
                    <div className='col-md-6 mb-3'>
                        <label htmlFor="">City</label>
                        <input type="text" className='form-control' value={state.city} name='city' onChange={setValues} />
                    </div>
                    <div className='col-md-6 mb-3'>
                        <label htmlFor="">Email Address</label>
                        <input type="text" className='form-control' value={state.email} name='email' onChange={setValues} />
                    </div>
                    <div className='col-md-6 mb-3'>
                        <label htmlFor="">State</label>
                        <input type="text" className='form-control' value={state.state} name='state' onChange={setValues} />
                    </div>
                    <div className='col-md-6 mb-3'>
                        <label htmlFor="">Website</label>
                        <input type="text" className='form-control' value={state.website} name='website' onChange={setValues} />
                    </div>
                    <div className='col-md-6 mb-3'>
                        <label htmlFor="">Country</label>
                        {/* <input type="text" className='form-control' value={state.country} name='country' onChange={setValues} /> */}
                        <Form.Select name='country' onChange={setValues} aria-label="Default select example">
                            <option>Open this select menu</option>
                            {countrys && countrys.map((item) => {
                                return <option value={item._id}>{item.name}</option>
                            })}
                        </Form.Select>
                    </div>
                    <div className='col-md-6 mb-3'>
                        <label htmlFor="">Phone</label>
                        <input type="text" className='form-control' value={state.phone} name='phone' onChange={setValues} />
                    </div>
                    <div className='col-md-6 mb-3'>
                        <label htmlFor="">Zip Code</label>
                        <input type="text" className='form-control' value={state.zip} name='zip' onChange={setValues} />
                    </div>

                    <div className='col-md-6 mb-3'>
                        <label htmlFor="">lead Value</label>
                        <div className='d-flex'>
                            <input type="number" className='form-control' value={state.leadValue} name='leadValue' onChange={setValues} />
                            <input type="button" value="INR" />
                        </div>
                    </div>
                    <div className='col-md-6 mb-3'>
                        <label htmlFor="">Company</label>
                        <input type="text" className='form-control' value={state.company} name='company' onChange={setValues} />
                    </div>
                    <div className='col-md-12 mb-3'>
                        <label htmlFor="">Description</label>
                        <div>
                            <textarea id="" cols="100" rows="5" value={state.description} name='description' onChange={setValues} ></textarea>
                        </div>

                    </div>
                    <div className='col-md-6 mb-3'>
                        <label htmlFor="">Date Contacted</label>
                        <input type="date" className='form-control' value={state.date} name='date' onChange={setValues} />
                    </div>
                    <div className='col-md-12 mb-3 d-flex'>
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                name="exampleRadios"
                                id="exampleRadios1"
                                defaultValue="option1"
                                defaultChecked=""
                            />
                            <label className="form-check-label" htmlFor="exampleRadios1">
                                Public
                            </label>
                        </div>
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                name="exampleRadios"
                                id="exampleRadios2"
                                defaultValue="option2"
                            />
                            <label className="form-check-label" htmlFor="exampleRadios2">
                                Contacted Today
                            </label>
                        </div>
                    </div>
                    <div className='col-md-12 mb-3'>
                        <label htmlFor="">Father's Name</label>
                        <input type="text" className='form-control' />
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={sendValues}>Save</Button>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>

        
    </>
}
export default ModalLead