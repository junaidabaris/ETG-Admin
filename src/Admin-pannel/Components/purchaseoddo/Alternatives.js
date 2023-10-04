import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineCopy } from "react-icons/ai"
function Alternatives(){
    return(
        <>
        <div className="container">
            <div className="row">
                <div className="col-7">
                    <p>Create a call for tender by adding alternative request for quotations to different vendors. Make your choice by selecting the best combination of lead time, OTD and/or total amount. By comparing product lines you can also decide to order some products from one vendor and others from another vendor.</p>
                </div>
                <div className="col-3">
                    <Link to={".../.../"}> <AiOutlineCopy/>Create  Alternatives</Link>
                </div>
            </div>
            <div className="row">
                <div className="table">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>
                                    Vendor
                                
                                </th>
                                <th>
                                    OTD Reference
                                
                                </th>
                                <th>Expected Arrival</th>
                                <th>Total Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <Link to={".../.../"}>Link To Existing RfQ</Link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        </>
    )
}
export default Alternatives