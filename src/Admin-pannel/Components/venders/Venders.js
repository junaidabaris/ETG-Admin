import React from 'react'
import { AiOutlineArrowUp } from 'react-icons/ai'
import { BarChart, Legend, XAxis, YAxis, CartesianGrid, Tooltip, Bar, Line } from 'recharts';
import Table from 'react-bootstrap/Table'
function Venders() {
    const data = [
        {
            name: 'May 2023',
            uv: 65,

        },
        {
            name: 'June 2023',
            uv: 142,

        },
        {
            name: 'July 2023',
            uv: 142

        },
        {
            name: 'Aug 2023',
            uv: 142,

        },
        {
            name: 'Sept 2023',
            uv: 95,

        },

    ];

    return (
        <>
            <div className='container' style={{ marginLeft: 60, marginRight: 60 }}>
                <div className='d-flex ' >
                    <div className='bg-white col-md-2 m-0 p-0  border-secondary mr-3' style={{ width: '90', height: 130 }}>
                        <div className=" m-0 p-0 ">
                            <h6 className='fs-5 mt-2 ml-1 ' style={{ color: '#525252' }}>Purchased</h6>
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
                            <h6 className='fs-5 mt-2 ml-1 ' style={{ color: '#525252' }}>Lines</h6>
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
                            <h6 className='fs-5 mt-2 ml-1 ' style={{ color: '#525252' }}>Quantity ordered</h6>
                            <div className='justify-content-center d-flex'>
                                <h3>3,410</h3>
                            </div>
                            <div className='ml-1'>
                                <span className='fs-6 text-success m-0 p-0 '><AiOutlineArrowUp />%</span>
                                <span className='fs-6 m-0 p-0 '>since last period</span>
                            </div>

                        </div>
                    </div>
                    <div className='card col-md-2 m-0 p-0 mr-3' style={{ width: '90', height: 130 }}>
                        <div className="  ">
                            <h6 className='fs-5 mt-2 ml-1 ' style={{ color: '#525252' }}>Days to recieve</h6>
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

                        <BarChart width={1000} height={250} data={data}>
                            <XAxis dataKey='name' />
                            <YAxis />
                            <Tooltip />
                            <Bar dataKey="uv" fill="#8884d8" />
                        </BarChart>

                    </div>
                </div>
                <div className='row' style={{ marginTop: 30, marginRight: 60 }}>
                    <div className='col-md-8'>
                        <h4 className='m-0 p-0' style={{ color: '#006666' }}>Top  Orders</h4>
                        <hr className=' border-primary  m-auto mt-2' />
                        <Table striped className='mt-3 border-light m-0 p-0'>
                            <thead className='m-0 p-0' >
                                <tr>
                                    <th>Order</th>
                                    <th>Ordered</th>
                                    <th>Buyer</th>
                                    <th>Source</th>
                                    <th>Vendor</th>
                                    <th>Amount</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>0023</td>
                                    <td>Deco addict</td>
                                    <td>OdooBot</td>
                                    <td>OdooBot</td>
                                    <td>OdooBot</td>
                                    <td>3,664.00</td>
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
                                </tr> <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr> <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr> <tr>
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
                    <div className='col-md-4'>
                        <h4 className='m-0 p-0' style={{ color: '#006666' }}>Sourcing by Country</h4>
                        <hr className=' border-primary m-auto mt-2' />
                        <Table striped className='mt-3 border-light m-0 p-0'>
                            <thead className='m-0 p-0' >
                                <tr>
                                    <th>Country</th>
                                    <th>Orders</th>
                                    <th>Amount</th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>0023</td>
                                    <td>Ready mat</td>

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

                            </tbody>
                        </Table>
                    </div>

                </div>
                <div className='row' style={{ marginTop: 30, marginRight: 60 }}>
                    <div className='col-md-6'>
                        <h4 className='m-0 p-0' style={{ color: '#006666' }}>Top  Vendors</h4>
                        <hr className=' border-primary m-auto mt-2' />
                        <Table striped className='mt-3 border-light m-0 p-0'>
                            <thead className='m-0 p-0' >
                                <tr className='m-0 p-0'>
                                    <th >Vendor</th>
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
                        <h4 className='m-0 p-0' style={{ color: '#006666' }}>Top Buyers</h4>
                        <hr className=' border-primary m-auto mt-2' />
                        <Table striped className='mt-3 border-light m-0 p-0'>
                            <thead className='m-0 p-0' >
                                <tr>
                                    <th>Buyer</th>
                                    <th>Orders</th>
                                    <th>Amount</th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Cusomer Care</td>
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

                            </tbody>
                        </Table>
                    </div>

                </div>






            </div>
        </>
    )
}

export default Venders
