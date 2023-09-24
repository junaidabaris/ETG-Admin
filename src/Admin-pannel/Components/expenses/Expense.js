import React from 'react'
import { AiOutlineArrowUp } from 'react-icons/ai'

import { BarChart, Area, XAxis, Bar, AreaChart, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import Table from 'react-bootstrap/Table'
function Expense() {
    const data = [
        {
            name: 'Page A',
            uv: 4000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: 'Page B',
            uv: 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: 'Page C',
            uv: 2000,
            pv: 9800,
            amt: 2290,
        },
        {
            name: 'Page D',
            uv: 2780,
            pv: 3908,
            amt: 2000,
        },
        {
            name: 'Page E',
            uv: 1890,
            pv: 4800,
            amt: 2181,
        },
        {
            name: 'Page F',
            uv: 2390,
            pv: 3800,
            amt: 2500,
        },
        {
            name: 'Page G',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
    ];
    return (
        <>
            <div className='container' style={{ marginLeft: 60, marginRight: 60 }}>
                <div className='d-flex ' >
                    <div className='bg-white col-md-2 m-0 p-0  border-secondary mr-3' style={{ width: '90', height: 130 }}>
                        <div className=" m-0 p-0 ">
                            <h6 className='fs-5 mt-2 ml-1 text-secondary' style={{ color: '#525252' }}>Expenses</h6>
                            <div className='justify-content-center d-flex'>
                                <h1>$ 14</h1>
                            </div>


                        </div>
                    </div>
                    <div className='bg-white col-md-2 m-0 p-0  border-secondary mr-3' style={{ width: '90', height: 130 }}>
                        <div className=" m-0 p-0 ">
                            <h6 className='fs-5 mt-2 ml-1 text-secondary' style={{ color: '#525252' }}>To Report</h6>
                            <div className='justify-content-center d-flex'>
                                <h1>$146.67</h1>
                            </div>


                        </div>
                    </div>
                    <div className='bg-white col-md-2 m-0 p-0  border-secondary mr-3' style={{ width: '90', height: 130 }}>
                        <div className=" m-0 p-0 ">
                            <h6 className='fs-5 mt-2 ml-1 text-secondary' style={{ color: '#525252' }}>To Validate</h6>
                            <div className='justify-content-center d-flex'>
                                <h1>2</h1>
                            </div>


                        </div>
                    </div>
                    <div className='bg-white col-md-2 m-0 p-0  border-secondary mr-3' style={{ width: '90', height: 130 }}>
                        <div className=" m-0 p-0 ">
                            <h6 className='fs-5 mt-2 ml-1 text-secondary' style={{ color: '#525252' }}>To Reimburse</h6>
                            <div className='justify-content-center d-flex'>
                                <h2>2</h2>
                            </div>


                        </div>
                    </div>



                </div>
                <div className='row ' style={{ marginTop: 30, marginRight: 60 }} >
                    <div className='col-md-12 '>
                        <h5 className='m-0 p-0' style={{ color: '#006666' }}>Expenses Analysis</h5>
                        <hr className=' border-primary m-auto pt-2' />
                        <BarChart
                            width={800}
                            height={300}
                            data={data}
                            margin={{
                                top: 20,
                                right: 30,
                                left: 20,
                                bottom: 5,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="pv" stackId="a" fill="#8884d8" />
                            <Bar dataKey="uv" stackId="a" fill="#82ca9d" />
                        </BarChart>


                    </div>

                </div>

                <div className='row' style={{ marginTop: 30, marginRight: 60 }}>
                    <div className='col-md-6'>
                        <h4 className="m-0 p-0" style={{ color: "#006666" }}>
                            Top Expenses
                        </h4>
                        <hr className=" border-primary m-auto mt-2" />
                        <Table striped className='mt-3 border-light m-0 p-0'>
                            <thead className='m-0 p-0' >
                                <tr>
                                    <th>Expense</th>
                                    <th>Employee</th>
                                    <th>Total</th>



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
                    <div className='col-md-6'>
                        <h4 className="m-0 p-0" style={{ color: "#006666" }}>
                            Top Categories
                        </h4>
                        <hr className=" border-primary m-auto mt-2" />
                        <Table striped className='mt-3 border-light m-0 p-0'>
                            <thead className='m-0 p-0' >
                                <tr className='m-0 p-0'>
                                    <th > Category</th>
                                    <th>Expenses</th>


                                    <th>Total</th>

                                </tr>
                            </thead>
                            <tbody>

                                <tr >

                                    <td></td>
                                    <th></th>

                                    <td></td>

                                </tr>
                                <tr >

                                    <td></td>
                                    <th></th>

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
                        <h4 className="m-0 p-0" style={{ color: "#006666" }}>
                            Top Reinvoiced Orders
                        </h4>
                        <hr className=" border-primary m-auto mt-2" />
                        <Table striped className='mt-3 border-light m-0 p-0'>
                            <thead className='m-0 p-0' >
                                <tr>
                                    <th>Order</th>
                                    <th>Expenses</th>

                                    <th>Total</th>


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
                    <div className='col-md-6'>
                        <h4 className="m-0 p-0" style={{ color: "#006666" }}>
                            Top Employee
                        </h4>
                        <hr className=" border-primary m-auto mt-2" />
                        <Table striped className='mt-3 border-light m-0 p-0'>
                            <thead className='m-0 p-0' >
                                <tr>
                                    <th>Employee</th>
                                    <th>Expenses</th>

                                    <th>Total</th>


                                </tr>
                            </thead>
                            <tbody>
                                <tr >
                                    <td>Projector</td>
                                    <td>21</td>
                                    <td>21</td>

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

export default Expense
