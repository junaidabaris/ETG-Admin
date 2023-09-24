import React from "react";
import { Table } from "react-bootstrap";
import {AiOutlineArrowUp } from "react-icons/ai"
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
function Marketings(){
    const data = [
        {
          name: 'Booked',
         
          pv: 1.0,
          amt: 1.0,
        },
        {
          name: 'Ended',
          
          pv: 1.0,
          amt: 1.0,
        },
        
       
       
      ];
    const data1 = [
        {
          name: 'Attended',
         
          pv: 2.0,
          amt: 5,
        },
        {
          name: 'Confirmed',
          
          pv: 5,
          amt: 5,
        },
        
       
       
      ];
    return(
        <>
        <div className="container" style={{ marginLeft: 60, marginRight: 60 }}>
        <div className="d-flex">
            <div className='bg-white col-md-2 m-0 p-0  border-secondary mr-3' style={{ width: '100', height: 130 }}>
                        <div className=" m-0 p-0 ">
                            <h6 className='fs-5 mt-2 ml-1 ' style={{ color: '#525252' }}>Events</h6>
                            <div className='justify-content-center d-flex'>
                                <h1>2</h1>
                            </div>
                            <div className='ml-1'>
                                <span className='fs-6 text-success m-0 p-0 '><AiOutlineArrowUp />∞ %</span>
                                <span className='fs-6 m-0 p-0 '>since last period</span>
                            </div>

                        </div>
                    </div>
                    <div className='bg-white col-md-2 m-0 p-0  border-secondary mr-3' style={{ width: '90', height: 130 }}>
                        <div className=" m-0 p-0 ">
                            <h6 className='fs-5 mt-2 ml-1 ' style={{ color: '#525252' }}>Revenue</h6>
                            <div className='justify-content-center d-flex'>
                                <h3>1497</h3>
                            </div>
                            <div className='ml-1'>
                                <span className='fs-6 text-success m-0 p-0 '><AiOutlineArrowUp />∞ %</span>
                                <span className='fs-6 m-0 p-0 '> since last period</span>
                            </div>

                        </div>
                    </div>
                    <div className='bg-white col-md-2 m-0 p-0  border-secondary mr-3' style={{ width: '90', height: 130 }}>
                        <div className=" m-0 p-0 ">
                            <h6 className='fs-5 mt-2 ml-1 ' style={{ color: '#525252' }}>Attendees</h6>
                            <div className='justify-content-center d-flex'>
                                <h3>7</h3>
                            </div>
                            <div className='ml-1'>
                            <span className='fs-6 text-success m-0 p-0 '><AiOutlineArrowUp />∞ %</span>
                                <span className='fs-6 m-0 p-0 ml-3'>Since last period</span>
                            </div>

                        </div>
                    </div>
                   




            </div>
            <div className="d-flex">
            <div className="col-md-4"style={{ marginTop: 30, marginRight: 60 }}>
                <h5 className='m-0 p-0' style={{ color: '#006666' }}>Event Status</h5>
                        <hr className=' border-primary m-auto pt-2' />
                        <BarChart
          width={400}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 0,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="10" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" fill="#8884d8" />
          
        </BarChart> 
                        </div>
            <div className="col-md-4"style={{ marginTop: 30, marginRight: 60 }}>
                <h5 className='m-0 p-0' style={{ color: '#006666' }}>Registration Status</h5>
                        <hr className=' border-primary m-auto pt-2' />
                        <BarChart
          width={400}
          height={300}
          data={data1}
          margin={{
            top: 5,
            right: 30,
            left: 0,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="10" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" fill="#8884d8" />
          
        </BarChart> 
                        </div>

            </div>
            <div className="d-flex">
            <div className="col-md-5"style={{ marginTop: 30, marginRight: 60 }}>
                <h5 className='m-0 p-0' style={{ color: '#006666' }}>Top Venues</h5>
                        <hr className=' border-primary m-auto pt-2' />
                        <Table striped className='mt-3 border-light m-0 p-0'>
                            <thead className='m-0 p-0' >
                                <tr className='m-0 p-0'>
                                    <th >  Venue</th>
                                    <th>Event</th>

                                   
                                </tr>
                            </thead>
                            <tbody>
                                <tr >
                                    <td>Los Angeles Conventional Center</td>
                                    <td> 1</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                   

                                </tr>
                               
<tr>
                                

                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    

                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    

                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    

                                </tr>
                            </tbody>
                        </Table>


                </div>
            <div className="col-md-5"style={{ marginTop: 30, marginRight: 60 }}>
                <h5 className='m-0 p-0' style={{ color: '#006666' }}>Top Templates</h5>
                        <hr className=' border-primary m-auto pt-2' />
                        <Table striped className='mt-3 border-light m-0 p-0'>
                            <thead className='m-0 p-0' >
                                <tr className='m-0 p-0'>
                                    <th >  Template</th>
                                    <th>Event</th>

                                   
                                </tr>
                            </thead>
                            <tbody>
                                <tr >
                                    <td>Exibition</td>
                                    <td> 1</td>
                                </tr>
                                <tr>
                                    <td>Training</td>
                                    <td>1</td>
                                   

                                </tr>
                               
<tr>
                                    

                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td></td>

                                    <td></td>
                                    
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    

                                </tr>
                                <tr>
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
                                    <th >  Tag</th>
                                    <th>Event</th>

                                   
                                </tr>
                            </thead>
                            <tbody>
                                <tr >
                                    <td>18+</td>
                                    <td> 1</td>
                                </tr>
                                <tr>
                                    <td>Culture</td>
                                    <td>1</td>
                                   

                                </tr>
                               
<tr>
                                    <td>Online</td>

                                    <td>1</td>
                                   
                                </tr>
                                <tr>
                                    <td></td>

                                    <td></td>
                                    
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                   

                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                   

                                </tr>
                            </tbody>
                        </Table>


                </div>
            <div className="col-md-5"style={{ marginTop: 30, marginRight: 60 }}>
                <h5 className='m-0 p-0' style={{ color: '#006666' }}>Top Organizers</h5>
                        <hr className=' border-primary m-auto pt-2' />
                        <Table striped className='mt-3 border-light m-0 p-0'>
                            <thead className='m-0 p-0' >
                                <tr className='m-0 p-0'>
                                    <th >  Organizer</th>
                                    <th>Event</th>

                                   
                                </tr>
                            </thead>
                            <tbody>
                                <tr >
                                    <td>Demo Company</td>
                                    <td> 2</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                   

                                </tr>
                               
<tr>
                                    
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    

                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    
                                    <td></td>
                                    <td></td>

                                </tr>
                                <tr>
                                   
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
export default Marketings