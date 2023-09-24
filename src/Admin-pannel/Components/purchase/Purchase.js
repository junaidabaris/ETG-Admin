import React from 'react'
import { AiOutlineArrowUp } from 'react-icons/ai'
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import Table from 'react-bootstrap/Table'
function Purchase() {
    const data = [
        { x: 100, y: 200, z: 200 },
        { x: 120, y: 100, z: 260 },
        { x: 170, y: 300, z: 400 },
        { x: 140, y: 250, z: 280 },
        { x: 150, y: 400, z: 500 },
        { x: 110, y: 280, z: 200 },
    ];

    return (
        <div>
            <div className='container' style={{ marginLeft: 60, marginRight: 60 }}>
                <div className='d-flex ' >
                    <div className='bg-white col-md-2 m-0 p-0  border-secondary mr-3' style={{ width: '90', height: 130 }}>
                        <div className=" m-0 p-0 ">
                            <h6 className='fs-5 mt-2 ml-1 text-secondary' style={{ color: '#525252' }}>Purchased</h6>
                            <div className='justify-content-center d-flex'>
                                <h2>$ 14</h2>
                            </div>
                            <div className='ml-1'>
                                <span className='fs-4 text-secondary m-0 p-0 '>$1,760 ARR</span>

                            </div>

                        </div>
                    </div>
                    <div className='bg-white col-md-2 m-0 p-0  border-secondary mr-3' style={{ width: '90', height: 130 }}>
                        <div className=" m-0 p-0 ">
                            <h6 className='fs-5 mt-2 ml-1 text-secondary' style={{ color: '#525252' }}>Orders</h6>
                            <div className='justify-content-center d-flex'>
                                <h2>$146.67</h2>
                            </div>
                            <div className='ml-1'>
                                <span className='fs-4 text-success m-0 p-0 '><AiOutlineArrowUp />%</span>

                            </div>

                        </div>
                    </div>
                    <div className='bg-white col-md-2 m-0 p-0  border-secondary mr-3' style={{ width: '90', height: 130 }}>
                        <div className=" m-0 p-0 ">
                            <h6 className='fs-5 mt-2 ml-1 text-secondary' style={{ color: '#525252' }}>Average Order</h6>
                            <div className='justify-content-center d-flex'>
                                <h2>2</h2>
                            </div>
                            <div className='ml-1'>
                                <span className='fs-6 text-secondary m-0 p-0 '>$43 / subscriptions</span>

                            </div>

                        </div>
                    </div>
                    <div className='bg-white col-md-2 m-0 p-0  border-secondary mr-3' style={{ width: '90', height: 130 }}>
                        <div className=" m-0 p-0 ">
                            <h6 className='fs-6 mt-2 ml-1 text-secondary' style={{ color: '#525252' }}>Lead Time to Receive</h6>
                            <div className='justify-content-center d-flex'>
                                <h2>2</h2>
                            </div>
                            <div className='ml-1'>
                                <span className='fs-6 text-secondary m-0 p-0 '>$43 / subscriptions</span>

                            </div>

                        </div>
                    </div>
                </div>
                <div className='row ' style={{ marginTop: 30, marginRight: 60 }} >
                    <div className='col-md-12 '>
                        <h5 className='m-0 p-0' style={{ color: '#006666' }}>Amount Purchased</h5>
                        <hr className=' border-primary m-auto pt-2' />

                        <ScatterChart
                            margin={{
                                top: 20,
                                right: 20,
                                bottom: 20,
                                left: 20,
                            }}
                            width={1000}
                            height={300}
                        >
                            <CartesianGrid />
                            <XAxis type="number" dataKey="x" />
                            <YAxis type="number" dataKey="y" />
                            <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                            <Scatter name="A school" data={data} fill="#8884d8" />
                        </ScatterChart>

                    </div>

                </div>


                <div className='row' style={{ marginTop: 30, marginRight: 60 }}>
                    <div className='col-md-8'>
                        <h4 className='m-0 p-0' style={{ color: '#006666' }}>Top RFQs</h4>
                        <hr className=' border-primary m-auto mt-2' />
                        <Table striped className='mt-3 border-light m-0 p-0'>
                            <thead className='m-0 p-0' >
                                <tr>
                                    <th>RFQ</th>
                                    <th>Opened</th>
                                    <th>Buyer</th>
                                    <th>Vendor</th>
                                    <th>Total Untaxed</th>


                                </tr>
                            </thead>
                            <tbody>
                                <tr >
                                    <td>Projector</td>
                                    <td>21</td>

                                    <td>492</td>
                                    <td>492</td>
                                    <td>492</td>
                                </tr>
                                <tr >
                                    <td></td>
                                    <td></td>

                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr >
                                    <td></td>
                                    <td></td>
                                    <td></td>

                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr >
                                    <td></td>
                                    <td></td>

                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr >
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>

                                    <td></td>
                                </tr>
                                <tr >
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>

                                    <td></td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                    <div className='col-md-4'>
                        <h4 className='m-0 p-0' style={{ color: '#006666' }}>Top Countries</h4>
                        <hr className=' border-primary m-auto mt-2' />
                        <Table striped className='mt-3 border-light m-0 p-0'>
                            <thead className='m-0 p-0' >
                                <tr className='m-0 p-0'>
                                    <th >Country</th>
                                    <th>Orders</th>


                                    <th>Amount</th>
                                </tr>
                            </thead>
                            <tbody>

                                <tr >

                                    <td></td>

                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr >

                                    <td></td>

                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr >

                                    <td></td>

                                    <td></td>
                                    <td></td>

                                </tr>
                                <tr >

                                    <td></td>
                                    <td></td>

                                    <td></td>
                                </tr>
                                <tr >

                                    <td></td>
                                    <td></td>

                                    <td></td>
                                </tr>
                                <tr >

                                    <td></td>
                                    <td></td>

                                    <td></td>
                                </tr>
                                <tr >

                                    <td></td>
                                    <td></td>

                                    <td></td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                </div>
                <div className='row' style={{ marginTop: 30, marginRight: 60 }}>
                    <div className='col-md-8'>
                        <h4 className='m-0 p-0' style={{ color: '#006666' }}>Top Orders</h4>
                        <hr className=' border-primary m-auto mt-2' />
                        <Table striped className='mt-3 border-light m-0 p-0'>
                            <thead className='m-0 p-0' >
                                <tr>
                                    <th>Order</th>
                                    <th>Ordered</th>

                                    <th>Buyer</th>
                                    <th>Vender</th>
                                    <th>Total Untaxed</th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr >
                                    <td>Projector</td>
                                    <td>21</td>


                                    <td>492</td>
                                    <td>492</td>
                                    <td>492</td>
                                </tr>
                                <tr >
                                    <td></td>

                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr >
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>


                                </tr>
                                <tr >
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>


                                    <td></td>
                                </tr>
                                <tr >

                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>

                                    <td></td>
                                </tr>
                                <tr >

                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>

                                    <td></td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                    <div className='col-md-4'>
                        <h4 className='m-0 p-0' style={{ color: '#006666' }}>Top Vendors</h4>
                        <hr className=' border-primary m-auto mt-2' />
                        <Table striped className='mt-3 border-light m-0 p-0'>
                            <thead className='m-0 p-0' >
                                <tr>
                                    <th>City</th>
                                    <th>Leads</th>

                                    <th>Revenue</th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr >
                                    <td>Projector</td>
                                    <td>21</td>


                                    <td>492</td>
                                </tr>
                                <tr >
                                    <td></td>

                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr >
                                    <td></td>
                                    <td></td>
                                    <td></td>


                                </tr>
                                <tr >
                                    <td></td>
                                    <td></td>


                                    <td></td>
                                </tr>
                                <tr >

                                    <td></td>
                                    <td></td>

                                    <td></td>
                                </tr>
                                <tr >

                                    <td></td>
                                    <td></td>

                                    <td></td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>

                </div>
                <div className='row' style={{ marginTop: 30, marginRight: 60 }}>
                    <div className='col-md-8'>
                        <h4 className='m-0 p-0' style={{ color: '#006666' }}>Top Receipts</h4>
                        <hr className=' border-primary m-auto mt-2' />
                        <Table striped className='mt-3 border-light m-0 p-0'>
                            <thead className='m-0 p-0' >
                                <tr>
                                    <th>Transfer</th>
                                    <th>Ordered</th>

                                    <th>Scheduled</th>
                                    <th>Responsible</th>
                                    <th>Vendor</th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr >
                                    <td>Projector</td>
                                    <td>21</td>


                                    <td>492</td>
                                    <td>492</td>
                                    <td>492</td>
                                </tr>
                                <tr >
                                    <td></td>

                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr >
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>


                                </tr>
                                <tr >
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>


                                    <td></td>
                                </tr>
                                <tr >

                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>

                                    <td></td>
                                </tr>
                                <tr >

                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>

                                    <td></td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                    <div className='col-md-4'>
                        <h4 className='m-0 p-0' style={{ color: '#006666' }}>Top Products Categories</h4>
                        <hr className=' border-primary m-auto mt-2' />
                        <Table striped className='mt-3 border-light m-0 p-0'>
                            <thead className='m-0 p-0' >
                                <tr>
                                    <th>Category</th>
                                    <th>Qty Ordered</th>

                                    <th>Amount</th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr >
                                    <td>Projector</td>
                                    <td>21</td>


                                    <td>492</td>
                                </tr>
                                <tr >
                                    <td></td>

                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr >
                                    <td></td>
                                    <td></td>
                                    <td></td>


                                </tr>
                                <tr >
                                    <td></td>
                                    <td></td>


                                    <td></td>
                                </tr>
                                <tr >

                                    <td></td>
                                    <td></td>

                                    <td></td>
                                </tr>
                                <tr >

                                    <td></td>
                                    <td></td>

                                    <td></td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>

                </div>
                <div className='row' style={{ marginTop: 30, marginRight: 60 }}>
                    <div className='col-md-8'>
                        <h4 className='m-0 p-0' style={{ color: '#006666' }}>Top Buyer</h4>
                        <hr className=' border-primary m-auto mt-2' />
                        <Table striped className='mt-3 border-light m-0 p-0'>
                            <thead className='m-0 p-0' >
                                <tr>
                                    <th>Buyer</th>
                                    <th>Orders</th>

                                    <th>Qty Ordered</th>
                                    <th>Amount</th>


                                </tr>
                            </thead>
                            <tbody>
                                <tr >
                                    <td>Projector</td>
                                    <td>21</td>
                                    <td>21</td>



                                    <td>492</td>
                                </tr>
                                <tr >
                                    <td></td>

                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr >
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>


                                </tr>
                                <tr >
                                    <td></td>
                                    <td></td>
                                    <td></td>


                                    <td></td>
                                </tr>
                                <tr >

                                    <td></td>
                                    <td></td>
                                    <td></td>

                                    <td></td>
                                </tr>
                                <tr >

                                    <td></td>
                                    <td></td>
                                    <td></td>

                                    <td></td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                    <div className='col-md-4'>
                        <h4 className='m-0 p-0' style={{ color: '#006666' }}>Top Products</h4>
                        <hr className=' border-primary m-auto mt-2' />
                        <Table striped className='mt-3 border-light m-0 p-0'>
                            <thead className='m-0 p-0' >
                                <tr>
                                    <th>Product</th>
                                    <th>Qty Ordered</th>

                                    <th>Amount</th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr >
                                    <td>Projector</td>
                                    <td>21</td>


                                    <td>492</td>
                                </tr>
                                <tr >
                                    <td></td>

                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr >
                                    <td></td>
                                    <td></td>
                                    <td></td>


                                </tr>
                                <tr >
                                    <td></td>
                                    <td></td>


                                    <td></td>
                                </tr>
                                <tr >

                                    <td></td>
                                    <td></td>

                                    <td></td>
                                </tr>
                                <tr >

                                    <td></td>
                                    <td></td>

                                    <td></td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Purchase
