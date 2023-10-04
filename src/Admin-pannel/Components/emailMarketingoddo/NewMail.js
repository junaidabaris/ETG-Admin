import React from "react";
import { AiOutlineSmile } from "react-icons/ai"
import { AiOutlineStar } from "react-icons/ai"
import { Tabs } from "react-bootstrap";
import { Tab } from "bootstrap";
import ooo from "../../../assets/img/ema.png"
import Abtesting from "./AbTesting";
import Settings from "./Settings";
import Chats from "./Chats";
function NewMail(){
    return(
        <>
        <div className="container">
            <div className="card p-2">
                <div className="row">
                    <div className="col-6">
                        <div className="">
                            <button className="btn btn-primary">
                                Send
                            </button>
                            <button className="btn btn-secondary">
                                Schedule
                            </button>
                            <button className="btn btn-secondary">
                                Test
                            </button>
                        </div>
                    </div>
                </div>
                <div className="row p-3">
                    <div className="col-8">
                        <div className="row">
                            <div className="col-2">
                                <label className="form-label">
                                Subject
                                </label>
                            </div>
                            <div className="col-9 purch d-flex">
                            <input className="form-control purch" type="text" style={{border:'none',}}/>
                            <button className="btn">
                                <AiOutlineSmile/>
                            </button>
                            <button className="btn">
                                <AiOutlineStar/>
                            </button>
                            </div>
                        </div>
                        <div className="row">
                        <div className="col-2">
                        Recipients
                        </div>
                        <div className="col-4 purch">
                            <select className="form-select purch" style={{border:'none',}}>
                                <option></option>
                                <option></option>
                                <option></option>
                            </select>
                        </div>
                        <div className="col-3">
                        Select mailing lists
                        </div>
                        <div className="col-3 purch">
                            <select className="form-select purch" style={{border:'none',}}>
                                <option></option>
                                <option></option>
                                <option></option>
                            </select>
                        </div>
                    </div>
                   

                    </div>
                   
                </div>
                <div className="row">
                <div className="">
                    <Tabs
              defaultActiveKey="payment2"
              id="uncontrolled-tab-example"
              className="mb-3"
            >
              <Tab eventKey="Mail Body" title="Mail Body">
               <img src={ooo}
               alt="ema"/>
              </Tab>
              <Tab eventKey="A/B Tests" title="A/B Tests">
               <Abtesting/>
              </Tab>
              <Tab eventKey="Settings" title="Settings">
               <Settings/>
              </Tab>
              <Tab eventKey="Chat" title="Chat">
               <Chats/>
              </Tab>
             
            </Tabs>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default NewMail