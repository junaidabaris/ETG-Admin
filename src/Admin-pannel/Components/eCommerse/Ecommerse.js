import React from 'react'
import { AiOutlineArrowUp } from 'react-icons/ai'
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, } from 'recharts';
import Table from 'react-bootstrap/Table'
function Ecommerse() {
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
                            <h6 className='fs-5 mt-2 ml-1 text-secondary' style={{ color: '#525252' }}>Carts</h6>
                            <div className='justify-content-center d-flex'>
                                <h2>14</h2>
                            </div>
                            <div className='ml-1'>
                                <span className='fs-6 text-secondary m-0 p-0 '>$ % since last period</span>

                            </div>

                        </div>
                    </div>
                    <div className='bg-white col-md-2 m-0 p-0  border-secondary mr-3' style={{ width: '90', height: 130 }}>
                        <div className=" m-0 p-0 ">
                            <h6 className='fs-5 mt-2 ml-1 text-secondary' style={{ color: '#525252' }}>Orders</h6>
                            <div className='justify-content-center d-flex'>
                                <h2>7</h2>
                            </div>
                            <div className='ml-1'>
                                <span className='fs-6 text-secondary m-0 p-0 '><AiOutlineArrowUp />% since last period</span>

                            </div>

                        </div>
                    </div>
                    <div className='bg-white col-md-2 m-0 p-0  border-secondary mr-3' style={{ width: '90', height: 130 }}>
                        <div className=" m-0 p-0 ">
                            <h6 className='fs-5 mt-2 ml-1 text-secondary' style={{ color: '#525252' }}>Abandoned Carts</h6>
                            <div className='justify-content-center d-flex'>
                                <h2>2</h2>
                            </div>
                            <div className='ml-1'>
                                <span className='fs-6 text-secondary m-0 p-0 '>0% since last period</span>

                            </div>

                        </div>
                    </div>
                    <div className='bg-white col-md-2 m-0 p-0  border-secondary mr-3' style={{ width: '90', height: 130 }}>
                        <div className=" m-0 p-0 ">
                            <h6 className='fs-5 mt-2 ml-1 text-secondary' style={{ color: '#525252' }}>Total revenue</h6>
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
                        <h5 className='m-0 p-0' style={{ color: '#006666' }}>Invoiced</h5>
                        <hr className=' border-primary m-auto pt-2' />
                        <ScatterChart
                            width={1000}
                            height={300}

                            margin={{
                                top: 20,
                                right: 20,
                                bottom: 20,
                                left: 20,
                            }}
                        >
                            <CartesianGrid />
                            {/* <XAxis type="number" dataKey="x" name="stature" unit="cm" /> */}
                            <YAxis type="number" dataKey="y" />
                            <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                            <Scatter name="A school" data={data} fill="#8884d8" />
                        </ScatterChart>
                    </div>
                </div>

                <div className='row' style={{ marginTop: 30, marginRight: 60 }}>
                    <div className='col-md-6'>
                        <h5 className='m-0 p-0' style={{ color: '#006666' }}>Top Prducts</h5>
                        <hr className=' border-primary m-auto pt-2' />
                        <Table striped className='mt-3 border-light m-0 p-0'>
                            <thead className='m-0 p-0' >
                                <tr>
                                    <th>Products</th>
                                    <th>Units</th>
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
                    <div className='col-md-6'>
                        <h5 className='m-0 p-0' style={{ color: '#006666' }}>Top Categories</h5>
                        <hr className=' border-primary m-auto pt-2' />
                        <Table striped className='mt-3 border-light m-0 p-0'>
                            <thead className='m-0 p-0' >
                                <tr className='m-0 p-0'>
                                    <th > Categories</th>
                                    <th>Units</th>


                                    <th>Revenue</th>

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


            </div>
        </div>
    )
}

export default Ecommerse
