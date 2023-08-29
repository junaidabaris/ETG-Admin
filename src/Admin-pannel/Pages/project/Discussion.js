import React, { useEffect } from "react";
import { useState } from "react";
import { BsTagFill } from 'react-icons/bs'
import TableHead from "../tableHeader/TableHead";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from 'react-bootstrap/Form';
import { useParams } from "react-router-dom";
import axios from "axios";
// import Form from 'react-bootstrap/Form';
function Discussion() {
  const [show, setShow] = useState(false);
  const [value, setValue] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [modalShow, setModalShow] = useState(false);

  const params = useParams()
  const [shows, setShows] = useState(false)
  const [val, setVal] = useState({
    project_id: params.id,
    subject: "",
    description: "",
    show_to_customer: false,
    contact_id: params.id
  })
  const changeHanle = (e) => {
    const clone = { ...val }
    clone[e.target.name] = e.target.value
    setVal(clone)
  }

  const token = window.localStorage.getItem('adminToken')
  const sendDatas = async () => {

    try {
      const res = await axios.post(`https://onlineparttimejobs.in/api/projectdiscussion/add_Discussion`, { ...val, show_to_customer: shows }, {
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: `Bearer ${token}`,
        },
      })
      alert('Discussion  Added..!')
      handleClose()
    } catch (error) {
      alert(' Discussion  AddFail!!')
    }
  }

  const [staff, setStaff] = useState()
  const getStaff = async () => {
    const res = await axios.get(`https://onlineparttimejobs.in/api/staff`)
    setStaff(res.data)
  }

  const getData = async () => {
    const res = await axios.get(`https://onlineparttimejobs.in/api/projectdiscussion/${params.id}`, {
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        Authorization: `Bearer ${token}`,
      },
    })
  }
  useEffect(() => {
    // getData()
    getStaff()
  }, [])
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <Button
              variant="primary"
              onClick={handleShow}
              style={{ width: 170 }}
            >
              Create Discussion
            </Button>

            <Modal className="cusModal" show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>
                  <h4>Create Discussion</h4>
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div className="row">
                  <div className="col-md-12">
                    <div className="">
                      <label className="form-label mt-2">
                        Subject
                      </label>
                      <input className="form-control" type="text" value={val.subject} name="subject" onChange={changeHanle} />
                    </div>
                    <div className="">
                      <label className="form-label mt-2">
                        Description
                      </label>
                      <textarea className="form-control" type="text" value={val.description} name="description" onChange={changeHanle} />
                    </div>
                    <div className="">
                      <label className="form-label mt-2">
                        Description
                      </label>
                      <Form.Select aria-label="Default select example" value={val.contact_id} name="contact_id" onChange={changeHanle}>
                        <option>Open this select menu</option>
                        {staff && staff.map((item) => {
                          return <option value={item?._id}>{item?.firstname + " " + item?.lastname}</option>
                        })}
                      </Form.Select>
                    </div>
                    <div className="col-md-12 mt-2">
                      <Form>
                        {['checkbox'].map((type) => (
                          <div key={`default-${type}`} className="mb-3">
                            <Form.Check // prettier-ignore
                              type={type}
                              id={`default-${type}`}
                              label={`Visible to Customer`}
                              checked={shows}
                              onChange={() => { setShows(!shows) }}
                            />


                          </div>
                        ))}
                      </Form>
                    </div>
                  </div>


                </div>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={sendDatas}>
                  Save
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
        </div>
        <div className="card mt-3">
          <div className="card-body">
            <div className="">
              <TableHead />
            </div>
            <div className="row">
              <table className="table-secondary">
                <thead>
                  <tr>
                    <th>
                      Members
                    </th>
                    <th>Task</th>
                    <th>Timesheet Tags</th>
                    <th>Start Time</th>
                    <th>End Time </th>
                    <th>Note</th>
                    <th>Time(h)</th>
                    <th>Time(decimal)</th>
                    <th>Options</th>
                  </tr>

                </thead>
                <tbody>
                  No entries found
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-7">
            <div className="">
              <lable className="form-lable">
                Showing 1 to 1 of 1 entries
              </lable>
            </div>
          </div>
          <div className="col-md-5 text-end">
            <button
              className="btn-outline-secondary"
              style={{ width: 80, height: 42 }}
            >
              Previous
            </button>
            <button
              className="btn btn-primary"
              style={{ width: 40, height: 40 }}
            >
              1
            </button>
            <button
              className="btn-outline-secondary"
              style={{ width: 80, height: 40 }}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
export default Discussion