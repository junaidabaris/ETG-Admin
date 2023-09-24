
import React from "react";
import { Table } from "react-bootstrap";
import { AiOutlineArrowUp } from 'react-icons/ai'
import { PieChart, Pie, } from 'recharts';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function ProjectDashBords(){
    const data = [
        {
          name: 'New',
          uv: 33,
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
      const data01 = [
        { name: 'Group A', value: 400 },
        { name: 'Group B', value: 300 },
        { name: 'Group C', value: 300 },
        { name: 'Group D', value: 200 },
        { name: 'Group E', value: 278 },
        { name: 'Group F', value: 189 },
      ];
      const data02 = [
        { name: 'Group A', value: 2400 },
        { name: 'Group B', value: 4567 },
        { name: 'Group C', value: 1398 },
        { name: 'Group D', value: 9800 },
        { name: 'Group E', value: 3908 },
        { name: 'Group F', value: 4800 },
      ];
    return(
        <>
        <div className="container" style={{ marginLeft: 60, marginRight: 60 }}>
            <div className="d-flex">
            <div className='bg-white col-md-2 m-0 p-0  border-secondary mr-3' style={{ width: '90', height: 130 }}>
                        <div className=" m-0 p-0 ">
                            <h6 className='fs-5 mt-2 ml-1 ' style={{ color: '#525252' }}>Tasks</h6>
                            <div className='justify-content-center d-flex'>
                                <h1>86</h1>
                            </div>
                            {/* <div className='ml-1'>
                                <span className='fs-6 text-success m-0 p-0 '><AiOutlineArrowUp />1,300%</span>
                                <span className='fs-6 m-0 p-0 '>since last period</span>
                            </div> */}

                        </div>
                    </div>
                    <div className='bg-white col-md-2 m-0 p-0  border-secondary mr-3' style={{ width: '90', height: 130 }}>
                        <div className=" m-0 p-0 ">
                            <h6 className='fs-5 mt-2 ml-1 ' style={{ color: '#525252' }}>Hours Logged</h6>
                            <div className='justify-content-center d-flex'>
                                <h3>1069</h3>
                            </div>
                            <div className='ml-1'>
                                <span className='fs-6 text-success m-0 p-0 '><AiOutlineArrowUp />%</span>
                                <span className='fs-6 m-0 p-0 '>since last period</span>
                            </div>

                        </div>
                    </div>
                    <div className='bg-white col-md-2 m-0 p-0  border-secondary mr-3' style={{ width: '90', height: 130 }}>
                        <div className=" m-0 p-0 ">
                            <h6 className='fs-5 mt-2 ml-1 ' style={{ color: '#525252' }}>Time  to Assign</h6>
                            <div className='justify-content-center d-flex'>
                                <h3>22 days</h3>
                            </div>
                            <div className='ml-1'>
                               
                                <span className='fs-4 m-0 p-0 ml-3'>0 last period</span>
                            </div>

                        </div>
                    </div>
                    <div className='card col-md-2 m-0 p-0 mr-3' style={{ width: '90', height: 130 }}>
                        <div className="  ">
                            <h6 className='fs-5 mt-2 ml-1 ' style={{ color: '#525252' }}>Time  to Assign</h6>
                            <div className='justify-content-center d-flex'>
                                <h3>10 days</h3>
                            </div>
                            <div className='ml-1'>
                                
                                <span className='fs-4 m-0 p-0 ml-3'>0 last period</span>
                            </div>

                        </div>
                    </div>




            </div>
            <div className="d-flex">
                <div className="col-md-4"style={{ marginTop: 30, marginRight: 60 }}>
                <h5 className='m-0 p-0' style={{ color: '#006666' }}>Task By Stages</h5>
                        <hr className=' border-primary m-auto pt-2' />
                        
        <BarChart
          width={300}
          height={300}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" stackId="a" fill="#8884d8" />
          <Bar dataKey="uv" stackId="a" fill="#82ca9d" />
        </BarChart>
      
                </div>
                <div className="col-md-6"style={{ marginTop: 30, marginRight: 60 }}>
                <h5 className='m-0 p-0' style={{ color: '#006666' }}>Task By State</h5>
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
          <Pie dataKey="value" data={data02} cx={500} cy={200} innerRadius={40} outerRadius={80} fill="#82ca9d" />
          <Tooltip />
        </PieChart>
        
      
                </div>

            </div>
            <div className="d-flex">
            <div className="col-md-5"style={{ marginTop: 30, marginRight: 60 }}>
                <h5 className='m-0 p-0' style={{ color: '#006666' }}>Top Assignees</h5>
                        <hr className=' border-primary m-auto pt-2' />
                        <Table striped className='mt-3 border-light m-0 p-0'>
                            <thead className='m-0 p-0' >
                                <tr className='m-0 p-0'>
                                    <th >Assignees</th>
                                    <th>Hours Logged</th>

                                    <th>Task</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr >
                                    <td>Mitchell Admin</td>
                                    <td>665</td>

                                    <td>41</td>
                                </tr>
                                <tr>
                                    <td>Nars Demo</td>
                                    <td>295</td>
                                    <td>16</td>

                                </tr>
                                <tr>
                                    <td>Joel Wills</td>
                                    <td></td>
                                    <td>5</td>

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
            <div className="col-md-5"style={{ marginTop: 30, marginRight: 60 }}>
                <h5 className='m-0 p-0' style={{ color: '#006666' }}>Top Projects</h5>
                        <hr className=' border-primary m-auto pt-2' />
                        <Table striped className='mt-3 border-light m-0 p-0'>
                            <thead className='m-0 p-0' >
                                <tr className='m-0 p-0'>
                                    <th >Project</th>
                                    <th>Hours Logged</th>

                                    <th>Task</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr >
                                    <td>Field Services</td>
                                    <td></td>

                                    <td>23</td>
                                </tr>
                                <tr>
                                    <td>Office Design</td>
                                    <td>341</td>
                                    <td>18</td>

                                </tr>
                                <tr>
                                    <td>Agr Sales Order</td>
                                    <td>287</td>
                                    <td>12</td>

                                </tr>
                                <tr>
                                    <td>Renovations</td>
                                    <td>5</td>
                                    <td>4</td>

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
                <h5 className='m-0 p-0' style={{ color: '#006666' }}>Top Tags</h5>
                        <hr className=' border-primary m-auto pt-2' />
                        <Table striped className='mt-3 border-light m-0 p-0'>
                            <thead className='m-0 p-0' >
                                <tr className='m-0 p-0'>
                                    <th >Tags</th>
                                    <th>Hours Logged</th>

                                    <th>Task</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr >
                                    <td>New Features</td>
                                    <td>137</td>

                                    <td>4</td>
                                </tr>
                                <tr>
                                    <td>Experiment</td>
                                    <td>61</td>
                                    <td>2</td>

                                </tr>
                                <tr>
                                    <td>Usability</td>
                                    <td>42</td>
                                    <td>2</td>

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
            <div className="col-md-5"style={{ marginTop: 30, marginRight: 60 }}>
                <h5 className='m-0 p-0' style={{ color: '#006666' }}>Top Customers</h5>
                        <hr className=' border-primary m-auto pt-2' />
                        <Table striped className='mt-3 border-light m-0 p-0'>
                            <thead className='m-0 p-0' >
                                <tr className='m-0 p-0'>
                                    <th >Project</th>
                                    <th>Hours Logged</th>

                                    <th>Task</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr >
                                    <td>Field Services</td>
                                    <td></td>

                                    <td>23</td>
                                </tr>
                                <tr>
                                    <td>Office Design</td>
                                    <td>341</td>
                                    <td>18</td>

                                </tr>
                                <tr>
                                    <td>Agr Sales Order</td>
                                    <td>287</td>
                                    <td>12</td>

                                </tr>
                                <tr>
                                    <td>Renovations</td>
                                    <td>5</td>
                                    <td>4</td>

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
export default ProjectDashBords