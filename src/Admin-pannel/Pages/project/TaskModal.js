
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { BsTagFill } from 'react-icons/bs';
import Select from "react-select";

import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import Multiselect from 'multiselect-react-dropdown';
import axios from 'axios';
import { toast ,ToastContainer} from 'react-toastify';

function TaskModal(props) {
  const params = useParams()
  const options4 = [
    { value: "Azhruddin Shammim", label: "Azhruddin Shammim" },
    { value: "Staff1 Sec", label: "Staff1 Sec" },
  ];
  const options5 = [
    { value: "Azhruddin Shammim", label: "Azhruddin Shammim" },
    { value: "Staff1 Sec", label: "Staff1 Sec" },
  ];
  const [show, setShow] = useState(false);
  const [value, setValue] = useState(null);
  const [val, setVal] = useState({
    name: "",
    description: "",
    priority: "",
    startdate: "",
    duedate: "",
    datefinished: "",
    addedfrom: "",
    user_id: "",
    ship_id: "",
    bill_id: "",
    is_added_from_contact: "",
    status: "Pending",
    recurring_type: "",
    subject: "",
    hourly_rate: "",
    visible_to_client: true,
    estimate_hour: "",
    deadline_notified: true,
    project_id: params.id,
    followerStaff: [],
    followerUser: [
      "64561a0f124eb95f6a489fe5"
    ]
  })


  const [customers, setCustomers] = useState(null)
  const [followers, setfollowers] = useState(null)
  const [ship_id, setShipid] = useState(null)
  const [bill_id, setbill_id] = useState(null)
  const [finalCatD, setFinalCatD] = useState();

  const token = window.localStorage.getItem('adminToken')
  const onchangeHandel = async (e) => {
    if (e.target.name == 'user_id') {
      const id = e.target.value
      const clone = { ...val }
      clone[e.target.name] = e.target.value
      setVal(clone)

      const res1 = await axios.get(`https://onlineparttimejobs.in/api/user/shipAddress/${id}`)
      const res2 = await axios.get(`https://onlineparttimejobs.in/api/user/billAddress/${id}`)
      setShipid(res1.data)
      setbill_id(res2.data)
      return
    }
    const clone = { ...val }
    clone[e.target.name] = e.target.value
    setVal(clone)
  }

  const getDatas1 = async () => {
    const res = await axios.get(`https://onlineparttimejobs.in/api/customer`)
    const res2 = await axios.get(`https://onlineparttimejobs.in/api/staff`)
    setCustomers(res.data)
    setfollowers(res2.data)
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

  const SendDatas = async () => {
    const obj = { ...val, followerStaff: finalCatD }
    
    try {
      const res = await axios.post(`https://onlineparttimejobs.in/api/task/add_Task`, obj, {
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: `Bearer ${token}`,
        },
      })
      toastSuccessMessage2()
      props.getDatas()
      setTimeout(() => {
        setVal({
          name: "",
          description: "",
          priority: "",
          startdate: "",
          duedate: "",
          datefinished: "",
          addedfrom: "",
          user_id: "",
          is_added_from_contact: "No",
          status: "pending",
          recurring_type: "",
          repeat_every: "",
          recurring: "",
          is_recurring_from: "",
          cycles: "",
          total_cycles: "",
          custom_recurring: "",
          last_recurring_date: "",
          rel_id: "",
          rel_type: "",
          is_public: "",
          billable: "",
          subject: "",
          assigned: "",
          billed: "",
          invoice_id: "",
          hourly_rate: "",
          milestone: "",
          kanban_order: "",
          milestone_order: "",
          visible_to_client: "",
          estimate_hour: "",
          deadline_notified: "",
        })
        props.onHide()
      }, 1000);
     
    } catch (error) {
      toastErrorMessage2()
    }

  }

  useEffect(()=>{
    getDatas1()
  },[])

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <ToastContainer/>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="container">
          <div className="card">
            <div className="card-body">
              <div className="row">
                <div className="col-md-12">
                  <div className="form">
                    <label className="form-label">
                      Attachment
                    </label>
                    <input className="form-control" type="file" />
                  </div>
                  <div className="form">
                    <label className="form-label">
                      Name
                    </label>
                    <input className="form-control" type="text" name='name' value={val.name} onChange={onchangeHandel} />
                  </div>
                  <div className="form">
                    <label className="form-label">
                      Subject
                    </label>
                    <input className="form-control" type="text" name='subject' value={val.subject} onChange={onchangeHandel} />
                  </div>
                  <div className="form">
                    <label className="form-label">
                      Hourly Rate
                    </label>
                    <input className="form-control" type="number" name='hourly_rate' value={val.hourly_rate} onChange={onchangeHandel} />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form">
                    <label className="form-label">Start Date</label>
                    <input className="form-control" type="date" name='startdate' value={val.startdate} onChange={onchangeHandel} />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form">
                    <label className="form-label">Due Date</label>
                    <input className="form-control" type="date" name='duedate' value={val.duedate} onChange={onchangeHandel} />
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form">
                    <label className="form-label">Addedfrom</label>
                    <input className="form-control" type="date" name='addedfrom' value={val.addedfrom} onChange={onchangeHandel} />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form">
                    <label className="form-label">Date Finished</label>
                    <input className="form-control" type="date" name='datefinished' value={val.datefinished} onChange={onchangeHandel} />
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form">
                    <label className="form-label">Related To</label>
                    <select className="form-select" name='recurring_type' value={val.recurring_type} onChange={onchangeHandel} >
                      <option>
                        Select option
                      </option>
                      <option value='Project'>Project</option>
                      <option value='Invoice'>Invoice</option>
                      <option value='Customer'>Customer </option>
                      <option value='Estimate'>Estimate</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form">
                    <label className="form-label" >
                      Priority
                    </label>
                    <Form.Select aria-label="Default select example" name='priority' value={val.priority} onChange={onchangeHandel} >
                      <option>Open this select menu</option>
                      <option value="Low">Low</option>
                      <option value="Medium">Medium</option>
                      <option value="High">High</option>
                      <option value="Urgent">Urgent</option>
                    </Form.Select>
                  </div>

                </div>
                <div className="col-md-6">
                  <div className="form">
                    <label className="form-label">
                      Followers
                    </label>

                    {followers && <Multiselect
                      isObject={true}
                      displayValue="firstname"
                      options={followers}
                      showCheckbox
                      selectedValues={[]}
                      onRemove={(selectedCat) => {
                        const selectedIds = selectedCat?.map((cat) => {
                          return cat._id
                        })
                        setFinalCatD(selectedIds)
                      }}
                      onSelect={(selectedCat) => {
                        const selectedIds = selectedCat?.map((cat) => {
                          return cat._id
                        })
                        setFinalCatD(selectedIds)
                      }}
                    />}
                  </div>

                </div>
                <div className="col-md-6">
                  <div className="form">

                    <label className="form-label">Customer</label>
                    <select className="form-select" name='user_id' value={val.user_id} onChange={onchangeHandel}>
                      <option value='0'>Select Customer</option>
                      {customers && customers.map((item) => {
                        return <option key={item._id} value={item._id}>{item.firstname + " " + item.lastname}</option>
                      })}

                    </select>
                  </div>

                </div>
                {ship_id && <div className="col-md-6">
                  <div className="form">

                    <label className="form-label">Shipping Address</label>
                    <select className="form-select" name='shipp_id' value={val.shipp_id} onChange={onchangeHandel}>
                      <option>Select Address</option>
                      {ship_id && ship_id?.address.map((item) => {
                        return <option key={item._id} value={item._id}>{item.addressLine1 + " " + item.addressLine2} {item.city + " " + item.val} {item.country + " " + item.province}</option>
                      })}

                    </select>
                  </div>

                </div>}
                {bill_id && <div className="col-md-6">
                  <div className="form">

                    <label className="form-label">Billing Address</label>
                    <select className="form-select" name='bill_id' value={val.bill_id} onChange={onchangeHandel}>
                      <option>Select Address</option>
                      {ship_id && bill_id?.address?.map((item) => {
                        return <option key={item._id} value={item._id}>{item.company + " " + item.addressLine1} {item.city + " " + item.val} {item.country + " " + item.province}</option>
                      })}

                    </select>
                  </div>

                </div>}
                <div className="col-md-12">
                  <div className="form">
                    <label className="form-label">Estimate Hours</label>
                    <input className="form-control" type="number" name='estimate_hour' value={val.estimate_hour} onChange={onchangeHandel} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <div className="row">
                <div className="col-md-12">
                  <div className="form">
                    <label className=" form-label">
                      Task Description
                    </label>
                    <textarea className="form-control" type="text" name='description' value={val.description} onChange={onchangeHandel} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
        <Button onClick={SendDatas}>Save</Button>
      </Modal.Footer>
    </Modal>
  );
}
export default TaskModal