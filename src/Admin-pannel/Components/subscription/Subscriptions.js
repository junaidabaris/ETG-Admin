import React from 'react'
import { AiOutlineArrowUp } from 'react-icons/ai'
import { BarChart, Area, XAxis, Bar, AreaChart, YAxis, CartesianGrid, Tooltip, } from 'recharts';
import Table from 'react-bootstrap/Table'
function Subscriptions() {
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
                            <h6 className='fs-5 mt-2 ml-1 text-secondary' style={{ color: '#525252' }}>Monthly Rec Rev</h6>
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
                            <h6 className='fs-5 mt-2 ml-1 text-secondary' style={{ color: '#525252' }}>New MRR</h6>
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
                            <h6 className='fs-5 mt-2 ml-1 text-secondary' style={{ color: '#525252' }}>Subscriptions</h6>
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
                            <h6 className='fs-5 mt-2 ml-1 text-secondary' style={{ color: '#525252' }}>Churn</h6>
                            <div className='justify-content-center d-flex'>
                                <h2>50.00%</h2>
                            </div>
                            <div className='ml-1'>
                                <span className='fs-5 text-secondary m-0 p-0 '><AiOutlineArrowUp />-$60 MRR</span>

                            </div>

                        </div>
                    </div>
                    <div className='bg-white col-md-2 m-0 p-0  border-secondary mr-3' style={{ width: '90', height: 130 }}>
                        <div className=" m-0 p-0 ">
                            <h6 className='fs-5 mt-2 ml-1 text-secondary' style={{ color: '#525252' }}>Cust Lifetime</h6>
                            <div className='justify-content-center d-flex'>
                                <h2>2.00</h2>
                            </div>
                            <div className='ml-1'>
                                <span className='fs-6 text-primary m-0 p-0 '>$87 sice last period</span>

                            </div>

                        </div>
                    </div>

                </div>
                <div className='row ' style={{ marginTop: 30, marginRight: 60 }} >
                    <div className='col-md-12 '>
                        <h5 className='m-0 p-0' style={{ color: '#006666' }}>Monthly recurring revenue</h5>
                        <hr className=' border-primary m-auto pt-2' />

                        <AreaChart
                            width={1000}
                            height={250}
                            data={data}
                            margin={{
                                top: 10,
                                right: 30,
                                left: 0,
                                bottom: 0,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Area type="line" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
                        </AreaChart>

                    </div>
                </div>
                <div className='row ' style={{ marginTop: 30, marginRight: 60 }} >
                    <div className='col-md-12 '>
                        <h5 className='m-0 p-0' style={{ color: '#006666' }}>Monthly Growth</h5>
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
                    <div className='col-md-6'>
                        <h4 className='m-0 p-0' style={{ color: '#006666' }}>Top Quotations</h4>
                        <hr className=' border-primary m-auto mt-2' />
                        <Table striped className='mt-3 border-light m-0 p-0'>
                            <thead className='m-0 p-0' >
                                <tr className='m-0 p-0'>
                                    <th >Quotes</th>
                                    <th>Customer</th>

                                    <th>Salesperson</th>
                                    <th>MRR</th>
                                </tr>
                            </thead>
                            <tbody>

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
                    <div className='col-md-6'>
                        <h4 className='m-0 p-0' style={{ color: '#006666' }}>Top Subcriptions</h4>
                        <hr className=' border-primary m-auto mt-2' />
                        <Table striped className='mt-3 border-light m-0 p-0'>
                            <thead className='m-0 p-0' >
                                <tr>
                                    <th>Subscriptions</th>
                                    <th>Customer</th>
                                    <th>Salesperson</th>
                                    <th>MRR</th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr >
                                    <td>Projector</td>
                                    <td>21</td>

                                    <td>492</td>
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

                </div>
                <div className='row' style={{ marginTop: 30, marginRight: 60 }}>
                    <div className='col-md-6'>
                        <h4 className='m-0 p-0' style={{ color: '#006666' }}>Top Plan</h4>
                        <hr className=' border-primary m-auto mt-2' />
                        <Table striped className='mt-3 border-light m-0 p-0'>
                            <thead className='m-0 p-0' >
                                <tr className='m-0 p-0'>
                                    <th >Plan</th>
                                    <th>Subscriptions</th>


                                    <th>MRR</th>
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
                                    <th>Product</th>
                                    <th>Subcriptions</th>

                                    <th>MRR</th>

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
        </>
    )
}

export default Subscriptions
