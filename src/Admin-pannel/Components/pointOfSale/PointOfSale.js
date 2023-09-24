import React from 'react'
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Table from 'react-bootstrap/Table'
function PointOfSale() {
    const data = [
        {
            name: 'IT Technical maintain',
            uv: 0,

        },
        {
            name: 'Senior Architect',
            uv: 0.1
        },
        {
            name: 'Developer',
            uv: 0.2
        },
        {
            name: 'Page D',
            uv: 0.3,

        },
        {
            name: 'Page E',
            uv: 0.4,

        },
        {
            name: 'Page F',
            uv: 0.5,

        },
        {
            name: 'Page G',
            uv: 0.6,

        },
        {
            name: 'Page G',
            uv: 0.7,

        },
        {
            name: 'Page G',
            uv: 0.8,

        },
        {
            name: 'Page G',
            uv: 0.9,

        },
        {
            name: 'Page G',
            uv: 1.0,

        },

    ];
    return (
        <>
            <div className='container' style={{ marginLeft: 60, marginRight: 60 }}>
                <div className='d-flex ' >
                    <div className='bg-white col-md-3 m-0 p-0  border-secondary mr-3' style={{ width: '90', height: 130 }}>
                        <div className=" m-0 p-0 ">
                            <h6 className='fs-5 mt-2 ml-1 ' style={{ color: '#525252' }}>Orders</h6>
                            <div className='justify-content-center d-flex'>
                                <h2>0</h2>
                            </div>
                            <div className='ml-1'>
                                <span className='fs-4 text-success m-0 p-0 '>0%</span>
                                <span className='fs-5 m-0 p-0 '>since last period</span>
                            </div>

                        </div>
                    </div>
                    <div className='bg-white col-md-3 m-0 p-0  border-secondary mr-3' style={{ width: '90', height: 130 }}>
                        <div className=" m-0 p-0 ">
                            <h6 className='fs-5 mt-2 ml-1 ' style={{ color: '#525252' }}>Revenue</h6>
                            <div className='justify-content-center d-flex'>
                                <h3>0</h3>
                            </div>
                            <div className='ml-1'>
                                <span className='fs-4 text-success m-0 p-0 '>0%</span>
                                <span className='fs-5 m-0 p-0 '>since last period</span>
                            </div>

                        </div>
                    </div>
                    <div className='bg-white col-md-3 m-0 p-0  border-secondary mr-3' style={{ width: '90', height: 130 }}>
                        <div className=" m-0 p-0 ">
                            <h6 className='fs-5 mt-2 ml-1 ' style={{ color: '#525252' }}>Average Order</h6>
                            <div className='justify-content-center d-flex'>
                                <h3>0</h3>
                            </div>
                            <div className='ml-1'>
                                <span className='fs-4 text-success m-0 p-0 '>0%</span>
                                <span className='fs-5 m-0 p-0 '>since last period</span>
                            </div>

                        </div>
                    </div>


                </div>
                <div className='row ' style={{ marginTop: 30, marginRight: 60 }} >
                    <div className='col-md-12 '>
                        <h5 className='m-0 p-0' style={{ color: '#006666' }}>Order by Month</h5>
                        <hr className=' border-primary m-auto pt-2' />
                        <BarChart width={1000} height={300} data={data} >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="" />
                            <YAxis dataKey='uv' />
                            <Tooltip />
                            <Legend />
                        </BarChart>
                    </div>
                </div>
                <div className='row' style={{ marginTop: 30, marginRight: 60 }}>
                    <div className='col-md-12'>
                        <h4 className='m-0 p-0' style={{ color: '#006666' }}>Best Selling Products</h4>
                        <hr className=' border-primary m-auto mt-2' />
                        <Table striped className='mt-3 border-light m-0 p-0'>
                            <thead className='m-0 p-0' >
                                <tr className='m-0 p-0'>
                                    <th >Order</th>
                                    <th>Sessions</th>

                                    <th>Point of Sale</th>
                                    <th>Date</th>
                                    <th>Customer</th>
                                    <th>Employee</th>
                                    <th>Total</th>

                                </tr>
                            </thead>
                            <tbody>


                                <tr>
                                    <td></td>
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
                                    <td></td>

                                </tr>
                                <tr>
                                    <td></td>
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
                                    <td></td>

                                </tr>
                                <tr>
                                    <td></td>
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
                                    <td></td>

                                </tr>
                                <tr>
                                    <td></td>
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
                <div className='row' style={{ marginTop: 30, marginRight: 60 }}>
                    <div className='col-md-6'>
                        <h4 className='m-0 p-0' style={{ color: '#006666' }}>Top Sessions</h4>
                        <hr className=' border-primary m-auto mt-2' />
                        <Table striped className='mt-3 border-light m-0 p-0'>
                            <thead className='m-0 p-0' >
                                <tr className='m-0 p-0'>
                                    <th >Session</th>
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
                    <div className='col-md-6'>
                        <h4 className='m-0 p-0' style={{ color: '#006666' }}>Top Point Of Sale</h4>
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
                <div className='row' style={{ marginTop: 30, marginRight: 60 }}>
                    <div className='col-md-6'>
                        <h4 className='m-0 p-0' style={{ color: '#006666' }}>Top Responsibles</h4>
                        <hr className=' border-primary m-auto mt-2' />
                        <Table striped className='mt-3 border-light m-0 p-0'>
                            <thead className='m-0 p-0' >
                                <tr className='m-0 p-0'>
                                    <th >Responsibles</th>
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
                    <div className='col-md-6'>
                        <h4 className='m-0 p-0' style={{ color: '#006666' }}>Top Products</h4>
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

export default PointOfSale
