import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
function EditTask(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
        Edit task Make Birth Certificate
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="container">
          <div className="row">
            <div className="col-md-12 ">
              <div className="checks d-flex">
                <div className="form-check fs-5 ml-3">
                  <input
                    className="form-check-input "
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label className="form-check-label" for="flexCheckDefault">
                    Public
                  </label>
                </div>
                <div className="form-check ml-3 fs-5">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label className="form-check-label" for="flexCheckDefault">
                    Billable
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
                <div className="form mt-3 g-1">
                    <label className="form-label">
                        Subject
                    </label>
                    <input className="form-control" type="text"/>


                </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
                <div className="form mt-3 g-1">
                    <label className="form-label">
                    Hourly Rate
                    </label>
                    <input className="form-control" type="number"/>


                </div>
            </div>
            <div className="col-md-6">
                <div className="form">
                    <label className="form-label">
                        Start Date
                    </label>
                    <input className="form-control" type="date"/>
                </div>
            </div>
            <div className="col-md-6">
                <div className="form">
                    <label className="form-label">
                        Due Date
                    </label>
                    <input className="form-control" type="date"/>
                </div>
            </div>
            <div className="col-md-6">
                <div className="form">
                    <label className="form-label">
                        Priority
                    </label>
                   <select className="form-select">
                    <option>Low</option>
                    <option>Urgent</option>
                    <option>High</option>
                    <option>Mideum</option>
                   </select>
                </div>
            </div>
            <div className="col-md-6">
                <div className="form">
                    <label className="form-label">
                        Repeat Every
                    </label>
                   <select className="form-select">
                    <option>Week</option>
                    <option>2Week</option>
                    <option>3Mounth</option>
                    <option>4Mounth</option>
                   </select>
                </div>
            </div>
            <div className="col-md-6">
                <div className="form">
                    
                    <input className="form-control" type="number"/>
                </div>
            </div>
            <div className="col-md-6">
                <div className="form">
                   
                   <select className="form-select">
                    <option>Years(s)</option>
                    <option>Days(s)</option>
                    <option>Months(s)</option>
                    <option>Weeks(s)</option>
                   </select>
                </div>
            </div>
            <div className="col-md-12">
                <div className="form">
                    <label className="form-label">
                        Total Cycles
                    </label>
                    <input className="form-control" type="number"/>
                </div>
            </div>
            <div className="col-md-6">
                <div className="form">
                    <label className="form-label">
                        Related To
                    </label>
                   <select className="form-select">
                    <option>Lead</option>
                    <option>Ticket</option>
                    <option>Expences</option>
                    <option>Mideum</option>
                   </select>
                </div>
            </div>
            <div className="col-md-6">

            </div>
            <div className="col-md-12">
                <div className="form mt-3 g-1">
                    <label className="form-label">
                   Estimate Hours
                    </label>
                    <input className="form-control" type="number"/>


                </div>
            </div>
            <div className="col-md-12">
                <div className="form mt-3 g-1">
                    <label className="form-label">
                    Task Description
                    </label>
                    <textarea className="form-control" type="text"/>


                </div>
            </div>
            
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default EditTask;
