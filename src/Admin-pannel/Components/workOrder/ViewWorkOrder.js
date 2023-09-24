import React from "react";
import { GrFormNext } from "react-icons/gr";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs"
function ViewWorkOrder() {
  return (
    <>
      <div className="container">
        <div className="card p-3">
          <div className="row">
            <div className="col-md-6">
              <div className="">
                <label className="form-label">
                  Work order / GH00003 - pizza-1234 - Cutting
                </label>
              </div>
            </div>
            <div className="col-md-6 text-right">
              <div className="">
                <button className="btn mr-3">1/3</button>
                <button className="btn btn-border mr-2">Previous</button>
                <button className="btn btn-primary">
                  Next <GrFormNext />
                </button>
              </div>
            </div>
          </div>
          <hr className="border-secondary opacity-3" />
          <div className="row">
            <div className="col-md-6">
              <div className="">
                <button className="btn btn-success">Start Working</button>
              </div>
            </div>
            <div className="col-md-6">
              <div className="sw-main sw-theme-arrows pull-right">
                {/* SmartWizard html */}
                <ul className="nav nav-tabs step-anchor">
                  <li className="">
                    <a href="#">Waiting for another WO</a>
                  </li>
                  <li className=" active">
                    <a href="#">Ready</a>
                  </li>
                  <li className="">
                    <a href="#">In progress</a>
                  </li>
                  <li className="mr-3">
                    <a href="#">Finished</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="border-secondary opacity-3" />
          <div className="col-md-6 panel-padding">
            <input
              type="hidden"
              name="manufacturing_order"
              defaultValue={448}
            />
            <input type="hidden" name="work_order_id" defaultValue={1338} />
            <table className="table border table-striped table-margintop">
              <tbody>
                <tr className="project-overview">
                  <td className="bold td-width">To produce</td>
                  <td>
                    <b>pizza-1234</b>
                  </td>
                </tr>
                <tr className="project-overview">
                  <td className="bold">Quantity produced</td>
                  <td>
                    0.00/15.00 <b>Gram</b>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="row mt-3">
            <h6>Production Information</h6>
          </div>
          <hr className="border-secondary opacity-3" />
          <div className="row">
          <Tabs
              defaultActiveKey="payment2"
              id="uncontrolled-tab-example"
              className="mb-3"
            >
              <Tab eventKey="workInstruction" title="Work Instruction">
                
              </Tab>
              <Tab eventKey="CurrentProduction" title="Current production	">
               <div className="col-md-6 panel-padding">
  <table className="table table-striped table-margintop">
    <tbody>
      <tr className="project-overview">
        <td className="bold" width="40%">
          Quantity in production
        </td>
        <td>15.00</td>
      </tr>
    </tbody>
  </table>
</div>

              </Tab>
              <Tab eventKey="timeTracking" title=" Time Tracking">
                <div className="">
                <div className="row">
  <div className="col-md-6 panel-padding">
    <table className="table table-striped table-margintop">
      <tbody>
        <tr className="project-overview">
          <td className="bold" width="40%">
            Planned date
          </td>
          <td>
            <b /> To <b />
          </td>
        </tr>
        <tr className="project-overview">
          <td className="bold">Effective date</td>
          <td>
            <b /> To <b />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <div className="col-md-6 panel-padding">
    <table className="table table-striped table-margintop">
      <tbody>
        <tr className="project-overview">
          <td className="bold" width="40%">
            Expected duration
          </td>
          <td>
            <b>0.00</b> Minutes
          </td>
        </tr>
        <tr className="project-overview">
          <td className="bold">Real duration</td>
          <td>
            <b>0.00</b> Minutes
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

                </div>
                
              </Tab>
              <Tab eventKey="Miscellaneous" title=" Miscellaneous">
                <div className="">
                <div className="col-md-6 panel-padding">
  <table className="table table-striped table-margintop">
    <tbody>
      <tr className="project-overview">
        <td className="bold" width="40%">
          Work Centers
        </td>
        <td>Test</td>
      </tr>
      <tr className="project-overview">
        <td className="bold">Manufacturing order</td>
        <td>GH00003</td>
      </tr>
    </tbody>
  </table>
</div>

                </div>
              </Tab>
             
   </Tabs>
          </div>
          <div className="row mt-3">
            <div className="col-7">

            </div>
            <div className="col-5 text-right">
                <div className="">
                    <button className="btn btn-border">
                        Close
                    </button>
                    <button className="btn btn-primary ml-2">
                        Manufacturing Order
                    </button>
                </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
export default ViewWorkOrder