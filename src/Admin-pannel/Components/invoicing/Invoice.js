import React from "react";
import { AiOutlineArrowUp } from "react-icons/ai";

import {
    ScatterChart,
    Scatter,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
} from "recharts";
import Table from "react-bootstrap/Table";
function Invoicing() {
    const data = [
        { x: 100, y: 200, z: 200 },
        { x: 120, y: 100, z: 260 },
        { x: 170, y: 300, z: 400 },
        { x: 140, y: 250, z: 280 },
        { x: 150, y: 400, z: 500 },
        { x: 110, y: 280, z: 200 },
    ];
    return (
        <>
            <div className="container" style={{ marginLeft: 60, marginRight: 60 }}>
                <div className="d-flex ">
                    <div
                        className="bg-white col-md-2 m-0 p-0  border-secondary mr-3"
                        style={{ width: "90", height: 130 }}>
                        <div className=" m-0 p-0 ">
                            <h6
                                className="fs-5 mt-2 ml-1 text-secondary"
                                style={{ color: "#525252" }}>
                                Invoiced
                            </h6>
                            <div className="justify-content-center d-flex">
                                <h2>125k</h2>
                            </div>
                            <div className="ml-1">
                                <span className="fs-4 text-secondary m-0 p-0 ">
                                    $1,760 Unpaid
                                </span>
                            </div>
                        </div>
                    </div>
                    <div
                        className="bg-white col-md-2 m-0 p-0  border-secondary mr-3"
                        style={{ width: "90", height: 130 }}>
                        <div className=" m-0 p-0 ">
                            <h6
                                className="fs-5 mt-2 ml-1 text-secondary"
                                style={{ color: "#525252" }}>
                                Average Invoice
                            </h6>
                            <div className="justify-content-center d-flex">
                                <h2>$146.67</h2>
                            </div>
                            <div className="ml-1">
                                <span className="fs-4 text-success m-0 p-0 ">
                                    <AiOutlineArrowUp />%
                                </span>
                            </div>
                        </div>
                    </div>
                    <div
                        className="bg-white col-md-2 m-0 p-0  border-secondary mr-3"
                        style={{ width: "90", height: 130 }}>
                        <div className=" m-0 p-0 ">
                            <h6
                                className="fs-5 mt-2 ml-1 text-secondary"
                                style={{ color: "#525252" }}>
                                DSO
                            </h6>
                            <div className="justify-content-center d-flex">
                                <h2>420 DAYS</h2>
                            </div>
                            <div className="ml-1">
                                <span className="fs-6 text-secondary m-0 p-0 ">
                                    in current year
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row " style={{ marginTop: 30, marginRight: 60 }}>
                    <div className="col-md-12 ">
                        <h5 className="m-0 p-0" style={{ color: "#006666" }}>
                            Invoiced by Month
                        </h5>
                        <hr className=" border-primary m-auto pt-2" />
                        <ScatterChart
                            width={1000}
                            height={300}
                            margin={{
                                top: 20,
                                right: 20,
                                bottom: 20,
                                left: 20,
                            }}>
                            <CartesianGrid />
                            {/* <XAxis type="number" dataKey="x" name="stature" unit="cm" /> */}
                            <YAxis type="number" dataKey="y" />
                            <Tooltip cursor={{ strokeDasharray: "3 3" }} />
                            <Scatter name="A school" data={data} fill="#8884d8" />
                        </ScatterChart>
                    </div>
                </div>

                <div className="row" style={{ marginTop: 30, marginRight: 60 }}>
                    <div className="col-md-12">
                        <h4 className="m-0 p-0" style={{ color: "#006666" }}>
                            Top Invoices
                        </h4>
                        <hr className=" border-primary m-auto mt-2" />
                        <Table striped className="mt-3 border-light m-0 p-0">
                            <thead className="m-0 p-0">
                                <tr>
                                    <th>Reference</th>
                                    <th>Salesperson</th>
                                    <th>Status</th>
                                    <th>Customer</th>
                                    <th>Date</th>
                                    <th>Amount</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Projector</td>
                                    <td>21</td>

                                    <td>492</td>
                                    <td>492</td>
                                    <td>492</td>
                                    <td>492</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>

                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>

                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>

                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>

                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>

                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                </div>
                <div className="row" style={{ marginTop: 30, marginRight: 60 }}>
                    <div className="col-md-6">
                        <h4 className="m-0 p-0" style={{ color: "#006666" }}>
                            Top Countries
                        </h4>
                        <hr className=" border-primary m-auto mt-2" />
                        <Table striped className="mt-3 border-light m-0 p-0">
                            <thead className="m-0 p-0">
                                <tr>
                                    <th>Country</th>
                                    <th>Amount</th>

                                    <th>Ratio</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Projector</td>
                                    <td>21</td>

                                    <td>492</td>
                                </tr>
                                <tr>
                                    <td></td>

                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>

                                    <td></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>

                                    <td></td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                    <div className="col-md-6">
                        <h4 className="m-0 p-0" style={{ color: "#006666" }}>
                            Top Categories
                        </h4>
                        <hr className=" border-primary m-auto mt-2" />
                        <Table striped className="mt-3 border-light m-0 p-0">
                            <thead className="m-0 p-0">
                                <tr>
                                    <th> Top categories</th>
                                    <th>Amount</th>

                                    <th>Ratio</th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Projector</td>
                                    <td>21</td>
                                    <td>21</td>

                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>

                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>

                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>

                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>

                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>

                                </tr>
                            </tbody>
                        </Table>
                    </div>
                </div>
                <div className="row" style={{ marginTop: 30, marginRight: 60 }}>
                    <div className="col-md-6">
                        <h4 className="m-0 p-0" style={{ color: "#006666" }}>
                            Top Products
                        </h4>
                        <hr className=" border-primary m-auto mt-2" />
                        <Table striped className="mt-3 border-light m-0 p-0">
                            <thead className="m-0 p-0">
                                <tr>
                                    <th>Product</th>
                                    <th>Amount</th>

                                    <th>Ratio</th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Projector</td>
                                    <td>21</td>
                                    <td>21</td>

                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>

                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>

                                </tr>
                                <tr>
                                    <td></td>

                                    <td></td>
                                    <td></td>

                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>

                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>

                                    <td></td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                    <div className="col-md-6">
                        <h4 className="m-0 p-0" style={{ color: "#006666" }}>
                            Top Salespeople
                        </h4>
                        <hr className=" border-primary m-auto mt-2" />
                        <Table striped className="mt-3 border-light m-0 p-0">
                            <thead className="m-0 p-0">
                                <tr>
                                    <th>Salesperson</th>
                                    <th>Amount</th>

                                    <th>Ratio</th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Projector</td>
                                    <td>21</td>
                                    <td>21</td>

                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>

                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>

                                </tr>
                                <tr>
                                    <td></td>

                                    <td></td>
                                    <td></td>

                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>

                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>

                                    <td></td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                </div>
            </div>{" "}
        </>
    );
}

export default Invoicing