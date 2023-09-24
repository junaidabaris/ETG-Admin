import React from 'react'
import { AiOutlineArrowUp } from 'react-icons/ai'
import { BarChart, Area, XAxis, Bar, AreaChart, YAxis, CartesianGrid, Tooltip, } from 'recharts';
import Table from 'react-bootstrap/Table'
function SalesPerson() {
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
                            <h6 className='fs-5 mt-2 ml-1 text-secondary' style={{ color: '#525252' }}>New Subcriptions</h6>
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
                            <h6 className='fs-5 mt-2 ml-1 text-secondary' style={{ color: '#525252' }}>Churn</h6>
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
                            <h6 className='fs-5 mt-2 ml-1 text-secondary' style={{ color: '#525252' }}>Monthly Rec. Rev.</h6>
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
                            <h6 className='fs-5 mt-2 ml-1 text-secondary' style={{ color: '#525252' }}>Non Rec. Rev.</h6>
                            <div className='justify-content-center d-flex'>

                            </div>
                            <div className='ml-1'>
                                <span className='fs-5 text-secondary m-0 p-0 '><AiOutlineArrowUp />-$60 MRR</span>

                            </div>

                        </div>
                    </div>


                </div>

                <div className='row ' style={{ marginTop: 30, marginRight: 60 }} >
                    <div className='col-md-12 '>
                        <h5 className='m-0 p-0' style={{ color: '#006666' }}>Subcriptions</h5>


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
                        <h4 className='m-0 p-0' style={{ color: '#006666' }}>Top Churn</h4>
                        <hr className=' border-primary m-auto mt-2' />
                        <Table striped className='mt-3 border-light m-0 p-0'>
                            <thead className='m-0 p-0' >
                                <tr className='m-0 p-0'>
                                    <th >Subscriptions</th>
                                    <th>Value</th>


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
                        <h4 className='m-0 p-0' style={{ color: '#006666' }}>Top New</h4>
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
                        <h4 className='m-0 p-0' style={{ color: '#006666' }}>Top Expansion</h4>
                        <hr className=' border-primary m-auto mt-2' />
                        <Table striped className='mt-3 border-light m-0 p-0'>
                            <thead className='m-0 p-0' >
                                <tr className='m-0 p-0'>

                                    <th>Subscriptions</th>
                                    <th >Value</th>

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
                        <h4 className='m-0 p-0' style={{ color: '#006666' }}>Top Contraction</h4>
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

export default SalesPerson
