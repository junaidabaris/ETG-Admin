import React from 'react'
import { AiOutlineArrowUp } from 'react-icons/ai'

import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from 'recharts';
import Table from 'react-bootstrap/Table'
function Inventory() {
    const data01 = [
        { name: 'Group A', value: 400 },
        { name: 'Group B', value: 300 },
        { name: 'Group C', value: 300 },
        { name: 'Group D', value: 200 },
        { name: 'Group E', value: 278 },
        { name: 'Group F', value: 189 },
    ];

    return (
        <div>
            <div className='container' style={{ marginLeft: 60, marginRight: 60 }}>
                <div className='d-flex ' >
                    <div className='bg-white col-md-3 m-0 p-0  border-secondary mr-3' style={{ width: '90', height: 130 }}>
                        <div className=" m-0 p-0 ">
                            <h6 className='fs-5 mt-2 ml-1 text-secondary' style={{ color: '#525252' }}>Inventory Value</h6>
                            <div className='justify-content-center d-flex'>
                                <h1>$ 270</h1>
                            </div>


                        </div>
                    </div>

                </div>
                <div className='row ' style={{ marginTop: 30, marginRight: 60 }} >
                    <div className='col-md-12 '>
                        <h5 className='m-0 p-0' style={{ color: '#006666' }}>Stock Quantity by location</h5>
                        <hr className=' border-primary m-auto pt-2' />
                        <PieChart width={400} height={400}>
                            <Pie
                                dataKey="value"
                                isAnimationActive={false}
                                data={data01}
                                cx="50%"
                                cy="50%"
                                outerRadius={80}
                                fill="#8884d8"
                                label
                            />
                            <Pie dataKey="value" data={data01} cx={500} cy={200} innerRadius={40} outerRadius={80} fill="#82ca9d" />

                            <Tooltip />
                        </PieChart>


                    </div>

                </div>

                <div className='row' style={{ marginTop: 30, marginRight: 60 }}>
                    <div className='col-md-6'>
                        <h4 className="m-0 p-0" style={{ color: "#006666" }}>
                            Top Location
                        </h4>
                        <hr className=" border-primary m-auto mt-2" />
                        <Table striped className='mt-3 border-light m-0 p-0'>
                            <thead className='m-0 p-0' >
                                <tr>
                                    <th>Location</th>
                                    <th>Reserved</th>
                                    <th>On Hand</th>



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
                            Top Products
                        </h4>
                        <hr className=" border-primary m-auto mt-2" />
                        <Table striped className='mt-3 border-light m-0 p-0'>
                            <thead className='m-0 p-0' >
                                <tr className='m-0 p-0'>
                                    <th > Product</th>
                                    <th>Reserved</th>


                                    <th>On Hand</th>

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
                            Top Lots / Serial Numbers
                        </h4>
                        <hr className=" border-primary m-auto mt-2" />
                        <Table striped className='mt-3 border-light m-0 p-0'>
                            <thead className='m-0 p-0' >
                                <tr>
                                    <th>Lot /SN</th>
                                    <th>Reserved</th>

                                    <th>On Hand</th>


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

export default Inventory
