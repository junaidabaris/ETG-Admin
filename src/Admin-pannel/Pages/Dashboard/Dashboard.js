import { RiDashboard3Fill } from "react-icons/ri";
import { FaFilter } from "react-icons/fa";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import USD from "./USD/Usd";
import INR from "./INR/INR";
import { GiHamburgerMenu } from "react-icons/gi";
import img1 from "../../../assets/img/profit and loss.png";
import img2 from "../../../assets/img/expensesaccountoverview.png";
import USD1 from "./USD1/USD1";
import INR1 from "./INR1/INR1";
import USD2 from "./USD2/USD2";
import INR2 from "./INR2/INR2";

function DashboarD() {
  return (
    <>
      <div className="container">
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-md-6">
                <h4 className="card-title">
                  <RiDashboard3Fill />
                  Dashboard
                </h4>
              </div>
              <div className="Enddflex1 col-md-6">
                <button className="btn btn-light" type="button">
                  <FaFilter />
                  Last 30 days
                </button>
              </div>
            </div>
            <hr style={{ opacity: "30" }} />
          </div>
          <div className="container ">
            <div className="marginR1 row">
              <div className="rightB1 col-md-6">
                <div className="bordersetR row">
                  <div className="col-md-8">
                    <h6>BANK ACCOUNTS</h6>
                  </div>
                  <div className="col-md-4">BALANCE</div>
                </div>{" "}
                <div className="bordersetMR row">
                  <div className="col-md-8">
                    <p>Cash and cash equivalents</p>
                  </div>
                  <div className="col-md-4">INR0,00</div>
                </div>{" "}
                <div className="bordersetR row">
                  <div className="col-md-8">
                    <p>Credit Card</p>
                  </div>
                  <div className="col-md-4">INR0,00</div>
                </div>
              </div>

              <div className="rightB1 col-md-6">
                <Tabs
                  defaultActiveKey="USD($)"
                  id="uncontrolled-tab-example"
                  className="mb-3"
                >
                  <Tab eventKey="USD($)" title="USD($)">
                    <USD />
                  </Tab>
                  <Tab eventKey="INR(INR)" title="INR(INR)">
                    <INR />
                  </Tab>
                </Tabs>
              </div>
            </div>
            <div className="marginR1 row">
              <div className="Textalighnc0 rightB1 col-md-6">
                <div className="row">
                  <div className="col-md-6">
                    <span>Profit and Loss</span>
                  </div>
                  <div className="BEnd1 col-md-6">
                    <button className="btn" type="button">
                      <GiHamburgerMenu />
                    </button>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <img src={img1} className="img-fluid" alt="..." />
                  </div>
                </div>
              </div>
              <div className="Textalighnc0 rightB1 col-md-6">
                <div className="row">
                  <div className="col-md-6">
                    <span>Expense account overview</span>
                  </div>
                  <div className="BEnd1 col-md-6">
                    <button className="btn" type="button">
                      <GiHamburgerMenu />
                    </button>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <img src={img2} className="img-fluid" alt="..." />
                    </div>
                  </div>
                </div>
              </div>
              <div className="Textalighnc0 col-md-6">
                <Tabs
                  defaultActiveKey="USD1"
                  id="uncontrolled-tab-example"
                  className="mb-3"
                >
                  <Tab eventKey="USD1" title="USD($)">
                    <USD1 />
                  </Tab>
                  <Tab eventKey="INR1" title="INR(INR)">
                    <INR1 />
                  </Tab>
                </Tabs>
              </div>
              <div className="Textalighnc0 col-md-6">
                <Tabs
                  defaultActiveKey="USD2"
                  id="uncontrolled-tab-example"
                  className="mb-3"
                >
                  <Tab eventKey="USD2" title="USD($)">
                    <USD2 />
                  </Tab>
                  <Tab eventKey="INR2" title="INR(INR)">
                    <INR2 />
                  </Tab>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default DashboarD