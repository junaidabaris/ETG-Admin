import axios from 'axios';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { BsTagFill } from 'react-icons/bs';
import { ToastContainer, toast } from 'react-toastify';
function ReminerModal(props) {


    const token = window.localStorage.getItem('adminToken')
    const [values, setValues] = useState({
        task_id: "",
        start_time: "",
        note: "",
        end_time: "",
        hourly_rate: ""
    })


    const onchangeHandel = async (e) => {
        const clone = { ...values }
        clone[e.target.name] = e.target.value
        setValues(clone)
    }

    const senData = ()=>{
        console.log(values);
    }

    const toastSuccessMessage2 = () => {
        toast.success("Task Added Successfully", {
          position: "top-center"
        })
      };
    
      const toastErrorMessage2 = () => {
        toast.error("Task Not Added", {
          position: "top-center"
        })
      };
    
      const SendData = async () => {
        try {
          const res = await axios.post(`https://onlineparttimejobs.in/api/taskTimer/add_TaskTimer`, values, {
            headers: {
              "Content-type": "application/json; charset=UTF-8",
              Authorization: `Bearer ${token}`,
            },
          })
          toastSuccessMessage2()
          setTimeout(() => {
            setValues({
                task_id: "",
                start_time: "",
                note: "",
                end_time: "",
                hourly_rate: ""
            })
            props.onHide()
    
          }, 1000);
        } catch (error) {
          toastErrorMessage2()
        }
    
      }

    return <>

        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title>
                    <h4>Timesheet</h4>
                </Modal.Title>
            </Modal.Header>
            <ToastContainer />
            <Modal.Body>

                <div className="row">
                    <div className="col-md-4">
                        <div className="">
                            <label className="form-label mt-2">
                                Start Time
                            </label>
                        </div>
                        <div className="mt-2">
                            <label className="form-label mt-2">
                                End Time
                            </label>
                        </div>
                        <div className="mt-2">
                            <label className="form-label mt-2">
                                *Task
                            </label>
                        </div>
                        <div className="mt-2">
                            <label className="form-label mt-2">
                                Hourly_rate
                            </label>
                        </div>
                        <div className="mt-2">
                            <label className="form-label mt-2">
                                Note
                            </label>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="">
                            <input className="form-control" type="datetime-local" value={values.start_time} name='start_time' onChange={onchangeHandel} />
                        </div>
                        <div className="mt-2">
                            <input className="form-control" type="datetime-local" value={values.end_time} name='end_time' onChange={onchangeHandel} />
                        </div>
                        <div className="mt-2">
                            <select className="form-select" value={values.task_id} name='task_id' onChange={onchangeHandel} >
                                <option>Select Task</option>
                                {props?.state1 && props?.state1.map((item) => {
                                    return <option key={item._id} value={item._id}> {item.name}</option>
                                })}

                            </select>
                        </div>
                        <div className="mt-2">
                            <input className="form-control" type="number" value={values.hourly_rate} name='hourly_rate' onChange={onchangeHandel} />
                        </div>
                        <div className="mt-2">
                            <textarea className="form-control" type="text"  value={values.note} name='note' onChange={onchangeHandel} />
                        </div>
                    </div>
                </div>
            </Modal.Body>

            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
                <Button onClick={SendData} >Save</Button>
            </Modal.Footer>
        </Modal>
    </>
}
export default ReminerModal