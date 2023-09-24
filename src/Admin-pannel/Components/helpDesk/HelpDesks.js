import React from "react";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { AiOutlineArrowUp } from "react-icons/ai"
import { PieChart, Pie} from 'recharts';
import { Table } from "react-bootstrap";
function HelpDesks(){
    const data01 = [
        { name: 'Quetions', value: 10 },
        { name: 'Undifined', value: 2 },
        { name: 'Issues', value: 9 },
       
      ];
      
      const data02 = [
        { name: 'Group A', value: 2400 },
        { name: 'Group B', value: 4567 },
        { name: 'Group C', value: 1398 },
        { name: 'Group D', value: 9800 },
        { name: 'Group E', value: 3908 },
        { name: 'Group F', value: 4800 },
      ];
    const data = [
        {
          name: 'New',
          uv: 5,
          pv: 3,
          amt: 10,
        },
        {
          name: 'In Progress',
          uv: 4,
          pv: 3,
          amt: 10,
        },
        {
          name: 'Solved',
          uv: 3,
          pv: 2,
          amt: 10,
        },
        {
          name: 'Cancelled',
          uv: 0,
          pv: 1,
          amt: 10,
        },
        
        
      ];
    return(
        <>
        <div className="container" style={{ marginLeft: 60, marginRight: 60 }}>
        <div className="d-flex">
            <div className='bg-white col-md-2 m-0 p-0  border-secondary mr-3' style={{ width: '100', height: 130 }}>
                        <div className=" m-0 p-0 ">
                            <h6 className='fs-5 mt-2 ml-1 ' style={{ color: '#525252' }}>Tickets</h6>
                            <div className='justify-content-center d-flex'>
                                <h1>21</h1>
                            </div>
                            <div className='ml-1'>
                                <span className='fs-6 text-success m-0 p-0 '><AiOutlineArrowUp />%</span>
                                <span className='fs-6 m-0 p-0 '>since last period</span>
                            </div>

                        </div>
                    </div>
                    <div className='bg-white col-md-2 m-0 p-0  border-secondary mr-3' style={{ width: '90', height: 130 }}>
                        <div className=" m-0 p-0 ">
                            <h6 className='fs-5 mt-2 ml-1 ' style={{ color: '#525252' }}>Rating</h6>
                            <div className='justify-content-center d-flex'>
                                <h3>3.4/5</h3>
                            </div>
                            <div className='ml-1'>
                                <span className='fs-6 text-success m-0 p-0 '><AiOutlineArrowUp />1150%</span>
                                <span className='fs-6 m-0 p-0 '>0/5 since last period</span>
                            </div>

                        </div>
                    </div>
                    <div className='bg-white col-md-2 m-0 p-0  border-secondary mr-3' style={{ width: '90', height: 130 }}>
                        <div className=" m-0 p-0 ">
                            <h6 className='fs-5 mt-2 ml-1 ' style={{ color: '#525252' }}>Time to Assign</h6>
                            <div className='justify-content-center d-flex'>
                                <h3>38 Hours</h3>
                            </div>
                            <div className='ml-1'>
                               
                                <span className='fs-4 m-0 p-0 ml-3'>0 last period</span>
                            </div>

                        </div>
                    </div>
                    <div className='card col-md-2 m-0 p-0 mr-3' style={{ width: '90', height: 130 }}>
                        <div className="  ">
                            <h6 className='fs-5 mt-2 ml-1 ' style={{ color: '#525252' }}>Time  to Respond</h6>
                            <div className='justify-content-center d-flex'>
                                <h3>0 hours</h3>
                            </div>
                            <div className='ml-1'>
                                
                                <span className='fs-4 m-0 p-0 ml-3'>0 last period</span>
                            </div>

                         </div>
                    </div> 
                    <div className='card col-md-2 m-0 p-0 mr-3' style={{ width: '90', height: 130 }}>
                        <div className="  ">
                            <h6 className='fs-5 mt-2 ml-1 ' style={{ color: '#525252' }}>Time  to Close</h6>
                            <div className='justify-content-center d-flex'>
                                <h3>28 hours</h3>
                            </div>
                            <div className='ml-1'>
                                
                                <span className='fs-4 m-0 p-0 ml-3'>0 last period</span>
                            </div>

                         </div>
                    </div> 




            </div>
            <div className="d-flex">
            <div className="col-md-4"style={{ marginTop: 30, marginRight: 60 }}>
                <h5 className='m-0 p-0' style={{ color: '#006666' }}>Ticket By Stages</h5>
                        <hr className=' border-primary m-auto pt-2' />
                        <BarChart
          width={400}
          height={300}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 5,
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
            <div className="col-md-4"style={{ marginTop: 30, marginRight: 60 }}>
                <h5 className='m-0 p-0' style={{ color: '#006666' }}>Ticket By Type</h5>
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
                <h5 className='m-0 p-0' style={{ color: '#006666' }}>Top Agents</h5>
                        <hr className=' border-primary m-auto pt-2' />
                        <Table striped className='mt-3 border-light m-0 p-0'>
                            <thead className='m-0 p-0' >
                                <tr className='m-0 p-0'>
                                    <th >  Agent</th>
                                    <th>Tickets</th>

                                   
                                </tr>
                            </thead>
                            <tbody>
                                <tr >
                                    <td>Mitchell Admin</td>
                                    <td> 12</td>
                                </tr>
                                <tr>
                                    <td>Marc Demo</td>
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
                            </tbody>
                        </Table>


                </div>
            <div className="col-md-5"style={{ marginTop: 30, marginRight: 60 }}>
                <h5 className='m-0 p-0' style={{ color: '#006666' }}>Top Team</h5>
                        <hr className=' border-primary m-auto pt-2' />
                        <Table striped className='mt-3 border-light m-0 p-0'>
                            <thead className='m-0 p-0' >
                                <tr className='m-0 p-0'>
                                    <th >  Teams</th>
                                    <th>Tickets</th>

                                   
                                </tr>
                            </thead>
                            <tbody>
                                <tr >
                                    <td>VIP Support</td>
                                    <td> 12</td>
                                </tr>
                                <tr>
                                    <td>Customer Care</td>
                                    <td>9</td>
                                   

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
                <h5 className='m-0 p-0' style={{ color: '#006666' }}>Top Ticket Types</h5>
                        <hr className=' border-primary m-auto pt-2' />
                        <Table striped className='mt-3 border-light m-0 p-0'>
                            <thead className='m-0 p-0' >
                                <tr className='m-0 p-0'>
                                    <th >  Ticket Type </th>
                                    <th>Tickets</th>

                                   
                                </tr>
                            </thead>
                            <tbody>
                                <tr >
                                    <td>Question</td>
                                    <td> 10</td>
                                </tr>
                                <tr>
                                    <td>Issue</td>
                                    <td>9</td>
                                   

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
                <h5 className='m-0 p-0' style={{ color: '#006666' }}>Top Customer</h5>
                        <hr className=' border-primary m-auto pt-2' />
                        <Table striped className='mt-3 border-light m-0 p-0'>
                            <thead className='m-0 p-0' >
                                <tr className='m-0 p-0'>
                                    <th >  Customer</th>
                                    <th>Tickets</th>

                                   
                                </tr>
                            </thead>
                            <tbody>
                                <tr >
                                    <td>Azure Interior</td>
                                    <td> 5</td>
                                </tr>
                                <tr>
                                    <td>Demo Company</td>
                                    <td>4</td>
                                   

                                </tr>
                                <tr>
                                    <td>Deco Addit</td>
                                    <td>3</td>
                                   

                                </tr>
                                <tr>
                                    <td>Ready Mat</td>
                                    <td>3</td>
                                   

                                </tr>
                                <tr>
                                    <td>Ready Mat</td>
                                    <td>3</td>
                                   

                                </tr>
                                <tr>
                                    <td>Ready Mat</td>
                                    <td>3</td>
                                   

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
export default HelpDesks