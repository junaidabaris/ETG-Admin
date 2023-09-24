import React from 'react'
import { AiOutlineArrowUp } from 'react-icons/ai'

import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, } from 'recharts';
import Table from 'react-bootstrap/Table';
function InventoryFlow() {
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
        <div>
            <div className='container' style={{ marginLeft: 60, marginRight: 60 }}>
                <div className='d-flex ' >
                    <div className='bg-white col-md-3 m-0 p-0  border-secondary mr-3' style={{ width: '90', height: 130 }}>
                        <div className=" m-0 p-0 ">
                            <h6 className='fs-5 mt-2 ml-1 text-secondary' style={{ color: '#525252' }}>Average Cycle Time</h6>
                            <div className='justify-content-center d-flex'>
                                <h2>6 days</h2>
                            </div>
                            <div className='ml-1'>
                                <span className='fs-4 text-secondary m-0 p-0 '>0 last period</span>

                            </div>

                        </div>
                    </div>
                    <div className='bg-white col-md-3 m-0 p-0  border-secondary mr-3' style={{ width: '90', height: 130 }}>
                        <div className=" m-0 p-0 ">
                            <h6 className='fs-5 mt-2 ml-1 text-secondary' style={{ color: '#525252' }}>Average Delay</h6>
                            <div className='justify-content-center d-flex'>
                                <h2>8 days</h2>
                            </div>
                            <div className='ml-1'>
                                <span className='fs-4 text-success m-0 p-0 '>last period</span>

                            </div>

                        </div>
                    </div>
                    <div className='bg-white col-md-3 m-0 p-0  border-secondary mr-3' style={{ width: '90', height: 130 }}>
                        <div className=" m-0 p-0 ">
                            <h6 className='fs-5 mt-2 ml-1 text-secondary' style={{ color: '#525252' }}>Moved Quantity</h6>
                            <div className='justify-content-center d-flex'>
                                <h2>2</h2>
                            </div>
                            <div className='ml-1'>
                                <span className='fs-6 text-secondary m-0 p-0 '>since last period</span>

                            </div>

                        </div>
                    </div>
                </div>
                <div className='row ' style={{ marginTop: 30, marginRight: 60 }} >
                    <div className='col-md-12 '>
                        <h5 className='m-0 p-0' style={{ color: '#006666' }}>Weakly Stock Moves</h5>
                        <hr className=' border-primary m-auto pt-2' />
                        <ResponsiveContainer height={250} width="100%">
                            <LineChart data={data} margin={{ right: 25, top: 10 }}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Line type="line" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} strokeWidth={5} />
                                <Line type="line" dataKey="uv" stroke="#82ca9d" strokeWidth={5} />
                            </LineChart>
                        </ResponsiveContainer>

                    </div>

                </div>



                <div className='row' style={{ marginTop: 30, marginRight: 60 }}>
                    <div className='col-md-6'>
                        <h4 className='m-0 p-0' style={{ color: '#006666' }}>Top Products</h4>
                        <hr className=' border-primary m-auto mt-2' />
                        <Table striped className='mt-3 border-light m-0 p-0'>
                            <thead className='m-0 p-0' >
                                <tr className='m-0 p-0'>
                                    <th >Product</th>
                                    <th>Moves</th>


                                    <th>Quantity</th>
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
                    <div className='col-md-6'>
                        <h4 className='m-0 p-0' style={{ color: '#006666' }}>Top Partners</h4>
                        <hr className=' border-primary m-auto mt-2' />
                        <Table striped className='mt-3 border-light m-0 p-0'>
                            <thead className='m-0 p-0' >
                                <tr>
                                    <th>Subscriptions</th>
                                    <th>Value</th>

                                    <th>MRR</th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr >

                                    <td>21</td>

                                    <td>492</td>
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
                    <div className='col-md-6'>
                        <h4 className='m-0 p-0' style={{ color: '#006666' }}>Top Warehouses</h4>
                        <hr className=' border-primary m-auto mt-2' />
                        <Table striped className='mt-3 border-light m-0 p-0'>
                            <thead className='m-0 p-0' >
                                <tr className='m-0 p-0'>

                                    <th>Warehouse</th>
                                    <th >Moves</th>

                                    <th>Quantity</th>
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
                    <div className='col-md-6'>
                        <h4 className='m-0 p-0' style={{ color: '#006666' }}>Top Locations</h4>
                        <hr className=' border-primary m-auto mt-2' />
                        <Table striped className='mt-3 border-light m-0 p-0'>
                            <thead className='m-0 p-0' >
                                <tr>
                                    <th>Location</th>
                                    <th>Moves</th>

                                    <th>Quantity</th>

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

export default InventoryFlow
