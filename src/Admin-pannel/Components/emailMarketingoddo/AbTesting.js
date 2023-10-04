import { Input } from "@mui/material";
import React from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
function Abtesting() {
    const [State3, setState3] = useState(false);
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="row">
              <div className="col-2">
                <div className="">
                  <label className="form-label">Allow A/B Testing</label>
                </div>
              </div>
              <div className="col-2">
                <Input href="#"
                  onClick={()=>{setState3(!State3)}}
                //   className="form-check-input"
                  type="checkbox"
                  defaultValue=""
                  id="flexCheckDefault"
                />
              </div>

              {State3 && (
                        <>
                        <div className="col-6">
                <div className="purch d-flex">
                    on
                    <input className="form-control purch" style={{border:"none"}}/>
                    %
                </div>
                <div className="row">
                        <div className="col-6">
                        <label className="form-label">
                Winner Selection
                </label>
                        </div>
                        <div className="col-6 purch">
                        <input className="form-control purch" style={{border:"none"}}/>
                        </div>
                </div>
                <div className="row">
                        <div className="col-6">
                        <label className="form-label">
                        Send Final On
                </label>
                        </div>
                        <div className="col-6 purch">
                        <input className="form-control purch" type="date" style={{border:"none"}}/>
                        </div>
                </div>
               

              </div>
              <div className="col-6">
                <p>
                    
                </p>
              </div>

                        </>
                    )}
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Abtesting;
