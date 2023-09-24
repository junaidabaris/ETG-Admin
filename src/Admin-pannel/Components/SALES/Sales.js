import React from 'react'
import { AiOutlineArrowUp } from 'react-icons/ai'


import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Table from 'react-bootstrap/Table';
function Sales() {
    const data = [
        {
            name: 'Augest 2023',
            uv: 8000,

        },
        {
            name: 'September 2023',
            uv: 9000,

        },

    ];
    return (
        <>
            <div className='container' style={{ marginLeft: 60, marginRight: 60 }}>
                <div className='d-flex ' >
                    <div className='bg-white col-md-2 m-0 p-0  border-secondary mr-3' style={{ width: '90', height: 130 }}>
                        <div className=" m-0 p-0 ">
                            <h6 className='fs-5 mt-2 ml-1 ' style={{ color: '#525252' }}>Quotation</h6>
                            <div className='justify-content-center d-flex'>
                                <h3>14</h3>
                            </div>
                            <div className='ml-1'>
                                <span className='fs-6 text-success m-0 p-0 '><AiOutlineArrowUp />1,300%</span>
                                <span className='fs-6 m-0 p-0 '>since last period</span>
                            </div>

                        </div>
                    </div>
                    <div className='bg-white col-md-2 m-0 p-0  border-secondary mr-3' style={{ width: '90', height: 130 }}>
                        <div className=" m-0 p-0 ">
                            <h6 className='fs-5 mt-2 ml-1 ' style={{ color: '#525252' }}>Orders</h6>
                            <div className='justify-content-center d-flex'>
                                <h3>49</h3>
                            </div>
                            <div className='ml-1'>
                                <span className='fs-6 text-success m-0 p-0 '><AiOutlineArrowUp />%</span>
                                <span className='fs-6 m-0 p-0 '>since last period</span>
                            </div>

                        </div>
                    </div>
                    <div className='bg-white col-md-2 m-0 p-0  border-secondary mr-3' style={{ width: '90', height: 130 }}>
                        <div className=" m-0 p-0 ">
                            <h6 className='fs-5 mt-2 ml-1 ' style={{ color: '#525252' }}>Revenue</h6>
                            <div className='justify-content-center d-flex'>
                                <h3>160k</h3>
                            </div>
                            <div className='ml-1'>
                                <span className='fs-6 text-success m-0 p-0 '><AiOutlineArrowUp />%</span>
                                <span className='fs-6 m-0 p-0 '>since last period</span>
                            </div>

                        </div>
                    </div>
                    <div className='card col-md-2 m-0 p-0 mr-3' style={{ width: '90', height: 130 }}>
                        <div className="  ">
                            <h6 className='fs-5 mt-2 ml-1 ' style={{ color: '#525252' }}>Average Order</h6>
                            <div className='justify-content-center d-flex'>
                                <h3>3,410</h3>
                            </div>
                            <div className='ml-1'>
                                <span className='fs-6 text-success m-0 p-0 '><AiOutlineArrowUp />%</span>
                                <span className='fs-6 m-0 p-0 '>since last period</span>
                            </div>

                        </div>
                    </div>

                </div>
                <div className='row ' style={{ marginTop: 30, marginRight: 60 }} >
                    <div className='col-md-12 '>
                        <h5 className='m-0 p-0' style={{ color: '#006666' }}>Monthly Sales</h5>
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
                        <h4 className='m-0 p-0' style={{ color: '#006666' }}>Top  Quotations</h4>
                        <hr className=' border-primary  m-auto mt-2' />
                        <Table striped className='mt-3 border-light m-0 p-0'>
                            <thead className='m-0 p-0' >
                                <tr>
                                    <th>Quotations</th>
                                    <th>Customer</th>
                                    <th>Salesperson</th>
                                    <th>Revenue</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>0023</td>
                                    <td>Deco addict</td>
                                    <td>OdooBot</td>
                                    <td>3,664.00</td>
                                </tr>
                                <tr>
                                    <td>0023</td>
                                    <td>Deco addict</td>
                                    <td>OdooBot</td>
                                    <td>3,664.00</td>
                                </tr>
                                <tr>
                                    <td>0023</td>
                                    <td>Deco addict</td>
                                    <td>OdooBot</td>
                                    <td>3,664.00</td>
                                </tr>
                                <tr>
                                    <td>0023</td>
                                    <td>Deco addict</td>
                                    <td>OdooBot</td>
                                    <td>3,664.00</td>
                                </tr>
                                <tr>
                                    <td>0023</td>
                                    <td>Deco addict</td>
                                    <td>OdooBot</td>
                                    <td>3,664.00</td>
                                </tr>

                            </tbody>
                        </Table>
                    </div>
                    <div className='col-md-6'>
                        <h4 className='m-0 p-0' style={{ color: '#006666' }}>Top  Sales Orders</h4>
                        <hr className=' border-primary m-auto mt-2' />
                        <Table striped className='mt-3 border-light m-0 p-0'>
                            <thead className='m-0 p-0' >
                                <tr>
                                    <th>Order</th>
                                    <th>Customer</th>
                                    <th>Salesperson</th>
                                    <th>Revenue</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>0023</td>
                                    <td>Ready mat</td>
                                    <td>OdooBot</td>
                                    <td>3,664.00</td>
                                </tr>
                                <tr>
                                    <td>0023</td>
                                    <td>Deco addict</td>
                                    <td>OdooBot</td>
                                    <td>3,664.00</td>
                                </tr>
                                <tr>
                                    <td>0023</td>
                                    <td>Deco addict</td>
                                    <td>OdooBot</td>
                                    <td>3,664.00</td>
                                </tr>
                                <tr>
                                    <td>0023</td>
                                    <td>Deco addict</td>
                                    <td>OdooBot</td>
                                    <td>3,664.00</td>
                                </tr>
                                <tr>
                                    <td>0023</td>
                                    <td>Deco addict</td>
                                    <td>OdooBot</td>
                                    <td>3,664.00</td>
                                </tr>

                            </tbody>
                        </Table>
                    </div>

                </div>
                <div className='row' style={{ marginTop: 30, marginRight: 60 }}>
                    <div className='col-md-6'>
                        <h4 className='m-0 p-0' style={{ color: '#006666' }}>Top  Countries</h4>
                        <hr className=' border-primary m-auto mt-2' />
                        <Table striped className='mt-3 border-light m-0 p-0'>
                            <thead className='m-0 p-0' >
                                <tr className='m-0 p-0'>
                                    <th >Country</th>
                                    <th>Order</th>

                                    <th>Revenue</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr >
                                    <td>0023</td>
                                    <td>49</td>

                                    <td>3,664.00</td>
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
                    <div className='col-md-6'>
                        <h4 className='m-0 p-0' style={{ color: '#006666' }}>Top Products</h4>
                        <hr className=' border-primary m-auto mt-2' />
                        <Table striped className='mt-3 border-light m-0 p-0'>
                            <thead className='m-0 p-0' >
                                <tr>
                                    <th>Product</th>
                                    <th>Orders</th>
                                    <th>Revenue</th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Cusomer Care</td>
                                    <td>3</td>

                                    <td>3,664.00</td>
                                </tr>
                                <tr>
                                    <td>IT </td>
                                    <td>3</td>

                                    <td>3,664.00</td>
                                </tr>
                                <tr>
                                    <td>0023</td>
                                    <td>Deco addict</td>

                                    <td>3,664.00</td>
                                </tr>
                                <tr>
                                    <td>0023</td>

                                    <td>OdooBot</td>
                                    <td>3,664.00</td>
                                </tr>
                                <tr>
                                    <td>0023</td>
                                    <td>Deco addict</td>

                                    <td>3,664.00</td>
                                </tr>

                            </tbody>
                        </Table>
                    </div>

                </div>
                <div className='row' style={{ marginTop: 30, marginRight: 60 }}>
                    <div className='col-md-6'>
                        <h4 className='m-0 p-0' style={{ color: '#006666' }}>Top  Customers</h4>
                        <hr className=' border-primary m-auto mt-2' />
                        <Table striped className='mt-3 border-light m-0 p-0'>
                            <thead className='m-0 p-0' >
                                <tr>

                                    <th>Customer</th>
                                    <th>Order</th>
                                    <th>Revenue</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Ready mat</td>
                                    <td>OdooBot</td>
                                    <td>3,664.00</td>
                                </tr>
                                <tr>

                                    <td>Deco addict</td>
                                    <td>OdooBot</td>
                                    <td>3,664.00</td>
                                </tr>
                                <tr>

                                    <td>Deco addict</td>
                                    <td>OdooBot</td>
                                    <td>3,664.00</td>
                                </tr>
                                <tr>
                                    <td>Deco addict</td>
                                    <td>OdooBot</td>
                                    <td>3,664.00</td>
                                </tr>
                                <tr>

                                    <td>Deco addict</td>
                                    <td>OdooBot</td>
                                    <td>3,664.00</td>
                                </tr>
                                <tr>

                                    <td>Deco addict</td>
                                    <td>OdooBot</td>
                                    <td>3,664.00</td>
                                </tr>

                            </tbody>
                        </Table>
                    </div>
                    <div className='col-md-6'>
                        <h4 className='m-0 p-0' style={{ color: '#006666' }}>Top  Categories</h4>
                        <hr className=' border-primary m-auto mt-2' />
                        <Table striped className='mt-3 border-light m-0 p-0'>
                            <thead className='m-0 p-0' >
                                <tr>

                                    <th>Category</th>
                                    <th>Order</th>

                                    <th>Revenue</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>

                                    <td>All / Salable/service</td>
                                    <td>OdooBot</td>
                                    <td>3,664.00</td>
                                </tr>
                                <tr>

                                    <td>Deco addict</td>
                                    <td>OdooBot</td>
                                    <td>3,664.00</td>
                                </tr>
                                <tr>

                                    <td>Deco addict</td>
                                    <td>OdooBot</td>
                                    <td>3,664.00</td>
                                </tr>
                                <tr>

                                    <td>Deco addict</td>
                                    <td>OdooBot</td>
                                    <td>3,664.00</td>
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
                <div className='row' style={{ marginTop: 30, marginRight: 60 }}>
                    <div className='col-md-6'>
                        <h4 className='m-0 p-0' style={{ color: '#006666' }}>Top  Sales Teams</h4>
                        <hr className=' border-primary m-auto mt-2' />
                        <Table striped className='mt-3 border-light m-0 p-0'>
                            <thead className='m-0 p-0' >
                                <tr className='m-0 p-0'>
                                    <th >Sales Team</th>
                                    <th>Order</th>

                                    <th>Revenue</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr >
                                    <td>Sales</td>
                                    <td>49</td>

                                    <td>3,664.00</td>
                                </tr>
                                <tr>
                                    <td>website</td>
                                    <td>10</td>
                                    <td>4,664.00</td>

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
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>

                                </tr>
                            </tbody>
                        </Table>
                    </div>
                    <div className='col-md-6'>
                        <h4 className='m-0 p-0' style={{ color: '#006666' }}>Top Salespeople</h4>
                        <hr className=' border-primary m-auto mt-2' />
                        <Table striped className='mt-3 border-light m-0 p-0'>
                            <thead className='m-0 p-0' >
                                <tr>
                                    <th>Salesperson</th>
                                    <th>Orders</th>
                                    <th>Revenue</th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Michel Admin</td>
                                    <td>3</td>

                                    <td>3,664.00</td>
                                </tr>
                                <tr>
                                    <td>Marco demo </td>
                                    <td>3</td>

                                    <td>3,664.00</td>
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
                                <tr>
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
                        <h4 className='m-0 p-0' style={{ color: '#006666' }}>Top  Sourses</h4>
                        <hr className=' border-primary m-auto mt-2' />
                        <Table striped className='mt-3 border-light m-0 p-0'>
                            <thead className='m-0 p-0' >
                                <tr className='m-0 p-0'>
                                    <th >Sourse</th>
                                    <th>Orders</th>

                                    <th>Revenue</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr >
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
                                <tr>
                                    <td>#ERROR</td>
                                    <td>#ERROR</td>
                                    <td>#ERROR</td>

                                </tr>



                            </tbody>
                        </Table>
                    </div>
                    <div className='col-md-6'>
                        <h4 className='m-0 p-0' style={{ color: '#006666' }}>Top Mediums</h4>
                        <hr className=' border-primary m-auto mt-2' />
                        <Table striped className='mt-3 border-light m-0 p-0'>
                            <thead className='m-0 p-0' >
                                <tr>
                                    <th>Mediums</th>
                                    <th>Orders</th>
                                    <th>Revenue</th>

                                </tr>
                            </thead>
                            <tbody>
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

export default Sales
