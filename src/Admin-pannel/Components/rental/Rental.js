import React from 'react'
import { AiOutlineArrowUp } from 'react-icons/ai'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Table from 'react-bootstrap/Table'
function Rental() {
    const data = [
        {
            name: '1 Sep 2023',
            uv: 3,

        },
        {
            name: '12 Sep 2023',
            uv: 3,

        },
        {
            name: '13 Sep 2023',
            uv: 3,

        },
        {
            name: '14 Sept 2023',
            uv: 3,

        },
        {
            name: 'September 2023',
            uv: 6,

        },
        {
            name: 'September 2023',
            uv: 3,

        },

    ];
    return (
        <>
            <div className='container ' style={{ marginLeft: 60, marginRight: 60 }}>
                <div className='d-flex ' >
                    <div className='bg-white col-md-3 m-0 p-0  border-secondary mr-3' style={{ width: '90', height: 130 }}>
                        <div className=" m-0 p-0 ">
                            <h6 className='fs-5 mt-2 ml-1 ' style={{ color: '#525252' }}>Quotations</h6>
                            <div className='justify-content-center d-flex'>
                                <h2>0</h2>
                            </div>
                            <div className='ml-1'>
                                <span className='fs-4 text-success m-0 p-0 '><AiOutlineArrowUp />∞%</span>
                                <span className='fs-5 m-0 p-0 '>since last period</span>
                            </div>

                        </div>
                    </div>
                    <div className='bg-white col-md-3 m-0 p-0  border-secondary mr-3' style={{ width: '90', height: 130 }}>
                        <div className=" m-0 p-0 ">
                            <h6 className='fs-5 mt-2 ml-1 ' style={{ color: '#525252' }}>Rentals</h6>
                            <div className='justify-content-center d-flex'>
                                <h3>7</h3>
                            </div>
                            <div className='ml-1'>
                                <span className='fs-4 text-success m-0 p-0 '><AiOutlineArrowUp /> ∞%</span>
                                <span className='fs-5 m-0 p-0 '>since last period</span>
                            </div>

                        </div>
                    </div>
                    <div className='bg-white col-md-3 m-0 p-0  border-secondary mr-3' style={{ width: '90', height: 130 }}>
                        <div className=" m-0 p-0 ">
                            <h6 className='fs-5 mt-2 ml-1 ' style={{ color: '#525252' }}>Revenue</h6>
                            <div className='justify-content-center d-flex'>
                                <h3>429</h3>
                            </div>
                            <div className='ml-1'>
                                <span className='fs-4 text-success m-0 p-0 '><AiOutlineArrowUp /> ∞%</span>
                                <span className='fs-5 m-0 p-0 '>since last period</span>
                            </div>

                        </div>
                    </div>
                </div>
                <div className='row ' style={{ marginTop: 30, marginRight: 60 }} >
                    <div className='col-md-12 '>
                        <h5 className='m-0 p-0' style={{ color: '#006666' }}>Daily Rentals</h5>
                        <hr className=' border-primary m-auto pt-2' />
                        <LineChart width={1000} height={250} data={data}
                            margin={{ top: 5, right: 30, left: 20, bottom: 5 }} style={{ marginTop: 20 }}>
                            <CartesianGrid strokeDasharray="3 3" fillOpacity={0.6} />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />

                            <Line type="monotone" dataKey="uv" stroke="#0033cc" strokeWidth={4} />
                        </LineChart>
                    </div>
                </div>

                <div className='row' style={{ marginTop: 30, marginRight: 60 }}>
                    <div className='col-md-6'>
                        <h4 className='m-0 p-0' style={{ color: '#006666' }}>Top Product Categories</h4>
                        <hr className=' border-primary m-auto mt-2' />
                        <Table striped className='mt-3 border-light m-0 p-0'>
                            <thead className='m-0 p-0' >
                                <tr className='m-0 p-0'>
                                    <th >Category</th>
                                    <th>Ordered</th>

                                    <th>Revenue</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr >
                                    <td>All rental</td>
                                    <td>21</td>

                                    <td>429</td>
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
                    <div className='col-md-6'>
                        <h4 className='m-0 p-0' style={{ color: '#006666' }}>Top Products</h4>
                        <hr className=' border-primary m-auto mt-2' />
                        <Table striped className='mt-3 border-light m-0 p-0'>
                            <thead className='m-0 p-0' >
                                <tr>
                                    <th>Product</th>
                                    <th>Ordered</th>
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
                    <div className='col-md-6'>
                        <h4 className='m-0 p-0' style={{ color: '#006666' }}>Top Salespeople</h4>
                        <hr className=' border-primary m-auto mt-2' />
                        <Table striped className='mt-3 border-light m-0 p-0'>
                            <thead className='m-0 p-0' >
                                <tr className='m-0 p-0'>
                                    <th >Salesperson</th>
                                    <th>Ordered</th>

                                    <th>Revenue</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr >
                                    <td>Admin</td>
                                    <td>21</td>

                                    <td>121</td>
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
                    <div className='col-md-6'>
                        <h4 className='m-0 p-0' style={{ color: '#006666' }}>Top Customers</h4>
                        <hr className=' border-primary m-auto mt-2' />
                        <Table striped className='mt-3 border-light m-0 p-0'>
                            <thead className='m-0 p-0' >
                                <tr>
                                    <th>Point of Sale</th>
                                    <th>Orders</th>
                                    <th>Revenue</th>

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
            </div>
        </>
    )
}

export default Rental
