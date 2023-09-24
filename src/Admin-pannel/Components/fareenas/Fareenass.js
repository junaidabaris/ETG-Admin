import React from "react";
// import "../fareenas/style.css";
import fre from "../../../assets/img/free.png";
function Fareenass() {
  return (
    <>
      <div className="container" style={{ marginLeft: 50 }}>
        <div className="row">
          <div className="col-5">
            <div className="mainn">
              <div className="row ">
                <div className="col-3 border-left border-right border-top border-bottom border-primary">
                  <label className="form-label">Order No</label>
                </div>
                <div className="col-6 border-left border-right border-top border-bottom border-primary">
                  <input className="form-control" type="text" />
                </div>
              </div>
              <div className="row">
                <div className="col-3 border-left border-right border-top border-bottom border-primary">
                  <label className="form-label">Order Date</label>
                </div>
                <div className="col-6 border-left border-right border-top border-bottom border-primary">
                  <input className="form-control" type="text" />
                </div>
              </div>
              <div className="row">
                <div className="col-3 border-left border-right border-top border-bottom border-primary">
                  <label className="form-label">Due Date</label>
                </div>
                <div className="col-6 border-left border-right border-top border-bottom border-primary">
                  <input className="form-control" type="text" />
                </div>
              </div>
              <div className="row">
                <div className="col-3 border-left border-right border-top border-bottom border-primary">
                  <label className="form-label">Customer</label>
                </div>
                <div className="col-6 border-left border-right border-top border-bottom border-primary">
                  <select className="form-select">
                    <option>A</option>
                    <option>B</option>
                    <option>C</option>
                  </select>
                </div>
              </div>
              <div className="row">
                <div className="col-3 border-left border-right border-top border-bottom border-primary">
                  <label className="form-label">Billing Address</label>
                </div>
                <div className="col-6 border-left border-right border-top border-bottom border-primary">
                  <select className="form-select">
                    <option>Mzn</option>
                    <option>fwe</option>
                    <option>W</option>
                  </select>
                </div>
              </div>
              <div className="row">
                <div className="col-3 border-left border-right border-top border-bottom border-primary">
                  <label className="form-label">Shipping Address</label>
                </div>
                <div className="col-6 border-left border-right border-top border-bottom border-primary">
                  <select className="form-select">
                    <option>Delhi</option>
                    <option>Faridabad</option>
                    <option>Khataili</option>
                  </select>
                </div>
              </div>
              
              <div className="row">
                <div className="col-3 border-left border-right border-top border-bottom border-primary">
                  <label className="form-label">Due Design</label>
                </div>
                <div className="col-6 border-left border-right border-top border-bottom border-primary">
                  <input className="form-control" type="text" />
                </div>
              </div>
              <div className="row">
                <div className="col-3 border-left border-right border-top border-bottom border-primary">
                  <label className="form-label">Embroidery</label>
                </div>
                <div className="col-6 border-left border-right border-top border-bottom border-primary">
                  <input className="form-control" type="text" />
                </div>
              </div>
            </div>
            <div className="mainn mt-3">
              <div className="row">
                <div className="col-3 border-left border-right border-top border-bottom border-primary">
                  <label className="form-label">Body Measurements</label>
                </div>
                <div className="col-6 border-left border-right border-top border-bottom border-primary">
                  <label className="form-label">Fix Measurements</label>
                </div>
              </div>
              <div className="row">
                <div className="col-3 border-left border-right border-top border-bottom border-primary">
                  <label className="form-label">Pads</label>
                </div>
                <div className="col-6 border-left border-right border-top border-bottom border-primary">
                  <div className="d-flex">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue=""
                        id="flexCheckDefault"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexCheckDefault"
                      >
                        Yes
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue=""
                        id="flexCheckDefault"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexCheckDefault"
                      >
                        No
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mainn mt-3">
              <div className="row">
                <div className="col-3 border-left border-right border-top border-bottom border-primary">
                  <label className="form-label">Shoulder</label>
                </div>
                <div className="col-6 border-left border-right border-top border-bottom border-primary">
                  <input className="form-control" type="text" />
                </div>
              </div>
              <div className="row">
                <div className="col-3 border-left border-right border-top border-bottom border-primary">
                  <label className="form-label">F Cross / B Cross</label>
                </div>
                <div className="col-6 border-left border-right border-top border-bottom border-primary">
                  <div className="row">
                    <div className="col-6 border-left border-right border-top border-bottom border-primary">
                      <input className="form-control" type="text" />
                    </div>
                    <div className="col-6 border-left border-right border-top border-bottom border-primary">
                      <input className="form-control" type="text" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-3 border-left border-right border-top border-bottom border-primary">
                  <label className="form-label">Upper Bust</label>
                </div>
                <div className="col-6 border-left border-right border-top border-bottom border-primary">
                  <input className="form-control" type="text" />
                </div>
              </div>
              <div className="row">
                <div className="col-3 border-left border-right border-top border-bottom border-primary">
                  <label className="form-label"> Bust</label>
                </div>
                <div className="col-6 border-left border-right border-top border-bottom border-primary">
                  <input className="form-control" type="text" />
                </div>
              </div>
              <div className="row">
                <div className="col-3 border-left border-right border-top border-bottom border-primary">
                  <label className="form-label">Lower Bust</label>
                </div>
                <div className="col-6 border-left border-right border-top border-bottom border-primary">
                  <input className="form-control" type="text" />
                </div>
              </div>
              <div className="row">
                <div className="col-3 border-left border-right border-top border-bottom border-primary">
                  <label className="form-label">Waist / Belly</label>
                </div>
                <div className="col-6 border-left border-right border-top border-bottom border-primary">
                  <div className="row">
                    <div className="col-6 border-left border-right border-top border-bottom border-primary">
                      <input className="form-control" type="text" />
                    </div>
                    <div className="col-6 border-left border-right border-top border-bottom border-primary">
                      <input className="form-control" type="text" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-3 border-left border-right border-top border-bottom border-primary">
                  <label className="form-label">Hip</label>
                </div>
                <div className="col-6 border-left border-right border-top border-bottom border-primary">
                  <input className="form-control" type="text" />
                </div>
              </div>
              <div className="row">
                <div className="col-3 border-left border-right border-top border-bottom border-primary">
                  <label className="form-label">Top Length Front/ back</label>
                </div>
                <div className="col-6 border-left border-right border-top border-bottom border-primary">
                  <div className="row">
                    <div className="col-6 border-left border-right border-top border-bottom border-primary ">
                      <input className="form-control" type="text" />
                    </div>
                    <div className="col-6 border-left border-right border-top border-bottom border-primary">
                      <input className="form-control" type="text" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-3 border-left border-right border-top border-bottom border-primary">
                  <label className="form-label">Arm Hole</label>
                </div>
                <div className="col-6 border-left border-right border-top border-bottom border-primary">
                  <input className="form-control" type="text" />
                </div>
              </div>
              <div className="row">
                <div className="col-3 border-left border-right border-top border-bottom border-primary">
                  <label className="form-label">Sleeve Length</label>
                </div>
                <div className="col-6 border-left border-right border-top border-bottom border-primary">
                  <input className="form-control" type="text" />
                </div>
              </div>
              <div className="row">
                <div className="col-3 border-left border-right border-top border-bottom border-primary">
                  <label className="form-label">Sleeve Mori</label>
                </div>
                <div className="col-6 border-left border-right border-top border-bottom border-primary">
                  <input className="form-control" type="text" />
                </div>
              </div>
              <div className="row">
                <div className="col-3 border-left border-right border-top border-bottom border-primary">
                  <label className="form-label">Biceps/ Elblow</label>
                </div>
                <div className="col-6 border-left border-right border-top border-bottom border-primary">
                  <div className="row">
                    <div className="col-6 border-left border-right border-top border-bottom border-primary">
                      <input className="form-control" type="text" />
                    </div>
                    <div className="col-6 border-left border-right border-top border-bottom border-primary">
                      <input className="form-control" type="text" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-3 border-left border-right border-top border-bottom border-primary">
                  <label className="form-label">Sleeve Mori</label>
                </div>
                <div className="col-6 border-left border-right border-top border-bottom border-primary">
                  <input className="form-control" type="text" />
                </div>
              </div>
              <div className="row">
                <div className="col-3 border-left border-right border-top border-bottom border-primary">
                  <label className="form-label">Front Neek</label>
                </div>
                <div className="col-6 border-left border-right border-top border-bottom border-primary">
                  <input className="form-control" type="text" />
                </div>
              </div>
              <div className="row">
                <div className="col-3 border-left border-right border-top border-bottom border-primary">
                  <label className="form-label">Back Neek</label>
                </div>
                <div className="col-6 border-left border-right border-top border-bottom border-primary">
                  <input className="form-control" type="text" />
                </div>
              </div>
              <div className="row">
                <div className="col-3 border-left border-right border-top border-bottom border-primary">
                  <label className="form-label"> Neek width</label>
                </div>
                <div className="col-6 border-left border-right border-top border-bottom border-primary">
                  <input className="form-control" type="text" />
                </div>
              </div>
              <div className="row">
                <div className="col-3 border-left border-right border-top border-bottom border-primary">
                  <label className="form-label"> Neek Shape</label>
                </div>
                <div className="col-6 border-left border-right border-top border-bottom border-primary">
                  <input className="form-control" type="text" />
                </div>
              </div>
            </div>
            <div className="mainn mt-3">
              <div className="row">
                <div className="col-3 border-left border-right border-top border-bottom border-primary">
                  <label className="form-label">Bottom Style</label>
                </div>
                <div className="col-6 border-left border-right border-top border-bottom border-primary">
                  <input className="form-control" type="text" />
                </div>
              </div>
              <div className="row">
                <div className="col-3 border-left border-right border-top border-bottom border-primary">
                  <label className="form-label">Waist</label>
                </div>
                <div className="col-6 border-left border-right border-top border-bottom border-primary">
                  <input className="form-control" type="text" />
                </div>
              </div>
              <div className="row">
                <div className="col-3 border-left border-right border-top border-bottom border-primary">
                  <label className="form-label">Hip</label>
                </div>
                <div className="col-6 border-left border-right border-top border-bottom border-primary">
                  <input className="form-control" type="text" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-6">
            <img src={fre} alt="free" style={{ width: 540, height: 1200 }} />
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-5 border-left border-right border-top border-bottom border-primary">
            <div className="mainn">
              <div className="row">
                <div className="col-3 border-left border-right border-top border-bottom border-primary">
                  <label className="form-label">Length Front / Back</label>
                </div>
                <div className="col-6 border-left border-right border-top border-bottom border-primary">
                  <div className="row">
                    <div className="col-6 border-left border-right border-top border-bottom border-primary">
                      <input className="form-control" type="text" />
                    </div>
                    <div className="col-6 border-left border-right border-top border-bottom border-primary">
                      <input className="form-control" type="text" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-3 border-left border-right border-top border-bottom border-primary">
                  <label className="form-label">Ghera / Poncha</label>
                </div>
                <div className="col-6 border-left border-right border-top border-bottom border-primary">
                  <div className="row">
                    <div className="col-6 border-left border-right border-top border-bottom border-primary">
                      <input className="form-control" type="text" />
                    </div>
                    <div className="col-6 border-left border-right border-top border-bottom border-primary">
                      <input className="form-control" type="text" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-3 border-left border-right border-top border-bottom border-primary">
                  <label className="form-label">Knee Band End / Ghera</label>
                </div>
                <div className="col-6 border-left border-right border-top border-bottom border-primary">
                  <div className="row">
                    <div className="col-6 border-left border-right border-top border-bottom border-primary">
                      <input className="form-control" type="text" />
                    </div>
                    <div className="col-6 border-left border-right border-top border-bottom border-primary">
                      <input className="form-control" type="text" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-3 border-left border-right border-top border-bottom border-primary">
                  <label className="form-label">Thigh</label>
                </div>
                <div className="col-6 border-left border-right border-top border-bottom border-primary">
                  <input className="form-control" type="text" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-5 border-left border-right border-top border-bottom border-primary">
            <div className="row">
              <div className="col-3 border-left border-right border-top border-bottom border-primary">
                <label className="form-label fs-6">Fabric Details</label>
              </div>
              <div className="col-3 border-left border-right border-top border-bottom border-primary">
                Fabric
              </div>
              <div className="col-3 border-left border-right border-top border-bottom border-primary">
                Colour
              </div>
              <div className="col-3 border-left border-right border-top border-bottom border-primary">
                Average <br /> (Meter)
              </div>
            </div>
            <div className="row">
              <div className="col-3 border-left border-right border-top border-bottom border-primary">
                <label className="form-label fs-6">Top Fabric</label>
              </div>
              <div className="col-3 border-left border-right border-top border-bottom border-primary">
                <input className="form-control mt-1" type="text" />
              </div>
              <div className="col-3 border-left border-right border-top border-bottom border-primary">
                <input className="form-control mt-1" type="text" />
              </div>
              <div className="col-3 border-left border-right border-top border-bottom border-primary">
                <input className="form-control mt-1" type="text" />
              </div>
            </div>
            <div className="row">
              <div className="col-3 border-left border-right border-top border-bottom border-primary">
                <label className="form-label fs-6">Bottom Fabric</label>
              </div>
              <div className="col-3 border-left border-right border-top border-bottom border-primary">
                <input className="form-control mt-1" type="text" />
              </div>
              <div className="col-3 border-left border-right border-top border-bottom border-primary">
                <input className="form-control mt-1" type="text" />
              </div>
              <div className="col-3 border-left border-right border-top border-bottom border-primary">
                <input className="form-control mt-1" type="text" />
              </div>
            </div>
            <div className="row">
              <div className="col-3 border-left border-right border-top border-bottom border-primary">
                <label className="form-label fs-6">Dupatta Fabric</label>
              </div>
              <div className="col-3 border-left border-right border-top border-bottom border-primary">
                <input className="form-control mt-1" type="text" />
              </div>
              <div className="col-3 border-left border-right border-top border-bottom border-primary">
                <input className="form-control mt-1" type="text" />
              </div>
              <div className="col-3 border-left border-right border-top border-bottom border-primary">
                <input className="form-control mt-1" type="text" />
              </div>
            </div>
          </div>
        </div>
        {/* hhh */}
        <div className="row mt-3">
          <div className="col-5">
            <div className="mainn">
              <div className="row ">
                <div className="col-3 border-left border-right border-top border-bottom border-primary">
                  <label className="form-label">Customer Name</label>
                </div>
                <div className="col-6 border-left border-right border-top border-bottom border-primary">
                  <input className="form-control" type="text" />
                </div>
              </div>
              <div className="row">
                <div className="col-3 border-left border-right border-top border-bottom border-primary">
                  <label className="form-label">Contact Details</label>
                </div>
                <div className="col-6 border-left border-right border-top border-bottom border-primary">
                  <input className="form-control" type="text" />
                </div>
              </div>
              <div className="row">
                <div className="col-3 border-left border-right border-top border-bottom border-primary">
                  <label className="form-label">Delivery Date</label>
                </div>
                <div className="col-6 border-left border-right border-top border-bottom border-primary">
                  <input className="form-control" type="text" />
                </div>
              </div>
              <div className="row">
                <div className="col-3 border-left border-right border-top border-bottom border-primary">
                  <label className="form-label">Attendent Signature</label>
                </div>
                <div className="col-6 border-left border-right border-top border-bottom border-primary">
                  <input className="form-control" type="text" />
                </div>
              </div>
              <div className="row">
                <div className="col-3 border-left border-right border-top border-bottom border-primary">
                  <label className="form-label">Order No</label>
                </div>
                <div className="col-6 border-left border-right border-top border-bottom border-primary">
                  <input className="form-control" type="text" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-5">
            <div className="mainn">
              <div className="row ">
                <div className="col-3 border-left border-right border-top border-bottom border-primary">
                  <label className="form-label">Total Amount</label>
                </div>
                <div className="col-6 border-left border-right border-top border-bottom border-primary">
                  <input className="form-control" type="text" />
                </div>
              </div>
              <div className="row">
                <div className="col-3 border-left border-right border-top border-bottom border-primary">
                  <label className="form-label">Advance</label>
                </div>
                <div className="col-6 border-left border-right border-top border-bottom border-primary">
                  <input className="form-control" type="text" />
                </div>
              </div>
              <div className="row">
                <div className="col-3 border-left border-right border-top border-bottom border-primary">
                  <label className="form-label">Balance</label>
                </div>
                <div className="col-6 border-left border-right border-top border-bottom border-primary">
                  <input className="form-control" type="text" />
                </div>
              </div>
              <div className="row">
                <div className="col-3 border-left border-right border-top border-bottom border-primary">
                  <label className="form-label">Customer Signature</label>
                </div>
                <div className="col-6 border-left border-right border-top border-bottom border-primary">
                  <input className="form-control" type="text" />
                </div>
              </div>
              
            </div>
            </div>
        </div>
      </div>
    </>
  );
}
export default Fareenass;
