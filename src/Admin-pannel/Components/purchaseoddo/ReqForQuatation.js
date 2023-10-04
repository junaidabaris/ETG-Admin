import React from "react";
import { AiOutlineStar } from "react-icons/ai"
import { Tabs } from "react-bootstrap";
import { Tab } from "bootstrap";
import Products from "./Products";
import OtherInformation from "./OtherInformation";
import Alternatives from "./Alternatives";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useNavigate } from "react-router-dom";
function ReqForQuatation() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigater = useNavigate()
    const changeRock=()=>{
        navigater('/admin/draft')
    }

  return (
    <>
      <div className="container">
        <div className="card p-2">
          <div className="row">
            <div className="col-6">
              <button className="btn btn-primary">New</button>
            </div>
          </div>
          <hr className="border border-3 border-secondary" />
          <div className="row"></div>
        </div>
        <div className="row mt-2">
          <div className="col-6">
            <div className="">
              <button className="btn btn-primary">Receive Products</button>
              <button className="btn border border-secondary ml-1">
                Send PO
              </button>
              {/* <button className="btn-primary border border-secondary ml-1">
                Create Invoice
              </button> */}
              <Button variant="primary" onClick={() => setShow(true)}>
              Create Invoice
      </Button>
              <button className="btn border border-secondary ml-1 ">
                Cancel
              </button>
              <button className="btn border border-secondary ml-1 ">
                Lock
              </button>
            </div>
          </div>
          <div className="col-6 text-right">
            <div className="o_statusbar_status">
              <button
                type="button"
                className="btn btn-secondary o_arrow_button_current o_arrow_button disabled"
                disabled=""
                role="radio"
                aria-label="Current state"
                aria-checked="true"
                aria-current="step"
                data-value="purchase"
              >
                Purchase Order
              </button>
              <button
                type="button"
                className="btn btn-secondary o_arrow_button disabled"
                disabled=""
                role="radio"
                aria-label="Not active state"
                aria-checked="false"
                data-value="sent"
              >
                RFQ Sent
              </button>
              <button
                type="button"
                className="btn btn-secondary o_arrow_button disabled"
                disabled=""
                role="radio"
                aria-label="Not active state"
                aria-checked="false"
                data-value="draft"
              >
                RFQ
              </button>
            </div>
          </div>
        </div>
        <div className="card p-1 border border-secondary">
            <div className="row mt-2">
                <div className="col-8">
                    <span><label className="form-label fs-6">
                    Purchase Order</label>
                    </span>
                    <br/>
                    <label className="form-label fs-3">
                        <AiOutlineStar/>
                        <span className="ml-3">
                        P00015
                        </span>
                    </label>
                </div>
            </div>
            <div className="row mt-2">
                <div className="col-6">
                    <div className="row">
                        <div className="col-4">
                            <label className="form-label">
                            Vendor
                            </label>
                            
                        </div>
                        <div className="col-8">
                           <span>Ready Mat</span>
                            
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-4">
                            <label className="form-label">
                            Vendor Reference
                            </label>
                            
                        </div>
                        <div className="col-8 purch">
                          <input className="form-control purch" type="text" style={{border:'none',}}/>
                            
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-4">
                            <label className="form-label">
                            Blanket Order
                            </label>
                            
                        </div>
                        <div className="col-8 purch">
                          <input className="form-control purch" type="text" style={{border:'none',}}/>
                            
                        </div>
                    </div>
                </div>
                <div className="col-6">
                    <div className="row">
                        <div className="col-4">
                            <label className="form-label">
                            Confirmation Date
                            </label>
                            
                        </div>
                        <div className="col-8">
                           <span>09/27/2023 06:39:44t</span>
                            
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-4">
                            <label className="form-label">
                            Expected Arrival
                            </label>
                            
                        </div>
                        <div className="col-8 purch">
                          <input className="form-control purch" type="date" style={{border:'none',}}/>
                            
                        </div>
                    </div>
                    <div className="row mt-2">
                        <div className="col-4">
                            <label className="form-label">
                           
                            </label>
                            
                        </div>
                        <div className="col-8 ">
                          <div className="form-check">
                      <input
                        className="form-check-input "
                        type="checkbox"
                        defaultValue=""
                        id="flexCheckDefault"
                      />
                      <label className="form-label">
                      Ask confirmation
                      </label>
                    </div>
                        </div>
                    </div>
                </div>
            </div>
                          {/* Model */}

                          <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-70w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Create Invoice
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <div className="row">
          <div className="col-8">
            <div className="row">
              <div className="col-4">
                <label className="form-label">
                Create Invoice
                </label>
              </div>
              <div className="col-8">
              <Form>
      {['radio'].map((type) => (
        <div key={`default-${type}`} className="mb-3">
          <Form.Check // prettier-ignore
            type={type}
            id={`default-${type}`}
            label={"Regular invoice"}
          />
        </div>
      ))}
    </Form>
              </div>
            </div>
            <div className="row">
              <div className="col-4">
                
              </div>
              <div className="col-8">
              <Form>
      {['radio'].map((type) => (
        <div key={`default-${type}`} className="mb-3">
          <Form.Check // prettier-ignore
            type={type}
            id={`default-${type}`}
            label={"Down payment (percentage)"}
          />
        </div>
      ))}
    </Form>
              </div>
            </div>
            <div className="row">
              <div className="col-4">
               
              </div>
              <div className="col-8">
              <Form>
      {['radio'].map((type) => (
        <div key={`default-${type}`} className="mb-3">
          <Form.Check // prettier-ignore
            type={type}
            id={`default-${type}`}
            label={"Down payment (fixed amount)"}
          />
        </div>
      ))}
    </Form>
              </div>
            </div>
            <div className="row">
              <div className="col-4">
                <label className="form-label">
                Already invoiced
                </label>
              </div>
              <div className="col-8 ">
             <input className="form-control" type="text" disabled placeholder="$ 0.00" style={{border:'none',}}/>
              </div>
            </div>
            <div className="row mt-2">
              <div className="col-4">
                <label className="form-label" disabled>
                Amount to invoice
                </label>
              </div>
              <div className="col-8 ">
             <input className="form-control" type="text" disabled placeholder="$ 14,087.50" style={{border:'none',}}/>
              </div>
            </div>
          </div>
         </div>
        </Modal.Body>
        <Modal.Footer>
           
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={changeRock}>
                Create Draft Invoice
              </Button>
            </Modal.Footer>
      </Modal>



            <Tabs
              defaultActiveKey="payment2"
              id="uncontrolled-tab-example"
              className="mb-3"
            >
              <Tab eventKey="Products" title="Products">
                <Products/>
              </Tab>
              <Tab eventKey="Other Information" title="Other Information">
               <OtherInformation/>
              </Tab>
              <Tab eventKey="Alternatives" title="Alternatives">
               <Alternatives/>
              </Tab>
             
            </Tabs>
        </div>
      </div>
    </>
  );
}
export default ReqForQuatation