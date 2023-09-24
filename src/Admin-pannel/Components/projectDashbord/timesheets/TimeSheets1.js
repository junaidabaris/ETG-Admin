import React from "react";
import { Table } from "react-bootstrap";
import { AiOutlineArrowUp } from "react-icons/ai"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
function Timesheets1(){
    const data = [
        {
          name: 'W34 2023',
          
          pv: 0,
          amt: 140,
        },
        {
          name: 'W35 2023',
          
          pv: 32,
          amt: 140,
        },
        {
          name: 'W36 2023',
         
          pv: 56,
          amt: 140,
        },
        {
          name: 'W37 2023',
          
          pv: 130,
          amt: 140,
        },
        {
          name: 'W38 2023',
          
          pv: 85,
          amt: 130,
        },
       
      ];
    return(
        <>
       <div className="container" style={{ marginLeft: 60, marginRight: 60 }}>
       <div className="d-flex">
            <div className='bg-white col-md-2 m-0 p-0  border-secondary mr-3' style={{ width: '100', height: 130 }}>
                        <div className=" m-0 p-0 ">
                            <h6 className='fs-5 mt-2 ml-1 ' style={{ color: '#525252' }}>Billable Hours</h6>
                            <div className='justify-content-center d-flex'>
                                <h1>78</h1>
                            </div>
                            <div className='ml-1'>
                                <span className='fs-6 text-success m-0 p-0 '><AiOutlineArrowUp />%</span>
                                <span className='fs-6 m-0 p-0 '>since last period</span>
                            </div>

                        </div>
                    </div>
                    <div className='bg-white col-md-2 m-0 p-0  border-secondary mr-3' style={{ width: '90', height: 130 }}>
                        <div className=" m-0 p-0 ">
                            <h6 className='fs-5 mt-2 ml-1 ' style={{ color: '#525252' }}>Non Billable Hours</h6>
                            <div className='justify-content-center d-flex'>
                                <h3>25</h3>
                            </div>
                            <div className='ml-1'>
                                <span className='fs-6 text-success m-0 p-0 '><AiOutlineArrowUp />1150%</span>
                                <span className='fs-6 m-0 p-0 '>since last period</span>
                            </div>

                        </div>
                    </div>
                    <div className='bg-white col-md-2 m-0 p-0  border-secondary mr-3' style={{ width: '90', height: 130 }}>
                        <div className=" m-0 p-0 ">
                            <h6 className='fs-5 mt-2 ml-1 ' style={{ color: '#525252' }}>Billable Rates</h6>
                            <div className='justify-content-center d-flex'>
                                <h3>76%</h3>
                            </div>
                            <div className='ml-1'>
                               
                                <span className='fs-4 m-0 p-0 ml-3'>0% last period</span>
                            </div>

                        </div>
                    </div>
                    {/* <div className='card col-md-2 m-0 p-0 mr-3' style={{ width: '90', height: 130 }}>
                        <div className="  ">
                            <h6 className='fs-5 mt-2 ml-1 ' style={{ color: '#525252' }}>Time  to Assign</h6>
                            <div className='justify-content-center d-flex'>
                                <h3>10 days</h3>
                            </div>
                            <div className='ml-1'>
                                
                                <span className='fs-4 m-0 p-0 ml-3'>0 last period</span>
                            </div>

                        </div>
                    </div> */}




            </div>
            <div className="row">
            <div className="col-md-10"style={{ marginTop: 30, marginRight: 60 }}>
                <h5 className='m-0 p-0' style={{ color: '#006666' }}>Time Billed by week</h5>
                <hr className=' border-primary m-auto pt-2' />
                <LineChart
          width={800}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        > <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="line" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
        {/* <Line type="line" dataKey="uv" stroke="#82ca9d" /> */}
      </LineChart>
                        </div>
            </div>
            <div className="d-flex">
            <div className="col-md-5"style={{ marginTop: 30, marginRight: 60 }}>
                <h5 className='m-0 p-0' style={{ color: '#006666' }}>Top Projects</h5>
                        <hr className=' border-primary m-auto pt-2' />
                        <Table striped className='mt-3 border-light m-0 p-0'>
                            <thead className='m-0 p-0' >
                                <tr className='m-0 p-0'>
                                    <th > Project</th>
                                    <th>Hours Spent</th>

                                    <th>Hours Billed</th>
                                    <th> Billed Rate</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr >
                                    <td>Agr-S00062 Sales Order</td>
                                    <td>287</td>

                                    <td>222</td>
                                    <td>77%</td>
                                </tr>
                                <tr>
                                    <td>After Sales Services</td>
                                    <td>42</td>
                                    <td>42</td>
                                    <td>100%</td>

                                </tr>
                                <tr>
                                    <td>After Sales Services</td>
                                    <td>42</td>
                                    <td>42</td>
                                    <td>100%</td>

                                </tr>
                                <tr>
                                    <td>After Sales Services</td>
                                    <td>42</td>
                                    <td>42</td>
                                    <td>100%</td>

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
            <div className="col-md-5"style={{ marginTop: 30, marginRight: 60 }}>
                <h5 className='m-0 p-0' style={{ color: '#006666' }}>Top Task</h5>
                        <hr className=' border-primary m-auto pt-2' />
                        <Table striped className='mt-3 border-light m-0 p-0'>
                            <thead className='m-0 p-0' >
                                <tr className='m-0 p-0'>
                                    <th > Task</th>
                                    <th>Hours Spent</th>

                                    <th>Hours Billed</th>
                                    <th> Billed Rate</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr >
                                    <td>Planning</td>
                                    <td>55</td>

                                    <td>40</td>
                                    <td>73%</td>
                                </tr>
                                <tr>
                                    <td>Furniture Delivery</td>
                                    <td>45</td>
                                    <td>36</td>
                                    <td>80%</td>

                                </tr>
                                <tr>
                                    <td>Decoration</td>
                                    <td>38</td>
                                    <td>27</td>
                                    <td>71%</td>

                                </tr>
                                <tr>
                                    <td>Decoration</td>
                                    <td>38</td>
                                    <td>27</td>
                                    <td>71%</td>

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
            <div className="d-flex">
            <div className="col-md-5"style={{ marginTop: 30, marginRight: 60 }}>
                <h5 className='m-0 p-0' style={{ color: '#006666' }}>Top Departments</h5>
                        <hr className=' border-primary m-auto pt-2' />
                        <Table striped className='mt-3 border-light m-0 p-0'>
                            <thead className='m-0 p-0' >
                                <tr className='m-0 p-0'>
                                    <th > Departments</th>
                                    <th>Hours Spent</th>

                                    <th>Hours Billed</th>
                                    <th> Billed Rate</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr >
                                    <td>Research & Devlopment</td>
                                    <td>288</td>

                                    <td>98</td>
                                    <td>34%</td>
                                </tr>
                                <tr>
                                    <td>Managment</td>
                                    <td>126</td>
                                    <td>84</td>
                                    <td>67%</td>

                                </tr>
                                <tr>
                                    <td>Sales</td>
                                    <td>108</td>
                                    <td>27</td>
                                    <td>71%</td>

                                </tr>
                                <tr>
                                    <td></td>
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
            <div className="col-md-5"style={{ marginTop: 30, marginRight: 60 }}>
                <h5 className='m-0 p-0' style={{ color: '#006666' }}>Top Employees</h5>
                        <hr className=' border-primary m-auto pt-2' />
                        <Table striped className='mt-3 border-light m-0 p-0'>
                            <thead className='m-0 p-0' >
                                <tr className='m-0 p-0'>
                                    <th > Employees</th>
                                    <th>Hours Spent</th>

                                    <th>Hours Billed</th>
                                    <th> Billed Rate</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr >
                                    <td>Mitchell Admin</td>
                                    <td>103</td>

                                    <td>78</td>
                                    <td>76%</td>
                                </tr>
                                <tr>
                                    <td>Mark Demo</td>
                                    <td>103</td>
                                    <td>57</td>
                                    <td>55%</td>

                                </tr>
                                <tr>
                                    <td>Mark Demo</td>
                                    <td>103</td>
                                    <td>57</td>
                                    <td>55%</td>

                                </tr>
                                <tr>
                                    <td></td>
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
export default Timesheets1