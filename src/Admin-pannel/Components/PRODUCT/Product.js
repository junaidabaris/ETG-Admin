import React from 'react'
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Table } from 'react-bootstrap';
function Product() {
    const data = [
        {
            name: 'IT Technical maintain',
            uv: 22500,

        },
        {
            name: 'Senior Architect',
            uv: 16000,

        },
        {
            name: 'Developer',
            uv: 15000,

        },
        {
            name: 'Page D',
            uv: 12080,

        },
        {
            name: 'Page E',
            uv: 10000,

        },
        {
            name: 'Page F',
            uv: 9090,

        },
        {
            name: 'Page G',
            uv: 8090,

        },
        {
            name: 'Page G',
            uv: 7090,

        },
        {
            name: 'Page G',
            uv: 6490,

        },
        {
            name: 'Page G',
            uv: 5490,

        },
        {
            name: 'Page G',
            uv: 4490,

        },
        {
            name: 'Page G',
            uv: 3490,

        },
        {
            name: 'Page G',
            uv: 2490,

        },
        {
            name: 'Page G',
            uv: 1490,

        },
        {
            name: 'Page G',
            uv: 100,

        },
    ];
    return (
        <>
            <div className='container' style={{ marginLeft: 60, marginRight: 60 }}>
                <div className='d-flex ' >
                    <div className='bg-white col-md-5 m-0 p-0  border-secondary mr-3' style={{ width: '90', height: 130 }}>
                        <div className=" m-0 p-0 ">
                            <h6 className='fs-5 mt-2 ml-1 text-secondary ' >Best Seller</h6>

                            <div className='ml-1'>
                                <span className='fs-4  m-0 p-0 '>IT Technical Maintenance(Plan Service)</span>

                            </div>
                            <div className='justify-content-center d-flex'>
                                <span className='text-secondary'> 96 sold</span>
                            </div>

                        </div>
                    </div>
                    <div className='bg-white col-md-5 m-0 p-0  border-secondary mr-3' style={{ width: '90', height: 130 }}>
                        <div className=" m-0 p-0 ">
                            <h6 className='fs-5 mt-2 ml-1 text-secondary '>Best Category</h6>

                            <div className='ml-1 '>
                                <span className='fs-1  m-0 p-0 '>All / Saleable / Service</span>

                            </div>
                            <div className='justify-content-center d-flex '>
                                <span className='fs-4 text-secondary'>96 sold</span>
                            </div>

                        </div>
                    </div>
                </div>
                <div className='row ' style={{ marginTop: 30, marginRight: 60 }} >
                    <div className='col-md-12 '>
                        <h5 className='m-0 p-0' style={{ color: '#006666' }}>Best Seller by Revenue</h5>
                        <hr className=' border-primary m-auto pt-2' />
                        <BarChart width={1000} height={300} data={data}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="uv" fill="#8884d8" />

                        </BarChart>
                    </div>
                </div>
                <div className='row ' style={{ marginTop: 30, marginRight: 60 }} >
                    <div className='col-md-12 '>
                        <h5 className='m-0 p-0' style={{ color: '#006666' }}>Best Seller by Unit Sold</h5>
                        <hr className=' border-primary m-auto pt-2' />
                        <BarChart width={1000} height={300} data={data}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="" />
                            <YAxis dataKey='uv' />
                            <Tooltip />
                            <Legend />
                        </BarChart>
                    </div>
                </div>
                <div className='row' style={{ marginTop: 30, marginRight: 60 }}>
                    <div className='col-md-6'>
                        <h4 className='m-0 p-0' style={{ color: '#006666' }}>Best Selling Products</h4>
                        <hr className=' border-primary m-auto mt-2' />
                        <Table striped className='mt-3 border-light m-0 p-0'>
                            <thead className='m-0 p-0' >
                                <tr className='m-0 p-0'>
                                    <th >Product</th>
                                    <th>Units</th>

                                    <th>Revenue</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr >
                                    <td>IT Technical(Plan Service)</td>
                                    <td>96</td>

                                    <td>#ERROR</td>
                                </tr>
                                <tr>
                                    <td>#ERROR</td>
                                    <td>#ERROR</td>
                                    <td>#ERROR</td>

                                </tr>
                                <tr>
                                    <td>#ERROR</td>
                                    <td>#ERROR</td>
                                    <td>#ERROR</td>

                                </tr>
                                <tr>
                                    <td>#ERROR</td>
                                    <td>#ERROR</td>
                                    <td>#ERROR</td>

                                </tr>
                                <tr>
                                    <td>#ERROR</td>
                                    <td>#ERROR</td>
                                    <td>#ERROR</td>

                                </tr>



                            </tbody>
                        </Table>
                    </div>
                    <div className='col-md-6'>
                        <h4 className='m-0 p-0' style={{ color: '#006666' }}>Best Selling Categories</h4>
                        <hr className=' border-primary m-auto mt-2' />
                        <Table striped className='mt-3 border-light m-0 p-0'>
                            <thead className='m-0 p-0' >
                                <tr>
                                    <th>Category</th>
                                    <th>Units</th>
                                    <th>Revenue</th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>ALl /saleable/Services</td>
                                    <td>466</td>
                                    <td>#ERROR</td>

                                </tr>
                                <tr>
                                    <td>#ERROR</td>
                                    <td>#ERROR</td>
                                    <td>#ERROR</td>

                                </tr>
                                <tr>
                                    <td>#ERROR</td>
                                    <td>#ERROR</td>
                                    <td>#ERROR</td>

                                </tr>
                                <tr>
                                    <td>#ERROR</td>
                                    <td>#ERROR</td>
                                    <td>#ERROR</td>

                                </tr>
                                <tr>
                                    <td>#ERROR</td>
                                    <td>#ERROR</td>
                                    <td>#ERROR</td>

                                </tr>


                            </tbody>
                        </Table>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Product
