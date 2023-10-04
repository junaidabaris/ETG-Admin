import React from "react";
import { Tabs } from "react-bootstrap";
import { Tab } from "bootstrap";
import InvoiceLines from "./InvoiceLines";
import JournalItems from "./JournalItems";
import OtherInfoDraftInvo from "./OtherInfoDraftInvo";
function CreateDraftInvoice(){
    return(
        <>
        <div className="container">
            <div className="card p-1 border border-secondary">
            <div className="row mt-2">
                <div className="col-8">
                    <span><label className="form-label fs-6">
                    Customer Invoice
                    </label>
                    </span>
                    <br/>
                    <label className="form-label fs-3">
                        <span className="ml-3">
                        Draft
                        </span>
                    </label>
                </div>
            </div>
            <div className="row mt-2">
                <div className="col-6">
                    <div className="row">
                        <div className="col-4">
                            <label className="form-label">
                            Customer
                            </label>
                            
                        </div>
                        <div className="col-8 purch">
                          <input className="form-control purch" type="text" placeholder="Shazli Ahmed"
                          style={{border:'none',}}/>
                            98B Nfc
Delhi 1210013
India ‒ 
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-4">
                            <label className="form-label">
                            Delivery Address
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
                            Invoice Date
                            </label>
                            
                        </div>
                        <div className="col-8 purch">
                          <input className="form-control purch" type="text" style={{border:'none',}}/>
                            
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-4">
                            <label className="form-label">
                            Payment Reference
                            </label>
                            
                        </div>
                        <div className="col-8 purch">
                          <input className="form-control purch" type="text" style={{border:'none',}}/>
                            
                        </div>
                    </div>
                    <div className="row mt-2">
                        <div className="col-4">
                            <label className="form-label">
                            Payment terms
                            </label>
                            
                        </div>
                        <div className="col-8 purch">
                          <input className="form-control purch" type="text" placeholder="29Days" style={{border:'none',}}/>
                            
                        </div>
                    </div>
                    <div className="row mt-2">
                        <div className="col-4">
                            <label className="form-label">
                            Journal
                            </label>
                            
                        </div>
                        <div className="col-8 purch">
                          <input className="form-control purch" type="text" placeholder="Customer Invoices" style={{border:'none',}}/>
                            
                        </div>
                    </div>
                </div>
            </div>
            
            <Tabs
              defaultActiveKey="payment2"
              id="uncontrolled-tab-example"
              className="mb-3"
            >
              <Tab eventKey="Invoice Lines" title="Invoice Lines">
              <InvoiceLines/>
              </Tab>
              <Tab eventKey="Jonral Items" title="Jonral Items">
               <JournalItems/>
              </Tab>
              <Tab eventKey="Other Info" title="Other Info">
              <OtherInfoDraftInvo/>
              </Tab>
             
            </Tabs>
            </div>
        </div>
        </>
    )
}
export default CreateDraftInvoice